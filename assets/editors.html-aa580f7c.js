import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as l,a as e,b as n,d as o,e as d}from"./app-39473e7b.js";const c={},h=e("p",null,"Anyone with a Github account can participate.",-1),u={href:"https://github.com/chainmovers/suibase/tree/main/docs/website",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"editing-on-github-for-easy-quick-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#editing-on-github-for-easy-quick-changes","aria-hidden":"true"},"#"),n(" Editing on Github (for easy/quick changes)")],-1),m=e("p",null,'Open the editor with the "Edit this pages on Github" link at the bottom.',-1),_=e("strong",null,"new branch",-1),b=e("br",null,null,-1),g=["src"],v=e("br",null,null,-1),f=e("p",null,"Your proposed changes will be merged after review.",-1),k=e("h2",{id:"editing-the-cookbook-on-your-machine",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#editing-the-cookbook-on-your-machine","aria-hidden":"true"},"#"),n(" Editing the Cookbook on your machine")],-1),y=e("p",null,"If you prefer to preview exactly your change, then you need to run vuepress on your machine and modify the markdown files with an editor (e.g. VSCode).",-1),w=e("p",null,"Prerequisites:",-1),x={href:"https://nodejs.dev/en/learn/how-to-install-nodejs/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://pnpm.io/installation",target:"_blank",rel:"noopener noreferrer"},E=d(`<p>For the one-time vuepress installation do:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> ~/suibase/docs
$ <span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To start vuepress (the server) do:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> ~/suibase/docs
$ <span class="token function">pnpm</span> start
<span class="token punctuation">..</span>.
Open your browser at http://localhost:8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The browser updates as you change files under ~/suibase/docs/src</p>`,5),q={href:"https://theme-hope.vuejs.press/guide/",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"Submit your changes as a pull request, just ask as needed (not as hard as it seems once you do it once).",-1);function N(t,S){const s=i("ExternalLinkIcon");return r(),l("div",null,[h,e("p",null,[n("The cookbook is built from markdown files (.md) and served directly from "),e("a",u,[n("github"),o(s)]),n(".")]),p,m,e("p",null,[n('When ready to propose your changes just select "Create a '),_,n('" and give it a name:'),b,e("img",{src:t.$withBase("/assets/propose-change.png"),alt:"Propose Changes"},null,8,g),v]),f,k,y,w,e("ul",null,[e("li",null,[n("NodeJS (>= 16.4) ( "),e("a",x,[n("https://nodejs.dev/en/learn/how-to-install-nodejs/"),o(s)]),n(" )")]),e("li",null,[n("pnpm ( "),e("a",j,[n("https://pnpm.io/installation"),o(s)]),n(" )")])]),E,e("p",null,[n("See "),e("a",q,[n("https://theme-hope.vuejs.press/guide/"),o(s)]),n(" for advanced markdown features.")]),C])}const B=a(c,[["render",N],["__file","editors.html.vue"]]);export{B as default};