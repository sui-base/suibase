import{_ as n,W as s,X as o,Y as e,Z as t,$ as i,a0 as d,a1 as r,C as c}from"./framework-5e49288e.js";const l={},h=e("p",null,[t("Contains python program examples for interacting with Sui blockchain. The demo applications require "),e("code",null,"pysui"),t(" Python SUI Client SDK to run.")],-1),p=e("h2",{id:"pre-setup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pre-setup","aria-hidden":"true"},"#"),t(" Pre Setup")],-1),u=r(`<h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> sui-base
$ <span class="token builtin class-name">.</span> env/bin/activate
$ pip <span class="token function">install</span> <span class="token parameter variable">-U</span> pip
$ pip <span class="token function">install</span> --use-pep517 <span class="token parameter variable">-r</span> requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo-s" tabindex="-1"><a class="header-anchor" href="#demo-s" aria-hidden="true">#</a> Demo&#39;s</h2><p>The examples for python search the <code>sui-base</code> workdirs to figure out which configuration to use. If looks for the <code>active</code> symlink and reads the <code>client.yaml</code> from that link.</p><p>However; if you are running a localnet you will, of course, have to <code>localnet start</code> before running the python demos.</p><p>For convenience, shell scripts have been added to <code>sui-base/python/bin</code>. It is expected that when you want to run a script you are in the python folder and you&#39;ve activated the virtual environment (<code>. env/bin/activate</code>).</p><table><thead><tr><th>Demo</th><th>What it does</th><th>Invoke</th><th>source</th></tr></thead><tbody><tr><td>sysinfo</td><td>displays general sui chain information</td><td><code>bin/sysinfo</code></td><td>src/demo1</td></tr><tr><td>coinage</td><td>displays information about coins and balanced</td><td><code>bin/coinage</code></td><td>src/demo2</td></tr></tbody></table>`,7);function m(b,v){const a=c("RouterLink");return s(),o("div",null,[h,p,e("p",null,[t("If not already done, you should first "),i(a,{to:"/how-to/install.html"},{default:d(()=>[t("install sui-base")]),_:1})]),u])}const y=n(l,[["render",m],["__file","index.html.vue"]]);export{y as default};
