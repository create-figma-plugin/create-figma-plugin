import{T as u}from"./hooks.module-7c0d6ca2.js";import{c as C}from"./create-class-name-71c46838.js";import{b as e}from"./button.module-2bfe3ef2.js";import{L as j}from"./loading-indicator-7c44ce2c.js";import{f as v}from"./file-comparator-3bc6e99f.js";import{o}from"./jsxRuntime.module-3e32d480.js";const D="_input_1hjkt_1",g="_disabled_1hjkt_11",I="_secondary_1hjkt_15",a={input:D,default:"_default_1hjkt_11",disabled:g,secondary:I};function U({acceptedFileTypes:i,children:c,disabled:r=!1,fullWidth:d=!1,loading:n=!1,multiple:p=!1,onSelectedFiles:l,propagateEscapeKeyDown:s=!0,secondary:f=!1,...h}){const m=u(function(t){if(typeof l>"u")return;const b=Array.prototype.slice.call(t.currentTarget.files).sort(v);l(b)},[l]),y=u(function(t){if(r===!0||n===!0){t.preventDefault();return}t.currentTarget.focus()},[r,n]),_=u(function(t){t.key==="Escape"&&(s===!1&&t.stopPropagation(),t.currentTarget.blur())},[s]),k=u(function(t){t.preventDefault(),t.currentTarget.focus()},[]);return o("div",{class:C([e.button,f===!0?e.secondary:e.default,f===!0?a.secondary:a.default,d===!0?e.fullWidth:null,r===!0?e.disabled:null,r===!0?a.disabled:null,n===!0?e.loading:null]),children:[n===!0?o("div",{class:e.loadingIndicator,children:o(j,{})}):null,o("input",{...h,accept:typeof i>"u"?void 0:i.join(","),class:a.input,disabled:r===!0,multiple:p,onChange:r===!0||n===!0?void 0:m,onClick:y,onKeyDown:r===!0||n===!0?void 0:_,onMouseDown:n===!0?k:void 0,tabIndex:r===!0?-1:0,title:"",type:"file"}),o("button",{disabled:r===!0,tabIndex:-1,children:o("div",{class:e.children,children:c})})]})}export{U as F};
//# sourceMappingURL=file-upload-button-5286dffe.js.map