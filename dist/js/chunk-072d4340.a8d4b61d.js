(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-072d4340"],{4251:function(t,a,e){},"57da":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("el-container",{staticClass:"Home"},[i("el-header",{staticStyle:{height:"80px"}},[i("div",{staticClass:"logo-wrap"},[i("div",{staticClass:"logo"},[i("a",{attrs:{href:"http://cs.njupt.edu.cn/",target:"_blank"}},[i("img",{attrs:{src:e("cf05"),alt:""}})])]),i("div",{staticClass:"toggle-button",on:{click:t.toggleCollapse}},[i("i",{staticClass:"iconfont icon-caidan1"})])]),i("div",{staticClass:"title",on:{click:t.aaa}},[t._v("合为企业设备管理系统")]),i("div",{staticClass:"user_info"},[i("div",{staticClass:"loginout"},[i("el-button",{attrs:{icon:"el-icon-switch-button"},on:{click:t.loginOut}},[t._v("注销 ")])],1),i("user",{staticStyle:{"margin-left":"20px"},attrs:{name:t.name,username:t.username,useremail:t.useremail,avatar:t.avatarurl}})],1)]),["ROOT","ADMIN"].includes(t.userRole)?i("el-container",[i("el-aside",{attrs:{width:t.isCollapse?"80px":"200px"}},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":!0,"collapse-transition":!1,router:!0,collapse:t.isCollapse,"default-active":t.$route.path}},t._l(t.menuList1,(function(a){return i("el-submenu",{key:a.id,attrs:{index:a.id+""}},[i("template",{slot:"title"},[i("i",{class:t.iconsObj[a.id]}),i("span",[t._v(t._s(a.authName))])]),t._l(a.children,(function(a){return i("el-menu-item",{key:a.id,staticClass:"subItem",attrs:{index:"/"+a.path}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(a.authName))])])}))],2)})),1)],1),i("el-main",[i("router-view")],1)],1):t._e(),["CREATOR"].includes(t.userRole)?i("el-container",[i("el-aside",{attrs:{width:t.isCollapse?"80px":"200px"}},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":!0,"collapse-transition":!1,router:!0,collapse:t.isCollapse,"default-active":t.$route.path}},t._l(t.menuList2,(function(a){return i("el-submenu",{key:a.id,attrs:{index:a.id+""}},[i("template",{slot:"title"},[i("i",{class:t.iconsObj[a.id]}),i("span",[t._v(t._s(a.authName))])]),t._l(a.children,(function(a){return i("el-menu-item",{key:a.id,staticClass:"subItem",attrs:{index:"/"+a.path}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(a.authName))])])}))],2)})),1)],1),i("el-main",[i("router-view")],1)],1):t._e(),["OPERATOR"].includes(t.userRole)?i("el-container",[i("el-aside",{attrs:{width:t.isCollapse?"80px":"200px"}},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":!0,"collapse-transition":!1,router:!0,collapse:t.isCollapse,"default-active":t.$route.path}},t._l(t.menuList3,(function(a){return i("el-submenu",{key:a.id,attrs:{index:a.id+""}},[i("template",{slot:"title"},[i("i",{class:t.iconsObj[a.id]}),i("span",[t._v(t._s(a.authName))])]),t._l(a.children,(function(a){return i("el-menu-item",{key:a.id,staticClass:"subItem",attrs:{index:"/"+a.path}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(a.authName))])])}))],2)})),1)],1),i("el-main",[i("router-view")],1)],1):t._e(),["SUPERVISOR"].includes(t.userRole)?i("el-container",[i("el-aside",{attrs:{width:t.isCollapse?"80px":"200px"}},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":!0,"collapse-transition":!1,router:!0,collapse:t.isCollapse,"default-active":t.$route.path}},t._l(t.menuList4,(function(a){return i("el-submenu",{key:a.id,attrs:{index:a.id+""}},[i("template",{slot:"title"},[i("i",{class:t.iconsObj[a.id]}),i("span",[t._v(t._s(a.authName))])]),t._l(a.children,(function(a){return i("el-menu-item",{key:a.id,staticClass:"subItem",attrs:{index:"/"+a.path}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(a.authName))])])}))],2)})),1)],1),i("el-main",[i("router-view")],1)],1):t._e()],1)},s=[],n=(e("c975"),e("b0c0"),e("bc3a")),l=e.n(n),u=e("79e2"),o={created:function(){var t=this;this.$message({message:"于 2021.04.08 11:03 完成更新",type:"success",duration:"6000"}),l.a.get("http://47.102.214.37:8080/user/me").then((function(a){console.log(a.data),t.userRole=a.data.role,t.username=a.data.username,t.useremail=a.data.email,t.name=a.data.name,t.avatarurl="http://47.102.214.37:8080/pic/"+a.data.avatar}))},mounted:function(){-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())},data:function(){return{isCollapse:!1,name:"",username:"",useremail:"",userRole:"",avatarurl:"",timeTip:"",menuList1:[{id:1,authName:"用户管理",children:[{id:11,authName:"用户列表",path:"userList"},{id:12,authName:"修改信息",path:"edituser"},{id:13,authName:"人员管理",path:"authorize"}]},{id:2,authName:"设备管理",children:[{id:20,authName:"新增设备",path:"addDevice"},{id:21,authName:"设备信息",path:"deviceInformation"}]},{id:3,authName:"设备保养",children:[{id:30,authName:"新增标准",path:"addTask"},{id:31,authName:"任务分配",path:"tssignTask"},{id:33,authName:"保养列表",path:"totalTaskList"}]},{id:4,authName:"设备维修",children:[{id:40,authName:"报修申请",path:"fixApply"},{id:41,authName:"全部报修",path:"allError"},{id:42,authName:"我申请的",path:"mySubmit"}]},{id:5,authName:"数据分析",children:[{id:50,authName:"使用日志",path:"dailyRecord"},{id:51,authName:"保养分析",path:"taskAnalysis"},{id:52,authName:"维修分析",path:"fixAnalysis"}]}],menuList2:[{id:1,authName:"用户管理",children:[{id:11,authName:"用户列表",path:"userList"}]},{id:2,authName:"设备管理",children:[{id:20,authName:"新增设备",path:"addDevice"},{id:21,authName:"设备信息",path:"deviceInformation"}]},{id:3,authName:"设备保养",children:[{id:30,authName:"新增标准",path:"addTask"},{id:31,authName:"任务分配",path:"tssignTask"},{id:33,authName:"保养列表",path:"totalTaskList"}]},{id:4,authName:"设备维修",children:[{id:40,authName:"报修申请",path:"fixApply"},{id:41,authName:"全部报修",path:"allError"},{id:42,authName:"我发布的",path:"mySubmit"}]}],menuList3:[{id:1,authName:"用户管理",children:[{id:11,authName:"用户列表",path:"userList"}]},{id:3,authName:"设备保养",children:[{id:32,authName:"保养列表",path:"totalTaskList"}]},{id:4,authName:"设备维修",children:[{id:40,authName:"报修申请",path:"fixApply"},{id:41,authName:"分配到我的",path:"alreadyFixOp"},{id:42,authName:"我发布的",path:"mySubmit"}]}],menuList4:[{id:1,authName:"用户管理",children:[{id:11,authName:"用户列表",path:"userList"}]},{id:3,authName:"设备保养",children:[{id:32,authName:"保养列表",path:"totalTaskList"}]},{id:4,authName:"设备维修",children:[{id:40,authName:"报修申请",path:"fixApply"},{id:41,authName:"全部报修",path:"allError"},{id:42,authName:"分配到我的",path:"alreadyFixSu"},{id:43,authName:"我发布的",path:"mySubmit"}]},{id:5,authName:"数据分析",children:[{id:50,authName:"使用日志",path:"dailyRecord"},{id:51,authName:"保养分析",path:"taskAnalysis"},{id:52,authName:"维修分析",path:"fixAnalysis"}]}],iconsObj:{1:"iconfont icon-yonghu",2:"iconfont icon-guanli",3:"iconfont icon-baoyang",4:"iconfont icon-weixiu",5:"iconfont icon-shujufenxi"}}},methods:{aaa:function(){location.reload()},toggleCollapse:function(){this.isCollapse=!this.isCollapse},handleOpen:function(t,a){console.log(t,a)},handleClose:function(t,a){console.log(t,a)},loginOut:function(){var t=this;this.$confirm("您确定要退出吗?","退出管理平台",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){window.localStorage.removeItem("token"),setTimeout((function(){t.$router.push({path:"/"})}),1e3)})).catch((function(){}))}},components:{User:u["a"]}},r=o,d=(e("dbc2"),e("2877")),c=Object(d["a"])(r,i,s,!1,null,null,null);a["default"]=c.exports},cf05:function(t,a,e){t.exports=e.p+"img/logo.9188549b.png"},dbc2:function(t,a,e){"use strict";e("4251")}}]);
//# sourceMappingURL=chunk-072d4340.a8d4b61d.js.map