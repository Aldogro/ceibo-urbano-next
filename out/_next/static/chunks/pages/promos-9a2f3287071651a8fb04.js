_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"5Woq":function(e,t,r){"use strict";r.r(t);var n=r("cpVT"),o=r("nKUr"),c=r("xvhg"),a=r("q1tI"),i=r.n(a),s=r("R/WZ"),u=r("Lqff"),l=r("20a2"),d=r("Iljs"),O=r("NKQG"),j=r("30+C"),p=r("lFIR"),b=r("Ie8z"),m=r("oa/T"),f=r("o4QW"),h=r("Z3vd"),g=r("PsDL"),x=r("ofer"),v=r("Ji2X"),_=r("tRbT"),S=r("3Yvs"),T=r("MPUk"),E=r.n(T),y=r("xMF9"),P=r.n(y),w=r("7frF"),R=r.n(w),C=r("CRf/"),M=r.n(C),N=r("p7UQ"),k=r("j7uD");t.default=function(){var e=D(),t=Object(u.b)(),r=Object(c.a)(t,2),n=r[0],s=(r[1],Object(d.c)()),T=Object(c.a)(s,2),y=T[0],w=T[1],C=Object(a.useState)(!1),I=C[0],q=C[1],G=Object(a.useState)(null),U=G[0],z=G[1],A=Object(l.useRouter)(),B=Object(O.b)(),X=B.enqueueSnackbar;B.closeSnackbar;Object(a.useEffect)((function(){n.user.email||A.push("/login"),W()}),[]);var W=function(){Object(k.f)("promos").then((function(e){return w({type:d.a.SET_PROMOS,payload:e.docs.map((function(e){return e.data()}))})}))};return Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)(N.a,{}),Object(o.jsx)(v.a,{maxWidth:"lg",className:e.marginTop,children:n.user.email?Object(o.jsxs)("div",{className:e.root,children:[Object(o.jsx)(x.a,{className:e.title,variant:"h4",children:"Listado de promos"}),Object(o.jsx)(h.a,{color:"primary",className:e.addButton,onClick:function(){return A.push("/promos/add")},children:"Agregar Promo"}),Object(o.jsx)(S.a,{isOpen:I,handleConfirm:function(){Object(k.d)({selectedId:U,collection:"promos"}).then((function(){X("Se elimin\xf3 la promo correctamente",{variant:"success"}),q(!1),W()})).catch((function(e){return X("Ha sucedido un error",{variant:"error"})}))},handleClose:function(){return q(!1)},question:"\xbfSeguro quer\xe9s borrar esta promo?"}),Object(o.jsx)(_.a,{container:!0,spacing:2,children:null===y||void 0===y?void 0:y.promos.map((function(t){return Object(o.jsx)(_.a,{item:!0,xs:12,lg:+t.cols,children:Object(o.jsxs)(j.a,{children:[Object(o.jsxs)(p.a,{children:[Object(o.jsx)(b.a,{className:e.media,image:t.picture,title:t.name}),Object(o.jsxs)(m.a,{children:[Object(o.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.name}),Object(o.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:t.description})]})]}),Object(o.jsxs)(f.a,{children:[Object(o.jsx)(g.a,{size:"small",color:"primary",onClick:function(){return A.push("/promos/".concat(t.id,"/edit"))},children:Object(o.jsx)(E.a,{})}),Object(o.jsx)(g.a,{size:"small",color:"primary",onClick:function(){return e=t.id,q(!0),void z(e);var e},children:Object(o.jsx)(P.a,{})}),Object(o.jsx)(g.a,{size:"small",color:"primary",onClick:function(){return function(e){var t=e.id,r=e.publish;Object(k.h)({id:t,publish:r,collection:"promos"}).then((function(){X("Se actualiz\xf3 el estado correctamente",{variant:"success"}),W()})).catch((function(){return X("Ha sucedido un error",{variant:"error"})}))}(t)},children:t.publish?Object(o.jsx)(R.a,{}):Object(o.jsx)(M.a,{})})]})]})},t.id)}))})]}):Object(o.jsx)("div",{})})]})};var D=Object(s.a)((function(e){return{root:{overflow:"hidden",backgroundColor:e.palette.background.paper},marginTop:{margin:e.spacing("70px","auto")},addButton:{marginBottom:"2rem"},gridList:{width:1200,height:"auto"},media:{height:140},icon:{color:"rgba(255, 255, 255, 0.54)"},title:Object(n.a)({marginTop:"1rem",marginBottom:"1rem",fontSize:"18px"},e.breakpoints.up("sm"),{marginTop:"2rem",marginBottom:"1rem",fontSize:"24px"})}}))},Iljs:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return b}));var n=r("nKUr"),o=r("cpVT"),c=r("q1tI"),a=r.n(c),i=r("j7uD");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=a.a.createContext({}),d={promo:{},promos:[],maxDiscount:0},O={CREATE_PROMO:"CREATE_PROMO",SET_PROMO:"SET_PROMO",SET_PROMOS:"SET_PROMOS",GET_MAX_DISCOUNT:"GET_MAX_DISCOUNT"},j=function(e,t){switch(t.type){case O.CREATE_PROMO:var r=(new Date).getTime().toString();return void i.c.firestore().collection("promos").doc(r).set(u(u({},t.payload),{},{id:r})).then((function(){return console.log("promo agregada")})).catch((function(e){return console.log("error al agregar una promo")}));case O.SET_PROMO:return u(u({},e),{},{promo:t.payload});case O.SET_PROMOS:return u(u({},e),{},{promos:t.payload||[]});case O.GET_MAX_DISCOUNT:var n=0;return e.promos.forEach((function(e){e.discount<n&&(n=e.discount)})),u(u({},e),{},{maxDiscount:-1*n});default:throw new Error("Unhandled action type: ".concat(t.type))}},p=function(e){var t=e.children,r=Object(c.useReducer)(j,d),o=r[0],a=r[1];return Object(n.jsx)(l.Provider,{value:[o,a],children:t})},b=function(){return Object(c.useContext)(l)}},RGGt:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/promos",function(){return r("5Woq")}])}},[["RGGt",1,2,4,5,0,3,7,6,8,14]]]);