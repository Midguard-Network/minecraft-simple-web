import{$ as s,Cb as w,Db as D,E as u,Gb as N,H as S,I,Ib as M,J as o,K as a,L as p,P as C,Q as _,Y as h,Z as l,ab as L,ea as y,fa as E,i as d,jb as T,l as f,m as v,t as i,tb as b,vb as x,x as c,zb as F}from"./chunk-FSUOPET3.js";var B=(t,e)=>e.code;function O(t,e){if(t&1&&(o(0,"ion-select-option",3),l(1),a()),t&2){let g=e.$implicit;u("value",g.code),i(),s("",g.name," ")}}var V=(()=>{let e=class e{constructor(){this.langService=d(M)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["app-language-selector"]],decls:5,vars:1,consts:[["langSelected",""],["interface","popover",3,"ionChange","value"],["name","language","slot","start"],[3,"value"]],template:function(n,r){if(n&1){let R=C();o(0,"ion-select",1,0),_("ionChange",function(){f(R);let k=h(1);return v(r.langService.setLanguage(k.value))}),p(2,"ion-icon",2),S(3,O,2,2,"ion-select-option",3,B),a()}n&2&&(u("value",r.langService.defaultLanguage),i(3),I(r.langService.languages))},dependencies:[x,D,w],encapsulation:2});let t=e;return t})();var Q=(()=>{let e=class e{constructor(){this.socials=[],this.serverName=""}ngOnInit(){}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["app-footer"]],inputs:{socials:"socials",serverName:"serverName"},decls:10,vars:4,consts:[[2,"--background","rgba(0,0,0,0)"],["slot","start"],["slot","end"],[1,"ion-float-end","ion-margin-end"]],template:function(n,r){n&1&&(o(0,"ion-footer")(1,"ion-toolbar",0)(2,"ion-buttons",1)(3,"ion-note"),l(4),y(5,"translate"),o(6,"b"),l(7),a()()(),o(8,"ion-buttons",2),p(9,"app-language-selector",3),a()()()),n&2&&(i(4),s(" \xA9\uFE0F ",E(5,2,"ALL_RIGHT_RESERVED")," "),i(3),s(" ",r.serverName," "))},dependencies:[T,b,N,V,F,L],encapsulation:2});let t=e;return t})();export{Q as a};