import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as r,a as s,b as n,d as i,w as a}from"./app-BE-FJzrA.js";const d={},k=s("h2",{id:"facts",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#facts"},[s("span",null,"Facts")])],-1),m={class:"hint-container tip"},g=s("p",{class:"hint-container-title"},"Fact Sheet",-1),h=s("li",null,[n("Sui cli "),s("code",null,"sui client"),n(" will automatically generate a alias file (~/.sui/sui_config/sui.aliases) starting in version 1.16.0")],-1),f=s("li",null,"The alias file has a 1:1 mapping of alias names to the public key of the associated keypair",-1),v=s("li",null,"The alias name must start with a letter and can contain only letters, digits, hyphens (-), or underscores (_)",-1),b=s("li",null,[n("Command line caveats: "),s("ul",null,[s("li",null,"To rename an alias you will need to edit the alias file via editor"),s("li",null,"There is no known alias name length")])],-1),_=s("li",null,[n("pysui will check for alias file when using "),s("code",null,"default_config()"),n(", if not found it will generate one that complies with Sui 1.16.0 alias file format")],-1),y=s("li",null,[n("pysui's "),s("code",null,"SuiConfig"),n(" has methods to list, rename, use aliases for address and keypair lookups, and address or keypair lookup of aliases")],-1),w=s("li",null,"pysui enforces min and max aliases lengths to be between 3 and 64 characters. However; if alias name in alias file is modified manually pysui will continue to operate",-1),S=s("li",null,"An alias can be provided in the creation of new address/keypairs as well as recovering of same",-1),A={href:"https://pysui.readthedocs.io/en/latest/aliases.html",target:"_blank",rel:"noopener noreferrer"},x=s("h2",{id:"inspecting-aliases",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#inspecting-aliases"},[s("span",null,"Inspecting aliases")])],-1),C=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,`sui keytool list
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),T=s("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[s("pre",{class:"language-python"},[s("code",null,[s("span",{class:"token keyword"},"from"),n(" pysui "),s("span",{class:"token keyword"},"import"),n(` SuiConfig

`),s("span",{class:"token keyword"},"def"),n(),s("span",{class:"token function"},"alias_look"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},":"),n(`
    `),s("span",{class:"token triple-quoted-string string"},'"""Show the aliase, associated address and public key."""'),n(`
    cfg `),s("span",{class:"token operator"},"="),n(" SuiConfig"),s("span",{class:"token punctuation"},"."),n("default_config"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token comment"},"# If running localnet w/suibase use this"),n(`
    `),s("span",{class:"token comment"},"# cfg = SuiConfig.sui_base_config()"),n(`
    `),s("span",{class:"token comment"},"# Loop through aliases and print"),n(`
    `),s("span",{class:"token keyword"},"print"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token keyword"},"for"),n(" alias "),s("span",{class:"token keyword"},"in"),n(" cfg"),s("span",{class:"token punctuation"},"."),n("aliases"),s("span",{class:"token punctuation"},":"),n(`
        `),s("span",{class:"token keyword"},"print"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string-interpolation"},[s("span",{class:"token string"},'f"Alias:      '),s("span",{class:"token interpolation"},[s("span",{class:"token punctuation"},"{"),n("alias"),s("span",{class:"token punctuation"},"}")]),s("span",{class:"token string"},'"')]),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token keyword"},"print"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string-interpolation"},[s("span",{class:"token string"},'f"Address:    '),s("span",{class:"token interpolation"},[s("span",{class:"token punctuation"},"{"),n("cfg"),s("span",{class:"token punctuation"},"."),n("addr4al"),s("span",{class:"token punctuation"},"("),n("alias"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"}")]),s("span",{class:"token string"},'"')]),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token keyword"},"print"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string-interpolation"},[s("span",{class:"token string"},'f"PublicKey:  '),s("span",{class:"token interpolation"},[s("span",{class:"token punctuation"},"{"),n("cfg"),s("span",{class:"token punctuation"},"."),n("pk4al"),s("span",{class:"token punctuation"},"("),n("alias"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"}")]),s("span",{class:"token string"},'\\n"')]),s("span",{class:"token punctuation"},")"),n(`

`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),F=s("h2",{id:"renaming-aliases",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#renaming-aliases"},[s("span",null,"Renaming aliases")])],-1),I=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,`sui keytool update-alias old_alias_name _new_alias_name_
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),P=s("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[s("pre",{class:"language-python"},[s("code",null,[s("span",{class:"token keyword"},"from"),n(" pysui "),s("span",{class:"token keyword"},"import"),n(` SuiConfig

`),s("span",{class:"token keyword"},"def"),n(),s("span",{class:"token function"},"alias_rename"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},":"),n(`
    `),s("span",{class:"token triple-quoted-string string"},'"""Rename an alias."""'),n(`
    cfg `),s("span",{class:"token operator"},"="),n(" SuiConfig"),s("span",{class:"token punctuation"},"."),n("default_config"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token comment"},"# If running localnet w/suibase use this"),n(`
    `),s("span",{class:"token comment"},"# cfg = SuiConfig.sui_base_config()"),n(`
    `),s("span",{class:"token comment"},"# Rename alias for the active_address"),n(`
    new_alias `),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"Primary"'),n(`
    exiting_alias `),s("span",{class:"token operator"},"="),n(" cfg"),s("span",{class:"token punctuation"},"."),n("al4addr"),s("span",{class:"token punctuation"},"("),n("cfg"),s("span",{class:"token punctuation"},"."),n("active_address"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token keyword"},"print"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string-interpolation"},[s("span",{class:"token string"},'f"Existing alias for active address '),s("span",{class:"token interpolation"},[s("span",{class:"token punctuation"},"{"),n("cfg"),s("span",{class:"token punctuation"},"."),n("active_address"),s("span",{class:"token punctuation"},"}")]),s("span",{class:"token string"}," is "),s("span",{class:"token interpolation"},[s("span",{class:"token punctuation"},"{"),n("exiting_alias"),s("span",{class:"token punctuation"},"}")]),s("span",{class:"token string"},'"')]),s("span",{class:"token punctuation"},")"),n(`
    cfg`),s("span",{class:"token punctuation"},"."),n("rename_alias"),s("span",{class:"token punctuation"},"("),n("old_alias"),s("span",{class:"token operator"},"="),n("exiting_alias"),s("span",{class:"token punctuation"},","),n(" new_alias"),s("span",{class:"token operator"},"="),n("new_alias"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token keyword"},"print"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string-interpolation"},[s("span",{class:"token string"},`f"Address associated to new alias 'Primary' = `),s("span",{class:"token interpolation"},[s("span",{class:"token punctuation"},"{"),n("cfg"),s("span",{class:"token punctuation"},"."),n("addr4al"),s("span",{class:"token punctuation"},"("),n("new_alias"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"}")]),s("span",{class:"token string"},'\\n"')]),s("span",{class:"token punctuation"},")"),n(`

`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),U=s("h2",{id:"using-aliases",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#using-aliases"},[s("span",null,"Using aliases")])],-1),N=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[n("Not applicable at this "),s("span",{class:"token function"},"time"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),R=s("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[s("pre",{class:"language-python"},[s("code",null,[s("span",{class:"token keyword"},"from"),n(" pysui "),s("span",{class:"token keyword"},"import"),n(" SyncClient"),s("span",{class:"token punctuation"},","),n(`SuiConfig

`),s("span",{class:"token keyword"},"def"),n(),s("span",{class:"token function"},"alias_use"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},":"),n(`
    `),s("span",{class:"token triple-quoted-string string"},'"""Use alias to lookup address for transaciton."""'),n(`
    cfg `),s("span",{class:"token operator"},"="),n(" SuiConfig"),s("span",{class:"token punctuation"},"."),n("default_config"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token comment"},"# If running localnet w/suibase use this"),n(`
    `),s("span",{class:"token comment"},"# cfg = SuiConfig.sui_base_config()"),n(`
    client `),s("span",{class:"token operator"},"="),n(" SyncClient"),s("span",{class:"token punctuation"},"("),n("cfg"),s("span",{class:"token punctuation"},")"),n(`

    `),s("span",{class:"token comment"},"# Using alias for convenience"),n(`
    result `),s("span",{class:"token operator"},"="),n(" client"),s("span",{class:"token punctuation"},"."),n("execute"),s("span",{class:"token punctuation"},"("),n("GetAllCoins"),s("span",{class:"token punctuation"},"("),n("owner"),s("span",{class:"token operator"},"="),n("cfg"),s("span",{class:"token punctuation"},"."),n("addr4al"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"Primary"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token keyword"},"if"),n(" result"),s("span",{class:"token punctuation"},"."),n("is_ok"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},":"),n(`
        `),s("span",{class:"token keyword"},"print"),s("span",{class:"token punctuation"},"("),n("result"),s("span",{class:"token punctuation"},"."),n("result_data"),s("span",{class:"token punctuation"},"."),n("to_json"),s("span",{class:"token punctuation"},"("),n("indent"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"2"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token keyword"},"else"),s("span",{class:"token punctuation"},":"),n(`
        `),s("span",{class:"token keyword"},"print"),s("span",{class:"token punctuation"},"("),n("result"),s("span",{class:"token punctuation"},"."),n("result_string"),s("span",{class:"token punctuation"},")"),n(`

`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1);function E(L,V){const c=o("ExternalLinkIcon"),l=o("CodeTabs");return p(),r("div",null,[k,s("div",m,[g,s("ul",null,[h,f,v,b,s("li",null,[n("PySui support of aliases: "),s("ul",null,[_,y,w,S,s("li",null,[n("pysui docs on "),s("a",A,[n("Aliases"),i(c)])])])])])]),x,i(l,{id:"74",data:[{id:"sui"},{id:"pysui"}]},{title0:a(({value:e,isActive:t})=>[n("sui")]),title1:a(({value:e,isActive:t})=>[n("pysui")]),tab0:a(({value:e,isActive:t})=>[C]),tab1:a(({value:e,isActive:t})=>[T]),_:1}),F,i(l,{id:"85",data:[{id:"sui"},{id:"pysui"}]},{title0:a(({value:e,isActive:t})=>[n("sui")]),title1:a(({value:e,isActive:t})=>[n("pysui")]),tab0:a(({value:e,isActive:t})=>[I]),tab1:a(({value:e,isActive:t})=>[P]),_:1}),U,i(l,{id:"96",data:[{id:"sui"},{id:"pysui"}]},{title0:a(({value:e,isActive:t})=>[n("sui")]),title1:a(({value:e,isActive:t})=>[n("pysui")]),tab0:a(({value:e,isActive:t})=>[N]),tab1:a(({value:e,isActive:t})=>[R]),_:1})])}const D=u(d,[["render",E],["__file","aliases.html.vue"]]),Z=JSON.parse('{"path":"/cookbook/code/aliases.html","title":"Aliases for Sui Addresses","lang":"en-US","frontmatter":{"title":"Aliases for Sui Addresses","contributors":true,"editLink":true,"description":"Facts Fact Sheet Sui cli sui client will automatically generate a alias file (~/.sui/sui_config/sui.aliases) starting in version 1.16.0 The alias file has a 1:1 mapping of alias...","head":[["meta",{"property":"og:url","content":"https://suibase.io/cookbook/code/aliases.html"}],["meta",{"property":"og:site_name","content":"suibase.io"}],["meta",{"property":"og:title","content":"Aliases for Sui Addresses"}],["meta",{"property":"og:description","content":"Facts Fact Sheet Sui cli sui client will automatically generate a alias file (~/.sui/sui_config/sui.aliases) starting in version 1.16.0 The alias file has a 1:1 mapping of alias..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-28T12:50:16.000Z"}],["meta",{"property":"article:author","content":"suibase.io"}],["meta",{"property":"article:modified_time","content":"2023-12-28T12:50:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Aliases for Sui Addresses\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-28T12:50:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"suibase.io\\",\\"url\\":\\"https://suibase.io\\"}]}"]]},"headers":[{"level":2,"title":"Facts","slug":"facts","link":"#facts","children":[]},{"level":2,"title":"Inspecting aliases","slug":"inspecting-aliases","link":"#inspecting-aliases","children":[]},{"level":2,"title":"Renaming aliases","slug":"renaming-aliases","link":"#renaming-aliases","children":[]},{"level":2,"title":"Using aliases","slug":"using-aliases","link":"#using-aliases","children":[]}],"git":{"createdTime":1703279300000,"updatedTime":1703767816000,"contributors":[{"name":"Frank V. Castellucci","email":"frankiecast@gmail.com","commits":3}]},"readingTime":{"minutes":1.28,"words":385},"filePathRelative":"cookbook/code/aliases.md","localizedDate":"December 22, 2023","autoDesc":true}');export{D as comp,Z as data};
