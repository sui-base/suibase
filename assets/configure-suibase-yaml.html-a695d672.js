import{_ as t,Y as s,Z as o,a0 as e,a1 as a,a2 as i,$ as r,E as l}from"./framework-93324f42.js";const c={},d=e("h1",{id:"workdir-customization-suibase-yaml",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#workdir-customization-suibase-yaml","aria-hidden":"true"},"#"),a(" Workdir Customization ( suibase.yaml )")],-1),u=e("p",null,"Changing the remote github repo, branch, RPC ports etc... are done using the suibase.yaml found in each workdir ( Example: ~/suibase/workdirs/localnet/suibase.yaml )",-1),h={href:"https://github.com/sui-base/suibase/blob/main/scripts/defaults/localnet/suibase.yaml",target:"_blank",rel:"noopener noreferrer"},p=r(`<h3 id="increase-localnet-initial-funding" tabindex="-1"><a class="header-anchor" href="#increase-localnet-initial-funding" aria-hidden="true">#</a> Increase localnet initial funding</h3><p>Add <code>initial_fund_per_address: 9999999999999999999</code> to the file then type <code>localnet regen</code>.</p><p>Set the number to as much as you need (max 64 bits unsigned supported).</p><h3 id="change-default-repo-and-branch" tabindex="-1"><a class="header-anchor" href="#change-default-repo-and-branch" aria-hidden="true">#</a> Change default repo and branch</h3><p>Add the default_repo_XXXX variables (it is ok to change only one) and then type the workdir update command (e.g. &quot;localnet update&quot;). Example:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">default_repo_url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://github.com/acme/forked_sui.git&quot;</span>
<span class="token key atrule">default_repo_branch</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(b,_){const n=l("ExternalLinkIcon");return s(),o("div",null,[d,u,e("p",null,[a("We will cover here only a few common use case. See this "),e("a",h,[a("suibase.yaml"),i(n)]),a(" for the complete parameters list.")]),p])}const g=t(c,[["render",m],["__file","configure-suibase-yaml.html.vue"]]);export{g as default};