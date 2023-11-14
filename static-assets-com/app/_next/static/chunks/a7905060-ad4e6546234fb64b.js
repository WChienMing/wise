"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[132],{80416:function(e,n,o){o.d(n,{AH:function(){return k},ib:function(){return H},qF:function(){return E}}),o(85184);var r=o(4570),c=o(48538);o(83168);var i=o(2363),t=o(75606),a=o(5366),s=o(64728),l=o(54145),u=o(25601);o(80800);var d=o(58920);function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}o(6208),o(12877);var E=function(e){var n,o=e.profileId,r=e.query,c=e.timeZone,i=e.httpClient;try{return Promise.resolve(i.post({url:"/v1/profiles/"+o+"/activities/list/",upstream:"activity-service",config:{headers:m({},c?{"time-zone":c}:{}),data:(void 0===n&&(n=!1),{size:r.size,cursor:r.cursor,includeHiddenActivities:r.includeHiddenActivities,search:r.search,createdBy:r.createdBy,activityType:r.activityTypes,since:p(r.since),until:p(r.until,!0),useDescriptionWithMonthSummaryFormat:r.useDescriptionWithMonthSummaryFormat,direction:n?void 0:r.direction,movementType:n?h(r.direction):void 0,recipientId:r.recipientId,category:r.category,balanceId:n?void 0:r.balanceId,balanceIds:r.balanceIds,status:r.status})}})).then(function(e){return{activities:e.data,cursor:function(e){var n=e.headers.link;if(!n)return null;var o=g.exec(n);return null!==o?decodeURIComponent(o[1]):null}(e)}})}catch(e){return Promise.reject(e)}};function p(e,n){if(e){var o=new Date(e);return(n?(0,r.Z)(o):(0,c.Z)(o)).toISOString()}}var v,A,I,C,h=function(e){switch(e){case"INCOMING":return"CREDIT";case"OUTGOING":return"DEBIT";default:return}},g=/cursor="([a-zA-Z0-9=+/]*)"/,S=function(e,n){var o,r,c,i;return void 0===n&&(n=!1),o=a(e,{allowedAttributes:{span:["class"]},transformTags:{positive:a.simpleTransform("span",{class:"positive"}),negative:a.simpleTransform("span",{class:"negative"}),sensitive:n?a.simpleTransform("span",{class:"sensitive"}):"span",strikethrough:"s"}}),c=(r={allowedTags:["b","i","q","ruby","s","small","span","strong","sub","sup","time","var","positive","negative","strikethrough","sensitive"],allowedAttributes:!1,parser:{trim:!0}}).parser,i=a(o,{allowedTags:r.allowedTags,allowedAttributes:r.allowedAttributes}),(0,s.ZP)(i,void 0===c?{}:c)};(T=C||(C={})).SUMMARY="SUMMARY",T.DETAILS="DETAILS",T.DEFAULT="DEFAULT";var T,f,y={backgroundColor:((v={})[C.SUMMARY]="color-sentiment-warning",v[C.DETAILS]="color-sentiment-warning",v[C.DEFAULT]="color-sentiment-warning",v),color:"color-dark"},L={backgroundColor:((A={})[C.SUMMARY]="color-background-neutral",A[C.DETAILS]="color-background-screen",A[C.DEFAULT]="color-background-neutral",A),color:"color-content-tertiary"},N={backgroundColor:((I={})[C.SUMMARY]="color-background-neutral",I[C.DETAILS]="color-background-screen",I[C.DEFAULT]="color-background-neutral",I),color:"color-content-primary"},R={Icon:t.FastFlag,colours:N},b=m({},{"icon://batch":{Icon:t.Batch,colours:N},"icon://batchCancelled":{Icon:t.Batch,colours:L},"icon://cardCheck":{Icon:t.Card,colours:N},"icon://cashback":{Icon:t.Rewards,colours:N},"icon://cardPayment":{Icon:t.Card,colours:N},"icon://cardPaymentCancelled":{Icon:t.Card,colours:L},"icon://cashWithdrawal":{Icon:t.Atm,colours:N},"icon://conversion":{Icon:t.Convert,colours:N},"icon://directDebit":{Icon:t.DirectDebits,colours:N},"icon://hidden":{Icon:t.EyeShut,colours:N},"icon://in":{Icon:t.Receive,colours:N},"icon://inCancelled":{Icon:t.Receive,colours:L},"icon://move":{Icon:function(){return i.createElement("span",{className:"tw-icon","aria-hidden":"true",role:"presentation"},i.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M11.6678 16.5821L16.9999 21.9142L22.332 16.5821L20.9178 15.1679L17.9999 18.0858L17.9999 7L15.9999 7L15.9999 18.0858L13.082 15.1679L11.6678 16.5821Z"}),i.createElement("path",{d:"M6.99993 2.08581L12.332 7.41792L10.9178 8.83214L7.99993 5.91424L7.99992 17L5.99992 17L5.99993 5.91424L3.08203 8.83214L1.66782 7.41792L6.99993 2.08581Z"})))},colours:N},"icon://out":{Icon:t.Send,colours:N},"icon://outCancelled":{Icon:t.Send,colours:L},"icon://prefunding":{Icon:t.Graph,colours:N},"icon://prefundingCancelled":{Icon:t.Graph,colours:L},"icon://prefundingWarning":{Icon:t.Graph,colours:y},"icon://reward":{Icon:t.Invite,colours:N},"icon://schedule":{Icon:t.Calendar,colours:N},"icon://scheduleCancelled":{Icon:t.Calendar,colours:L},"icon://scheduleWarning":{Icon:t.Calendar,colours:y},"icon://topUp":{Icon:t.Plus,colours:N},"icon://topUpCancelled":{Icon:t.Plus,colours:L},"icon://unknown":R,"icon://warning":{Icon:t.Alert,colours:y},"icon://receipt":{Icon:t.Receipt,colours:N},"icon://refund-sent":{Icon:t.RefundSent,colours:N},"icon://autoConvert":{Icon:t.AutoConvert,colours:N},"icon://cross":{Icon:t.Cross,colours:L}},Object.fromEntries(Object.entries({"icon://other":t.General,"icon://holidays":t.Holidays,"icon://moneyAdded":t.Plus,"icon://charity":t.Charity,"icon://cashback":t.Rewards,"icon://uncategorized":t.General,"icon://cash":t.Money,"icon://entertainment":t.Entertainment,"icon://general":t.General,"icon://salary":t.Salary,"icon://housing":t.Rent,"icon://bills":t.Bills,"icon://expenses":t.Expenses,"icon://groceries":t.Groceries,"icon://eatingOut":t.EatingOut,"icon://family":t.Family,"icon://trips":t.Holidays,"icon://investments":t.Investments,"icon://personalCare":t.PersonalCare,"icon://savings":t.Savings,"icon://shopping":t.ECommerce,"icon://transport":t.Transport,"icon://salesAndRoyalties":t.SalesAndRoyalties,"icon://travel":t.Travel,"icon://costOfGoodsSold":t.CostOfGoodsSold,"icon://tax":t.Tax,"icon://contractServices":t.ContractServices,"icon://ownersWithdrawal":t.OwnersWithdrawal,"icon://marketing":t.Marketing,"icon://insurance":t.Insurance,"icon://utilities":t.Bills,"icon://rent":t.Rent,"icon://softwareAndWebHosting":t.SoftwareAndWebHosting,"icon://officeExpenses":t.OfficeExpenses}).map(function(e){return[e[0],{Icon:e[1],colours:N}]}))),D=function(e){var n;return null!=(n=b[e])?n:R},w=(0,i.createContext)(null),O=function(){var e;return null!=(e=(0,i.useContext)(w))?e:{hideSensitive:void 0,setHideSensitive:function(){}}},_=(Array.from(new Set([].concat(["BILLS","CASH","CHARITY","CONVERSION","EATING_OUT","ENTERTAINMENT","EXPENSES","FAMILY","GENERAL","GROCERIES","HOUSING","INVESTMENTS","MONEY_ADDED","OTHER","PERSONAL_CARE","SALARY","SAVINGS","SHOPPING","TRANSPORT","TRIPS","UNCATEGORIZED"],["CASH","CONTRACT_SERVICES","CONVERSION","COST_OF_GOODS_SOLD","ENTERTAINMENT","GENERAL","INSURANCE","MARKETING","MONEY_ADDED","OFFICE_EXPENSES","OTHER","OWNERS_WITHDRAWAL","RENT","REWARDS","SALARY","SALES_AND_ROYALTIES","SOFTWARE_AND_WEB_HOSTING","TAX","TRAVEL","UNCATEGORIZED","UTILITIES"]))),[].concat(["icon://batch","icon://batchCancelled","icon://cardCheck","icon://cardPayment","icon://cardPaymentCancelled","icon://cashback","icon://cashWithdrawal","icon://conversion","icon://directDebit","icon://hidden","icon://in","icon://inCancelled","icon://move","icon://out","icon://outCancelled","icon://prefunding","icon://prefundingCancelled","icon://prefundingWarning","icon://reward","icon://schedule","icon://scheduleCancelled","icon://scheduleWarning","icon://topUp","icon://topUpCancelled","icon://unknown","icon://warning","icon://receipt","icon://refund-sent","icon://autoConvert","icon://cross"],["icon://other","icon://holidays","icon://moneyAdded","icon://charity","icon://uncategorized","icon://cash","icon://entertainment","icon://general","icon://salary","icon://housing","icon://bills","icon://expenses","icon://groceries","icon://eatingOut","icon://family","icon://trips","icon://investments","icon://personalCare","icon://savings","icon://shopping","icon://transport","icon://salesAndRoyalties","icon://travel","icon://costOfGoodsSold","icon://tax","icon://contractServices","icon://ownersWithdrawal","icon://marketing","icon://insurance","icon://utilities","icon://rent","icon://softwareAndWebHosting","icon://officeExpenses"])),M="_dNZ6m",U=((f={}).CANCELLED=L,f.COMPLETED=N,f.IN_PROGRESS=N,f.REQUIRES_ATTENTION=y,f.UPCOMING=N,f),k=function(e){var n,o,r=e.thumbnail,c=e.variant,a=void 0===c?C.SUMMARY:c,s=e.activityStatus,l={"m-r-2":a===C.SUMMARY,"m-r-0":a===C.DETAILS||a===C.DEFAULT},u={"m-b-0":a===C.SUMMARY,"m-b-1":a===C.DETAILS||a===C.DEFAULT},m=((n={})._2NAzv=a===C.DETAILS,n["_XjGC-"]=a===C.SUMMARY,n),E=((o={})._CwDty=a===C.DETAILS,o._bcv9T=a===C.SUMMARY,o);if(r.startsWith("icon://")){var p=(_.includes(r)||"undefined"!=typeof window&&window.Rollbar&&window.Rollbar.warning("Unknown thumbnail: "+r),D(r)),v=s?U[s]:p.colours,A="var(--"+v.backgroundColor[a]+")",I="var(--"+v.color+")";return i.createElement("div",{className:d(M,u,l),role:"img",style:{backgroundColor:A,color:I}},i.createElement(p.Icon,{size:24}))}if(r.startsWith("https://"))return i.createElement("div",{className:d(M,m,u,l),role:"img",style:{backgroundImage:"url("+r+")"}});var h="var(--"+N.backgroundColor[a]+")";return i.createElement("div",{className:d(M,E,l,u),role:"img",style:{backgroundColor:h}},i.createElement(t.FastFlag,{size:24}))},G="_VcdR8",P="_C1U91",W="_soZRN",H=function(e){var n,o,r,c,t,a=e.url,s=e.amount,u=e.amountInfo,m=e.description,E=e.status,p=e.thumbnail,v=e.title,A=e.transactionDirection,I=void 0===A?"NONE":A,C=e.onClick,h=e.actionSlot,g=e.isHidden,T=(0,i.useMemo)(function(){return S(v)},[v]),f=(0,i.useRef)(null),y=O().hideSensitive,L=((n={})[G]="CANCELLED"===E,n._mN8YT="CANCELLED"!==E&&"CREDIT"===I&&!g,n._djpPo="CANCELLED"!==E&&"DEBIT"===I&&!g,n._GSLwg="CANCELLED"!==E&&"NONE"===I&&!g,n[P]=g,n),N=((o={})[G]="CANCELLED"===E,o[W]="CANCELLED"!==E,o),R=((r={})[P]=g,r[G]="CANCELLED"===E,r._YvBUa="CANCELLED"!==E,r),b=((c={})[G]="CANCELLED"===E,c._HnEDg="REQUIRES_ATTENTION"===E,c[W]="CANCELLED"!==E&&"REQUIRES_ATTENTION"!==E,c);return i.createElement("a",{className:"_dmL1B",ref:f,"data-testid":"activity-summary",onClick:function(e){C(Array.from(document.querySelectorAll('[data-testid="activity-summary"]')).findIndex(function(e){return e===f.current})+1,e)},role:"button",href:a},i.createElement("div",{className:"_0max0 _t6P7f"},i.createElement(k,{thumbnail:p,activityStatus:E}),i.createElement("div",null,i.createElement(l.uT,{as:"p",type:l.ZT.BODY_LARGE_BOLD,className:d(R,"_7WDVP _5fSt4","m-b-0")},T),m&&i.createElement(l.uT,{as:"p",type:l.ZT.BODY_DEFAULT,className:d("_D5iwG _eXEHr",b,"m-b-0")},m))),i.createElement("div",{className:d(((t={})._CmDK6=!m,t),"_BT1HV _t6P7f")},i.createElement("div",{className:"_eOpLn"},i.createElement(l.uT,{as:"p",type:l.ZT.BODY_LARGE_BOLD,className:d("_zixXV _5fSt4",L,"m-b-0")},S(s,y)),u&&u!==s&&i.createElement(l.uT,{as:"p",className:d("_2BEWQ _eXEHr",N,"m-b-0"),type:l.ZT.BODY_DEFAULT},u)),h))};(0,u.vU)({"multi-user-access.admin":{id:"activity-components.search-bar.user.role.admin",defaultMessage:"Admin"},"multi-user-access.payer":{id:"activity-components.search-bar.user.role.payer",defaultMessage:"Payer"},"multi-user-access.preparer":{id:"activity-components.search-bar.user.role.preparer",defaultMessage:"Preparer"},"multi-user-access.viewer":{id:"activity-components.search-bar.user.role.viewer",defaultMessage:"Viewer"},"multi-user-access.employee":{id:"activity-components.search-bar.user.role.employee",defaultMessage:"Employee"}}),(0,u.vU)({"multi-user-access.admin":{id:"activity-components.search-drawer.user.role.admin",defaultMessage:"Admin"},"multi-user-access.payer":{id:"activity-components.search-drawer.user.role.payer",defaultMessage:"Payer"},"multi-user-access.preparer":{id:"activity-components.search-drawer.user.role.preparer",defaultMessage:"Preparer"},"multi-user-access.viewer":{id:"activity-components.search-drawer.user.role.viewer",defaultMessage:"Viewer"},"multi-user-access.employee":{id:"activity-components.search-drawer.user.role.employee",defaultMessage:"Employee"}})}}]);