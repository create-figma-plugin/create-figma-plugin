import{_ as r,k as _}from"./preact.module-DSfP8QVG.js";import{h as m}from"./create-component-BQOTiC4n.js";import{u as C}from"./use-initial-focus-BIYZsJcx.js";import{V as O}from"./vertical-space-Cd8FpnC4.js";import{T as W}from"./textbox-numeric-DRs6PNyg.js";import{R as o}from"./range-slider-B9k9rwb6.js";import"./create-class-name-irFPZBOU.js";import"./textbox.module-BcK5ReZh.js";import"./raw-textbox-numeric-BsK585AJ.js";import"./get-current-from-ref-J2nPd355.js";import"./no-op-DX6rZLP_.js";import"./compute-next-value-cPEw4eRZ.js";import"./is-keycode-character-generating-C88G8DHI.js";import"./mixed-values-hkF2bnrF.js";const Z={parameters:{fixedWidth:!0},title:"Components/Range Slider"},l=function(){const[n,a]=m("0");function t(u){const e=u.currentTarget.value;console.log(e),a(e)}return r(o,{maximum:100,minimum:0,onInput:t,value:n})},s=function(){const[n,a]=m("0");function t(u){const e=u.currentTarget.value;console.log(e),a(e)}return r(o,{...C(),maximum:100,minimum:0,onInput:t,value:n})},i=function(){function n(){throw new Error("This function should not be called")}return r(o,{disabled:!0,maximum:100,minimum:0,onInput:n,value:"0"})},c=function(){const[n,a]=m("0");function t(u){const e=u.currentTarget.value;console.log(e),a(e)}return r(o,{increment:10,maximum:100,minimum:0,onInput:t,value:n})},p=function(){const[n,a]=m("0");function t(e){console.log(e),a(e)}function u(e){console.log(e)}return r(o,{maximum:100,minimum:0,onNumericValueInput:u,onValueInput:t,value:n})},d=function(){const[n,a]=m("0");function t(X){const V=X.currentTarget.value;console.log(V),a(V)}const u=0,e=100;return r(_,null,r(o,{maximum:e,minimum:u,onInput:t,value:n}),r(O,{space:"small"}),r(W,{maximum:e,minimum:u,onInput:t,value:n,variant:"border"}))};var v,I,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RangeSlider maximum={100} minimum={0} onInput={handleInput} value={value} />;
}`,...(g=(I=l.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RangeSlider {...useInitialFocus()} maximum={100} minimum={0} onInput={handleInput} value={value} />;
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,w,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`function () {
  function handleInput() {
    throw new Error('This function should not be called');
  }
  return <RangeSlider disabled maximum={100} minimum={0} onInput={handleInput} value="0" />;
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var b,E,N;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  return <RangeSlider increment={10} maximum={100} minimum={0} onInput={handleInput} value={value} />;
}`,...(N=(E=c.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var R,F,H;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleValueInput(newValue: string) {
    console.log(newValue);
    setValue(newValue);
  }
  function handleNumericValueInput(newNumericValue: number) {
    console.log(newNumericValue);
  }
  return <RangeSlider maximum={100} minimum={0} onNumericValueInput={handleNumericValueInput} onValueInput={handleValueInput} value={value} />;
}`,...(H=(F=p.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,L,M;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`function () {
  const [value, setValue] = useState<string>('0');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }
  const minimum = 0;
  const maximum = 100;
  return <Fragment>
      <RangeSlider maximum={maximum} minimum={minimum} onInput={handleInput} value={value} />
      <VerticalSpace space="small" />
      <TextboxNumeric maximum={maximum} minimum={minimum} onInput={handleInput} value={value} variant="border" />
    </Fragment>;
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const $=["Passive","Focused","Disabled","CustomIncrement","OnValueInput","WithTextboxNumeric"];export{c as CustomIncrement,i as Disabled,s as Focused,p as OnValueInput,l as Passive,d as WithTextboxNumeric,$ as __namedExportsOrder,Z as default};