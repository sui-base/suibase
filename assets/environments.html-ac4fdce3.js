import{_ as u,Y as d,Z as p,a0 as n,a1 as e,a2 as i,a3 as t,E as r}from"./framework-93324f42.js";const v={},m=n("h2",{id:"connecting-to-specific-network-environment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#connecting-to-specific-network-environment","aria-hidden":"true"},"#"),e(" Connecting to specific network environment")],-1),k=n("p",null,"When you are working on Sui development, you will need to connect to a specific Sui Full node on a Sui network.",-1),b={href:"https://fullnode.mainnet.sui.io/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://fullnode.devnet.sui.io",target:"_blank",rel:"noopener noreferrer"},_={href:"https://fullnode.testnet.sui.io/",target:"_blank",rel:"noopener noreferrer"},g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`To be done. Add your contribution here.
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[e("To be done"),n("span",{class:"token punctuation"},"."),e(" Add your contribution here"),n("span",{class:"token punctuation"},"."),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" JsonRpcProvider"),n("span",{class:"token punctuation"},","),e(" devnetConnection "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},"'@mysten/sui.js'"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token comment"},"// connect to Devnet"),e(`

`),n("span",{class:"token keyword"},"const"),e(" provider "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"new"),e(),n("span",{class:"token class-name"},"JsonRpcProvider"),n("span",{class:"token punctuation"},"("),e("devnetConnection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("h2",{id:"getting-test-sui",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getting-test-sui","aria-hidden":"true"},"#"),e(" Getting Test Sui")],-1),x=n("p",null,"If you want to test transactions on Sui network you need first to get Sui coins in your wallet. To receive test Sui in your wallet you have to make a request to the faucet server.",-1),C=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`To be done. Add your contribution here.
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[e("To be done"),n("span",{class:"token punctuation"},"."),e(" Add your contribution here"),n("span",{class:"token punctuation"},"."),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" JsonRpcProvider"),n("span",{class:"token punctuation"},","),e(" devnetConnection "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},"'@mysten/sui.js'"),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token comment"},"// connect to Devnet"),e(`
`),n("span",{class:"token keyword"},"const"),e(" provider "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"new"),e(),n("span",{class:"token class-name"},"JsonRpcProvider"),n("span",{class:"token punctuation"},"("),e("devnetConnection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token comment"},"// get test Sui from the DevNet faucet server"),e(`
`),n("span",{class:"token keyword"},"await"),e(" provider"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"requestSuiFromFaucet"),n("span",{class:"token punctuation"},"("),e(`
  `),n("span",{class:"token string"},"'0x8bab471b0b2e69ac5051c58bbbf81159c4c9d42bf7a58d4f795ecfb12c968506'"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function A(P,I){const c=r("ExternalLinkIcon"),l=r("CodeTabs");return d(),p("div",null,[m,k,n("ul",null,[n("li",null,[e("mainnet "),n("a",b,[e("https://fullnode.mainnet.sui.io/"),i(c)])]),n("li",null,[e("devnet "),n("a",h,[e("https://fullnode.devnet.sui.io"),i(c)])]),n("li",null,[e("testnet "),n("a",_,[e("https://fullnode.testnet.sui.io/"),i(c)])])]),i(l,{id:"23",data:[{title:"CLI"},{title:"Python"},{title:"TypeScript"}],active:2},{tab0:t(({title:s,value:a,isActive:o})=>[g]),tab1:t(({title:s,value:a,isActive:o})=>[f]),tab2:t(({title:s,value:a,isActive:o})=>[y]),_:1}),w,x,i(l,{id:"40",data:[{title:"CLI"},{title:"Python"},{title:"TypeScript"}],active:2},{tab0:t(({title:s,value:a,isActive:o})=>[C]),tab1:t(({title:s,value:a,isActive:o})=>[S]),tab2:t(({title:s,value:a,isActive:o})=>[T]),_:1})])}const J=u(v,[["render",A],["__file","environments.html.vue"]]);export{J as default};
