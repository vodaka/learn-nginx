(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{327:function(a,e,t){"use strict";t.r(e);var n=t(14),r=Object(n.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"常见错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见错误","aria-hidden":"true"}},[a._v("#")]),a._v(" 常见错误")]),a._v(" "),t("h3",{attrs:{id:"配置不生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置不生效","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置不生效")]),a._v(" "),t("p",[a._v("更新配置后使用 "),t("code",[a._v("[sudo] /your/path/nginx -s reload")]),a._v(" 热重载服务。")]),a._v(" "),t("h3",{attrs:{id:"nginx-emerg-getpwnam-nginx-failed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-getpwnam-nginx-failed","aria-hidden":"true"}},[a._v("#")]),a._v(' nginx: [emerg] getpwnam("nginx") failed')]),a._v(" "),t("p",[a._v("表示该用户 "),t("code",[a._v("nginx")]),a._v(" 不存在， 解决方法:")]),a._v(" "),t("ol",[t("li",[a._v("在 "),t("code",[a._v("nginx.conf")]),a._v(" 里添加 "),t("code",[a._v("user nobody;")])]),a._v(" "),t("li",[a._v("创建用户和用户对应的分组")])]),a._v(" "),t("h3",{attrs:{id:"nginx-emerg-getgrnam-xiaowu-failed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-getgrnam-xiaowu-failed","aria-hidden":"true"}},[a._v("#")]),a._v(' nginx: [emerg] getgrnam("xiaowu") failed')]),a._v(" "),t("p",[a._v("表示用户分组不存在，解决方法:")]),a._v(" "),t("ol",[t("li",[a._v("在 "),t("code",[a._v("nginx.conf")]),a._v(" 里添加 "),t("code",[a._v("user nobody;")])]),a._v(" "),t("li",[a._v("创建用户对应的分组")])]),a._v(" "),t("h3",{attrs:{id:"nginx-alert-could-not-open-error-log-file-open-logs-error-log-failed-13-permission-denied"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-alert-could-not-open-error-log-file-open-logs-error-log-failed-13-permission-denied","aria-hidden":"true"}},[a._v("#")]),a._v(' nginx: [alert] could not open error log file: open() "/logs/error.log" failed (13: Permission denied)')]),a._v(" "),t("p",[a._v("启动 Nginx 的用户权限不够导致无法写入日志文件，常见于非 "),t("code",[a._v("root")]),a._v(" 用户启动报错。")]),a._v(" "),t("h3",{attrs:{id:"nginx-emerg-bind-to-0-0-0-0-80-failed-48-address-already-in-use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-bind-to-0-0-0-0-80-failed-48-address-already-in-use","aria-hidden":"true"}},[a._v("#")]),a._v(" nginx: [emerg] bind() to 0.0.0.0:80 failed (48: Address already in use)")]),a._v(" "),t("p",[a._v("80端口被占用启动失败，修改端口或者杀死占用者再启动即可。")]),a._v(" "),t("h3",{attrs:{id:"nginx-error-open-nginx-pid-failed-2-no-such-file-or-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-error-open-nginx-pid-failed-2-no-such-file-or-directory","aria-hidden":"true"}},[a._v("#")]),a._v(' nginx: [error] open() "nginx.pid" failed (2: No such file or directory)')]),a._v(" "),t("p",[a._v("pid 进程 id 文件不存在，可能文件被删除或者已经停止，在停止 Nginx 时会使用该进程id，如果不存在将失败，可以手动 kill 掉。")]),a._v(" "),t("h3",{attrs:{id:"nginx-emerg-unknown-realpath-roots-xxx-variable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-unknown-realpath-roots-xxx-variable","aria-hidden":"true"}},[a._v("#")]),a._v(' nginx: [emerg] unknown "realpath_roots_xxx" variable')]),a._v(" "),t("p",[a._v("变量 "),t("code",[a._v("$realpath_roots_xxx")]),a._v(" 不存在")]),a._v(" "),t("h3",{attrs:{id:"nginx-emerg-add-header-directive-is-not-allowed-here-in-xx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-add-header-directive-is-not-allowed-here-in-xx","aria-hidden":"true"}},[a._v("#")]),a._v(' nginx: [emerg] "add_header" directive is not allowed here in xx')]),a._v(" "),t("p",[t("code",[a._v("add_header")]),a._v(" 指令不能直接在 "),t("code",[a._v("if")]),a._v(" 判断内，可以在 "),t("code",[a._v("http")]),a._v("、"),t("code",[a._v("server")]),a._v("、"),t("code",[a._v("server.location")]),a._v("、"),t("code",[a._v("server.location.if")]),a._v(" 下。")]),a._v(" "),t("h3",{attrs:{id:"nginx-emerg-proxy-pass-cannot-have-uri-part-in-location-given-by-regular-expression-or-inside-named-location-or-inside-if-statement-or-inside-limit-except-block-in-xx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-proxy-pass-cannot-have-uri-part-in-location-given-by-regular-expression-or-inside-named-location-or-inside-if-statement-or-inside-limit-except-block-in-xx","aria-hidden":"true"}},[a._v("#")]),a._v(' nginx: [emerg] "proxy_pass" cannot have URI part in location given by regular expression, or inside named location, or inside "if" statement, or inside "limit_except" block in xx')]),a._v(" "),t("p",[a._v("这是 "),t("code",[a._v("proxy_pass")]),a._v(" 指令在正则匹配时不能使用包含路径的链接，如以下都会报错：")]),a._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("location")]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("~")]),t("span",{attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("^")]),t("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v("api"),t("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{attrs:{class:"token keyword"}},[a._v("proxy_pass")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("http")]),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{attrs:{class:"token operator"}},[a._v("/")]),t("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v("host"),t("span",{attrs:{class:"token operator"}},[a._v("/")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{attrs:{class:"token keyword"}},[a._v("location")]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token variable"}},[a._v("$uri")]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("~")]),t("span",{attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("^")]),t("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v("api"),t("span",{attrs:{class:"token operator"}},[a._v("/")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{attrs:{class:"token keyword"}},[a._v("proxy_pass")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("http")]),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{attrs:{class:"token operator"}},[a._v("/")]),t("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v("host"),t("span",{attrs:{class:"token operator"}},[a._v("/")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("解决办法就是把 "),t("code",[a._v("/")]),a._v(" 去掉，更多关于 "),t("code",[a._v("proxy_pass")]),a._v(" 请看："),t("router-link",{attrs:{to:"/example/proxy_pass.html"}},[t("code",[a._v("proxy_pass")]),a._v(" 技巧")]),a._v(" 。")],1)])},[],!1,null,null,null);e.default=r.exports}}]);