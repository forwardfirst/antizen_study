(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{198:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("页面整体布局是一个产品最外层的框架结构，往往会包含导航、侧边栏、面包屑以及内容等。想要了解一个后台项目，先要了解它的基础布局。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("对应代码")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src/views/layout",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/views/layout"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("code",[t._v("@")]),t._v(" 是 webpack 的 "),a("a",{attrs:{href:"https://webpack.js.org/configuration/resolve/#resolve-alias",target:"_blank",rel:"noopener noreferrer"}},[t._v("alias"),a("OutboundLink")],1),t._v(" 不懂得请自行研究")]),t._v(" "),a("br"),t._v(" "),t._m(3),t._v(" "),t._m(4),a("p",[t._v("这里使用了 vue-router "),a("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/nested-routes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("路由嵌套"),a("OutboundLink")],1),t._v(", 所以一般情况下，你增加或者修改页面只会影响 "),a("code",[t._v("app-main")]),t._v("这个主体区域。其它配置在 "),a("code",[t._v("layout")]),t._v(" 中的内容如：侧边栏或者导航栏都是不会随着你主体页面变化而变化的。")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("br"),t._v(" "),t._m(7),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("对应代码")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/layout/components/AppMain.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/views/layout/components/AppMain"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("这里在 "),a("code",[t._v("app-main")]),t._v(" 外部包了一层 "),a("code",[t._v("keep-alive")]),t._v(" 主要是为了缓存 "),a("code",[t._v("<router-view>")]),t._v(" 的，配合页面的 "),a("code",[t._v("tabs-view")]),t._v(" 标签导航使用，如不需要可自行"),a("router-link",{attrs:{to:"./tags-view.html"}},[t._v("去除")]),t._v("。")],1),t._v(" "),t._m(8),t._v(" "),a("br"),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("我创建和编辑的页面使用的是同一个 component，默认情况下当这两个页面切换时并不会触发 vue 的 created 或者 mounted 钩子，官方说你可以通过 watch $route 的变化来做处理，但其实说真的还是蛮麻烦的。后来发现其实可以简单的在 router-view 上加上一个唯一的 key，来保证路由切换时都会重新渲染触发钩子了。这样简单的多了。")]),t._v(" "),t._m(12),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("示例代码："),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src/views/form",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/views/form"),a("OutboundLink")],1)])]),t._v(" "),t._m(14),a("blockquote"),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("所以本项目也不会适配移动端，只是做了一点简单的响应式配置，有需求请自行修改。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局","aria-hidden":"true"}},[this._v("#")]),this._v(" 布局")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"layout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layout","aria-hidden":"true"}},[this._v("#")]),this._v(" Layout")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://wpimg.wallstcn.com/7066d74f-12c5-47d6-b6ad-f22b43fec917.png",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("vue-element-admin")]),t._v(" 中大部分页面都是基于这个 "),a("code",[t._v("layout")]),t._v(" 的，除了个别页面如： "),a("code",[t._v("login")]),t._v(" , "),a("code",[t._v("404")]),t._v(", "),a("code",[t._v("401")]),t._v(" 等页面没有使用该"),a("code",[t._v("layout")]),t._v("。如果你想在一个项目中有多种不同的"),a("code",[t._v("layout")]),t._v("也是很方便的，只要在一级路由那里选择不同的"),a("code",[t._v("layout")]),t._v("组件就行。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//No layout")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/401'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'errorPage/401'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Has layout")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/documentation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//你可以选择不同的layout组件")]),t._v("\n  component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里开始对应的路由都会显示在app-main中 如上图所示")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'documentation/index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'documentation'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("/foo                                  /bar\n+------------------+                  +-----------------+\n| layout           |                  | layout          |\n| +--------------+ |                  | +-------------+ |\n| | foo.vue      | |  +------------\x3e  | | bar.vue     | |\n| |              | |                  | |             | |\n| +--------------+ |                  | +-------------+ |\n+------------------+                  +-----------------+\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当然你也可以一个项目里面使用多个不同的 "),s("code",[this._v("layout")]),this._v("，只要在你想作用的路由父级上引用它就可以了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"app-main"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-main","aria-hidden":"true"}},[this._v("#")]),this._v(" app-main")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("其中"),s("code",[this._v("transition")]),this._v(" 定义了页面之间切换动画，可以根据自己的需求，自行修改转场动画。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"router-view"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-view","aria-hidden":"true"}},[this._v("#")]),this._v(" router-view")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Different router the same component vue。")]),this._v(" 真实的业务场景中，这种情况很多。比如")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://wpimg.wallstcn.com/ac5047c9-cb75-4415-89e3-9386c42f3ef9.jpeg",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("view "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\ncomputed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 或者 :key="route.fullPath" 只要保证key唯一就可以了')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" undefined"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("或者")]),this._v(" 可以像本项目中 "),s("code",[this._v("editForm")]),this._v(" 和 "),s("code",[this._v("createForm")]),this._v(" 声明两个不同的 view 但引入同一个 component。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- create.vue --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("article-detail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":is-edit")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("article-detail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" //create\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ArticleDetail "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/ArticleDetail'")]),t._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- edit.vue --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("article-detail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":is-edit")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("article-detail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" //edit\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ArticleDetail "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/ArticleDetail'")]),t._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"移动端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动端","aria-hidden":"true"}},[this._v("#")]),this._v(" 移动端")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("element-ui")]),this._v(" 官方对自己的定位是桌面端后台框架，而且对于管理后台这种重交互的项目来说是不能通过简单的适配来满足桌面端和移动端两端不同的交互，所以真要做移动版后台，建议重新做一套系统。")])}],!1,null,null,null);n.options.__file="layout.md";s.default=n.exports}}]);