webpackJsonp([1],{"11Qj":function(t,a,s){"use strict";var e=s("y5zA"),n=(s.n(e),s("TIfe"));a.a={name:"hello",data:function(){return{username:"",password:""}},methods:{login:function(){var t=this;this.$api.login({username:this.username,password:this.password}).then(function(a){1===a.data.code?(n.a.setToken("1"),e.Toast.success(a.data.msg),setTimeout(function(){console.log("red"),t.$router.push({name:"home"})},1e3)):e.Toast.fail(a.data.msg)})}}}},"4Ces":function(t,a){},"6tvs":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],l={render:e,staticRenderFns:n};a.a=l},"8h1H":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"protal-login"},[s("h3",{staticClass:"text-center web-title"},[t._v("自动化备份工具@god")]),t._v(" "),s("van-cell-group",{staticStyle:{"margin-top":"50px"}},[s("van-field",{attrs:{label:"用户名",icon:"clear",placeholder:"请输入用户名",required:""},on:{"click-icon":function(a){t.username=""}},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}}),t._v(" "),s("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),t._v(" "),s("van-row",[s("van-col",{attrs:{span:"24"}},[s("van-button",{attrs:{type:"primary","bottom-action":""},on:{click:t.login}},[t._v("立即登录")])],1)],1)],1)},n=[],l={render:e,staticRenderFns:n};a.a=l},"8plh":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hello"},[s("van-search",{attrs:{placeholder:"商品名称"}})],1)},n=[],l={render:e,staticRenderFns:n};a.a=l},BNJ2:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"index-page"},[s("router-link",{attrs:{to:{name:"home"}}},[s("van-nav-bar",{staticStyle:{"z-index":"1001"},attrs:{title:"明细",fixed:"","left-arrow":"","left-text":"返回","right-text":"X"}})],1),t._v(" "),s("div",{staticStyle:{height:"50px"}}),t._v(" "),s("van-cell-group",[s("van-field",{attrs:{label:"任务标题",placeholder:"请填写",required:""},model:{value:t.task.title,callback:function(a){t.task.title=a},expression:"task.title"}}),t._v(" "),s("van-field",{attrs:{label:"数据库驱动",value:"mysql"}}),t._v(" "),s("van-field",{attrs:{label:"db_host",placeholder:"请填写",required:""},model:{value:t.task.db_config.db_host,callback:function(a){t.task.db_config.db_host=a},expression:"task.db_config.db_host"}}),t._v(" "),s("van-field",{attrs:{label:"db_port",placeholder:"请填写",required:""},model:{value:t.task.db_config.db_port,callback:function(a){t.task.db_config.db_port=a},expression:"task.db_config.db_port"}}),t._v(" "),s("van-field",{attrs:{label:"db_user",placeholder:"请填写",required:""},model:{value:t.task.db_config.db_user,callback:function(a){t.task.db_config.db_user=a},expression:"task.db_config.db_user"}}),t._v(" "),s("van-field",{attrs:{label:"db_pwd",placeholder:"请填写",required:""},model:{value:t.task.db_config.db_pwd,callback:function(a){t.task.db_config.db_pwd=a},expression:"task.db_config.db_pwd"}}),t._v(" "),s("van-field",{attrs:{label:"db_name",placeholder:"请填写",required:""},model:{value:t.task.db_config.db_name,callback:function(a){t.task.db_config.db_name=a},expression:"task.db_config.db_name"}}),t._v(" "),s("van-field",{attrs:{label:"备份(年)",placeholder:"*"},model:{value:t.task.run_time.Y,callback:function(a){t.task.run_time.Y=a},expression:"task.run_time.Y"}}),t._v(" "),s("van-field",{attrs:{label:"备份(月)",placeholder:"*"},model:{value:t.task.run_time.M,callback:function(a){t.task.run_time.M=a},expression:"task.run_time.M"}}),t._v(" "),s("van-field",{attrs:{label:"备份(日)",placeholder:"*"},model:{value:t.task.run_time.D,callback:function(a){t.task.run_time.D=a},expression:"task.run_time.D"}}),t._v(" "),s("van-field",{attrs:{label:"备份(时)",placeholder:"*"},model:{value:t.task.run_time.H,callback:function(a){t.task.run_time.H=a},expression:"task.run_time.H"}}),t._v(" "),s("van-field",{attrs:{label:"备份(分)",placeholder:"*"},model:{value:t.task.run_time.m,callback:function(a){t.task.run_time.m=a},expression:"task.run_time.m"}}),t._v(" "),s("van-field",{attrs:{label:"备份(秒)"},model:{value:t.task.run_time.s,callback:function(a){t.task.run_time.s=a},expression:"task.run_time.s"}}),t._v(" "),s("van-cell",{attrs:{title:"备份数据表","is-link":"",value:"已选择"+t.task.tables.length+"个表"},on:{click:t.showChooseTables}}),t._v(" "),s("van-cell",{attrs:{title:"备份日志","is-link":"",value:"已备份"+t.logs.length+"次"},on:{click:t.showLogs}}),t._v(" "),s("van-switch-cell",{attrs:{title:"开启"},model:{value:t.task.status,callback:function(a){t.task.status=a},expression:"task.status"}})],1),t._v(" "),s("van-row",[s("van-col",{attrs:{span:"24"}},[s("van-button",{attrs:{type:"danger","bottom-action":""},on:{click:t.remove}},[t._v("删除")])],1)],1),t._v(" "),s("van-popup",{staticClass:"van-popup-1",attrs:{position:"top",overlay:!1},model:{value:t.layer.show,callback:function(a){t.layer.show=a},expression:"layer.show"}},[s("span",{domProps:{innerHTML:t._s(t.layer.msg)}})]),t._v(" "),s("div",[s("van-popup",{staticClass:"van-popup-4",staticStyle:{"overflow-y":"scroll"},attrs:{position:"right",overlay:!0,"lock-on-scroll":!0,lockOnScroll:!0},model:{value:t.layerChooseTable.show,callback:function(a){t.layerChooseTable.show=a},expression:"layerChooseTable.show"}},[s("div",{},[s("van-row",[s("van-checkbox-group",{model:{value:t.task.tables,callback:function(a){t.task.tables=a},expression:"task.tables"}},[s("van-cell-group",[t._l(t.tables,function(a,e){return s("van-cell",{key:e},[s("van-checkbox",{attrs:{name:a}},[t._v(t._s(a))])],1)}),t._v(" "),t.tables.length<=0?s("van-cell",{staticClass:"text-center"},[s("span",{domProps:{innerHTML:t._s(t.layerChooseTable.msg)}})]):t._e()],2)],1)],1),t._v(" "),s("van-row",[s("van-col",{attrs:{span:"24"}},[s("van-button",{attrs:{type:"primary","bottom-action":""},on:{click:t.sureTables}},[t._v("确定")])],1)],1)],1)])],1)],1)},n=[],l={render:e,staticRenderFns:n};a.a=l},BeCp:function(t,a){},C04G:function(t,a,s){"use strict";var e=(s("TIfe"),s("pFyO")),n=s("hx6x");a.a={components:{VanCell:e.a},name:"hello",data:function(){return{logs:[]}},methods:{parseTime:function(t){return t*=1e3,s.i(n.a)(t).format("YYYY-MM-DD HH:mm:ss")},getTaskLogs:function(t){var a=this;this.logs=[];var e=s.i(n.a)().format("YYYY-MM-DD");this.$api.getBakLogs({_id:t},e).then(function(t){1===t.data.code?t.data.data.forEach(function(t){a.logs.push(t)}):a.layerLogs.msg=t.data.msg}).catch(function(t){})},download:function(t){window.open(t.file)}},created:function(){console.log(this.$route.params._id),this.getTaskLogs(this.$route.params._id)}}},CBhb:function(t,a,s){"use strict";a.a={name:"hello",data:function(){return{msg:"手机 Web APP"}}}},EKrd:function(t,a,s){"use strict";a.a={name:"hello",data:function(){return{msg:"手机 Web APP"}}}},GaJ8:function(t,a,s){"use strict";var e=s("cMTw"),n=s("wz8o");a.a=[{path:"/portal/login",name:"login",component:e.a,meta:{requiresAuth:!1}},{path:"/portal/register",name:"register",component:n.a,meta:{requiresAuth:!1}}]},GfgM:function(t,a){},H16u:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"index-page"},[s("van-nav-bar",{staticStyle:{"z-index":"1001"},attrs:{title:"备份日志",fixed:""}}),t._v(" "),s("div",{staticStyle:{height:"50px"}}),t._v(" "),s("van-cell-group",[t.logs.length<=0?s("van-cell",{staticStyle:{"text-align":"center"},attrs:{title:"暂无数据"}}):t._e(),t._v(" "),t._l(t.logs,function(a){return s("van-cell",{staticClass:"log-item",attrs:{title:a.task.title+"："+a.task.db_config.db_host+"@"+a.task.db_config.db_name,label:t.parseTime(a.time),"is-link":"",value:"下载"},on:{click:function(s){t.download(a)}}})})],2),t._v(" "),s("van-row",[s("van-col",{attrs:{span:"24"}},[s("router-link",{attrs:{to:{name:"home"}}},[s("van-button",{attrs:{type:"primary","bottom-action":""}},[t._v("返回")])],1)],1)],1)],1)},n=[],l={render:e,staticRenderFns:n};a.a=l},JU1R:function(t,a,s){"use strict";var e=s("2HEv"),n=s("u28b"),l=(s("qSdX"),s("bgXz")),o=s("tlXl"),r=s("TIfe"),i=s("GaJ8"),c=s("k2xk"),u=s("oxTF");e.default.use(n.a);var d=[{path:"/",name:"index",component:o.a,meta:{requiresAuth:!0}},{path:"/index/index",name:"home",component:o.a,meta:{requiresAuth:!0}},{path:"/index/accept",name:"accept",component:l.a,meta:{requiresAuth:!0}}],v=new n.a({routes:d.concat(i.a).concat(c.a).concat(u.a)});v.beforeEach(function(t,a,s){t.matched.some(function(t){return t.meta.requiresAuth})?r.a.isLogin()?s():s({path:"/portal/login",query:{redirect:t.fullPath}}):s()}),a.a=v},KQKM:function(t,a,s){"use strict";a.a={name:"van-cell",props:{icon:String,title:String,value:[String,Number],url:String,label:String,isLink:Boolean,required:Boolean}}},KcWK:function(t,a,s){"use strict";var e=s("TIfe");a.a={name:"hello",data:function(){return{title:"同意协议"}},methods:{logout:function(){e.a.logout(),this.$router.push({name:"login"})},accept:function(){this.$router.push({name:"home"})}}}},Ky8j:function(t,a,s){function e(t){return s(n(t))}function n(t){var a=l[t];if(!(a+1))throw new Error("Cannot find module '"+t+"'.");return a}var l={"./af":"hb3S","./af.js":"hb3S","./ar":"6lXS","./ar-dz":"c1Qk","./ar-dz.js":"c1Qk","./ar-kw":"zlSU","./ar-kw.js":"zlSU","./ar-ly":"TEWp","./ar-ly.js":"TEWp","./ar-ma":"mCys","./ar-ma.js":"mCys","./ar-sa":"YH1f","./ar-sa.js":"YH1f","./ar-tn":"qRZ7","./ar-tn.js":"qRZ7","./ar.js":"6lXS","./az":"RNRk","./az.js":"RNRk","./be":"FvvU","./be.js":"FvvU","./bg":"LI68","./bg.js":"LI68","./bm":"Jelg","./bm.js":"Jelg","./bn":"osrr","./bn.js":"osrr","./bo":"wHBw","./bo.js":"wHBw","./br":"slNx","./br.js":"slNx","./bs":"KBQU","./bs.js":"KBQU","./ca":"5YE5","./ca.js":"5YE5","./cs":"apug","./cs.js":"apug","./cv":"OnJX","./cv.js":"OnJX","./cy":"bvCs","./cy.js":"bvCs","./da":"CRHZ","./da.js":"CRHZ","./de":"269X","./de-at":"CiHe","./de-at.js":"CiHe","./de-ch":"OOzI","./de-ch.js":"OOzI","./de.js":"269X","./dv":"qLhb","./dv.js":"qLhb","./el":"OUja","./el.js":"OUja","./en-au":"g84U","./en-au.js":"g84U","./en-ca":"hYGL","./en-ca.js":"hYGL","./en-gb":"lP2r","./en-gb.js":"lP2r","./en-ie":"9skZ","./en-ie.js":"9skZ","./en-nz":"1CCq","./en-nz.js":"1CCq","./eo":"GjzY","./eo.js":"GjzY","./es":"Y4Uu","./es-do":"I2ZG","./es-do.js":"I2ZG","./es-us":"ZgrB","./es-us.js":"ZgrB","./es.js":"Y4Uu","./et":"vCfx","./et.js":"vCfx","./eu":"gpdJ","./eu.js":"gpdJ","./fa":"aJ/1","./fa.js":"aJ/1","./fi":"ajN2","./fi.js":"ajN2","./fo":"5z9J","./fo.js":"5z9J","./fr":"O/Vt","./fr-ca":"6koU","./fr-ca.js":"6koU","./fr-ch":"lRhm","./fr-ch.js":"lRhm","./fr.js":"O/Vt","./fy":"uH3i","./fy.js":"uH3i","./gd":"De7V","./gd.js":"De7V","./gl":"AGKb","./gl.js":"AGKb","./gom-latn":"NYlY","./gom-latn.js":"NYlY","./gu":"e64u","./gu.js":"e64u","./he":"oHWq","./he.js":"oHWq","./hi":"rwXL","./hi.js":"rwXL","./hr":"/k+j","./hr.js":"/k+j","./hu":"DU7u","./hu.js":"DU7u","./hy-am":"3WwZ","./hy-am.js":"3WwZ","./id":"up6q","./id.js":"up6q","./is":"2Jmy","./is.js":"2Jmy","./it":"O+Bz","./it.js":"O+Bz","./ja":"zHG5","./ja.js":"zHG5","./jv":"g3aK","./jv.js":"g3aK","./ka":"f7Wq","./ka.js":"f7Wq","./kk":"ZzNN","./kk.js":"ZzNN","./km":"ZW8U","./km.js":"ZW8U","./kn":"Ptbc","./kn.js":"Ptbc","./ko":"ztcR","./ko.js":"ztcR","./ky":"fJ72","./ky.js":"fJ72","./lb":"1Cpn","./lb.js":"1Cpn","./lo":"PYc9","./lo.js":"PYc9","./lt":"y/1T","./lt.js":"y/1T","./lv":"UrF1","./lv.js":"UrF1","./me":"wGvI","./me.js":"wGvI","./mi":"a+XZ","./mi.js":"a+XZ","./mk":"vuSe","./mk.js":"vuSe","./ml":"7VHS","./ml.js":"7VHS","./mr":"lRk4","./mr.js":"lRk4","./ms":"u+C0","./ms-my":"wbMZ","./ms-my.js":"wbMZ","./ms.js":"u+C0","./my":"I+yJ","./my.js":"I+yJ","./nb":"b/bI","./nb.js":"b/bI","./ne":"xXl8","./ne.js":"xXl8","./nl":"93qg","./nl-be":"wkAj","./nl-be.js":"wkAj","./nl.js":"93qg","./nn":"cRaG","./nn.js":"cRaG","./pa-in":"TW4k","./pa-in.js":"TW4k","./pl":"5P7n","./pl.js":"5P7n","./pt":"3m4i","./pt-br":"lYRY","./pt-br.js":"lYRY","./pt.js":"3m4i","./ro":"k2ag","./ro.js":"k2ag","./ru":"srbR","./ru.js":"srbR","./sd":"Pxfr","./sd.js":"Pxfr","./se":"lCQx","./se.js":"lCQx","./si":"lhcT","./si.js":"lhcT","./sk":"o3R2","./sk.js":"o3R2","./sl":"aFE/","./sl.js":"aFE/","./sq":"+YkP","./sq.js":"+YkP","./sr":"12pX","./sr-cyrl":"ddrJ","./sr-cyrl.js":"ddrJ","./sr.js":"12pX","./ss":"117E","./ss.js":"117E","./sv":"tUDJ","./sv.js":"tUDJ","./sw":"n/yW","./sw.js":"n/yW","./ta":"6cFf","./ta.js":"6cFf","./te":"/TJJ","./te.js":"/TJJ","./tet":"EUmm","./tet.js":"EUmm","./th":"b3bN","./th.js":"b3bN","./tl-ph":"KM1b","./tl-ph.js":"KM1b","./tlh":"6nFU","./tlh.js":"6nFU","./tr":"Ru3b","./tr.js":"Ru3b","./tzl":"3tRE","./tzl.js":"3tRE","./tzm":"K+c8","./tzm-latn":"oDhw","./tzm-latn.js":"oDhw","./tzm.js":"K+c8","./uk":"AoyT","./uk.js":"AoyT","./ur":"QnIv","./ur.js":"QnIv","./uz":"nD8u","./uz-latn":"FCgX","./uz-latn.js":"FCgX","./uz.js":"nD8u","./vi":"s6dE","./vi.js":"s6dE","./x-pseudo":"CIAV","./x-pseudo.js":"CIAV","./yo":"OqSS","./yo.js":"OqSS","./zh-cn":"enU+","./zh-cn.js":"enU+","./zh-hk":"2gif","./zh-hk.js":"2gif","./zh-tw":"zAbM","./zh-tw.js":"zAbM"};e.keys=function(){return Object.keys(l)},e.resolve=n,t.exports=e,e.id="Ky8j"},M93x:function(t,a,s){"use strict";function e(t){s("BeCp")}var n=s("igi8"),l=s("6tvs"),o=s("y0f9"),r=e,i=o(n.a,l.a,!1,r,null,null);a.a=i.exports},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("2HEv"),n=s("M93x"),l=s("JU1R"),o=s("y5zA"),r=s.n(o),i=s("l8CV"),c=(s.n(i),s("Vdk4")),u=s("Klf7"),d=s.n(u),v=s("VsUZ"),f=s("BMa3"),b=s.n(f);e.default.use(d.a),e.default.use(c.a),e.default.use(r.a),e.default.prototype.$api=v.a,e.default.prototype.$http=b.a,e.default.config.productionTip=!1,new e.default({el:"#app",router:l.a,template:"<App/>",components:{App:n.a}})},OTdt:function(t,a,s){"use strict";var e=(s("TIfe"),s("y5zA"));s.n(e);a.a={name:"hello",data:function(){return{task:{title:"备份任务"+Math.random(),db_config:{db_host:"127.0.0.1",db_port:"3306",db_user:"root",db_pwd:"zhaojun",db_name:"xc_1"},tables:[],run_time:{s:"0",m:"*/5",H:"*",D:"*",M:"*",Y:"*"},last_backup_time:0,success:0,mark:"",save_path:"",user:{username:"Jobs",login_ip:"127.0.0.1"},status:!0},tables:[],layer:{show:!1,msg:".."},layerChooseTable:{show:!1,msg:""}}},methods:{submit:function(){var t=this;if(this.task.tables.length<=0)return s.i(e.Toast)("请选择需要备份的表"),!1;this.$api.addTask(this.task).then(function(a){1===a.data.code&&(t.layer.show=!0,t.layer.msg=a.data.msg,setTimeout(function(){t.$router.push({name:"home"})},1500))})},showChooseTables:function(){var t=this;this.tables=[],this.$api.getTableDb(this.task).then(function(a){1===a.data.code?a.data.data.forEach(function(a){t.tables.push(a)}):t.layerChooseTable.msg=a.data.msg}).catch(function(t){}),this.layerChooseTable.show=!0},sureTables:function(){console.log(this.task.tables),this.layerChooseTable.show=!1}},created:function(){}}},"S+zh":function(t,a){},SyTy:function(t,a,s){"use strict";document.cookie},TIfe:function(t,a,s){"use strict";var e=(s("SyTy"),s("Z7nP"));a.a={isLogin:function(){return!!e.get("user_token")},logout:function(){e.remove("user_token")},token:function(){return e.get("user_token")},setToken:function(t){e.set("user_token","asd")}}},VsUZ:function(t,a,s){"use strict";var e=s("BMa3"),n=s.n(e),l=(s("TIfe"),s("DEjr")),o=s.n(l),r=n.a.create({baseURL:"api"}),i={portal:{login:"portal/login"},user:{account:"user.user/account",profile:"user.user/profile",password:"user.user/password",userInfo:"user.user/userInfo"},task:{tasks:"task/tasks",add:"task/push",del:"task/del",logs:"task/logs"},bak:{logs:"bak_logs"},table:{db:"table/db"}};a.a={login:function(t){return r.post(i.portal.login,{user:t})},account:function(){return r.get(i.user.account)},profile:function(){return r.get(i.user.profile)},getTasks:function(){return r.get(i.task.tasks)},addTask:function(t){return r.post(i.task.add,{task:t})},getTableDb:function(t){return r.post(i.table.db,{task:t})},getBakLogs:function(t,a){return r.get(i.bak.logs+"/"+a+"?"+o.a.stringify({_id:t._id}))},deleteTask:function(t){return r.delete(i.task.del+"?"+o.a.stringify({ids:t}))}}},WVZC:function(t,a){},ZqAm:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{class:["van-cell","van-hairline",{"van-cell--required":t.required}],attrs:{href:t.url},on:{click:function(a){t.$emit("click")}}},[t.$slots.title||t.title?s("div",{staticClass:"van-cell__title"},[t._t("icon",[t.icon?s("i",{staticClass:"van-icon",class:"van-icon-"+t.icon}):t._e()]),t._v(" "),t._t("title",[s("span",{staticClass:"van-cell__text",domProps:{textContent:t._s(t.title)}}),t._v(" "),t.label?s("span",{staticClass:"van-cell__label",domProps:{textContent:t._s(t.label)}}):t._e()])],2):t._e(),t._v(" "),t.value||t.$slots.default?s("div",{staticClass:"van-cell__value",class:{"van-cell__value--link":t.isLink,"van-cell__value--alone":!t.$slots.title&&!t.title&&!t.label}},[t._t("default",[s("span",{domProps:{textContent:t._s(t.value)}})])],2):t._e(),t._v(" "),t._t("right-icon",[t.isLink?s("i",{staticClass:"van-cell__right-icon van-icon van-icon-arrow"}):t._e()]),t._v(" "),t._t("extra")],2)},n=[],l={render:e,staticRenderFns:n};a.a=l},abUv:function(t,a,s){"use strict";var e=(s("TIfe"),s("pFyO"));a.a={components:{VanCell:e.a},name:"hello",data:function(){return{tasks:[],title:"同意协议"}},methods:{addTask:function(){this.$router.push({name:"TaskAdd"})},getAllTask:function(){var t=this;this.tasks=[],this.$api.getTasks().then(function(a){1===a.data.code&&a.data.data.forEach(function(a){t.tasks.push(a)})}).catch(function(t){})},taskDetail:function(t){console.log(t),this.$router.push({name:"TaskDetail",params:t})}},created:function(){this.getAllTask()}}},bPeR:function(t,a,s){"use strict";function e(t){s("WVZC")}var n=s("OTdt"),l=s("em2R"),o=s("y0f9"),r=e,i=o(n.a,l.a,!1,r,"data-v-088355b1",null);a.a=i.exports},bV0x:function(t,a){},bgXz:function(t,a,s){"use strict";function e(t){s("bV0x")}var n=s("KcWK"),l=s("x2AS"),o=s("y0f9"),r=e,i=o(n.a,l.a,!1,r,"data-v-5423d4d2",null);a.a=i.exports},cMTw:function(t,a,s){"use strict";function e(t){s("4Ces")}var n=s("11Qj"),l=s("8h1H"),o=s("y0f9"),r=e,i=o(n.a,l.a,!1,r,"data-v-cdc45d36",null);a.a=i.exports},em2R:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"index-page"},[t.layerChooseTable.show?s("div",[s("div",{},[s("van-row",[s("van-checkbox-group",{model:{value:t.task.tables,callback:function(a){t.task.tables=a},expression:"task.tables"}},[s("van-cell-group",[t._l(t.tables,function(a,e){return s("van-cell",{key:e},[s("van-checkbox",{attrs:{name:a}},[t._v(t._s(a))])],1)}),t._v(" "),t.tables.length<=0?s("van-cell",{staticClass:"text-center"},[s("span",{domProps:{innerHTML:t._s(t.layerChooseTable.msg)}})]):t._e()],2)],1)],1),t._v(" "),s("van-row",[s("van-col",{attrs:{span:"24"}},[s("van-button",{attrs:{type:"primary","bottom-action":""},on:{click:t.sureTables}},[t._v("确定")])],1)],1)],1)]):t._e(),t._v(" "),t.layerChooseTable.show?t._e():s("div",[s("van-cell-group",[s("van-field",{attrs:{label:"任务标题",placeholder:"请填写",required:""},model:{value:t.task.title,callback:function(a){t.task.title=a},expression:"task.title"}}),t._v(" "),s("van-field",{attrs:{label:"数据库驱动",value:"mysql"}}),t._v(" "),s("van-field",{attrs:{label:"db_host",placeholder:"请填写",required:""},model:{value:t.task.db_config.db_host,callback:function(a){t.task.db_config.db_host=a},expression:"task.db_config.db_host"}}),t._v(" "),s("van-field",{attrs:{label:"db_port",placeholder:"请填写",required:""},model:{value:t.task.db_config.db_port,callback:function(a){t.task.db_config.db_port=a},expression:"task.db_config.db_port"}}),t._v(" "),s("van-field",{attrs:{label:"db_user",placeholder:"请填写",required:""},model:{value:t.task.db_config.db_user,callback:function(a){t.task.db_config.db_user=a},expression:"task.db_config.db_user"}}),t._v(" "),s("van-field",{attrs:{label:"db_pwd",placeholder:"请填写",required:""},model:{value:t.task.db_config.db_pwd,callback:function(a){t.task.db_config.db_pwd=a},expression:"task.db_config.db_pwd"}}),t._v(" "),s("van-field",{attrs:{label:"db_name",placeholder:"请填写",required:""},model:{value:t.task.db_config.db_name,callback:function(a){t.task.db_config.db_name=a},expression:"task.db_config.db_name"}}),t._v(" "),s("van-field",{attrs:{label:"备份(年)",placeholder:"*"},model:{value:t.task.run_time.Y,callback:function(a){t.task.run_time.Y=a},expression:"task.run_time.Y"}}),t._v(" "),s("van-field",{attrs:{label:"备份(月)",placeholder:"*"},model:{value:t.task.run_time.M,callback:function(a){t.task.run_time.M=a},expression:"task.run_time.M"}}),t._v(" "),s("van-field",{attrs:{label:"备份(日)",placeholder:"*"},model:{value:t.task.run_time.D,callback:function(a){t.task.run_time.D=a},expression:"task.run_time.D"}}),t._v(" "),s("van-field",{attrs:{label:"备份(时)",placeholder:"*"},model:{value:t.task.run_time.H,callback:function(a){t.task.run_time.H=a},expression:"task.run_time.H"}}),t._v(" "),s("van-field",{attrs:{label:"备份(分)",placeholder:"*"},model:{value:t.task.run_time.m,callback:function(a){t.task.run_time.m=a},expression:"task.run_time.m"}}),t._v(" "),s("van-field",{attrs:{label:"备份(秒)"},model:{value:t.task.run_time.s,callback:function(a){t.task.run_time.s=a},expression:"task.run_time.s"}}),t._v(" "),s("van-cell",{attrs:{title:"备份数据表","is-link":"",value:"已选择"+t.task.tables.length+"个表"},on:{click:t.showChooseTables}}),t._v(" "),s("van-switch-cell",{attrs:{title:"开启"},model:{value:t.task.status,callback:function(a){t.task.status=a},expression:"task.status"}})],1),t._v(" "),s("van-row",[s("van-col",{attrs:{span:"24"}},[s("van-button",{attrs:{type:"primary","bottom-action":""},on:{click:t.submit}},[t._v("确认添加")])],1)],1),t._v(" "),s("van-popup",{staticClass:"van-popup-1",attrs:{position:"top",overlay:!1},model:{value:t.layer.show,callback:function(a){t.layer.show=a},expression:"layer.show"}},[s("span",{domProps:{innerHTML:t._s(t.layer.msg)}})])],1)])},n=[],l={render:e,staticRenderFns:n};a.a=l},f382:function(t,a,s){"use strict";function e(t){s("mNJx")}var n=s("C04G"),l=s("H16u"),o=s("y0f9"),r=e,i=o(n.a,l.a,!1,r,null,null);a.a=i.exports},igi8:function(t,a,s){"use strict";a.a={name:"app"}},k2xk:function(t,a,s){"use strict";var e=s("bPeR"),n=s("yY8E");a.a=[{path:"/task/addtask",name:"TaskAdd",component:e.a,meta:{requiresAuth:!0}},{path:"/task/detail",name:"TaskDetail",component:n.a,meta:{requiresAuth:!0}}]},kpcQ:function(t,a){},l8CV:function(t,a){},mNJx:function(t,a){},oxTF:function(t,a,s){"use strict";var e=s("f382");a.a=[{path:"/bak/logs",name:"BakLogs",component:e.a,meta:{requiresAuth:!0}}]},pFyO:function(t,a,s){"use strict";var e=s("KQKM"),n=s("ZqAm"),l=s("y0f9"),o=l(e.a,n.a,!1,null,null,null);a.a=o.exports},psra:function(t,a,s){"use strict";var e=(s("TIfe"),s("hx6x"));a.a={name:"hello",data:function(){return{task:{title:"备份任务"+Math.random(),db_config:{db_host:"127.0.0.1",db_port:"3306",db_user:"root",db_pwd:"zhaojun",db_name:"xc_1"},tables:[],run_time:{s:"10",m:"*",H:"*",D:"*",M:"*",Y:"*"},status:!0},tables:[],logs:[],layer:{show:!1,msg:".."},layerChooseTable:{show:!1,msg:""},isLoading:!1}},methods:{parseTime:function(t){return t*=1e3,s.i(e.a)(t).format("YYYY-MM-DD HH:mm:ss")},remove:function(){this.$api.deleteTask([this.task._id]),this.$router.push({name:"home"})},save:function(){var t=this;this.$api.saveTask(this.task).then(function(a){1===a.data.code&&(t.layer.show=!0,t.layer.msg=a.data.msg,setTimeout(function(){t.$router.push({name:"home"})},1500))})},showChooseTables:function(){var t=this;this.tables=[],this.$api.getTableDb(this.task).then(function(a){1===a.data.code?a.data.data.forEach(function(a){t.tables.push(a)}):t.layerChooseTable.msg=a.data.msg}).catch(function(t){}),this.layerChooseTable.show=!0},showLogs:function(){this.$router.push({name:"BakLogs",params:{_id:this.task._id}})},sureTables:function(){this.layerChooseTable.show=!1},getTask:function(t){t.status=1===t.status,this.task=t}},created:function(){if(!this.$route.params._id)return this.$router.push({name:"home"}),!1;this.getTask(this.$route.params)}}},qSdX:function(t,a,s){"use strict";function e(t){s("kpcQ")}var n=s("EKrd"),l=s("8plh"),o=s("y0f9"),r=e,i=o(n.a,l.a,!1,r,"data-v-5a821c77",null);i.exports},tlXl:function(t,a,s){"use strict";function e(t){s("GfgM")}var n=s("abUv"),l=s("zBCL"),o=s("y0f9"),r=e,i=o(n.a,l.a,!1,r,"data-v-89787af4",null);a.a=i.exports},tq8m:function(t,a){},uslO:function(t,a,s){function e(t){return s(n(t))}function n(t){var a=l[t];if(!(a+1))throw new Error("Cannot find module '"+t+"'.");return a}var l={"./af":"hb3S","./af.js":"hb3S","./ar":"6lXS","./ar-dz":"c1Qk","./ar-dz.js":"c1Qk","./ar-kw":"zlSU","./ar-kw.js":"zlSU","./ar-ly":"TEWp","./ar-ly.js":"TEWp","./ar-ma":"mCys","./ar-ma.js":"mCys","./ar-sa":"YH1f","./ar-sa.js":"YH1f","./ar-tn":"qRZ7","./ar-tn.js":"qRZ7","./ar.js":"6lXS","./az":"RNRk","./az.js":"RNRk","./be":"FvvU","./be.js":"FvvU","./bg":"LI68","./bg.js":"LI68","./bm":"Jelg","./bm.js":"Jelg","./bn":"osrr","./bn.js":"osrr","./bo":"wHBw","./bo.js":"wHBw","./br":"slNx","./br.js":"slNx","./bs":"KBQU","./bs.js":"KBQU","./ca":"5YE5","./ca.js":"5YE5","./cs":"apug","./cs.js":"apug","./cv":"OnJX","./cv.js":"OnJX","./cy":"bvCs","./cy.js":"bvCs","./da":"CRHZ","./da.js":"CRHZ","./de":"269X","./de-at":"CiHe","./de-at.js":"CiHe","./de-ch":"OOzI","./de-ch.js":"OOzI","./de.js":"269X","./dv":"qLhb","./dv.js":"qLhb","./el":"OUja","./el.js":"OUja","./en-au":"g84U","./en-au.js":"g84U","./en-ca":"hYGL","./en-ca.js":"hYGL","./en-gb":"lP2r","./en-gb.js":"lP2r","./en-ie":"9skZ","./en-ie.js":"9skZ","./en-nz":"1CCq","./en-nz.js":"1CCq","./eo":"GjzY","./eo.js":"GjzY","./es":"Y4Uu","./es-do":"I2ZG","./es-do.js":"I2ZG","./es-us":"ZgrB","./es-us.js":"ZgrB","./es.js":"Y4Uu","./et":"vCfx","./et.js":"vCfx","./eu":"gpdJ","./eu.js":"gpdJ","./fa":"aJ/1","./fa.js":"aJ/1","./fi":"ajN2","./fi.js":"ajN2","./fo":"5z9J","./fo.js":"5z9J","./fr":"O/Vt","./fr-ca":"6koU","./fr-ca.js":"6koU","./fr-ch":"lRhm","./fr-ch.js":"lRhm","./fr.js":"O/Vt","./fy":"uH3i","./fy.js":"uH3i","./gd":"De7V","./gd.js":"De7V","./gl":"AGKb","./gl.js":"AGKb","./gom-latn":"NYlY","./gom-latn.js":"NYlY","./gu":"e64u","./gu.js":"e64u","./he":"oHWq","./he.js":"oHWq","./hi":"rwXL","./hi.js":"rwXL","./hr":"/k+j","./hr.js":"/k+j","./hu":"DU7u","./hu.js":"DU7u","./hy-am":"3WwZ","./hy-am.js":"3WwZ","./id":"up6q","./id.js":"up6q","./is":"2Jmy","./is.js":"2Jmy","./it":"O+Bz","./it.js":"O+Bz","./ja":"zHG5","./ja.js":"zHG5","./jv":"g3aK","./jv.js":"g3aK","./ka":"f7Wq","./ka.js":"f7Wq","./kk":"ZzNN","./kk.js":"ZzNN","./km":"ZW8U","./km.js":"ZW8U","./kn":"Ptbc","./kn.js":"Ptbc","./ko":"ztcR","./ko.js":"ztcR","./ky":"fJ72","./ky.js":"fJ72","./lb":"1Cpn","./lb.js":"1Cpn","./lo":"PYc9","./lo.js":"PYc9","./lt":"y/1T","./lt.js":"y/1T","./lv":"UrF1","./lv.js":"UrF1","./me":"wGvI","./me.js":"wGvI","./mi":"a+XZ","./mi.js":"a+XZ","./mk":"vuSe","./mk.js":"vuSe","./ml":"7VHS","./ml.js":"7VHS","./mr":"lRk4","./mr.js":"lRk4","./ms":"u+C0","./ms-my":"wbMZ","./ms-my.js":"wbMZ","./ms.js":"u+C0","./my":"I+yJ","./my.js":"I+yJ","./nb":"b/bI","./nb.js":"b/bI","./ne":"xXl8","./ne.js":"xXl8","./nl":"93qg","./nl-be":"wkAj","./nl-be.js":"wkAj","./nl.js":"93qg","./nn":"cRaG","./nn.js":"cRaG","./pa-in":"TW4k","./pa-in.js":"TW4k","./pl":"5P7n","./pl.js":"5P7n","./pt":"3m4i","./pt-br":"lYRY","./pt-br.js":"lYRY","./pt.js":"3m4i","./ro":"k2ag","./ro.js":"k2ag","./ru":"srbR","./ru.js":"srbR","./sd":"Pxfr","./sd.js":"Pxfr","./se":"lCQx","./se.js":"lCQx","./si":"lhcT","./si.js":"lhcT","./sk":"o3R2","./sk.js":"o3R2","./sl":"aFE/","./sl.js":"aFE/","./sq":"+YkP","./sq.js":"+YkP","./sr":"12pX","./sr-cyrl":"ddrJ","./sr-cyrl.js":"ddrJ","./sr.js":"12pX","./ss":"117E","./ss.js":"117E","./sv":"tUDJ","./sv.js":"tUDJ","./sw":"n/yW","./sw.js":"n/yW","./ta":"6cFf","./ta.js":"6cFf","./te":"/TJJ","./te.js":"/TJJ","./tet":"EUmm","./tet.js":"EUmm","./th":"b3bN","./th.js":"b3bN","./tl-ph":"KM1b","./tl-ph.js":"KM1b","./tlh":"6nFU","./tlh.js":"6nFU","./tr":"Ru3b","./tr.js":"Ru3b","./tzl":"3tRE","./tzl.js":"3tRE","./tzm":"K+c8","./tzm-latn":"oDhw","./tzm-latn.js":"oDhw","./tzm.js":"K+c8","./uk":"AoyT","./uk.js":"AoyT","./ur":"QnIv","./ur.js":"QnIv","./uz":"nD8u","./uz-latn":"FCgX","./uz-latn.js":"FCgX","./uz.js":"nD8u","./vi":"s6dE","./vi.js":"s6dE","./x-pseudo":"CIAV","./x-pseudo.js":"CIAV","./yo":"OqSS","./yo.js":"OqSS","./zh-cn":"enU+","./zh-cn.js":"enU+","./zh-hk":"2gif","./zh-hk.js":"2gif","./zh-tw":"zAbM","./zh-tw.js":"zAbM"};e.keys=function(){return Object.keys(l)},e.resolve=n,t.exports=e,e.id="uslO"},wz8o:function(t,a,s){"use strict";function e(t){s("tq8m")}var n=s("CBhb"),l=s("xg9r"),o=s("y0f9"),r=e,i=o(n.a,l.a,!1,r,"data-v-13439157",null);a.a=i.exports},x2AS:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"accept-page"},[s("h1",[t._v("同意协议")]),t._v(" "),s("van-row",[s("van-col",{attrs:{span:"12"}},[s("van-button",{attrs:{"bottom-action":""},on:{click:t.logout}},[t._v("拒绝协议")])],1),t._v(" "),s("van-col",{attrs:{span:"12"}},[s("van-button",{attrs:{type:"primary","bottom-action":""},on:{click:t.accept}},[t._v("同意协议")])],1)],1)],1)},n=[],l={render:e,staticRenderFns:n};a.a=l},xg9r:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hello"},[s("van-search",{attrs:{placeholder:"商品名称"}})],1)},n=[],l={render:e,staticRenderFns:n};a.a=l},yY8E:function(t,a,s){"use strict";function e(t){s("S+zh")}var n=s("psra"),l=s("BNJ2"),o=s("y0f9"),r=e,i=o(n.a,l.a,!1,r,null,null);a.a=i.exports},zBCL:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"index-page"},[s("van-nav-bar",{staticStyle:{"z-index":"1001"},attrs:{title:"自动化备份工具",fixed:""}}),t._v(" "),s("div",{staticStyle:{height:"50px"}}),t._v(" "),s("van-cell-group",[t.tasks.length<=0?s("van-cell",{staticStyle:{"text-align":"center"},attrs:{title:"暂无数据"}}):t._e(),t._v(" "),t._l(t.tasks,function(a){return s("van-cell",{attrs:{title:a.title?a.title:"未命名",value:a.db_config.db_host,"is-link":""},on:{click:function(s){t.taskDetail(a)}}})})],2),t._v(" "),s("van-row",[s("van-col",{attrs:{span:"24"}},[s("van-button",{attrs:{type:"primary","bottom-action":""},on:{click:t.addTask}},[t._v("添加备份计划")])],1),t._v(" "),s("van-col",{staticStyle:{"margin-top":"10px"},attrs:{span:"24"}},[s("router-link",{attrs:{to:{name:"BakLogs"}}},[s("van-button",{attrs:{type:"primary","bottom-action":""},on:{click:t.addTask}},[t._v("查询备份日志")])],1)],1)],1)],1)},n=[],l={render:e,staticRenderFns:n};a.a=l}},["NHnr"]);
//# sourceMappingURL=app.fa53f3ec5a77cb9d5b23.js.map