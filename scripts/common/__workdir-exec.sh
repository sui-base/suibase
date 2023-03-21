#!/bin/bash

# You must source __globals.sh before __workdir-exec.sh

# workdir_exec() is the key "public" function of this file.

# One command always expected from the user.
CMD_START_REQ=false
CMD_STOP_REQ=false
CMD_STATUS_REQ=false
CMD_CREATE_REQ=false
CMD_UPDATE_REQ=false
CMD_REGEN_REQ=false
CMD_PUBLISH_REQ=false
CMD_SET_ACTIVE_REQ=false
CMD_SET_SUI_REPO_REQ=false
CMD_FAUCET_REQ=false

usage_local() {
  echo "Usage: $WORKDIR [COMMAND] <Options>"
  echo
  echo "  Simulate a sui network running fully on this machine"
  echo "  Accessible from http://0.0.0.0:9000"
  echo
  echo "COMMAND:"
  echo
  echo "   start:   start $WORKDIR (sui process will run in background)"
  echo "   stop:    stop $WORKDIR (sui process will exit)"
  echo "   status:  indicate if running or not"
  echo
  echo "   create:  Create workdir only. This can be useful for changing"
  echo "            the configuration before doing the first start."
  echo
  echo "   update:  Update local sui repo and regen $WORKDIR."
  echo "            Note: Will not do any git operations if your own"
  echo "                  repo is configured with set-sui-repo."
  echo
  echo "   regen:   Only regenerate $WORKDIR. Useful for gas refueling."
  echo
  echo "   publish: Publish the module specified in the Move.toml found"
  echo "            in current directory or optional '--path <path>'"
  echo
  echo "   faucet:  Get new coins toward any address."
  echo "            Do \"$WORKDIR faucet\" for more info"
  echo
  echo "   set-active:"
  echo "            Makes $WORKDIR the active context for many"
  echo "            development tools and the 'asui' script."
  echo
  echo "   set-sui-repo:"
  echo "            Allows to specify a '--path <path>' to use your own"
  echo "            local repo instead of the default latest from github."
  echo "            Just omit '--path' to return to default."
  echo
}

usage_remote() {
  echo "Usage: $WORKDIR [COMMAND] <Options>"
  echo
  echo "  Sui-base $WORKDIR workdir to interact with a remote Sui network"
  echo
  echo "COMMAND:"
  echo
  echo "   start:   start $WORKDIR sui-base services (runs in background)"
  echo "   stop:    stop all $WORKDIR sui-base services"
  echo "   status:  indicate if services running and network accessible."
  echo
  echo "   create:  Create workdir only. This can be useful for changing"
  echo "            the configuration before doing the first start."
  echo
  echo "   update:  Update local sui repo and build client binary."
  echo "            Note: Will not do any git operations if your own"
  echo "                  repo is configured with set-sui-repo."
  echo
  echo "   publish: Publish module specified in the Move.toml found"
  echo "            in current directory or optional '--path <path>'"
  echo
  echo "   set-active:"
  echo "            Makes $WORKDIR the active context for many"
  echo "            development tools and the 'asui' script."
  echo
  echo "   set-sui-repo:"
  echo "            Allows to specify a '--path <path>' to use your own"
  echo "            local repo instead of the default latest from github."
  echo "            Just omit '--path' to return to default."
  echo
}

usage() {
  if [ "${CFG_network_type:?}" = "local" ]; then
    usage_local;
  else
    usage_remote;
  fi

  # Quick check if installed, then help the user about the location.
  if [ -d "$HOME/sui-base/workdirs" ]; then
    echo "All sui-base outputs are in ~/sui-base/workdirs/$WORKDIR"
  fi

  exit
}

workdir_exec() {

  exit_if_not_installed;

  CMD_REQ=$1
  shift # Consume the command.

  case "$CMD_REQ" in
    start) CMD_START_REQ=true ;;
    stop) CMD_STOP_REQ=true ;;
    status) CMD_STATUS_REQ=true ;;
    create) CMD_CREATE_REQ=true ;;
    update) CMD_UPDATE_REQ=true ;;
    regen) CMD_REGEN_REQ=true ;;
    publish) CMD_PUBLISH_REQ=true ;;
    set-active) CMD_SET_ACTIVE_REQ=true ;;
    set-sui-repo) CMD_SET_SUI_REPO_REQ=true ;;
    faucet) CMD_FAUCET_REQ=true ;;
    *) usage;;
  esac

  # Optional params (the "debug" is purposely not documented).
  DEBUG_RUN=false

  # Parsing the command line shifting "rule":
  #   -t|--target) target="$2"; shift ;; That's an example with a parameter
  #   -f|--flag) flag=1 ;; That's an example flag

  case "$CMD_REQ" in
    faucet)
      while [[ "$#" -gt 0 ]]; do
        case $1 in
          --debug) DEBUG_RUN=true ;;
          *) PASSTHRU_OPTIONS="$PASSTHRU_OPTIONS $1" ;;
        esac
        shift
      done ;; # End parsing faucet
    set-sui-repo)
      while [[ "$#" -gt 0 ]]; do
        case $1 in
          --debug) DEBUG_RUN=true ;;
          -p|--path)
             # see: https://stackoverflow.com/questions/9018723/what-is-the-simplest-way-to-remove-a-trailing-slash-from-each-parameter
             OPTIONAL_PATH="${2%/}"; shift
             if [ -z "$OPTIONAL_PATH" ]; then echo "--path <path> must be specified"; exit 1; fi ;;
          *) echo "Unknown parameter passed: $1"; exit 1 ;;
        esac
        shift
      done ;; # End parsing publish
    publish)
      while [[ "$#" -gt 0 ]]; do
        case $1 in
          --debug) DEBUG_RUN=true ;;
          -p|--path)
             OPTIONAL_PATH="${2%/}"; shift
             if [ -z "$OPTIONAL_PATH" ]; then echo "--path <path> must be specified"; exit 1; fi ;;
          --json) echo "--json option superfluous. JSON always generated on publish by sui-base. See publish-output.json." ;;
          --install-dir) echo "Do no specify --install-dir when publishing with sui-base. Output is always in published-data location instead." ;;
          *) PASSTHRU_OPTIONS="$PASSTHRU_OPTIONS $1" ;;
        esac
        shift
      done ;; # End parsing publish
    *)
      while [[ "$#" -gt 0 ]]; do
        case $1 in
          --debug) DEBUG_RUN=true ;;
          *) echo "Unknown parameter passed: $1"; exit 1 ;;
        esac
        shift
      done ;; # End parsing default cases
  esac

  if [ "$DEBUG_RUN" = true ]; then
    echo "Debug flag set. May run in foreground Ctrl-C to Exit"
  fi

  # Validate if the path exists.
  if [ -n "$OPTIONAL_PATH" ]; then
    if [ ! -d "$OPTIONAL_PATH" ]; then
      echo "Path [ $OPTIONAL_PATH ] not found"
      exit
    fi
  fi

  ###################################################################
  #
  #  Most command line validation done (PASSTHRU_OPTIONS remaining)
  #
  #  Source more files and do actual work from this point.
  #
  ####################################################################

  if [ "$CFG_network_type" = "local" ]; then
    is_local=true
  else
    is_local=false
  fi

  if $is_local; then
    # shellcheck source=SCRIPTDIR/__sui-faucet-process.sh
    source "$HOME/sui-base/scripts/common/__sui-faucet-process.sh"
    update_SUI_FAUCET_PROCESS_PID_var;

    update_SUI_PROCESS_PID_var;
  fi

  update_ACTIVE_WORKDIR_var;

  # First, take care of the easy "status" command that does not touch anything.

  if [ "$CMD_STATUS_REQ" = true ]; then
    exit_if_workdir_not_ok;
    exit_if_sui_binary_not_ok;

    local _USER_REQUEST
    _USER_REQUEST=$(get_key_value "user_request");

    if $is_local; then
      update_SUI_VERSION_var;
      update_SUI_FAUCET_VERSION_var;

      # Verify if the faucet is supported for this version.
      local _SUPPORT_FAUCET
      if version_less_than "$SUI_VERSION" "sui 0.28" || [ "${CFG_sui_faucet_enabled:?}" != "true" ]; then
        _SUPPORT_FAUCET=false
      else
        _SUPPORT_FAUCET=true
      fi

      # Overall status: STOPPED or OK/DEGRADED/DOWN
      if [ "$_USER_REQUEST" = "stop" ]; then
        echo -e "localnet \033[1;31mSTOPPED\033[0m"
      else
        if [ -z "$SUI_PROCESS_PID" ]; then
            echo -e "localnet \033[1;31mDOWN\033[0m"
        else
          if $_SUPPORT_FAUCET && [ -z "$SUI_FAUCET_PROCESS_PID" ]; then
            echo -e "localnet \033[1;31mDEGRADED\033[0m"
          else
            echo -e "localnet \033[1;32mOK\033[0m"
          fi
        fi
      fi

      # Individual process status
      if [ "$_USER_REQUEST" = "stop" ]; then
        # Show process "abnormally" still running.
        if [ -n "$SUI_PROCESS_PID" ] || [ -n "$SUI_FAUCET_PROCESS_PID" ]; then
          echo "---"
          if [ -n "$SUI_PROCESS_PID" ]; then
            echo "localnet process : STILL RUNNING (pid $SUI_PROCESS_PID)"
          fi
          if [ -n "$SUI_FAUCET_PROCESS_PID" ]; then
            echo "faucet process   : STILL RUNNING (pid $SUI_FAUCET_PROCESS_PID)"
          fi
        fi
      else
        echo "---"
        if [ -z "$SUI_PROCESS_PID" ]; then
          echo "localnet process : DEAD"
        else
          echo "localnet process : OK  (pid $SUI_PROCESS_PID)"
        fi
        if ! $_SUPPORT_FAUCET; then
          echo "faucet process   : DISABLED"
        else
          if [ -z "$SUI_FAUCET_PROCESS_PID" ]; then
            echo "faucet process   : DEAD"
          else
            echo "faucet process   : OK  (pid $SUI_FAUCET_PROCESS_PID)"
          fi
        fi
        echo "---"
      fi
    fi

    echo "client version: $SUI_VERSION"
    #update_SUI_REPO_INFO_var;
    #echo "$SUI_VERSION ($SUI_REPO_INFO)"
    DISPLAY_AS_WARNING=true
    DISPLAY_FIELD="$ACTIVE_WORKDIR"
    if [ "$ACTIVE_WORKDIR" = "$WORKDIR" ]; then
      DISPLAY_AS_WARNING=false
    fi

    if [ -z "$DISPLAY_FIELD" ]; then
      DISPLAY_FIELD="<none>"
      DISPLAY_AS_WARNING=true
    fi

    if [ "$DISPLAY_AS_WARNING" = true ]; then
      echo -e "asui selection: [ \033[1;33m$DISPLAY_FIELD\033[0m ]"
    else
      echo -e "asui selection: [ $DISPLAY_FIELD ]"
    fi

    if is_sui_repo_dir_override; then
      echo "set-sui-repo  : $RESOLVED_SUI_REPO_DIR"
    fi
    exit
  fi

  # Second, take care of the case that just stop/start processes.
  if [ "$CMD_START_REQ" = true ]; then
    if is_workdir_ok && is_sui_binary_ok; then

      # Note: nobody should have tried to run the sui binary yet.
      # So this is why the update_SUI_VERSION_var need to be done here.
      update_SUI_VERSION_var;

      if ! $is_local; then
        echo "$WORKDIR installed (no process needed to be started)"
        exit
      fi

      start_all_services;
      _RES=$?
      if [ "$_RES" -eq 1 ]; then
        echo "$WORKDIR already running"
        echo "$SUI_VERSION"
      fi

      exit
    fi
    # Note: If workdir/binary/config not OK, keep going to install or repair it.
  fi

  if [ "$CMD_STOP_REQ" = true ]; then
    if ! $is_local; then
      echo "Not applicable yet for $WORKDIR (work in progress)"
      exit
    fi

    exit_if_workdir_not_ok;

    set_key_value "user_request" "stop";

    if [ -z "$SUI_FAUCET_PROCESS_PID" ] && [ -z "$SUI_PROCESS_PID" ]; then
      echo "localnet already stopped"
    else
      # Stop the process in reverse order.
      if [ -n "$SUI_FAUCET_PROCESS_PID" ]; then
        stop_sui_faucet_process;
      fi
      if [ -n "$SUI_PROCESS_PID" ]; then
        stop_sui_process;
      fi
      # Check if successful.
      if [ -z "$SUI_FAUCET_PROCESS_PID" ] && [ -z "$SUI_PROCESS_PID" ]; then
        echo "localnet now stopped"
      else
        setup_error "Failed to stop everything. Try again. Use \"localnet status\" to see what is still running."
      fi
    fi
    exit
  fi

  if [ "$CMD_FAUCET_REQ" = true ]; then
    exit_if_workdir_not_ok;
    exit_if_sui_binary_not_ok;

    # Verify that the faucet is supported for this version.
    if version_less_than "$SUI_VERSION" "sui 0.28"; then
      setup_error "faucet not supported for this older sui version"
    fi

    # Verify that the faucet is enabled and running.
    if [ "${CFG_sui_faucet_enabled:?}" != "true" ]; then
      setup_error "faucet feature disabled (see sui-base.yaml )"
    fi

    start_all_services; # Start the faucet as needed (and exit if fails).

    faucet_command "$PASSTHRU_OPTIONS";
    exit
  fi

  if [ "$CMD_PUBLISH_REQ" = true ]; then

    if ! $is_local; then
      echo "Not implement yet for $WORKDIR (work in progress)"
      exit
    fi

    if [ -n "$OPTIONAL_PATH" ]; then
      update_MOVE_TOML_DIR_var "$OPTIONAL_PATH";
    else
      update_MOVE_TOML_DIR_var "$PWD";
    fi

    if [ -z "$MOVE_TOML_DIR" ]; then
      echo "\"$WORKDIR publish\" must have Move.toml in current directory or --path specified"
    fi

    exit_if_workdir_not_ok;
    exit_if_sui_binary_not_ok;

    # publication requires localnet to run.
    # If stopped, then try (once) to start it.
    update_SUI_PROCESS_PID_var;
    if [ "$SUI_PROCESS_PID" ]; then
      publish_localnet "$PASSTHRU_OPTIONS";
    else
      start_all_services;
      if [ "$SUI_PROCESS_PID" ]; then
        publish_localnet "$PASSTHRU_OPTIONS";
      else
        echo "Unable to start localnet"
      fi
    fi

    exit
  fi

  if [ "$CMD_SET_ACTIVE_REQ" = true ]; then
    exit_if_workdir_not_ok;

    if [ "$ACTIVE_WORKDIR" = "$WORKDIR" ]; then
      echo "$WORKDIR is already active"
    else
      echo "Making $WORKDIR active"
      set_active_symlink_force "$WORKDIR";
    fi

    exit
  fi

  # Detect user action that should be NOOP.
  if [ "$CMD_SET_SUI_REPO_REQ" = true ] && [ -z "$OPTIONAL_PATH" ]; then
    if is_sui_repo_dir_default; then
      setup_error "$WORKDIR already using default repo. no change."
    fi
  fi

  if [ "$CMD_CREATE_REQ" = true ]; then
    # Check for what is minimally needed for configuration.
    if is_workdir_ok; then
      setup_error "$WORKDIR already created."
    fi
  fi

  # Finally, take care of the more complicated cases that involves
  # git, workdir/config creation and genesis.
  create_workdir_as_needed "$WORKDIR"; # Create/repair $WORKDIR

  if [ "$CMD_CREATE_REQ" = true ]; then
    # No further action when "create" command.
    echo "$WORKDIR created"
    exit
  fi

  # The script should not be called from a location that could get deleted.
  # It would work (on Linux) because of reference counting, but it could
  # lead to some confusion for the user.

  if $is_local; then
    CWD=$(pwd -P)
    if [[ "$CWD" = "$CONFIG_DATA_DIR_DEFAULT"* ]]; then
      echo "This script should not be called from a location that could be deleted [$CONFIG_DATA_DIR]."
      setup_error "Change current directory location and try again."
    fi

    if [[ "$CWD" = "$PUBLISHED_DATA_DIR"* ]]; then
      echo "This script should not be called from a location that could be deleted [$PUBLISHED_DATA_DIR]."
      setup_error "Change current directory location and try again."
    fi

    # Stop localnet (noop if not running)
    stop_sui_process;

    # Clean-up previous localnet (if exists)
    RM_DIR="$CONFIG_DATA_DIR_DEFAULT"
    if [ -d "$RM_DIR" ]; then
      echo "Clearing existing localnet data"
      rm -rf "$RM_DIR"
    fi

    # Delete localnet publish directory (if exists) to force re-publication.
    RM_DIR="$PUBLISH_DATA_DIR"
    if [ -d "$RM_DIR" ]; then
      rm -rf "$RM_DIR"
    fi
  fi

  if [ "$CMD_SET_SUI_REPO_REQ" = true ]; then
    if $is_local; then
      update_SUI_PROCESS_PID_var;
      if [ "$SUI_PROCESS_PID" ]; then
        # Force to stop. Otherwise the running process and config will be out-of-sync.
        setup_error "Can't change config while $WORKDIR running. Do \"$WORKDIR stop\"."
      fi
    fi

    if [ -z "$OPTIONAL_PATH" ]; then
      set_sui_repo_dir_default;
    else
      set_sui_repo_dir "$OPTIONAL_PATH";
    fi

    if $is_local; then
      # Clean-up generated genesis data because did succesfully switch repo.
      RM_DIR="$GENERATED_GENESIS_DATA_DIR"
      if [ -d "$RM_DIR" ]; then
        rm -rf "$RM_DIR"
      fi
    fi

    exit
  fi

  # Create and build the sui-repo.
  # Should not download on a regen or set-sui-repo, but still need to do "cargo build" in case the
  # binary are not up to data (or done yet).
  ALLOW_DOWNLOAD="true" # Using string because passing outside as param
  if [ "$CMD_REGEN_REQ" = true ]; then
    ALLOW_DOWNLOAD="false"
  fi
  if is_sui_repo_dir_override; then
    ALLOW_DOWNLOAD="false"
  fi

  build_sui_repo_branch "$ALLOW_DOWNLOAD";

  if $is_local; then
    # shellcheck source=SCRIPTDIR/__workdir-init-local.sh
    source "$HOME/sui-base/scripts/common/__workdir-init-local.sh"
    workdir_init_local;
  else
    # shellcheck source=SCRIPTDIR/__workdir-init-remote.sh
    source "$HOME/sui-base/scripts/common/__workdir-init-remote.sh"
    workdir_init_remote;
  fi

  if $is_local; then
    # Start the new localnet normally.
    start_sui_process;
    echo "========"
  fi

  ensure_client_OK;

  # print sui envs to help debugging (if someone else is using this script).
  $SUI_EXEC client envs
  echo "========"

  if $is_local; then
    echo "All client addresses with coins:"
  else
    echo "All client addresses:"
  fi

  $SUI_EXEC client addresses
  echo "========"

  WALLET_ADDR=$($SUI_EXEC client active-address)
  echo "Coins owned by $WALLET_ADDR (active):"
  $SUI_EXEC client gas

  # TODO Display only if a shortcut is defined.
  echo "----------------------------------------------------------------------"
  echo
  echo "Remember:"
  echo "  Use \"$SUI_SCRIPT\" to access your $WORKDIR"
  echo
  echo "Success. Try it by typing \"$SUI_SCRIPT client gas\""
}

start_all_services() {
  #
  # Exit if fails to get one of the needed process running.
  #
  # Returns:
  #   0: Success (all process needed to be started were started)
  #   1: Everything needed was running already. Call was NOOP.
  set_key_value "user_request" "start";

  # Verify if the faucet is supported for this version.
  local _SUPPORT_FAUCET
  if version_less_than "$SUI_VERSION" "sui 0.28" || [ "${CFG_sui_faucet_enabled:?}" != "true" ]; then
    _SUPPORT_FAUCET=false
  else
    _SUPPORT_FAUCET=true
  fi

  # Check if everything is healthy.
  if $_SUPPORT_FAUCET; then
    if [ -n "$SUI_PROCESS_PID" ] && [ -n "$SUI_FAUCET_PROCESS_PID" ]; then
      return 1
    fi
  else
    if [ -n "$SUI_PROCESS_PID" ]; then
      return 1
    fi
  fi

  # One or more process need to be started.
  if [ -z "$SUI_PROCESS_PID" ]; then
    start_sui_process;
  fi

  if [ -z "$SUI_PROCESS_PID" ]; then
    setup_error "Not started or taking too long to start? Check \"$WORKDIR status\" in a few seconds. If persisting down, may be try again or \"$WORKDIR update\" of the code?"
  fi

  if $_SUPPORT_FAUCET; then
    if [ -z "$SUI_FAUCET_PROCESS_PID" ]; then
      start_sui_faucet_process;
    fi

    if [ -z "$SUI_FAUCET_PROCESS_PID" ]; then
      setup_error "Faucet not started or taking too long to start? Check \"$WORKDIR status\" in a few seconds. If persisting down, may be try again or \"$WORKDIR update\" of the code?"
    fi
  fi

  # Success. All process that needed to be started were started.
  return 0
}