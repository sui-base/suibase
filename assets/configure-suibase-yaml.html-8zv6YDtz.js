import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as i,a as t}from"./app-vS8CGkAz.js";const s={},o=t(`<h1 id="workdir-customization-suibase-yaml" tabindex="-1"><a class="header-anchor" href="#workdir-customization-suibase-yaml"><span>Workdir Customization (suibase.yaml)</span></a></h1><p>Changing the remote GitHub repo, branch, RPC ports etc... are done using the suibase.yaml found in each workdir (Example: <code>~/suibase/workdirs/localnet/suibase.yaml</code>)</p><p>We will cover here only a few common use case. See this <a href="https://github.com/chainmovers/suibase/blob/main/scripts/defaults/localnet/suibase.yaml" target="_blank" rel="noopener noreferrer">suibase.yaml</a> for the complete parameters list.</p><h3 id="increase-localnet-initial-funding" tabindex="-1"><a class="header-anchor" href="#increase-localnet-initial-funding"><span>Increase localnet initial funding</span></a></h3><p>Add <code>initial_fund_per_address: 9999999999999999999</code> to the file then type <code>localnet regen</code>.</p><p>Set the number to as much as you need (max 64 bits unsigned supported).</p><h3 id="change-default-repo-branch" tabindex="-1"><a class="header-anchor" href="#change-default-repo-branch"><span>Change default repo branch</span></a></h3><p>Add the <code>default_repo</code> branch and then type the workdir update command (e.g. <code>localnet update</code>). Example:</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">default_repo_branch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;main&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="add-your-own-private-keys" tabindex="-1"><a class="header-anchor" href="#add-your-own-private-keys"><span>Add your own private keys</span></a></h3><p>You can have suibase includes in the sui.keystore your own private keys with <code>add_private_keys</code> YAML array list. Example:</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">add_private_keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">AOToawZbfMNATU6KPldYuoGQpp82BE0w5BknPCTBjgXT</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0x126e82a77f7768a59d355eb4ceb9c1a33b3652b8896c22d6b7e0ff94cee23109</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>YAML is indentation sensitive. You need exactly two spaces in front of the &#39;-&#39;.</li><li>The private key can be either in sui.keystore format (Base64 33 bytes) or wallet format (Hex 32 bytes).</li></ul><p>To apply the change you need to perform an update, regen or start workdir command (e.g. <code>localnet regen</code>).</p><h3 id="disable-auto-generation-of-addresses" tabindex="-1"><a class="header-anchor" href="#disable-auto-generation-of-addresses"><span>Disable auto generation of addresses</span></a></h3><p>By default wallets are created with 15 addresses (5 of each type) for convenience of automated testing. This can be disabled with <code>auto_key_generation: false</code></p><p>For localnet, this change is applied on &#39;localnet regen&#39; only.</p><p>For remote network (testnet/devnet/mainnet) you need to modify the <code>&lt;workdir name&gt;/suibase.yaml</code> after the workdir &#39;create&#39; command and before any other command that create a wallet (e.g. <code>mainnet start</code>). Alternatively, you can disable auto-generation for all workdirs with <a href="#global-customization-advanced-feature">global customization</a>.</p><h3 id="global-customization-advanced-feature" tabindex="-1"><a class="header-anchor" href="#global-customization-advanced-feature"><span>Global Customization (advanced feature)</span></a></h3><p>You can apply the same default customization to <strong>all</strong> your workdir with a suibase.yaml located at <code>~/suibase/workdirs/common/suibase.yaml</code>.</p><p>Every time you run a suibase command, it loads up to 3 YAML files in a specific order:<br> (1) ~/suibase/scripts/defaults/&lt;workdir name&gt;/suibase.yaml<br> (2) ~/suibase/workdirs/common/suibase.yaml<br> (3) ~/suibase/workdirs/&lt;workdir name&gt;/suibase.yaml</p><p>You should never modify the files under ~/suibase/scripts/defaults. They are overwritten when you update Suibase. Instead, always create/edit the files (2) and (3) for customization.</p><p>When the same variable is in more than one suibase.yaml, the last one loaded takes effect.</p><p>In short... (1) is how suibase first initialize defaults for <strong>every</strong> variable, you then optionally create (2) to apply customization on all workdir and optionally edit (3) for the final level of customization specific to a workdir.</p>`,24),n=[o];function r(l,d){return i(),a("div",null,n)}const u=e(s,[["render",r],["__file","configure-suibase-yaml.html.vue"]]),p=JSON.parse('{"path":"/how-to/configure-suibase-yaml.html","title":"Workdir Customization (suibase.yaml)","lang":"en-US","frontmatter":{"description":"Workdir Customization (suibase.yaml) Changing the remote GitHub repo, branch, RPC ports etc... are done using the suibase.yaml found in each workdir (Example: ~/suibase/workdirs...","head":[["meta",{"property":"og:url","content":"https://suibase.io/how-to/configure-suibase-yaml.html"}],["meta",{"property":"og:site_name","content":"suibase.io"}],["meta",{"property":"og:title","content":"Workdir Customization (suibase.yaml)"}],["meta",{"property":"og:description","content":"Workdir Customization (suibase.yaml) Changing the remote GitHub repo, branch, RPC ports etc... are done using the suibase.yaml found in each workdir (Example: ~/suibase/workdirs..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-06T04:52:57.000Z"}],["meta",{"property":"article:author","content":"suibase.io"}],["meta",{"property":"article:modified_time","content":"2024-08-06T04:52:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Workdir Customization (suibase.yaml)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-06T04:52:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"suibase.io\\",\\"url\\":\\"https://suibase.io\\"}]}"]]},"headers":[{"level":3,"title":"Increase localnet initial funding","slug":"increase-localnet-initial-funding","link":"#increase-localnet-initial-funding","children":[]},{"level":3,"title":"Change default repo branch","slug":"change-default-repo-branch","link":"#change-default-repo-branch","children":[]},{"level":3,"title":"Add your own private keys","slug":"add-your-own-private-keys","link":"#add-your-own-private-keys","children":[]},{"level":3,"title":"Disable auto generation of addresses","slug":"disable-auto-generation-of-addresses","link":"#disable-auto-generation-of-addresses","children":[]},{"level":3,"title":"Global Customization (advanced feature)","slug":"global-customization-advanced-feature","link":"#global-customization-advanced-feature","children":[]}],"git":{"createdTime":1678852644000,"updatedTime":1722919977000,"contributors":[{"name":"mario4tier","email":"mario4tier@users.noreply.github.com","commits":6}]},"readingTime":{"minutes":1.3,"words":391},"filePathRelative":"how-to/configure-suibase-yaml.md","localizedDate":"March 15, 2023","autoDesc":true}');export{u as comp,p as data};
