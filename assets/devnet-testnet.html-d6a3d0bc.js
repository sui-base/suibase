import{_ as a,Y as n,Z as i,a0 as s,a1 as e,a2 as o,a3 as d,$ as r,E as c}from"./framework-93324f42.js";const l={},u=r('<div class="hint-container warning"><p class="hint-container-title">Note</p><p>Instructions here are for devnet, but it is the same for testnet and mainnet. Just replace &quot;devnet&quot; with testnet/mainnet and dsui with tsui/msui.</p></div><h2 id="starting" tabindex="-1"><a class="header-anchor" href="#starting" aria-hidden="true">#</a> Starting</h2><p>Generally, works similar to localnet, except you are interacting with a public network instead of your own simulated local Sui network.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ devnet start\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The first time will take minutes because of downloading and building the binaries.</p><p>You do not call <code>sui</code> directly anymore, instead call <code>dsui</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ dsui client active-address\n0x92c03721eabfc753453b097d14d87e4012a9fe562da3582a6a023da7c6120c95\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You no longer have to &quot;switch env&quot;. You can assume <code>dsui</code> always transparently execute with its proper <code>sui</code> client and keystore for devnet (in same way, <code>tsui</code> for testnet, ```msui`` for mainnet. Each have their own keystore).</p><p>Type <code>devnet</code> for help. <br></p><h2 id="status" tabindex="-1"><a class="header-anchor" href="#status" aria-hidden="true">#</a> Status</h2><p>You can check the client version with <code>devnet status</code><br></p><div class="hint-container warning"><p class="hint-container-title">Work-In-Progress</p><p>Status will eventually show the health of the network and your RPC connections.</p></div><h2 id="upgrading-sui-client" tabindex="-1"><a class="header-anchor" href="#upgrading-sui-client" aria-hidden="true">#</a> Upgrading Sui Client</h2><p>Do <code>devnet update</code> to download/rebuild to the latest client.</p>',14);function h(p,v){const t=c("RouterLink");return n(),i("div",null,[u,s("p",null,[e("By default, the latest 'devnet' branch from Mysten Labs is used, you can choose a different branch or repo by editing the suibase.yaml ("),o(t,{to:"/how-to/configure-suibase-yaml.html#change-default-repo-and-branch"},{default:d(()=>[e("More Info")]),_:1}),e(").")])])}const b=a(l,[["render",h],["__file","devnet-testnet.html.vue"]]);export{b as default};