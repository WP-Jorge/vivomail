(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31224995"],{"6c22":function(t,e,s){"use strict";s("ac63")},a55b:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"login_container",style:"background-image:url("+t.loginImg+")"},[s("div",{staticClass:"form"},[s("LoginForm")],1)])])},r=[],a=s("1bab");function o(){return Object(a["a"])({url:"getLoginImg"})}function i(t){return Object(a["a"])({url:"login?username="+t.username+"&password="+t.password,method:"post"})}function c(t){return Object(a["a"])({url:"addShoppingCart",method:"post",data:t})}var u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login_form"},[s("el-image",{attrs:{src:t.logoImg,fit:"fit"}}),s("div",{staticClass:"title"},[t._v("账号密码登录")]),s("el-input",{staticClass:"username",attrs:{size:"large",placeholder:"请输入用户名",clearable:""},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),s("el-input",{staticClass:"password",attrs:{placeholder:"请输入密码","show-password":""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),s("el-checkbox",{staticClass:"rememberme",model:{value:t.isRememberMe,callback:function(e){t.isRememberMe=e},expression:"isRememberMe"}},[t._v("两周内免登录")]),s("el-button",{staticClass:"login_btn",attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")]),s("el-button",{staticClass:"register_btn",on:{click:t.toRegister}},[t._v("注册VIVO账号")]),s("p",{staticClass:"tips"},[t._v("如果您未注册过VIVO账号，则有些功能您可能无法使用，点击注册VIVO账号，体验全新功能。")])],1)},l=[],m={props:{logoImg:{type:String,default:"https://accountstatic.vivo.com.cn/accountstatic.vivo.com.cn/static/img/logo.1f42884.png.webp"}},data:function(){return{isRememberMe:!1,user:{username:"",password:""},count:0,timer:null}},methods:{toRegister:function(){this.$router.push("/register").catch((function(t){return t}))},login:function(){var t=this;this.loginCheck()&&i(this.user).then((function(e){e&&200===e.status&&1===e.data.status?(t.$message({message:e.data.msg+"正在为您跳转至首页！",center:!0,type:"success"}),t.$store.commit("setUser",t.user),t.addShoppingCart(),t.$router.push("/home").catch((function(t){return t}))):t.$message({message:e.data.msg,center:!0,type:"warning"})}))},loginCheck:function(){return""===this.user.username||null===this.user.username?(this.$message({message:"用户名不能为空！",center:!0,type:"error"}),!1):""!==this.user.password&&null!==this.user.password||(this.$message({message:"密码不能为空！",center:!0,type:"error"}),!1)},addShoppingCart:function(){var t=this,e=JSON.parse(localStorage.getItem("goodsList"));e&&(this.count=e.length,this.timer&&clearInterval(this.timer),this.timer=setInterval((function(){t.count>0?(t.count--,e[t.count].username=t.user.username,c(e[t.count]).then((function(t){return t}))):(localStorage.clear("goodsList"),clearInterval(t.timer))}),100))}}},g=m,p=(s("b752"),s("2877")),d=Object(p["a"])(g,u,l,!1,null,null,null),h=d.exports,f={components:{LoginForm:h},data:function(){return{loginImg:""}},mounted:function(){this.getLoginImg()},methods:{getLoginImg:function(){var t=this;o().then((function(e){t.loginImg=e.data.loginImg}))}}},b=f,v=(s("6c22"),Object(p["a"])(b,n,r,!1,null,"3ea840f0",null));e["default"]=v.exports},ac63:function(t,e,s){},b752:function(t,e,s){"use strict";s("c917")},c917:function(t,e,s){}}]);
//# sourceMappingURL=chunk-31224995.f357fc1e.js.map