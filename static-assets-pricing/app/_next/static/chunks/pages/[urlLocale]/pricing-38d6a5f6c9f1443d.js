(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{78737:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[urlLocale]/pricing",function(){return r(36937)}])},36937:function(e,t,r){"use strict";r.r(t);var n=r(30815),i=r(52322),o=r(27302),u=r(45202),a=r(79140),l=r(98332),c=r(56755),s=r(37468),y=r(52659),p=r(48994),d=r(92576),f=r(54381);let O=e=>(0,i.jsx)(y.Os,(0,n._)({},e));O.getInitialProps=async e=>{let{query:{urlLocale:t},res:{locals:{ipCountry:r}}}=e,n={},i={},y=(0,s.resolveCountry)({country:t,ipCountry:r}),O=await (0,a.bO)({country:y,profileType:l.p.PERSONAL,types:l.i.BANK_DETAILS_ORDER});i=(null==O?void 0:O.length)!==0&&(null==O?void 0:O[0])?O[0]:{};let v=await (0,a.bO)({country:y,profileType:l.p.PERSONAL,types:[l.i.CARD_ORDER,l.i.CARD_PRODUCTION].join(",")}),A=await (0,a.Ki)({country:y,profileType:l.p.PERSONAL});(null==A?void 0:A.configs)&&(n=A);let w=await (0,p.W)({sourceAmount:1e3,sourceCurrency:u.qY,targetCurrency:u.qY,payOutMethod:"BALANCE",payInMethod:"EVOLVE_SWIFT"}),E=await (0,p.W)({sourceAmount:1e3,sourceCurrency:u.U4,targetCurrency:u.U4,payOutMethod:"BALANCE",payInMethod:"PEOPLES_TRUST_SWIFT"}),_=await (0,a.H7)({sourceCurrency:u.NS,targetCurrency:u.Ow}),N=await (0,a.Oz)({country:y,profileType:l.p.PERSONAL}),T=(0,c.getBankDetailsOffering)(N),h=await (0,d.e)({country:y,profileType:l.p.PERSONAL}),C=await (0,f.S)({country:y,profileType:l.p.PERSONAL});return{API:{API_URL:"/gateway"},atmFeesData:{2022:o.M},initAccountPrice:i,initBalanceChargeSummary:n,initBankDetailsOffering:T,initBaseFeeSummary:_,initCADSwiftCharge:E,initCardPricing:v,initCountry:y,initProductAvailability:N,initUSDWireCharge:w,investmentAnnualFeePercent:.55,isChargeable:h,multiCcyAccountAvailable:C,profileType:l.p.PERSONAL}},t.default=O},48994:function(e,t,r){"use strict";r.d(t,{W:function(){return i}});var n=r(79140);let i=async e=>{let t,{payInMethod:r,payOutMethod:i,sourceCurrency:o,targetCurrency:u,sourceAmount:a}=e;try{var l;let e=await (0,n.aS)({sourceAmount:a,sourceCurrency:o,targetCurrency:u});t=e&&(null===(l=e.filter(e=>{let{payInMethod:t,payOutMethod:n}=e;return r&&i?t===r&&n===i:r&&!i?t===r:!r&&i?n===i:void 0})[0])||void 0===l?void 0:l.total)}catch(e){console.error("There was an error while fetching wire charges",e)}return t}},92576:function(e,t,r){"use strict";r.d(t,{e:function(){return i}});var n=r(79140);let i=async e=>{var t,r;let{country:i,profileType:o}=e,u=await (0,n.Oz)({country:i,profileType:o});return null==u?void 0:null===(r=u.details)||void 0===r?void 0:null===(t=r.BANKDETAIL)||void 0===t?void 0:t.eligible}},54381:function(e,t,r){"use strict";r.d(t,{S:function(){return i}});var n=r(79140);let i=async e=>{var t,r;let{country:i,profileType:o}=e,u=await (0,n.Oz)({country:i,profileType:o});return null==u?void 0:null===(r=u.details)||void 0===r?void 0:null===(t=r.BALANCE)||void 0===t?void 0:t.eligible}}},function(e){e.O(0,[659,774,888,179],function(){return e(e.s=78737)}),_N_E=e.O()}]);