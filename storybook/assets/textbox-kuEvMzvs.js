import{_ as c}from"./preact.module-DSfP8QVG.js";import{c as q}from"./create-class-name-irFPZBOU.js";import{c as I,A,h as X,q as s}from"./create-component-BQOTiC4n.js";import{g as Y}from"./get-current-from-ref-J2nPd355.js";import{n as i}from"./no-op-DX6rZLP_.js";import{i as $}from"./is-keycode-character-generating-C88G8DHI.js";import{M as h}from"./mixed-values-hkF2bnrF.js";import{s as o}from"./textbox.module-BcK5ReZh.js";const m="",j=I(function({disabled:n=!1,onBlur:u=i,onFocus:l=i,onInput:b=i,onKeyDown:x=i,onMouseDown:T=i,onValueInput:y=i,password:M=!1,placeholder:R,propagateEscapeKeyDown:w=!0,revertOnEscapeKeyDown:C=!1,spellCheck:k=!1,validateOnBlur:g,value:e,...D},f){const E=A(null),[a,d]=X(m),p=s(function(t){const r=Y(E);r.value=t;const P=new window.Event("input",{bubbles:!0,cancelable:!0});r.dispatchEvent(P)},[]),G=s(function(t){if(u(t),typeof g<"u"){const r=g(e);if(typeof r=="string"){p(r),d(m);return}if(r===!1){e!==a&&p(a),d(m);return}}d(m)},[u,a,p,g,e]),N=s(function(t){l(t),d(e),t.currentTarget.select()},[l,e]),S=s(function(t){b(t);const r=t.currentTarget.value;y(r)},[b,y]),V=s(function(t){if(x(t),t.key==="Escape"){C===!0&&(p(a),d(m)),w===!1&&t.stopPropagation(),t.currentTarget.blur();return}e===h&&$(t.keyCode)===!1&&(t.preventDefault(),t.currentTarget.select())},[x,a,w,C,p,e]),_=s(function(t){T(t),e===h&&(t.preventDefault(),t.currentTarget.select())},[T,e]),F=s(function(t){if(E.current=t,f!==null){if(typeof f=="function"){f(t);return}f.current=t}},[f]);return c("input",{...D,ref:F,disabled:n===!0,onBlur:G,onFocus:N,onInput:S,onKeyDown:V,onMouseDown:_,placeholder:R,spellcheck:k,tabIndex:0,type:M===!0?"password":"text",value:e===h?"Mixed":e})}),W=I(function({icon:n,variant:u,...l},b){if(typeof n=="string"&&n.length!==1)throw new Error(`String \`icon\` must be a single character: ${n}`);return c("div",{class:q([o.textbox,u==="border"?o.hasBorder:null,typeof n>"u"?null:o.hasIcon,l.disabled===!0?o.disabled:null])},c(j,{...l,ref:b,class:o.input}),typeof n>"u"?null:c("div",{class:o.icon},n),c("div",{class:o.border}),u==="underline"?c("div",{class:o.underline}):null)});export{W as T};
