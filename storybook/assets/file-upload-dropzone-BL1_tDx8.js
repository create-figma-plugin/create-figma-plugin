import{_ as e}from"./preact.module-DSfP8QVG.js";import{c as O,h as T,q as o}from"./create-component-BQOTiC4n.js";import{c as j}from"./create-class-name-irFPZBOU.js";import{n}from"./no-op-DX6rZLP_.js";import{f as k}from"./file-comparator-BUjrH4N4.js";const q="_fileUploadDropzone_111vt_1",B="_isDropActive_111vt_8",N="_input_111vt_12",P="_border_111vt_13",G="_children_111vt_38",i={fileUploadDropzone:q,isDropActive:B,input:N,border:P,children:G},R=O(function({acceptedFileTypes:t=[],children:d,multiple:a=!1,onBlur:s=n,onChange:f=n,onDragEnd:h=n,onDragEnter:D=n,onDragOver:_=n,onDrop:m=n,onKeyDown:v=n,onSelectedFiles:c=n,propagateEscapeKeyDown:g=!0,...b},z){const[U,u]=T(!1),w=o(function(r){s(r),u(!1)},[s]),C=o(function(r){f(r);const p=r.currentTarget.files;if(p===null)throw new Error("`event.currentTarget.files` is `null`");const l=A({acceptedFileTypes:t,fileList:p});l.length>0&&c(l)},[t,f,c]),E=o(function(r){D(r),r.preventDefault()},[D]),L=o(function(r){_(r),r.preventDefault(),u(!0)},[_]),x=o(function(r){h(r),r.preventDefault(),u(!1)},[h]),y=o(function(r){if(m(r),r.dataTransfer===null)throw new Error("`event.dataTransfer` is `null`");r.preventDefault();const p=r.dataTransfer.files,l=A({acceptedFileTypes:t,fileList:p});l.length>0&&c(l),u(!1)},[t,m,c]),I=o(function(r){v(r),r.key==="Escape"&&(g===!1&&r.stopPropagation(),r.currentTarget.blur())},[v,g]);return e("div",{class:j([i.fileUploadDropzone,U===!0?i.isDropActive:null])},e("input",{...b,ref:z,accept:t.length===0?void 0:t.join(","),class:i.input,multiple:a,onBlur:w,onChange:C,onDragEnd:x,onDragEnter:E,onDragOver:L,onDrop:y,onKeyDown:I,tabIndex:0,title:"",type:"file"}),e("div",{class:i.fill}),e("div",{class:i.border}),e("div",{class:i.children},d))});function A(t){const{fileList:d,acceptedFileTypes:a}=t,s=Array.prototype.slice.call(d).sort(k);return a.length===0?s:s.filter(function(f){return a.indexOf(f.type)!==-1})}export{R as F};