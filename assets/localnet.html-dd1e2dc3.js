import{_ as o,W as l,X as i,Y as e,Z as t,$ as d,a0 as r,a1 as s,C as c}from"./framework-5e49288e.js";const u={},h=s(`<h2 id="starting" tabindex="-1"><a class="header-anchor" href="#starting" aria-hidden="true">#</a> Starting</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ localnet start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The first time will take minutes because of downloading and building the binaries.</p><p>You do not call <code>sui</code> directly anymore. Instead call <code>lsui</code> :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ lsui client active-address
0xf7ae71f84fabc58662bd4209a8893f462c60f247095bb35b19ff659ad0081462
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>lsui</code> is a <em>small</em> frontend to the Mysten Labs sui client, but its convenience is <em>huge</em>.<br></p><p>You no longer have to &quot;switch env&quot;. You can assume <code>lsui</code> always transparently execute with the proper <code>sui</code> client and keystore for this localnet (in same way, use <code>dsui</code> for devnet, and <code>tsui</code> for testnet).</p><p>Type <code>localnet</code> for help. <br></p><h2 id="status-stopping" tabindex="-1"><a class="header-anchor" href="#status-stopping" aria-hidden="true">#</a> Status / Stopping</h2>`,9),p=e("code",null,"localnet status",-1),b=e("br",null,null,-1),f=["src"],g=e("br",null,null,-1),m=e("code",null,"localnet stop",-1),_=e("br",null,null,-1),v=["src"],y=e("br",null,null,-1),w=e("h2",{id:"upgrading-sui-client",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upgrading-sui-client","aria-hidden":"true"},"#"),t(" Upgrading Sui Client")],-1),k=e("p",null,[t("Do "),e("code",null,"localnet update"),t(" to download/rebuild/restart the localnet with the latest.")],-1),x=e("p",null,"This also update the local repo that can provide the matching Rust SDK and Move dependencies to your app.",-1),S=s(`<h2 id="regeneration" tabindex="-1"><a class="header-anchor" href="#regeneration" aria-hidden="true">#</a> Regeneration</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ localnet regen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Quickly brings back the network to its initial state (with same addresses and all funds back). Useful for wiping out the network after testing.</p><p>The network is <strong>always</strong> initialized with 15 pre-funded addresses. 5 for each key type (ed25519, secp256k, secp256r1). Your Rust/Python apps can further access these addresses &quot;by-name&quot; for automated test setup. <br></p><h2 id="faucet" tabindex="-1"><a class="header-anchor" href="#faucet" aria-hidden="true">#</a> Faucet</h2><p>Get funds to either a single address or all addresses at once on your localnet.</p>`,6),T=e("br",null,null,-1),B=["src"],$=e("code",null,"localnet faucet",-1);function L(a,Y){const n=c("RouterLink");return l(),i("div",null,[h,e("p",null,[t("You can monitor the client version and process health with "),p,t(":"),b,e("img",{src:a.$withBase("/assets/localnet-status.png"),alt:"Localnet Status"},null,8,f),g,t(" To stop the process, do "),m,t(":"),_,e("img",{src:a.$withBase("/assets/localnet-stop.png"),alt:"Localnet Stop"},null,8,v),y]),w,k,x,e("p",null,[t("By default, the latest 'devnet' branch from Mysten Labs is used, you can choose a different branch or repo by editing the sui-base.yaml ("),d(n,{to:"/how-to/configure-sui-base-yaml.html#change-default-repo-and-branch"},{default:r(()=>[t("More Info")]),_:1}),t(").")]),S,e("p",null,[t("The following demo should be self-explanatory:"),T,e("img",{src:a.$withBase("/assets/faucet-demo.png"),alt:"Faucet Demo"},null,8,B),t(" Type "),$,t(" for balance and help.")])])}const q=o(u,[["render",L],["__file","localnet.html.vue"]]);export{q as default};
