(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{13:function(e,t,r){e.exports={h1:"registration_h1__2_IDP",form:"registration_form__2E4YO",form_item:"registration_form_item__8LaB7",button:"registration_button__3Fg4i",error:"registration_error__2FeDq",loading:"registration_loading__140-l"}},29:function(e,t,r){e.exports={main:"LostPassword_main__3JiQG",error:"LostPassword_error__1KQfn",message:"LostPassword_message__3pxXu"}},30:function(e,t,r){e.exports={main:"NewPassword_main__uOk6G",inputs:"NewPassword_inputs__2efoD"}},48:function(e,t,r){e.exports={nav:"Nav_nav__h0oaZ"}},54:function(e,t,r){},55:function(e,t,r){},80:function(e,t,r){"use strict";r.r(t);var n,a=r(0),s=r.n(a),o=r(24),c=r.n(o),i=(r(54),r(5)),u=(r(55),r(28)),d=r(4),l=r(3),j=r(47),b=r.n(j).a.create({baseURL:"https://neko-back.herokuapp.com/2.0"}),p=function(e,t,r){return b.post("auth/login",{password:e,email:t,rememberMe:r})},h=function(){return b.post("auth/me",{})},O=function(){return b.delete("auth/me",{})},m=function(e,t){return b.post("/auth/register",{email:e,password:t})},f=function(e,t){return b.post("auth/set-new-password",{password:e,resetPasswordToken:t}).then((function(e){return e.data}))},g=function(e){return b.post("auth/forgot",{email:e,from:"cards-admin <valdismin@gmail.com>",message:"<div style=\"background-color: lime; padding: 15px\"> password recovery link: <a href='https://RomanRadaykinFrontend.github.io/#/enter-new-password/$token$'>link</a></div>"}).then((function(e){return e.data}))},v={},x=function(e){return{type:"IS-FETCHING",payload:{isFetching:e}}},w={},y=function(e,t,r){return{type:"SUCCESS-LOGIN",payload:{data:Object(l.a)({},e),isAuth:t,errorMessage:r}}},R=function(e,t){return{type:"FAILED-LOGIN",payload:{errorMessage:e,isAuth:t}}},N=r(1),_=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.login})),r=t.isAuth,n=t.errorMessage,a=Object(d.c)((function(e){return e.app.isFetching})),s=Object(u.a)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var r,n,a;e((r=t.password,n=t.email,a=t.rememberMe,function(e){e(x(!0)),p(r,n,a).then((function(t){e(y(t.data,!0,"")),e(x(!1))})).catch((function(t){var r=t.response?t.response.data.error:t.message+", more details in the console";e(R(r,!1)),e(x(!1))}))}))}});return console.log(n),r?Object(N.jsx)(i.a,{to:"/profile"}):Object(N.jsxs)("div",{children:["Login",a&&Object(N.jsx)("div",{children:"Loading..."}),n&&Object(N.jsx)("div",{style:{color:"red"},children:n}),Object(N.jsxs)("form",{onSubmit:s.handleSubmit,children:[Object(N.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(N.jsx)("input",{id:"email",name:"email",type:"email",onChange:s.handleChange,value:s.values.email}),Object(N.jsx)("label",{htmlFor:"password",children:"Password"}),Object(N.jsx)("input",{type:"text",name:"password",id:"password",value:s.values.password,onChange:s.handleChange}),Object(N.jsx)("label",{htmlFor:"rememberMe",children:"Remember me"}),Object(N.jsx)("input",{type:"checkbox",name:"rememberMe",value:"rememberMe",onChange:s.handleChange}),Object(N.jsx)("button",{type:"submit",disabled:a,children:"Submit"})]})]})},E=function(){return Object(N.jsx)("div",{children:"Error404"})},C=r(21),S=r(29),P=r.n(S),A=r(19),k=r.n(A),L=r(22),I={error:null,redirect:!1},F=function(e){return{type:"SET-ERROR",responseError:e}},T=function(e){return{type:"CHANGE-REDIRECT",redirectStatus:e}},D=function(){var e=Object(d.c)((function(e){return e.enterNewPassword.error})),t=Object(a.useState)(""),r=Object(C.a)(t,2),n=r[0],s=r[1],o=Object(d.c)((function(e){return e.enterNewPassword.redirect})),c=Object(d.b)();return Object(N.jsx)("div",{children:o?Object(N.jsxs)("h3",{className:P.a.message,children:["We have sent you a message with a link to change your password to this address:",n]}):Object(N.jsxs)("div",{className:P.a.main,children:[Object(N.jsx)("h1",{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 email \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(N.jsx)("h3",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 email \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u043d\u0430 \u0441\u0430\u0439\u0442"}),Object(N.jsx)("input",{onChange:function(e){s(e.currentTarget.value),c(F(null))},placeholder:"Enter Email"}),e?Object(N.jsx)("div",{className:P.a.error,children:e}):null,Object(N.jsx)("button",{onClick:function(){return c(function(e){return function(){var t=Object(L.a)(k.a.mark((function t(r){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(e);case 3:r(T(!0)),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),n=t.t0.response?t.t0.response.data.error:t.t0.message+", more details in the console",r(F(n));case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(n))},children:"Next"})]})})},G=r(30),M=r.n(G),U=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),r=t[0],n=t[1],s=Object(a.useState)(""),o=Object(C.a)(s,2),c=o[0],u=o[1],l=Object(i.f)().token,j=Object(d.b)(),b=Object(d.c)((function(e){return e.enterNewPassword.redirect})),p=Object(a.useState)(!1),h=Object(C.a)(p,2),O=h[0],m=h[1],g=Object(d.c)((function(e){return e.enterNewPassword.error}));return b?Object(N.jsx)(i.a,{to:"/login"}):Object(N.jsxs)("div",{className:M.a.main,children:[Object(N.jsx)("h1",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(N.jsxs)("div",{className:M.a.inputs,children:[Object(N.jsx)("input",{onChange:function(e){n(e.currentTarget.value)},type:"password",placeholder:"Enter new password"}),Object(N.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},type:"password",placeholder:"Repeat new password"}),O?Object(N.jsx)("div",{children:"Passwords mismatch!"}):null,g?Object(N.jsx)("div",{className:M.a.error,children:g}):null]}),Object(N.jsx)("button",{onClick:function(){return r===c?j((e=c,t=l,function(){var r=Object(L.a)(k.a.mark((function r(n){var a;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f(e,t);case 3:n(T(!0)),r.next=10;break;case 6:r.prev=6,r.t0=r.catch(0),a=r.t0.response?r.t0.response.data.error:r.t0.message+", more details in the console",n(F(a));case 10:case"end":return r.stop()}}),r,null,[[0,6]])})));return function(e){return r.apply(this,arguments)}}())):m(!0);var e,t},children:"Next"})]})},H=function(){return Object(N.jsx)("div",{children:"ShowAllComponents"})},Z=r(7),q=r(48),B=r.n(q),J=function(){return Object(N.jsxs)("nav",{className:B.a.nav,children:[Object(N.jsx)(Z.b,{to:"/login",children:"Login "}),Object(N.jsx)(Z.b,{to:"/registration",children:"Registration"}),Object(N.jsx)(Z.b,{to:"/profile",children:"Profile"}),Object(N.jsx)(Z.b,{to:"/404",children:"Error404"}),Object(N.jsx)(Z.b,{to:"/password-recovery",children:"Password recovery"}),Object(N.jsx)(Z.b,{to:"/enter-new-password/:token",children:"New password"}),Object(N.jsx)(Z.b,{to:"/show-all",children:"Show all"})]})},$=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.login.isAuth}));Object(d.c)((function(e){return e.app.isFetching}));return t?Object(N.jsxs)("div",{children:["Profile",Object(N.jsx)("button",{onClick:function(){e((function(e){e(x(!0)),O().then((function(t){e({type:"SUCCESS-LOGOUT",payload:{isAuth:!1}}),e(x(!1))})).catch((function(t){var r=t.response?t.response.data.error:t.message+", more details in the console";e(R(r,!1)),e(x(!1))}))}))},children:"logout"})]}):Object(N.jsx)(i.a,{to:"/login"})},Q=r(13),V=r.n(Q);!function(e){e.REDIRECT="Registration/REDIRECT",e.LOADING="Registration/LOADING",e.ERROR="Registration/ERROR"}(n||(n={}));var K={isRedirecting:!1,isLoading:!1,error:null},W=function(e){return{type:n.REDIRECT,payload:{redirect:e}}},X=function(e){return{type:n.ERROR,payload:{error:e}}},Y=function(e){return{type:n.LOADING,payload:{loading:e}}},z=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.registration.error})),r=Object(d.c)((function(e){return e.registration.isRedirecting})),n=Object(d.c)((function(e){return e.registration.isLoading})),a=Object(u.a)({initialValues:{email:"",password:"",confirmPassword:""},onSubmit:function(t){var r,n;e((r=t.email,n=t.password,function(){var e=Object(L.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Y(!0)),e.prev=1,e.next=4,m(r,n);case 4:t(Y(!1)),t(W(!0)),t(W(!1)),t(X(null)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),a=e.t0.response,t(X(a.data.error)),t(Y(!1));case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()))},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<=7&&(t.password="Password should be more 7 symbols"):t.password="Required",e.password!==e.confirmPassword&&""!==e.confirmPassword&&(t.password="Passwords do not match"),t}});return r?Object(N.jsx)(i.a,{to:"login"}):Object(N.jsxs)("div",{className:V.a.registration,children:[Object(N.jsx)("h1",{className:V.a.h1,children:"\u0424\u043e\u0440\u043c\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(N.jsxs)("form",{className:V.a.form,onSubmit:a.handleSubmit,children:[Object(N.jsxs)("div",{className:V.a.form_item,children:[Object(N.jsx)("input",Object(l.a)({type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"},a.getFieldProps("email"))),a.touched.email&&a.errors.email?Object(N.jsx)("div",{className:V.a.error,children:a.errors.email}):null]}),Object(N.jsxs)("div",{className:V.a.form_item,children:[Object(N.jsx)("input",Object(l.a)({type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"},a.getFieldProps("password"))),a.touched.password&&a.errors.password?Object(N.jsx)("div",{className:V.a.error,children:a.errors.password}):null]}),Object(N.jsxs)("div",{className:V.a.form_item,children:[Object(N.jsx)("input",Object(l.a)({type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"},a.getFieldProps("confirmPassword"))),a.touched.confirmPassword&&a.errors.confirmPassword?Object(N.jsx)("div",{className:V.a.error,children:a.errors.confirmPassword}):null]}),Object(N.jsx)("button",{className:V.a.button,type:"submit",disabled:n,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),t&&!n&&Object(N.jsx)("div",{className:V.a.error,children:t}),n&&Object(N.jsx)("div",{className:V.a.loading,children:"LOADING..."})]})};var ee=function(){Object(a.useEffect)((function(){e((function(e){h().then((function(t){e(y(t.data,!0,""))})).catch((function(t){var r=t.response?t.response.data.error:t.message+", more details in the console";e(R(r,!1))}))}))}),[]),Object(d.c)((function(e){return e.login.isAuth}));var e=Object(d.b)();return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(J,{}),Object(N.jsx)(i.b,{path:"/login",render:function(){return Object(N.jsx)(_,{})}}),Object(N.jsx)(i.b,{path:"/registration",render:function(){return Object(N.jsx)(z,{})}}),Object(N.jsx)(i.b,{path:"/404",render:function(){return Object(N.jsx)(E,{})}}),Object(N.jsx)(i.b,{path:"/profile",render:function(){return Object(N.jsx)($,{})}}),Object(N.jsx)(i.b,{path:"/password-recovery",render:function(){return Object(N.jsx)(D,{})}}),Object(N.jsx)(i.b,{path:"/enter-new-password/:token",render:function(){return Object(N.jsx)(U,{})}}),Object(N.jsx)(i.b,{path:"/show-all",render:function(){return Object(N.jsx)(H,{})}})]})},te=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,81)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),s(e),o(e)}))},re=r(17),ne=r(49),ae={},se={},oe={},ce=Object(re.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS-LOGIN":return Object(l.a)(Object(l.a)({},e),{},{isAuth:t.payload.isAuth,data:t.payload.data,errorMessage:""});case"FAILED-LOGIN":return Object(l.a)(Object(l.a)({},e),{},{isAuth:t.payload.isAuth,errorMessage:t.payload.errorMessage});case"SUCCESS-LOGOUT":return Object(l.a)(Object(l.a)({},e),{},{isAuth:t.payload.isAuth});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.REDIRECT:return Object(l.a)(Object(l.a)({},e),{},{isRedirecting:t.payload.redirect});case n.ERROR:return Object(l.a)(Object(l.a)({},e),{},{error:t.payload.error});case n.LOADING:return Object(l.a)(Object(l.a)({},e),{},{isLoading:t.payload.loading});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;return t.type,e},showAllComponents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;return t.type,e},passwordRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;return t.type,e},enterNewPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-ERROR":return Object(l.a)(Object(l.a)({},e),{},{error:t.responseError});case"CHANGE-REDIRECT":return Object(l.a)(Object(l.a)({},e),{},{redirect:t.redirectStatus});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.payload.isFetching});default:return e}}}),ie=Object(re.d)(ce,Object(re.a)(ne.a));c.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(Z.a,{children:Object(N.jsx)(d.a,{store:ie,children:Object(N.jsx)(ee,{})})})}),document.getElementById("root")),te()}},[[80,1,2]]]);
//# sourceMappingURL=main.518674f7.chunk.js.map