"use strict";(self.webpackChunkanwb_almanak=self.webpackChunkanwb_almanak||[]).push([[3368],{4147:(N,O,_)=>{_.d(O,{a:()=>I,b:()=>M,p:()=>A});const A=(g,...w)=>console.warn(`[Ionic Warning]: ${g}`,...w),M=(g,...w)=>console.error(`[Ionic Error]: ${g}`,...w),I=(g,...w)=>console.error(`<${g.tagName.toLowerCase()}> must be used inside ${w.join(" or ")}.`)},2675:(N,O,_)=>{_.d(O,{A:()=>Ce,B:()=>h,C:()=>ve,D:()=>ae,E:()=>Me,F:()=>_e,G:()=>C,H:()=>re,I:()=>de,J:()=>ge,K:()=>ee,L:()=>P,M:()=>Se,N:()=>ze,O:()=>te,P:()=>j,Q:()=>se,a:()=>ce,b:()=>g,c:()=>M,d:()=>U,e:()=>z,f:()=>De,g:()=>ie,h:()=>Fe,i:()=>I,j:()=>X,k:()=>K,l:()=>Q,m:()=>q,n:()=>V,o:()=>x,p:()=>k,q:()=>Le,r:()=>je,s:()=>be,t:()=>$,u:()=>Ae,v:()=>$e,w:()=>w,x:()=>B,y:()=>Oe,z:()=>f});var A=_(4147);const M=(e,n)=>e.month===n.month&&e.day===n.day&&e.year===n.year,I=(e,n)=>e.year<n.year||e.year===n.year&&e.month<n.month||e.year===n.year&&e.month===n.month&&e.day&&e.day<n.day,g=(e,n)=>e.year>n.year||e.year===n.year&&e.month>n.month||e.year===n.year&&e.month===n.month&&e.day&&e.day>n.day,w=(e,n,t)=>{const o=Array.isArray(e)?e:[e];for(const u of o)if(n&&I(u,n)||t&&g(u,t)){(0,A.p)(`The value provided to ion-datetime is out of bounds.\n\nMin: ${JSON.stringify(n)}\nMax: ${JSON.stringify(t)}\nValue: ${JSON.stringify(e)}`);break}},C=(e,n)=>{if(void 0!==n)return"h23"===n;const t=new Intl.DateTimeFormat(e,{hour:"numeric"}),o=t.resolvedOptions();if(void 0!==o.hourCycle)return"h23"===o.hourCycle;const u=new Date("5/18/2021 00:00"),i=t.formatToParts(u).find(d=>"hour"===d.type);if(!i)throw new Error("Hour value not found from DateTimeFormat");return"00"===i.value},l=(e,n)=>4===e||6===e||9===e||11===e?30:2===e?(e=>e%4==0&&e%100!=0||e%400==0)(n)?29:28:31,f=(e,n={month:"numeric",year:"numeric"})=>"month"===new Intl.DateTimeFormat(e,n).formatToParts(new Date)[0].type,h=e=>"dayPeriod"===new Intl.DateTimeFormat(e,{hour:"numeric"}).formatToParts(new Date)[0].type,T=e=>("0"+(void 0!==e?Math.abs(e):"0")).slice(-2);function $(e){if(Array.isArray(e))return e.map(t=>$(t));let n="";return void 0!==e.year?(n=(e=>("000"+(void 0!==e?Math.abs(e):"0")).slice(-4))(e.year),void 0!==e.month&&(n+="-"+T(e.month),void 0!==e.day&&(n+="-"+T(e.day),void 0!==e.hour&&(n+=`T${T(e.hour)}:${T(e.minute)}:00`,n+=void 0===e.tzOffset?"Z":(e.tzOffset>0?"+":"-")+T(Math.floor(Math.abs(e.tzOffset/60)))+":"+T(e.tzOffset%60))))):void 0!==e.hour&&(n=T(e.hour)+":"+T(e.minute)),n}const H=(e,n)=>void 0===n?e:"am"===n?12===e?0:e:12===e?12:e+12,K=e=>{const{dayOfWeek:n}=e;if(null==n)throw new Error("No day of week provided");return F(e,n)},X=e=>{const{dayOfWeek:n}=e;if(null==n)throw new Error("No day of week provided");return S(e,6-n)},q=e=>S(e,1),Q=e=>F(e,1),V=e=>F(e,7),x=e=>S(e,7),F=(e,n)=>{const{month:t,day:o,year:u}=e;if(null===o)throw new Error("No day provided");const r={month:t,day:o,year:u};if(r.day=o-n,r.day<1&&(r.month-=1),r.month<1&&(r.month=12,r.year-=1),r.day<1){const i=l(r.month,r.year);r.day=i+r.day}return r},S=(e,n)=>{const{month:t,day:o,year:u}=e;if(null===o)throw new Error("No day provided");const r={month:t,day:o,year:u},i=l(t,u);return r.day=o+n,r.day>i&&(r.day-=i,r.month+=1),r.month>12&&(r.month=1,r.year+=1),r},U=e=>{const n=1===e.month?12:e.month-1,t=1===e.month?e.year-1:e.year,o=l(n,t);return{month:n,year:t,day:o<e.day?o:e.day}},z=e=>{const n=12===e.month?1:e.month+1,t=12===e.month?e.year+1:e.year,o=l(n,t);return{month:n,year:t,day:o<e.day?o:e.day}},Z=(e,n)=>{const t=e.month,o=e.year+n,u=l(t,o);return{month:t,year:o,day:u<e.day?u:e.day}},P=e=>Z(e,-1),ee=e=>Z(e,1),ne=(e,n,t)=>n?e:H(e,t),te=(e,n)=>{const{ampm:t,hour:o}=e;let u=o;return"am"===t&&"pm"===n?u=H(u,"pm"):"pm"===t&&"am"===n&&(u=Math.abs(u-12)),u},re=(e,n,t)=>void 0===n.hour||void 0===n.minute?"Invalid Time":new Intl.DateTimeFormat(e,{hour:"numeric",minute:"numeric",timeZone:"UTC",hourCycle:t?"h23":"h12"}).format(new Date($(Object.assign(Object.assign({},n),{tzOffset:void 0})))),G=e=>{const n=e.toString();return n.length>1?n:`0${n}`},ue=(e,n)=>n?G(e):e.toString(),ie=(e,n,t)=>{if(null===t.day)return null;const o=new Date(`${t.month}/${t.day}/${t.year} GMT+0000`),u=new Intl.DateTimeFormat(e,{weekday:"long",month:"long",day:"numeric",timeZone:"UTC"}).format(o);return n?`Today, ${u}`:u},de=(e,n)=>{const t=new Date(`${n.month}/${n.day}/${n.year} GMT+0000`);return new Intl.DateTimeFormat(e,{weekday:"short",month:"short",day:"numeric",timeZone:"UTC"}).format(t)},ae=(e,n)=>{const t=new Date(`${n.month}/${n.day}/${n.year} GMT+0000`);return new Intl.DateTimeFormat(e,{month:"long",year:"numeric",timeZone:"UTC"}).format(t)},se=(e,n)=>j(e,n,{month:"short",day:"numeric",year:"numeric"}),ce=(e,n)=>ye(e,n,{day:"numeric"}).find(t=>"day"===t.type).value,le=(e,n)=>j(e,n,{year:"numeric"}),W=e=>new Date(`${e.month}/${e.day}/${e.year}${e.hour&&e.minute?` ${e.hour}:${e.minute}`:""} GMT+0000`),j=(e,n,t)=>{const o=W(n);return R(e,t).format(o)},ye=(e,n,t)=>{const o=W(n);return R(e,t).formatToParts(o)},R=(e,n)=>new Intl.DateTimeFormat(e,Object.assign(Object.assign({},n),{timeZone:"UTC"})),me=e=>{if("RelativeTimeFormat"in Intl){const n=new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(0,"day");return n.charAt(0).toUpperCase()+n.slice(1)}return"Today"},L=e=>{const n=e.getTimezoneOffset();return e.setMinutes(e.getMinutes()-n),e},fe=L(new Date("2022T01:00")),he=L(new Date("2022T13:00")),Y=(e,n)=>{const t="am"===n?fe:he,o=new Intl.DateTimeFormat(e,{hour:"numeric",timeZone:"UTC"}).formatToParts(t).find(u=>"dayPeriod"===u.type);return o?o.value:(e=>void 0===e?"":e.toUpperCase())(n)},ge=e=>Array.isArray(e)?e.join(","):e,De=()=>L(new Date).toISOString(),pe=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],Te=[12,1,2,3,4,5,6,7,8,9,10,11],we=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],ve=(e,n,t=0)=>{const u=new Intl.DateTimeFormat(e,{weekday:"ios"===n?"short":"narrow"}),r=new Date("11/01/2020"),i=[];for(let d=t;d<t+7;d++){const a=new Date(r);a.setDate(a.getDate()+d),i.push(u.format(a))}return i},Me=(e,n,t)=>{const o=l(e,n),u=new Date(`${e}/1/${n}`).getDay(),r=u>=t?u-(t+1):6-(t-u);let i=[];for(let d=1;d<=o;d++)i.push({day:d,dayOfWeek:(r+d)%7});for(let d=0;d<=r;d++)i=[{day:null,dayOfWeek:null},...i];return i},_e=e=>[U(e),{month:e.month,year:e.year,day:e.day},z(e)],$e=(e,n,t,o,u,r={month:"long"})=>{const{year:i}=n,d=[];if(void 0!==u){let a=u;void 0!==o?.month&&(a=a.filter(c=>c<=o.month)),void 0!==t?.month&&(a=a.filter(c=>c>=t.month)),a.forEach(c=>{const y=new Date(`${c}/1/${i} GMT+0000`),s=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},r),{timeZone:"UTC"})).format(y);d.push({text:s,value:c})})}else{const a=o&&o.year===i?o.month:12;for(let y=t&&t.year===i?t.month:1;y<=a;y++){const s=new Date(`${y}/1/${i} GMT+0000`),m=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},r),{timeZone:"UTC"})).format(s);d.push({text:m,value:y})}}return d},B=(e,n,t,o,u,r={day:"numeric"})=>{const{month:i,year:d}=n,a=[],c=l(i,d),y=o?.day&&o.year===d&&o.month===i?o.day:c,s=t?.day&&t.year===d&&t.month===i?t.day:1;if(void 0!==u){let m=u;m=m.filter(D=>D>=s&&D<=y),m.forEach(D=>{const p=new Date(`${i}/${D}/${d} GMT+0000`),v=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},r),{timeZone:"UTC"})).format(p);a.push({text:v,value:D})})}else for(let m=s;m<=y;m++){const D=new Date(`${i}/${m}/${d} GMT+0000`),p=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},r),{timeZone:"UTC"})).format(D);a.push({text:p,value:m})}return a},Oe=(e,n,t,o,u)=>{let r=[];if(void 0!==u)r=u,void 0!==o?.year&&(r=r.filter(i=>i<=o.year)),void 0!==t?.year&&(r=r.filter(i=>i>=t.year));else{const{year:i}=n,a=t?.year||i-100;for(let c=o?.year||i;c>=a;c--)r.push(c)}return r.map(i=>({text:le(e,{year:i,month:n.month,day:n.day}),value:i}))},J=(e,n)=>e.month===n.month&&e.year===n.year?[e]:[e,...J(z(e),n)],Ae=(e,n,t,o,u,r)=>{let i=[],d=[],a=J(t,o);return r&&(a=a.filter(({month:c})=>r.includes(c))),a.forEach(c=>{const y={month:c.month,day:null,year:c.year},s=B(e,y,t,o,u,{month:"short",day:"numeric",weekday:"short"}),m=[],D=[];s.forEach(p=>{const v=M(Object.assign(Object.assign({},y),{day:p.value}),n);D.push({text:v?me(e):p.text,value:`${y.year}-${y.month}-${p.value}`}),m.push({month:y.month,year:y.year,day:p.value})}),d=[...d,...m],i=[...i,...D]}),{parts:d,items:i}},Ce=(e,n,t,o,u,r,i)=>{const d=C(e,t),{hours:a,minutes:c,am:y,pm:s}=((e,n="h12",t,o,u,r)=>{const i="h23"===n;let d=i?we:Te,a=pe,c=!0,y=!0;if(u&&(d=d.filter(s=>u.includes(s))),r&&(a=a.filter(s=>r.includes(s))),t)if(M(e,t)){if(void 0!==t.hour&&(d=d.filter(s=>(i?s:"pm"===e.ampm?(s+12)%24:s)>=t.hour),c=t.hour<13),void 0!==t.minute){let s=!1;void 0!==t.hour&&void 0!==e.hour&&e.hour>t.hour&&(s=!0),a=a.filter(m=>!!s||m>=t.minute)}}else I(e,t)&&(d=[],a=[],c=y=!1);return o&&(M(e,o)?(void 0!==o.hour&&(d=d.filter(s=>(i?s:"pm"===e.ampm?(s+12)%24:s)<=o.hour),y=o.hour>=13),void 0!==o.minute&&e.hour===o.hour&&(a=a.filter(s=>s<=o.minute))):g(e,o)&&(d=[],a=[],c=y=!1)),{hours:d,minutes:a,am:c,pm:y}})(n,d?"h23":"h12",o,u,r,i),m=a.map(v=>({text:ue(v,d),value:ne(v,d,n.ampm)})),D=c.map(v=>({text:G(v),value:v})),p=[];return y&&!d&&p.push({text:Y(e,"am"),value:"am"}),s&&!d&&p.push({text:Y(e,"pm"),value:"pm"}),{minutesData:D,hoursData:m,dayPeriodData:p}},Ee=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,ke=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,be=e=>{if(void 0===e)return;let t,n=e;return"string"==typeof e&&(n=e.replace(/\[|\]|\s/g,"").split(",")),t=Array.isArray(n)?n.map(o=>parseInt(o,10)).filter(isFinite):[n],t},Fe=e=>({month:parseInt(e.getAttribute("data-month"),10),day:parseInt(e.getAttribute("data-day"),10),year:parseInt(e.getAttribute("data-year"),10),dayOfWeek:parseInt(e.getAttribute("data-day-of-week"),10)});function k(e){if(Array.isArray(e))return e.map(o=>k(o));let n=null;if(null!=e&&""!==e&&(n=ke.exec(e),n?(n.unshift(void 0,void 0),n[2]=n[3]=void 0):n=Ee.exec(e)),null===n)return;for(let o=1;o<8;o++)n[o]=void 0!==n[o]?parseInt(n[o],10):void 0;let t=0;return n[9]&&n[10]&&(t=60*parseInt(n[10],10),n[11]&&(t+=parseInt(n[11],10)),"-"===n[9]&&(t*=-1)),{year:n[1],month:n[2],day:n[3],hour:n[4],minute:n[5],tzOffset:t}}const Se=(e,n,t)=>n&&I(e,n)?n:t&&g(e,t)?t:e,ze=e=>e>=12?"pm":"am",je=(e,n)=>{const{month:t,day:o,year:u,hour:r,minute:i}=k(e),d=u??n.year,a=t??12;return{month:a,day:o??l(a,d),year:d,hour:r??23,minute:i??59}},Le=(e,n)=>{const{month:t,day:o,year:u,hour:r,minute:i}=k(e);return{month:t??1,day:o??1,year:u??n.year,hour:r??0,minute:i??0}}},2854:(N,O,_)=>{_.d(O,{c:()=>I,g:()=>w,h:()=>M,o:()=>C});var A=_(9671);const M=(l,f)=>null!==f.closest(l),I=(l,f)=>"string"==typeof l&&l.length>0?Object.assign({"ion-color":!0,[`ion-color-${l}`]:!0},f):f,w=l=>{const f={};return(l=>void 0!==l?(Array.isArray(l)?l:l.split(" ")).filter(h=>null!=h).map(h=>h.trim()).filter(h=>""!==h):[])(l).forEach(h=>f[h]=!0),f},b=/^[a-z][a-z0-9+\-.]*:/,C=function(){var l=(0,A.Z)(function*(f,h,T,E){if(null!=f&&"#"!==f[0]&&!b.test(f)){const $=document.querySelector("ion-router");if($)return h?.preventDefault(),$.push(f,T,E)}return!1});return function(h,T,E,$){return l.apply(this,arguments)}}()}}]);