var r={d:(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)},e={};r.d(e,{A:()=>d});const o=class{children;end_of_word;passed_through;constructor(){this.children=[],this.end_of_word=!1,this.passed_through=0}},t=r=>r.charCodeAt(0),s=r=>String.fromCharCode(r),d=class{#r;#e;#o;constructor(){this.#r=[],this.#e=new o,this.#o=!1}get words(){return this.#r}set ignore_case(r){this.#o=Boolean(r)}#t(r){if(this.#r.includes(r))return;this.#r.push(r);let e=this.#e;for(let s=0;s<r.length;s++){e.passed_through++;const d=t(r[s]);e.children[d]||(e.children[d]=new o),e=e.children[d]}e.passed_through++,e.end_of_word=!0}addWords(r){for(const e of r)this.#t(e.trim())}#s(r,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.end_of_word&&o.push(r);for(let t=0;t<128;t++)if(e.children[t]){const d=s(t);this.#s(r+d,e.children[t],o)}return o}removeWords(r){for(const e of r)this.#d(e)}#d(r){if(!this.#r.includes(r))throw new Error("Word does not exist.");this.#r.splice(this.#r.indexOf(r),1),this.#i(r,this.#e,0)}#i(r,e,o){if(!e)return!1;if(e.passed_through--,o===r.length)return!!e.end_of_word&&(e.end_of_word=!1,!0);const s=t(r[o]),d=e.children[s];return!!this.#i(r,d,o+1)&&(0===d.passed_through&&(e.children[s]=void 0),!0)}getPrefixMatches(r){return r&&0!==r.length?this.#h(r,0,this.#e):[]}#h(r,e,o){if(!o)return[];if(e===r.length)return this.#s(r,o,[]);const d=t(r[e]),i=(h=d)>=97&&h<=122?(r=>r-32)(d):(r=>r>=65&&r<=90)(d)?(r=>r+32)(d):void 0;var h;let n=this.#h(r,e+1,o.children[d]);return this.#o&&i&&(r=r.slice(0,e)+s(i)+r.slice(e+1,r.length),n=[...n,...this.#h(r,e+1,o.children[i])]),n}};var i=e.A;export{i as default};