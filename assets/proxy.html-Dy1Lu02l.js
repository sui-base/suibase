import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o,c as l,a as e,d as s,b as c,e as t}from"./app-DWP7F4dH.js";const d={},p=t('<p>Makes your JSON-RPC queries more reliable with:</p><ul><li>Selection of fastest RPC server currently available.</li><li>Automatic retry on failure (when safe against transaction execution repetition).</li><li>Load balancing across multiple RPC servers (to minimize rate-limiting).</li></ul><h2 id="how-to-use-it" tabindex="-1"><a class="header-anchor" href="#how-to-use-it"><span>How to use it?</span></a></h2><p>Have your applications query toward the addresses of the local proxy server:</p><table><thead><tr><th style="text-align:center;">Network</th><th style="text-align:center;">Proxy Link</th></tr></thead><tbody><tr><td style="text-align:center;">localnet</td><td style="text-align:center;"><code>http://localhost:44340</code></td></tr><tr><td style="text-align:center;">devnet</td><td style="text-align:center;"><code>http://localhost:44341</code></td></tr><tr><td style="text-align:center;">testnet</td><td style="text-align:center;"><code>http://localhost:44342</code></td></tr><tr><td style="text-align:center;">mainnet</td><td style="text-align:center;"><code>http://localhost:44343</code></td></tr></tbody></table><p>The proxy forward/retry/distribute your queries among all the healthy RPC nodes configured.</p><p>All suibase scripts (and the corresponding client.yaml) are already configured to use the proxy server by default.</p><p>Useful related workdir commands are start/stop/status and links (e.g. <code>devnet start</code>, <code>testnet links</code> etc...).</p><h2 id="monitoring-rpc-links" tabindex="-1"><a class="header-anchor" href="#monitoring-rpc-links"><span>Monitoring RPC Links</span></a></h2><p>The proxy runs in background when you start one of localnet, devnet, testnet or mainnet (e.g. <code>devnet start</code>).</p><p>The workdir <code>links</code> command (e.g. <code>testnet links</code>) shows status for all configured RPC servers.</p>',11),u=["src"],h=e("br",null,null,-1),m=t(`<details class="hint-container details"><summary>Details on cummulative request stats</summary><p>Each <strong>user query</strong> is counted only once in one of the following metric depending of its outcome.<br><br><strong>Success first attempt</strong>: One healthy RPC node was selected and the request succeeded immediatly.<br><br><strong>Success after retry</strong>: One healthy RPC node was selected but failed, the request eventually succeeded after retries with one or more other servers (when safe to retry). From a user perspective, the request succeeded as if a single RPC node was used.<br><br><strong>Failure bad request</strong>: It was determine that the request was malformed and would not succeed with any RPC nodes. Therefore the request is not retried and the failure is reported immediatly. Check the response for hint on how to fix the request.<br><br><strong>Failure others</strong>: All other scenarios when the response was not a JSON-RPC success. The proxy response will have more information.<br></p></details><details class="hint-container details"><summary>Details on individual server stats</summary><p><strong>Status</strong>: Either OK or DOWN. Goes DOWN on any failure related to the server not responding. Every 15 seconds the proxy does a health check toward every nodes to verify availability and measure response time.<br><br><strong>Health%</strong>: Varies from -100% (most unealthy) to 100% (healthiest). This is intended for relative comparison between all servers. The score factors duration of healthy state or failures, frequency of retries and rate limitation etc... any positive value is considered healthy (Status OK).<br><br><strong>Load%</strong>: Distribution of the <strong>user</strong> request among all nodes. The sum of the load% is 100%. Health check queries are not included in this stat.<br><br><strong>RespT</strong>: The time between the health check query and the response time. Average of the last 20 queries (the result from the most recent query has more weight).<br><br><strong>Success%</strong>: Ratio of <strong>user</strong> request that were successful after the server was selected and considered healthy. Will typically be 100%, a value below 100% signify the server did unexpectadly fails on a user query (Note: the query might have been retried on another server and succeeded from a user perspective).<br></p></details><h2 id="rpc-links-configuration" tabindex="-1"><a class="header-anchor" href="#rpc-links-configuration"><span>RPC links configuration</span></a></h2><p>Out of the box, suibase come with a set of public RPC links known to be operating. This is maintained by the community and updated whenever you do <code>~/suibase/update</code>.</p><p>You can add your own RPC links by editing your workdir&#39;s suibase.yaml file.<br> Example with two RPC nodes:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">links</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">alias</span><span class="token punctuation">:</span> <span class="token string">&quot;sui.io&quot;</span>
    <span class="token key atrule">rpc</span><span class="token punctuation">:</span> <span class="token string">&quot;https://fullnode.mainnet.sui.io:443&quot;</span>
    <span class="token key atrule">ws</span><span class="token punctuation">:</span> <span class="token string">&quot;wss://fullnode.mainnet.sui.io:443&quot;</span>
    <span class="token key atrule">priority</span><span class="token punctuation">:</span> <span class="token number">10</span>  
  <span class="token punctuation">-</span> <span class="token key atrule">alias</span><span class="token punctuation">:</span> <span class="token string">&quot;suiscan.xyz&quot;</span>
    <span class="token key atrule">rpc</span><span class="token punctuation">:</span> <span class="token string">&quot;https://rpc-mainnet.suiscan.xyz:443&quot;</span>
    <span class="token key atrule">metrics</span><span class="token punctuation">:</span> <span class="token string">&quot;https://rpc-mainnet.suiscan.xyz/metrics&quot;</span>
    <span class="token key atrule">ws</span><span class="token punctuation">:</span> <span class="token string">&quot;wss://rpc-mainnet.suiscan.xyz/websocket&quot;</span>
    <span class="token key atrule">priority</span><span class="token punctuation">:</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>The indentation is important (two spaces before the &#39;-&#39;).</li><li>&#39;alias&#39; and &#39;rpc&#39; are mandatory. All others are optional.</li></ul><details class="hint-container details"><summary>All Links Parameters</summary><p><strong>alias</strong><br> Mandatory unique name for the link. Recommended less than 20 characters.</p><p><strong>rpc</strong><br> Mandatory RPC node address. Typically <code>https://&lt;node name&gt;:443</code></p><p><strong>ws</strong><br> Websocket address. For future use. You can specify it, but currently not used. [ Default = None ]</p><p><strong>metric</strong><br> The metric address. Not commonly provided by public nodes. For future use. You can specify it, but currently not used. [ Default = None ]</p><p><strong>priority</strong><br> A preference order when selecting between multiple servers. It is used, as an example, when the proxy server is initializing and the health of the remote RPC nodes are not yet all known. A node with a smaller priority number might be selected first. All default links provided by suibase are in 10 to 20 range [ Default = 20 ]</p></details><h2 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade"><span>Upgrade</span></a></h2><p>The proxy server update and restart as needed when you do <code>~/suibase/update</code>.</p><h2 id="stopping-and-disabling" tabindex="-1"><a class="header-anchor" href="#stopping-and-disabling"><span>Stopping and Disabling</span></a></h2><p>Use the workdir <code>stop</code> command (e.g. <code>devnet stop</code>) to temporarily disable the proxy services for a specific workdir.<br><br> Disabling is also configurable by adding <code>proxy_enabled: false</code> to a suibase.yaml for a specific workdir.<br><br> You can disable for all workdirs at once by adding <code>proxy_enabled: false</code> to:<br><code>~/suibase/workdirs/common/suibase.yaml</code></p><h2 id="adding-rpc-services-with-api-key" tabindex="-1"><a class="header-anchor" href="#adding-rpc-services-with-api-key"><span>Adding RPC Services with API Key</span></a></h2>`,13),y={href:"https://www.shinami.com/",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>Add to <code>~/suibase/workdirs/testnet/suibase.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">links</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">alias</span><span class="token punctuation">:</span> <span class="token string">&quot;shinami.com&quot;</span>
    <span class="token key atrule">rpc</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.shinami.com:443/node/v1/sui_testnet_xxxxxxxxx&quot;</span>
    <span class="token key atrule">ws</span><span class="token punctuation">:</span> <span class="token string">&quot;wss://api.shinami.com:443/node/v1/sui_testnet_xxxxxxxxx&quot;</span>
    <span class="token key atrule">priority</span><span class="token punctuation">:</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Replace &quot;sui_testnet_xxxxxxxxx&quot; with the API key specific to your shinami account (info is in their web app).</p><p>Do the same for mainnet in <code>~/suibase/workdirs/mainnet/suibase.yaml</code>.</p><p>The proxy server automatically detect and apply the changes after you save the .yaml file.</p><p>Many other commercial RPC services can be added in same way.</p>`,6);function b(n,k){const a=i("ExternalLinkIcon");return o(),l("div",null,[p,e("p",null,[e("img",{src:n.$withBase("/assets/testnet-links.png"),alt:"testnet links"},null,8,u),h]),m,e("p",null,[s("This is an example of how to add services from "),e("a",y,[s("https://www.shinami.com/"),c(a)])]),g])}const w=r(d,[["render",b],["__file","proxy.html.vue"]]),x=JSON.parse('{"path":"/how-to/proxy.html","title":"Proxy Server ( Multi-Link RPC )","lang":"en-US","frontmatter":{"title":"Proxy Server ( Multi-Link RPC )","order":2,"description":"Makes your JSON-RPC queries more reliable with: Selection of fastest RPC server currently available. Automatic retry on failure (when safe against transaction execution repetiti...","head":[["meta",{"property":"og:url","content":"https://suibase.io/how-to/proxy.html"}],["meta",{"property":"og:site_name","content":"suibase.io"}],["meta",{"property":"og:title","content":"Proxy Server ( Multi-Link RPC )"}],["meta",{"property":"og:description","content":"Makes your JSON-RPC queries more reliable with: Selection of fastest RPC server currently available. Automatic retry on failure (when safe against transaction execution repetiti..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-25T01:29:57.000Z"}],["meta",{"property":"article:author","content":"suibase.io"}],["meta",{"property":"article:modified_time","content":"2024-04-25T01:29:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Proxy Server ( Multi-Link RPC )\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-25T01:29:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"suibase.io\\",\\"url\\":\\"https://suibase.io\\"}]}"]]},"headers":[{"level":2,"title":"How to use it?","slug":"how-to-use-it","link":"#how-to-use-it","children":[]},{"level":2,"title":"Monitoring RPC Links","slug":"monitoring-rpc-links","link":"#monitoring-rpc-links","children":[]},{"level":2,"title":"RPC links configuration","slug":"rpc-links-configuration","link":"#rpc-links-configuration","children":[]},{"level":2,"title":"Upgrade","slug":"upgrade","link":"#upgrade","children":[]},{"level":2,"title":"Stopping and Disabling","slug":"stopping-and-disabling","link":"#stopping-and-disabling","children":[]},{"level":2,"title":"Adding RPC Services with API Key","slug":"adding-rpc-services-with-api-key","link":"#adding-rpc-services-with-api-key","children":[]}],"git":{"createdTime":1691812112000,"updatedTime":1714008597000,"contributors":[{"name":"mario4tier","email":"mario4tier@users.noreply.github.com","commits":4}]},"readingTime":{"minutes":2.98,"words":893},"filePathRelative":"how-to/proxy.md","localizedDate":"August 12, 2023","autoDesc":true}');export{w as comp,x as data};
