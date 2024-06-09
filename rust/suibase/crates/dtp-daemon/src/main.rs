// TODO WIP Re-enable dead_code warnings after initial development writing completed.
#![allow(dead_code)]

// main.rs does:
//  - Validate command line.
//  - Telemetry setup
//  - Top level threads started here. These runs until the program terminates:
//     - AdminController: The "leader" thread validating and applying the config changes and user actions.
//     - Dispatcher: Create and manage DTP connections. Parent of ConnectionWorker(s), ServerWorker(s), WebSocketWorker(s).
//     - APIServer: Does "sandboxing" of the JSON-RPC server (auto-restart in case of panic).
//     - ClockTrigger: Send periodic audit events to other threads.
//
// Other threads (not started here):
//
//  - WorkdirsWatcher:    Watch for changes to config files in the suibase workdirs. Send events to AdminController.
//                        Started/stopped by the AdminController.
//
//  - ShellWorker:        Perform external calls to Suibase command line. One instance per workdir (by design, will
//                        serialize all command execution). Started/stopped by the AdminController.
//
//  - WebSocketWorker:    Manage subscribe/unsubscribe and receiving Sui events for a single connection. Forwards
//                        subscribed sui events to its parent EventsWriterWorker for dedup. Uses tokio-tungstenite.
//
//  - ConnectionWorker:   Manage a single DTP connection.
//
use anyhow::Result;

use api::APIServerParams;
use clap::*;

use clock_trigger::{ClockTrigger, ClockTriggerParams};
use colored::Colorize;
use common::basic_types::MPSC_Q_SIZE;
use env_logger::{Builder, Env};

mod admin_controller;
mod api;
mod app_error;

mod clock_trigger;
mod network_monitor;
mod proxy_server;
mod shared_types;
mod workdirs_watcher;
mod workers;

use shared_types::Globals;
use tokio::time::Duration;

use crate::admin_controller::AdminController;
use crate::api::APIServer;
use crate::network_monitor::NetworkMonitor;
use tokio_graceful_shutdown::{
    errors::{GracefulShutdownError, SubsystemError},
    SubsystemBuilder, Toplevel,
};

#[allow(clippy::large_enum_variant)]
#[derive(Parser)]
#[clap(
    name = "dtp-daemon",
    about = "Decentralized Transport Protocol (DTP) Services",
    rename_all = "kebab-case",
    author,
    version
)]
pub enum Command {
    #[clap(name = "run")]
    Run {},
}

impl Command {
    pub async fn execute(self, globals: Globals) -> Result<(), anyhow::Error> {
        match self {
            Command::Run {} => {
                // Create mpsc channels (internal messaging between threads).
                //
                // The AdminController handles events about configuration changes
                //
                let (admctrl_tx, admctrl_rx) = tokio::sync::mpsc::channel(MPSC_Q_SIZE);
                let (netmon_tx, netmon_rx) = tokio::sync::mpsc::channel(MPSC_Q_SIZE);

                // Instantiate and connect all subsystems (while none is "running" yet).
                let admctrl = AdminController::new(
                    globals.clone(),
                    admctrl_rx,
                    admctrl_tx.clone(),
                    netmon_tx.clone(),
                );

                let netmon =
                    NetworkMonitor::new(globals.proxy.clone(), netmon_rx, netmon_tx.clone());

                let apiserver_params = APIServerParams::new(globals.clone(), admctrl_tx.clone());
                let apiserver = APIServer::new(apiserver_params);

                let clock_params = ClockTriggerParams::new(netmon_tx.clone(), admctrl_tx.clone());
                let clock: ClockTrigger = ClockTrigger::new(clock_params);

                // Start all top levels subsystems.
                let errors = Toplevel::new(|s| async move {
                    s.start(SubsystemBuilder::new("admctrl", |a| admctrl.run(a)));
                    s.start(SubsystemBuilder::new("netmon", |a| netmon.run(a)));
                    s.start(SubsystemBuilder::new("clock", |a| clock.run(a)));
                    s.start(SubsystemBuilder::new("apiserver", |a| apiserver.run(a)));
                })
                .catch_signals()
                .handle_shutdown_requests(Duration::from_millis(1000))
                .await;

                if let Err(e) = &errors {
                    match e {
                        GracefulShutdownError::SubsystemsFailed(_) => {
                            log::error!("subsystems failed.")
                        }
                        GracefulShutdownError::ShutdownTimeout(_) => {
                            log::warn!("shutdown timed out.")
                        }
                    };

                    for subsystem_error in e.get_subsystem_errors() {
                        match subsystem_error {
                            SubsystemError::Failed(name, _e) => {
                                log::error!("   subsystem '{}' failed.", name);
                                /* TODO
                                match e.get_error() {
                                    SuibaseError::InternalError(data) => {
                                        log::error!("      Failed with SuibaseError::InternalError::WithData({})", data)
                                    }
                                }*/
                            }

                            SubsystemError::Panicked(name) => {
                                log::error!("   subsystem '{}' panicked.", name)
                            }
                        }
                    }
                }
                Ok(errors?)
            } // end Command::Run
        }
    }
} // end of Command

#[tokio::main]
async fn main() {
    // Allocate the globals "singleton".
    //
    // Globals are cloned by reference count.
    //
    // Keep a reference in main() so they will never get "deleted"
    // until the end of the program.
    let main_globals = Globals::new();

    #[cfg(windows)]
    colored::control::set_virtual_terminal(true).unwrap();

    Builder::from_env(Env::default().default_filter_or("info")).init();

    let cmd: Command = Command::parse();

    match cmd.execute(main_globals.clone()).await {
        Ok(_) => (),
        Err(err) => {
            log::error!("error: {}", err.to_string().red());
            std::process::exit(1);
        }
    }
}
