import{d as a,e as c}from"./chunk-PXI3R2ES.js";import"./chunk-F7XBNY6P.js";import{d as r,e as s}from"./chunk-2M7HLUHN.js";import{a as i}from"./chunk-5MF32AMI.js";import{g as n}from"./chunk-AHMUXBFN.js";var h=()=>{let e=window;e.addEventListener("statusTap",()=>{r(()=>{let m=e.innerWidth,d=e.innerHeight,o=document.elementFromPoint(m/2,d/2);if(!o)return;let t=a(o);t&&new Promise(l=>i(t,l)).then(()=>{s(()=>n(void 0,null,function*(){t.style.setProperty("--overflow","hidden"),yield c(t,300),t.style.removeProperty("--overflow")}))})})})};export{h as startStatusTap};