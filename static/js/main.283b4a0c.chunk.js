(this["webpackJsonpedifice-web"]=this["webpackJsonpedifice-web"]||[]).push([[0],{24:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(17),s=n.n(a),i=(n(45),n(46),n(13)),r=n(2),l=n(21),d=n(3),j=(n(47),n(48),n(0)),u=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){null===localStorage.getItem("token")?o(!1):o(!0)}),[]);var a=Object(r.f)();return Object(j.jsxs)("nav",{className:"navbar-container",children:[Object(j.jsxs)("div",{className:"navbar-left-portion",onClick:function(){a.push("/")},children:[Object(j.jsx)("img",{alt:"logo",src:"https://play-lh.googleusercontent.com/SpoozAfBft3HEAvsEV8xHTScJnIzLLWBkt-vb2hONjrsYWn8D7bsm4vKjzp_3-JI4N_K"}),Object(j.jsx)("p",{children:"Edifice"})]}),Object(j.jsx)("div",{className:"navbar-right-portion",children:n?Object(j.jsx)("p",{onClick:function(){localStorage.removeItem("token"),a.push("/"),window.location.reload()},children:"LOGOUT"}):Object(j.jsx)("p",{onClick:function(){return a.push("/login")},children:"LOGIN"})})]})},b=(n(24),function(e){var t=e.courseName,n=e.courseType,c=e.thumbnail,o=e.courseId,a=e.toEnroll,s=Object(r.f)();return Object(j.jsxs)("div",{onClick:function(){return s.push(a?"course/enroll/".concat(o):"course/".concat(o))},className:"course-card",children:[Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"thumbnail",children:Object(j.jsx)("img",{src:c,alt:""})})}),Object(j.jsx)("p",{children:t}),Object(j.jsx)("p",{style:"PREMIUM"===n.toUpperCase()?{color:"orange"}:"FREE"===n.toUpperCase()?{color:"var(--edificeGreen)"}:{color:"grey"},children:n.toUpperCase()})]})}),h=n(6),p=n.n(h),m="http://edificeapp.wisdomislam.org",O=n(11),g=n.n(O),f=function(){window.document.title="Home | Edifice";var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)([]),s=Object(d.a)(a,2),i=s[0],h=s[1],O=Object(c.useState)([]),f=Object(d.a)(O,2),x=f[0],v=f[1],y=Object(c.useState)([]),w=Object(d.a)(y,2),N=w[0],S=w[1],E=Object(r.f)();Object(c.useEffect)((function(){null!==localStorage.getItem("token")?(k(),C()):E.replace("/login")}),[E]);var k=function(){o(!0);var e=JSON.stringify({}),t={method:"post",url:"".concat(m,"/lms/get-lmsCourseEnroll-list"),headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("token"))},data:e};p()(t).then((function(e){h(e.data),o(!1)}))},C=function(){o(!0);var e=JSON.stringify({}),t={method:"post",url:"".concat(m,"/lms/get-lmsCourse-list-v2"),headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("token"))},data:e};p()(t).then((function(e){v(e.data),I(e.data),o(!1)}))},I=function(e){var t,n=[],c=Object(l.a)(e);try{for(c.s();!(t=c.n()).done;){var o,a=t.value,s=Object(l.a)(a.tags);try{for(s.s();!(o=s.n()).done;){var i=o.value;console.log("'".concat(i,"'")),n.includes(i)||n.push(i)}}catch(r){s.e(r)}finally{s.f()}}}catch(r){c.e(r)}finally{c.f()}S(n)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)("div",{className:"homepage-header top-margin",children:[Object(j.jsx)("p",{children:"My Courses"}),Object(j.jsx)("div",{})]}),Object(j.jsx)("div",{className:"homepage-course-cards-list",children:n?Object(j.jsx)("div",{className:"loading-spin-container",children:Object(j.jsx)(g.a,{type:"spin",color:"#00bc4e"})}):0===i.length?Object(j.jsx)("div",{className:"loading-spin-container",children:"Enrolled Courses will appear here"}):i.map((function(e){return Object(j.jsx)(b,{courseName:e.course.name,courseType:"",thumbnail:m+"/files/pics/"+e.course.logo,courseId:e.course._id,toEnroll:!1})}))}),n?"":N.map((function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"homepage-header",children:[Object(j.jsx)("p",{children:e}),Object(j.jsx)("div",{})]}),Object(j.jsx)("div",{className:"homepage-course-cards-list",children:x.map((function(t){return t.tags.includes(e)?Object(j.jsx)(b,{courseName:t.name,courseType:t.paid?"PREMIUM":"FREE",thumbnail:m+"/files/pics/"+t.logo,courseId:t._id,toEnroll:!0}):""}))})]})}))]})},x=(n(75),n(12)),v=(n(20),function(){window.document.title="Login | Edifice";var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(""),s=Object(d.a)(a,2),i=s[0],l=s[1],u=Object(c.useState)(!1),b=Object(d.a)(u,2),h=b[0],O=b[1],f=Object(r.f)(),v=function(){o(""),l("")},y=function(e){Object(x.b)(e,{style:{background:"var(--errorRed)",color:"white",textAlign:"center"},position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0})};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"login-wrapper",children:[Object(j.jsxs)("div",{className:"login-container",children:[Object(j.jsxs)("div",{className:"login-header-row",children:[Object(j.jsx)("img",{alt:"logo",src:"https://play-lh.googleusercontent.com/SpoozAfBft3HEAvsEV8xHTScJnIzLLWBkt-vb2hONjrsYWn8D7bsm4vKjzp_3-JI4N_K"}),Object(j.jsx)("p",{children:"EDIFICE"})]}),Object(j.jsx)("div",{className:"login-header-desc",children:Object(j.jsx)("p",{children:"Log in to Edifice with email and password."})}),Object(j.jsxs)("div",{className:"login-input-container",children:[Object(j.jsx)("input",{value:n,onChange:function(e){return o(e.target.value)},placeholder:"Email",type:"email"}),Object(j.jsx)("input",{value:i,onChange:function(e){return l(e.target.value)},placeholder:"Password",type:"password"})]}),Object(j.jsx)("div",{className:"login-forgot-password-container",onClick:function(){return f.push("/forgot-password")},children:Object(j.jsx)("p",{children:"Forgot Password"})}),Object(j.jsxs)("div",{className:"login-footer-row",children:[Object(j.jsxs)("div",{className:"login-text-button",children:[Object(j.jsx)("p",{children:"Not Registered?"}),Object(j.jsx)("p",{children:"Register Now"})]}),Object(j.jsx)("div",{onClick:function(){if(O(!0),n&&i){var e=JSON.stringify({org_id:"5f143f5d93c1f321f663aaf6",username:n,password:i}),t={method:"post",url:"".concat(m,"/users/authenticate"),headers:{"Content-Type":"application/json"},data:e};p()(t).then((function(e){localStorage.setItem("token",e.data.user.token),f.push("/"),O(!1),v(),console.log(e.data.user.token),window.location.reload()})).catch((function(e){"Request failed with status code 500"===e.message&&y("Invalid email or password"),O(!1),v()}))}else O(!1),y("Email and Password must not be empty"),v()},className:"login-button",children:h?Object(j.jsx)(g.a,{type:"spin",color:"white",width:"10%",height:"60%"}):"LOG IN"})]})]}),Object(j.jsx)(x.a,{})]})})}),y=n(23),w=n.n(y),N=n(36),S=n(40),E=(n(77),n(37)),k=function(e){e.courseName;window.document.title="Loading Lessons.. | Edifice";var t=Object(c.useState)([]),n=Object(d.a)(t,2),o=n[0],a=n[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),l=i[0],b=i[1],h=Object(c.useState)(""),O=Object(d.a)(h,2),f=O[0],x=O[1],v=Object(c.useState)(""),y=Object(d.a)(v,2),k=y[0],C=y[1],I=Object(c.useState)(""),T=Object(d.a)(I,2),J=T[0],z=T[1],A=Object(c.useState)(!1),L=Object(d.a)(A,2),F=L[0],_=L[1],P=Object(r.g)().courseId,W=Object(r.f)();localStorage.getItem("token")||W.push("/"),Object(c.useEffect)((function(){B()}),[]);var B=function(){_(!0);var e=JSON.stringify({course:P}),t={method:"post",url:"".concat(m,"/lms/get-lmsCourseEnroll-status"),headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("token"))},data:e};p()(t).then((function(e){console.log(e.data),"Enrolled"===e.data.status?function(){console.log("loading lessons....");var e=JSON.stringify({course:P}),t={method:"post",url:"".concat(m,"/lms/get-lmsLesson-list"),headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("token"))},data:e};p()(t).then((function(e){e.data.every((function(e){return!!e.isExam||(x(D(e.ytLink)),C(e.name),z(e.body),b(e._id),window.document.title=e.name+" - Edifice",!1)})),e.data.forEach((function(e){a((function(t){return[].concat(Object(S.a)(t),[{id:e._id,name:e.name,ytLink:e.ytLink,isExam:e.isExam,body:e.body}])}))})),_(!1)}))}():W.replace("/")}))};function R(){return(R=Object(N.a)(w.a.mark((function e(t){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.stringify({lesson:t}),c={method:"post",url:"".concat(m,"/lms/get-lmsAttendance"),headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("token"))},data:n},e.next=4,p()(c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){var t=e.match(/^https?:\/\/(?:www\.youtube(?:-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*&)?vi?=|&vi?=|\?(?:.*&)?vi?=)([^#&?\n/<>"']*)/i);return!(!t||11!==t[1].length)&&t[1]};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsx)("div",{className:"course-page-container top-margin",children:F?Object(j.jsx)("div",{className:"loading-spin-container",children:Object(j.jsx)(g.a,{type:"spin",color:"#00bc4e"})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"course-page-video-container",children:[Object(j.jsx)(E.a,{className:"yt-player",videoId:f,opts:{width:"100%",height:"100%",playerVars:{modestbranding:1,rel:0,showinfo:0}}}),Object(j.jsx)("p",{className:"ytTitle",children:k}),Object(j.jsx)("p",{className:"ytBody",children:J})]}),Object(j.jsx)("div",{className:"course-name-lessons-container",children:o.map((function(e){return e.isExam?null:Object(j.jsxs)("div",{className:l===e.id?"active-lesson-card":"",onClick:function(){x(D(e.ytLink)),C(e.name),z(e.body),b(e.id),function(e){R.apply(this,arguments)}(e.id),window.document.title=e.name+" | Edifice",window.scrollTo(0,0)},children:[Object(j.jsx)("p",{children:e.name}),Object(j.jsx)("p",{children:e.body})]},e.id)}))})]})})]})},C=function(){window.document.title="Change Password | Edifice";var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(!1),s=Object(d.a)(a,2),i=s[0],r=s[1],l=function(){o("")},u=function(e){Object(x.b)(e,{style:{background:"var(--errorRed)",color:"white",textAlign:"center"},position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0})};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"login-wrapper",children:[Object(j.jsxs)("div",{className:"login-container",style:{height:"auto"},children:[Object(j.jsxs)("div",{className:"login-header-row",children:[Object(j.jsx)("img",{alt:"logo",src:"https://play-lh.googleusercontent.com/SpoozAfBft3HEAvsEV8xHTScJnIzLLWBkt-vb2hONjrsYWn8D7bsm4vKjzp_3-JI4N_K"}),Object(j.jsx)("p",{children:"EDIFICE"})]}),Object(j.jsx)("div",{className:"login-header-desc",children:Object(j.jsx)("p",{children:"Enter your email for password reset link."})}),Object(j.jsx)("div",{className:"login-input-container",children:Object(j.jsx)("input",{value:n,onChange:function(e){return o(e.target.value)},placeholder:"Email",type:"email"})}),Object(j.jsx)("div",{className:"login-footer-row",children:Object(j.jsx)("div",{onClick:function(){if(r(!0),n){var e=JSON.stringify({email:n}),t={method:"post",url:"".concat(m,"/users/reset-pass"),headers:{"Content-Type":"application/json"},data:e};p()(t).then((function(e){r(!1),l(),u("PENDING"===e.data.msg?"Already sent!":"Password reset link sent! Please check your inbox."),console.log(e.data)})).catch((function(e){"Request failed with status code 500"===e.message&&u("Invalid email or password"),r(!1),l()}))}else r(!1),u("Enter email"),l()},className:"login-button",children:i?Object(j.jsx)(g.a,{type:"spin",color:"white",width:"10%",height:"60%"}):"Send Link"})})]}),Object(j.jsx)(x.a,{})]})})};n(89);var I=function(){var e=Object(r.g)().courseId,t=Object(c.useState)(!1),n=Object(d.a)(t,2),o=n[0],a=n[1],s=Object(c.useState)({}),i=Object(d.a)(s,2),l=i[0],b=i[1],h=Object(c.useState)(!1),O=Object(d.a)(h,2),f=O[0],v=O[1],y=Object(r.f)();Object(c.useEffect)((function(){window.scrollTo(0,0);var e=document.createElement("script");e.src="https://checkout.razorpay.com/v1/checkout.js",e.async=!0,document.body.appendChild(e),w(),N()}),[]);var w=function(){a(!0);var t=JSON.stringify({_id:e}),n={method:"post",url:"".concat(m,"/lms/get-lmsCourse-by-id"),headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("token"))},data:t};p()(n).then((function(e){b(e.data),console.log(e.data),a(!1)}))},N=function(){a(!0);var t=JSON.stringify({course:e}),n={method:"post",url:"".concat(m,"/lms/get-lmsCourseEnroll-status"),headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("token"))},data:t};p()(n).then((function(e){"Enrolled"===e.data.status?v(!0):v(!1),a(!1)}))},S=function(){a(!0);var e=JSON.stringify({amount:100*l.fee,receipt:""}),t={method:"post",url:"".concat(m,"/lms/get-orderid-for-razorpay"),headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("token"))},data:e};p()(t).then((function(e){a(!1),console.log(e.data);var t={key:"rzp_live_nlooAs3MChJzDp",amount:100*l.fee,name:l.name,description:l.category.name,order_id:e.data.order_id,theme:{color:"#32B44A"}};new window.Razorpay(t).open()})).catch((function(e){var t;a(!1),t="Something went wrong",Object(x.b)(t,{style:{background:"var(--errorRed)",color:"white",textAlign:"center"},position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0})}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("div",{className:"card",children:o?Object(j.jsx)("div",{className:"loading-spin-container",children:Object(j.jsx)(g.a,{type:"spin",color:"#00bc4e"})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"title-row",children:[Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsx)("div",{className:"thumbnail",children:Object(j.jsx)("img",{src:m+"/files/pics/"+l.logo,alt:""})}),Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("p",{children:[l.name," (",l.code,")"]})})]}),Object(j.jsx)("button",{onClick:function(){f?y.push("/course/".concat(e)):l.paid?S():function(){if(!l.paid){a(!0);var t=JSON.stringify({course:e}),n={method:"post",url:"".concat(m,"/lms/add-lmsCourseEnroll"),headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("token"))},data:t};p()(n).then((function(e){window.location.reload(),a(!1)}))}}()},children:f?"Go to Course":l.paid?"Pay & Enroll":"Enroll"})]}),Object(j.jsx)("p",{children:l.description})]})}),Object(j.jsx)("div",{className:"top",style:{backgroundImage:"url(".concat(m+"/files/pics/"+l.logo,")")},children:Object(j.jsx)("div",{className:"gradient"})}),Object(j.jsx)("div",{className:"bottom"})]}),Object(j.jsx)(x.a,{})]})},T=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(i.a,{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",component:null!==localStorage.getItem("token")?f:v}),Object(j.jsx)(r.a,{exact:!0,path:"/login",component:v}),Object(j.jsx)(r.a,{exact:!0,path:"/forgot-password",component:C}),Object(j.jsx)(r.a,{exact:!0,path:"/course/:courseId",component:k}),Object(j.jsx)(r.a,{exact:!0,path:"/course/enroll/:courseId",component:I})]})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),J()}},[[90,1,2]]]);
//# sourceMappingURL=main.283b4a0c.chunk.js.map