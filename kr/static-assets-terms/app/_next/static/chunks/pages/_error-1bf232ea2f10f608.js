(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64820],{52904:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n(46177)}])},46177:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return x}});var l=n(85893),s=n(90968),t=n(57312),a=n(16035);n(67294);var i=n(87268),o=n(11716),c=n(62242),d=n(44012),u=e=>{let{title:r,description:n}=e;return(0,l.jsx)("div",{className:"section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-xs-12 col-md-8 col-md-push-2 text-xs-center",children:[(0,l.jsx)(c.a,{className:"m-b-4",name:c.A.GEAR,alt:"Gear",loading:"lazy"}),(0,l.jsx)("h1",{className:"mw-display-2 m-t-4",children:(0,l.jsx)(d.Z,{id:r})}),(0,l.jsx)("p",{className:"m-b-4",children:(0,l.jsx)(d.Z,{id:n})}),(0,l.jsx)("a",{href:"/",className:"btn btn-accent btn-priority-2",children:(0,l.jsx)(d.Z,{id:"error.not.found.page.go.home"})})]})})})})};let p=e=>{let{children:r,locale:n,translations:t,isBusinessPage:i,navTranslations:c}=e,d=i?o.K:o.N;return(0,l.jsx)(s.Provider,{i18n:{locale:n,messages:{...t,...c}},children:(0,l.jsx)(a.f6,{theme:"personal",children:(0,l.jsx)(d,{locale:n,children:r})})})},h=e=>{switch(e){case 404:return{title:"error.not.found.page.title",description:"error.not.found.page.description"};case 400:return{title:"error.bad.request.page.title",description:"error.no.access.description"};default:return{title:"error.server.error.page.title",description:"error.no.access.description"}}},v=e=>{var r;let{statusCode:n,isBusinessPage:s,localeForTranslation:t,translations:a,navTranslations:i}=e;null===(r=window.Rollbar)||void 0===r||r.error("Error loading the page: ".concat(n||500));let o=h(n);return(0,l.jsx)(p,{locale:t,translations:a,isBusinessPage:s,navTranslations:i,children:(0,l.jsx)(u,{...o})})};async function m(){let{PersonalNavMessages:e,BusinessNavMessages:r,FooterMessages:l}=await Promise.all([n.e(21921),n.e(40849)]).then(n.bind(n,40849));return{PersonalNavMessages:e,BusinessNavMessages:r,FooterMessages:l}}v.getInitialProps=async e=>{var r,n,l,s,a,o;let{req:{url:c},res:d}=e,u=await (0,i.a$)(d.locals.locale),{PersonalNavMessages:p,BusinessNavMessages:h,FooterMessages:v}=await m(),x=null!==(n=e.err)&&void 0!==n?n:{},f=null!==(o=null!==(a=null!==(s=null!==(l=null==x?void 0:x.status)&&void 0!==l?l:x.statusCode)&&void 0!==s?s:null==x?void 0:null===(r=x.response)||void 0===r?void 0:r.status)&&void 0!==a?a:null==d?void 0:d.statusCode)&&void 0!==o?o:500,j=c.split("/").includes("business"),g=(0,t.Wl)(d.locals.language,[j?h:p,v]);return{statusCode:f,translations:u,localeForTranslation:d.locals.locale,isBusinessPage:j,navTranslations:g}};var x=v}},function(e){e.O(0,[46169,84072,64851,37941,46832,49774,92888,40179],function(){return e(e.s=52904)}),_N_E=e.O()}]);