webpackJsonp([4,1],{"80bi":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("P9l9"),a=i("pjeT"),s=i("GPKu"),r={data:function(){return{activeTab:"my",name:Object(s.a)("name")}},mounted:function(){this.navTo("my")},components:{list:a.default},methods:{logout:function(){var t=this;n.a.logout().then(function(e){t.$router.push({path:"/login"})})},navTo:function(t){this.activeTab=t,this.$router.push({path:"/list/"+t})}}},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-view-container"},[i("div",{staticClass:"header"},[i("div",{staticClass:"inner-wrapper"},[i("div",{staticClass:"head-nav"},[i("div",{staticClass:"header-list",class:{active:"my"==t.activeTab},on:{click:function(e){return t.navTo("my")}}},[t._v("\n          我的项目\n          "),i("div",{staticClass:"underLine",class:{active:"my"==t.activeTab}})]),t._v(" "),i("div",{staticClass:"header-list",class:{active:"template"==t.activeTab},on:{click:function(e){return t.navTo("template")}}},[t._v("\n          已授权模板\n          "),i("div",{staticClass:"underLine",class:{active:"template"==t.activeTab}})])]),t._v(" "),i("div",{staticClass:"user"},[i("span",{staticClass:"username"},[t._v(t._s(t.name))]),t._v(" "),i("i",{staticClass:"el-icon-switch-button",on:{click:t.logout}})])])]),t._v(" "),i("router-view",{key:t.$route.fullPath})],1)};o._withStripped=!0;var l={render:o,staticRenderFns:[]},u=l;var c=!1;var d=i("VU/8")(r,u,!1,function(t){c||i("f53M")},"data-v-283afe90",null);d.options.__file="src/views/list.vue";e.default=d.exports},B197:function(t,e,i){var n;n=function(){"use strict";return function(t,e,i){var n=e.prototype;i.en.relativeTime={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};var a=function(t,e,n,a){for(var s,r,o=n.$locale().relativeTime,l=[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],u=l.length,c=0;c<u;c+=1){var d=l[c];d.d&&(s=a?i(t).diff(n,d.d,!0):n.diff(t,d.d,!0));var p=Math.round(Math.abs(s));if(p<=d.r||!d.r){1===p&&c>0&&(d=l[c-1]),r=o[d.l].replace("%d",p);break}}return e?r:(s>0?o.future:o.past).replace("%s",r)};n.to=function(t,e){return a(t,e,this,!0)},n.from=function(t,e){return a(t,e,this)},n.toNow=function(t){return this.to(i(),t)},n.fromNow=function(t){return this.from(i(),t)}}},t.exports=n()},QaHe:function(t,e){},f53M:function(t,e){},pjeT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("mvHQ"),a=i.n(n),s=i("//Fk"),r=i.n(s),o=i("P9l9"),l=i("Xu2r"),u=i("IcnI"),c=i("oqQY"),d=i.n(c),p=i("B197"),v=i.n(p);i("uM1m");d.a.locale("zh-cn"),d.a.extend(v.a);var f={data:function(){return{path:"my",data:null,page:1,totalPage:1,dialogVisible:!1,settingDialogVisible:!1,inputVisible:!1,inputValue:"",addr:"",sid:"",tags:[]}},mounted:function(){this.path=this.$route.fullPath.split("/")[2],this.getList()},methods:{exportData:function(){o.a.exportData()},handleClose:function(t){var e=this;o.a.deleteRole(this.sid,t).then(function(i){e.tags.splice(e.tags.indexOf(t),1),e.inputVisible=!1,e.inputValue=""})},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick(function(e){t.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var t=this,e=this.inputValue;e?o.a.addRole(this.sid,e).then(function(i){t.tags.push(e),t.inputVisible=!1,t.inputValue=""}):(this.inputVisible=!1,this.inputValue="")},onCopy:function(){var t=this;this.$alert("复制成功","提示",{confirmButtonText:"确定",callback:function(e){t.dialogVisible=!1}})},viewAddr:function(t){this.addr="https//survey.dev.ztgame.com/fe/#/site/"+t,this.dialogVisible=!0},statis:function(t){this.$router.push({path:"/statis/"+t})},manage:function(t){var e=this;this.sid=t,o.a.getAdminList(t).then(function(t){e.tags=t.data,e.settingDialogVisible=!0})},create:function(){u.a.commit(l.f),this.$router.push({path:"/edit"})},fromNow:function(t){return d()(t).fromNow()},deleteSurvery:function(t){var e=this;this.$confirm("确定要删除吗？","删除问卷确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return o.a.deleteSurvery(t).then(function(t){if(t)return e.getList().then(function(){e.$notify({offset:50,title:"删除成功",type:"success"})})})})},copySurvery:function(t){var e=this;o.a.copySurvery(t).then(function(t){t&&(u.a.commit(l.f),e.$router.push({path:"/edit/"+t.sid}))})},getList:function(){var t=this,e="my"==this.path?null:1,i="my"==this.path?11:12,n=this;return new r.a(function(s,r){o.a.getList(t.page,i,e).then(function(t){n.data=null,t&&(n.data=JSON.parse(a()(t.data)),n.totalPage=t.pagecount),s()})})},edit:function(t){var e=this;1==t.status?this.$confirm("你修改问卷时，问卷会暂停发布，你需在修改完后再次发布问卷才可继续，原问卷链接不会改变?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return o.a.updateSurvery({sid:t.sid,status:"0"})}).then(function(i){i&&(u.a.commit(l.f),e.$router.push({path:"/edit/"+t.sid}))}):(u.a.commit(l.f),this.$router.push({path:"/edit/"+t.sid}))}}},h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"list-container fadeIn animated"},[i("div",{staticClass:"content"},["my"==t.path?i("el-card",{staticClass:"item create",attrs:{"body-style":{padding:"0px"}}},[i("el-button",{staticClass:"create-btn",attrs:{type:"text"},on:{click:t.create}},[i("div",{staticClass:"el-icon-plus"}),t._v(" "),i("span",[t._v("新建")])])],1):t._e(),t._v(" "),t._l(t.data,function(e){return i("el-card",{key:e.sid,staticClass:"item",attrs:{"body-style":{padding:"0px",height:"100%"}}},[i("div",{staticStyle:{padding:"14px"}},[i("span",[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"latest",staticStyle:{padding:"0 14px"}},[i("span",[t._v(t._s(t.fromNow(e.update_time)))])]),t._v(" "),i("span",{staticClass:"status",class:{"status-2":1==e.status}},[i("i"),t._v(t._s(1==e.status?"已发布":"未发布"))]),t._v(" "),i("div",{staticClass:"bottom action-area"},[i("el-dropdown",[i("span",{staticClass:"el-dropdown-link"},[t._v("\n              操作"),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{icon:"el-icon-edit"},nativeOn:{click:function(i){return t.edit(e)}}},[t._v("编辑")]),t._v(" "),i("el-dropdown-item",{attrs:{icon:"el-icon-document-copy"},nativeOn:{click:function(i){return t.copySurvery(e.sid)}}},[t._v("复制")]),t._v(" "),i("el-dropdown-item",{attrs:{icon:"el-icon-delete"},nativeOn:{click:function(i){return t.deleteSurvery(e.sid)}}},[t._v("删除")]),t._v(" "),i("el-dropdown-item",{attrs:{icon:"el-icon-view"},nativeOn:{click:function(i){return t.viewAddr(e.sid)}}},[t._v("查看网址")]),t._v(" "),i("el-dropdown-item",{attrs:{icon:"el-icon-setting"},nativeOn:{click:function(i){return t.manage(e.sid)}}},[t._v("权限管理")]),t._v(" "),i("el-dropdown-item",{attrs:{icon:"el-icon-data-line"},nativeOn:{click:function(i){return t.statis(e.sid)}}},[t._v("统计报表")])],1)],1)],1)])}),t._v(" "),i("el-pagination",{staticClass:"pager",attrs:{background:"",layout:"prev, pager, next","hide-on-single-page":t.totalPage<=1,"current-page":t.page,"page-count":t.totalPage},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.getList}})],2)]),t._v(" "),i("el-dialog",{attrs:{title:"问卷地址",visible:t.dialogVisible,"close-on-click-modal":!1,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticStyle:{display:"flex"}},[i("el-input",{staticStyle:{"margin-right":"10px"},attrs:{value:t.addr,readonly:"readonly"}}),t._v(" "),i("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.addr,expression:"addr",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"ml10",attrs:{size:"medium",type:"primary"}},[t._v("点击复制")])],1)]),t._v(" "),i("el-dialog",{attrs:{title:"权限管理",visible:t.settingDialogVisible,width:"30%"},on:{"update:visible":function(e){t.settingDialogVisible=e}}},[i("div",{staticStyle:{display:"flex"}},[t._l(t.tags,function(e){return i("el-tag",{key:e,staticStyle:{"margin-right":"10px"},attrs:{closable:"","disable-transitions":!1},on:{close:function(i){return t.handleClose(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])}),t._v(" "),t.inputVisible?i("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",staticStyle:{width:"90px"},attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):i("el-button",{attrs:{size:"small"},on:{click:t.showInput}},[t._v("+ 添加管理员")])],2)])],1)};h._withStripped=!0;var m={render:h,staticRenderFns:[]},_=m;var y=!1;var g=i("VU/8")(f,_,!1,function(t){y||i("QaHe")},"data-v-227179ae",null);g.options.__file="src/components/list.vue";e.default=g.exports},uM1m:function(t,e,i){var n;n=function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){switch(e){case"W":return t+"周";default:return t+"日"}},weekStart:1,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"}};return t.locale(e,null,!0),e},t.exports=n(i("oqQY"))}});
//# sourceMappingURL=4.23df8e77cd152ae4bc31.js.map