webpackJsonp([9],{QEwn:function(t,e,i){"use strict";function a(t){i("wZh7")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("ABCa"),s=i("gyMJ"),l=(n.a,{data:function(){return{info:null,cc:this.$route.params.cc}},created:function(){this.getTkinfo()},methods:{getTkinfo:function(){var t=this;this.$vux.loading.show(),Object(s.k)({cc:this.cc}).then(function(e){t.info=e.data}).finally(function(){t.$vux.loading.hide()})}},components:{XHeader:n.a}}),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("x-header",{staticClass:"vux-1px-b",attrs:{"left-options":{backText:""},"right-options":{showMore:!1}}},[t._v("浏览器")]),t._v(" "),t.info?i("div",{staticClass:"detail"},[i("div",{staticClass:"detail-header"},[t._v("Token "),i("span",{staticClass:" eng-name"},[t._v(t._s(t.info.cc))])]),t._v(" "),i("div",{staticClass:"detail-content"},[i("div",{staticClass:"detail-item flex"},[i("span",{staticClass:"detail-item-title"},[t._v("Token简称：")]),t._v(" "),i("div",{staticClass:"flex-item flex-middle eng-name"},[t._v(t._s(t.info.cc))])]),t._v(" "),i("div",{staticClass:"detail-item flex"},[i("span",{staticClass:"detail-item-title"},[t._v("Token名称：")]),t._v(" "),i("div",{staticClass:"flex-item"},[t._v(t._s(t.info.name))])]),t._v(" "),i("div",{staticClass:"detail-item flex"},[i("span",{staticClass:"detail-item-title"},[t._v("创建者：")]),t._v(" "),i("div",{staticClass:"flex-item theme-color",on:{click:function(e){return t.$router.push({name:"BlockRecord",query:{acc:t.info.creator}})}}},[t._v(t._s(t.info.creator))])]),t._v(" "),i("div",{staticClass:"detail-item flex"},[i("span",{staticClass:"detail-item-title"},[t._v("代币总数：")]),t._v(" "),i("div",{staticClass:"flex-item"},[t._v(t._s(t.info.total))])]),t._v(" "),i("div",{staticClass:"detail-item flex"},[i("span",{staticClass:"detail-item-title"},[t._v("预挖数量：")]),t._v(" "),i("div",{staticClass:"flex-item"},[t._v(t._s(t.info.award))])]),t._v(" "),i("div",{staticClass:"detail-item flex"},[i("span",{staticClass:"detail-item-title"},[t._v("年化收益：")]),t._v(" "),i("div",{staticClass:"flex-item"},[t._v(t._s(t.info.mineral)+"%")])]),t._v(" "),i("div",{staticClass:"detail-item flex"},[i("span",{staticClass:"detail-item-title"},[t._v("精度：")]),t._v(" "),i("div",{staticClass:"flex-item"},[t._v(t._s(t.info.decimal))])]),t._v(" "),i("div",{staticClass:"detail-item flex"},[i("span",{staticClass:"detail-item-title"},[t._v("官方网站：")]),t._v(" "),i("a",{staticClass:"flex-item theme-color",attrs:{href:t.info.url}},[t._v(t._s(t.info.url))])]),t._v(" "),i("div",{staticClass:"detail-item flex"},[i("span",{staticClass:"detail-item-title"},[t._v("交易笔数：")]),t._v(" "),i("div",{staticClass:"flex-item theme-color",on:{click:function(e){return t.$router.push({name:"TokenRecord",query:{cc:t.info.cc,acc:t.info.creator}})}}},[t._v(t._s(t.info.tradeCnt))])])])]):t._e()],1)},c=[],o={render:d,staticRenderFns:c},f=o,r=i("VU/8"),v=a,m=r(l,f,!1,v,"data-v-09fef659",null);e.default=m.exports},RQKu:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,"\n.detail .detail-header[data-v-09fef659] {\n  color: #018DEC;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 44px;\n  padding: 0 18px;\n}\n.detail .detail-content[data-v-09fef659] {\n  padding: 0 18px;\n}\n.detail .detail-content .detail-item[data-v-09fef659] {\n  font-size: 14px;\n  line-height: 20px;\n  margin-bottom: 19px;\n  color: #333;\n  word-break: break-all;\n}\n.detail .detail-content .detail-item .detail-item-title[data-v-09fef659] {\n  width: 100px;\n  margin-right: 3px;\n}\n.detail .detail-content .detail-item .detail-page-icon[data-v-09fef659] {\n  width: 20px;\n  margin-right: 12px;\n}\n.detail .detail-content .detail-item .detail-page-icon.disabled[data-v-09fef659] {\n  opacity: 0.5;\n}\n.detail .detail-content .detail-item .detail-page-icon.icon-next[data-v-09fef659] {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  margin-left: 12px;\n}\n.eng-name[data-v-09fef659] {\n  text-transform: uppercase;\n}\n",""])},wZh7:function(t,e,i){var a=i("RQKu");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("717d0897",a,!0,{})}});