function f(n){const e=(typeof n>"u"?document:n).querySelectorAll(':not([disabled])[tabindex]:not([tabindex="-1"])');return Array.prototype.slice.call(e)}function c(n){return function(e){if(e.key!=="Tab")return;e.preventDefault();const t=f(n);if(t.length===0)return;const r=o(e.target,t);if(r===t.length-1&&e.shiftKey===!1){t[0].focus();return}if(r===0&&e.shiftKey===!0){t[t.length-1].focus();return}t[e.shiftKey===!0?r-1:r+1].focus()}}function o(n,e){return e.reduce(function(t,r,u){return t===-1&&r.isSameNode(n)===!0?u:t},-1)}export{c,f as g};