import{s as E,e as b,t as _,b as S,d as f,f as d,h as g,i as p,j as x,k as u,l as h,m as v,n as $,o as j}from"../chunks/scheduler.kdh8Y4ec.js";import{S as k,i as q}from"../chunks/index.F82Lk53Y.js";import{s as y}from"../chunks/entry.osihWSIt.js";const C=()=>{const s=y;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return C().page.subscribe(s)}};function P(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",l;return{c(){t=b("h1"),o=_(r),n=S(),i=b("p"),l=_(c)},l(e){t=f(e,"H1",{});var a=d(t);o=g(a,r),a.forEach(p),n=x(e),i=f(e,"P",{});var m=d(i);l=g(m,c),m.forEach(p)},m(e,a){u(e,t,a),h(t,o),u(e,n,a),u(e,i,a),h(i,l)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&v(o,r),a&1&&c!==(c=e[0].error?.message+"")&&v(l,c)},i:$,o:$,d(e){e&&(p(t),p(n),p(i))}}}function w(s,t,r){let o;return j(s,H,n=>r(0,o=n)),[o]}let D=class extends k{constructor(t){super(),q(this,t,w,P,E,{})}};export{D as component};