/*!
 * @form-create/component-elm-checkbox v2.5.36
 * (c) 2018-2024 xaboy
 * Github https://github.com/xaboy/form-create with @form-create/component-elm-checkbox
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).FcCheckbox=t()}(this,function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}var t=["attrs","props","domProps"],n=["class","style","directives"],r=["on","nativeOn"],i=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}},o=function(o){return o.reduce(function(o,u){for(var c in u)if(o[c])if(-1!==t.indexOf(c))o[c]=e({},o[c],u[c]);else if(-1!==n.indexOf(c)){var a=o[c]instanceof Array?o[c]:[o[c]],f=u[c]instanceof Array?u[c]:[u[c]];o[c]=a.concat(f)}else if(-1!==r.indexOf(c))for(var s in u[c])if(o[c][s]){var p=o[c][s]instanceof Array?o[c][s]:[o[c][s]],l=u[c][s]instanceof Array?u[c][s]:[u[c][s]];o[c][s]=p.concat(l)}else o[c][s]=u[c][s];else if("hook"==c)for(var h in u[c])o[c][h]=o[c][h]?i(o[c][h],u[c][h]):u[c][h];else o[c]=u[c];else o[c]=u[c];return o},{})};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}return{name:"fcCheckbox",props:{formCreateInject:{type:Object,required:!0},value:{type:Array,default:function(){return[]}},type:String},watch:{"formCreateInject.options":{handler:function(){this.update()},deep:!0},value:function(){this.update()}},data:function(){return{trueValue:[]}},methods:{options:function(){var e=this.formCreateInject.options;return Array.isArray(e)?e:[]},onInput:function(e){this.$emit("input",this.options().filter(function(t){return-1!==e.indexOf(t.label)}).map(function(e){return e.value}).filter(function(e){return void 0!==e}))},update:function(){var e=Array.isArray(this.value)?this.value:[this.value];this.trueValue=this.options().filter(function(t){return-1!==e.indexOf(t.value)}).map(function(e){return e.label})}},created:function(){this.update()},render:function(){var e,t,n=this,r=arguments[0];return r("ElCheckboxGroup",o([{},this.formCreateInject.prop,{},{props:{value:this.trueValue}},{ref:"el",on:{input:this.onInput}}]),[this.options().map(function(e,t){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e),a="button"===n.type?"ElCheckboxButton":"ElCheckbox";return delete i.value,r(a,o([{},{props:i},{key:a+t+"-"+e.value}]))}),(e=this.$slots,Object.keys(e).reduce(function(n,r){return t&&-1!==t.indexOf(r)||n.push(e[r]),n},[]))])},mounted:function(){this.$emit("fc.el",this.$refs.el)}}});
//# sourceMappingURL=index.js.map
