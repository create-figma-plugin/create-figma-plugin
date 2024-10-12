import{_ as h}from"./preact.module-DSfP8QVG.js";import{q as f,c as Z,A as P,h as q,y as ee,j as te}from"./create-component-BQOTiC4n.js";import{u as ne,m as M}from"./use-mouse-down-outside-BUdT4G63.js";import{g as x}from"./get-current-from-ref-J2nPd355.js";import{I as oe}from"./icon-control-chevron-down-8-Cg7ugtUI.js";import{I as re}from"./icon-menu-checkmark-checked-16-P6IVZz8A.js";import{c as k}from"./create-class-name-irFPZBOU.js";import{n as C}from"./no-op-DX6rZLP_.js";import{I as B,a as H,V as b}from"./constants-sCBnAk_k.js";function le(n){const{itemIdDataAttributeName:e,menuElementRef:o,selectedId:r,setSelectedId:g}=n,p=f(function(){return Array.from(x(o).querySelectorAll(`[${e}]`)).filter(function(d){return d.hasAttribute("disabled")===!1})},[e,o]),i=f(function(d){if(d===null)return-1;const a=p().findIndex(function(m){return m.getAttribute(e)===d});if(a===-1)throw new Error("`index` is `-1`");return a},[p,e]),_=f(function(d){const a=p(),m=i(d),l=a[m],w=l.getBoundingClientRect().top,s=x(o),v=s.getBoundingClientRect().top;if(w<v){l.scrollIntoView();return}w+l.offsetHeight>v+s.offsetHeight&&l.scrollIntoView()},[i,p,o]),T=f(function(d){const a=d.key;if(a==="ArrowDown"||a==="ArrowUp"){const m=p(),l=i(r);let w;a==="ArrowDown"?w=l===-1||l===m.length-1?0:l+1:w=l===-1||l===0?m.length-1:l-1;const v=m[w].getAttribute(e);g(v),_(v)}},[p,i,e,g,r,_]);return{handleScrollableMenuItemMouseMove:f(function(d){const a=d.currentTarget.getAttribute(e);a!==r&&g(a)},[e,r,g]),handleScrollableMenuKeyDown:T}}const ie="_dropdown_l9ibg_1",se="_disabled_l9ibg_12",ce="_menu_l9ibg_17",ue="_icon_l9ibg_25",de="_empty_l9ibg_37",ae="_value_l9ibg_41",fe="_hasIcon_l9ibg_55",me="_placeholder_l9ibg_59",he="_chevronIcon_l9ibg_63",pe="_border_l9ibg_74",ge="_hasBorder_l9ibg_83",we="_underline_l9ibg_94",I={dropdown:ie,disabled:se,menu:ce,icon:ue,empty:de,value:ae,hasIcon:fe,placeholder:me,chevronIcon:he,border:pe,hasBorder:ge,underline:we};function be(n,e,o){const r=n.getBoundingClientRect(),g=n.offsetWidth,p=n.offsetHeight,i=r.left,_=r.top;e.style.minWidth=`${g}px`;const T=window.innerWidth-2*b;e.style.maxWidth=`${T}px`;const u=window.innerHeight-2*b;e.style.maxHeight=`${u}px`;const d=e.offsetWidth,a=e.offsetHeight,m=e.scrollHeight,l=parseInt(window.getComputedStyle(e).paddingTop,10),w=Ie(e,o),s=_e({menuWidth:d,rootLeft:i});e.style.left=`${s}px`;const v=ye({menuHeight:a,rootTop:_,selectedTop:w.offsetTop});e.style.top=`${v}px`,m>a!==!1&&(e.scrollTop=ve({menuHeight:a,menuPaddingTop:l,menuScrollHeight:m,rootHeight:p,rootTop:_,selectedTop:w.offsetTop}))}function Ie(n,e){const o=n.querySelector(e===B?`[${H}]`:`[${H}='${e}']`);if(o===null)throw new Error("`inputElement` is `null`");const r=o.parentElement;if(r===null)throw new Error("`labelElement` is `null`");return r}function _e(n){const{menuWidth:e,rootLeft:o}=n;if(o<=b)return b;const r=window.innerWidth;return o+e>r-b?r-b-e:o}function ye(n){const{menuHeight:e,rootTop:o,selectedTop:r}=n,g=window.innerHeight;if(o<=b||e===g-2*b)return b;const p=o-r,i=b,_=g-b-e;return L(p,i,_)}function ve(n){const{menuHeight:e,menuPaddingTop:o,menuScrollHeight:r,rootHeight:g,rootTop:p,selectedTop:i}=n,_=L(p,b,window.innerHeight-b-g+o/2),T=i-(_-b),u=0,d=r-e;return L(T,u,d)}function L(n,e,o){return Math.min(Math.max(n,e),o)}const ke=Z(function({disabled:n=!1,icon:e,onChange:o=C,onKeyDown:r=C,onMouseDown:g=C,onValueChange:p=C,options:i,placeholder:_,propagateEscapeKeyDown:T=!0,value:u,variant:d,...a},m){if(typeof e=="string"&&e.length!==1)throw new Error(`String \`icon\` must be a single character: "${e}"`);const l=P(null),w=P(null),[s,v]=q(!1),E=U(i,u);if(u!==null&&E===-1)throw new Error(`Invalid \`value\`: ${u}`);const[S,V]=q(E===-1?B:`${E}`),F=typeof i[E]>"u"?"":Me(i[E]),{handleScrollableMenuKeyDown:N,handleScrollableMenuItemMouseMove:K}=le({itemIdDataAttributeName:H,menuElementRef:w,selectedId:S,setSelectedId:V}),R=f(function(){x(l).blur()},[]),D=f(function(){x(l).focus()},[]),W=f(function(t){const c=x(l),A=x(w);be(c,A,t)},[]),y=f(function(){v(!1),V(B)},[]),$=f(function(){if(s===!0)return;if(v(!0),u===null){W(S);return}const t=U(i,u);if(t===-1)throw new Error(`Invalid \`value\`: ${u}`);const c=`${t}`;V(c),W(c)},[s,i,S,W,u]),j=f(function(t){r(t);const c=t.key;if(c==="ArrowUp"||c==="ArrowDown"){if(t.preventDefault(),s===!1){$();return}N(t);return}if(c==="Escape"){if(t.preventDefault(),T===!1&&t.stopPropagation(),s===!0){y();return}R();return}if(c==="Enter"){if(t.preventDefault(),s===!1){$();return}if(S!==B){const A=x(w).querySelector(`[${H}='${S}']`);if(A===null)throw new Error("`selectedElement` is `null`");A.checked=!0;const O=new window.Event("change",{bubbles:!0,cancelable:!0});A.dispatchEvent(O)}y();return}if(c==="Tab"){y();return}},[N,s,r,T,S,y,$,R]),G=f(function(t){g(t),s===!1&&$()},[s,g,$]),z=f(function(t){t.stopPropagation()},[]),J=f(function(t){o(t);const c=t.currentTarget.getAttribute(H);if(c===null)throw new Error("`id` is `null`");const O=i[parseInt(c,10)].value;p(O),D(),y()},[o,p,i,y,D]),Q=f(function(){D(),y()},[y,D]),X=f(function(){s!==!1&&(y(),R())},[s,R,y]);ne({onMouseDownOutside:X,ref:l}),ee(function(){function t(){s!==!1&&(D(),y())}return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}},[s,y,D]);const Y=f(function(t){if(l.current=t,m!==null){if(typeof m=="function"){m(t);return}m.current=t}},[m,l]);return h("div",{...a,ref:Y,class:k([I.dropdown,d==="border"?I.hasBorder:null,typeof e<"u"?I.hasIcon:null,n===!0?I.disabled:null]),onKeyDown:n===!0?void 0:j,onMouseDown:G,tabIndex:0},typeof e>"u"?null:h("div",{class:I.icon},e),u===null?typeof _>"u"?h("div",{class:I.empty}):h("div",{class:k([I.value,I.placeholder])},_):h("div",{class:I.value},F),h("div",{class:I.chevronIcon},h(oe,null)),d==="underline"?h("div",{class:I.underline}):null,h("div",{class:I.border}),te(h("div",{ref:w,class:k([M.menu,I.menu,n===!0||s===!1?M.hidden:null]),onMouseDown:z},i.map(function(t,c){return typeof t=="string"?h("hr",{key:c,class:M.optionSeparator}):"header"in t?h("h1",{key:c,class:M.optionHeader},t.header):h("label",{key:c,class:k([M.optionValue,t.disabled===!0?M.optionValueDisabled:null,t.disabled!==!0&&`${c}`===S?M.optionValueSelected:null])},h("input",{checked:u===t.value,class:M.input,disabled:t.disabled===!0,onChange:u===t.value?void 0:J,onClick:u===t.value?Q:void 0,onMouseMove:K,tabIndex:-1,type:"radio",value:`${t.value}`,[H]:`${c}`}),t.value===u?h("div",{class:M.checkIcon},h(re,null)):null,typeof t.text>"u"?t.value:t.text)})),document.body))});function Me(n){if(typeof n!="string"){if("text"in n)return n.text;if("value"in n)return n.value}throw new Error("Invariant violation")}function U(n,e){if(e===null)return-1;let o=0;for(const r of n){if(typeof r!="string"&&"value"in r&&r.value===e)return o;o+=1}return-1}export{ke as D};