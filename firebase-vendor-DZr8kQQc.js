const Rf=()=>{};var bc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Sf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],u=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,u=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,p=i>>2,m=(i&3)<<4|u>>4;let E=(u&15)<<2|d>>6,S=d&63;l||(S=64,a||(E=64)),r.push(t[p],t[m],t[E],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ul(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Sf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||u==null||d==null||m==null)throw new Pf;const E=i<<2|u>>4;if(r.push(E),d!==64){const S=u<<4&240|d>>2;if(r.push(S),m!==64){const k=d<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bf=function(n){const e=ul(n);return ll.encodeByteArray(e,!0)},_s=function(n){return bf(n).replace(/\./g,"")},hl=function(n){try{return ll.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=()=>Cf().__FIREBASE_DEFAULTS__,Nf=()=>{if(typeof process>"u"||typeof bc>"u")return;const n=bc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Df=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hl(n[1]);return e&&JSON.parse(e)},Fs=()=>{try{return Rf()||kf()||Nf()||Df()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dl=n=>{var e,t;return(t=(e=Fs())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},fl=n=>{const e=dl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},pl=()=>{var n;return(n=Fs())==null?void 0:n.config},ml=n=>{var e;return(e=Fs())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Io(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[_s(JSON.stringify(t)),_s(JSON.stringify(a)),""].join(".")}const ir={};function Of(){const n={prod:[],emulator:[]};for(const e of Object.keys(ir))ir[e]?n.emulator.push(e):n.prod.push(e);return n}function Lf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Cc=!1;function wo(n,e){if(typeof window>"u"||typeof document>"u"||!Mt(window.location.host)||ir[n]===e||ir[n]||Cc)return;ir[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=Of().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function u(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function l(E,S){E.setAttribute("width","24"),E.setAttribute("id",S),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Cc=!0,a()},E}function p(E,S){E.setAttribute("id",S),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function m(){const E=Lf(r),S=t("text"),k=document.getElementById(S)||document.createElement("span"),V=t("learnmore"),C=document.getElementById(V)||document.createElement("a"),B=t("preprendIcon"),q=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const j=E.element;u(j),p(C,V);const Q=d();l(q,B),j.append(q,k,C,Q),document.body.appendChild(j)}i?(k.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function xf(){var e;const n=(e=Fs())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Uf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ff(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qf(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jf(){return!xf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $f(){try{return typeof indexedDB=="object"}catch{return!1}}function zf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="FirebaseError";class et extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Hf,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Wf(i,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new et(s,u,r)}}function Wf(n,e){return n.replace(Gf,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Gf=/\{\$([^}]+)}/g;function Kf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(kc(i)&&kc(a)){if(!Xt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function kc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function er(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function tr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Qf(n,e){const t=new Xf(n,e);return t.subscribe.bind(t)}class Xf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Yf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Li),s.error===void 0&&(s.error=Li),s.complete===void 0&&(s.complete=Li);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Li(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n){return n&&n._delegate?n._delegate:n}class Ct{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Vf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ep(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zf(n){return n===Wt?void 0:n}function ep(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const np={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},rp=z.INFO,sp={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},ip=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=sp[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vo{constructor(e){this.name=e,this._logLevel=rp,this._logHandler=ip,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?np[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const op=(n,e)=>e.some(t=>n instanceof t);let Nc,Dc;function ap(){return Nc||(Nc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cp(){return Dc||(Dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _l=new WeakMap,Ki=new WeakMap,yl=new WeakMap,Mi=new WeakMap,Ao=new WeakMap;function up(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(At(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&_l.set(t,n)}).catch(()=>{}),Ao.set(e,n),e}function lp(n){if(Ki.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ki.set(n,e)}let Qi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ki.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return At(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hp(n){Qi=n(Qi)}function dp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(xi(this),e,...t);return yl.set(r,e.sort?e.sort():[e]),At(r)}:cp().includes(n)?function(...e){return n.apply(xi(this),e),At(_l.get(this))}:function(...e){return At(n.apply(xi(this),e))}}function fp(n){return typeof n=="function"?dp(n):(n instanceof IDBTransaction&&lp(n),op(n,ap())?new Proxy(n,Qi):n)}function At(n){if(n instanceof IDBRequest)return up(n);if(Mi.has(n))return Mi.get(n);const e=fp(n);return e!==n&&(Mi.set(n,e),Ao.set(e,n)),e}const xi=n=>Ao.get(n);function pp(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),u=At(a);return r&&a.addEventListener("upgradeneeded",l=>{r(At(a.result),l.oldVersion,l.newVersion,At(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const mp=["get","getKey","getAll","getAllKeys","count"],gp=["put","add","delete","clear"],Ui=new Map;function Vc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ui.get(e))return Ui.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=gp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mp.includes(t)))return;const i=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&l.done]))[0]};return Ui.set(e,i),i}hp(n=>({...n,get:(e,t,r)=>Vc(e,t)||n.get(e,t,r),has:(e,t)=>!!Vc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function yp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xi="@firebase/app",Oc="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new vo("@firebase/app"),Ep="@firebase/app-compat",Tp="@firebase/analytics-compat",Ip="@firebase/analytics",wp="@firebase/app-check-compat",vp="@firebase/app-check",Ap="@firebase/auth",Rp="@firebase/auth-compat",Sp="@firebase/database",Pp="@firebase/data-connect",bp="@firebase/database-compat",Cp="@firebase/functions",kp="@firebase/functions-compat",Np="@firebase/installations",Dp="@firebase/installations-compat",Vp="@firebase/messaging",Op="@firebase/messaging-compat",Lp="@firebase/performance",Mp="@firebase/performance-compat",xp="@firebase/remote-config",Up="@firebase/remote-config-compat",Fp="@firebase/storage",Bp="@firebase/storage-compat",qp="@firebase/firestore",jp="@firebase/ai",$p="@firebase/firestore-compat",zp="firebase",Hp="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="[DEFAULT]",Wp={[Xi]:"fire-core",[Ep]:"fire-core-compat",[Ip]:"fire-analytics",[Tp]:"fire-analytics-compat",[vp]:"fire-app-check",[wp]:"fire-app-check-compat",[Ap]:"fire-auth",[Rp]:"fire-auth-compat",[Sp]:"fire-rtdb",[Pp]:"fire-data-connect",[bp]:"fire-rtdb-compat",[Cp]:"fire-fn",[kp]:"fire-fn-compat",[Np]:"fire-iid",[Dp]:"fire-iid-compat",[Vp]:"fire-fcm",[Op]:"fire-fcm-compat",[Lp]:"fire-perf",[Mp]:"fire-perf-compat",[xp]:"fire-rc",[Up]:"fire-rc-compat",[Fp]:"fire-gcs",[Bp]:"fire-gcs-compat",[qp]:"fire-fst",[$p]:"fire-fst-compat",[jp]:"fire-vertex","fire-js":"fire-js",[zp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Map,Gp=new Map,Ji=new Map;function Lc(n,e){try{n.container.addComponent(e)}catch(t){it.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Yt(n){const e=n.name;if(Ji.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;Ji.set(e,n);for(const t of ys.values())Lc(t,n);for(const t of Gp.values())Lc(t,n);return!0}function Bs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ve(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rt=new vr("app","Firebase",Kp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=Hp;function Xp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Yi,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Rt.create("bad-app-name",{appName:String(s)});if(t||(t=pl()),!t)throw Rt.create("no-options");const i=ys.get(s);if(i){if(Xt(t,i.options)&&Xt(r,i.config))return i;throw Rt.create("duplicate-app",{appName:s})}const a=new tp(s);for(const l of Ji.values())a.addComponent(l);const u=new Qp(t,r,a);return ys.set(s,u),u}function Ro(n=Yi){const e=ys.get(n);if(!e&&n===Yi&&pl())return Xp();if(!e)throw Rt.create("no-app",{appName:n});return e}function We(n,e,t){let r=Wp[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(a.join(" "));return}Yt(new Ct(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="firebase-heartbeat-database",Jp=1,fr="firebase-heartbeat-store";let Fi=null;function El(){return Fi||(Fi=pp(Yp,Jp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rt.create("idb-open",{originalErrorMessage:n.message})})),Fi}async function Zp(n){try{const t=(await El()).transaction(fr),r=await t.objectStore(fr).get(Tl(n));return await t.done,r}catch(e){if(e instanceof et)it.warn(e.message);else{const t=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(t.message)}}}async function Mc(n,e){try{const r=(await El()).transaction(fr,"readwrite");await r.objectStore(fr).put(e,Tl(n)),await r.done}catch(t){if(t instanceof et)it.warn(t.message);else{const r=Rt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});it.warn(r.message)}}}function Tl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=1024,tm=30;class nm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>tm){const a=im(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){it.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xc(),{heartbeatsToSend:r,unsentEntries:s}=rm(this._heartbeatsCache.heartbeats),i=_s(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return it.warn(t),""}}}function xc(){return new Date().toISOString().substring(0,10)}function rm(n,e=em){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Uc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Uc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class sm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $f()?zf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Uc(n){return _s(JSON.stringify({version:2,heartbeats:n})).length}function im(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(n){Yt(new Ct("platform-logger",e=>new _p(e),"PRIVATE")),Yt(new Ct("heartbeat",e=>new nm(e),"PRIVATE")),We(Xi,Oc,n),We(Xi,Oc,"esm2020"),We("fire-js","")}om("");var am="firebase",cm="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(am,cm,"app");function Il(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const um=Il,wl=new vr("auth","Firebase",Il());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new vo("@firebase/auth");function lm(n,...e){Es.logLevel<=z.WARN&&Es.warn(`Auth (${sn}): ${n}`,...e)}function as(n,...e){Es.logLevel<=z.ERROR&&Es.error(`Auth (${sn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n,...e){throw So(n,...e)}function Ge(n,...e){return So(n,...e)}function vl(n,e,t){const r={...um(),[e]:t};return new vr("auth","Firebase",r).create(e,{appName:n.name})}function st(n){return vl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function So(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return wl.create(n,...e)}function U(n,e,...t){if(!n)throw So(e,...t)}function nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw as(e),new Error(e)}function ot(n,e){n||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function hm(){return Fc()==="http:"||Fc()==="https:"}function Fc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hm()||Ff()||"connection"in navigator)?navigator.onLine:!0}function fm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ot(t>e,"Short delay should be less than long delay!"),this.isMobile=Mf()||Bf()}get(){return dm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n,e){ot(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gm=new Rr(3e4,6e4);function xt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function tt(n,e,t,r,s={}){return Rl(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const u=Ar({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:l,...i};return Uf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Mt(n.emulatorConfig.host)&&(d.credentials="include"),Al.fetch()(await Sl(n,n.config.apiHost,t,u),d)})}async function Rl(n,e,t){n._canInitEmulator=!1;const r={...pm,...e};try{const s=new ym(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Zr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const u=i.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zr(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Zr(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Zr(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw vl(n,p,d);Fe(n,p)}}catch(s){if(s instanceof et)throw s;Fe(n,"network-request-failed",{message:String(s)})}}async function Sr(n,e,t,r,s={}){const i=await tt(n,e,t,r,s);return"mfaPendingCredential"in i&&Fe(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Sl(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Po(n.config,s):`${n.config.apiScheme}://${s}`;return mm.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function _m(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ym{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),gm.get())})}}function Zr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ge(n,e,r);return s.customData._tokenResponse=t,s}function Bc(n){return n!==void 0&&n.enterprise!==void 0}class Em{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _m(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Tm(n,e){return tt(n,"GET","/v2/recaptchaConfig",xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(n,e){return tt(n,"POST","/v1/accounts:delete",e)}async function Ts(n,e){return tt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wm(n,e=!1){const t=X(n),r=await t.getIdToken(e),s=bo(r);U(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:or(Bi(s.auth_time)),issuedAtTime:or(Bi(s.iat)),expirationTime:or(Bi(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bi(n){return Number(n)*1e3}function bo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return as("JWT malformed, contained fewer than 3 sections"),null;try{const s=hl(t);return s?JSON.parse(s):(as("Failed to decode base64 JWT payload"),null)}catch(s){return as("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qc(n){const e=bo(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof et&&vm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function vm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=or(this.lastLoginAt),this.creationTime=or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(n){var m;const e=n.auth,t=await n.getIdToken(),r=await Jt(n,Ts(e,{idToken:t}));U(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?Pl(s.providerUserInfo):[],a=Sm(n.providerData,i),u=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?l:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new eo(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function Rm(n){const e=X(n);await Is(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sm(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Pl(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(n,e){const t=await Rl(n,{},async()=>{const r=Ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Sl(n,s,"/v1/token",`key=${i}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:u,body:r};return n.emulatorConfig&&Mt(n.emulatorConfig.host)&&(l.credentials="include"),Al.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function bm(n,e){return tt(n,"POST","/v2/accounts:revokeToken",xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=qc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Pm(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new yn;return r&&(U(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ue{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Am(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new eo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Jt(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wm(this,e)}reload(){return Rm(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Is(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await Jt(this,Im(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,u=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:E,isAnonymous:S,providerData:k,stsTokenManager:V}=t;U(m&&V,e,"internal-error");const C=yn.fromJSON(this.name,V);U(typeof m=="string",e,"internal-error"),gt(r,e.name),gt(s,e.name),U(typeof E=="boolean",e,"internal-error"),U(typeof S=="boolean",e,"internal-error"),gt(i,e.name),gt(a,e.name),gt(u,e.name),gt(l,e.name),gt(d,e.name),gt(p,e.name);const B=new Ue({uid:m,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:u,stsTokenManager:C,createdAt:d,lastLoginAt:p});return k&&Array.isArray(k)&&(B.providerData=k.map(q=>({...q}))),l&&(B._redirectEventId=l),B}static async _fromIdTokenResponse(e,t,r=!1){const s=new yn;s.updateFromServerResponse(t);const i=new Ue({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Is(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Pl(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),u=new yn;u.updateFromIdToken(r);const l=new Ue({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new eo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new Map;function rt(n){ot(n instanceof Function,"Expected a class definition");let e=jc.get(n);return e?(ot(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bl.type="NONE";const $c=bl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(n,e,t){return`firebase:${n}:${e}:${t}`}class En{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=cs(this.userKey,s.apiKey,i),this.fullPersistenceKey=cs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ts(this.auth,{idToken:e}).catch(()=>{});return t?Ue._fromGetAccountInfoResponse(this.auth,t,e):null}return Ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new En(rt($c),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||rt($c);const a=cs(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){let m;if(typeof p=="string"){const E=await Ts(e,{idToken:p}).catch(()=>{});if(!E)break;m=await Ue._fromGetAccountInfoResponse(e,E,p)}else m=Ue._fromJSON(e,p);d!==i&&(u=m),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new En(i,e,r):(i=l[0],u&&await i._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new En(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ol(e))return"Blackberry";if(Ll(e))return"Webos";if(kl(e))return"Safari";if((e.includes("chrome/")||Nl(e))&&!e.includes("edge/"))return"Chrome";if(Vl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cl(n=Re()){return/firefox\//i.test(n)}function kl(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nl(n=Re()){return/crios\//i.test(n)}function Dl(n=Re()){return/iemobile/i.test(n)}function Vl(n=Re()){return/android/i.test(n)}function Ol(n=Re()){return/blackberry/i.test(n)}function Ll(n=Re()){return/webos/i.test(n)}function Co(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Cm(n=Re()){var e;return Co(n)&&!!((e=window.navigator)!=null&&e.standalone)}function km(){return qf()&&document.documentMode===10}function Ml(n=Re()){return Co(n)||Vl(n)||Ll(n)||Ol(n)||/windows phone/i.test(n)||Dl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n,e=[]){let t;switch(n){case"Browser":t=zc(Re());break;case"Worker":t=`${zc(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${sn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,u)=>{try{const l=e(i);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dm(n,e={}){return tt(n,"GET","/v2/passwordPolicy",xt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=6;class Om{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Vm,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hc(this),this.idTokenSubscription=new Hc(this),this.beforeStateQueue=new Nm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await En.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ts(this,{idToken:e}),r=await Ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ve(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,u=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Is(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(st(this));const t=e?X(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dm(this),t=new Om(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await bm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rt(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(u,this,"internal-error"),u.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&lm(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function on(n){return X(n)}class Hc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qf(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mm(n){qs=n}function Ul(n){return qs.loadJS(n)}function xm(){return qs.recaptchaEnterpriseScript}function Um(){return qs.gapiScript}function Fm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Bm{constructor(){this.enterprise=new qm}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class qm{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const jm="recaptcha-enterprise",Fl="NO_RECAPTCHA";class $m{constructor(e){this.type=jm,this.auth=on(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,u)=>{Tm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new Em(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function s(i,a,u){const l=window.grecaptcha;Bc(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Fl)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Bm().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(u=>{if(!t&&Bc(window.grecaptcha))s(u,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=xm();l.length!==0&&(l+=u),Ul(l).then(()=>{s(u,i,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function Wc(n,e,t,r=!1,s=!1){const i=new $m(n);let a;if(s)a=Fl;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const u={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function to(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Wc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Wc(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(n,e){const t=Bs(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Xt(i,e??{}))return s;Fe(s,"already-initialized")}return t.initialize({options:e})}function Hm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(rt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Wm(n,e,t){const r=on(n);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Bl(e),{host:a,port:u}=Gm(e),l=u===null?"":`:${u}`,d={url:`${i}//${a}${l}/`},p=Object.freeze({host:a,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(Xt(d,r.config.emulator)&&Xt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Mt(a)?(Io(`${i}//${a}${l}`),wo("Auth",!0)):Km()}function Bl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Gm(n){const e=Bl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Gc(a)}}}function Gc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Km(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,t){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function Qm(n,e){return tt(n,"POST","/v1/accounts:update",e)}async function Xm(n,e){return tt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(n,e){return Sr(n,"POST","/v1/accounts:signInWithPassword",xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jm(n,e){return Sr(n,"POST","/v1/accounts:signInWithEmailLink",xt(n,e))}async function Zm(n,e){return Sr(n,"POST","/v1/accounts:signInWithEmailLink",xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends ko{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new pr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new pr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return to(e,t,"signInWithPassword",Ym);case"emailLink":return Jm(e,{email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return to(e,r,"signUpPassword",Xm);case"emailLink":return Zm(e,{idToken:t,email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(n,e){return Sr(n,"POST","/v1/accounts:signInWithIdp",xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="http://localhost";class Zt extends ko{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Zt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Tn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tn(e,t)}buildRequest(){const e={requestUri:eg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ar(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ng(n){const e=er(tr(n)).link,t=e?er(tr(e)).deep_link_id:null,r=er(tr(n)).deep_link_id;return(r?er(tr(r)).link:null)||r||t||e||n}class No{constructor(e){const t=er(tr(e)),r=t.apiKey??null,s=t.oobCode??null,i=tg(t.mode??null);U(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=ng(e);try{return new No(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.providerId=bn.PROVIDER_ID}static credential(e,t){return pr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=No.parseLink(t);return U(r,"argument-error"),pr._fromEmailAndCode(e,r.code,r.tenantId)}}bn.PROVIDER_ID="password";bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends ql{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Pr{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return yt.credential(t,r)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Pr{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Pr{constructor(){super("twitter.com")}static credential(e,t){return Zt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Tt.credential(t,r)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(n,e){return Sr(n,"POST","/v1/accounts:signUp",xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ue._fromIdTokenResponse(e,r,s),a=Kc(r);return new en({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Kc(r);return new en({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Kc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends et{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ws.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ws(e,t,r,s)}}function jl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ws._fromErrorAndOperation(n,i,e,r):i})}async function sg(n,e,t=!1){const r=await Jt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return en._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(n,e,t=!1){const{auth:r}=n;if(Ve(r.app))return Promise.reject(st(r));const s="reauthenticate";try{const i=await Jt(n,jl(r,s,e,n),t);U(i.idToken,r,"internal-error");const a=bo(i.idToken);U(a,r,"internal-error");const{sub:u}=a;return U(n.uid===u,r,"user-mismatch"),en._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(n,e,t=!1){if(Ve(n.app))return Promise.reject(st(n));const r="signIn",s=await jl(n,r,e),i=await en._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function og(n,e){return $l(on(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(n){const e=on(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HI(n,e,t){if(Ve(n.app))return Promise.reject(st(n));const r=on(n),a=await to(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rg).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&zl(n),l}),u=await en._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function WI(n,e,t){return Ve(n.app)?Promise.reject(st(n)):og(X(n),bn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zl(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(n,e){return tt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=X(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Jt(r,ag(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const u=r.providerData.find(({providerId:l})=>l==="password");u&&(u.displayName=r.displayName,u.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function KI(n,e){return cg(X(n),null,e)}async function cg(n,e,t){const{auth:r}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(i.password=t);const a=await Jt(n,Qm(r,i));await n._updateTokensIfNecessary(a,!0)}function ug(n,e,t,r){return X(n).onIdTokenChanged(e,t,r)}function lg(n,e,t){return X(n).beforeAuthStateChanged(e,t)}function QI(n,e,t,r){return X(n).onAuthStateChanged(e,t,r)}function XI(n){return X(n).signOut()}const vs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vs,"1"),this.storage.removeItem(vs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=1e3,dg=10;class Wl extends Hl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ml(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);km()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},hg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wl.type="LOCAL";const fg=Wl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Hl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gl.type="SESSION";const Kl=Gl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new js(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(a).map(async d=>d(t.origin,i)),l=await pg(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}js.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((u,l)=>{const d=Do("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const E=m;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(E.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function gg(n){Ke().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function _g(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Eg(){return Ql()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="firebaseLocalStorageDb",Tg=1,As="firebaseLocalStorage",Yl="fbase_key";class br{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $s(n,e){return n.transaction([As],e?"readwrite":"readonly").objectStore(As)}function Ig(){const n=indexedDB.deleteDatabase(Xl);return new br(n).toPromise()}function no(){const n=indexedDB.open(Xl,Tg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(As,{keyPath:Yl})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(As)?e(r):(r.close(),await Ig(),e(await no()))})})}async function Qc(n,e,t){const r=$s(n,!0).put({[Yl]:e,value:t});return new br(r).toPromise()}async function wg(n,e){const t=$s(n,!1).get(e),r=await new br(t).toPromise();return r===void 0?null:r.value}function Xc(n,e){const t=$s(n,!0).delete(e);return new br(t).toPromise()}const vg=800,Ag=3;class Jl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await no(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ag)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ql()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=js._getInstance(Eg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await _g(),!this.activeServiceWorker)return;this.sender=new mg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await no();return await Qc(e,vs,"1"),await Xc(e,vs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>wg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$s(s,!1).getAll();return new br(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jl.type="LOCAL";const Rg=Jl;new Rr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(n,e){return e?rt(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends ko{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pg(n){return $l(n.auth,new Vo(n),n.bypassAuthState)}function bg(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),ig(t,new Vo(n),n.bypassAuthState)}async function Cg(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),sg(t,new Vo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pg;case"linkViaPopup":case"linkViaRedirect":return Cg;case"reauthViaPopup":case"reauthViaRedirect":return bg;default:Fe(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=new Rr(2e3,1e4);class gn extends Zl{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=Do();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kg.get())};e()}}gn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="pendingRedirect",us=new Map;class Dg extends Zl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=us.get(this.auth._key());if(!e){try{const r=await Vg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}us.set(this.auth._key(),e)}return this.bypassAuthState||us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vg(n,e){const t=Mg(e),r=Lg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Og(n,e){us.set(n._key(),e)}function Lg(n){return rt(n._redirectPersistence)}function Mg(n){return cs(Ng,n.config.apiKey,n.name)}async function xg(n,e,t=!1){if(Ve(n.app))return Promise.reject(st(n));const r=on(n),s=Sg(r,e),a=await new Dg(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=600*1e3;class Fg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!eh(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ge(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ug&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yc(e))}saveEventToCache(e){this.cachedEventUids.add(Yc(e)),this.lastProcessedEventTime=Date.now()}}function Yc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function eh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qg(n,e={}){return tt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$g=/^https?/;async function zg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qg(n);for(const t of e)try{if(Hg(t))return}catch{}Fe(n,"unauthorized-domain")}function Hg(n){const e=Zi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!$g.test(t))return!1;if(jg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=new Rr(3e4,6e4);function Jc(){const n=Ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Gg(n){return new Promise((e,t)=>{var s,i,a;function r(){Jc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jc(),t(Ge(n,"network-request-failed"))},timeout:Wg.get()})}if((i=(s=Ke().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=Ke().gapi)!=null&&a.load)r();else{const u=Fm("iframefcb");return Ke()[u]=()=>{gapi.load?r():t(Ge(n,"network-request-failed"))},Ul(`${Um()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw ls=null,e})}let ls=null;function Kg(n){return ls=ls||Gg(n),ls}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=new Rr(5e3,15e3),Xg="__/auth/iframe",Yg="emulator/auth/iframe",Jg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function e_(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Po(e,Yg):`https://${n.config.authDomain}/${Xg}`,r={apiKey:e.apiKey,appName:n.name,v:sn},s=Zg.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ar(r).slice(1)}`}async function t_(n){const e=await Kg(n),t=Ke().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:e_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ge(n,"network-request-failed"),u=Ke().setTimeout(()=>{i(a)},Qg.get());function l(){Ke().clearTimeout(u),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},r_=500,s_=600,i_="_blank",o_="http://localhost";class Zc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function a_(n,e,t,r=r_,s=s_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l={...n_,width:r.toString(),height:s.toString(),top:i,left:a},d=Re().toLowerCase();t&&(u=Nl(d)?i_:t),Cl(d)&&(e=e||o_,l.scrollbars="yes");const p=Object.entries(l).reduce((E,[S,k])=>`${E}${S}=${k},`,"");if(Cm(d)&&u!=="_self")return c_(e||"",u),new Zc(null);const m=window.open(e||"",u,p);U(m,n,"popup-blocked");try{m.focus()}catch{}return new Zc(m)}function c_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="__/auth/handler",l_="emulator/auth/handler",h_=encodeURIComponent("fac");async function eu(n,e,t,r,s,i){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:sn,eventId:s};if(e instanceof ql){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Kf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof Pr){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const l=await n._getAppCheckToken(),d=l?`#${h_}=${encodeURIComponent(l)}`:"";return`${d_(n)}?${Ar(u).slice(1)}${d}`}function d_({config:n}){return n.emulator?Po(n,l_):`https://${n.authDomain}/${u_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="webStorageSupport";class f_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kl,this._completeRedirectFn=xg,this._overrideRedirectResult=Og}async _openPopup(e,t,r,s){var a;ot((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await eu(e,t,r,Zi(),s);return a_(e,i,Do())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await eu(e,t,r,Zi(),s);return gg(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await t_(e),r=new Fg(e);return t.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qi,{type:qi},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[qi];i!==void 0&&t(!!i),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ml()||kl()||Co()}}const p_=f_;var tu="@firebase/auth",nu="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function __(n){Yt(new Ct("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xl(n)},d=new Lm(r,s,i,l);return Hm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Yt(new Ct("auth-internal",e=>{const t=on(e.getProvider("auth").getImmediate());return(r=>new m_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(tu,nu,g_(n)),We(tu,nu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=300,E_=ml("authIdTokenMaxAge")||y_;let ru=null;const T_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>E_)return;const s=t==null?void 0:t.token;ru!==s&&(ru=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function YI(n=Ro()){const e=Bs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=zm(n,{popupRedirectResolver:p_,persistence:[Rg,fg,Kl]}),r=ml("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=T_(i.toString());lg(t,a,()=>a(t.currentUser)),ug(t,u=>a(u))}}const s=dl("auth");return s&&Wm(t,`http://${s}`),t}function I_(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Mm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",I_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});__("Browser");var su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var St,th;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function y(){}y.prototype=g.prototype,I.F=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.D=function(w,T,A){for(var _=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)_[ke-2]=arguments[ke];return g.prototype[T].apply(w,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,y){y||(y=0);const w=Array(16);if(typeof g=="string")for(var T=0;T<16;++T)w[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;T<16;++T)w[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],T=I.g[2];let A=I.g[3],_;_=g+(A^y&(T^A))+w[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(T^g&(y^T))+w[1]+3905402710&4294967295,A=g+(_<<12&4294967295|_>>>20),_=T+(y^A&(g^y))+w[2]+606105819&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(g^T&(A^g))+w[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(A^y&(T^A))+w[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(T^g&(y^T))+w[5]+1200080426&4294967295,A=g+(_<<12&4294967295|_>>>20),_=T+(y^A&(g^y))+w[6]+2821735955&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(g^T&(A^g))+w[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(A^y&(T^A))+w[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(T^g&(y^T))+w[9]+2336552879&4294967295,A=g+(_<<12&4294967295|_>>>20),_=T+(y^A&(g^y))+w[10]+4294925233&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(g^T&(A^g))+w[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(A^y&(T^A))+w[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(T^g&(y^T))+w[13]+4254626195&4294967295,A=g+(_<<12&4294967295|_>>>20),_=T+(y^A&(g^y))+w[14]+2792965006&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(g^T&(A^g))+w[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(T^A&(y^T))+w[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(g^y))+w[6]+3225465664&4294967295,A=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(A^g))+w[11]+643717713&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(T^A))+w[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^A&(y^T))+w[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(g^y))+w[10]+38016083&4294967295,A=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(A^g))+w[15]+3634488961&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(T^A))+w[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^A&(y^T))+w[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(g^y))+w[14]+3275163606&4294967295,A=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(A^g))+w[3]+4107603335&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(T^A))+w[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^A&(y^T))+w[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(g^y))+w[2]+4243563512&4294967295,A=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(A^g))+w[7]+1735328473&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(T^A))+w[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(y^T^A)+w[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^T)+w[8]+2272392833&4294967295,A=g+(_<<11&4294967295|_>>>21),_=T+(A^g^y)+w[11]+1839030562&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^g)+w[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^A)+w[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^T)+w[4]+1272893353&4294967295,A=g+(_<<11&4294967295|_>>>21),_=T+(A^g^y)+w[7]+4139469664&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^g)+w[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^A)+w[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^T)+w[0]+3936430074&4294967295,A=g+(_<<11&4294967295|_>>>21),_=T+(A^g^y)+w[3]+3572445317&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^g)+w[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^A)+w[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^T)+w[12]+3873151461&4294967295,A=g+(_<<11&4294967295|_>>>21),_=T+(A^g^y)+w[15]+530742520&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^g)+w[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(T^(y|~A))+w[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~T))+w[7]+1126891415&4294967295,A=g+(_<<10&4294967295|_>>>22),_=T+(g^(A|~y))+w[14]+2878612391&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~g))+w[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~A))+w[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~T))+w[3]+2399980690&4294967295,A=g+(_<<10&4294967295|_>>>22),_=T+(g^(A|~y))+w[10]+4293915773&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~g))+w[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~A))+w[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~T))+w[15]+4264355552&4294967295,A=g+(_<<10&4294967295|_>>>22),_=T+(g^(A|~y))+w[6]+2734768916&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~g))+w[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~A))+w[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~T))+w[11]+3174756917&4294967295,A=g+(_<<10&4294967295|_>>>22),_=T+(g^(A|~y))+w[2]+718787259&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~g))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.v=function(I,g){g===void 0&&(g=I.length);const y=g-this.blockSize,w=this.C;let T=this.h,A=0;for(;A<g;){if(T==0)for(;A<=y;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<g;)if(w[T++]=I.charCodeAt(A++),T==this.blockSize){s(this,w),T=0;break}}else for(;A<g;)if(w[T++]=I[A++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=g},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;g=this.o*8;for(var y=I.length-8;y<I.length;++y)I[y]=g&255,g/=256;for(this.v(I),I=Array(16),g=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)I[g++]=this.g[y]>>>w&255;return I};function i(I,g){var y=u;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function a(I,g){this.h=g;const y=[];let w=!0;for(let T=I.length-1;T>=0;T--){const A=I[T]|0;w&&A==g||(y[T]=A,w=!1)}this.g=y}var u={};function l(I){return-128<=I&&I<128?i(I,function(g){return new a([g|0],g<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return m;if(I<0)return C(d(-I));const g=[];let y=1;for(let w=0;I>=y;w++)g[w]=I/y|0,y*=4294967296;return new a(g,0)}function p(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return C(p(I.substring(1),g));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(g,8));let w=m;for(let A=0;A<I.length;A+=8){var T=Math.min(8,I.length-A);const _=parseInt(I.substring(A,A+T),g);T<8?(T=d(Math.pow(g,T)),w=w.j(T).add(d(_))):(w=w.j(y),w=w.add(d(_)))}return w}var m=l(0),E=l(1),S=l(16777216);n=a.prototype,n.m=function(){if(V(this))return-C(this).m();let I=0,g=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);I+=(w>=0?w:4294967296+w)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(V(this))return"-"+C(this).toString(I);const g=d(Math.pow(I,6));var y=this;let w="";for(;;){const T=Q(y,g).g;y=B(y,T.j(g));let A=((y.g.length>0?y.g[0]:y.h)>>>0).toString(I);if(y=T,k(y))return A+w;for(;A.length<6;)A="0"+A;w=A+w}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(let g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function V(I){return I.h==-1}n.l=function(I){return I=B(this,I),V(I)?-1:k(I)?0:1};function C(I){const g=I.g.length,y=[];for(let w=0;w<g;w++)y[w]=~I.g[w];return new a(y,~I.h).add(E)}n.abs=function(){return V(this)?C(this):this},n.add=function(I){const g=Math.max(this.g.length,I.g.length),y=[];let w=0;for(let T=0;T<=g;T++){let A=w+(this.i(T)&65535)+(I.i(T)&65535),_=(A>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);w=_>>>16,A&=65535,_&=65535,y[T]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function B(I,g){return I.add(C(g))}n.j=function(I){if(k(this)||k(I))return m;if(V(this))return V(I)?C(this).j(C(I)):C(C(this).j(I));if(V(I))return C(this.j(C(I)));if(this.l(S)<0&&I.l(S)<0)return d(this.m()*I.m());const g=this.g.length+I.g.length,y=[];for(var w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let T=0;T<I.g.length;T++){const A=this.i(w)>>>16,_=this.i(w)&65535,ke=I.i(T)>>>16,Bt=I.i(T)&65535;y[2*w+2*T]+=_*Bt,q(y,2*w+2*T),y[2*w+2*T+1]+=A*Bt,q(y,2*w+2*T+1),y[2*w+2*T+1]+=_*ke,q(y,2*w+2*T+1),y[2*w+2*T+2]+=A*ke,q(y,2*w+2*T+2)}for(I=0;I<g;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=g;I<2*g;I++)y[I]=0;return new a(y,0)};function q(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function j(I,g){this.g=I,this.h=g}function Q(I,g){if(k(g))throw Error("division by zero");if(k(I))return new j(m,m);if(V(I))return g=Q(C(I),g),new j(C(g.g),C(g.h));if(V(g))return g=Q(I,C(g)),new j(C(g.g),g.h);if(I.g.length>30){if(V(I)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var y=E,w=g;w.l(I)<=0;)y=pe(y),w=pe(w);var T=te(y,1),A=te(w,1);for(w=te(w,2),y=te(y,2);!k(w);){var _=A.add(w);_.l(I)<=0&&(T=T.add(y),A=_),w=te(w,1),y=te(y,1)}return g=B(I,T.j(g)),new j(T,g)}for(T=m;I.l(g)>=0;){for(y=Math.max(1,Math.floor(I.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),A=d(y),_=A.j(g);V(_)||_.l(I)>0;)y-=w,A=d(y),_=A.j(g);k(A)&&(A=E),T=T.add(A),I=B(I,_)}return new j(T,I)}n.B=function(I){return Q(this,I).h},n.and=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)&I.i(w);return new a(y,this.h&I.h)},n.or=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)|I.i(w);return new a(y,this.h|I.h)},n.xor=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)^I.i(w);return new a(y,this.h^I.h)};function pe(I){const g=I.g.length+1,y=[];for(let w=0;w<g;w++)y[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(y,I.h)}function te(I,g){const y=g>>5;g%=32;const w=I.g.length-y,T=[];for(let A=0;A<w;A++)T[A]=g>0?I.i(A+y)>>>g|I.i(A+y+1)<<32-g:I.i(A+y);return new a(T,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,th=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,St=a}).apply(typeof su<"u"?su:typeof self<"u"?self:typeof window<"u"?window:{});var es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nh,nr,rh,hs,ro,sh,ih,oh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof es=="object"&&es];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var v=o[f];if(!(v in h))break e;h=h[v]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function u(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function l(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=l,d.apply(null,arguments)}function p(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function m(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(f,v,R){for(var N=Array(arguments.length-2),$=2;$<arguments.length;$++)N[$-2]=arguments[$];return c.prototype[v].apply(f,N)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const c=o.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function k(o,c){for(let f=1;f<arguments.length;f++){const v=arguments[f];var h=typeof v;if(h=h!="object"?h:v?Array.isArray(v)?"array":h:"null",h=="array"||h=="object"&&typeof v.length=="number"){h=o.length||0;const R=v.length||0;o.length=h+R;for(let N=0;N<R;N++)o[h+N]=v[N]}else o.push(v)}}class V{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function C(o){a.setTimeout(()=>{throw o},0)}function B(){var o=I;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class q{constructor(){this.h=this.g=null}add(c,h){const f=j.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var j=new V(()=>new Q,o=>o.reset());class Q{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,te=!1,I=new q,g=()=>{const o=Promise.resolve(void 0);pe=()=>{o.then(y)}};function y(){for(var o;o=B();){try{o.h.call(o.g)}catch(h){C(h)}var c=j;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}te=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function ke(o,c){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}m(ke,T),ke.prototype.init=function(o,c){const h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ke.Z.h.call(this)},ke.prototype.h=function(){ke.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Bt="closure_listenable_"+(Math.random()*1e6|0),Wd=0;function Gd(o,c,h,f,v){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=v,this.key=++Wd,this.da=this.fa=!1}function Ur(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Fr(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function Kd(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function Pa(o){const c={};for(const h in o)c[h]=o[h];return c}const ba="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ca(o,c){let h,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(h in f)o[h]=f[h];for(let R=0;R<ba.length;R++)h=ba[R],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function Br(o){this.src=o,this.g={},this.h=0}Br.prototype.add=function(o,c,h,f,v){const R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);const N=di(o,c,f,v);return N>-1?(c=o[N],h||(c.fa=!1)):(c=new Gd(c,this.src,R,!!f,v),c.fa=h,o.push(c)),c};function hi(o,c){const h=c.type;if(h in o.g){var f=o.g[h],v=Array.prototype.indexOf.call(f,c,void 0),R;(R=v>=0)&&Array.prototype.splice.call(f,v,1),R&&(Ur(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function di(o,c,h,f){for(let v=0;v<o.length;++v){const R=o[v];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==f)return v}return-1}var fi="closure_lm_"+(Math.random()*1e6|0),pi={};function ka(o,c,h,f,v){if(Array.isArray(c)){for(let R=0;R<c.length;R++)ka(o,c[R],h,f,v);return null}return h=Va(h),o&&o[Bt]?o.J(c,h,u(f)?!!f.capture:!1,v):Qd(o,c,h,!1,f,v)}function Qd(o,c,h,f,v,R){if(!c)throw Error("Invalid event type");const N=u(v)?!!v.capture:!!v;let $=gi(o);if($||(o[fi]=$=new Br(o)),h=$.add(c,h,f,N,R),h.proxy)return h;if(f=Xd(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)A||(v=N),v===void 0&&(v=!1),o.addEventListener(c.toString(),f,v);else if(o.attachEvent)o.attachEvent(Da(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Xd(){function o(h){return c.call(o.src,o.listener,h)}const c=Yd;return o}function Na(o,c,h,f,v){if(Array.isArray(c))for(var R=0;R<c.length;R++)Na(o,c[R],h,f,v);else f=u(f)?!!f.capture:!!f,h=Va(h),o&&o[Bt]?(o=o.i,R=String(c).toString(),R in o.g&&(c=o.g[R],h=di(c,h,f,v),h>-1&&(Ur(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[R],o.h--)))):o&&(o=gi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=di(c,h,f,v)),(h=o>-1?c[o]:null)&&mi(h))}function mi(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Bt])hi(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Da(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=gi(c))?(hi(h,o),h.h==0&&(h.src=null,c[fi]=null)):Ur(o)}}}function Da(o){return o in pi?pi[o]:pi[o]="on"+o}function Yd(o,c){if(o.da)o=!0;else{c=new ke(c,this);const h=o.listener,f=o.ha||o.src;o.fa&&mi(o),o=h.call(f,c)}return o}function gi(o){return o=o[fi],o instanceof Br?o:null}var _i="__closure_events_fn_"+(Math.random()*1e9>>>0);function Va(o){return typeof o=="function"?o:(o[_i]||(o[_i]=function(c){return o.handleEvent(c)}),o[_i])}function Ie(){w.call(this),this.i=new Br(this),this.M=this,this.G=null}m(Ie,w),Ie.prototype[Bt]=!0,Ie.prototype.removeEventListener=function(o,c,h,f){Na(this,o,c,h,f)};function Se(o,c){var h,f=o.G;if(f)for(h=[];f;f=f.G)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new T(c,o);else if(c instanceof T)c.target=c.target||o;else{var v=c;c=new T(f,o),Ca(c,v)}v=!0;let R,N;if(h)for(N=h.length-1;N>=0;N--)R=c.g=h[N],v=qr(R,f,!0,c)&&v;if(R=c.g=o,v=qr(R,f,!0,c)&&v,v=qr(R,f,!1,c)&&v,h)for(N=0;N<h.length;N++)R=c.g=h[N],v=qr(R,f,!1,c)&&v}Ie.prototype.N=function(){if(Ie.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let f=0;f<h.length;f++)Ur(h[f]);delete o.g[c],o.h--}}this.G=null},Ie.prototype.J=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Ie.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function qr(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let v=!0;for(let R=0;R<c.length;++R){const N=c[R];if(N&&!N.da&&N.capture==h){const $=N.listener,de=N.ha||N.src;N.fa&&hi(o.i,N),v=$.call(de,f)!==!1&&v}}return v&&!f.defaultPrevented}function Jd(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function Oa(o){o.g=Jd(()=>{o.g=null,o.i&&(o.i=!1,Oa(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Zd extends w{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Oa(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xn(o){w.call(this),this.h=o,this.g={}}m(xn,w);var La=[];function Ma(o){Fr(o.g,function(c,h){this.g.hasOwnProperty(h)&&mi(c)},o),o.g={}}xn.prototype.N=function(){xn.Z.N.call(this),Ma(this)},xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yi=a.JSON.stringify,ef=a.JSON.parse,tf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function xa(){}function Ua(){}var Un={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ei(){T.call(this,"d")}m(Ei,T);function Ti(){T.call(this,"c")}m(Ti,T);var qt={},Fa=null;function jr(){return Fa=Fa||new Ie}qt.Ia="serverreachability";function Ba(o){T.call(this,qt.Ia,o)}m(Ba,T);function Fn(o){const c=jr();Se(c,new Ba(c))}qt.STAT_EVENT="statevent";function qa(o,c){T.call(this,qt.STAT_EVENT,o),this.stat=c}m(qa,T);function Pe(o){const c=jr();Se(c,new qa(c,o))}qt.Ja="timingevent";function ja(o,c){T.call(this,qt.Ja,o),this.size=c}m(ja,T);function Bn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function qn(){this.g=!0}qn.prototype.ua=function(){this.g=!1};function nf(o,c,h,f,v,R){o.info(function(){if(o.g)if(R){var N="",$=R.split("&");for(let J=0;J<$.length;J++){var de=$[J].split("=");if(de.length>1){const me=de[0];de=de[1];const $e=me.split("_");N=$e.length>=2&&$e[1]=="type"?N+(me+"="+de+"&"):N+(me+"=redacted&")}}}else N=null;else N=R;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+c+`
`+h+`
`+N})}function rf(o,c,h,f,v,R,N){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+c+`
`+h+`
`+R+" "+N})}function un(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+of(o,h)+(f?" "+f:"")})}function sf(o,c){o.info(function(){return"TIMEOUT: "+c})}qn.prototype.info=function(){};function of(o,c){if(!o.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(o=0;o<R.length;o++)if(Array.isArray(R[o])){var h=R[o];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var v=f[0];if(v!="noop"&&v!="stop"&&v!="close")for(let N=1;N<f.length;N++)f[N]=""}}}}return yi(R)}catch{return c}}var $r={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$a={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},za;function Ii(){}m(Ii,xa),Ii.prototype.g=function(){return new XMLHttpRequest},za=new Ii;function jn(o){return encodeURIComponent(String(o))}function af(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function lt(o,c,h,f){this.j=o,this.i=c,this.l=h,this.S=f||1,this.V=new xn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ha}function Ha(){this.i=null,this.g="",this.h=!1}var Wa={},wi={};function vi(o,c,h){o.M=1,o.A=Hr(je(c)),o.u=h,o.R=!0,Ga(o,null)}function Ga(o,c){o.F=Date.now(),zr(o),o.B=je(o.A);var h=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),oc(h.i,"t",f),o.C=0,h=o.j.L,o.h=new Ha,o.g=Ac(o.j,h?c:null,!o.u),o.P>0&&(o.O=new Zd(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,f=o.ba;var v="readystatechange";Array.isArray(v)||(v&&(La[0]=v.toString()),v=La);for(let R=0;R<v.length;R++){const N=ka(h,v[R],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=o.J?Pa(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Fn(),nf(o.i,o.v,o.B,o.l,o.S,o.u)}lt.prototype.ba=function(o){o=o.target;const c=this.O;c&&ft(o)==3?c.j():this.Y(o)},lt.prototype.Y=function(o){try{if(o==this.g)e:{const $=ft(this.g),de=this.g.ya(),J=this.g.ca();if(!($<3)&&($!=3||this.g&&(this.h.h||this.g.la()||fc(this.g)))){this.K||$!=4||de==7||(de==8||J<=0?Fn(3):Fn(2)),Ai(this);var c=this.g.ca();this.X=c;var h=cf(this);if(this.o=c==200,rf(this.i,this.v,this.B,this.l,this.S,$,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,v=this.g;if((f=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(f)){var R=f;break t}}R=null}if(o=R)un(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ri(this,o);else{this.o=!1,this.m=3,Pe(12),jt(this),$n(this);break e}}if(this.R){o=!0;let me;for(;!this.K&&this.C<h.length;)if(me=uf(this,h),me==wi){$==4&&(this.m=4,Pe(14),o=!1),un(this.i,this.l,null,"[Incomplete Response]");break}else if(me==Wa){this.m=4,Pe(15),un(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else un(this.i,this.l,me,null),Ri(this,me);if(Ka(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||h.length!=0||this.h.h||(this.m=1,Pe(16),o=!1),this.o=this.o&&o,!o)un(this.i,this.l,h,"[Invalid Chunked Response]"),jt(this),$n(this);else if(h.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Vi(N),N.P=!0,Pe(11))}}else un(this.i,this.l,h,null),Ri(this,h);$==4&&jt(this),this.o&&!this.K&&($==4?Tc(this.j,this):(this.o=!1,zr(this)))}else vf(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Pe(12)):(this.m=0,Pe(13)),jt(this),$n(this)}}}catch{}finally{}};function cf(o){if(!Ka(o))return o.g.la();const c=fc(o.g);if(c==="")return"";let h="";const f=c.length,v=ft(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return jt(o),$n(o),"";o.h.i=new a.TextDecoder}for(let R=0;R<f;R++)o.h.h=!0,h+=o.h.i.decode(c[R],{stream:!(v&&R==f-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function Ka(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function uf(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?wi:(h=Number(c.substring(h,f)),isNaN(h)?Wa:(f+=1,f+h>c.length?wi:(c=c.slice(f,f+h),o.C=f+h,c)))}lt.prototype.cancel=function(){this.K=!0,jt(this)};function zr(o){o.T=Date.now()+o.H,Qa(o,o.H)}function Qa(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Bn(d(o.aa,o),c)}function Ai(o){o.D&&(a.clearTimeout(o.D),o.D=null)}lt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(sf(this.i,this.B),this.M!=2&&(Fn(),Pe(17)),jt(this),this.m=2,$n(this)):Qa(this,this.T-o)};function $n(o){o.j.I==0||o.K||Tc(o.j,o)}function jt(o){Ai(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,Ma(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Ri(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||Si(h.h,o))){if(!o.L&&Si(h.h,o)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Xr(h),Kr(h);else break e;Di(h),Pe(18)}}else h.xa=v[1],0<h.xa-h.K&&v[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Bn(d(h.Va,h),6e3));Ja(h.h)<=1&&h.ta&&(h.ta=void 0)}else zt(h,11)}else if((o.L||h.g==o)&&Xr(h),!_(c))for(v=h.Ba.g.parse(c),c=0;c<v.length;c++){let J=v[c];const me=J[0];if(!(me<=h.K))if(h.K=me,J=J[1],h.I==2)if(J[0]=="c"){h.M=J[1],h.ba=J[2];const $e=J[3];$e!=null&&(h.ka=$e,h.j.info("VER="+h.ka));const Ht=J[4];Ht!=null&&(h.za=Ht,h.j.info("SVER="+h.za));const pt=J[5];pt!=null&&typeof pt=="number"&&pt>0&&(f=1.5*pt,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const mt=o.g;if(mt){const Jr=mt.g?mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jr){var R=f.h;R.g||Jr.indexOf("spdy")==-1&&Jr.indexOf("quic")==-1&&Jr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Pi(R,R.h),R.h=null))}if(f.G){const Oi=mt.g?mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Oi&&(f.wa=Oi,Z(f.J,f.G,Oi))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var N=o;if(f.na=vc(f,f.L?f.ba:null,f.W),N.L){Za(f.h,N);var $=N,de=f.O;de&&($.H=de),$.D&&(Ai($),zr($)),f.g=N}else yc(f);h.i.length>0&&Qr(h)}else J[0]!="stop"&&J[0]!="close"||zt(h,7);else h.I==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?zt(h,7):Ni(h):J[0]!="noop"&&h.l&&h.l.qa(J),h.A=0)}}Fn(4)}catch{}}var lf=class{constructor(o,c){this.g=o,this.map=c}};function Xa(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ya(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ja(o){return o.h?1:o.g?o.g.size:0}function Si(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Pi(o,c){o.g?o.g.add(c):o.h=c}function Za(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Xa.prototype.cancel=function(){if(this.i=ec(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ec(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return S(o.i)}var tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hf(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const f=o[h].indexOf("=");let v,R=null;f>=0?(v=o[h].substring(0,f),R=o[h].substring(f+1)):v=o[h],c(v,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ht(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof ht?(this.l=o.l,zn(this,o.j),this.o=o.o,this.g=o.g,Hn(this,o.u),this.h=o.h,bi(this,ac(o.i)),this.m=o.m):o&&(c=String(o).match(tc))?(this.l=!1,zn(this,c[1]||"",!0),this.o=Wn(c[2]||""),this.g=Wn(c[3]||"",!0),Hn(this,c[4]),this.h=Wn(c[5]||"",!0),bi(this,c[6]||"",!0),this.m=Wn(c[7]||"")):(this.l=!1,this.i=new Kn(null,this.l))}ht.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Gn(c,nc,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Gn(c,nc,!0),"@"),o.push(jn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Gn(h,h.charAt(0)=="/"?pf:ff,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Gn(h,gf)),o.join("")},ht.prototype.resolve=function(o){const c=je(this);let h=!!o.j;h?zn(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var f=o.h;if(h)Hn(c,o.u);else if(h=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var v=c.h.lastIndexOf("/");v!=-1&&(f=c.h.slice(0,v+1)+f)}if(v=f,v==".."||v==".")f="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){f=v.lastIndexOf("/",0)==0,v=v.split("/");const R=[];for(let N=0;N<v.length;){const $=v[N++];$=="."?f&&N==v.length&&R.push(""):$==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&N==v.length&&R.push("")):(R.push($),f=!0)}f=R.join("/")}else f=v}return h?c.h=f:h=o.i.toString()!=="",h?bi(c,ac(o.i)):h=!!o.m,h&&(c.m=o.m),c};function je(o){return new ht(o)}function zn(o,c,h){o.j=h?Wn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Hn(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function bi(o,c,h){c instanceof Kn?(o.i=c,_f(o.i,o.l)):(h||(c=Gn(c,mf)),o.i=new Kn(c,o.l))}function Z(o,c,h){o.i.set(c,h)}function Hr(o){return Z(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Wn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Gn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,df),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function df(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var nc=/[#\/\?@]/g,ff=/[#\?:]/g,pf=/[#\?]/g,mf=/[#\?@]/g,gf=/#/g;function Kn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function $t(o){o.g||(o.g=new Map,o.h=0,o.i&&hf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Kn.prototype,n.add=function(o,c){$t(this),this.i=null,o=ln(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function rc(o,c){$t(o),c=ln(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function sc(o,c){return $t(o),c=ln(o,c),o.g.has(c)}n.forEach=function(o,c){$t(this),this.g.forEach(function(h,f){h.forEach(function(v){o.call(c,v,f,this)},this)},this)};function ic(o,c){$t(o);let h=[];if(typeof c=="string")sc(o,c)&&(h=h.concat(o.g.get(ln(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}n.set=function(o,c){return $t(this),this.i=null,o=ln(this,o),sc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=ic(this,o),o.length>0?String(o[0]):c):c};function oc(o,c,h){rc(o,c),h.length>0&&(o.i=null,o.g.set(ln(o,c),S(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const v=jn(h);h=ic(this,h);for(let R=0;R<h.length;R++){let N=v;h[R]!==""&&(N+="="+jn(h[R])),o.push(N)}}return this.i=o.join("&")};function ac(o){const c=new Kn;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function ln(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function _f(o,c){c&&!o.j&&($t(o),o.i=null,o.g.forEach(function(h,f){const v=f.toLowerCase();f!=v&&(rc(this,f),oc(this,v,h))},o)),o.j=c}function yf(o,c){const h=new qn;if(a.Image){const f=new Image;f.onload=p(dt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=p(dt,h,"TestLoadImage: error",!1,c,f),f.onabort=p(dt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(dt,h,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function Ef(o,c){const h=new qn,f=new AbortController,v=setTimeout(()=>{f.abort(),dt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(v),R.ok?dt(h,"TestPingServer: ok",!0,c):dt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(v),dt(h,"TestPingServer: error",!1,c)})}function dt(o,c,h,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(h)}catch{}}function Tf(){this.g=new tf}function Ci(o){this.i=o.Sb||null,this.h=o.ab||!1}m(Ci,xa),Ci.prototype.g=function(){return new Wr(this.i,this.h)};function Wr(o,c){Ie.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Wr,Ie),n=Wr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Xn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qn(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;cc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function cc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Qn(this):Xn(this),this.readyState==3&&cc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Qn(this))},n.Na=function(o){this.g&&(this.response=o,Qn(this))},n.ga=function(){this.g&&Qn(this)};function Qn(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Xn(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Xn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function uc(o){let c="";return Fr(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function ki(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=uc(h),typeof o=="string"?h!=null&&jn(h):Z(o,c,h))}function se(o){Ie.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(se,Ie);var If=/^https?$/i,wf=["POST","PUT"];n=se.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():za.g(),this.g.onreadystatechange=E(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){lc(this,R);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)h.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),v=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(wf,c,void 0)>=0)||f||v||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,N]of h)this.g.setRequestHeader(R,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(R){lc(this,R)}};function lc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,hc(o),Gr(o)}function hc(o){o.A||(o.A=!0,Se(o,"complete"),Se(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Se(this,"complete"),Se(this,"abort"),Gr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gr(this,!0)),se.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?dc(this):this.Xa())},n.Xa=function(){dc(this)};function dc(o){if(o.h&&typeof i<"u"){if(o.v&&ft(o)==4)setTimeout(o.Ca.bind(o),0);else if(Se(o,"readystatechange"),ft(o)==4){o.h=!1;try{const R=o.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=R===0){let N=String(o.D).match(tc)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),f=!If.test(N?N.toLowerCase():"")}h=f}if(h)Se(o,"complete"),Se(o,"success");else{o.o=6;try{var v=ft(o)>2?o.g.statusText:""}catch{v=""}o.l=v+" ["+o.ca()+"]",hc(o)}}finally{Gr(o)}}}}function Gr(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||Se(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ft(o){return o.g?o.g.readyState:0}n.ca=function(){try{return ft(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),ef(c)}};function fc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function vf(o){const c={};o=(o.g&&ft(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(_(o[f]))continue;var h=af(o[f]);const v=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[v]||[];c[v]=R,R.push(h)}Kd(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function pc(o){this.za=0,this.i=[],this.j=new qn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Yn("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Yn("baseRetryDelayMs",5e3,o),this.Za=Yn("retryDelaySeedMs",1e4,o),this.Ta=Yn("forwardChannelMaxRetries",2,o),this.va=Yn("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Xa(o&&o.concurrentRequestLimit),this.Ba=new Tf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=pc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,h,f){Pe(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=vc(this,null,this.W),Qr(this)};function Ni(o){if(mc(o),o.I==3){var c=o.V++,h=je(o.J);if(Z(h,"SID",o.M),Z(h,"RID",c),Z(h,"TYPE","terminate"),Jn(o,h),c=new lt(o,o.j,c),c.M=2,c.A=Hr(je(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Ac(c.j,null),c.g.ea(c.A)),c.F=Date.now(),zr(c)}wc(o)}function Kr(o){o.g&&(Vi(o),o.g.cancel(),o.g=null)}function mc(o){Kr(o),o.v&&(a.clearTimeout(o.v),o.v=null),Xr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Qr(o){if(!Ya(o.h)&&!o.m){o.m=!0;var c=o.Ea;pe||g(),te||(pe(),te=!0),I.add(c,o),o.D=0}}function Af(o,c){return Ja(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Bn(d(o.Ea,o,c),Ic(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const v=new lt(this,this.j,o);let R=this.o;if(this.U&&(R?(R=Pa(R),Ca(R,this.U)):R=this.U),this.u!==null||this.R||(v.J=R,R=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=_c(this,v,c),h=je(this.J),Z(h,"RID",o),Z(h,"CVER",22),this.G&&Z(h,"X-HTTP-Session-Id",this.G),Jn(this,h),R&&(this.R?c="headers="+jn(uc(R))+"&"+c:this.u&&ki(h,this.u,R)),Pi(this.h,v),this.Ra&&Z(h,"TYPE","init"),this.S?(Z(h,"$req",c),Z(h,"SID","null"),v.U=!0,vi(v,h,null)):vi(v,h,c),this.I=2}}else this.I==3&&(o?gc(this,o):this.i.length==0||Ya(this.h)||gc(this))};function gc(o,c){var h;c?h=c.l:h=o.V++;const f=je(o.J);Z(f,"SID",o.M),Z(f,"RID",h),Z(f,"AID",o.K),Jn(o,f),o.u&&o.o&&ki(f,o.u,o.o),h=new lt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=_c(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Pi(o.h,h),vi(h,f,c)}function Jn(o,c){o.H&&Fr(o.H,function(h,f){Z(c,f,h)}),o.l&&Fr({},function(h,f){Z(c,f,h)})}function _c(o,c,h){h=Math.min(o.i.length,h);const f=o.l?d(o.l.Ka,o.l,o):null;e:{var v=o.i;let $=-1;for(;;){const de=["count="+h];$==-1?h>0?($=v[0].g,de.push("ofs="+$)):$=0:de.push("ofs="+$);let J=!0;for(let me=0;me<h;me++){var R=v[me].g;const $e=v[me].map;if(R-=$,R<0)$=Math.max(0,v[me].g-100),J=!1;else try{R="req"+R+"_"||"";try{var N=$e instanceof Map?$e:Object.entries($e);for(const[Ht,pt]of N){let mt=pt;u(pt)&&(mt=yi(pt)),de.push(R+Ht+"="+encodeURIComponent(mt))}}catch(Ht){throw de.push(R+"type="+encodeURIComponent("_badmap")),Ht}}catch{f&&f($e)}}if(J){N=de.join("&");break e}}N=void 0}return o=o.i.splice(0,h),c.G=o,N}function yc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;pe||g(),te||(pe(),te=!0),I.add(c,o),o.A=0}}function Di(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Bn(d(o.Da,o),Ic(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Ec(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Bn(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Pe(10),Kr(this),Ec(this))};function Vi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Ec(o){o.g=new lt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=je(o.na);Z(c,"RID","rpc"),Z(c,"SID",o.M),Z(c,"AID",o.K),Z(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&Z(c,"TO",o.ia),Z(c,"TYPE","xmlhttp"),Jn(o,c),o.u&&o.o&&ki(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Hr(je(c)),h.u=null,h.R=!0,Ga(h,o)}n.Va=function(){this.C!=null&&(this.C=null,Kr(this),Di(this),Pe(19))};function Xr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Tc(o,c){var h=null;if(o.g==c){Xr(o),Vi(o),o.g=null;var f=2}else if(Si(o.h,c))h=c.G,Za(o.h,c),f=1;else return;if(o.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var v=o.D;f=jr(),Se(f,new ja(f,h)),Qr(o)}else yc(o);else if(v=c.m,v==3||v==0&&c.X>0||!(f==1&&Af(o,c)||f==2&&Di(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),v){case 1:zt(o,5);break;case 4:zt(o,10);break;case 3:zt(o,6);break;default:zt(o,2)}}}function Ic(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function zt(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),f=o.Ua;const v=!f;f=new ht(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||zn(f,"https"),Hr(f),v?yf(f.toString(),h):Ef(f.toString(),h)}else Pe(2);o.I=0,o.l&&o.l.pa(c),wc(o),mc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function wc(o){if(o.I=0,o.ja=[],o.l){const c=ec(o.h);(c.length!=0||o.i.length!=0)&&(k(o.ja,c),k(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function vc(o,c,h){var f=h instanceof ht?je(h):new ht(h);if(f.g!="")c&&(f.g=c+"."+f.g),Hn(f,f.u);else{var v=a.location;f=v.protocol,c=c?c+"."+v.hostname:v.hostname,v=+v.port;const R=new ht(null);f&&zn(R,f),c&&(R.g=c),v&&Hn(R,v),h&&(R.h=h),f=R}return h=o.G,c=o.wa,h&&c&&Z(f,h,c),Z(f,"VER",o.ka),Jn(o,f),f}function Ac(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new se(new Ci({ab:h})):new se(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rc(){}n=Rc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Yr(){}Yr.prototype.g=function(o,c){return new De(o,c)};function De(o,c){Ie.call(this),this.g=new pc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!_(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new hn(this)}m(De,Ie),De.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){Ni(this.g)},De.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=yi(o),o=h);c.i.push(new lf(c.Ya++,o)),c.I==3&&Qr(c)},De.prototype.N=function(){this.g.l=null,delete this.j,Ni(this.g),delete this.g,De.Z.N.call(this)};function Sc(o){Ei.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}m(Sc,Ei);function Pc(){Ti.call(this),this.status=1}m(Pc,Ti);function hn(o){this.g=o}m(hn,Rc),hn.prototype.ra=function(){Se(this.g,"a")},hn.prototype.qa=function(o){Se(this.g,new Sc(o))},hn.prototype.pa=function(o){Se(this.g,new Pc)},hn.prototype.oa=function(){Se(this.g,"b")},Yr.prototype.createWebChannel=Yr.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,oh=function(){return new Yr},ih=function(){return jr()},sh=qt,ro={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},$r.NO_ERROR=0,$r.TIMEOUT=8,$r.HTTP_ERROR=6,hs=$r,$a.COMPLETE="complete",rh=$a,Ua.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",Ie.prototype.listen=Ie.prototype.J,nr=Ua,se.prototype.listenOnce=se.prototype.K,se.prototype.getLastError=se.prototype.Ha,se.prototype.getLastErrorCode=se.prototype.ya,se.prototype.getStatus=se.prototype.ca,se.prototype.getResponseJson=se.prototype.La,se.prototype.getResponseText=se.prototype.la,se.prototype.send=se.prototype.ea,se.prototype.setWithCredentials=se.prototype.Fa,nh=se}).apply(typeof es<"u"?es:typeof self<"u"?self:typeof window<"u"?window:{});const iu="@firebase/firestore",ou="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ve.UNAUTHENTICATED=new ve(null),ve.GOOGLE_CREDENTIALS=new ve("google-credentials-uid"),ve.FIRST_PARTY=new ve("first-party-uid"),ve.MOCK_USER=new ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new vo("@firebase/firestore");function dn(){return tn.logLevel}function O(n,...e){if(tn.logLevel<=z.DEBUG){const t=e.map(Oo);tn.debug(`Firestore (${Cn}): ${n}`,...t)}}function at(n,...e){if(tn.logLevel<=z.ERROR){const t=e.map(Oo);tn.error(`Firestore (${Cn}): ${n}`,...t)}}function wn(n,...e){if(tn.logLevel<=z.WARN){const t=e.map(Oo);tn.warn(`Firestore (${Cn}): ${n}`,...t)}}function Oo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ah(n,r,t)}function ah(n,e,t){let r=`FIRESTORE (${Cn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw at(r),new Error(r)}function K(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ah(e,s,r)}function F(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends et{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class w_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ve.UNAUTHENTICATED)))}shutdown(){}}class v_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class A_{constructor(e){this.t=e,this.currentUser=ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){K(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Qe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qe,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},u=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>u(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qe)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new ch(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string",2055,{h:e}),new ve(e)}}class R_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ve.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class S_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new R_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ve.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class au{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ve(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){K(this.o===void 0,3512);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new au(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(K(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new au(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=b_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function so(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return ji(s)===ji(i)?H(s,i):ji(s)?1:-1}return H(n.length,e.length)}const C_=55296,k_=57343;function ji(n){const e=n.charCodeAt(0);return e>=C_&&e<=k_}function vn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="__name__";class ze{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&M(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ze?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ze.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return H(e.length,t.length)}static compareSegments(e,t){const r=ze.isNumericId(e),s=ze.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ze.extractNumericId(e).compare(ze.extractNumericId(t)):so(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return St.fromString(e.substring(4,e.length-2))}}class Y extends ze{construct(e,t,r){return new Y(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Y(t)}static emptyPath(){return new Y([])}}const N_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends ze{construct(e,t,r){return new Ee(e,t,r)}static isValidIdentifier(e){return N_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cu}static keyField(){return new Ee([cu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new D(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new D(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(i(),s++)}if(i(),a)throw new D(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(Y.fromString(e))}static fromName(e){return new L(Y.fromString(e).popFirst(5))}static empty(){return new L(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new Y(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(n,e,t){if(!t)throw new D(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function D_(n,e,t,r){if(e===!0&&r===!0)throw new D(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function uu(n){if(!L.isDocumentKey(n))throw new D(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function lu(n){if(L.isDocumentKey(n))throw new D(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function lh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Ae(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zs(n);throw new D(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function V_(n,e){if(e<=0)throw new D(P.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n,e){const t={typeString:n};return e&&(t.value=e),t}function Cr(n,e){if(!lh(n))throw new D(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new D(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=-62135596800,du=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*du);return new ee(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hu)throw new D(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/du}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Cr(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:he("string",ee._jsonSchemaVersion),seconds:he("number"),nanoseconds:he("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static fromTimestamp(e){return new x(e)}static min(){return new x(new ee(0,0))}static max(){return new x(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=-1;function O_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=x.fromTimestamp(r===1e9?new ee(t+1,0):new ee(t,r));return new kt(s,L.empty(),e)}function L_(n){return new kt(n.readTime,n.key,mr)}class kt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new kt(x.min(),L.empty(),mr)}static max(){return new kt(x.max(),L.empty(),mr)}}function M_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class U_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==x_)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):b.reject(t)}static resolve(e){return new b(((t,r)=>{t(e)}))}static reject(e){return new b(((t,r)=>{r(e)}))}static waitFor(e){return new b(((t,r)=>{let s=0,i=0,a=!1;e.forEach((u=>{++s,u.next((()=>{++i,a&&i===s&&t()}),(l=>r(l)))})),a=!0,i===s&&t()}))}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next((s=>s?b.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new b(((r,s)=>{const i=e.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next((p=>{a[d]=p,++u,u===i&&r(a)}),(p=>s(p)))}}))}static doWhile(e,t){return new b(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function F_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Nn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Hs.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=-1;function kr(n){return n==null}function Rs(n){return n===0&&1/n==-1/0}function B_(n){return typeof n=="number"&&Number.isInteger(n)&&!Rs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="";function q_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=fu(e)),e=j_(n.get(t),e);return fu(e)}function j_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case hh:t+="";break;default:t+=i}}return t}function fu(n){return n+hh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ut(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ts(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ts(this.root,e,this.comparator,!1)}getReverseIterator(){return new ts(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ts(this.root,e,this.comparator,!0)}}class ts{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ye.RED,this.left=s??ye.EMPTY,this.right=i??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ye(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new mu(this.data.getIterator())}getIteratorFrom(e){return new mu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class mu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Le([])}unionWith(e){let t=new fe(Ee.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fh("Invalid base64 string: "+i):i}})(e);return new Te(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const $_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(n){if(K(!!n,39018),typeof n=="string"){let e=0;const t=$_.exec(n);if(K(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Dt(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="server_timestamp",mh="__type__",gh="__previous_value__",_h="__local_write_time__";function xo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[mh])==null?void 0:r.stringValue)===ph}function Ws(n){const e=n.mapValue.fields[gh];return xo(e)?Ws(e):e}function gr(n){const e=Nt(n.mapValue.fields[_h].timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t,r,s,i,a,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p}}const Ss="(default)";class _r{constructor(e,t){this.projectId=e,this.database=t||Ss}static empty(){return new _r("","")}get isDefaultDatabase(){return this.database===Ss}isEqual(e){return e instanceof _r&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="__type__",H_="__max__",ns={mapValue:{}},Eh="__vector__",Ps="value";function Vt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xo(n)?4:G_(n)?9007199254740991:W_(n)?10:11:M(28295,{value:n})}function Ze(n,e){if(n===e)return!0;const t=Vt(n);if(t!==Vt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gr(n).isEqual(gr(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Nt(s.timestampValue),u=Nt(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Dt(s.bytesValue).isEqual(Dt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return ae(s.geoPointValue.latitude)===ae(i.geoPointValue.latitude)&&ae(s.geoPointValue.longitude)===ae(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ae(s.integerValue)===ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ae(s.doubleValue),u=ae(i.doubleValue);return a===u?Rs(a)===Rs(u):isNaN(a)&&isNaN(u)}return!1})(n,e);case 9:return vn(n.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(pu(a)!==pu(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Ze(a[l],u[l])))return!1;return!0})(n,e);default:return M(52216,{left:n})}}function yr(n,e){return(n.values||[]).find((t=>Ze(t,e)))!==void 0}function An(n,e){if(n===e)return 0;const t=Vt(n),r=Vt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const u=ae(i.integerValue||i.doubleValue),l=ae(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1})(n,e);case 3:return gu(n.timestampValue,e.timestampValue);case 4:return gu(gr(n),gr(e));case 5:return so(n.stringValue,e.stringValue);case 6:return(function(i,a){const u=Dt(i),l=Dt(a);return u.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const p=H(u[d],l[d]);if(p!==0)return p}return H(u.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const u=H(ae(i.latitude),ae(a.latitude));return u!==0?u:H(ae(i.longitude),ae(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return _u(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var E,S,k,V;const u=i.fields||{},l=a.fields||{},d=(E=u[Ps])==null?void 0:E.arrayValue,p=(S=l[Ps])==null?void 0:S.arrayValue,m=H(((k=d==null?void 0:d.values)==null?void 0:k.length)||0,((V=p==null?void 0:p.values)==null?void 0:V.length)||0);return m!==0?m:_u(d,p)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===ns.mapValue&&a===ns.mapValue)return 0;if(i===ns.mapValue)return 1;if(a===ns.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let m=0;m<l.length&&m<p.length;++m){const E=so(l[m],p[m]);if(E!==0)return E;const S=An(u[l[m]],d[p[m]]);if(S!==0)return S}return H(l.length,p.length)})(n.mapValue,e.mapValue);default:throw M(23264,{he:t})}}function gu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=Nt(n),r=Nt(e),s=H(t.seconds,r.seconds);return s!==0?s:H(t.nanos,r.nanos)}function _u(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=An(t[s],r[s]);if(i)return i}return H(t.length,r.length)}function Rn(n){return io(n)}function io(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Nt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Dt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return L.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=io(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${io(t.fields[a])}`;return s+"}"})(n.mapValue):M(61005,{value:n})}function ds(n){switch(Vt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ws(n);return e?16+ds(e):16;case 5:return 2*n.stringValue.length;case 6:return Dt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ds(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ut(r.fields,((i,a)=>{s+=i.length+ds(a)})),s})(n.mapValue);default:throw M(13486,{value:n})}}function yu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function oo(n){return!!n&&"integerValue"in n}function Uo(n){return!!n&&"arrayValue"in n}function Eu(n){return!!n&&"nullValue"in n}function Tu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fs(n){return!!n&&"mapValue"in n}function W_(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[yh])==null?void 0:r.stringValue)===Eh}function ar(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ut(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ar(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ar(n.arrayValue.values[t]);return e}return{...n}}function G_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===H_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.value=e}static empty(){return new Ce({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!fs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ar(t)}setAll(e){let t=Ee.emptyPath(),r={},s=[];e.forEach(((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=ar(a):s.push(u.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());fs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];fs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ut(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Ce(ar(this.value))}}function Th(n){const e=[];return Ut(n.fields,((t,r)=>{const s=new Ee([t]);if(fs(r)){const i=Th(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Le(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t,r,s,i,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(e){return new _e(e,0,x.min(),x.min(),x.min(),Ce.empty(),0)}static newFoundDocument(e,t,r,s){return new _e(e,1,t,x.min(),r,s,0)}static newNoDocument(e,t){return new _e(e,2,t,x.min(),x.min(),Ce.empty(),0)}static newUnknownDocument(e,t){return new _e(e,3,t,x.min(),x.min(),Ce.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t){this.position=e,this.inclusive=t}}function Iu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=An(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ze(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t="asc"){this.field=e,this.dir=t}}function K_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{}class ue extends Ih{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new X_(e,t,r):t==="array-contains"?new Z_(e,r):t==="in"?new ey(e,r):t==="not-in"?new ty(e,r):t==="array-contains-any"?new ny(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Y_(e,r):new J_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(An(t,this.value)):t!==null&&Vt(this.value)===Vt(t)&&this.matchesComparison(An(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends Ih{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Be(e,t)}matches(e){return wh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function wh(n){return n.op==="and"}function vh(n){return Q_(n)&&wh(n)}function Q_(n){for(const e of n.filters)if(e instanceof Be)return!1;return!0}function ao(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+Rn(n.value);if(vh(n))return n.filters.map((e=>ao(e))).join(",");{const e=n.filters.map((t=>ao(t))).join(",");return`${n.op}(${e})`}}function Ah(n,e){return n instanceof ue?(function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&Ze(r.value,s.value)})(n,e):n instanceof Be?(function(r,s){return s instanceof Be&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,u)=>i&&Ah(a,s.filters[u])),!0):!1})(n,e):void M(19439)}function Rh(n){return n instanceof ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${Rn(t.value)}`})(n):n instanceof Be?(function(t){return t.op.toString()+" {"+t.getFilters().map(Rh).join(" ,")+"}"})(n):"Filter"}class X_ extends ue{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Y_ extends ue{constructor(e,t){super(e,"in",t),this.keys=Sh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class J_ extends ue{constructor(e,t){super(e,"not-in",t),this.keys=Sh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Sh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>L.fromName(r.referenceValue)))}class Z_ extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Uo(t)&&yr(t.arrayValue,this.value)}}class ey extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yr(this.value.arrayValue,t)}}class ty extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!yr(this.value.arrayValue,t)}}class ny extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Uo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>yr(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t=null,r=[],s=[],i=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Te=null}}function vu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new ry(n,e,t,r,s,i,a)}function Fo(n){const e=F(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>ao(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),kr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Rn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Rn(r))).join(",")),e.Te=t}return e.Te}function Bo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!K_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ah(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wu(n.startAt,e.startAt)&&wu(n.endAt,e.endAt)}function co(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t=null,r=[],s=[],i=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function sy(n,e,t,r,s,i,a,u){return new Dn(n,e,t,r,s,i,a,u)}function Gs(n){return new Dn(n)}function Au(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ph(n){return n.collectionGroup!==null}function cr(n){const e=F(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new fe(Ee.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Er(i,r))})),t.has(Ee.keyField().canonicalString())||e.Ie.push(new Er(Ee.keyField(),r))}return e.Ie}function Xe(n){const e=F(n);return e.Ee||(e.Ee=iy(e,cr(n))),e.Ee}function iy(n,e){if(n.limitType==="F")return vu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Er(s.field,i)}));const t=n.endAt?new bs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new bs(n.startAt.position,n.startAt.inclusive):null;return vu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function uo(n,e){const t=n.filters.concat([e]);return new Dn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Cs(n,e,t){return new Dn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ks(n,e){return Bo(Xe(n),Xe(e))&&n.limitType===e.limitType}function bh(n){return`${Fo(Xe(n))}|lt:${n.limitType}`}function fn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Rh(s))).join(", ")}]`),kr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Rn(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Rn(s))).join(",")),`Target(${r})`})(Xe(n))}; limitType=${n.limitType})`}function Qs(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):L.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of cr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,u,l){const d=Iu(a,u,l);return a.inclusive?d<=0:d<0})(r.startAt,cr(r),s)||r.endAt&&!(function(a,u,l){const d=Iu(a,u,l);return a.inclusive?d>=0:d>0})(r.endAt,cr(r),s))})(n,e)}function oy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ch(n){return(e,t)=>{let r=!1;for(const s of cr(n)){const i=ay(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ay(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):(function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?An(l,d):M(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ut(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return dh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new re(L.comparator);function ct(){return cy}const kh=new re(L.comparator);function rr(...n){let e=kh;for(const t of n)e=e.insert(t.key,t);return e}function Nh(n){let e=kh;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Gt(){return ur()}function Dh(){return ur()}function ur(){return new an((n=>n.toString()),((n,e)=>n.isEqual(e)))}const uy=new re(L.comparator),ly=new fe(L.comparator);function W(...n){let e=ly;for(const t of n)e=e.add(t);return e}const hy=new fe(H);function dy(){return hy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rs(e)?"-0":e}}function Vh(n){return{integerValue:""+n}}function Oh(n,e){return B_(e)?Vh(e):qo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this._=void 0}}function fy(n,e,t){return n instanceof ks?(function(s,i){const a={fields:{[mh]:{stringValue:ph},[_h]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&xo(i)&&(i=Ws(i)),i&&(a.fields[gh]=i),{mapValue:a}})(t,e):n instanceof Tr?Mh(n,e):n instanceof Ir?xh(n,e):(function(s,i){const a=Lh(s,i),u=Ru(a)+Ru(s.Ae);return oo(a)&&oo(s.Ae)?Vh(u):qo(s.serializer,u)})(n,e)}function py(n,e,t){return n instanceof Tr?Mh(n,e):n instanceof Ir?xh(n,e):t}function Lh(n,e){return n instanceof wr?(function(r){return oo(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ks extends Xs{}class Tr extends Xs{constructor(e){super(),this.elements=e}}function Mh(n,e){const t=Uh(e);for(const r of n.elements)t.some((s=>Ze(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Ir extends Xs{constructor(e){super(),this.elements=e}}function xh(n,e){let t=Uh(e);for(const r of n.elements)t=t.filter((s=>!Ze(s,r)));return{arrayValue:{values:t}}}class wr extends Xs{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ru(n){return ae(n.integerValue||n.doubleValue)}function Uh(n){return Uo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,t){this.field=e,this.transform=t}}function gy(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Tr&&s instanceof Tr||r instanceof Ir&&s instanceof Ir?vn(r.elements,s.elements,Ze):r instanceof wr&&s instanceof wr?Ze(r.Ae,s.Ae):r instanceof ks&&s instanceof ks})(n.transform,e.transform)}class _y{constructor(e,t){this.version=e,this.transformResults=t}}class le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new le}static exists(e){return new le(void 0,e)}static updateTime(e){return new le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ps(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ys{}function Fh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Dr(n.key,le.none()):new Nr(n.key,n.data,le.none());{const t=n.data,r=Ce.empty();let s=new fe(Ee.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Ft(n.key,r,new Le(s.toArray()),le.none())}}function yy(n,e,t){n instanceof Nr?(function(s,i,a){const u=s.value.clone(),l=Pu(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):n instanceof Ft?(function(s,i,a){if(!ps(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Pu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Bh(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function lr(n,e,t,r){return n instanceof Nr?(function(i,a,u,l){if(!ps(i.precondition,a))return u;const d=i.value.clone(),p=bu(i.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof Ft?(function(i,a,u,l){if(!ps(i.precondition,a))return u;const d=bu(i.fieldTransforms,l,a),p=a.data;return p.setAll(Bh(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(n,e,t,r):(function(i,a,u){return ps(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(n,e,t)}function Ey(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Lh(r.transform,s||null);i!=null&&(t===null&&(t=Ce.empty()),t.set(r.field,i))}return t||null}function Su(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&vn(r,s,((i,a)=>gy(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Nr extends Ys{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ft extends Ys{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Pu(n,e,t){const r=new Map;K(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,u=e.data.field(i.field);r.set(i.field,py(a,u,t[s]))}return r}function bu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,fy(i,a,e))}return r}class Dr extends Ys{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qh extends Ys{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yy(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=lr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=lr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Dh();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=t.has(s.key)?null:u;const l=Fh(a,u);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(x.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),W())}isEqual(e){return this.batchId===e.batchId&&vn(this.mutations,e.mutations,((t,r)=>Su(t,r)))&&vn(this.baseMutations,e.baseMutations,((t,r)=>Su(t,r)))}}class jo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){K(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return uy})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new jo(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,G;function jh(n){switch(n){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function $h(n){if(n===void 0)return at("GRPC error has no .code"),P.UNKNOWN;switch(n){case ce.OK:return P.OK;case ce.CANCELLED:return P.CANCELLED;case ce.UNKNOWN:return P.UNKNOWN;case ce.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ce.INTERNAL:return P.INTERNAL;case ce.UNAVAILABLE:return P.UNAVAILABLE;case ce.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ce.NOT_FOUND:return P.NOT_FOUND;case ce.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ce.ABORTED:return P.ABORTED;case ce.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ce.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:n})}}(G=ce||(ce={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new St([4294967295,4294967295],0);function Cu(n){const e=vy().encode(n),t=new th;return t.update(e),new Uint8Array(t.digest())}function ku(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new St([t,r],0),new St([s,i],0)]}class $o{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new sr(`Invalid padding: ${t}`);if(r<0)throw new sr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new sr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new sr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=St.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(St.fromNumber(r)));return s.compare(Ay)===1&&(s=new St([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Cu(e),[r,s]=ku(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new $o(i,s,t);return r.forEach((u=>a.insert(u))),a}insert(e){if(this.ge===0)return;const t=Cu(e),[r,s]=ku(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class sr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Vr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Js(x.min(),s,new re(H),ct(),W())}}class Vr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Vr(r,t,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class zh{constructor(e,t){this.targetId=e,this.Ce=t}}class Hh{constructor(e,t,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Nu{constructor(){this.ve=0,this.Fe=Du(),this.Me=Te.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=W(),t=W(),r=W();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:M(38017,{changeType:i})}})),new Vr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Du()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Ry{constructor(e){this.Ge=e,this.ze=new Map,this.je=ct(),this.Je=rs(),this.He=rs(),this.Ye=new re(H)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:M(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(co(i))if(r===0){const a=new L(i.path);this.et(t,a,_e.newNoDocument(a,x.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const u=this.ut(e),l=u?this.ct(u,e,a):1;if(l!==0){this.it(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,u;try{a=Dt(r).toUint8Array()}catch(l){if(l instanceof fh)return wn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new $o(a,s,i)}catch(l){return wn(l instanceof sr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.ge===0?null:u}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const u=this.ot(a);if(u){if(i.current&&co(u.target)){const l=new L(u.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,_e.newNoDocument(l,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let r=W();this.He.forEach(((i,a)=>{let u=!0;a.forEachWhile((l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new Js(e,t,this.Ye,this.je,r);return this.je=ct(),this.Je=rs(),this.He=rs(),this.Ye=new re(H),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Nu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new fe(H),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new fe(H),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Nu),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function rs(){return new re(L.comparator)}function Du(){return new re(L.comparator)}const Sy={asc:"ASCENDING",desc:"DESCENDING"},Py={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},by={and:"AND",or:"OR"};class Cy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lo(n,e){return n.useProto3Json||kr(e)?e:{value:e}}function Ns(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ky(n,e){return Ns(n,e.toTimestamp())}function xe(n){return K(!!n,49232),x.fromTimestamp((function(t){const r=Nt(t);return new ee(r.seconds,r.nanos)})(n))}function zo(n,e){return ho(n,e).canonicalString()}function ho(n,e){const t=(function(s){return new Y(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Gh(n){const e=Y.fromString(n);return K(Zh(e),10190,{key:e.toString()}),e}function Ds(n,e){return zo(n.databaseId,e.path)}function hr(n,e){const t=Gh(e);if(t.get(1)!==n.databaseId.projectId)throw new D(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new D(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Qh(t))}function Kh(n,e){return zo(n.databaseId,e)}function Ny(n){const e=Gh(n);return e.length===4?Y.emptyPath():Qh(e)}function fo(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qh(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Vu(n,e,t){return{name:Ds(n,e),fields:t.value.mapValue.fields}}function Dy(n,e){return"found"in e?(function(r,s){K(!!s.found,43571),s.found.name,s.found.updateTime;const i=hr(r,s.found.name),a=xe(s.found.updateTime),u=s.found.createTime?xe(s.found.createTime):x.min(),l=new Ce({mapValue:{fields:s.found.fields}});return _e.newFoundDocument(i,a,u,l)})(n,e):"missing"in e?(function(r,s){K(!!s.missing,3894),K(!!s.readTime,22933);const i=hr(r,s.missing),a=xe(s.readTime);return _e.newNoDocument(i,a)})(n,e):M(7234,{result:e})}function Vy(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,p){return d.useProto3Json?(K(p===void 0||typeof p=="string",58123),Te.fromBase64String(p||"")):(K(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Te.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&(function(d){const p=d.code===void 0?P.UNKNOWN:$h(d.code);return new D(p,d.message||"")})(a);t=new Hh(r,s,i,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=hr(n,r.document.name),i=xe(r.document.updateTime),a=r.document.createTime?xe(r.document.createTime):x.min(),u=new Ce({mapValue:{fields:r.document.fields}}),l=_e.newFoundDocument(s,i,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new ms(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=hr(n,r.document),i=r.readTime?xe(r.readTime):x.min(),a=_e.newNoDocument(s,i),u=r.removedTargetIds||[];t=new ms([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=hr(n,r.document),i=r.removedTargetIds||[];t=new ms([],i,s,null)}else{if(!("filter"in e))return M(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new wy(s,i),u=r.targetId;t=new zh(u,a)}}return t}function Xh(n,e){let t;if(e instanceof Nr)t={update:Vu(n,e.key,e.value)};else if(e instanceof Dr)t={delete:Ds(n,e.key)};else if(e instanceof Ft)t={update:Vu(n,e.key,e.data),updateMask:jy(e.fieldMask)};else{if(!(e instanceof qh))return M(16599,{Vt:e.type});t={verify:Ds(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const u=a.transform;if(u instanceof ks)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Tr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ir)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof wr)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw M(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:ky(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M(27497)})(n,e.precondition)),t}function Oy(n,e){return n&&n.length>0?(K(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?xe(s.updateTime):xe(i);return a.isEqual(x.min())&&(a=xe(i)),new _y(a,s.transformResults||[])})(t,e)))):[]}function Ly(n,e){return{documents:[Kh(n,e.path)]}}function My(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Kh(n,s);const i=(function(d){if(d.length!==0)return Jh(Be.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((p=>(function(E){return{field:pn(E.field),direction:Fy(E.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=lo(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function xy(n){let e=Ny(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){K(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=(function(m){const E=Yh(m);return E instanceof Be&&vh(E)?E.getFilters():[E]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((E=>(function(k){return new Er(mn(k.field),(function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(E)))})(t.orderBy));let u=null;t.limit&&(u=(function(m){let E;return E=typeof m=="object"?m.value:m,kr(E)?null:E})(t.limit));let l=null;t.startAt&&(l=(function(m){const E=!!m.before,S=m.values||[];return new bs(S,E)})(t.startAt));let d=null;return t.endAt&&(d=(function(m){const E=!m.before,S=m.values||[];return new bs(S,E)})(t.endAt)),sy(e,s,a,i,u,"F",l,d)}function Uy(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yh(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=mn(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=mn(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mn(t.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=mn(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ue.create(mn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Be.create(t.compositeFilter.filters.map((r=>Yh(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(t.compositeFilter.op))})(n):M(30097,{filter:n})}function Fy(n){return Sy[n]}function By(n){return Py[n]}function qy(n){return by[n]}function pn(n){return{fieldPath:n.canonicalString()}}function mn(n){return Ee.fromServerFormat(n.fieldPath)}function Jh(n){return n instanceof ue?(function(t){if(t.op==="=="){if(Tu(t.value))return{unaryFilter:{field:pn(t.field),op:"IS_NAN"}};if(Eu(t.value))return{unaryFilter:{field:pn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tu(t.value))return{unaryFilter:{field:pn(t.field),op:"IS_NOT_NAN"}};if(Eu(t.value))return{unaryFilter:{field:pn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pn(t.field),op:By(t.op),value:t.value}}})(n):n instanceof Be?(function(t){const r=t.getFilters().map((s=>Jh(s)));return r.length===1?r[0]:{compositeFilter:{op:qy(t.op),filters:r}}})(n):M(54877,{filter:n})}function jy(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Zh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t,r,s,i=x.min(),a=x.min(),u=Te.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.yt=e}}function zy(n){const e=xy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Cs(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.Cn=new Wy}addToCollectionParentIndex(e,t){return this.Cn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(kt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(kt.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class Wy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new fe(Y.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new fe(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ed=41943040;class Ne{static withCacheSize(e){return new Ne(e,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(ed,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Sn(0)}static cr(){return new Sn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="LruGarbageCollector",Gy=1048576;function Mu([n,e],[t,r]){const s=H(n,t);return s===0?H(e,r):s}class Ky{constructor(e){this.Ir=e,this.buffer=new fe(Mu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Mu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Qy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){O(Lu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Nn(t)?O(Lu,"Ignoring IndexedDB error during garbage collection: ",t):await kn(t)}await this.Vr(3e5)}))}}class Xy{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Hs.ce);const r=new Ky(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Ou)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ou):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,u,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(r=m,u=Date.now(),this.removeTargets(e,r,t)))).next((m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((m=>(d=Date.now(),dn()<=z.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${m} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function Yy(n,e){return new Xy(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.changes=new an((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_e.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&lr(r.mutation,s,Le.empty(),ee.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,W()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=W()){const s=Gt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=rr();return i.forEach(((u,l)=>{a=a.insert(u,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Gt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,W())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,u)=>{t.set(a,u)}))}))}computeViews(e,t,r,s){let i=ct();const a=ur(),u=(function(){return ur()})();return t.forEach(((l,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Ft)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),lr(p.mutation,d,p.mutation.getFieldMask(),ee.now())):a.set(d.key,Le.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((d,p)=>a.set(d,p))),t.forEach(((d,p)=>u.set(d,new Zy(p,a.get(d)??null)))),u)))}recalculateAndSaveOverlays(e,t){const r=ur();let s=new re(((a,u)=>a-u)),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const u of a)u.keys().forEach((l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||Le.empty();p=u.applyToLocalView(d,p),r.set(l,p);const m=(s.get(u.batchId)||W()).add(l);s=s.insert(u.batchId,m)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,p=l.value,m=Dh();p.forEach((E=>{if(!i.has(E)){const S=Fh(t.get(E),r.get(E));S!==null&&m.set(E,S),i=i.add(E)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return b.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ph(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):b.resolve(Gt());let u=mr,l=i;return a.next((d=>b.forEach(d,((p,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),i.get(p)?b.resolve():this.remoteDocumentCache.getEntry(e,p).next((E=>{l=l.insert(p,E)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,l,d,W()))).next((p=>({batchId:u,changes:Nh(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next((r=>{let s=rr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=rr();return this.indexManager.getCollectionParents(e,i).next((u=>b.forEach(u,(l=>{const d=(function(m,E){return new Dn(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((p=>{p.forEach(((m,E)=>{a=a.insert(m,E)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,_e.newInvalidDocument(p)))}));let u=rr();return a.forEach(((l,d)=>{const p=i.get(l);p!==void 0&&lr(p.mutation,d,Le.empty(),ee.now()),Qs(t,d)&&(u=u.insert(l,d))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return b.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:xe(s.createTime)}})(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:zy(s.bundledQuery),readTime:xe(s.readTime)}})(t)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.overlays=new re(L.comparator),this.qr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Gt();return b.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),b.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const s=Gt(),i=t.length+1,a=new L(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return b.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new re(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=Gt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Gt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,p)=>u.set(d,p))),!(u.size()>=s)););return b.resolve(u)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Iy(t,r));let i=this.qr.get(t);i===void 0&&(i=W(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.Qr=new fe(ge.$r),this.Ur=new fe(ge.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new ge(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new ge(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new L(new Y([])),r=new ge(t,e),s=new ge(t,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new L(new Y([])),r=new ge(t,e),s=new ge(t,e+1);let i=W();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new ge(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return L.comparator(e.key,t.key)||H(e.Yr,t.Yr)}static Kr(e,t){return H(e.Yr,t.Yr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new fe(ge.$r)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ty(i,t,r,s);this.mutationQueue.push(a);for(const u of s)this.Zr=this.Zr.add(new ge(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Mo:this.tr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),s=new ge(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const u=this.Xr(a.Yr);i.push(u)})),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(H);return t.forEach((s=>{const i=new ge(s,0),a=new ge(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(u=>{r=r.add(u.Yr)}))})),b.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;L.isDocumentKey(i)||(i=i.child(""));const a=new ge(new L(i),0);let u=new fe(H);return this.Zr.forEachWhile((l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Yr)),!0)}),a),b.resolve(this.ti(u))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){K(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return b.forEach(t.mutations,(s=>{const i=new ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new ge(t,0),s=this.Zr.firstAfterOrEqual(r);return b.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.ri=e,this.docs=(function(){return new re(L.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():_e.newInvalidDocument(t))}getEntries(e,t){let r=ct();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_e.newInvalidDocument(s))})),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ct();const a=t.path,u=new L(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||M_(L_(p),r)<=0||(s.has(p.key)||Qs(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,t,r,s){M(9500)}ii(e,t){return b.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new oE(this)}getSize(e){return b.resolve(this.size)}}class oE extends Jy{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),b.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this.persistence=e,this.si=new an((t=>Fo(t)),Bo),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.oi=0,this._i=new Ho,this.targetCount=0,this.ai=Sn.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),b.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Sn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Pr(t),b.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach(((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)})),b.waitFor(i).next((()=>s))}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),b.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),b.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t){this.ui={},this.overlays={},this.ci=new Hs(0),this.li=!1,this.li=!0,this.hi=new rE,this.referenceDelegate=e(this),this.Pi=new aE(this),this.indexManager=new Hy,this.remoteDocumentCache=(function(s){return new iE(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new $y(t),this.Ii=new tE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new sE(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new cE(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return b.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class cE extends U_{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.Ri=new Ho,this.Vi=null}static mi(e){return new Wo(e)}get fi(){if(this.Vi)return this.Vi;throw M(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),b.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,(r=>{const s=L.fromPath(r);return this.gi(e,s).next((i=>{i||t.removeEntry(s,x.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return b.or([()=>b.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Vs{constructor(e,t){this.persistence=e,this.pi=new an((r=>q_(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Yy(this,t)}static mi(e,t){return new Vs(e,t)}Ei(){}di(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return b.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?b.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,t).next((u=>{u||(r++,i.removeEntry(a,x.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),b.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ds(e.data.value)),t}br(e,t,r){return b.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return b.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Go(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return jf()?8:F_(Re())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new uE;return this.Ss(e,t,a).next((u=>{if(i.result=u,this.Vs)return this.bs(e,t,a,u.size)}))})).next((()=>i.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(dn()<=z.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",fn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(dn()<=z.DEBUG&&O("QueryEngine","Query:",fn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(dn()<=z.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",fn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xe(t))):b.resolve())}ys(e,t){if(Au(t))return b.resolve(null);let r=Xe(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Cs(t,null,"F"),r=Xe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=W(...i);return this.ps.getDocuments(e,a).next((u=>this.indexManager.getMinOffset(e,r).next((l=>{const d=this.Ds(t,u);return this.Cs(t,d,a,l.readTime)?this.ys(e,Cs(t,null,"F")):this.vs(e,d,t,l)}))))})))))}ws(e,t,r,s){return Au(t)||s.isEqual(x.min())?b.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?b.resolve(null):(dn()<=z.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fn(t)),this.vs(e,a,t,O_(s,mr)).next((u=>u)))}))}Ds(e,t){let r=new fe(Ch(e));return t.forEach(((s,i)=>{Qs(e,i)&&(r=r.add(i))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return dn()<=z.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",fn(t)),this.ps.getDocumentsMatchingQuery(e,t,kt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="LocalStore",hE=3e8;class dE{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new re(H),this.xs=new an((i=>Fo(i)),Bo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eE(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function fE(n,e,t,r){return new dE(n,e,t,r)}async function nd(n,e){const t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],u=[];let l=W();for(const d of s){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of i){u.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function pE(n,e){const t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(u,l,d,p){const m=d.batch,E=m.keys();let S=b.resolve();return E.forEach((k=>{S=S.next((()=>p.getEntry(l,k))).next((V=>{const C=d.docVersions.get(k);K(C!==null,48541),V.version.compareTo(C)<0&&(m.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),p.addEntry(V)))}))})),S.next((()=>u.mutationQueue.removeMutationBatch(l,m)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(u){let l=W();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function rd(n){const e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function mE(n,e){const t=F(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const u=[];e.targetChanges.forEach(((p,m)=>{const E=s.get(m);if(!E)return;u.push(t.Pi.removeMatchingKeys(i,p.removedDocuments,m).next((()=>t.Pi.addMatchingKeys(i,p.addedDocuments,m))));let S=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(Te.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(m,S),(function(V,C,B){return V.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=hE?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(E,S,p)&&u.push(t.Pi.updateTargetData(i,S))}));let l=ct(),d=W();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))})),u.push(gE(i,a,e.documentUpdates).next((p=>{l=p.ks,d=p.qs}))),!r.isEqual(x.min())){const p=t.Pi.getLastRemoteSnapshotVersion(i).next((m=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));u.push(p)}return b.waitFor(u).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,d))).next((()=>l))})).then((i=>(t.Ms=s,i)))}function gE(n,e,t){let r=W(),s=W();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=ct();return t.forEach(((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(x.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):O(Ko,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)})),{ks:a,qs:s}}))}function _E(n,e){const t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Mo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function yE(n,e){const t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((i=>i?(s=i,b.resolve(s)):t.Pi.allocateTargetId(r).next((a=>(s=new wt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function po(n,e,t){const r=F(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Nn(a))throw a;O(Ko,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function xu(n,e,t){const r=F(n);let s=x.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,d,p){const m=F(l),E=m.xs.get(p);return E!==void 0?b.resolve(m.Ms.get(E)):m.Pi.getTargetData(d,p)})(r,a,Xe(e)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,u.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:x.min(),t?i:W()))).next((u=>(EE(r,oy(e),u),{documents:u,Qs:i})))))}function EE(n,e,t){let r=n.Os.get(e)||x.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(e,r)}class Uu{constructor(){this.activeTargetIds=dy()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TE{constructor(){this.Mo=new Uu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Uu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="ConnectivityMonitor";class Bu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){O(Fu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){O(Fu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss=null;function mo(){return ss===null?ss=(function(){return 268435456+Math.round(2147483648*Math.random())})():ss++,"0x"+ss.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="RestConnection",wE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vE{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ss?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=mo(),u=this.zo(e,t.toUriEncodedString());O($i,`Sending RPC '${e}' ${a}:`,u,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:d}=new URL(u),p=Mt(d);return this.Jo(e,u,l,r,p).then((m=>(O($i,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw wn($i,`RPC '${e}' ${a} failed with error: `,m,"url: ",u,"request:",r),m}))}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Cn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const r=wE[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="WebChannelConnection";class RE extends vE{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=mo();return new Promise(((u,l)=>{const d=new nh;d.setWithCredentials(!0),d.listenOnce(rh.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case hs.NO_ERROR:const m=d.getResponseJson();O(we,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),u(m);break;case hs.TIMEOUT:O(we,`RPC '${e}' ${a} timed out`),l(new D(P.DEADLINE_EXCEEDED,"Request time out"));break;case hs.HTTP_ERROR:const E=d.getStatus();if(O(we,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const k=S==null?void 0:S.error;if(k&&k.status&&k.message){const V=(function(B){const q=B.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(q)>=0?q:P.UNKNOWN})(k.status);l(new D(V,k.message))}else l(new D(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new D(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{O(we,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(s);O(we,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)}))}T_(e,t,r){const s=mo(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=oh(),u=ih(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=i.join("");O(we,`Creating RPC '${e}' stream ${s}: ${p}`,l);const m=a.createWebChannel(p,l);this.I_(m);let E=!1,S=!1;const k=new AE({Yo:C=>{S?O(we,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(E||(O(we,`Opening RPC '${e}' stream ${s} transport.`),m.open(),E=!0),O(we,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},Zo:()=>m.close()}),V=(C,B,q)=>{C.listen(B,(j=>{try{q(j)}catch(Q){setTimeout((()=>{throw Q}),0)}}))};return V(m,nr.EventType.OPEN,(()=>{S||(O(we,`RPC '${e}' stream ${s} transport opened.`),k.o_())})),V(m,nr.EventType.CLOSE,(()=>{S||(S=!0,O(we,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(m))})),V(m,nr.EventType.ERROR,(C=>{S||(S=!0,wn(we,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),k.a_(new D(P.UNAVAILABLE,"The operation could not be completed")))})),V(m,nr.EventType.MESSAGE,(C=>{var B;if(!S){const q=C.data[0];K(!!q,16349);const j=q,Q=(j==null?void 0:j.error)||((B=j[0])==null?void 0:B.error);if(Q){O(we,`RPC '${e}' stream ${s} received error:`,Q);const pe=Q.status;let te=(function(y){const w=ce[y];if(w!==void 0)return $h(w)})(pe),I=Q.message;te===void 0&&(te=P.INTERNAL,I="Unknown error status: "+pe+" with message "+Q.message),S=!0,k.a_(new D(te,I)),m.close()}else O(we,`RPC '${e}' stream ${s} received:`,q),k.u_(q)}})),V(u,sh.STAT_EVENT,(C=>{C.stat===ro.PROXY?O(we,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===ro.NOPROXY&&O(we,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{k.__()}),0),k}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function zi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n){return new Cy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="PersistentStream";class sd{constructor(e,t,r,s,i,a,u,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Qo(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(at(t.toString()),at("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new D(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return O(qu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(O(qu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class SE extends sd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Vy(this.serializer,e),r=(function(i){if(!("targetChange"in i))return x.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?x.min():a.readTime?xe(a.readTime):x.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=fo(this.serializer),t.addTarget=(function(i,a){let u;const l=a.target;if(u=co(l)?{documents:Ly(i,l)}:{query:My(i,l).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Wh(i,a.resumeToken);const d=lo(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(x.min())>0){u.readTime=Ns(i,a.snapshotVersion.toTimestamp());const d=lo(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,e);const r=Uy(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=fo(this.serializer),t.removeTarget=e,this.q_(t)}}class PE extends sd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return K(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){K(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Oy(e.writeResults,e.commitTime),r=xe(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=fo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Xh(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{}class CE extends bE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new D(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,ho(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(P.UNKNOWN,i.toString())}))}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Ho(e,ho(t,r),s,a,u,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(P.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class kE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(at(t),this.aa=!1):O("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="RemoteStore";class NE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{cn(this)&&(O(nn,"Restarting streams for network reachability change."),await(async function(l){const d=F(l);d.Ea.add(4),await Or(d),d.Ra.set("Unknown"),d.Ea.delete(4),await ei(d)})(this))}))})),this.Ra=new kE(r,s)}}async function ei(n){if(cn(n))for(const e of n.da)await e(!0)}async function Or(n){for(const e of n.da)await e(!1)}function id(n,e){const t=F(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Zo(t)?Jo(t):Vn(t).O_()&&Yo(t,e))}function Xo(n,e){const t=F(n),r=Vn(t);t.Ia.delete(e),r.O_()&&od(t,e),t.Ia.size===0&&(r.O_()?r.L_():cn(t)&&t.Ra.set("Unknown"))}function Yo(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(x.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vn(n).Y_(e)}function od(n,e){n.Va.Ue(e),Vn(n).Z_(e)}function Jo(n){n.Va=new Ry({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Vn(n).start(),n.Ra.ua()}function Zo(n){return cn(n)&&!Vn(n).x_()&&n.Ia.size>0}function cn(n){return F(n).Ea.size===0}function ad(n){n.Va=void 0}async function DE(n){n.Ra.set("Online")}async function VE(n){n.Ia.forEach(((e,t)=>{Yo(n,e)}))}async function OE(n,e){ad(n),Zo(n)?(n.Ra.ha(e),Jo(n)):n.Ra.set("Unknown")}async function LE(n,e,t){if(n.Ra.set("Online"),e instanceof Hh&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.Va.removeTarget(u))})(n,e)}catch(r){O(nn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Os(n,r)}else if(e instanceof ms?n.Va.Ze(e):e instanceof zh?n.Va.st(e):n.Va.tt(e),!t.isEqual(x.min()))try{const r=await rd(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const u=i.Va.Tt(a);return u.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=i.Ia.get(d);p&&i.Ia.set(d,p.withResumeToken(l.resumeToken,a))}})),u.targetMismatches.forEach(((l,d)=>{const p=i.Ia.get(l);if(!p)return;i.Ia.set(l,p.withResumeToken(Te.EMPTY_BYTE_STRING,p.snapshotVersion)),od(i,l);const m=new wt(p.target,l,d,p.sequenceNumber);Yo(i,m)})),i.remoteSyncer.applyRemoteEvent(u)})(n,t)}catch(r){O(nn,"Failed to raise snapshot:",r),await Os(n,r)}}async function Os(n,e,t){if(!Nn(e))throw e;n.Ea.add(1),await Or(n),n.Ra.set("Offline"),t||(t=()=>rd(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(nn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ei(n)}))}function cd(n,e){return e().catch((t=>Os(n,t,e)))}async function ti(n){const e=F(n),t=Ot(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Mo;for(;ME(e);)try{const s=await _E(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,xE(e,s)}catch(s){await Os(e,s)}ud(e)&&ld(e)}function ME(n){return cn(n)&&n.Ta.length<10}function xE(n,e){n.Ta.push(e);const t=Ot(n);t.O_()&&t.X_&&t.ea(e.mutations)}function ud(n){return cn(n)&&!Ot(n).x_()&&n.Ta.length>0}function ld(n){Ot(n).start()}async function UE(n){Ot(n).ra()}async function FE(n){const e=Ot(n);for(const t of n.Ta)e.ea(t.mutations)}async function BE(n,e,t){const r=n.Ta.shift(),s=jo.from(r,e,t);await cd(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await ti(n)}async function qE(n,e){e&&Ot(n).X_&&await(async function(r,s){if((function(a){return jh(a)&&a!==P.ABORTED})(s.code)){const i=r.Ta.shift();Ot(r).B_(),await cd(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ti(r)}})(n,e),ud(n)&&ld(n)}async function ju(n,e){const t=F(n);t.asyncQueue.verifyOperationInProgress(),O(nn,"RemoteStore received new credentials");const r=cn(t);t.Ea.add(3),await Or(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ei(t)}async function jE(n,e){const t=F(n);e?(t.Ea.delete(2),await ei(t)):e||(t.Ea.add(2),await Or(t),t.Ra.set("Unknown"))}function Vn(n){return n.ma||(n.ma=(function(t,r,s){const i=F(t);return i.sa(),new SE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:DE.bind(null,n),t_:VE.bind(null,n),r_:OE.bind(null,n),H_:LE.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Zo(n)?Jo(n):n.Ra.set("Unknown")):(await n.ma.stop(),ad(n))}))),n.ma}function Ot(n){return n.fa||(n.fa=(function(t,r,s){const i=F(t);return i.sa(),new PE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:UE.bind(null,n),r_:qE.bind(null,n),ta:FE.bind(null,n),na:BE.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await ti(n)):(await n.fa.stop(),n.Ta.length>0&&(O(nn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,u=new ea(e,t,a,s,i);return u.start(r),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ta(n,e){if(at("AsyncQueue",`${e}: ${n}`),Nn(n))return new D(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{static emptySet(e){return new In(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=rr(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof In)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new In;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.ga=new re(L.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):M(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Pn{constructor(e,t,r,s,i,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((u=>{a.push({type:0,doc:u})})),new Pn(e,t,In.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ks(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class zE{constructor(){this.queries=zu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=F(t),i=s.queries;s.queries=zu(),i.forEach(((a,u)=>{for(const l of u.Sa)l.onError(r)}))})(this,new D(P.ABORTED,"Firestore shutting down"))}}function zu(){return new an((n=>bh(n)),Ks)}async function na(n,e){const t=F(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new $E,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=ta(a,`Initialization of query '${fn(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&sa(t)}async function ra(n,e){const t=F(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function HE(n,e){const t=F(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const u of a.Sa)u.Fa(s)&&(r=!0);a.wa=s}}r&&sa(t)}function WE(n,e,t){const r=F(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function sa(n){n.Ca.forEach((e=>{e.next()}))}var go,Hu;(Hu=go||(go={})).Ma="default",Hu.Cache="cache";class ia{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Pn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==go.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.key=e}}class dd{constructor(e){this.key=e}}class GE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=W(),this.mutatedKeys=W(),this.eu=Ch(e),this.tu=new In(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new $u,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,m)=>{const E=s.get(p),S=Qs(this.query,m)?m:null,k=!!E&&this.mutatedKeys.has(E.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let C=!1;E&&S?E.data.isEqual(S.data)?k!==V&&(r.track({type:3,doc:S}),C=!0):this.su(E,S)||(r.track({type:2,doc:S}),C=!0,(l&&this.eu(S,l)>0||d&&this.eu(S,d)<0)&&(u=!0)):!E&&S?(r.track({type:0,doc:S}),C=!0):E&&!S&&(r.track({type:1,doc:E}),C=!0,(l||d)&&(u=!0)),C&&(S?(a=a.add(S),i=V?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Cs:u,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((p,m)=>(function(S,k){const V=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Rt:C})}};return V(S)-V(k)})(p.type,m.type)||this.eu(p.doc,m.doc))),this.ou(r),s=s??!1;const u=t&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,d=l!==this.Za;return this.Za=l,a.length!==0||d?{snapshot:new Pn(this.query,e.tu,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $u,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=W(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new dd(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new hd(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=W();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Pn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const oa="SyncEngine";class KE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class QE{constructor(e){this.key=e,this.hu=!1}}class XE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new an((u=>bh(u)),Ks),this.Iu=new Map,this.Eu=new Set,this.du=new re(L.comparator),this.Au=new Map,this.Ru=new Ho,this.Vu={},this.mu=new Map,this.fu=Sn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function YE(n,e,t=!0){const r=yd(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await fd(r,e,t,!0),s}async function JE(n,e){const t=yd(n);await fd(t,e,!0,!1)}async function fd(n,e,t,r){const s=await yE(n.localStore,Xe(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let u;return r&&(u=await ZE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&id(n.remoteStore,s),u}async function ZE(n,e,t,r,s){n.pu=(m,E,S)=>(async function(V,C,B,q){let j=C.view.ru(B);j.Cs&&(j=await xu(V.localStore,C.query,!1).then((({documents:I})=>C.view.ru(I,j))));const Q=q&&q.targetChanges.get(C.targetId),pe=q&&q.targetMismatches.get(C.targetId)!=null,te=C.view.applyChanges(j,V.isPrimaryClient,Q,pe);return Gu(V,C.targetId,te.au),te.snapshot})(n,m,E,S);const i=await xu(n.localStore,e,!0),a=new GE(e,i.Qs),u=a.ru(i.documents),l=Vr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,l);Gu(n,t,d.au);const p=new KE(e,t,a);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function eT(n,e,t){const r=F(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!Ks(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await po(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Xo(r.remoteStore,s.targetId),_o(r,s.targetId)})).catch(kn)):(_o(r,s.targetId),await po(r.localStore,s.targetId,!0))}async function tT(n,e){const t=F(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Xo(t.remoteStore,r.targetId))}async function nT(n,e,t){const r=uT(n);try{const s=await(function(a,u){const l=F(a),d=ee.now(),p=u.reduce(((S,k)=>S.add(k.key)),W());let m,E;return l.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let k=ct(),V=W();return l.Ns.getEntries(S,p).next((C=>{k=C,k.forEach(((B,q)=>{q.isValidDocument()||(V=V.add(B))}))})).next((()=>l.localDocuments.getOverlayedDocuments(S,k))).next((C=>{m=C;const B=[];for(const q of u){const j=Ey(q,m.get(q.key).overlayedDocument);j!=null&&B.push(new Ft(q.key,j,Th(j.value.mapValue),le.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,B,u)})).next((C=>{E=C;const B=C.applyToLocalDocumentSet(m,V);return l.documentOverlayCache.saveOverlays(S,C.batchId,B)}))})).then((()=>({batchId:E.batchId,changes:Nh(m)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,u,l){let d=a.Vu[a.currentUser.toKey()];d||(d=new re(H)),d=d.insert(u,l),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,t),await Lr(r,s.changes),await ti(r.remoteStore)}catch(s){const i=ta(s,"Failed to persist write");t.reject(i)}}async function pd(n,e){const t=F(n);try{const r=await mE(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Au.get(i);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?K(a.hu,14607):s.removedDocuments.size>0&&(K(a.hu,42227),a.hu=!1))})),await Lr(t,r,e)}catch(r){await kn(r)}}function Wu(n,e,t){const r=F(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,a)=>{const u=a.view.va(e);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const l=F(a);l.onlineState=u;let d=!1;l.queries.forEach(((p,m)=>{for(const E of m.Sa)E.va(u)&&(d=!0)})),d&&sa(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rT(n,e,t){const r=F(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new re(L.comparator);a=a.insert(i,_e.newNoDocument(i,x.min()));const u=W().add(i),l=new Js(x.min(),new Map,new re(H),a,u);await pd(r,l),r.du=r.du.remove(i),r.Au.delete(e),aa(r)}else await po(r.localStore,e,!1).then((()=>_o(r,e,t))).catch(kn)}async function sT(n,e){const t=F(n),r=e.batch.batchId;try{const s=await pE(t.localStore,e);gd(t,r,null),md(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Lr(t,s)}catch(s){await kn(s)}}async function iT(n,e,t){const r=F(n);try{const s=await(function(a,u){const l=F(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return l.mutationQueue.lookupMutationBatch(d,u).next((m=>(K(m!==null,37113),p=m.keys(),l.mutationQueue.removeMutationBatch(d,m)))).next((()=>l.mutationQueue.performConsistencyCheck(d))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,u))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>l.localDocuments.getDocuments(d,p)))}))})(r.localStore,e);gd(r,e,t),md(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Lr(r,s)}catch(s){await kn(s)}}function md(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function gd(n,e,t){const r=F(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function _o(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||_d(n,r)}))}function _d(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Xo(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),aa(n))}function Gu(n,e,t){for(const r of t)r instanceof hd?(n.Ru.addReference(r.key,e),oT(n,r)):r instanceof dd?(O(oa,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||_d(n,r.key)):M(19791,{wu:r})}function oT(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(O(oa,"New document in limbo: "+t),n.Eu.add(r),aa(n))}function aa(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new L(Y.fromString(e)),r=n.fu.next();n.Au.set(r,new QE(t)),n.du=n.du.insert(t,r),id(n.remoteStore,new wt(Xe(Gs(t.path)),r,"TargetPurposeLimboResolution",Hs.ce))}}async function Lr(n,e,t){const r=F(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((u,l)=>{a.push(r.pu(l,e,t).then((d=>{var p;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Go.As(l.targetId,d);i.push(m)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(l,d){const p=F(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>b.forEach(d,(E=>b.forEach(E.Es,(S=>p.persistence.referenceDelegate.addReference(m,E.targetId,S))).next((()=>b.forEach(E.ds,(S=>p.persistence.referenceDelegate.removeReference(m,E.targetId,S)))))))))}catch(m){if(!Nn(m))throw m;O(Ko,"Failed to update sequence numbers: "+m)}for(const m of d){const E=m.targetId;if(!m.fromCache){const S=p.Ms.get(E),k=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(k);p.Ms=p.Ms.insert(E,V)}}})(r.localStore,i))}async function aT(n,e){const t=F(n);if(!t.currentUser.isEqual(e)){O(oa,"User change. New user:",e.toKey());const r=await nd(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((u=>{u.forEach((l=>{l.reject(new D(P.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Lr(t,r.Ls)}}function cT(n,e){const t=F(n),r=t.Au.get(e);if(r&&r.hu)return W().add(r.key);{let s=W();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const u=t.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function yd(n){const e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rT.bind(null,e),e.Pu.H_=HE.bind(null,e.eventManager),e.Pu.yu=WE.bind(null,e.eventManager),e}function uT(n){const e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iT.bind(null,e),e}class Ls{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zs(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return fE(this.persistence,new lE,e.initialUser,this.serializer)}Cu(e){return new td(Wo.mi,this.serializer)}Du(e){return new TE}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ls.provider={build:()=>new Ls};class lT extends Ls{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){K(this.persistence.referenceDelegate instanceof Vs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Qy(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new td((r=>Vs.mi(r,t)),this.serializer)}}class yo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aT.bind(null,this.syncEngine),await jE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new zE})()}createDatastore(e){const t=Zs(e.databaseInfo.databaseId),r=(function(i){return new RE(i)})(e.databaseInfo);return(function(i,a,u,l){return new CE(i,a,u,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,u){return new NE(r,s,i,a,u)})(this.localStore,this.datastore,e.asyncQueue,(t=>Wu(this.syncEngine,t,0)),(function(){return Bu.v()?new Bu:new IE})())}createSyncEngine(e,t){return(function(s,i,a,u,l,d,p){const m=new XE(s,i,a,u,l,d);return p&&(m.gu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=F(s);O(nn,"RemoteStore shutting down."),i.Ea.add(5),await Or(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}yo.provider={build:()=>new yo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):at("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const a=F(s),u={documents:i.map((m=>Ds(a.serializer,m)))},l=await a.Ho("BatchGetDocuments",a.serializer.databaseId,Y.emptyPath(),u,i.length),d=new Map;l.forEach((m=>{const E=Dy(a.serializer,m);d.set(E.key.toString(),E)}));const p=[];return i.forEach((m=>{const E=d.get(m.toString());K(!!E,55234,{key:m}),p.push(E)})),p})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Dr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const s=L.fromPath(r);this.mutations.push(new qh(s,this.precondition(s)))})),await(async function(r,s){const i=F(r),a={writes:s.map((u=>Xh(i.serializer,u)))};await i.Go("Commit",i.serializer.databaseId,Y.emptyPath(),a)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw M(50498,{Gu:e.constructor.name});t=x.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new D(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(x.min())?le.exists(!1):le.updateTime(t):le.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(x.min()))throw new D(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return le.updateTime(t)}return le.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.zu=r.maxAttempts,this.M_=new Qo(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new hT(this.datastore),t=this.Hu(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.Yu(s)}))))})).catch((r=>{this.Yu(r)}))}))}Hu(e){try{const t=this.updateFunction(e);return!kr(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!jh(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="FirestoreClient";class fT{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ve.UNAUTHENTICATED,this.clientId=Lo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{O(Lt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(O(Lt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ta(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Hi(n,e){n.asyncQueue.verifyOperationInProgress(),O(Lt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await nd(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ku(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pT(n);O(Lt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>ju(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>ju(e.remoteStore,s))),n._onlineComponents=e}async function pT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(Lt,"Using user provided OfflineComponentProvider");try{await Hi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;wn("Error using user provided cache. Falling back to memory cache: "+t),await Hi(n,new Ls)}}else O(Lt,"Using default OfflineComponentProvider"),await Hi(n,new lT(void 0));return n._offlineComponents}async function ua(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(Lt,"Using user provided OnlineComponentProvider"),await Ku(n,n._uninitializedComponentsProvider._online)):(O(Lt,"Using default OnlineComponentProvider"),await Ku(n,new yo))),n._onlineComponents}function mT(n){return ua(n).then((e=>e.syncEngine))}function gT(n){return ua(n).then((e=>e.datastore))}async function Ms(n){const e=await ua(n),t=e.eventManager;return t.onListen=YE.bind(null,e.syncEngine),t.onUnlisten=eT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=JE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tT.bind(null,e.syncEngine),t}function _T(n,e,t={}){const r=new Qe;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,l,d){const p=new ca({next:E=>{p.Nu(),a.enqueueAndForget((()=>ra(i,m)));const S=E.docs.has(u);!S&&E.fromCache?d.reject(new D(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&E.fromCache&&l&&l.source==="server"?d.reject(new D(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new ia(Gs(u.path),p,{includeMetadataChanges:!0,qa:!0});return na(i,m)})(await Ms(n),n.asyncQueue,e,t,r))),r.promise}function yT(n,e,t={}){const r=new Qe;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,l,d){const p=new ca({next:E=>{p.Nu(),a.enqueueAndForget((()=>ra(i,m))),E.fromCache&&l.source==="server"?d.reject(new D(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new ia(u,p,{includeMetadataChanges:!0,qa:!0});return na(i,m)})(await Ms(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="firestore.googleapis.com",Xu=!0;class Yu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Td,this.ssl=Xu}else this.host=e.host,this.ssl=e.ssl??Xu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ed;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Gy)throw new D(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}D_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ed(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ni{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new w_;switch(r.type){case"firstParty":return new S_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Qu.get(t);r&&(O("ComponentProvider","Removing Datastore"),Qu.delete(t),r.terminate())})(this),Promise.resolve()}}function ET(n,e,t,r={}){var d;n=Ae(n,ni);const s=Mt(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;s&&(Io(`https://${u}`),wo("Firestore",!0)),i.host!==Td&&i.host!==u&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:u,ssl:s,emulatorOptions:r};if(!Xt(l,a)&&(n._setSettings(l),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=ve.MOCK_USER;else{p=gl(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new D(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ve(E)}n._authCredentials=new v_(new ch(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ut(this.firestore,e,this._query)}}class ne{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ne(this.firestore,e,this._key)}toJSON(){return{type:ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Cr(t,ne._jsonSchema))return new ne(e,r||null,new L(Y.fromString(t.referencePath)))}}ne._jsonSchemaVersion="firestore/documentReference/1.0",ne._jsonSchema={type:he("string",ne._jsonSchemaVersion),referencePath:he("string")};class Pt extends ut{constructor(e,t,r){super(e,t,Gs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ne(this.firestore,null,new L(e))}withConverter(e){return new Pt(this.firestore,e,this._path)}}function ZI(n,e,...t){if(n=X(n),uh("collection","path",e),n instanceof ni){const r=Y.fromString(e,...t);return lu(r),new Pt(n,null,r)}{if(!(n instanceof ne||n instanceof Pt))throw new D(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return lu(r),new Pt(n.firestore,null,r)}}function TT(n,e,...t){if(n=X(n),arguments.length===1&&(e=Lo.newId()),uh("doc","path",e),n instanceof ni){const r=Y.fromString(e,...t);return uu(r),new ne(n,null,new L(r))}{if(!(n instanceof ne||n instanceof Pt))throw new D(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return uu(r),new ne(n.firestore,n instanceof Pt?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="AsyncQueue";class Zu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Qo(this,"async_queue_retry"),this._c=()=>{const r=zi();r&&O(Ju,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=zi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=zi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Qe;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Nn(e))throw e;O(Ju,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,at("INTERNAL UNHANDLED ERROR: ",el(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ea.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&M(47125,{Pc:el(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function el(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class qe extends ni{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Zu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zu(e),this._firestoreClient=void 0,await e}}}function ew(n,e){const t=typeof n=="object"?n:Ro(),r=typeof n=="string"?n:Ss,s=Bs(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=fl("firestore");i&&ET(s,...i)}return s}function On(n){if(n._terminated)throw new D(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||IT(n),n._firestoreClient}function IT(n){var r,s,i;const e=n._freezeSettings(),t=(function(u,l,d,p){return new z_(u,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Ed(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new fT(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oe(Te.fromBase64String(e))}catch(t){throw new D(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Oe(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Oe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Cr(e,Oe._jsonSchema))return Oe.fromBase64String(e.bytes)}}Oe._jsonSchemaVersion="firestore/bytes/1.0",Oe._jsonSchema={type:he("string",Oe._jsonSchemaVersion),bytes:he("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ye._jsonSchemaVersion}}static fromJSON(e){if(Cr(e,Ye._jsonSchema))return new Ye(e.latitude,e.longitude)}}Ye._jsonSchemaVersion="firestore/geoPoint/1.0",Ye._jsonSchema={type:he("string",Ye._jsonSchemaVersion),latitude:he("number"),longitude:he("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Je._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Cr(e,Je._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Je(e.vectorValues);throw new D(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Je._jsonSchemaVersion="firestore/vectorValue/1.0",Je._jsonSchema={type:he("string",Je._jsonSchemaVersion),vectorValues:he("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=/^__.*__$/;class vT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nr(e,this.data,t,this.fieldTransforms)}}class Id{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function wd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ac:n})}}class la{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new la({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return xs(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(wd(this.Ac)&&wT.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class AT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Zs(e)}Cc(e,t,r,s=!1){return new la({Ac:e,methodName:t,Dc:r,path:Ee.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mn(n){const e=n._freezeSettings(),t=Zs(n._databaseId);return new AT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function si(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);pa("Data must be an object, but it was:",a,r);const u=vd(r,a);let l,d;if(i.merge)l=new Le(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const E=Eo(e,m,t);if(!a.contains(E))throw new D(P.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Rd(p,E)||p.push(E)}l=new Le(p),d=a.fieldTransforms.filter((m=>l.covers(m.field)))}else l=null,d=a.fieldTransforms;return new vT(new Ce(u),l,d)}class ii extends ri{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ii}}class ha extends ri{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new wr(e.serializer,Oh(e.serializer,this.Fc));return new my(e.path,t)}isEqual(e){return e instanceof ha&&this.Fc===e.Fc}}function da(n,e,t,r){const s=n.Cc(1,e,t);pa("Data must be an object, but it was:",s,r);const i=[],a=Ce.empty();Ut(r,((l,d)=>{const p=ma(e,l,t);d=X(d);const m=s.yc(p);if(d instanceof ii)i.push(p);else{const E=Mr(d,m);E!=null&&(i.push(p),a.set(p,E))}}));const u=new Le(i);return new Id(a,u,s.fieldTransforms)}function fa(n,e,t,r,s,i){const a=n.Cc(1,e,t),u=[Eo(e,r,t)],l=[s];if(i.length%2!=0)throw new D(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)u.push(Eo(e,i[E])),l.push(i[E+1]);const d=[],p=Ce.empty();for(let E=u.length-1;E>=0;--E)if(!Rd(d,u[E])){const S=u[E];let k=l[E];k=X(k);const V=a.yc(S);if(k instanceof ii)d.push(S);else{const C=Mr(k,V);C!=null&&(d.push(S),p.set(S,C))}}const m=new Le(d);return new Id(p,m,a.fieldTransforms)}function RT(n,e,t,r=!1){return Mr(t,n.Cc(r?4:3,e))}function Mr(n,e){if(Ad(n=X(n)))return pa("Unsupported field value:",e,n),vd(n,e);if(n instanceof ri)return(function(r,s){if(!wd(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const u of r){let l=Mr(u,s.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=X(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Oh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ee.fromDate(r);return{timestampValue:Ns(s.serializer,i)}}if(r instanceof ee){const i=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ns(s.serializer,i)}}if(r instanceof Ye)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Oe)return{bytesValue:Wh(s.serializer,r._byteString)};if(r instanceof ne){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Je)return(function(a,u){return{mapValue:{fields:{[yh]:{stringValue:Eh},[Ps]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return qo(u.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${zs(r)}`)})(n,e)}function vd(n,e){const t={};return dh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ut(n,((r,s)=>{const i=Mr(s,e.mc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Ad(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof Ye||n instanceof Oe||n instanceof ne||n instanceof ri||n instanceof Je)}function pa(n,e,t){if(!Ad(t)||!lh(t)){const r=zs(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Eo(n,e,t){if((e=X(e))instanceof Ln)return e._internalPath;if(typeof e=="string")return ma(n,e);throw xs("Field path arguments must be of type string or ",n,!1,void 0,t)}const ST=new RegExp("[~\\*/\\[\\]]");function ma(n,e,t){if(e.search(ST)>=0)throw xs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ln(...e.split("."))._internalPath}catch{throw xs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new D(P.INVALID_ARGUMENT,u+n+l)}function Rd(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(oi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class PT extends Us{data(){return super.data()}}function oi(n,e){return typeof e=="string"?ma(n,e):e instanceof Ln?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ga{}class _a extends ga{}function tw(n,e,...t){let r=[];e instanceof ga&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((l=>l instanceof ya)).length,u=i.filter((l=>l instanceof ai)).length;if(a>1||a>0&&u>0)throw new D(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class ai extends _a{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ai(e,t,r)}_apply(e){const t=this._parse(e);return Pd(e._query,t),new ut(e.firestore,e.converter,uo(e._query,t))}_parse(e){const t=Mn(e.firestore);return(function(i,a,u,l,d,p,m){let E;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new D(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){rl(m,p);const k=[];for(const V of m)k.push(nl(l,i,V));E={arrayValue:{values:k}}}else E=nl(l,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||rl(m,p),E=RT(u,a,m,p==="in"||p==="not-in");return ue.create(d,p,E)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function nw(n,e,t){const r=e,s=oi("where",n);return ai._create(s,r,t)}class ya extends ga{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ya(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Be.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)Pd(a,l),a=uo(a,l)})(e._query,t),new ut(e.firestore,e.converter,uo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ea extends _a{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ea(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new D(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Er(i,a)})(e._query,this._field,this._direction);return new ut(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new Dn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function rw(n,e="asc"){const t=e,r=oi("orderBy",n);return Ea._create(r,t)}class Ta extends _a{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ta(e,t,r)}_apply(e){return new ut(e.firestore,e.converter,Cs(e._query,this._limit,this._limitType))}}function sw(n){return V_("limit",n),Ta._create("limit",n,"F")}function nl(n,e,t){if(typeof(t=X(t))=="string"){if(t==="")throw new D(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ph(e)&&t.indexOf("/")!==-1)throw new D(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Y.fromString(t));if(!L.isDocumentKey(r))throw new D(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yu(n,new L(r))}if(t instanceof ne)return yu(n,t._key);throw new D(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zs(t)}.`)}function rl(n,e){if(!Array.isArray(n)||n.length===0)throw new D(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Pd(n,e){const t=(function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new D(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class bd{convertValue(e,t="none"){switch(Vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ut(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Ps].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>ae(a.doubleValue)));return new Je(t)}convertGeoPoint(e){return new Ye(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ws(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gr(e));default:return null}}convertTimestamp(e){const t=Nt(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Y.fromString(e);K(Zh(r),9688,{name:e});const s=new _r(r.get(1),r.get(3)),i=new L(r.popFirst(5));return s.isEqual(t)||at(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class bT extends bd{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ne(this.firestore,null,t)}}class _n{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bt extends Us{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(oi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}bt._jsonSchemaVersion="firestore/documentSnapshot/1.0",bt._jsonSchema={type:he("string",bt._jsonSchemaVersion),bundleSource:he("string","DocumentSnapshot"),bundleName:he("string"),bundle:he("string")};class gs extends bt{data(e={}){return super.data(e)}}class Kt{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new _n(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new gs(this._firestore,this._userDataWriter,r.key,r,new _n(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const l=new gs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new _n(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>i||u.type!==3)).map((u=>{const l=new gs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new _n(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:CT(u.type),doc:l,oldIndex:d,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(n){n=Ae(n,ne);const e=Ae(n.firestore,qe);return _T(On(e),n._key).then((t=>Cd(e,n,t)))}Kt._jsonSchemaVersion="firestore/querySnapshot/1.0",Kt._jsonSchema={type:he("string",Kt._jsonSchemaVersion),bundleSource:he("string","QuerySnapshot"),bundleName:he("string"),bundle:he("string")};class ui extends bd{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ne(this.firestore,null,t)}}function ow(n){n=Ae(n,ut);const e=Ae(n.firestore,qe),t=On(e),r=new ui(e);return Sd(n._query),yT(t,n._query).then((s=>new Kt(e,r,n,s)))}function aw(n,e,t){n=Ae(n,ne);const r=Ae(n.firestore,qe),s=ci(n.converter,e,t);return xr(r,[si(Mn(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,le.none())])}function cw(n,e,t,...r){n=Ae(n,ne);const s=Ae(n.firestore,qe),i=Mn(s);let a;return a=typeof(e=X(e))=="string"||e instanceof Ln?fa(i,"updateDoc",n._key,e,t,r):da(i,"updateDoc",n._key,e),xr(s,[a.toMutation(n._key,le.exists(!0))])}function uw(n){return xr(Ae(n.firestore,qe),[new Dr(n._key,le.none())])}function lw(n,e){const t=Ae(n.firestore,qe),r=TT(n),s=ci(n.converter,e);return xr(t,[si(Mn(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,le.exists(!1))]).then((()=>r))}function hw(n,...e){var l,d,p;n=X(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||tl(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(tl(e[r])){const m=e[r];e[r]=(l=m.next)==null?void 0:l.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let i,a,u;if(n instanceof ne)a=Ae(n.firestore,qe),u=Gs(n._key.path),i={next:m=>{e[r]&&e[r](Cd(a,n,m))},error:e[r+1],complete:e[r+2]};else{const m=Ae(n,ut);a=Ae(m.firestore,qe),u=m._query;const E=new ui(a);i={next:S=>{e[r]&&e[r](new Kt(a,E,m,S))},error:e[r+1],complete:e[r+2]},Sd(n._query)}return(function(E,S,k,V){const C=new ca(V),B=new ia(S,C,k);return E.asyncQueue.enqueueAndForget((async()=>na(await Ms(E),B))),()=>{C.Nu(),E.asyncQueue.enqueueAndForget((async()=>ra(await Ms(E),B)))}})(On(a),u,s,i)}function xr(n,e){return(function(r,s){const i=new Qe;return r.asyncQueue.enqueueAndForget((async()=>nT(await mT(r),s,i))),i.promise})(On(n),e)}function Cd(n,e,t){const r=t.docs.get(e._key),s=new ui(n);return new bt(n,s,e._key,r,new _n(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Mn(e)}set(e,t,r){this._verifyNotCommitted();const s=vt(e,this._firestore),i=ci(s.converter,t,r),a=si(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,le.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=vt(e,this._firestore);let a;return a=typeof(t=X(t))=="string"||t instanceof Ln?fa(this._dataReader,"WriteBatch.update",i._key,t,r,s):da(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,le.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=vt(e,this._firestore);return this._mutations=this._mutations.concat(new Dr(t._key,le.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function vt(n,e){if((n=X(n)).firestore!==e)throw new D(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Mn(e)}get(e){const t=vt(e,this._firestore),r=new bT(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return M(24041);const i=s[0];if(i.isFoundDocument())return new Us(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new Us(this._firestore,r,t._key,null,t.converter);throw M(18433,{doc:i})}))}set(e,t,r){const s=vt(e,this._firestore),i=ci(s.converter,t,r),a=si(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,a),this}update(e,t,r,...s){const i=vt(e,this._firestore);let a;return a=typeof(t=X(t))=="string"||t instanceof Ln?fa(this._dataReader,"Transaction.update",i._key,t,r,s):da(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,a),this}delete(e){const t=vt(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT extends DT{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=vt(e,this._firestore),r=new ui(this._firestore);return super.get(e).then((s=>new bt(this._firestore,r,t._key,s._document,new _n(!1,!1),t.converter)))}}function dw(n,e,t){n=Ae(n,qe);const r={...kT,...t};return(function(i){if(i.maxAttempts<1)throw new D(P.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(i,a,u){const l=new Qe;return i.asyncQueue.enqueueAndForget((async()=>{const d=await gT(i);new dT(i.asyncQueue,d,u,a,l).ju()})),l.promise})(On(n),(s=>e(new VT(n,s))),r)}function fw(n){return new ha("increment",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(n){return On(n=Ae(n,qe)),new NT(n,(e=>xr(n,e)))}(function(e,t=!0){(function(s){Cn=s})(sn),Yt(new Ct("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),u=new qe(new A_(r.getProvider("auth-internal")),new P_(a,r.getProvider("app-check-internal")),(function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _r(d.options.projectId,p)})(a,s),a);return i={useFetchStreams:t,...i},u._setSettings(i),u}),"PUBLIC").setMultipleInstances(!0)),We(iu,ou,e),We(iu,ou,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="firebasestorage.googleapis.com",Nd="storageBucket",OT=120*1e3,LT=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends et{constructor(e,t,r=0){super(Wi(e),`Firebase Storage: ${t} (${Wi(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ie;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ie||(ie={}));function Wi(n){return"storage/"+n}function Ia(){const n="An unknown error occurred, please check the error payload for server response.";return new oe(ie.UNKNOWN,n)}function MT(n){return new oe(ie.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function xT(n){return new oe(ie.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function UT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new oe(ie.UNAUTHENTICATED,n)}function FT(){return new oe(ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BT(n){return new oe(ie.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function qT(){return new oe(ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jT(){return new oe(ie.CANCELED,"User canceled the upload/download.")}function $T(n){return new oe(ie.INVALID_URL,"Invalid URL '"+n+"'.")}function zT(n){return new oe(ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function HT(){return new oe(ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Nd+"' property when initializing the app?")}function WT(){return new oe(ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function GT(){return new oe(ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function KT(n){return new oe(ie.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function To(n){return new oe(ie.INVALID_ARGUMENT,n)}function Dd(){return new oe(ie.APP_DELETED,"The Firebase app was deleted.")}function QT(n){return new oe(ie.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function dr(n,e){return new oe(ie.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Zn(n){throw new oe(ie.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Me.makeFromUrl(e,t)}catch{return new Me(e,"")}if(r.path==="")return r;throw zT(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Q){Q.path.charAt(Q.path.length-1)==="/"&&(Q.path_=Q.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+s+a,"i"),l={bucket:1,path:3};function d(Q){Q.path_=decodeURIComponent(Q.path)}const p="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",S=new RegExp(`^https?://${m}/${p}/b/${s}/o${E}`,"i"),k={bucket:1,path:3},V=t===kd?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",B=new RegExp(`^https?://${V}/${s}/${C}`,"i"),j=[{regex:u,indices:l,postModify:i},{regex:S,indices:k,postModify:d},{regex:B,indices:{bucket:1,path:2},postModify:d}];for(let Q=0;Q<j.length;Q++){const pe=j[Q],te=pe.regex.exec(e);if(te){const I=te[pe.indices.bucket];let g=te[pe.indices.path];g||(g=""),r=new Me(I,g),pe.postModify(r);break}}if(r==null)throw $T(e);return r}}class XT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(n,e,t){let r=1,s=null,i=null,a=!1,u=0;function l(){return u===2}let d=!1;function p(...C){d||(d=!0,e.apply(null,C))}function m(C){s=setTimeout(()=>{s=null,n(S,l())},C)}function E(){i&&clearTimeout(i)}function S(C,...B){if(d){E();return}if(C){E(),p.call(null,C,...B);return}if(l()||a){E(),p.call(null,C,...B);return}r<64&&(r*=2);let j;u===1?(u=2,j=0):j=(r+Math.random())*1e3,m(j)}let k=!1;function V(C){k||(k=!0,E(),!d&&(s!==null?(C||(u=2),clearTimeout(s),m(0)):C||(u=1)))}return m(0),i=setTimeout(()=>{a=!0,V(!0)},t),V}function JT(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(n){return n!==void 0}function eI(n){return typeof n=="object"&&!Array.isArray(n)}function wa(n){return typeof n=="string"||n instanceof String}function sl(n){return va()&&n instanceof Blob}function va(){return typeof Blob<"u"}function il(n,e,t,r){if(r<e)throw To(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw To(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Vd(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Qt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Qt||(Qt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,t,r,s,i,a,u,l,d,p,m,E=!0,S=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=m,this.retry=E,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,V)=>{this.resolve_=k,this.reject_=V,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new is(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=u=>{const l=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const u=i.getErrorCode()===Qt.NO_ERROR,l=i.getStatus();if(!u||tI(l,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Qt.ABORT;r(!1,new is(!1,null,p));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new is(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(u,u.getResponse());ZT(l)?i(l):i()}catch(l){a(l)}else if(u!==null){const l=Ia();l.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,l)):a(l)}else if(s.canceled){const l=this.appDelete_?Dd():jT();a(l)}else{const l=qT();a(l)}};this.canceled_?t(!1,new is(!1,null,!0)):this.backoffId_=YT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&JT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class is{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function rI(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function sI(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iI(n,e){e&&(n["X-Firebase-GMPID"]=e)}function oI(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function aI(n,e,t,r,s,i,a=!0,u=!1){const l=Vd(n.urlParams),d=n.url+l,p=Object.assign({},n.headers);return iI(p,e),rI(p,t),sI(p,i),oI(p,r),new nI(d,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function uI(...n){const e=cI();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(va())return new Blob(n);throw new oe(ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function lI(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(n){if(typeof atob>"u")throw KT("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Gi{constructor(e,t){this.data=e,this.contentType=t||null}}function dI(n,e){switch(n){case He.RAW:return new Gi(Od(e));case He.BASE64:case He.BASE64URL:return new Gi(Ld(n,e));case He.DATA_URL:return new Gi(pI(e),mI(e))}throw Ia()}function Od(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function fI(n){let e;try{e=decodeURIComponent(n)}catch{throw dr(He.DATA_URL,"Malformed data URL.")}return Od(e)}function Ld(n,e){switch(n){case He.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw dr(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case He.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw dr(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=hI(e)}catch(s){throw s.message.includes("polyfill")?s:dr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Md{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw dr(He.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=gI(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function pI(n){const e=new Md(n);return e.base64?Ld(He.BASE64,e.rest):fI(e.rest)}function mI(n){return new Md(n).contentType}function gI(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){let r=0,s="";sl(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(sl(this.data_)){const r=this.data_,s=lI(r,e,t);return s===null?null:new It(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new It(r,!0)}}static getBlob(...e){if(va()){const t=e.map(r=>r instanceof It?r.data_:r);return new It(uI.apply(null,t))}else{const t=e.map(a=>wa(a)?dI(He.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let u=0;u<a.length;u++)s[i++]=a[u]}),new It(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n){let e;try{e=JSON.parse(n)}catch{return null}return eI(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function yI(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Ud(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(n,e){return e}class be{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||EI}}let os=null;function TI(n){return!wa(n)||n.length<2?n:Ud(n)}function Fd(){if(os)return os;const n=[];n.push(new be("bucket")),n.push(new be("generation")),n.push(new be("metageneration")),n.push(new be("name","fullPath",!0));function e(i,a){return TI(a)}const t=new be("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new be("size");return s.xform=r,n.push(s),n.push(new be("timeCreated")),n.push(new be("updated")),n.push(new be("md5Hash",null,!0)),n.push(new be("cacheControl",null,!0)),n.push(new be("contentDisposition",null,!0)),n.push(new be("contentEncoding",null,!0)),n.push(new be("contentLanguage",null,!0)),n.push(new be("contentType",null,!0)),n.push(new be("metadata","customMetadata",!0)),os=n,os}function II(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Me(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function wI(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return II(r,n),r}function Bd(n,e,t){const r=xd(e);return r===null?null:wI(n,r,t)}function vI(n,e,t,r){const s=xd(e);if(s===null||!wa(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const p=n.bucket,m=n.fullPath,E="/b/"+a(p)+"/o/"+a(m),S=li(E,t,r),k=Vd({alt:"media",token:d});return S+k})[0]}function AI(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Aa{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(n){if(!n)throw Ia()}function RI(n,e){function t(r,s){const i=Bd(n,s,e);return qd(i!==null),i}return t}function SI(n,e){function t(r,s){const i=Bd(n,s,e);return qd(i!==null),vI(i,s,n.host,n._protocol)}return t}function jd(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=FT():s=UT():t.getStatus()===402?s=xT(n.bucket):t.getStatus()===403?s=BT(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function $d(n){const e=jd(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=MT(n.path)),i.serverResponse=s.serverResponse,i}return t}function PI(n,e,t){const r=e.fullServerUrl(),s=li(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,u=new Aa(s,i,SI(n,t),a);return u.errorHandler=$d(e),u}function bI(n,e){const t=e.fullServerUrl(),r=li(t,n.host,n._protocol),s="DELETE",i=n.maxOperationRetryTime;function a(l,d){}const u=new Aa(r,s,a,i);return u.successCodes=[200,204],u.errorHandler=$d(e),u}function CI(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function kI(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=CI(null,e)),r}function NI(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let j="";for(let Q=0;Q<2;Q++)j=j+Math.random().toString().slice(2);return j}const l=u();a["Content-Type"]="multipart/related; boundary="+l;const d=kI(e,r,s),p=AI(d,t),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,E=`\r
--`+l+"--",S=It.getBlob(m,r,E);if(S===null)throw WT();const k={name:d.fullPath},V=li(i,n.host,n._protocol),C="POST",B=n.maxUploadRetryTime,q=new Aa(V,C,RI(n,t),B);return q.urlParams=k,q.headers=a,q.body=S.uploadData(),q.errorHandler=jd(e),q}class DI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Qt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Qt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Qt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Zn("cannot .send() more than once");if(Mt(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class VI extends DI{initXhr(){this.xhr_.responseType="text"}}function Ra(){return new VI}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){this._service=e,t instanceof Me?this._location=t:this._location=Me.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new rn(e,t)}get root(){const e=new Me(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ud(this._location.path)}get storage(){return this._service}get parent(){const e=_I(this._location.path);if(e===null)return null;const t=new Me(this._location.bucket,e);return new rn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw QT(e)}}function OI(n,e,t){n._throwIfRoot("uploadBytes");const r=NI(n.storage,n._location,Fd(),new It(e,!0),t);return n.storage.makeRequestWithTokens(r,Ra).then(s=>({metadata:s,ref:n}))}function LI(n){n._throwIfRoot("getDownloadURL");const e=PI(n.storage,n._location,Fd());return n.storage.makeRequestWithTokens(e,Ra).then(t=>{if(t===null)throw GT();return t})}function MI(n){n._throwIfRoot("deleteObject");const e=bI(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Ra)}function xI(n,e){const t=yI(n._location.path,e),r=new Me(n._location.bucket,t);return new rn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(n){return/^[A-Za-z]+:\/\//.test(n)}function FI(n,e){return new rn(n,e)}function zd(n,e){if(n instanceof Sa){const t=n;if(t._bucket==null)throw HT();const r=new rn(t,t._bucket);return e!=null?zd(r,e):r}else return e!==void 0?xI(n,e):n}function BI(n,e){if(e&&UI(e)){if(n instanceof Sa)return FI(n,e);throw To("To use ref(service, url), the first argument must be a Storage instance.")}else return zd(n,e)}function ol(n,e){const t=e==null?void 0:e[Nd];return t==null?null:Me.makeFromBucketSpec(t,n)}function qI(n,e,t,r={}){n.host=`${e}:${t}`;const s=Mt(e);s&&(Io(`https://${n.host}/b`),wo("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:gl(i,n.app.options.projectId))}class Sa{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=kd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=OT,this._maxUploadRetryTime=LT,this._requests=new Set,s!=null?this._bucket=Me.makeFromBucketSpec(s,this._host):this._bucket=ol(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Me.makeFromBucketSpec(this._url,e):this._bucket=ol(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){il("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){il("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new XT(Dd());{const a=aI(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const al="@firebase/storage",cl="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="storage";function mw(n,e,t){return n=X(n),OI(n,e,t)}function gw(n){return n=X(n),LI(n)}function _w(n){return n=X(n),MI(n)}function yw(n,e){return n=X(n),BI(n,e)}function Ew(n=Ro(),e){n=X(n);const r=Bs(n,Hd).getImmediate({identifier:e}),s=fl("storage");return s&&jI(r,...s),r}function jI(n,e,t,r={}){qI(n,e,t,r)}function $I(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Sa(t,r,s,e,sn)}function zI(){Yt(new Ct(Hd,$I,"PUBLIC").setMultipleInstances(!0)),We(al,cl,""),We(al,cl,"esm2020")}zI();export{gw as A,pw as B,hw as C,fw as D,ee as T,ew as a,Ew as b,iw as c,TT as d,GI as e,XI as f,YI as g,HI as h,Xp as i,WI as j,uw as k,_w as l,cw as m,lw as n,QI as o,ZI as p,tw as q,yw as r,aw as s,rw as t,KI as u,ow as v,sw as w,nw as x,dw as y,mw as z};
