(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{328:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"主域301重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主域301重定向","aria-hidden":"true"}},[t._v("#")]),t._v(" 主域301重定向")]),t._v(" "),a("p",[t._v("你的网站可能有多个域名访问，比如："),a("code",[t._v("www.xuexb.com")]),t._v("、"),a("code",[t._v("xuexb.com")]),t._v(" 等，设置主域意思是不管用户输入哪个域名，都会 "),a("code",[t._v("301")]),t._v(" 重定向到主域上，设置主域可以对 SEO 更友好，比如：")]),t._v(" "),a("blockquote",[a("p",[t._v("以xuexb.com为主域")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("www.xuexb.com => xuexb.com\nwww.xuexb.com/search/xxoo => xuexb.com/search/xxoo\nwww.xuexb.com/a/b/c/404.html => xuexb.com/a/b/c/404.html\n")])])]),a("p",[t._v("配置文件核心：")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("# 设置多个域名")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" www"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xuexb"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com xuexb"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("# 判断host是不是xuexb.com，如果不是则直接301重定向，permanent表示301")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$host")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'xuexb.com'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("^")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),a("span",{attrs:{class:"token keyword"}},[t._v("http")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("xuexb"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("$"),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" permanent"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("# 其他规则")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);