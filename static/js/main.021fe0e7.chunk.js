(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(29),i=a.n(n),r=a(16),o=a(11),c=a(0),s=(a(92),a(150)),l=a(59),d=a(155),u=a(151),m=a(146),j=a(143),h=a(152),b=a(147),p=a(158),O=a(153),f=a(154),x=a(75),v=a.n(x),y=a(145),g=a(139),S=a(149),B=a(2),I=function(e){var t=e.user,a=t.email,n=t.name;return Object(B.jsx)(l.a,{variant:"body1",component:"div",className:"UserInfo",children:Object(B.jsx)(S.a,{href:"mailto:".concat(a),color:"inherit",children:n})})},C=function(e){var t=e.todo,a=t.user,n=t.title,i=t.id,r=t.completed;return Object(B.jsxs)(y.a,{"data-id":i,className:v()("TodoInfo",{"TodoInfo--completed":r}),children:[Object(B.jsx)(g.a,{children:Object(B.jsx)(l.a,{variant:"h5",className:"TodoInfo__title",children:n})}),a&&Object(B.jsx)(I,{user:a})]},i)},_=function(e){var t=e.todos,a=void 0===t?[]:t;return Object(B.jsx)(f.a,{children:a.map((function(e){return Object(B.jsx)(C,{todo:e},e.id)}))})},k=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],N=function(e){return k.find((function(t){return t.id===e}))||null},T=a(31),D=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(T.a)(Object(T.a)({},e),{},{user:N(e.userId)})})),w=(a(98),function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(D),f=Object(o.a)(i,2),x=f[0],v=f[1],y=Object(c.useState)(0),g=Object(o.a)(y,2),S=g[0],I=g[1],C=Object(c.useState)(""),T=Object(o.a)(C,2),w=T[0],z=T[1],A=Object(c.useState)(""),M=Object(o.a)(A,2),P=M[0],W=M[1];return Object(B.jsx)("div",{className:"App",children:Object(B.jsxs)(s.a,{maxWidth:"sm",children:[Object(B.jsx)(l.a,{variant:"h2",component:"h1",textAlign:"center",gutterBottom:!0,children:"Add todo form"}),Object(B.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),S||W("Please choose a user"),a.trim()||z("Please enter a title"),S&&a.trim()){var t={id:Math.max.apply(Math,Object(r.a)(x.map((function(e){return e.id}))))+1,title:a,completed:!1,user:N(S),userId:S};v([].concat(Object(r.a)(x),[t])),n(""),I(0),z(""),W("")}},children:[Object(B.jsx)(d.a,{fullWidth:!0,sx:{marginBottom:"20px"},children:Object(B.jsx)(u.a,{type:"text",label:"Title",placeholder:"Enter a title",value:a,onChange:function(e){var t=e.target.value.replace(/[^A-Za-z\u0410-\u042f\u0430-\u044f0-9\s]/g,"");n(t),z("")},error:Boolean(w),helperText:w})}),Object(B.jsxs)(d.a,{fullWidth:!0,children:[Object(B.jsx)(m.a,{htmlFor:"user-select",children:"User"}),Object(B.jsxs)(j.a,{id:"user-select",value:S,onChange:function(e){I(Number(e.target.value)),W("")},inputProps:{"data-cy":"userSelect"},error:Boolean(P),input:Object(B.jsx)(h.a,{label:"User"}),children:[Object(B.jsx)(b.a,{value:0,disabled:!0,children:"Choose a user"}),k.map((function(e){return Object(B.jsx)(b.a,{value:e.id,children:e.name},e.id)}))]}),Boolean(P)&&Object(B.jsx)(p.a,{error:!0,children:P})]}),Object(B.jsx)(O.a,{type:"submit","data-cy":"submitButton",variant:"contained",size:"large",fullWidth:!0,sx:{display:"block",margin:"0 auto",marginTop:"20px",fontSize:"20px"},children:"Add"})]}),Object(B.jsx)(_,{todos:x})]})})});i.a.render(Object(B.jsx)(w,{}),document.getElementById("root"))},92:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.021fe0e7.chunk.js.map