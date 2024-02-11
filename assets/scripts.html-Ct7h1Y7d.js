import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as p,a as e,b as t,d as s,w as c,e as a}from"./app-BE-FJzrA.js";const u={},d=e("h2",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction"},[e("span",null,"Introduction")])],-1),h=e("p",null,"All scripts are listed below and briefly described.",-1),m=e("p",null,'Best way to learn about each is probably just to try them... and "--help".',-1),b=e("thead",null,[e("tr",null,[e("th",null,[e("strong",null,"Script Name")]),e("th",null,[e("strong",null,"What are they for?")])])],-1),v=e("tr",null,[e("td",null,[e("h3",null,[t("lsui"),e("br"),t("dsui"),e("br"),t("tsui"),e("br"),t("msui"),e("br")])]),e("td",null,[t('Front-ends to Mysten Lab "sui" binaries, each targeting a specific network (no need to "switch" env):'),e("br"),e("p",{style:{"text-align":"center"}},[e("b",null,"l"),t("sui→"),e("b",null,"l"),t("ocalnet, "),e("b",null,"d"),t("sui→"),e("b",null,"d"),t("evnet, "),e("b",null,"t"),t("sui→"),e("b",null,"t"),t("estnet, "),e("b",null,"m"),t("sui→"),e("b",null,"m"),t("ainnet")]),t("Each script always run within the proper workdir (client+keystore container) for the intended network."),e("br"),t("The scripts are mostly transparent; all arguments are pass unchanged to a single Mysten Labs sui client call."),e("br"),e("br"),t("Example: "),e("code",null,"$ lsui client gas"),t(" ← same as "),e("code",null,"sui client gas"),t(" but "),e("em",null,"always"),t(" for localnet")])],-1),g=e("tr",null,[e("td",null,[e("h3",null,[t("localnet"),e("br"),t("devnet"),e("br"),t("testnet"),e("br"),t("mainnet"),e("br")])]),e("td",null,[t('These are the "workdir scripts" providing suibase specific features.'),e("br"),e("br"),t("Example: "),e("code",null,"$ localnet faucet all"),t(" ← sends Sui coins to every address on your localnet")])],-1),k=e("td",null,[e("h3",null,"asui")],-1),y=e("br",null,null,-1),w=a(`<h2 id="faster-rust-and-move-build" tabindex="-1"><a class="header-anchor" href="#faster-rust-and-move-build"><span>Faster Rust and Move Build</span></a></h2><p>Suibase download the Mysten Lab&#39;s repo locally to build a sui client for each network, so your apps might as well re-use these.</p><p>Advantages are:</p><ul><li>Faster local file access on rebuild.</li><li>Less build/publish errors (sometimes GitHub do have trouble serving, causing dependencies loading errors)</li><li>Control having your app, client and localnet being built from the <strong>same</strong> source (avoid version mismatch issues).</li></ul><p>Location of these repos are:</p><ul><li>~/suibase/workdirs/<strong>localnet</strong>/sui-repo</li><li>~/suibase/workdirs/<strong>devnet</strong>/sui-repo</li><li>~/suibase/workdirs/<strong>testnet</strong>/sui-repo</li><li>~/suibase/workdirs/<strong>mainnet</strong>/sui-repo</li></ul><p>Update to latest with the &quot;update&quot; command (e.g. &quot;localnet update&quot;).<br><br></p><h2 id="cargo-toml-dependencies-to-local-repos" tabindex="-1"><a class="header-anchor" href="#cargo-toml-dependencies-to-local-repos"><span>Cargo.toml dependencies to local repos</span></a></h2><p>This is optional, but highly recommended. Instead of git, use &quot;path&quot; to the local repos.</p><p>Example, replace:<br></p><div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">dependencies</span><span class="token punctuation">]</span>
<span class="token key property">sui-sdk</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">git</span> <span class="token punctuation">=</span> <span class="token string">&quot;https://github.com/MystenLabs/sui&quot;</span><span class="token punctuation">,</span> <span class="token key property">branch</span> <span class="token punctuation">=</span> <span class="token string">&quot;devnet&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>with</p><div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">dependencies</span><span class="token punctuation">]</span>
<span class="token key property">sui-sdk</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">path</span> <span class="token punctuation">=</span> <span class="token string">&quot;../../suibase/workdirs/active/sui-repo/crates/sui-sdk/&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The number of &quot;..&quot; may need to be adjusted depending on where your Cargo.toml is located relative to ~/suibase.</p><p>If you always target the same network you can replace the &quot;active&quot; word with a specific workdir (e.g. localnet/devnet/testnet/mainnet).</p>`,15),f={href:"https://github.com/chainmovers/suibase/blob/main/rust/demo-app/Cargo.toml",target:"_blank",rel:"noopener noreferrer"},_=a(`<h2 id="what-does-active-mean" tabindex="-1"><a class="header-anchor" href="#what-does-active-mean"><span>What does &quot;active&quot; mean?</span></a></h2><p>A single workdir is designated as active and allows multiple tools/scripts to run in the same context and target the same network.</p><p>You choose the active with a workdir &quot;set-active&quot; command. Examples:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ devnet set-active
devnet is now active
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The &quot;asui&quot; will conveniently call the correct &quot;sui client&quot; for the active workdir. You will typically want to use &quot;asui&quot; in your own script for operations that are expected to work for <em>all</em> network type.</p><h2 id="move-toml-dependencies-to-local-repos" tabindex="-1"><a class="header-anchor" href="#move-toml-dependencies-to-local-repos"><span>Move.toml dependencies to local repos</span></a></h2><p>This is optional, but highly recommended. Instead of git, use &quot;local&quot; to the local repos.</p><p>Example, replace:<br></p><div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">dependencies</span><span class="token punctuation">]</span>
<span class="token key property">Sui</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">git</span> <span class="token punctuation">=</span> <span class="token string">&quot;https://github.com/MystenLabs/sui.git&quot;</span><span class="token punctuation">,</span> <span class="token key property">subdir</span><span class="token punctuation">=</span><span class="token string">&quot;crates/sui-framework/packages/sui-framework/&quot;</span><span class="token punctuation">,</span> <span class="token key property">rev</span> <span class="token punctuation">=</span> <span class="token string">&quot;devnet&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>with</p><div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">dependencies</span><span class="token punctuation">]</span>
<span class="token key property">Sui</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">local</span> <span class="token punctuation">=</span> <span class="token string">&quot;../../suibase/workdirs/active/sui-repo/crates/sui-framework/packages/sui-framework&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You may need to adjust the number of &quot;..&quot; depending on where your Move.toml is located relative to ~/suibase.</p><p>If you prefer to always target the same network you can replace the &quot;active&quot; word with a specific workdir (e.g. localnet/devnet/testnet).</p>`,13),q={href:"https://github.com/sui-base/suibase/blob/main/rust/demo-app/move/Move.toml",target:"_blank",rel:"noopener noreferrer"},x=a(`<h2 id="how-to-publish" tabindex="-1"><a class="header-anchor" href="#how-to-publish"><span>How to publish?</span></a></h2><p>Suibase has a workdir command to make it easier to publish.</p><p>Example to publish on localnet:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>location of Move.toml<span class="token operator">&gt;</span>
$ localnet publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Alternatively you can do:<br><code>$ localnet publish --path &lt;location of Move.toml&gt;</code></p><p>If you have coded your dependencies&#39; path in Move.toml with &quot;active&quot;, then you can easily switch and publish on any network:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ testnet set-active
testnet is now active
$ testnet publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This should work assuming you have enough fund in the active-address (and the network is up and running!).</p><p>Do <code>$ localnet publish --help</code> for more info.</p>`,9);function S(M,T){const l=o("RouteLink"),n=o("ExternalLinkIcon");return r(),p("div",null,[d,h,m,e("table",null,[b,e("tbody",null,[v,g,e("tr",null,[k,e("td",null,[t('You can designate one workdir as "active". '),s(l,{to:"/how-to/scripts.html#what-does-active-mean"},{default:c(()=>[t("More Info")]),_:1}),y,t(' This script will call the "active sui" client.')])])])]),w,e("p",null,[t("Demo Example: "),e("a",f,[t("Cargo.toml"),s(n)])]),_,e("p",null,[t("Demo example: "),e("a",q,[t("Move.toml"),s(n)])]),x])}const L=i(u,[["render",S],["__file","scripts.html.vue"]]),B=JSON.parse('{"path":"/how-to/scripts.html","title":"Suibase Scripts","lang":"en-US","frontmatter":{"title":"Suibase Scripts","order":1,"description":"Introduction All scripts are listed below and briefly described. Best way to learn about each is probably just to try them... and \\"--help\\". Faster Rust and Move Build Suibase do...","head":[["meta",{"property":"og:url","content":"https://suibase.io/how-to/scripts.html"}],["meta",{"property":"og:site_name","content":"suibase.io"}],["meta",{"property":"og:title","content":"Suibase Scripts"}],["meta",{"property":"og:description","content":"Introduction All scripts are listed below and briefly described. Best way to learn about each is probably just to try them... and \\"--help\\". Faster Rust and Move Build Suibase do..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-22T16:46:22.000Z"}],["meta",{"property":"article:author","content":"suibase.io"}],["meta",{"property":"article:modified_time","content":"2023-08-22T16:46:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Suibase Scripts\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-22T16:46:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"suibase.io\\",\\"url\\":\\"https://suibase.io\\"}]}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Faster Rust and Move Build","slug":"faster-rust-and-move-build","link":"#faster-rust-and-move-build","children":[]},{"level":2,"title":"Cargo.toml dependencies to local repos","slug":"cargo-toml-dependencies-to-local-repos","link":"#cargo-toml-dependencies-to-local-repos","children":[]},{"level":2,"title":"What does \\"active\\" mean?","slug":"what-does-active-mean","link":"#what-does-active-mean","children":[]},{"level":2,"title":"Move.toml dependencies to local repos","slug":"move-toml-dependencies-to-local-repos","link":"#move-toml-dependencies-to-local-repos","children":[]},{"level":2,"title":"How to publish?","slug":"how-to-publish","link":"#how-to-publish","children":[]}],"git":{"createdTime":1681174797000,"updatedTime":1692722782000,"contributors":[{"name":"mario4tier","email":"mario4tier@users.noreply.github.com","commits":8}]},"readingTime":{"minutes":2.23,"words":668},"filePathRelative":"how-to/scripts.md","localizedDate":"April 11, 2023","autoDesc":true}');export{L as comp,B as data};
