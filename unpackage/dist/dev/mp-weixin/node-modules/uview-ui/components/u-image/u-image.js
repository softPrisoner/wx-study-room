(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/uview-ui/components/u-image/u-image"],{366:function(n,e,t){"use strict";t.r(e);var i=t(367),r=t(369);for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);t(371);var u,d=t(13),a=Object(d["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"6dd0d12f",null,!1,i["components"],u);a.options.__file="node_modules/uview-ui/components/u-image/u-image.vue",e["default"]=a.exports},367:function(n,e,t){"use strict";t.r(e);var i=t(368);t.d(e,"render",(function(){return i["render"]})),t.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),t.d(e,"components",(function(){return i["components"]}))},368:function(n,e,t){"use strict";var i;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return u})),t.d(e,"recyclableRender",(function(){return o})),t.d(e,"components",(function(){return i}));try{i={uTransition:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-transition/u-transition")]).then(t.bind(null,413))},uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,231))}}}catch(d){if(-1===d.message.indexOf("Cannot find module")||-1===d.message.indexOf(".vue"))throw d;console.error(d.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__get_style([n.wrapStyle,n.backgroundStyle])),i=n.isError||"circle"==n.shape?null:n.$u.addUnit(n.radius),r=n.isError?null:n.$u.addUnit(n.width),o=n.isError?null:n.$u.addUnit(n.height),u=n.showLoading&&n.loading&&"circle"!=n.shape?n.$u.addUnit(n.radius):null,d=n.showLoading&&n.loading?n.$u.addUnit(n.width):null,a=n.showLoading&&n.loading?n.$u.addUnit(n.height):null,s=n.showError&&n.isError&&!n.loading&&"circle"!=n.shape?n.$u.addUnit(n.radius):null,l=n.showError&&n.isError&&!n.loading?n.$u.addUnit(n.width):null,c=n.showError&&n.isError&&!n.loading?n.$u.addUnit(n.height):null;n.$mp.data=Object.assign({},{$root:{s0:t,g0:i,g1:r,g2:o,g3:u,g4:d,g5:a,g6:s,g7:l,g8:c}})},o=!1,u=[];r._withStripped=!0},369:function(n,e,t){"use strict";t.r(e);var i=t(370),r=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,(function(){return i[n]}))}(o);e["default"]=r.a},370:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t(245));function r(n){return n&&n.__esModule?n:{default:n}}var o={name:"u-image",mixins:[n.$u.mpMixin,n.$u.mixin,i.default],data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{},show:!1}},watch:{src:{immediate:!0,handler:function(n){n?(this.isError=!1,this.loading=!0):this.isError=!0}}},computed:{wrapStyle:function(){var e={};return e.width=this.$u.addUnit(this.width),e.height=this.$u.addUnit(this.height),e.borderRadius="circle"==this.shape?"10000px":n.$u.addUnit(this.radius),e.overflow=this.borderRadius>0?"hidden":"visible",n.$u.deepMerge(e,n.$u.addStyle(this.customStyle))}},mounted:function(){this.show=!0},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(n){this.loading=!1,this.isError=!0,this.$emit("error",n)},onLoadHandler:function(){this.loading=!1,this.isError=!1,this.$emit("load"),this.removeBgColor()},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=o}).call(this,t(1)["default"])},371:function(n,e,t){"use strict";t.r(e);var i=t(372),r=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,(function(){return i[n]}))}(o);e["default"]=r.a},372:function(n,e,t){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-ui/components/u-image/u-image.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/uview-ui/components/u-image/u-image-create-component',
    {
        'node-modules/uview-ui/components/u-image/u-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(366))
        })
    },
    [['node-modules/uview-ui/components/u-image/u-image-create-component']]
]);
