(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-072d4340"],{4251:function(a,t,e){},"57da":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("el-container",{staticClass:"Home"},[i("el-header",{staticStyle:{height:"80px"}},[i("div",{staticClass:"logo-wrap"},[i("div",{staticClass:"logo"},[i("a",{attrs:{href:"http://cs.njupt.edu.cn/",target:"_blank"}},[i("img",{attrs:{src:e("cf05"),alt:""}})])]),i("div",{staticClass:"toggle-button",on:{click:a.toggleCollapse}},[i("i",{staticClass:"iconfont icon-caidan1"})])]),i("div",{staticClass:"title",on:{click:a.aaa}},[a._v("合为企业设备管理系统")]),i("div",{staticClass:"user_info"},[i("div",{staticClass:"user_info_icon"},[i("img",{attrs:{src:e("da3e")}})]),i("div",{staticClass:"user_info_detail"},[i("div",{staticClass:"info name"},[i("span",[a._v("姓名：")]),a._v(a._s(a.name))]),i("div",{staticClass:"info username"},[i("span",[a._v("用户名：")]),a._v(a._s(a.username))]),i("div",{staticClass:"info userid"},[i("span",[a._v("用户ID：")]),a._v(a._s(a.userid))])])])]),["ROOT","ADMIN"].includes(a.userRole)?i("el-container",[i("el-aside",{attrs:{width:a.isCollapse?"80px":"200px"}},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":!0,"collapse-transition":!1,router:!0,collapse:a.isCollapse,"default-active":a.$route.path}},a._l(a.menuList1,(function(t){return i("el-submenu",{key:t.id,attrs:{index:t.id+""}},[i("template",{slot:"title"},[i("i",{class:a.iconsObj[t.id]}),i("span",[a._v(a._s(t.authName))])]),a._l(t.children,(function(t){return i("el-menu-item",{key:t.id,staticClass:"subItem",attrs:{index:"/"+t.path}},[i("span",{attrs:{slot:"title"},slot:"title"},[a._v(a._s(t.authName))])])}))],2)})),1)],1),i("el-main",[i("router-view")],1)],1):a._e(),["CREATOR"].includes(a.userRole)?i("el-container",[i("el-aside",{attrs:{width:a.isCollapse?"80px":"200px"}},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":!0,"collapse-transition":!1,router:!0,collapse:a.isCollapse,"default-active":a.$route.path}},a._l(a.menuList2,(function(t){return i("el-submenu",{key:t.id,attrs:{index:t.id+""}},[i("template",{slot:"title"},[i("i",{class:a.iconsObj[t.id]}),i("span",[a._v(a._s(t.authName))])]),a._l(t.children,(function(t){return i("el-menu-item",{key:t.id,staticClass:"subItem",attrs:{index:"/"+t.path}},[i("span",{attrs:{slot:"title"},slot:"title"},[a._v(a._s(t.authName))])])}))],2)})),1)],1),i("el-main",[i("router-view")],1)],1):a._e(),["OPERATOR"].includes(a.userRole)?i("el-container",[i("el-aside",{attrs:{width:a.isCollapse?"80px":"200px"}},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":!0,"collapse-transition":!1,router:!0,collapse:a.isCollapse,"default-active":a.$route.path}},a._l(a.menuList3,(function(t){return i("el-submenu",{key:t.id,attrs:{index:t.id+""}},[i("template",{slot:"title"},[i("i",{class:a.iconsObj[t.id]}),i("span",[a._v(a._s(t.authName))])]),a._l(t.children,(function(t){return i("el-menu-item",{key:t.id,staticClass:"subItem",attrs:{index:"/"+t.path}},[i("span",{attrs:{slot:"title"},slot:"title"},[a._v(a._s(t.authName))])])}))],2)})),1)],1),i("el-main",[i("router-view")],1)],1):a._e(),["SUPERVISOR"].includes(a.userRole)?i("el-container",[i("el-aside",{attrs:{width:a.isCollapse?"80px":"200px"}},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":!0,"collapse-transition":!1,router:!0,collapse:a.isCollapse,"default-active":a.$route.path}},a._l(a.menuList4,(function(t){return i("el-submenu",{key:t.id,attrs:{index:t.id+""}},[i("template",{slot:"title"},[i("i",{class:a.iconsObj[t.id]}),i("span",[a._v(a._s(t.authName))])]),a._l(t.children,(function(t){return i("el-menu-item",{key:t.id,staticClass:"subItem",attrs:{index:"/"+t.path}},[i("span",{attrs:{slot:"title"},slot:"title"},[a._v(a._s(t.authName))])])}))],2)})),1)],1),i("el-main",[i("router-view")],1)],1):a._e()],1)},s=[],n=(e("c975"),e("b0c0"),e("bc3a")),l=e.n(n),u={created:function(){var a=this;l.a.get("http://47.102.214.37:8080/user/me").then((function(t){console.log(t.data),a.userRole=t.data.role,a.username=t.data.username,a.userid=t.data.id,a.name=t.data.name}))},mounted:function(){-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())},data:function(){return{isCollapse:!1,name:"",username:"",userid:"",userRole:"",timeTip:"",menuList1:[{id:1,authName:"用户管理",children:[{id:10,authName:"用户",path:"users"}]},{id:2,authName:"设备管理",children:[{id:20,authName:"新增设备",path:"addDevice"},{id:21,authName:"设备信息",path:"deviceInformation"}]},{id:3,authName:"设备保养",children:[{id:30,authName:"新增任务",path:"addTask"},{id:31,authName:"任务分配",path:"tssignTask"},{id:33,authName:"任务列表",path:"totalTaskList"},{id:34,authName:"保养记录",path:"maintenanceNotes"},{id:3,authName:"保养查询",path:"searchMaintenance"}]},{id:4,authName:"设备维修",children:[{id:40,authName:"报修申请",path:"fixApply"},{id:41,authName:"全部报修",path:"allError"},{id:42,authName:"我申请的",path:"mySubmit"},{id:43,authName:"维修查询",path:"fixSearch"}]},{id:5,authName:"数据分析",children:[{id:50,authName:"故障分析",path:"faultAnalysis"},{id:51,authName:"保养分析",path:"maintenanceAnalysis"},{id:52,authName:"维修分析",path:"fixAnalysis"},{id:53,authName:"使用日志",path:"useLogs"},{id:54,authName:"维修日志",path:"fixLogs"}]}],menuList2:[{id:1,authName:"用户管理",children:[{id:10,authName:"用户",path:"users"}]},{id:2,authName:"设备管理",children:[{id:20,authName:"新增设备",path:"addDevice"},{id:21,authName:"设备信息",path:"deviceInformation"}]},{id:3,authName:"设备保养",children:[{id:30,authName:"新增任务",path:"addTask"},{id:31,authName:"任务分配",path:"tssignTask"},{id:33,authName:"任务列表",path:"totalTaskList"},{id:34,authName:"保养记录",path:"maintenanceNotes"},{id:3,authName:"保养查询",path:"searchMaintenance"}]},{id:4,authName:"设备维修",children:[{id:40,authName:"报修申请",path:"fixApply"},{id:41,authName:"全部报修",path:"allError"},{id:42,authName:"我发布的",path:"mySubmit"},{id:43,authName:"维修查询",path:"fixSearch"}]}],menuList3:[{id:1,authName:"用户管理",children:[{id:10,authName:"用户",path:"users"}]},{id:3,authName:"设备保养",children:[{id:32,authName:"任务列表",path:"totalTaskList"},{id:33,authName:"保养记录",path:"maintenanceNotes"},{id:34,authName:"保养查询",path:"searchMaintenance"}]},{id:4,authName:"设备维修",children:[{id:40,authName:"报修申请",path:"fixApply"},{id:41,authName:"分配到我的",path:"alreadyFixOp"},{id:42,authName:"我发布的",path:"mySubmit"},{id:43,authName:"维修查询",path:"fixSearch"}]},{id:5,authName:"数据分析",children:[{id:50,authName:"故障分析",path:"faultAnalysis"},{id:51,authName:"保养分析",path:"maintenanceAnalysis"},{id:52,authName:"维修分析",path:"fixAnalysis"},{id:53,authName:"使用日志",path:"useLogs"},{id:54,authName:"维修日志",path:"fixLogs"}]}],menuList4:[{id:1,authName:"用户管理",children:[{id:10,authName:"用户",path:"users"}]},{id:3,authName:"设备保养",children:[{id:32,authName:"任务列表",path:"totalTaskList"},{id:33,authName:"保养记录",path:"maintenanceNotes"},{id:34,authName:"保养查询",path:"searchMaintenance"}]},{id:4,authName:"设备维修",children:[{id:40,authName:"报修申请",path:"fixApply"},{id:41,authName:"全部报修",path:"allError"},{id:42,authName:"分配到我的",path:"alreadyFixSu"},{id:43,authName:"我发布的",path:"mySubmit"},{id:44,authName:"维修查询",path:"fixSearch"}]},{id:5,authName:"数据分析",children:[{id:50,authName:"故障分析",path:"faultAnalysis"},{id:51,authName:"保养分析",path:"maintenanceAnalysis"},{id:52,authName:"维修分析",path:"fixAnalysis"},{id:53,authName:"使用日志",path:"useLogs"},{id:54,authName:"维修日志",path:"fixLogs"}]}],iconsObj:{1:"iconfont icon-yonghu",2:"iconfont icon-guanli",3:"iconfont icon-baoyang",4:"iconfont icon-weixiu",5:"iconfont icon-shujufenxi"}}},methods:{aaa:function(){location.reload()},toggleCollapse:function(){this.isCollapse=!this.isCollapse},handleOpen:function(a,t){console.log(a,t)},handleClose:function(a,t){console.log(a,t)}},components:{}},d=u,h=(e("dbc2"),e("2877")),o=Object(h["a"])(d,i,s,!1,null,null,null);t["default"]=o.exports},cf05:function(a,t,e){a.exports=e.p+"img/logo.9188549b.png"},dbc2:function(a,t,e){"use strict";e("4251")}}]);
//# sourceMappingURL=chunk-072d4340.14b16f07.js.map