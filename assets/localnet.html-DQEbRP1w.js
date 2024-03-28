import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as c,c as d,b as e,d as t,e as s,w as o,a as l}from"./app-J-z8PT9G.js";const u={},h=l(`<h2 id="starting" tabindex="-1"><a class="header-anchor" href="#starting"><span>Starting</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ localnet start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The first time will take minutes because of downloading and building the binaries.</p><p>You do not call <code>sui</code> directly anymore. Instead call <code>lsui</code> :</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ lsui client active-address
0xf7ae71f84fabc58662bd4209a8893f462c60f247095bb35b19ff659ad0081462
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>lsui</code> is a <em>small</em> frontend to the Mysten Labs sui client, but its convenience is <em>huge</em>.<br></p><p>You no longer have to &quot;switch env&quot;. You can assume <code>lsui</code> always transparently execute with the proper <code>sui</code> client and keystore for this localnet (in same way, use <code>dsui</code> for devnet, and <code>tsui</code> for testnet).</p><p>Type <code>localnet</code> for help.</p><h2 id="status-stopping" tabindex="-1"><a class="header-anchor" href="#status-stopping"><span>Status / Stopping</span></a></h2>`,9),p=e("code",null,"localnet status",-1),g=e("br",null,null,-1),m=e("br",null,null,-1),b=["src"],f=e("br",null,null,-1),_=e("br",null,null,-1),y=e("code",null,"localnet stop",-1),v=e("br",null,null,-1),w=e("br",null,null,-1),k=["src"],S=e("br",null,null,-1),T=e("code",null,"localnet links",-1),x=e("h2",{id:"upgrading-sui-client",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upgrading-sui-client"},[e("span",null,"Upgrading Sui Client")])],-1),L=e("p",null,[t("Do "),e("code",null,"localnet update"),t(" to download/rebuild/restart the localnet with the latest.")],-1),U=e("p",null,"This also update the local repo that can provide the matching Rust SDK and Move dependencies to your app.",-1),R=l(`<h2 id="regeneration" tabindex="-1"><a class="header-anchor" href="#regeneration"><span>Regeneration</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ localnet regen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Quickly brings back the network to its initial state (with same addresses and all funds back). Useful for wiping out the network after testing.</p><p>The network is <strong>always</strong> initialized with 15 pre-funded addresses. 5 for each key type (ed25519, secp256k, secp256r1). Your Rust/Python apps can further access these addresses &quot;by-name&quot; for automated test setup.</p><h2 id="faucet" tabindex="-1"><a class="header-anchor" href="#faucet"><span>Faucet</span></a></h2><p>Get funds to either a single address or all addresses at once on your localnet.</p>`,6),Y=e("br",null,null,-1),B=e("br",null,null,-1),M=["src"],$=e("br",null,null,-1),C=e("code",null,"localnet faucet",-1);function D(n,I){const a=r("RouteLink");return c(),d("div",null,[h,e("p",null,[t("You can monitor the client version and process health with "),p,t(":"),g,m,e("img",{src:n.$withBase("/assets/localnet-status.png"),alt:"Localnet Status"},null,8,b),f,_,t(" To stop the process, do "),y,t(":"),v,w,e("img",{src:n.$withBase("/assets/localnet-stop.png"),alt:"Localnet Stop"},null,8,k),S]),e("p",null,[t("You can monitor the RPC node servers with "),T,t(" ("),s(a,{to:"/how-to/proxy.html#monitoring-rpc-links"},{default:o(()=>[t("More Info")]),_:1}),t(")")]),x,L,U,e("p",null,[t("By default, the latest 'devnet' branch from Mysten Labs is used, you can choose a different branch or repo by editing suibase.yaml ("),s(a,{to:"/how-to/configure-suibase-yaml.html#change-default-repo-and-branch"},{default:o(()=>[t("More Info")]),_:1}),t(").")]),R,e("p",null,[t("The following demo should be self-explanatory:"),Y,B,e("img",{src:n.$withBase("/assets/faucet-demo.png"),alt:"Faucet Demo"},null,8,M),$,t(" Type "),C,t(" for balance and help.")])])}const P=i(u,[["render",D],["__file","localnet.html.vue"]]),V=JSON.parse('{"path":"/how-to/localnet.html","title":"Using Localnet","lang":"en-US","frontmatter":{"title":"Using Localnet","order":2,"description":"Starting The first time will take minutes because of downloading and building the binaries. You do not call sui directly anymore. Instead call lsui : lsui is a small frontend to...","head":[["meta",{"property":"og:url","content":"https://suibase.io/how-to/localnet.html"}],["meta",{"property":"og:site_name","content":"suibase.io"}],["meta",{"property":"og:title","content":"Using Localnet"}],["meta",{"property":"og:description","content":"Starting The first time will take minutes because of downloading and building the binaries. You do not call sui directly anymore. Instead call lsui : lsui is a small frontend to..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-22T16:46:22.000Z"}],["meta",{"property":"article:author","content":"suibase.io"}],["meta",{"property":"article:modified_time","content":"2023-08-22T16:46:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Using Localnet\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-22T16:46:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"suibase.io\\",\\"url\\":\\"https://suibase.io\\"}]}"]]},"headers":[{"level":2,"title":"Starting","slug":"starting","link":"#starting","children":[]},{"level":2,"title":"Status / Stopping","slug":"status-stopping","link":"#status-stopping","children":[]},{"level":2,"title":"Upgrading Sui Client","slug":"upgrading-sui-client","link":"#upgrading-sui-client","children":[]},{"level":2,"title":"Regeneration","slug":"regeneration","link":"#regeneration","children":[]},{"level":2,"title":"Faucet","slug":"faucet","link":"#faucet","children":[]}],"git":{"createdTime":1681174797000,"updatedTime":1692722782000,"contributors":[{"name":"mario4tier","email":"mario4tier@users.noreply.github.com","commits":5}]},"readingTime":{"minutes":1.07,"words":321},"filePathRelative":"how-to/localnet.md","localizedDate":"April 11, 2023","autoDesc":true}');export{P as comp,V as data};