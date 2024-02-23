(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Xc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const je={},is=[],pn=()=>{},Uy=()=>!1,Aa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zc=t=>t.startsWith("onUpdate:"),tt=Object.assign,eu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},By=Object.prototype.hasOwnProperty,Oe=(t,e)=>By.call(t,e),oe=Array.isArray,os=t=>Ui(t)==="[object Map]",up=t=>Ui(t)==="[object Set]",qh=t=>Ui(t)==="[object Date]",ve=t=>typeof t=="function",Xe=t=>typeof t=="string",lr=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",hp=t=>(Fe(t)||ve(t))&&ve(t.then)&&ve(t.catch),fp=Object.prototype.toString,Ui=t=>fp.call(t),jy=t=>Ui(t).slice(8,-1),dp=t=>Ui(t)==="[object Object]",tu=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,So=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ba=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qy=/-(\w)/g,vn=ba(t=>t.replace(qy,(e,n)=>n?n.toUpperCase():"")),Hy=/\B([A-Z])/g,$r=ba(t=>t.replace(Hy,"-$1").toLowerCase()),Pa=ba(t=>t.charAt(0).toUpperCase()+t.slice(1)),bl=ba(t=>t?`on${Pa(t)}`:""),Lr=(t,e)=>!Object.is(t,e),Co=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},$o=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},sc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},zy=t=>{const e=Xe(t)?Number(t):NaN;return isNaN(e)?t:e};let Hh;const ic=()=>Hh||(Hh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nu(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Xe(r)?Gy(r):nu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Xe(t)||Fe(t))return t}const $y=/;(?![^(]*\))/g,Wy=/:([^]+)/,Ky=/\/\*[^]*?\*\//g;function Gy(t){const e={};return t.replace(Ky,"").split($y).forEach(n=>{if(n){const r=n.split(Wy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mt(t){let e="";if(Xe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=mt(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Qy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yy=Xc(Qy);function pp(t){return!!t||t===""}function Jy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Wo(t[r],e[r]);return n}function Wo(t,e){if(t===e)return!0;let n=qh(t),r=qh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=lr(t),r=lr(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?Jy(t,e):!1;if(n=Fe(t),r=Fe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Wo(t[o],e[o]))return!1}}return String(t)===String(e)}const kt=t=>Xe(t)?t:t==null?"":oe(t)||Fe(t)&&(t.toString===fp||!ve(t.toString))?JSON.stringify(t,gp,2):String(t),gp=(t,e)=>e&&e.__v_isRef?gp(t,e.value):os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Pl(r,i)+" =>"]=s,n),{})}:up(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pl(n))}:lr(e)?Pl(e):Fe(e)&&!oe(e)&&!dp(e)?String(e):e,Pl=(t,e="")=>{var n;return lr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Qt;class mp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Qt,!e&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Qt;try{return Qt=this,e()}finally{Qt=n}}}on(){Qt=this}off(){Qt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Xy(t){return new mp(t)}function Zy(t,e=Qt){e&&e.active&&e.effects.push(t)}function ev(){return Qt}const ru=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_p=t=>(t.w&cr)>0,yp=t=>(t.n&cr)>0,tv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=cr},nv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];_p(s)&&!yp(s)?s.delete(t):e[n++]=s,s.w&=~cr,s.n&=~cr}e.length=n}},Ko=new WeakMap;let Ys=0,cr=1;const oc=30;let Jt;const Nr=Symbol(""),ac=Symbol("");class su{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Zy(this,r)}run(){if(!this.active)return this.fn();let e=Jt,n=tr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Jt,Jt=this,tr=!0,cr=1<<++Ys,Ys<=oc?tv(this):zh(this),this.fn()}finally{Ys<=oc&&nv(this),cr=1<<--Ys,Jt=this.parent,tr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Jt===this?this.deferStop=!0:this.active&&(zh(this),this.onStop&&this.onStop(),this.active=!1)}}function zh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let tr=!0;const vp=[];function Cs(){vp.push(tr),tr=!1}function ks(){const t=vp.pop();tr=t===void 0?!0:t}function Nt(t,e,n){if(tr&&Jt){let r=Ko.get(t);r||Ko.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ru()),Ep(s)}}function Ep(t,e){let n=!1;Ys<=oc?yp(t)||(t.n|=cr,n=!_p(t)):n=!t.has(Jt),n&&(t.add(Jt),Jt.deps.push(t))}function On(t,e,n,r,s,i){const o=Ko.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&oe(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!lr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":oe(t)?tu(n)&&a.push(o.get("length")):(a.push(o.get(Nr)),os(t)&&a.push(o.get(ac)));break;case"delete":oe(t)||(a.push(o.get(Nr)),os(t)&&a.push(o.get(ac)));break;case"set":os(t)&&a.push(o.get(Nr));break}if(a.length===1)a[0]&&lc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);lc(ru(l))}}function lc(t,e){const n=oe(t)?t:[...t];for(const r of n)r.computed&&$h(r);for(const r of n)r.computed||$h(r)}function $h(t,e){(t!==Jt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function rv(t,e){var n;return(n=Ko.get(t))==null?void 0:n.get(e)}const sv=Xc("__proto__,__v_isRef,__isVue"),Tp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(lr)),Wh=iv();function iv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ne(this);for(let i=0,o=this.length;i<o;i++)Nt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ne)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Cs();const r=Ne(this)[e].apply(this,n);return ks(),r}}),t}function ov(t){const e=Ne(this);return Nt(e,"has",t),e.hasOwnProperty(t)}class wp{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?vv:Pp:i?bp:Ap).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){if(o&&Oe(Wh,n))return Reflect.get(Wh,n,r);if(n==="hasOwnProperty")return ov}const a=Reflect.get(e,n,r);return(lr(n)?Tp.has(n):sv(n))||(s||Nt(e,"get",n),i)?a:Rt(a)?o&&tu(n)?a:a.value:Fe(a)?s?Sp(a):Sa(a):a}}class Ip extends wp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const l=gs(i);if(!Go(r)&&!gs(r)&&(i=Ne(i),r=Ne(r)),!oe(e)&&Rt(i)&&!Rt(r))return l?!1:(i.value=r,!0)}const o=oe(e)&&tu(n)?Number(n)<e.length:Oe(e,n),a=Reflect.set(e,n,r,s);return e===Ne(s)&&(o?Lr(r,i)&&On(e,"set",n,r):On(e,"add",n,r)),a}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&On(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!lr(n)||!Tp.has(n))&&Nt(e,"has",n),r}ownKeys(e){return Nt(e,"iterate",oe(e)?"length":Nr),Reflect.ownKeys(e)}}class av extends wp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const lv=new Ip,cv=new av,uv=new Ip(!0),iu=t=>t,Ra=t=>Reflect.getPrototypeOf(t);function co(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ne(t),i=Ne(e);n||(Lr(e,i)&&Nt(s,"get",e),Nt(s,"get",i));const{has:o}=Ra(s),a=r?iu:n?cu:gi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function uo(t,e=!1){const n=this.__v_raw,r=Ne(n),s=Ne(t);return e||(Lr(t,s)&&Nt(r,"has",t),Nt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ho(t,e=!1){return t=t.__v_raw,!e&&Nt(Ne(t),"iterate",Nr),Reflect.get(t,"size",t)}function Kh(t){t=Ne(t);const e=Ne(this);return Ra(e).has.call(e,t)||(e.add(t),On(e,"add",t,t)),this}function Gh(t,e){e=Ne(e);const n=Ne(this),{has:r,get:s}=Ra(n);let i=r.call(n,t);i||(t=Ne(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Lr(e,o)&&On(n,"set",t,e):On(n,"add",t,e),this}function Qh(t){const e=Ne(this),{has:n,get:r}=Ra(e);let s=n.call(e,t);s||(t=Ne(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&On(e,"delete",t,void 0),i}function Yh(){const t=Ne(this),e=t.size!==0,n=t.clear();return e&&On(t,"clear",void 0,void 0),n}function fo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ne(o),l=e?iu:t?cu:gi;return!t&&Nt(a,"iterate",Nr),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function po(t,e,n){return function(...r){const s=this.__v_raw,i=Ne(s),o=os(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?iu:e?cu:gi;return!e&&Nt(i,"iterate",l?ac:Nr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Hn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function hv(){const t={get(i){return co(this,i)},get size(){return ho(this)},has:uo,add:Kh,set:Gh,delete:Qh,clear:Yh,forEach:fo(!1,!1)},e={get(i){return co(this,i,!1,!0)},get size(){return ho(this)},has:uo,add:Kh,set:Gh,delete:Qh,clear:Yh,forEach:fo(!1,!0)},n={get(i){return co(this,i,!0)},get size(){return ho(this,!0)},has(i){return uo.call(this,i,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:fo(!0,!1)},r={get(i){return co(this,i,!0,!0)},get size(){return ho(this,!0)},has(i){return uo.call(this,i,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:fo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=po(i,!1,!1),n[i]=po(i,!0,!1),e[i]=po(i,!1,!0),r[i]=po(i,!0,!0)}),[t,n,e,r]}const[fv,dv,pv,gv]=hv();function ou(t,e){const n=e?t?gv:pv:t?dv:fv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const mv={get:ou(!1,!1)},_v={get:ou(!1,!0)},yv={get:ou(!0,!1)},Ap=new WeakMap,bp=new WeakMap,Pp=new WeakMap,vv=new WeakMap;function Ev(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tv(t){return t.__v_skip||!Object.isExtensible(t)?0:Ev(jy(t))}function Sa(t){return gs(t)?t:au(t,!1,lv,mv,Ap)}function Rp(t){return au(t,!1,uv,_v,bp)}function Sp(t){return au(t,!0,cv,yv,Pp)}function au(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Tv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function as(t){return gs(t)?as(t.__v_raw):!!(t&&t.__v_isReactive)}function gs(t){return!!(t&&t.__v_isReadonly)}function Go(t){return!!(t&&t.__v_isShallow)}function Cp(t){return as(t)||gs(t)}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function lu(t){return $o(t,"__v_skip",!0),t}const gi=t=>Fe(t)?Sa(t):t,cu=t=>Fe(t)?Sp(t):t;function kp(t){tr&&Jt&&(t=Ne(t),Ep(t.dep||(t.dep=ru())))}function Op(t,e){t=Ne(t);const n=t.dep;n&&lc(n)}function Rt(t){return!!(t&&t.__v_isRef===!0)}function Np(t){return xp(t,!1)}function wv(t){return xp(t,!0)}function xp(t,e){return Rt(t)?t:new Iv(t,e)}class Iv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ne(e),this._value=n?e:gi(e)}get value(){return kp(this),this._value}set value(e){const n=this.__v_isShallow||Go(e)||gs(e);e=n?e:Ne(e),Lr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:gi(e),Op(this))}}function xr(t){return Rt(t)?t.value:t}const Av={get:(t,e,n)=>xr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Rt(s)&&!Rt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Vp(t){return as(t)?t:new Proxy(t,Av)}function go(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=Pv(t,n);return e}class bv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return rv(Ne(this._object),this._key)}}function Pv(t,e,n){const r=t[e];return Rt(r)?r:new bv(t,e,n)}class Rv{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new su(e,()=>{this._dirty||(this._dirty=!0,Op(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ne(this);return kp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Sv(t,e,n=!1){let r,s;const i=ve(t);return i?(r=t,s=pn):(r=t.get,s=t.set),new Rv(r,s,i||!s,n)}function nr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ca(i,e,n)}return s}function $t(t,e,n,r){if(ve(t)){const i=nr(t,e,n,r);return i&&hp(i)&&i.catch(o=>{Ca(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push($t(t[i],e,n,r));return s}function Ca(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){nr(l,null,10,[t,o,a]);return}}Cv(t,n,s,r)}function Cv(t,e,n,r=!0){console.error(t)}let mi=!1,cc=!1;const yt=[];let un=0;const ls=[];let Pn=null,Ir=0;const Dp=Promise.resolve();let uu=null;function Mp(t){const e=uu||Dp;return t?e.then(this?t.bind(this):t):e}function kv(t){let e=un+1,n=yt.length;for(;e<n;){const r=e+n>>>1,s=yt[r],i=_i(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function hu(t){(!yt.length||!yt.includes(t,mi&&t.allowRecurse?un+1:un))&&(t.id==null?yt.push(t):yt.splice(kv(t.id),0,t),Lp())}function Lp(){!mi&&!cc&&(cc=!0,uu=Dp.then(Up))}function Ov(t){const e=yt.indexOf(t);e>un&&yt.splice(e,1)}function Nv(t){oe(t)?ls.push(...t):(!Pn||!Pn.includes(t,t.allowRecurse?Ir+1:Ir))&&ls.push(t),Lp()}function Jh(t,e,n=mi?un+1:0){for(;n<yt.length;n++){const r=yt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;yt.splice(n,1),n--,r()}}}function Fp(t){if(ls.length){const e=[...new Set(ls)];if(ls.length=0,Pn){Pn.push(...e);return}for(Pn=e,Pn.sort((n,r)=>_i(n)-_i(r)),Ir=0;Ir<Pn.length;Ir++)Pn[Ir]();Pn=null,Ir=0}}const _i=t=>t.id==null?1/0:t.id,xv=(t,e)=>{const n=_i(t)-_i(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Up(t){cc=!1,mi=!0,yt.sort(xv);try{for(un=0;un<yt.length;un++){const e=yt[un];e&&e.active!==!1&&nr(e,null,14)}}finally{un=0,yt.length=0,Fp(),mi=!1,uu=null,(yt.length||ls.length)&&Up()}}function Vv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||je;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||je;f&&(s=n.map(d=>Xe(d)?d.trim():d)),h&&(s=n.map(sc))}let a,l=r[a=bl(e)]||r[a=bl(vn(e))];!l&&i&&(l=r[a=bl($r(e))]),l&&$t(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$t(c,t,6,s)}}function Bp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ve(t)){const l=c=>{const u=Bp(c,e,!0);u&&(a=!0,tt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Fe(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>o[l]=null):tt(o,i),Fe(t)&&r.set(t,o),o)}function ka(t,e){return!t||!Aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,$r(e))||Oe(t,e))}let ut=null,Oa=null;function Qo(t){const e=ut;return ut=t,Oa=t&&t.type.__scopeId||null,e}function jp(t){Oa=t}function qp(){Oa=null}function ko(t,e=ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&uf(-1);const i=Qo(e);let o;try{o=t(...s)}finally{Qo(i),r._d&&uf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:b,inheritAttrs:S}=t;let k,_;const C=Qo(t);try{if(n.shapeFlag&4){const K=s||r,ge=K;k=cn(u.call(ge,K,h,i,d,f,b)),_=l}else{const K=e;k=cn(K.length>1?K(i,{attrs:l,slots:a,emit:c}):K(i,null)),_=e.props?l:Dv(l)}}catch(K){ii.length=0,Ca(K,t,1),k=qe(Wt)}let Z=k;if(_&&S!==!1){const K=Object.keys(_),{shapeFlag:ge}=Z;K.length&&ge&7&&(o&&K.some(Zc)&&(_=Mv(_,o)),Z=ur(Z,_))}return n.dirs&&(Z=ur(Z),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&(Z.transition=n.transition),k=Z,Qo(C),k}const Dv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Aa(n))&&((e||(e={}))[n]=t[n]);return e},Mv=(t,e)=>{const n={};for(const r in t)(!Zc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Lv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Xh(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!ka(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xh(r,o,c):!0:!!o;return!1}function Xh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ka(n,i))return!0}return!1}function Fv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Hp="components";function Sl(t,e){return Bv(Hp,t,!0,e)||t}const Uv=Symbol.for("v-ndc");function Bv(t,e,n=!0,r=!1){const s=ut||st;if(s){const i=s.type;if(t===Hp){const a=x0(i,!1);if(a&&(a===e||a===vn(e)||a===Pa(vn(e))))return i}const o=Zh(s[t]||i[t],e)||Zh(s.appContext[t],e);return!o&&r?i:o}}function Zh(t,e){return t&&(t[e]||t[vn(e)]||t[Pa(vn(e))])}const jv=t=>t.__isSuspense;function qv(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Nv(t)}const mo={};function Oo(t,e,n){return zp(t,e,n)}function zp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=je){var a;const l=ev()===((a=st)==null?void 0:a.scope)?st:null;let c,u=!1,h=!1;if(Rt(t)?(c=()=>t.value,u=Go(t)):as(t)?(c=()=>t,r=!0):oe(t)?(h=!0,u=t.some(K=>as(K)||Go(K)),c=()=>t.map(K=>{if(Rt(K))return K.value;if(as(K))return Rr(K);if(ve(K))return nr(K,l,2)})):ve(t)?e?c=()=>nr(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),$t(t,l,3,[d])}:c=pn,e&&r){const K=c;c=()=>Rr(K())}let f,d=K=>{f=C.onStop=()=>{nr(K,l,4),f=C.onStop=void 0}},b;if(vi)if(d=pn,e?n&&$t(e,l,3,[c(),h?[]:void 0,d]):c(),s==="sync"){const K=M0();b=K.__watcherHandles||(K.__watcherHandles=[])}else return pn;let S=h?new Array(t.length).fill(mo):mo;const k=()=>{if(C.active)if(e){const K=C.run();(r||u||(h?K.some((ge,Ie)=>Lr(ge,S[Ie])):Lr(K,S)))&&(f&&f(),$t(e,l,3,[K,S===mo?void 0:h&&S[0]===mo?[]:S,d]),S=K)}else C.run()};k.allowRecurse=!!e;let _;s==="sync"?_=k:s==="post"?_=()=>Ot(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),_=()=>hu(k));const C=new su(c,_);e?n?k():S=C.run():s==="post"?Ot(C.run.bind(C),l&&l.suspense):C.run();const Z=()=>{C.stop(),l&&l.scope&&eu(l.scope.effects,C)};return b&&b.push(Z),Z}function Hv(t,e,n){const r=this.proxy,s=Xe(t)?t.includes(".")?$p(r,t):()=>r[t]:t.bind(r,r);let i;ve(e)?i=e:(i=e.handler,n=e);const o=st;ms(this);const a=zp(s,i.bind(r),n);return o?ms(o):Vr(),a}function $p(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Rr(t,e){if(!Fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Rt(t))Rr(t.value,e);else if(oe(t))for(let n=0;n<t.length;n++)Rr(t[n],e);else if(up(t)||os(t))t.forEach(n=>{Rr(n,e)});else if(dp(t))for(const n in t)Rr(t[n],e);return t}function ni(t,e){const n=ut;if(n===null)return t;const r=La(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=je]=e[i];o&&(ve(o)&&(o={mounted:o,updated:o}),o.deep&&Rr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function yr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Cs(),$t(l,n,8,[t.el,a,t,e]),ks())}}const Gn=Symbol("_leaveCb"),_o=Symbol("_enterCb");function zv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yp(()=>{t.isMounted=!0}),Jp(()=>{t.isUnmounting=!0}),t}const jt=[Function,Array],Wp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},$v={name:"BaseTransition",props:Wp,setup(t,{slots:e}){const n=S0(),r=zv();let s;return()=>{const i=e.default&&Gp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==Wt){o=S;break}}const a=Ne(t),{mode:l}=a;if(r.isLeaving)return Cl(o);const c=ef(o);if(!c)return Cl(o);const u=uc(c,a,r,n);hc(c,u);const h=n.subTree,f=h&&ef(h);let d=!1;const{getTransitionKey:b}=c.type;if(b){const S=b();s===void 0?s=S:S!==s&&(s=S,d=!0)}if(f&&f.type!==Wt&&(!Ar(c,f)||d)){const S=uc(f,a,r,n);if(hc(f,S),l==="out-in")return r.isLeaving=!0,S.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Cl(o);l==="in-out"&&c.type!==Wt&&(S.delayLeave=(k,_,C)=>{const Z=Kp(r,f);Z[String(f.key)]=f,k[Gn]=()=>{_(),k[Gn]=void 0,delete u.delayedLeave},u.delayedLeave=C})}return o}}},Wv=$v;function Kp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function uc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:b,onBeforeAppear:S,onAppear:k,onAfterAppear:_,onAppearCancelled:C}=e,Z=String(t.key),K=Kp(n,t),ge=(ue,w)=>{ue&&$t(ue,r,9,w)},Ie=(ue,w)=>{const Ae=w[1];ge(ue,w),oe(ue)?ue.every($e=>$e.length<=1)&&Ae():ue.length<=1&&Ae()},Le={mode:i,persisted:o,beforeEnter(ue){let w=a;if(!n.isMounted)if(s)w=S||a;else return;ue[Gn]&&ue[Gn](!0);const Ae=K[Z];Ae&&Ar(t,Ae)&&Ae.el[Gn]&&Ae.el[Gn](),ge(w,[ue])},enter(ue){let w=l,Ae=c,$e=u;if(!n.isMounted)if(s)w=k||l,Ae=_||c,$e=C||u;else return;let ne=!1;const ke=ue[_o]=nt=>{ne||(ne=!0,nt?ge($e,[ue]):ge(Ae,[ue]),Le.delayedLeave&&Le.delayedLeave(),ue[_o]=void 0)};w?Ie(w,[ue,ke]):ke()},leave(ue,w){const Ae=String(t.key);if(ue[_o]&&ue[_o](!0),n.isUnmounting)return w();ge(h,[ue]);let $e=!1;const ne=ue[Gn]=ke=>{$e||($e=!0,w(),ke?ge(b,[ue]):ge(d,[ue]),ue[Gn]=void 0,K[Ae]===t&&delete K[Ae])};K[Ae]=t,f?Ie(f,[ue,ne]):ne()},clone(ue){return uc(ue,e,n,r)}};return Le}function Cl(t){if(Na(t))return t=ur(t),t.children=null,t}function ef(t){return Na(t)?t.children?t.children[0]:void 0:t}function hc(t,e){t.shapeFlag&6&&t.component?hc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Gp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===We?(o.patchFlag&128&&s++,r=r.concat(Gp(o.children,e,a))):(e||o.type!==Wt)&&r.push(a!=null?ur(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function fu(t,e){return ve(t)?tt({name:t.name},e,{setup:t}):t}const ri=t=>!!t.type.__asyncLoader,Na=t=>t.type.__isKeepAlive;function Kv(t,e){Qp(t,"a",e)}function Gv(t,e){Qp(t,"da",e)}function Qp(t,e,n=st){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Na(s.parent.vnode)&&Qv(r,e,n,s),s=s.parent}}function Qv(t,e,n,r){const s=xa(e,t,r,!0);Xp(()=>{eu(r[e],s)},n)}function xa(t,e,n=st,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Cs(),ms(n);const a=$t(e,n,t,o);return Vr(),ks(),a});return r?s.unshift(i):s.push(i),i}}const Ln=t=>(e,n=st)=>(!vi||t==="sp")&&xa(t,(...r)=>e(...r),n),Yv=Ln("bm"),Yp=Ln("m"),Jv=Ln("bu"),Xv=Ln("u"),Jp=Ln("bum"),Xp=Ln("um"),Zv=Ln("sp"),e0=Ln("rtg"),t0=Ln("rtc");function n0(t,e=st){xa("ec",t,e)}function Yt(t,e,n,r){let s;const i=n&&n[r];if(oe(t)||Xe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function r0(t,e,n={},r,s){if(ut.isCE||ut.parent&&ri(ut.parent)&&ut.parent.isCE)return e!=="default"&&(n.name=e),qe("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),we();const o=i&&Zp(i(n)),a=Da(We,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Zp(t){return t.some(e=>Xo(e)?!(e.type===Wt||e.type===We&&!Zp(e.children)):!0)?t:null}const fc=t=>t?hg(t)?La(t)||t.proxy:fc(t.parent):null,si=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fc(t.parent),$root:t=>fc(t.root),$emit:t=>t.emit,$options:t=>du(t),$forceUpdate:t=>t.f||(t.f=()=>hu(t.update)),$nextTick:t=>t.n||(t.n=Mp.bind(t.proxy)),$watch:t=>Hv.bind(t)}),kl=(t,e)=>t!==je&&!t.__isScriptSetup&&Oe(t,e),s0={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(kl(r,e))return o[e]=1,r[e];if(s!==je&&Oe(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Oe(c,e))return o[e]=3,i[e];if(n!==je&&Oe(n,e))return o[e]=4,n[e];dc&&(o[e]=0)}}const u=si[e];let h,f;if(u)return e==="$attrs"&&Nt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==je&&Oe(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Oe(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return kl(s,e)?(s[e]=n,!0):r!==je&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==je&&Oe(t,o)||kl(e,o)||(a=i[0])&&Oe(a,o)||Oe(r,o)||Oe(si,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tf(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dc=!0;function i0(t){const e=du(t),n=t.proxy,r=t.ctx;dc=!1,e.beforeCreate&&nf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:b,activated:S,deactivated:k,beforeDestroy:_,beforeUnmount:C,destroyed:Z,unmounted:K,render:ge,renderTracked:Ie,renderTriggered:Le,errorCaptured:ue,serverPrefetch:w,expose:Ae,inheritAttrs:$e,components:ne,directives:ke,filters:nt}=e;if(c&&o0(c,r,null),o)for(const y in o){const I=o[y];ve(I)&&(r[y]=I.bind(n))}if(s){const y=s.call(n,n);Fe(y)&&(t.data=Sa(y))}if(dc=!0,i)for(const y in i){const I=i[y],x=ve(I)?I.bind(n,n):ve(I.get)?I.get.bind(n,n):pn,B=!ve(I)&&ve(I.set)?I.set.bind(n):pn,V=bt({get:x,set:B});Object.defineProperty(r,y,{enumerable:!0,configurable:!0,get:()=>V.value,set:O=>V.value=O})}if(a)for(const y in a)eg(a[y],r,n,y);if(l){const y=ve(l)?l.call(n):l;Reflect.ownKeys(y).forEach(I=>{No(I,y[I])})}u&&nf(u,t,"c");function v(y,I){oe(I)?I.forEach(x=>y(x.bind(n))):I&&y(I.bind(n))}if(v(Yv,h),v(Yp,f),v(Jv,d),v(Xv,b),v(Kv,S),v(Gv,k),v(n0,ue),v(t0,Ie),v(e0,Le),v(Jp,C),v(Xp,K),v(Zv,w),oe(Ae))if(Ae.length){const y=t.exposed||(t.exposed={});Ae.forEach(I=>{Object.defineProperty(y,I,{get:()=>n[I],set:x=>n[I]=x})})}else t.exposed||(t.exposed={});ge&&t.render===pn&&(t.render=ge),$e!=null&&(t.inheritAttrs=$e),ne&&(t.components=ne),ke&&(t.directives=ke)}function o0(t,e,n=pn){oe(t)&&(t=pc(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=Nn(s.from||r,s.default,!0):i=Nn(s.from||r):i=Nn(s),Rt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function nf(t,e,n){$t(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function eg(t,e,n,r){const s=r.includes(".")?$p(n,r):()=>n[r];if(Xe(t)){const i=e[t];ve(i)&&Oo(s,i)}else if(ve(t))Oo(s,t.bind(n));else if(Fe(t))if(oe(t))t.forEach(i=>eg(i,e,n,r));else{const i=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(i)&&Oo(s,i,t)}}function du(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Yo(l,c,o,!0)),Yo(l,e,o)),Fe(e)&&i.set(e,l),l}function Yo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Yo(t,i,n,!0),s&&s.forEach(o=>Yo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=a0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const a0={data:rf,props:sf,emits:sf,methods:Js,computed:Js,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Js,directives:Js,watch:c0,provide:rf,inject:l0};function rf(t,e){return e?t?function(){return tt(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function l0(t,e){return Js(pc(t),pc(e))}function pc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?tt(Object.create(null),t,e):e}function sf(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:tt(Object.create(null),tf(t),tf(e??{})):e}function c0(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function tg(){return{app:null,config:{isNativeTag:Uy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let u0=0;function h0(t,e){return function(r,s=null){ve(r)||(r=tt({},r)),s!=null&&!Fe(s)&&(s=null);const i=tg(),o=new WeakSet;let a=!1;const l=i.app={_uid:u0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:L0,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ve(c.install)?(o.add(c),c.install(l,...u)):ve(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=qe(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,La(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Jo=l;try{return c()}finally{Jo=null}}};return l}}let Jo=null;function No(t,e){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[t]=e}}function Nn(t,e,n=!1){const r=st||ut;if(r||Jo){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Jo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}function f0(t,e,n,r=!1){const s={},i={};$o(i,Ma,1),t.propsDefaults=Object.create(null),ng(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Rp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function d0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ne(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ka(t.emitsOptions,f))continue;const d=e[f];if(l)if(Oe(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const b=vn(f);s[b]=gc(l,a,b,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{ng(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!Oe(e,h)&&((u=$r(h))===h||!Oe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=gc(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Oe(e,h))&&(delete i[h],c=!0)}c&&On(t,"set","$attrs")}function ng(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(So(l))continue;const c=e[l];let u;s&&Oe(s,u=vn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:ka(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Ne(n),c=a||je;for(let u=0;u<i.length;u++){const h=i[u];n[h]=gc(s,l,h,c[h],t,!Oe(c,h))}}return o}function gc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Oe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ve(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(ms(s),r=c[n]=l.call(null,e),Vr())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===$r(n))&&(r=!0))}return r}function rg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ve(t)){const u=h=>{l=!0;const[f,d]=rg(h,e,!0);tt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Fe(t)&&r.set(t,is),is;if(oe(i))for(let u=0;u<i.length;u++){const h=vn(i[u]);of(h)&&(o[h]=je)}else if(i)for(const u in i){const h=vn(u);if(of(h)){const f=i[u],d=o[h]=oe(f)||ve(f)?{type:f}:tt({},f);if(d){const b=cf(Boolean,d.type),S=cf(String,d.type);d[0]=b>-1,d[1]=S<0||b<S,(b>-1||Oe(d,"default"))&&a.push(h)}}}const c=[o,a];return Fe(t)&&r.set(t,c),c}function of(t){return t[0]!=="$"}function af(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function lf(t,e){return af(t)===af(e)}function cf(t,e){return oe(e)?e.findIndex(n=>lf(n,t)):ve(e)&&lf(e,t)?0:-1}const sg=t=>t[0]==="_"||t==="$stable",pu=t=>oe(t)?t.map(cn):[cn(t)],p0=(t,e,n)=>{if(e._n)return e;const r=ko((...s)=>pu(e(...s)),n);return r._c=!1,r},ig=(t,e,n)=>{const r=t._ctx;for(const s in t){if(sg(s))continue;const i=t[s];if(ve(i))e[s]=p0(s,i,r);else if(i!=null){const o=pu(i);e[s]=()=>o}}},og=(t,e)=>{const n=pu(e);t.slots.default=()=>n},g0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ne(e),$o(e,"_",n)):ig(e,t.slots={})}else t.slots={},e&&og(t,e);$o(t.slots,Ma,1)},m0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=je;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(tt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ig(e,s)),o=e}else e&&(og(t,e),o={default:1});if(i)for(const a in s)!sg(a)&&o[a]==null&&delete s[a]};function mc(t,e,n,r,s=!1){if(oe(t)){t.forEach((f,d)=>mc(f,e&&(oe(e)?e[d]:e),n,r,s));return}if(ri(r)&&!s)return;const i=r.shapeFlag&4?La(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===je?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Xe(c)?(u[c]=null,Oe(h,c)&&(h[c]=null)):Rt(c)&&(c.value=null)),ve(l))nr(l,a,12,[o,u]);else{const f=Xe(l),d=Rt(l);if(f||d){const b=()=>{if(t.f){const S=f?Oe(h,l)?h[l]:u[l]:l.value;s?oe(S)&&eu(S,i):oe(S)?S.includes(i)||S.push(i):f?(u[l]=[i],Oe(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,Oe(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,Ot(b,n)):b()}}}const Ot=qv;function _0(t){return y0(t)}function y0(t,e){const n=ic();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=pn,insertStaticContent:b}=t,S=(g,m,T,P=null,D=null,U=null,G=!1,H=null,z=!!m.dynamicChildren)=>{if(g===m)return;g&&!Ar(g,m)&&(P=R(g),O(g,D,U,!0),g=null),m.patchFlag===-2&&(z=!1,m.dynamicChildren=null);const{type:E,ref:N,shapeFlag:A}=m;switch(E){case Va:k(g,m,T,P);break;case Wt:_(g,m,T,P);break;case Ol:g==null&&C(m,T,P,G);break;case We:ne(g,m,T,P,D,U,G,H,z);break;default:A&1?ge(g,m,T,P,D,U,G,H,z):A&6?ke(g,m,T,P,D,U,G,H,z):(A&64||A&128)&&E.process(g,m,T,P,D,U,G,H,z,F)}N!=null&&D&&mc(N,g&&g.ref,U,m||g,!m)},k=(g,m,T,P)=>{if(g==null)r(m.el=a(m.children),T,P);else{const D=m.el=g.el;m.children!==g.children&&c(D,m.children)}},_=(g,m,T,P)=>{g==null?r(m.el=l(m.children||""),T,P):m.el=g.el},C=(g,m,T,P)=>{[g.el,g.anchor]=b(g.children,m,T,P,g.el,g.anchor)},Z=({el:g,anchor:m},T,P)=>{let D;for(;g&&g!==m;)D=f(g),r(g,T,P),g=D;r(m,T,P)},K=({el:g,anchor:m})=>{let T;for(;g&&g!==m;)T=f(g),s(g),g=T;s(m)},ge=(g,m,T,P,D,U,G,H,z)=>{G=G||m.type==="svg",g==null?Ie(m,T,P,D,U,G,H,z):w(g,m,D,U,G,H,z)},Ie=(g,m,T,P,D,U,G,H)=>{let z,E;const{type:N,props:A,shapeFlag:W,transition:J,dirs:re}=g;if(z=g.el=o(g.type,U,A&&A.is,A),W&8?u(z,g.children):W&16&&ue(g.children,z,null,P,D,U&&N!=="foreignObject",G,H),re&&yr(g,null,P,"created"),Le(z,g,g.scopeId,G,P),A){for(const Te in A)Te!=="value"&&!So(Te)&&i(z,Te,null,A[Te],U,g.children,P,D,Q);"value"in A&&i(z,"value",null,A.value),(E=A.onVnodeBeforeMount)&&ln(E,P,g)}re&&yr(g,null,P,"beforeMount");const _e=v0(D,J);_e&&J.beforeEnter(z),r(z,m,T),((E=A&&A.onVnodeMounted)||_e||re)&&Ot(()=>{E&&ln(E,P,g),_e&&J.enter(z),re&&yr(g,null,P,"mounted")},D)},Le=(g,m,T,P,D)=>{if(T&&d(g,T),P)for(let U=0;U<P.length;U++)d(g,P[U]);if(D){let U=D.subTree;if(m===U){const G=D.vnode;Le(g,G,G.scopeId,G.slotScopeIds,D.parent)}}},ue=(g,m,T,P,D,U,G,H,z=0)=>{for(let E=z;E<g.length;E++){const N=g[E]=H?Qn(g[E]):cn(g[E]);S(null,N,m,T,P,D,U,G,H)}},w=(g,m,T,P,D,U,G)=>{const H=m.el=g.el;let{patchFlag:z,dynamicChildren:E,dirs:N}=m;z|=g.patchFlag&16;const A=g.props||je,W=m.props||je;let J;T&&vr(T,!1),(J=W.onVnodeBeforeUpdate)&&ln(J,T,m,g),N&&yr(m,g,T,"beforeUpdate"),T&&vr(T,!0);const re=D&&m.type!=="foreignObject";if(E?Ae(g.dynamicChildren,E,H,T,P,re,U):G||I(g,m,H,null,T,P,re,U,!1),z>0){if(z&16)$e(H,m,A,W,T,P,D);else if(z&2&&A.class!==W.class&&i(H,"class",null,W.class,D),z&4&&i(H,"style",A.style,W.style,D),z&8){const _e=m.dynamicProps;for(let Te=0;Te<_e.length;Te++){const Ve=_e[Te],ce=A[Ve],Ue=W[Ve];(Ue!==ce||Ve==="value")&&i(H,Ve,ce,Ue,D,g.children,T,P,Q)}}z&1&&g.children!==m.children&&u(H,m.children)}else!G&&E==null&&$e(H,m,A,W,T,P,D);((J=W.onVnodeUpdated)||N)&&Ot(()=>{J&&ln(J,T,m,g),N&&yr(m,g,T,"updated")},P)},Ae=(g,m,T,P,D,U,G)=>{for(let H=0;H<m.length;H++){const z=g[H],E=m[H],N=z.el&&(z.type===We||!Ar(z,E)||z.shapeFlag&70)?h(z.el):T;S(z,E,N,null,P,D,U,G,!0)}},$e=(g,m,T,P,D,U,G)=>{if(T!==P){if(T!==je)for(const H in T)!So(H)&&!(H in P)&&i(g,H,T[H],null,G,m.children,D,U,Q);for(const H in P){if(So(H))continue;const z=P[H],E=T[H];z!==E&&H!=="value"&&i(g,H,E,z,G,m.children,D,U,Q)}"value"in P&&i(g,"value",T.value,P.value)}},ne=(g,m,T,P,D,U,G,H,z)=>{const E=m.el=g?g.el:a(""),N=m.anchor=g?g.anchor:a("");let{patchFlag:A,dynamicChildren:W,slotScopeIds:J}=m;J&&(H=H?H.concat(J):J),g==null?(r(E,T,P),r(N,T,P),ue(m.children,T,N,D,U,G,H,z)):A>0&&A&64&&W&&g.dynamicChildren?(Ae(g.dynamicChildren,W,T,D,U,G,H),(m.key!=null||D&&m===D.subTree)&&ag(g,m,!0)):I(g,m,T,N,D,U,G,H,z)},ke=(g,m,T,P,D,U,G,H,z)=>{m.slotScopeIds=H,g==null?m.shapeFlag&512?D.ctx.activate(m,T,P,G,z):nt(m,T,P,D,U,G,z):p(g,m,z)},nt=(g,m,T,P,D,U,G)=>{const H=g.component=R0(g,P,D);if(Na(g)&&(H.ctx.renderer=F),C0(H),H.asyncDep){if(D&&D.registerDep(H,v),!g.el){const z=H.subTree=qe(Wt);_(null,z,m,T)}return}v(H,g,m,T,D,U,G)},p=(g,m,T)=>{const P=m.component=g.component;if(Lv(g,m,T))if(P.asyncDep&&!P.asyncResolved){y(P,m,T);return}else P.next=m,Ov(P.update),P.update();else m.el=g.el,P.vnode=m},v=(g,m,T,P,D,U,G)=>{const H=()=>{if(g.isMounted){let{next:N,bu:A,u:W,parent:J,vnode:re}=g,_e=N,Te;vr(g,!1),N?(N.el=re.el,y(g,N,G)):N=re,A&&Co(A),(Te=N.props&&N.props.onVnodeBeforeUpdate)&&ln(Te,J,N,re),vr(g,!0);const Ve=Rl(g),ce=g.subTree;g.subTree=Ve,S(ce,Ve,h(ce.el),R(ce),g,D,U),N.el=Ve.el,_e===null&&Fv(g,Ve.el),W&&Ot(W,D),(Te=N.props&&N.props.onVnodeUpdated)&&Ot(()=>ln(Te,J,N,re),D)}else{let N;const{el:A,props:W}=m,{bm:J,m:re,parent:_e}=g,Te=ri(m);if(vr(g,!1),J&&Co(J),!Te&&(N=W&&W.onVnodeBeforeMount)&&ln(N,_e,m),vr(g,!0),A&&se){const Ve=()=>{g.subTree=Rl(g),se(A,g.subTree,g,D,null)};Te?m.type.__asyncLoader().then(()=>!g.isUnmounted&&Ve()):Ve()}else{const Ve=g.subTree=Rl(g);S(null,Ve,T,P,g,D,U),m.el=Ve.el}if(re&&Ot(re,D),!Te&&(N=W&&W.onVnodeMounted)){const Ve=m;Ot(()=>ln(N,_e,Ve),D)}(m.shapeFlag&256||_e&&ri(_e.vnode)&&_e.vnode.shapeFlag&256)&&g.a&&Ot(g.a,D),g.isMounted=!0,m=T=P=null}},z=g.effect=new su(H,()=>hu(E),g.scope),E=g.update=()=>z.run();E.id=g.uid,vr(g,!0),E()},y=(g,m,T)=>{m.component=g;const P=g.vnode.props;g.vnode=m,g.next=null,d0(g,m.props,P,T),m0(g,m.children,T),Cs(),Jh(g),ks()},I=(g,m,T,P,D,U,G,H,z=!1)=>{const E=g&&g.children,N=g?g.shapeFlag:0,A=m.children,{patchFlag:W,shapeFlag:J}=m;if(W>0){if(W&128){B(E,A,T,P,D,U,G,H,z);return}else if(W&256){x(E,A,T,P,D,U,G,H,z);return}}J&8?(N&16&&Q(E,D,U),A!==E&&u(T,A)):N&16?J&16?B(E,A,T,P,D,U,G,H,z):Q(E,D,U,!0):(N&8&&u(T,""),J&16&&ue(A,T,P,D,U,G,H,z))},x=(g,m,T,P,D,U,G,H,z)=>{g=g||is,m=m||is;const E=g.length,N=m.length,A=Math.min(E,N);let W;for(W=0;W<A;W++){const J=m[W]=z?Qn(m[W]):cn(m[W]);S(g[W],J,T,null,D,U,G,H,z)}E>N?Q(g,D,U,!0,!1,A):ue(m,T,P,D,U,G,H,z,A)},B=(g,m,T,P,D,U,G,H,z)=>{let E=0;const N=m.length;let A=g.length-1,W=N-1;for(;E<=A&&E<=W;){const J=g[E],re=m[E]=z?Qn(m[E]):cn(m[E]);if(Ar(J,re))S(J,re,T,null,D,U,G,H,z);else break;E++}for(;E<=A&&E<=W;){const J=g[A],re=m[W]=z?Qn(m[W]):cn(m[W]);if(Ar(J,re))S(J,re,T,null,D,U,G,H,z);else break;A--,W--}if(E>A){if(E<=W){const J=W+1,re=J<N?m[J].el:P;for(;E<=W;)S(null,m[E]=z?Qn(m[E]):cn(m[E]),T,re,D,U,G,H,z),E++}}else if(E>W)for(;E<=A;)O(g[E],D,U,!0),E++;else{const J=E,re=E,_e=new Map;for(E=re;E<=W;E++){const dt=m[E]=z?Qn(m[E]):cn(m[E]);dt.key!=null&&_e.set(dt.key,E)}let Te,Ve=0;const ce=W-re+1;let Ue=!1,Gt=0;const on=new Array(ce);for(E=0;E<ce;E++)on[E]=0;for(E=J;E<=A;E++){const dt=g[E];if(Ve>=ce){O(dt,D,U,!0);continue}let St;if(dt.key!=null)St=_e.get(dt.key);else for(Te=re;Te<=W;Te++)if(on[Te-re]===0&&Ar(dt,m[Te])){St=Te;break}St===void 0?O(dt,D,U,!0):(on[St-re]=E+1,St>=Gt?Gt=St:Ue=!0,S(dt,m[St],T,null,D,U,G,H,z),Ve++)}const Un=Ue?E0(on):is;for(Te=Un.length-1,E=ce-1;E>=0;E--){const dt=re+E,St=m[dt],xt=dt+1<N?m[dt+1].el:P;on[E]===0?S(null,St,T,xt,D,U,G,H,z):Ue&&(Te<0||E!==Un[Te]?V(St,T,xt,2):Te--)}}},V=(g,m,T,P,D=null)=>{const{el:U,type:G,transition:H,children:z,shapeFlag:E}=g;if(E&6){V(g.component.subTree,m,T,P);return}if(E&128){g.suspense.move(m,T,P);return}if(E&64){G.move(g,m,T,F);return}if(G===We){r(U,m,T);for(let A=0;A<z.length;A++)V(z[A],m,T,P);r(g.anchor,m,T);return}if(G===Ol){Z(g,m,T);return}if(P!==2&&E&1&&H)if(P===0)H.beforeEnter(U),r(U,m,T),Ot(()=>H.enter(U),D);else{const{leave:A,delayLeave:W,afterLeave:J}=H,re=()=>r(U,m,T),_e=()=>{A(U,()=>{re(),J&&J()})};W?W(U,re,_e):_e()}else r(U,m,T)},O=(g,m,T,P=!1,D=!1)=>{const{type:U,props:G,ref:H,children:z,dynamicChildren:E,shapeFlag:N,patchFlag:A,dirs:W}=g;if(H!=null&&mc(H,null,T,g,!0),N&256){m.ctx.deactivate(g);return}const J=N&1&&W,re=!ri(g);let _e;if(re&&(_e=G&&G.onVnodeBeforeUnmount)&&ln(_e,m,g),N&6)le(g.component,T,P);else{if(N&128){g.suspense.unmount(T,P);return}J&&yr(g,null,m,"beforeUnmount"),N&64?g.type.remove(g,m,T,D,F,P):E&&(U!==We||A>0&&A&64)?Q(E,m,T,!1,!0):(U===We&&A&384||!D&&N&16)&&Q(z,m,T),P&&L(g)}(re&&(_e=G&&G.onVnodeUnmounted)||J)&&Ot(()=>{_e&&ln(_e,m,g),J&&yr(g,null,m,"unmounted")},T)},L=g=>{const{type:m,el:T,anchor:P,transition:D}=g;if(m===We){Y(T,P);return}if(m===Ol){K(g);return}const U=()=>{s(T),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:G,delayLeave:H}=D,z=()=>G(T,U);H?H(g.el,U,z):z()}else U()},Y=(g,m)=>{let T;for(;g!==m;)T=f(g),s(g),g=T;s(m)},le=(g,m,T)=>{const{bum:P,scope:D,update:U,subTree:G,um:H}=g;P&&Co(P),D.stop(),U&&(U.active=!1,O(G,g,m,T)),H&&Ot(H,m),Ot(()=>{g.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Q=(g,m,T,P=!1,D=!1,U=0)=>{for(let G=U;G<g.length;G++)O(g[G],m,T,P,D)},R=g=>g.shapeFlag&6?R(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),M=(g,m,T)=>{g==null?m._vnode&&O(m._vnode,null,null,!0):S(m._vnode||null,g,m,null,null,null,T),Jh(),Fp(),m._vnode=g},F={p:S,um:O,m:V,r:L,mt:nt,mc:ue,pc:I,pbc:Ae,n:R,o:t};let $,se;return e&&([$,se]=e(F)),{render:M,hydrate:$,createApp:h0(M,$)}}function vr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function v0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ag(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Qn(s[i]),a.el=o.el),n||ag(o,a)),a.type===Va&&(a.el=o.el)}}function E0(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const T0=t=>t.__isTeleport,We=Symbol.for("v-fgt"),Va=Symbol.for("v-txt"),Wt=Symbol.for("v-cmt"),Ol=Symbol.for("v-stc"),ii=[];let Xt=null;function we(t=!1){ii.push(Xt=t?null:[])}function w0(){ii.pop(),Xt=ii[ii.length-1]||null}let yi=1;function uf(t){yi+=t}function lg(t){return t.dynamicChildren=yi>0?Xt||is:null,w0(),yi>0&&Xt&&Xt.push(t),t}function be(t,e,n,r,s,i){return lg(ee(t,e,n,r,s,i,!0))}function Da(t,e,n,r,s){return lg(qe(t,e,n,r,s,!0))}function Xo(t){return t?t.__v_isVNode===!0:!1}function Ar(t,e){return t.type===e.type&&t.key===e.key}const Ma="__vInternal",cg=({key:t})=>t??null,xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Xe(t)||Rt(t)||ve(t)?{i:ut,r:t,k:e,f:!!n}:t:null);function ee(t,e=null,n=null,r=0,s=null,i=t===We?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cg(e),ref:e&&xo(e),scopeId:Oa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ut};return a?(gu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Xe(n)?8:16),yi>0&&!o&&Xt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Xt.push(l),l}const qe=I0;function I0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Uv)&&(t=Wt),Xo(t)){const a=ur(t,e,!0);return n&&gu(a,n),yi>0&&!i&&Xt&&(a.shapeFlag&6?Xt[Xt.indexOf(t)]=a:Xt.push(a)),a.patchFlag|=-2,a}if(V0(t)&&(t=t.__vccOpts),e){e=A0(e);let{class:a,style:l}=e;a&&!Xe(a)&&(e.class=mt(a)),Fe(l)&&(Cp(l)&&!oe(l)&&(l=tt({},l)),e.style=nu(l))}const o=Xe(t)?1:jv(t)?128:T0(t)?64:Fe(t)?4:ve(t)?2:0;return ee(t,e,n,r,s,o,i,!0)}function A0(t){return t?Cp(t)||Ma in t?tt({},t):t:null}function ur(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?ug(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&cg(a),ref:e&&e.ref?n&&s?oe(s)?s.concat(xo(e)):[s,xo(e)]:xo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ur(t.ssContent),ssFallback:t.ssFallback&&ur(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Vo(t=" ",e=0){return qe(Va,null,t,e)}function qt(t="",e=!1){return e?(we(),Da(Wt,null,t)):qe(Wt,null,t)}function cn(t){return t==null||typeof t=="boolean"?qe(Wt):oe(t)?qe(We,null,t.slice()):typeof t=="object"?Qn(t):qe(Va,null,String(t))}function Qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ur(t)}function gu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),gu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ma in e)?e._ctx=ut:s===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),r&64?(n=16,e=[Vo(e)]):n=8);t.children=e,t.shapeFlag|=n}function ug(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mt([e.class,r.class]));else if(s==="style")e.style=nu([e.style,r.style]);else if(Aa(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ln(t,e,n,r=null){$t(t,e,7,[n,r])}const b0=tg();let P0=0;function R0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||b0,i={uid:P0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rg(r,s),emitsOptions:Bp(r,s),emit:null,emitted:null,propsDefaults:je,inheritAttrs:r.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Vv.bind(null,i),t.ce&&t.ce(i),i}let st=null;const S0=()=>st||ut;let mu,Xr,hf="__VUE_INSTANCE_SETTERS__";(Xr=ic()[hf])||(Xr=ic()[hf]=[]),Xr.push(t=>st=t),mu=t=>{Xr.length>1?Xr.forEach(e=>e(t)):Xr[0](t)};const ms=t=>{mu(t),t.scope.on()},Vr=()=>{st&&st.scope.off(),mu(null)};function hg(t){return t.vnode.shapeFlag&4}let vi=!1;function C0(t,e=!1){vi=e;const{props:n,children:r}=t.vnode,s=hg(t);f0(t,n,s,e),g0(t,r);const i=s?k0(t,e):void 0;return vi=!1,i}function k0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=lu(new Proxy(t.ctx,s0));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?N0(t):null;ms(t),Cs();const i=nr(r,t,0,[t.props,s]);if(ks(),Vr(),hp(i)){if(i.then(Vr,Vr),e)return i.then(o=>{ff(t,o,e)}).catch(o=>{Ca(o,t,0)});t.asyncDep=i}else ff(t,i,e)}else fg(t,e)}function ff(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=Vp(e)),fg(t,n)}let df;function fg(t,e,n){const r=t.type;if(!t.render){if(!e&&df&&!r.render){const s=r.template||du(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=tt(tt({isCustomElement:i,delimiters:a},o),l);r.render=df(s,c)}}t.render=r.render||pn}{ms(t),Cs();try{i0(t)}finally{ks(),Vr()}}}function O0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Nt(t,"get","$attrs"),e[n]}}))}function N0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return O0(t)},slots:t.slots,emit:t.emit,expose:e}}function La(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vp(lu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in si)return si[n](t)},has(e,n){return n in e||n in si}}))}function x0(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function V0(t){return ve(t)&&"__vccOpts"in t}const bt=(t,e)=>Sv(t,e,vi);function _u(t,e,n){const r=arguments.length;return r===2?Fe(e)&&!oe(e)?Xo(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xo(n)&&(n=[n]),qe(t,e,n))}const D0=Symbol.for("v-scx"),M0=()=>Nn(D0),L0="3.3.13",F0="http://www.w3.org/2000/svg",br=typeof document<"u"?document:null,pf=br&&br.createElement("template"),U0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?br.createElementNS(F0,t):br.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>br.createTextNode(t),createComment:t=>br.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>br.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{pf.innerHTML=r?`<svg>${t}</svg>`:t;const a=pf.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zn="transition",zs="animation",Ei=Symbol("_vtc"),oi=(t,{slots:e})=>_u(Wv,B0(t),e);oi.displayName="Transition";const dg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};oi.props=tt({},Wp,dg);const Er=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},gf=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function B0(t){const e={};for(const ne in t)ne in dg||(e[ne]=t[ne]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,b=j0(s),S=b&&b[0],k=b&&b[1],{onBeforeEnter:_,onEnter:C,onEnterCancelled:Z,onLeave:K,onLeaveCancelled:ge,onBeforeAppear:Ie=_,onAppear:Le=C,onAppearCancelled:ue=Z}=e,w=(ne,ke,nt)=>{Tr(ne,ke?u:a),Tr(ne,ke?c:o),nt&&nt()},Ae=(ne,ke)=>{ne._isLeaving=!1,Tr(ne,h),Tr(ne,d),Tr(ne,f),ke&&ke()},$e=ne=>(ke,nt)=>{const p=ne?Le:C,v=()=>w(ke,ne,nt);Er(p,[ke,v]),mf(()=>{Tr(ke,ne?l:i),$n(ke,ne?u:a),gf(p)||_f(ke,r,S,v)})};return tt(e,{onBeforeEnter(ne){Er(_,[ne]),$n(ne,i),$n(ne,o)},onBeforeAppear(ne){Er(Ie,[ne]),$n(ne,l),$n(ne,c)},onEnter:$e(!1),onAppear:$e(!0),onLeave(ne,ke){ne._isLeaving=!0;const nt=()=>Ae(ne,ke);$n(ne,h),z0(),$n(ne,f),mf(()=>{ne._isLeaving&&(Tr(ne,h),$n(ne,d),gf(K)||_f(ne,r,k,nt))}),Er(K,[ne,nt])},onEnterCancelled(ne){w(ne,!1),Er(Z,[ne])},onAppearCancelled(ne){w(ne,!0),Er(ue,[ne])},onLeaveCancelled(ne){Ae(ne),Er(ge,[ne])}})}function j0(t){if(t==null)return null;if(Fe(t))return[Nl(t.enter),Nl(t.leave)];{const e=Nl(t);return[e,e]}}function Nl(t){return zy(t)}function $n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ei]||(t[Ei]=new Set)).add(e)}function Tr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ei];n&&(n.delete(e),n.size||(t[Ei]=void 0))}function mf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let q0=0;function _f(t,e,n,r){const s=t._endId=++q0,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=H0(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),i()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function H0(t,e){const n=window.getComputedStyle(t),r=b=>(n[b]||"").split(", "),s=r(`${zn}Delay`),i=r(`${zn}Duration`),o=yf(s,i),a=r(`${zs}Delay`),l=r(`${zs}Duration`),c=yf(a,l);let u=null,h=0,f=0;e===zn?o>0&&(u=zn,h=o,f=i.length):e===zs?c>0&&(u=zs,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?zn:zs:null,f=u?u===zn?i.length:l.length:0);const d=u===zn&&/\b(transform|all)(,|$)/.test(r(`${zn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function yf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>vf(n)+vf(t[r])))}function vf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function z0(){return document.body.offsetHeight}function $0(t,e,n){const r=t[Ei];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const yu=Symbol("_vod"),W0={beforeMount(t,{value:e},{transition:n}){t[yu]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):$s(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),$s(t,!0),r.enter(t)):r.leave(t,()=>{$s(t,!1)}):$s(t,e))},beforeUnmount(t,{value:e}){$s(t,e)}};function $s(t,e){t.style.display=e?t[yu]:"none"}const K0=Symbol("");function G0(t,e,n){const r=t.style,s=Xe(n);if(n&&!s){if(e&&!Xe(e))for(const i in e)n[i]==null&&_c(r,i,"");for(const i in n)_c(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[K0];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");yu in t&&(r.display=i)}}const Ef=/\s*!important$/;function _c(t,e,n){if(oe(n))n.forEach(r=>_c(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Q0(t,e);Ef.test(n)?t.setProperty($r(r),n.replace(Ef,""),"important"):t[r]=n}}const Tf=["Webkit","Moz","ms"],xl={};function Q0(t,e){const n=xl[e];if(n)return n;let r=vn(e);if(r!=="filter"&&r in t)return xl[e]=r;r=Pa(r);for(let s=0;s<Tf.length;s++){const i=Tf[s]+r;if(i in t)return xl[e]=i}return e}const wf="http://www.w3.org/1999/xlink";function Y0(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wf,e.slice(6,e.length)):t.setAttributeNS(wf,e,n);else{const i=Yy(e);n==null||i&&!pp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function J0(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=pp(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Pr(t,e,n,r){t.addEventListener(e,n,r)}function X0(t,e,n,r){t.removeEventListener(e,n,r)}const If=Symbol("_vei");function Z0(t,e,n,r,s=null){const i=t[If]||(t[If]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=eE(e);if(r){const c=i[e]=rE(r,s);Pr(t,a,c,l)}else o&&(X0(t,a,o,l),i[e]=void 0)}}const Af=/(?:Once|Passive|Capture)$/;function eE(t){let e;if(Af.test(t)){e={};let r;for(;r=t.match(Af);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$r(t.slice(2)),e]}let Vl=0;const tE=Promise.resolve(),nE=()=>Vl||(tE.then(()=>Vl=0),Vl=Date.now());function rE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$t(sE(r,n.value),e,5,[r])};return n.value=t,n.attached=nE(),n}function sE(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const bf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,iE=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?$0(t,r,s):e==="style"?G0(t,n,r):Aa(e)?Zc(e)||Z0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):oE(t,e,r,s))?J0(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Y0(t,e,r,s))};function oE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&bf(e)&&ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bf(e)&&Xe(n)?!1:e in t}const Zo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>Co(e,n):e};function aE(t){t.target.composing=!0}function Pf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cs=Symbol("_assign"),lE={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[cs]=Zo(s);const i=r||s.props&&s.props.type==="number";Pr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=sc(a)),t[cs](a)}),n&&Pr(t,"change",()=>{t.value=t.value.trim()}),e||(Pr(t,"compositionstart",aE),Pr(t,"compositionend",Pf),Pr(t,"change",Pf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[cs]=Zo(i),t.composing)return;const o=s||t.type==="number"?sc(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Dl={created(t,{value:e},n){t.checked=Wo(e,n.props.value),t[cs]=Zo(n),Pr(t,"change",()=>{t[cs](cE(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[cs]=Zo(r),e!==n&&(t.checked=Wo(e,r.props.value))}};function cE(t){return"_value"in t?t._value:t.value}const uE=["ctrl","shift","alt","meta"],hE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>uE.some(n=>t[`${n}Key`]&&!e.includes(n))},fE=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=hE[e[o]];if(a&&a(s,e))return}return t(s,...i)})},dE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ea=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=$r(s.key);if(e.some(o=>o===i||dE[o]===i))return t(s)})},pE=tt({patchProp:iE},U0);let Rf;function gE(){return Rf||(Rf=_0(pE))}const mE=(...t)=>{const e=gE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_E(r);if(!s)return;const i=e._component;!ve(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function _E(t){return Xe(t)?document.querySelector(t):t}var yE=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const vE=Symbol();var Sf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Sf||(Sf={}));function EE(){const t=Xy(!0),e=t.run(()=>Np({}));let n=[],r=[];const s=lu({install(i){s._a=i,i.provide(vE,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!yE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const es=typeof window<"u";function TE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const De=Object.assign;function Ml(t,e){const n={};for(const r in e){const s=e[r];n[r]=tn(s)?s.map(t):t(s)}return n}const ai=()=>{},tn=Array.isArray,wE=/\/$/,IE=t=>t.replace(wE,"");function Ll(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=RE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function AE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Cf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&_s(e.matched[r],n.matched[s])&&pg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _s(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!PE(t[n],e[n]))return!1;return!0}function PE(t,e){return tn(t)?kf(t,e):tn(e)?kf(e,t):t===e}function kf(t,e){return tn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function RE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ti;(function(t){t.pop="pop",t.push="push"})(Ti||(Ti={}));var li;(function(t){t.back="back",t.forward="forward",t.unknown=""})(li||(li={}));function SE(t){if(!t)if(es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),IE(t)}const CE=/^[^#]+#/;function kE(t,e){return t.replace(CE,"#")+e}function OE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function NE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=OE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Of(t,e){return(history.state?history.state.position-e:-1)+t}const yc=new Map;function xE(t,e){yc.set(t,e)}function VE(t){const e=yc.get(t);return yc.delete(t),e}let DE=()=>location.protocol+"//"+location.host;function gg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Cf(l,"")}return Cf(n,t)+r+s}function ME(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=gg(t,location),b=n.value,S=e.value;let k=0;if(f){if(n.value=d,e.value=f,o&&o===b){o=null;return}k=S?f.position-S.position:0}else r(d);s.forEach(_=>{_(n.value,b,{delta:k,type:Ti.pop,direction:k?k>0?li.forward:li.back:li.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const b=s.indexOf(f);b>-1&&s.splice(b,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(De({},f.state,{scroll:Fa()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Nf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fa():null}}function LE(t){const{history:e,location:n}=window,r={value:gg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:DE()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=De({},e.state,Nf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=De({},s.value,e.state,{forward:l,scroll:Fa()});i(u.current,u,!0);const h=De({},Nf(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function FE(t){t=SE(t);const e=LE(t),n=ME(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=De({location:"",base:t,go:r,createHref:kE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function UE(t){return typeof t=="string"||t&&typeof t=="object"}function mg(t){return typeof t=="string"||typeof t=="symbol"}const Wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_g=Symbol("");var xf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xf||(xf={}));function ys(t,e){return De(new Error,{type:t,[_g]:!0},e)}function bn(t,e){return t instanceof Error&&_g in t&&(e==null||!!(t.type&e))}const Vf="[^/]+?",BE={sensitive:!1,strict:!1,start:!0,end:!0},jE=/[.+*?^${}()[\]/\\]/g;function qE(t,e){const n=De({},BE,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(jE,"\\$&"),d+=40;else if(f.type===1){const{value:b,repeatable:S,optional:k,regexp:_}=f;i.push({name:b,repeatable:S,optional:k});const C=_||Vf;if(C!==Vf){d+=10;try{new RegExp(`(${C})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${b}" (${C}): `+K.message)}}let Z=S?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(Z=k&&c.length<2?`(?:/${Z})`:"/"+Z),k&&(Z+="?"),s+=Z,d+=20,k&&(d+=-8),S&&(d+=-20),C===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",b=i[f-1];h[b.name]=d&&b.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:b,repeatable:S,optional:k}=d,_=b in c?c[b]:"";if(tn(_)&&!S)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const C=tn(_)?_.join("/"):_;if(!C)if(k)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${b}"`);u+=C}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function HE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function zE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=HE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Df(r))return 1;if(Df(s))return-1}return s.length-r.length}function Df(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $E={type:0,value:""},WE=/[a-zA-Z0-9_]/;function KE(t){if(!t)return[[]];if(t==="/")return[[$E]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:WE.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function GE(t,e,n){const r=qE(KE(t.path),n),s=De(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function QE(t,e){const n=[],r=new Map;e=Ff({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,b=YE(u);b.aliasOf=f&&f.record;const S=Ff(e,u),k=[b];if("alias"in u){const Z=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of Z)k.push(De({},b,{components:f?f.record.components:b.components,path:K,aliasOf:f?f.record:b}))}let _,C;for(const Z of k){const{path:K}=Z;if(h&&K[0]!=="/"){const ge=h.record.path,Ie=ge[ge.length-1]==="/"?"":"/";Z.path=h.record.path+(K&&Ie+K)}if(_=GE(Z,h,S),f?f.alias.push(_):(C=C||_,C!==_&&C.alias.push(_),d&&u.name&&!Lf(_)&&o(u.name)),b.children){const ge=b.children;for(let Ie=0;Ie<ge.length;Ie++)i(ge[Ie],_,f&&f.children[Ie])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return C?()=>{o(C)}:ai}function o(u){if(mg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&zE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!yg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Lf(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},b,S;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw ys(1,{location:u});S=f.record.name,d=De(Mf(h.params,f.keys.filter(C=>!C.optional).map(C=>C.name)),u.params&&Mf(u.params,f.keys.map(C=>C.name))),b=f.stringify(d)}else if("path"in u)b=u.path,f=n.find(C=>C.re.test(b)),f&&(d=f.parse(b),S=f.record.name);else{if(f=h.name?r.get(h.name):n.find(C=>C.re.test(h.path)),!f)throw ys(1,{location:u,currentLocation:h});S=f.record.name,d=De({},h.params,u.params),b=f.stringify(d)}const k=[];let _=f;for(;_;)k.unshift(_.record),_=_.parent;return{name:S,path:b,params:d,matched:k,meta:XE(k)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Mf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function YE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:JE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function JE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function XE(t){return t.reduce((e,n)=>De(e,n.meta),{})}function Ff(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yg(t,e){return e.children.some(n=>n===t||yg(t,n))}const vg=/#/g,ZE=/&/g,eT=/\//g,tT=/=/g,nT=/\?/g,Eg=/\+/g,rT=/%5B/g,sT=/%5D/g,Tg=/%5E/g,iT=/%60/g,wg=/%7B/g,oT=/%7C/g,Ig=/%7D/g,aT=/%20/g;function vu(t){return encodeURI(""+t).replace(oT,"|").replace(rT,"[").replace(sT,"]")}function lT(t){return vu(t).replace(wg,"{").replace(Ig,"}").replace(Tg,"^")}function vc(t){return vu(t).replace(Eg,"%2B").replace(aT,"+").replace(vg,"%23").replace(ZE,"%26").replace(iT,"`").replace(wg,"{").replace(Ig,"}").replace(Tg,"^")}function cT(t){return vc(t).replace(tT,"%3D")}function uT(t){return vu(t).replace(vg,"%23").replace(nT,"%3F")}function hT(t){return t==null?"":uT(t).replace(eT,"%2F")}function ta(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function fT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Eg," "),o=i.indexOf("="),a=ta(o<0?i:i.slice(0,o)),l=o<0?null:ta(i.slice(o+1));if(a in e){let c=e[a];tn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Uf(t){let e="";for(let n in t){const r=t[n];if(n=cT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(tn(r)?r.map(i=>i&&vc(i)):[r&&vc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=tn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const pT=Symbol(""),Bf=Symbol(""),Eu=Symbol(""),Ag=Symbol(""),Ec=Symbol("");function Ws(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Yn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ys(4,{from:n,to:e})):h instanceof Error?a(h):UE(h)?a(ys(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Fl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(gT(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Yn(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=TE(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Yn(f,n,r,i,o)()}))}}return s}function gT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jf(t){const e=Nn(Eu),n=Nn(Ag),r=bt(()=>e.resolve(xr(t.to))),s=bt(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(_s.bind(null,u));if(f>-1)return f;const d=qf(l[c-2]);return c>1&&qf(u)===d&&h[h.length-1].path!==d?h.findIndex(_s.bind(null,l[c-2])):f}),i=bt(()=>s.value>-1&&vT(n.params,r.value.params)),o=bt(()=>s.value>-1&&s.value===n.matched.length-1&&pg(n.params,r.value.params));function a(l={}){return yT(l)?e[xr(t.replace)?"replace":"push"](xr(t.to)).catch(ai):Promise.resolve()}return{route:r,href:bt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const mT=fu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jf,setup(t,{slots:e}){const n=Sa(jf(t)),{options:r}=Nn(Eu),s=bt(()=>({[Hf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:_u("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),_T=mT;function yT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function vT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!tn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function qf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hf=(t,e,n)=>t??e??n,ET=fu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Nn(Ec),s=bt(()=>t.route||r.value),i=Nn(Bf,0),o=bt(()=>{let c=xr(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=bt(()=>s.value.matched[o.value]);No(Bf,bt(()=>o.value+1)),No(pT,a),No(Ec,s);const l=Np();return Oo(()=>[l.value,a.value,t.name],([c,u,h],[f,d,b])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!_s(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return zf(n.default,{Component:f,route:c});const d=h.props[u],b=d?d===!0?c.params:typeof d=="function"?d(c):d:null,k=_u(f,De({},b,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return zf(n.default,{Component:k,route:c})||k}}});function zf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const bg=ET;function TT(t){const e=QE(t.routes,t),n=t.parseQuery||fT,r=t.stringifyQuery||Uf,s=t.history,i=Ws(),o=Ws(),a=Ws(),l=wv(Wn);let c=Wn;es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ml.bind(null,R=>""+R),h=Ml.bind(null,hT),f=Ml.bind(null,ta);function d(R,M){let F,$;return mg(R)?(F=e.getRecordMatcher(R),$=M):$=R,e.addRoute($,F)}function b(R){const M=e.getRecordMatcher(R);M&&e.removeRoute(M)}function S(){return e.getRoutes().map(R=>R.record)}function k(R){return!!e.getRecordMatcher(R)}function _(R,M){if(M=De({},M||l.value),typeof R=="string"){const T=Ll(n,R,M.path),P=e.resolve({path:T.path},M),D=s.createHref(T.fullPath);return De(T,P,{params:f(P.params),hash:ta(T.hash),redirectedFrom:void 0,href:D})}let F;if("path"in R)F=De({},R,{path:Ll(n,R.path,M.path).path});else{const T=De({},R.params);for(const P in T)T[P]==null&&delete T[P];F=De({},R,{params:h(T)}),M.params=h(M.params)}const $=e.resolve(F,M),se=R.hash||"";$.params=u(f($.params));const g=AE(r,De({},R,{hash:lT(se),path:$.path})),m=s.createHref(g);return De({fullPath:g,hash:se,query:r===Uf?dT(R.query):R.query||{}},$,{redirectedFrom:void 0,href:m})}function C(R){return typeof R=="string"?Ll(n,R,l.value.path):De({},R)}function Z(R,M){if(c!==R)return ys(8,{from:M,to:R})}function K(R){return Le(R)}function ge(R){return K(De(C(R),{replace:!0}))}function Ie(R){const M=R.matched[R.matched.length-1];if(M&&M.redirect){const{redirect:F}=M;let $=typeof F=="function"?F(R):F;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=C($):{path:$},$.params={}),De({query:R.query,hash:R.hash,params:"path"in $?{}:R.params},$)}}function Le(R,M){const F=c=_(R),$=l.value,se=R.state,g=R.force,m=R.replace===!0,T=Ie(F);if(T)return Le(De(C(T),{state:typeof T=="object"?De({},se,T.state):se,force:g,replace:m}),M||F);const P=F;P.redirectedFrom=M;let D;return!g&&bE(r,$,F)&&(D=ys(16,{to:P,from:$}),V($,$,!0,!1)),(D?Promise.resolve(D):Ae(P,$)).catch(U=>bn(U)?bn(U,2)?U:B(U):I(U,P,$)).then(U=>{if(U){if(bn(U,2))return Le(De({replace:m},C(U.to),{state:typeof U.to=="object"?De({},se,U.to.state):se,force:g}),M||P)}else U=ne(P,$,!0,m,se);return $e(P,$,U),U})}function ue(R,M){const F=Z(R,M);return F?Promise.reject(F):Promise.resolve()}function w(R){const M=Y.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(R):R()}function Ae(R,M){let F;const[$,se,g]=wT(R,M);F=Fl($.reverse(),"beforeRouteLeave",R,M);for(const T of $)T.leaveGuards.forEach(P=>{F.push(Yn(P,R,M))});const m=ue.bind(null,R,M);return F.push(m),Q(F).then(()=>{F=[];for(const T of i.list())F.push(Yn(T,R,M));return F.push(m),Q(F)}).then(()=>{F=Fl(se,"beforeRouteUpdate",R,M);for(const T of se)T.updateGuards.forEach(P=>{F.push(Yn(P,R,M))});return F.push(m),Q(F)}).then(()=>{F=[];for(const T of g)if(T.beforeEnter)if(tn(T.beforeEnter))for(const P of T.beforeEnter)F.push(Yn(P,R,M));else F.push(Yn(T.beforeEnter,R,M));return F.push(m),Q(F)}).then(()=>(R.matched.forEach(T=>T.enterCallbacks={}),F=Fl(g,"beforeRouteEnter",R,M),F.push(m),Q(F))).then(()=>{F=[];for(const T of o.list())F.push(Yn(T,R,M));return F.push(m),Q(F)}).catch(T=>bn(T,8)?T:Promise.reject(T))}function $e(R,M,F){a.list().forEach($=>w(()=>$(R,M,F)))}function ne(R,M,F,$,se){const g=Z(R,M);if(g)return g;const m=M===Wn,T=es?history.state:{};F&&($||m?s.replace(R.fullPath,De({scroll:m&&T&&T.scroll},se)):s.push(R.fullPath,se)),l.value=R,V(R,M,F,m),B()}let ke;function nt(){ke||(ke=s.listen((R,M,F)=>{if(!le.listening)return;const $=_(R),se=Ie($);if(se){Le(De(se,{replace:!0}),$).catch(ai);return}c=$;const g=l.value;es&&xE(Of(g.fullPath,F.delta),Fa()),Ae($,g).catch(m=>bn(m,12)?m:bn(m,2)?(Le(m.to,$).then(T=>{bn(T,20)&&!F.delta&&F.type===Ti.pop&&s.go(-1,!1)}).catch(ai),Promise.reject()):(F.delta&&s.go(-F.delta,!1),I(m,$,g))).then(m=>{m=m||ne($,g,!1),m&&(F.delta&&!bn(m,8)?s.go(-F.delta,!1):F.type===Ti.pop&&bn(m,20)&&s.go(-1,!1)),$e($,g,m)}).catch(ai)}))}let p=Ws(),v=Ws(),y;function I(R,M,F){B(R);const $=v.list();return $.length?$.forEach(se=>se(R,M,F)):console.error(R),Promise.reject(R)}function x(){return y&&l.value!==Wn?Promise.resolve():new Promise((R,M)=>{p.add([R,M])})}function B(R){return y||(y=!R,nt(),p.list().forEach(([M,F])=>R?F(R):M()),p.reset()),R}function V(R,M,F,$){const{scrollBehavior:se}=t;if(!es||!se)return Promise.resolve();const g=!F&&VE(Of(R.fullPath,0))||($||!F)&&history.state&&history.state.scroll||null;return Mp().then(()=>se(R,M,g)).then(m=>m&&NE(m)).catch(m=>I(m,R,M))}const O=R=>s.go(R);let L;const Y=new Set,le={currentRoute:l,listening:!0,addRoute:d,removeRoute:b,hasRoute:k,getRoutes:S,resolve:_,options:t,push:K,replace:ge,go:O,back:()=>O(-1),forward:()=>O(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:v.add,isReady:x,install(R){const M=this;R.component("RouterLink",_T),R.component("RouterView",bg),R.config.globalProperties.$router=M,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>xr(l)}),es&&!L&&l.value===Wn&&(L=!0,K(s.location).catch(se=>{}));const F={};for(const se in Wn)Object.defineProperty(F,se,{get:()=>l.value[se],enumerable:!0});R.provide(Eu,M),R.provide(Ag,Rp(F)),R.provide(Ec,l);const $=R.unmount;Y.add(R),R.unmount=function(){Y.delete(R),Y.size<1&&(c=Wn,ke&&ke(),ke=null,l.value=Wn,L=!1,y=!1),$()}}};function Q(R){return R.reduce((M,F)=>M.then(()=>w(F)),Promise.resolve())}return le}function wT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>_s(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>_s(c,l))||s.push(l))}return[n,r,s]}const IT=fu({__name:"App",setup(t){return(e,n)=>(we(),Da(xr(bg)))}});var Tc={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(t){return e=>["number","string","boolean"].indexOf(typeof e)!==-1||e==null},required:!1},modelValue:{validator:function(t){return e=>["number","string","boolean"].indexOf(typeof e)!==-1||e==null},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(t,e){const n=function(o,a,l){const{value:c,modelValue:u,falseValue:h,trueValue:f,disabled:d}=go(o),b=u&&u.value!==void 0?u:c,S=bt(()=>b.value===f.value),k=Z=>{a.emit("input",Z),a.emit("update:modelValue",Z),a.emit("change",Z)},_=()=>{k(f.value)},C=()=>{k(h.value)};return[null,void 0,!1,0,"0","off"].indexOf(b.value)!==-1&&[h.value,f.value].indexOf(b.value)===-1&&C(),[!0,1,"1","on"].indexOf(b.value)!==-1&&[h.value,f.value].indexOf(b.value)===-1&&_(),{externalValue:b,checked:S,update:k,check:_,uncheck:C,handleInput:Z=>{k(Z.target.checked?f.value:h.value)},handleClick:()=>{d.value||(S.value?C():_())}}}(t,e),r=function(o,a,l){const{trueValue:c,falseValue:u,onLabel:h,offLabel:f}=go(o),d=l.checked,b=l.update;return{label:bt(()=>{let S=d.value?h.value:f.value;return S||(S="&nbsp;"),S}),toggle:()=>{b(d.value?u.value:c.value)},on:()=>{b(c.value)},off:()=>{b(u.value)}}}(t,0,{checked:n.checked,update:n.update}),s=function(o,a,l){const c=go(o),u=c.disabled,h=l.checked,f=bt(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...c.classes.value}));return{classList:bt(()=>({container:f.value.container,toggle:[f.value.toggle,u.value?h.value?f.value.toggleOnDisabled:f.value.toggleOffDisabled:h.value?f.value.toggleOn:f.value.toggleOff],handle:[f.value.handle,u.value?h.value?f.value.handleOnDisabled:f.value.handleOffDisabled:h.value?f.value.handleOn:f.value.handleOff],label:f.value.label}))}}(t,0,{checked:n.checked}),i=function(o,a,l){const{disabled:c}=go(o),u=l.check,h=l.uncheck,f=l.checked;return{handleSpace:()=>{c.value||(f.value?h():u())}}}(t,0,{check:n.check,uncheck:n.uncheck,checked:n.checked});return{...n,...s,...r,...i}}};const AT=["tabindex","aria-checked","aria-describedby","aria-labelledby"],bT=["id","name","value","checked","disabled"],PT=["innerHTML"],RT=["checked"];Tc.render=function(t,e,n,r,s,i){return we(),be("div",ug({class:t.classList.container,tabindex:n.disabled?void 0:0,"aria-checked":t.checked,"aria-describedby":n.describedby,"aria-labelledby":n.labelledby,role:"switch"},n.aria,{onKeypress:e[1]||(e[1]=ea(fE((...o)=>t.handleSpace&&t.handleSpace(...o),["prevent"]),["space"]))}),[ni(ee("input",{type:"checkbox",id:n.id,name:n.name,value:n.trueValue,checked:t.checked,disabled:n.disabled},null,8,bT),[[W0,!1]]),ee("div",{class:mt(t.classList.toggle),onClick:e[0]||(e[0]=(...o)=>t.handleClick&&t.handleClick(...o))},[ee("span",{class:mt(t.classList.handle)},null,2),r0(t.$slots,"label",{checked:t.checked,classList:t.classList},()=>[ee("span",{class:mt(t.classList.label),innerHTML:t.label},null,10,PT)]),n.required?(we(),be("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:t.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,RT)):qt("v-if",!0)],2)],16,AT)},Tc.__file="src/Toggle.vue";var $f={};/**
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
 */const Pg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ST=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Rg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ST(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new CT;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const b=c<<6&192|h;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kT=function(t){const e=Pg(t);return Rg.encodeByteArray(e,!0)},na=function(t){return kT(t).replace(/\./g,"")},Sg=function(t){try{return Rg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function OT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const NT=()=>OT().__FIREBASE_DEFAULTS__,xT=()=>{if(typeof process>"u"||typeof $f>"u")return;const t=$f.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sg(t[1]);return e&&JSON.parse(e)},Tu=()=>{try{return NT()||xT()||VT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cg=t=>{var e,n;return(n=(e=Tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},DT=t=>{const e=Cg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kg=()=>{var t;return(t=Tu())===null||t===void 0?void 0:t.config},Og=t=>{var e;return(e=Tu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class MT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function LT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[na(JSON.stringify(n)),na(JSON.stringify(o)),a].join(".")}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function UT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function BT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jT(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qT(){try{return typeof indexedDB=="object"}catch{return!1}}function HT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const zT="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zT,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bi.prototype.create)}}class Bi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$T(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,a,r)}}function $T(t,e){return t.replace(WT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const WT=/\{\$([^}]+)}/g;function KT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ra(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wf(i)&&Wf(o)){if(!ra(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wf(t){return t!==null&&typeof t=="object"}/**
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
 */function ji(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function GT(t,e){const n=new QT(t,e);return n.subscribe.bind(n)}class QT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ul),s.error===void 0&&(s.error=Ul),s.complete===void 0&&(s.complete=Ul);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ul(){}/**
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
 */function nn(t){return t&&t._delegate?t._delegate:t}class Fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wr="[DEFAULT]";/**
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
 */class JT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new MT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZT(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XT(t){return t===wr?void 0:t}function ZT(t){return t.instantiationMode==="EAGER"}/**
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
 */class ew{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const tw={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},nw=Se.INFO,rw={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},sw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wu{constructor(e){this.name=e,this._logLevel=nw,this._logHandler=sw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const iw=(t,e)=>e.some(n=>t instanceof n);let Kf,Gf;function ow(){return Kf||(Kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aw(){return Gf||(Gf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ng=new WeakMap,wc=new WeakMap,xg=new WeakMap,Bl=new WeakMap,Iu=new WeakMap;function lw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ng.set(n,t)}).catch(()=>{}),Iu.set(e,t),e}function cw(t){if(wc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});wc.set(t,e)}let Ic={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uw(t){Ic=t(Ic)}function hw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jl(this),e,...n);return xg.set(r,e.sort?e.sort():[e]),rr(r)}:aw().includes(t)?function(...e){return t.apply(jl(this),e),rr(Ng.get(this))}:function(...e){return rr(t.apply(jl(this),e))}}function fw(t){return typeof t=="function"?hw(t):(t instanceof IDBTransaction&&cw(t),iw(t,ow())?new Proxy(t,Ic):t)}function rr(t){if(t instanceof IDBRequest)return lw(t);if(Bl.has(t))return Bl.get(t);const e=fw(t);return e!==t&&(Bl.set(t,e),Iu.set(e,t)),e}const jl=t=>Iu.get(t);function dw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(rr(o.result),l.oldVersion,l.newVersion,rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const pw=["get","getKey","getAll","getAllKeys","count"],gw=["put","add","delete","clear"],ql=new Map;function Qf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ql.get(e))return ql.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=gw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pw.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return ql.set(e,i),i}uw(t=>({...t,get:(e,n,r)=>Qf(e,n)||t.get(e,n,r),has:(e,n)=>!!Qf(e,n)||t.has(e,n)}));/**
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
 */class mw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_w(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _w(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ac="@firebase/app",Yf="0.9.25";/**
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
 */const Ur=new wu("@firebase/app"),yw="@firebase/app-compat",vw="@firebase/analytics-compat",Ew="@firebase/analytics",Tw="@firebase/app-check-compat",ww="@firebase/app-check",Iw="@firebase/auth",Aw="@firebase/auth-compat",bw="@firebase/database",Pw="@firebase/database-compat",Rw="@firebase/functions",Sw="@firebase/functions-compat",Cw="@firebase/installations",kw="@firebase/installations-compat",Ow="@firebase/messaging",Nw="@firebase/messaging-compat",xw="@firebase/performance",Vw="@firebase/performance-compat",Dw="@firebase/remote-config",Mw="@firebase/remote-config-compat",Lw="@firebase/storage",Fw="@firebase/storage-compat",Uw="@firebase/firestore",Bw="@firebase/firestore-compat",jw="firebase",qw="10.7.1";/**
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
 */const bc="[DEFAULT]",Hw={[Ac]:"fire-core",[yw]:"fire-core-compat",[Ew]:"fire-analytics",[vw]:"fire-analytics-compat",[ww]:"fire-app-check",[Tw]:"fire-app-check-compat",[Iw]:"fire-auth",[Aw]:"fire-auth-compat",[bw]:"fire-rtdb",[Pw]:"fire-rtdb-compat",[Rw]:"fire-fn",[Sw]:"fire-fn-compat",[Cw]:"fire-iid",[kw]:"fire-iid-compat",[Ow]:"fire-fcm",[Nw]:"fire-fcm-compat",[xw]:"fire-perf",[Vw]:"fire-perf-compat",[Dw]:"fire-rc",[Mw]:"fire-rc-compat",[Lw]:"fire-gcs",[Fw]:"fire-gcs-compat",[Uw]:"fire-fst",[Bw]:"fire-fst-compat","fire-js":"fire-js",[jw]:"fire-js-all"};/**
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
 */const sa=new Map,Pc=new Map;function zw(t,e){try{t.container.addComponent(e)}catch(n){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vs(t){const e=t.name;if(Pc.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;Pc.set(e,t);for(const n of sa.values())zw(n,t);return!0}function Au(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const $w={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sr=new Bi("app","Firebase",$w);/**
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
 */class Ww{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const Os=qw;function Vg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw sr.create("bad-app-name",{appName:String(s)});if(n||(n=kg()),!n)throw sr.create("no-options");const i=sa.get(s);if(i){if(ra(n,i.options)&&ra(r,i.config))return i;throw sr.create("duplicate-app",{appName:s})}const o=new ew(s);for(const l of Pc.values())o.addComponent(l);const a=new Ww(n,r,o);return sa.set(s,a),a}function Dg(t=bc){const e=sa.get(t);if(!e&&t===bc&&kg())return Vg();if(!e)throw sr.create("no-app",{appName:t});return e}function ir(t,e,n){var r;let s=(r=Hw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(a.join(" "));return}vs(new Fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Kw="firebase-heartbeat-database",Gw=1,wi="firebase-heartbeat-store";let Hl=null;function Mg(){return Hl||(Hl=dw(Kw,Gw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wi)}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),Hl}async function Qw(t){try{return await(await Mg()).transaction(wi).objectStore(wi).get(Lg(t))}catch(e){if(e instanceof Fn)Ur.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(n.message)}}}async function Jf(t,e){try{const r=(await Mg()).transaction(wi,"readwrite");await r.objectStore(wi).put(e,Lg(t)),await r.done}catch(n){if(n instanceof Fn)Ur.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ur.warn(r.message)}}}function Lg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yw=1024,Jw=30*24*60*60*1e3;class Xw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Jw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xf(),{heartbeatsToSend:r,unsentEntries:s}=Zw(this._heartbeatsCache.heartbeats),i=na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xf(){return new Date().toISOString().substring(0,10)}function Zw(t,e=Yw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Zf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qT()?HT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zf(t){return na(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tI(t){vs(new Fr("platform-logger",e=>new mw(e),"PRIVATE")),vs(new Fr("heartbeat",e=>new Xw(e),"PRIVATE")),ir(Ac,Yf,t),ir(Ac,Yf,"esm2017"),ir("fire-js","")}tI("");var nI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X,bu=bu||{},fe=nI||self;function Ua(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function qi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function rI(t){return Object.prototype.hasOwnProperty.call(t,zl)&&t[zl]||(t[zl]=++sI)}var zl="closure_uid_"+(1e9*Math.random()>>>0),sI=0;function iI(t,e,n){return t.call.apply(t.bind,arguments)}function oI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=iI:vt=oI,vt.apply(null,arguments)}function yo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function pr(){this.s=this.s,this.o=this.o}var aI=0;pr.prototype.s=!1;pr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),aI!=0)&&rI(this)};pr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Pu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ed(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ua(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var lI=function(){if(!fe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};fe.addEventListener("test",n,e),fe.removeEventListener("test",n,e)}catch{}return t}();function Ii(t){return/^[\s\xa0]*$/.test(t)}function Ba(){var t=fe.navigator;return t&&(t=t.userAgent)?t:""}function hn(t){return Ba().indexOf(t)!=-1}function Ru(t){return Ru[" "](t),t}Ru[" "]=function(){};function cI(t,e){var n=tA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var uI=hn("Opera"),Es=hn("Trident")||hn("MSIE"),Ug=hn("Edge"),Rc=Ug||Es,Bg=hn("Gecko")&&!(Ba().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge"))&&!(hn("Trident")||hn("MSIE"))&&!hn("Edge"),hI=Ba().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge");function jg(){var t=fe.document;return t?t.documentMode:void 0}var Sc;e:{var $l="",Wl=function(){var t=Ba();if(Bg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ug)return/Edge\/([\d\.]+)/.exec(t);if(Es)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hI)return/WebKit\/(\S+)/.exec(t);if(uI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Wl&&($l=Wl?Wl[1]:""),Es){var Kl=jg();if(Kl!=null&&Kl>parseFloat($l)){Sc=String(Kl);break e}}Sc=$l}var Cc;if(fe.document&&Es){var td=jg();Cc=td||parseInt(Sc,10)||void 0}else Cc=void 0;var fI=Cc;function Ai(t,e){if(Et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Bg){e:{try{Ru(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:dI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ai.$.h.call(this)}}ot(Ai,Et);var dI={2:"touch",3:"pen",4:"mouse"};Ai.prototype.h=function(){Ai.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Hi="closure_listenable_"+(1e6*Math.random()|0),pI=0;function gI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++pI,this.fa=this.ia=!1}function ja(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Su(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function mI(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function qg(t){const e={};for(const n in t)e[n]=t[n];return e}const nd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<nd.length;i++)n=nd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function qa(t){this.src=t,this.g={},this.h=0}qa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Oc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new gI(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function kc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Fg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ja(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Oc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Cu="closure_lm_"+(1e6*Math.random()|0),Gl={};function zg(t,e,n,r,s){if(r&&r.once)return Wg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)zg(t,e[i],n,r,s);return null}return n=Nu(n),t&&t[Hi]?t.O(e,n,qi(r)?!!r.capture:!!r,s):$g(t,e,n,!1,r,s)}function $g(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=qi(s)?!!s.capture:!!s,a=Ou(t);if(a||(t[Cu]=a=new qa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=_I(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)lI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Gg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _I(){function t(n){return e.call(t.src,t.listener,n)}const e=yI;return t}function Wg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Wg(t,e[i],n,r,s);return null}return n=Nu(n),t&&t[Hi]?t.P(e,n,qi(r)?!!r.capture:!!r,s):$g(t,e,n,!0,r,s)}function Kg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Kg(t,e[i],n,r,s);else r=qi(r)?!!r.capture:!!r,n=Nu(n),t&&t[Hi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Oc(i,n,r,s),-1<n&&(ja(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ou(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Oc(e,n,r,s)),(n=-1<t?e[t]:null)&&ku(n))}function ku(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Hi])kc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Gg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ou(e))?(kc(n,t),n.h==0&&(n.src=null,e[Cu]=null)):ja(t)}}}function Gg(t){return t in Gl?Gl[t]:Gl[t]="on"+t}function yI(t,e){if(t.fa)t=!0;else{e=new Ai(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ku(t),t=n.call(r,e)}return t}function Ou(t){return t=t[Cu],t instanceof qa?t:null}var Ql="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nu(t){return typeof t=="function"?t:(t[Ql]||(t[Ql]=function(e){return t.handleEvent(e)}),t[Ql])}function it(){pr.call(this),this.i=new qa(this),this.S=this,this.J=null}ot(it,pr);it.prototype[Hi]=!0;it.prototype.removeEventListener=function(t,e,n,r){Kg(this,t,e,n,r)};function ht(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Et(e,t);else if(e instanceof Et)e.target=e.target||t;else{var s=e;e=new Et(r,t),Hg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=vo(o,r,!0,e)&&s}if(o=e.g=t,s=vo(o,r,!0,e)&&s,s=vo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=vo(o,r,!1,e)&&s}it.prototype.N=function(){if(it.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ja(n[r]);delete t.g[e],t.h--}}this.J=null};it.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};it.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function vo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&kc(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var xu=fe.JSON.stringify;class vI{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function EI(){var t=Vu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class TI{constructor(){this.h=this.g=null}add(e,n){const r=Qg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Qg=new vI(()=>new wI,t=>t.reset());class wI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function II(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function AI(t){fe.setTimeout(()=>{throw t},0)}let bi,Pi=!1,Vu=new TI,Yg=()=>{const t=fe.Promise.resolve(void 0);bi=()=>{t.then(bI)}};var bI=()=>{for(var t;t=EI();){try{t.h.call(t.g)}catch(n){AI(n)}var e=Qg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pi=!1};function Ha(t,e){it.call(this),this.h=t||1,this.g=e||fe,this.j=vt(this.qb,this),this.l=Date.now()}ot(Ha,it);X=Ha.prototype;X.ga=!1;X.T=null;X.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&(Du(this),this.start()))}};X.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Du(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}X.N=function(){Ha.$.N.call(this),Du(this),delete this.g};function Mu(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:fe.setTimeout(t,e||0)}function Jg(t){t.g=Mu(()=>{t.g=null,t.i&&(t.i=!1,Jg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class PI extends pr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jg(this)}N(){super.N(),this.g&&(fe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(t){pr.call(this),this.h=t,this.g={}}ot(Ri,pr);var rd=[];function Xg(t,e,n,r){Array.isArray(n)||(n&&(rd[0]=n.toString()),n=rd);for(var s=0;s<n.length;s++){var i=zg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Zg(t){Su(t.g,function(e,n){this.g.hasOwnProperty(n)&&ku(e)},t),t.g={}}Ri.prototype.N=function(){Ri.$.N.call(this),Zg(this)};Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function za(){this.g=!0}za.prototype.Ea=function(){this.g=!1};function RI(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function SI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function ss(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+kI(t,n)+(r?" "+r:"")})}function CI(t,e){t.info(function(){return"TIMEOUT: "+e})}za.prototype.info=function(){};function kI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return xu(n)}catch{return e}}var Wr={},sd=null;function $a(){return sd=sd||new it}Wr.Ta="serverreachability";function em(t){Et.call(this,Wr.Ta,t)}ot(em,Et);function Si(t){const e=$a();ht(e,new em(e))}Wr.STAT_EVENT="statevent";function tm(t,e){Et.call(this,Wr.STAT_EVENT,t),this.stat=e}ot(tm,Et);function Pt(t){const e=$a();ht(e,new tm(e,t))}Wr.Ua="timingevent";function nm(t,e){Et.call(this,Wr.Ua,t),this.size=e}ot(nm,Et);function zi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return fe.setTimeout(function(){t()},e)}var Wa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Lu(){}Lu.prototype.h=null;function id(t){return t.h||(t.h=t.i())}function sm(){}var $i={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fu(){Et.call(this,"d")}ot(Fu,Et);function Uu(){Et.call(this,"c")}ot(Uu,Et);var Nc;function Ka(){}ot(Ka,Lu);Ka.prototype.g=function(){return new XMLHttpRequest};Ka.prototype.i=function(){return{}};Nc=new Ka;function Wi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ri(this),this.P=OI,t=Rc?125:void 0,this.V=new Ha(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new im}function im(){this.i=null,this.g="",this.h=!1}var OI=45e3,om={},xc={};X=Wi.prototype;X.setTimeout=function(t){this.P=t};function Vc(t,e,n){t.L=1,t.A=Qa(xn(e)),t.u=n,t.S=!0,am(t,null)}function am(t,e){t.G=Date.now(),Ki(t),t.B=xn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),gm(n.i,"t",r),t.o=0,n=t.l.J,t.h=new im,t.g=Mm(t.l,n?e:null,!t.u),0<t.O&&(t.M=new PI(vt(t.Pa,t,t.g),t.O)),Xg(t.U,t.g,"readystatechange",t.nb),e=t.I?qg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Si(),RI(t.j,t.v,t.B,t.m,t.W,t.u)}X.nb=function(t){t=t.target;const e=this.M;e&&fn(t)==3?e.l():this.Pa(t)};X.Pa=function(t){try{if(t==this.g)e:{const u=fn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Rc||this.g&&(this.h.h||this.g.ja()||cd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Si(3):Si(2)),Ga(this);var n=this.g.da();this.ca=n;t:if(lm(this)){var r=cd(this.g);t="";var s=r.length,i=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sr(this),ci(this);var o="";break t}this.h.i=new fe.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,SI(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ii(a)){var c=a;break t}}c=null}if(n=c)ss(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dc(this,n);else{this.i=!1,this.s=3,Pt(12),Sr(this),ci(this);break e}}this.S?(cm(this,u,o),Rc&&this.i&&u==3&&(Xg(this.U,this.V,"tick",this.mb),this.V.start())):(ss(this.j,this.m,o,null),Dc(this,o)),u==4&&Sr(this),this.i&&!this.J&&(u==4?Nm(this.l,this):(this.i=!1,Ki(this)))}else XI(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Sr(this),ci(this)}}}catch{}finally{}};function lm(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function cm(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=NI(t,n),s==xc){e==4&&(t.s=4,Pt(14),r=!1),ss(t.j,t.m,null,"[Incomplete Response]");break}else if(s==om){t.s=4,Pt(15),ss(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ss(t.j,t.m,s,null),Dc(t,s);lm(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$u(e),e.M=!0,Pt(11))):(ss(t.j,t.m,n,"[Invalid Chunked Response]"),Sr(t),ci(t))}X.mb=function(){if(this.g){var t=fn(this.g),e=this.g.ja();this.o<e.length&&(Ga(this),cm(this,t,e),this.i&&t!=4&&Ki(this))}};function NI(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?xc:(n=Number(e.substring(n,r)),isNaN(n)?om:(r+=1,r+n>e.length?xc:(e=e.slice(r,r+n),t.o=r+n,e)))}X.cancel=function(){this.J=!0,Sr(this)};function Ki(t){t.Y=Date.now()+t.P,um(t,t.P)}function um(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=zi(vt(t.lb,t),e)}function Ga(t){t.C&&(fe.clearTimeout(t.C),t.C=null)}X.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(CI(this.j,this.B),this.L!=2&&(Si(),Pt(17)),Sr(this),this.s=2,ci(this)):um(this,this.Y-t)};function ci(t){t.l.H==0||t.J||Nm(t.l,t)}function Sr(t){Ga(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Du(t.V),Zg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Dc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Mc(n.i,t))){if(!t.K&&Mc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)aa(n),Za(n);else break e;zu(n),Pt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=zi(vt(n.ib,n),6e3));if(1>=ym(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Cr(n,11)}else if((t.K||n.g==t)&&aa(n),!Ii(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const b=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var i=r.i;i.g||b.indexOf("spdy")==-1&&b.indexOf("quic")==-1&&b.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Bu(i,i.h),i.h=null))}if(r.F){const S=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,He(r.I,r.F,S))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Dm(r,r.J?r.pa:null,r.Y),o.K){vm(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Ga(a),Ki(a)),r.g=o}else km(r);0<n.j.length&&el(n)}else c[0]!="stop"&&c[0]!="close"||Cr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Cr(n,7):Hu(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Si(4)}catch{}}function xI(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ua(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function VI(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ua(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function hm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ua(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=VI(t),r=xI(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var fm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Dr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Dr){this.h=t.h,ia(this,t.j),this.s=t.s,this.g=t.g,oa(this,t.m),this.l=t.l;var e=t.i,n=new Ci;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),od(this,n),this.o=t.o}else t&&(e=String(t).match(fm))?(this.h=!1,ia(this,e[1]||"",!0),this.s=Xs(e[2]||""),this.g=Xs(e[3]||"",!0),oa(this,e[4]),this.l=Xs(e[5]||"",!0),od(this,e[6]||"",!0),this.o=Xs(e[7]||"")):(this.h=!1,this.i=new Ci(null,this.h))}Dr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zs(e,ad,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zs(e,ad,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zs(n,n.charAt(0)=="/"?FI:LI,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zs(n,BI)),t.join("")};function xn(t){return new Dr(t)}function ia(t,e,n){t.j=n?Xs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function od(t,e,n){e instanceof Ci?(t.i=e,jI(t.i,t.h)):(n||(e=Zs(e,UI)),t.i=new Ci(e,t.h))}function He(t,e,n){t.i.set(e,n)}function Qa(t){return He(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,MI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function MI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ad=/[#\/\?@]/g,LI=/[#\?:]/g,FI=/[#\?]/g,UI=/[#\?@]/g,BI=/#/g;function Ci(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gr(t){t.g||(t.g=new Map,t.h=0,t.i&&DI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}X=Ci.prototype;X.add=function(t,e){gr(this),this.i=null,t=Ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dm(t,e){gr(t),e=Ns(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function pm(t,e){return gr(t),e=Ns(t,e),t.g.has(e)}X.forEach=function(t,e){gr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};X.ta=function(){gr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};X.Z=function(t){gr(this);let e=[];if(typeof t=="string")pm(this,t)&&(e=e.concat(this.g.get(Ns(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};X.set=function(t,e){return gr(this),this.i=null,t=Ns(this,t),pm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};X.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function gm(t,e,n){dm(t,e),0<n.length&&(t.i=null,t.g.set(Ns(t,e),Pu(n)),t.h+=n.length)}X.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jI(t,e){e&&!t.j&&(gr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(dm(this,r),gm(this,s,n))},t)),t.j=e}var qI=class{constructor(t,e){this.g=t,this.map=e}};function mm(t){this.l=t||HI,fe.PerformanceNavigationTiming?(t=fe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(fe.g&&fe.g.Ka&&fe.g.Ka()&&fe.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var HI=10;function _m(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ym(t){return t.h?1:t.g?t.g.size:0}function Mc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bu(t,e){t.g?t.g.add(e):t.h=e}function vm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mm.prototype.cancel=function(){if(this.i=Em(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Em(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Pu(t.i)}var zI=class{stringify(t){return fe.JSON.stringify(t,void 0)}parse(t){return fe.JSON.parse(t,void 0)}};function $I(){this.g=new zI}function WI(t,e,n){const r=n||"";try{hm(t,function(s,i){let o=s;qi(s)&&(o=xu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function KI(t,e){const n=new za;if(fe.Image){const r=new Image;r.onload=yo(Eo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=yo(Eo,n,r,"TestLoadImage: error",!1,e),r.onabort=yo(Eo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=yo(Eo,n,r,"TestLoadImage: timeout",!1,e),fe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Eo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ya(t){this.l=t.ec||null,this.j=t.ob||!1}ot(Ya,Lu);Ya.prototype.g=function(){return new Ja(this.l,this.j)};Ya.prototype.i=function(t){return function(){return t}}({});function Ja(t,e){it.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ju,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(Ja,it);var ju=0;X=Ja.prototype;X.open=function(t,e){if(this.readyState!=ju)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ki(this)};X.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||fe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};X.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gi(this)),this.readyState=ju};X.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ki(this)),this.g&&(this.readyState=3,ki(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof fe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Tm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}X.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gi(this):ki(this),this.readyState==3&&Tm(this)}};X.Za=function(t){this.g&&(this.response=this.responseText=t,Gi(this))};X.Ya=function(t){this.g&&(this.response=t,Gi(this))};X.ka=function(){this.g&&Gi(this)};function Gi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ki(t)}X.setRequestHeader=function(t,e){this.v.append(t,e)};X.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};X.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ki(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var GI=fe.JSON.parse;function Qe(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=wm,this.L=this.M=!1}ot(Qe,it);var wm="",QI=/^https?$/i,YI=["POST","PUT"];X=Qe.prototype;X.Oa=function(t){this.M=t};X.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nc.g(),this.C=this.u?id(this.u):id(Nc),this.g.onreadystatechange=vt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){ld(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=fe.FormData&&t instanceof fe.FormData,!(0<=Fg(YI,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{bm(this),0<this.B&&((this.L=JI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.ua,this)):this.A=Mu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ld(this,i)}};function JI(t){return Es&&typeof t.timeout=="number"&&t.ontimeout!==void 0}X.ua=function(){typeof bu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function ld(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Im(t),Xa(t)}function Im(t){t.F||(t.F=!0,ht(t,"complete"),ht(t,"error"))}X.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),Xa(this))};X.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xa(this,!0)),Qe.$.N.call(this)};X.La=function(){this.s||(this.G||this.v||this.l?Am(this):this.kb())};X.kb=function(){Am(this)};function Am(t){if(t.h&&typeof bu<"u"&&(!t.C[1]||fn(t)!=4||t.da()!=2)){if(t.v&&fn(t)==4)Mu(t.La,0,t);else if(ht(t,"readystatechange"),fn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(fm)[1]||null;!s&&fe.self&&fe.self.location&&(s=fe.self.location.protocol.slice(0,-1)),r=!QI.test(s?s.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var i=2<fn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Im(t)}}finally{Xa(t)}}}}function Xa(t,e){if(t.g){bm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function bm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(fe.clearTimeout(t.A),t.A=null)}X.isActive=function(){return!!this.g};function fn(t){return t.g?t.g.readyState:0}X.da=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};X.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};X.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),GI(e)}};function cd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case wm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function XI(t){const e={};t=(t.g&&2<=fn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ii(t[r]))continue;var n=II(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}mI(e,function(r){return r.join(", ")})}X.Ia=function(){return this.m};X.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pm(t){let e="";return Su(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function qu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Pm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):He(t,e,n))}function Ks(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Rm(t){this.Ga=0,this.j=[],this.l=new za,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ks("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ks("baseRetryDelayMs",5e3,t),this.hb=Ks("retryDelaySeedMs",1e4,t),this.eb=Ks("forwardChannelMaxRetries",2,t),this.xa=Ks("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new mm(t&&t.concurrentRequestLimit),this.Ja=new $I,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}X=Rm.prototype;X.ra=8;X.H=1;function Hu(t){if(Sm(t),t.H==3){var e=t.W++,n=xn(t.I);if(He(n,"SID",t.K),He(n,"RID",e),He(n,"TYPE","terminate"),Qi(t,n),e=new Wi(t,t.l,e),e.L=2,e.A=Qa(xn(n)),n=!1,fe.navigator&&fe.navigator.sendBeacon)try{n=fe.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&fe.Image&&(new Image().src=e.A,n=!0),n||(e.g=Mm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ki(e)}Vm(t)}function Za(t){t.g&&($u(t),t.g.cancel(),t.g=null)}function Sm(t){Za(t),t.u&&(fe.clearTimeout(t.u),t.u=null),aa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&fe.clearTimeout(t.m),t.m=null)}function el(t){if(!_m(t.i)&&!t.m){t.m=!0;var e=t.Na;bi||Yg(),Pi||(bi(),Pi=!0),Vu.add(e,t),t.C=0}}function ZI(t,e){return ym(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=zi(vt(t.Na,t,e),xm(t,t.C)),t.C++,!0)}X.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Wi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=qg(i),Hg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Cm(this,s,e),n=xn(this.I),He(n,"RID",t),He(n,"CVER",22),this.F&&He(n,"X-HTTP-Session-Id",this.F),Qi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Pm(i)))+"&"+e:this.o&&qu(n,this.o,i)),Bu(this.i,s),this.bb&&He(n,"TYPE","init"),this.P?(He(n,"$req",e),He(n,"SID","null"),s.aa=!0,Vc(s,n,null)):Vc(s,n,e),this.H=2}}else this.H==3&&(t?ud(this,t):this.j.length==0||_m(this.i)||ud(this))};function ud(t,e){var n;e?n=e.m:n=t.W++;const r=xn(t.I);He(r,"SID",t.K),He(r,"RID",n),He(r,"AID",t.V),Qi(t,r),t.o&&t.s&&qu(r,t.o,t.s),n=new Wi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Cm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Bu(t.i,n),Vc(n,r,e)}function Qi(t,e){t.na&&Su(t.na,function(n,r){He(e,r,n)}),t.h&&hm({},function(n,r){He(e,r,n)})}function Cm(t,e,n){n=Math.min(t.j.length,n);var r=t.h?vt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{WI(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function km(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;bi||Yg(),Pi||(bi(),Pi=!0),Vu.add(e,t),t.A=0}}function zu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=zi(vt(t.Ma,t),xm(t,t.A)),t.A++,!0)}X.Ma=function(){if(this.u=null,Om(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=zi(vt(this.jb,this),t)}};X.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pt(10),Za(this),Om(this))};function $u(t){t.B!=null&&(fe.clearTimeout(t.B),t.B=null)}function Om(t){t.g=new Wi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=xn(t.wa);He(e,"RID","rpc"),He(e,"SID",t.K),He(e,"AID",t.V),He(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&He(e,"TO",t.qa),He(e,"TYPE","xmlhttp"),Qi(t,e),t.o&&t.s&&qu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Qa(xn(e)),n.u=null,n.S=!0,am(n,t)}X.ib=function(){this.v!=null&&(this.v=null,Za(this),zu(this),Pt(19))};function aa(t){t.v!=null&&(fe.clearTimeout(t.v),t.v=null)}function Nm(t,e){var n=null;if(t.g==e){aa(t),$u(t),t.g=null;var r=2}else if(Mc(t.i,e))n=e.F,vm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=$a(),ht(r,new nm(r,n)),el(t)}else km(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&ZI(t,e)||r==2&&zu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Cr(t,5);break;case 4:Cr(t,10);break;case 3:Cr(t,6);break;default:Cr(t,2)}}}function xm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Cr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=vt(t.pb,t);n||(n=new Dr("//www.google.com/images/cleardot.gif"),fe.location&&fe.location.protocol=="http"||ia(n,"https"),Qa(n)),KI(n.toString(),r)}else Pt(2);t.H=0,t.h&&t.h.za(e),Vm(t),Sm(t)}X.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Pt(2)):(this.l.info("Failed to ping google.com"),Pt(1))};function Vm(t){if(t.H=0,t.ma=[],t.h){const e=Em(t.i);(e.length!=0||t.j.length!=0)&&(ed(t.ma,e),ed(t.ma,t.j),t.i.i.length=0,Pu(t.j),t.j.length=0),t.h.ya()}}function Dm(t,e,n){var r=n instanceof Dr?xn(n):new Dr(n);if(r.g!="")e&&(r.g=e+"."+r.g),oa(r,r.m);else{var s=fe.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Dr(null);r&&ia(i,r),e&&(i.g=e),s&&oa(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&He(r,n,e),He(r,"VER",t.ra),Qi(t,r),r}function Mm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Qe(new Ya({ob:n})):new Qe(t.va),e.Oa(t.J),e}X.isActive=function(){return!!this.h&&this.h.isActive(this)};function Lm(){}X=Lm.prototype;X.Ba=function(){};X.Aa=function(){};X.za=function(){};X.ya=function(){};X.isActive=function(){return!0};X.Va=function(){};function la(){if(Es&&!(10<=Number(fI)))throw Error("Environmental error: no available transport.")}la.prototype.g=function(t,e){return new Lt(t,e)};function Lt(t,e){it.call(this),this.g=new Rm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ii(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ii(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xs(this)}ot(Lt,it);Lt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Dm(t,null,t.Y),el(t)};Lt.prototype.close=function(){Hu(this.g)};Lt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xu(t),t=n);e.j.push(new qI(e.fb++,t)),e.H==3&&el(e)};Lt.prototype.N=function(){this.g.h=null,delete this.j,Hu(this.g),delete this.g,Lt.$.N.call(this)};function Fm(t){Fu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(Fm,Fu);function Um(){Uu.call(this),this.status=1}ot(Um,Uu);function xs(t){this.g=t}ot(xs,Lm);xs.prototype.Ba=function(){ht(this.g,"a")};xs.prototype.Aa=function(t){ht(this.g,new Fm(t))};xs.prototype.za=function(t){ht(this.g,new Um)};xs.prototype.ya=function(){ht(this.g,"b")};function eA(){this.blockSize=-1}function rn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ot(rn,eA);rn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Yl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}rn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Yl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Yl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Yl(this,r),s=0;break}}this.h=s,this.i+=e};rn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Me(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var tA={};function Wu(t){return-128<=t&&128>t?cI(t,function(e){return new Me([e|0],0>e?-1:0)}):new Me([t|0],0>t?-1:0)}function dn(t){if(isNaN(t)||!isFinite(t))return us;if(0>t)return lt(dn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Lc;return new Me(e,0)}function Bm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(Bm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=dn(Math.pow(e,8)),r=us,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=dn(Math.pow(e,i)),r=r.R(i).add(dn(o))):(r=r.R(n),r=r.add(dn(o)))}return r}var Lc=4294967296,us=Wu(0),Fc=Wu(1),hd=Wu(16777216);X=Me.prototype;X.ea=function(){if(Ht(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Lc+r)*e,e*=Lc}return t};X.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Sn(this))return"0";if(Ht(this))return"-"+lt(this).toString(t);for(var e=dn(Math.pow(t,6)),n=this,r="";;){var s=ua(n,e).g;n=ca(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Sn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};X.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Sn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ht(t){return t.h==-1}X.X=function(t){return t=ca(this,t),Ht(t)?-1:Sn(t)?0:1};function lt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Me(n,~t.h).add(Fc)}X.abs=function(){return Ht(this)?lt(this):this};X.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Me(n,n[n.length-1]&-2147483648?-1:0)};function ca(t,e){return t.add(lt(e))}X.R=function(t){if(Sn(this)||Sn(t))return us;if(Ht(this))return Ht(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(Ht(t))return lt(this.R(lt(t)));if(0>this.X(hd)&&0>t.X(hd))return dn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,To(n,2*r+2*s),n[2*r+2*s+1]+=i*l,To(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,To(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,To(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Me(n,0)};function To(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Gs(t,e){this.g=t,this.h=e}function ua(t,e){if(Sn(e))throw Error("division by zero");if(Sn(t))return new Gs(us,us);if(Ht(t))return e=ua(lt(t),e),new Gs(lt(e.g),lt(e.h));if(Ht(e))return e=ua(t,lt(e)),new Gs(lt(e.g),e.h);if(30<t.g.length){if(Ht(t)||Ht(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Fc,r=e;0>=r.X(t);)n=fd(n),r=fd(r);var s=Zr(n,1),i=Zr(r,1);for(r=Zr(r,2),n=Zr(n,2);!Sn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Zr(r,1),n=Zr(n,1)}return e=ca(t,s.R(e)),new Gs(s,e)}for(s=us;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=dn(n),o=i.R(e);Ht(o)||0<o.X(t);)n-=r,i=dn(n),o=i.R(e);Sn(i)&&(i=Fc),s=s.add(i),t=ca(t,o)}return new Gs(s,t)}X.gb=function(t){return ua(this,t).h};X.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Me(n,this.h&t.h)};X.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Me(n,this.h|t.h)};X.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Me(n,this.h^t.h)};function fd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Me(n,t.h)}function Zr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Me(s,t.h)}la.prototype.createWebChannel=la.prototype.g;Lt.prototype.send=Lt.prototype.u;Lt.prototype.open=Lt.prototype.m;Lt.prototype.close=Lt.prototype.close;Wa.NO_ERROR=0;Wa.TIMEOUT=8;Wa.HTTP_ERROR=6;rm.COMPLETE="complete";sm.EventType=$i;$i.OPEN="a";$i.CLOSE="b";$i.ERROR="c";$i.MESSAGE="d";it.prototype.listen=it.prototype.O;Qe.prototype.listenOnce=Qe.prototype.P;Qe.prototype.getLastError=Qe.prototype.Sa;Qe.prototype.getLastErrorCode=Qe.prototype.Ia;Qe.prototype.getStatus=Qe.prototype.da;Qe.prototype.getResponseJson=Qe.prototype.Wa;Qe.prototype.getResponseText=Qe.prototype.ja;Qe.prototype.send=Qe.prototype.ha;Qe.prototype.setWithCredentials=Qe.prototype.Oa;rn.prototype.digest=rn.prototype.l;rn.prototype.reset=rn.prototype.reset;rn.prototype.update=rn.prototype.j;Me.prototype.add=Me.prototype.add;Me.prototype.multiply=Me.prototype.R;Me.prototype.modulo=Me.prototype.gb;Me.prototype.compare=Me.prototype.X;Me.prototype.toNumber=Me.prototype.ea;Me.prototype.toString=Me.prototype.toString;Me.prototype.getBits=Me.prototype.D;Me.fromNumber=dn;Me.fromString=Bm;var nA=function(){return new la},rA=function(){return $a()},Jl=Wa,sA=rm,iA=Wr,dd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wo=sm,oA=Qe,aA=rn,hs=Me;const pd="@firebase/firestore";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Vs="10.7.0";/**
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
 */const Br=new wu("@firebase/firestore");function Qs(){return Br.logLevel}function te(t,...e){if(Br.logLevel<=Se.DEBUG){const n=e.map(Ku);Br.debug(`Firestore (${Vs}): ${t}`,...n)}}function Vn(t,...e){if(Br.logLevel<=Se.ERROR){const n=e.map(Ku);Br.error(`Firestore (${Vs}): ${t}`,...n)}}function Ts(t,...e){if(Br.logLevel<=Se.WARN){const n=e.map(Ku);Br.warn(`Firestore (${Vs}): ${t}`,...n)}}function Ku(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Vs}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function Be(t,e){t||he()}function Ee(t,e){return t}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class jm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class cA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uA{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new or;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new or,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Be(typeof r.accessToken=="string"),new jm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new gt(e)}}class hA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new hA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string"),this.R=n.token,new dA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function gA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class qm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=gA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function ws(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new et(0,0))}static max(){return new de(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Oi{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Oi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ze extends Oi{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const mA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Oi{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return mA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ie(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ie(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(ze.fromString(e))}static fromName(e){return new ae(ze.fromString(e).popFirst(5))}static empty(){return new ae(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new ze(e.slice()))}}function _A(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new hr(s,ae.empty(),e)}function yA(t){return new hr(t.readTime,t.key,-1)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(de.min(),ae.empty(),-1)}static max(){return new hr(de.max(),ae.empty(),-1)}}function vA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
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
 */const EA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Yi(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==EA)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ji(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Gu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Gu._e=-1;function tl(t){return t==null}function ha(t){return t===0&&1/t==-1/0}function wA(t){return typeof t=="number"&&Number.isInteger(t)&&!ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function gd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Io(this.root,e,this.comparator,!1)}getReverseIterator(){return new Io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Io(this.root,e,this.comparator,!0)}}class Io{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new md(this.data.getIterator())}getIteratorFrom(e){return new md(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class md{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new ft(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class zm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zm("Invalid base64 string: "+i):i}}(e);return new wt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const IA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fr(t){if(Be(!!t),typeof t=="string"){let e=0;const n=IA.exec(t);if(Be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
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
 */function Qu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yu(t){const e=t.mapValue.fields.__previous_value__;return Qu(e)?Yu(e):e}function Ni(t){const e=fr(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class AA{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class xi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ao={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qu(t)?4:bA(t)?9007199254740991:10:he()}function En(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ni(t).isEqual(Ni(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=fr(s.timestampValue),a=fr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return jr(s.bytesValue).isEqual(jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Je(s.geoPointValue.latitude)===Je(i.geoPointValue.latitude)&&Je(s.geoPointValue.longitude)===Je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Je(s.integerValue)===Je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Je(s.doubleValue),a=Je(i.doubleValue);return o===a?ha(o)===ha(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(gd(o)!==gd(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!En(o[l],a[l])))return!1;return!0}(t,e);default:return he()}}function Vi(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Is(t,e){if(t===e)return 0;const n=qr(t),r=qr(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Je(i.integerValue||i.doubleValue),l=Je(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return _d(t.timestampValue,e.timestampValue);case 4:return _d(Ni(t),Ni(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(i,o){const a=jr(i),l=jr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=xe(a[c],l[c]);if(u!==0)return u}return xe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=xe(Je(i.latitude),Je(o.latitude));return a!==0?a:xe(Je(i.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Is(a[c],l[c]);if(u)return u}return xe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ao.mapValue&&o===Ao.mapValue)return 0;if(i===Ao.mapValue)return 1;if(o===Ao.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=xe(l[h],u[h]);if(f!==0)return f;const d=Is(a[l[h]],c[u[h]]);if(d!==0)return d}return xe(l.length,u.length)}(t.mapValue,e.mapValue);default:throw he()}}function _d(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=fr(t),r=fr(e),s=xe(n.seconds,r.seconds);return s!==0?s:xe(n.nanos,r.nanos)}function As(t){return Uc(t)}function Uc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Uc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Uc(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function Bc(t){return!!t&&"integerValue"in t}function Ju(t){return!!t&&"arrayValue"in t}function yd(t){return!!t&&"nullValue"in t}function vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Do(t){return!!t&&"mapValue"in t}function ui(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ds(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ui(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ui(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Do(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ui(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ui(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Do(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Do(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ds(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new zt(ui(this.value))}}function $m(t){const e=[];return Ds(t.fields,(n,r)=>{const s=new ct([n]);if(Do(r)){const i=$m(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Zt(e)}/**
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
 */class _t{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,de.min(),de.min(),de.min(),zt.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,de.min(),de.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,de.min(),de.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fa{constructor(e,n){this.position=e,this.inclusive=n}}function Ed(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=Is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Td(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class da{constructor(e,n="asc"){this.field=e,this.dir=n}}function PA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Wm{}class Ze extends Wm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new SA(e,n,r):n==="array-contains"?new OA(e,r):n==="in"?new NA(e,r):n==="not-in"?new xA(e,r):n==="array-contains-any"?new VA(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CA(e,r):new kA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Is(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends Wm{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Tn(e,n)}matches(e){return Km(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Km(t){return t.op==="and"}function Gm(t){return RA(t)&&Km(t)}function RA(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function jc(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+As(t.value);if(Gm(t))return t.filters.map(e=>jc(e)).join(",");{const e=t.filters.map(n=>jc(n)).join(",");return`${t.op}(${e})`}}function Qm(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&En(r.value,s.value)}(t,e):t instanceof Tn?function(r,s){return s instanceof Tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Qm(o,s.filters[a]),!0):!1}(t,e):void he()}function Ym(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${As(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(Ym).join(" ,")+"}"}(t):"Filter"}class SA extends Ze{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class CA extends Ze{constructor(e,n){super(e,"in",n),this.keys=Jm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kA extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=Jm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class OA extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ju(n)&&Vi(n.arrayValue,this.value)}}class NA extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vi(this.value.arrayValue,n)}}class xA extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vi(this.value.arrayValue,n)}}class VA extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ju(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vi(this.value.arrayValue,r))}}/**
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
 */class DA{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function wd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new DA(t,e,n,r,s,i,o)}function Xu(t){const e=Ee(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),tl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>As(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>As(r)).join(",")),e.ce=n}return e.ce}function Zu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Qm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Td(t.startAt,e.startAt)&&Td(t.endAt,e.endAt)}function qc(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class nl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function MA(t,e,n,r,s,i,o,a){return new nl(t,e,n,r,s,i,o,a)}function Xm(t){return new nl(t)}function Id(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function LA(t){return t.collectionGroup!==null}function hi(t){const e=Ee(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ft(ct.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new da(i,r))}),n.has(ct.keyField().canonicalString())||e.le.push(new da(ct.keyField(),r))}return e.le}function gn(t){const e=Ee(t);return e.he||(e.he=FA(e,hi(t))),e.he}function FA(t,e){if(t.limitType==="F")return wd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new da(s.field,i)});const n=t.endAt?new fa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fa(t.startAt.position,t.startAt.inclusive):null;return wd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hc(t,e,n){return new nl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rl(t,e){return Zu(gn(t),gn(e))&&t.limitType===e.limitType}function Zm(t){return`${Xu(gn(t))}|lt:${t.limitType}`}function ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Ym(s)).join(", ")}]`),tl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>As(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>As(s)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function sl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of hi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=Ed(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,hi(r),s)||r.endAt&&!function(o,a,l){const c=Ed(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,hi(r),s))}(t,e)}function UA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function e_(t){return(e,n)=>{let r=!1;for(const s of hi(t)){const i=BA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function BA(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Is(l,c):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
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
 */class Ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ds(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Hm(this.inner)}size(){return this.innerSize}}/**
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
 */const jA=new Ke(ae.comparator);function Dn(){return jA}const t_=new Ke(ae.comparator);function ei(...t){let e=t_;for(const n of t)e=e.insert(n.key,n);return e}function n_(t){let e=t_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kr(){return fi()}function r_(){return fi()}function fi(){return new Ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const qA=new Ke(ae.comparator),HA=new ft(ae.comparator);function Re(...t){let e=HA;for(const n of t)e=e.add(n);return e}const zA=new ft(xe);function $A(){return zA}/**
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
 */function s_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function i_(t){return{integerValue:""+t}}function WA(t,e){return wA(e)?i_(e):s_(t,e)}/**
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
 */class il{constructor(){this._=void 0}}function KA(t,e,n){return t instanceof pa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Qu(i)&&(i=Yu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Di?a_(t,e):t instanceof Mi?l_(t,e):function(s,i){const o=o_(s,i),a=Ad(o)+Ad(s.Ie);return Bc(o)&&Bc(s.Ie)?i_(a):s_(s.serializer,a)}(t,e)}function GA(t,e,n){return t instanceof Di?a_(t,e):t instanceof Mi?l_(t,e):n}function o_(t,e){return t instanceof ga?function(r){return Bc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class pa extends il{}class Di extends il{constructor(e){super(),this.elements=e}}function a_(t,e){const n=c_(e);for(const r of t.elements)n.some(s=>En(s,r))||n.push(r);return{arrayValue:{values:n}}}class Mi extends il{constructor(e){super(),this.elements=e}}function l_(t,e){let n=c_(e);for(const r of t.elements)n=n.filter(s=>!En(s,r));return{arrayValue:{values:n}}}class ga extends il{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Ad(t){return Je(t.integerValue||t.doubleValue)}function c_(t){return Ju(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function QA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Di&&s instanceof Di||r instanceof Mi&&s instanceof Mi?ws(r.elements,s.elements,En):r instanceof ga&&s instanceof ga?En(r.Ie,s.Ie):r instanceof pa&&s instanceof pa}(t.transform,e.transform)}class YA{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ol{}function u_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eh(t.key,en.none()):new Xi(t.key,t.data,en.none());{const n=t.data,r=zt.empty();let s=new ft(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Kr(t.key,r,new Zt(s.toArray()),en.none())}}function JA(t,e,n){t instanceof Xi?function(s,i,o){const a=s.value.clone(),l=Pd(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(s,i,o){if(!Mo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Pd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(h_(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function di(t,e,n,r){return t instanceof Xi?function(i,o,a,l){if(!Mo(i.precondition,o))return a;const c=i.value.clone(),u=Rd(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kr?function(i,o,a,l){if(!Mo(i.precondition,o))return a;const c=Rd(i.fieldTransforms,l,o),u=o.data;return u.setAll(h_(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Mo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function XA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=o_(r.transform,s||null);i!=null&&(n===null&&(n=zt.empty()),n.set(r.field,i))}return n||null}function bd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ws(r,s,(i,o)=>QA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xi extends ol{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kr extends ol{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function h_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pd(t,e,n){const r=new Map;Be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,GA(o,a,n[s]))}return r}function Rd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,KA(i,o,e))}return r}class eh extends ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZA extends ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&JA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=r_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=u_(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Re())}isEqual(e){return this.batchId===e.batchId&&ws(this.mutations,e.mutations,(n,r)=>bd(n,r))&&ws(this.baseMutations,e.baseMutations,(n,r)=>bd(n,r))}}class th{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Be(e.mutations.length===r.length);let s=function(){return qA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new th(e,n,r,s)}}/**
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
 */class tb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ye,Ce;function rb(t){switch(t){default:return he();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function f_(t){if(t===void 0)return Vn("GRPC error has no .code"),q.UNKNOWN;switch(t){case Ye.OK:return q.OK;case Ye.CANCELLED:return q.CANCELLED;case Ye.UNKNOWN:return q.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return q.INTERNAL;case Ye.UNAVAILABLE:return q.UNAVAILABLE;case Ye.UNAUTHENTICATED:return q.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case Ye.NOT_FOUND:return q.NOT_FOUND;case Ye.ALREADY_EXISTS:return q.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return q.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case Ye.ABORTED:return q.ABORTED;case Ye.OUT_OF_RANGE:return q.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return q.UNIMPLEMENTED;case Ye.DATA_LOSS:return q.DATA_LOSS;default:return he()}}(Ce=Ye||(Ye={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sb(){return new TextEncoder}/**
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
 */const ib=new hs([4294967295,4294967295],0);function Sd(t){const e=sb().encode(t),n=new aA;return n.update(e),new Uint8Array(n.digest())}function Cd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hs([n,r],0),new hs([s,i],0)]}class nh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ti(`Invalid padding: ${n}`);if(r<0)throw new ti(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ti(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ti(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=hs.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(hs.fromNumber(r)));return s.compare(ib)===1&&(s=new hs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Sd(e),[r,s]=Cd(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new nh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Sd(e),[r,s]=Cd(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class al{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Zi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new al(de.min(),s,new Ke(xe),Dn(),Re())}}class Zi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zi(r,n,Re(),Re(),Re())}}/**
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
 */class Lo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class d_{constructor(e,n){this.targetId=e,this.fe=n}}class p_{constructor(e,n,r=wt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class kd{constructor(){this.ge=0,this.pe=Nd(),this.ye=wt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Re(),n=Re(),r=Re();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Zi(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Nd()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Be(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class ob{constructor(e){this.Le=e,this.ke=new Map,this.qe=Dn(),this.Qe=Od(),this.Ke=new Ke(xe)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(qc(i))if(r===0){const o=new ae(i.path);this.We(n,o,_t.newNoDocument(o,de.min()))}else Be(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=jr(r).toUint8Array()}catch(l){if(l instanceof zm)return Ts("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new nh(o,s,i)}catch(l){return Ts(l instanceof ti?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&qc(a.target)){const l=new ae(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,_t.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=Re();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new al(e,n,this.Ke,this.qe,r);return this.qe=Dn(),this.Qe=Od(),this.Ke=new Ke(xe),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new kd,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ft(xe),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new kd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Od(){return new Ke(ae.comparator)}function Nd(){return new Ke(ae.comparator)}const ab={asc:"ASCENDING",desc:"DESCENDING"},lb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cb={and:"AND",or:"OR"};class ub{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zc(t,e){return t.useProto3Json||tl(e)?e:{value:e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function g_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hb(t,e){return ma(t,e.toTimestamp())}function mn(t){return Be(!!t),de.fromTimestamp(function(n){const r=fr(n);return new et(r.seconds,r.nanos)}(t))}function rh(t,e){return function(r){return new ze(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function m_(t){const e=ze.fromString(t);return Be(E_(e)),e}function $c(t,e){return rh(t.databaseId,e.path)}function Xl(t,e){const n=m_(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(__(n))}function Wc(t,e){return rh(t.databaseId,e)}function fb(t){const e=m_(t);return e.length===4?ze.emptyPath():__(e)}function Kc(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function __(t){return Be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xd(t,e,n){return{name:$c(t,e),fields:n.value.mapValue.fields}}function db(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Be(u===void 0||typeof u=="string"),wt.fromBase64String(u||"")):(Be(u===void 0||u instanceof Uint8Array),wt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?q.UNKNOWN:f_(c.code);return new ie(u,c.message||"")}(o);n=new p_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xl(t,r.document.name),i=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):de.min(),a=new zt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Lo(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Xl(t,r.document),i=r.readTime?mn(r.readTime):de.min(),o=_t.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Lo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Xl(t,r.document),i=r.removedTargetIds||[];n=new Lo([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new nb(s,i),a=r.targetId;n=new d_(a,o)}}return n}function pb(t,e){let n;if(e instanceof Xi)n={update:xd(t,e.key,e.value)};else if(e instanceof eh)n={delete:$c(t,e.key)};else if(e instanceof Kr)n={update:xd(t,e.key,e.data),updateMask:Ib(e.fieldMask)};else{if(!(e instanceof ZA))return he();n={verify:$c(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof pa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Di)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Mi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ga)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function gb(t,e){return t&&t.length>0?(Be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?mn(s.updateTime):mn(i);return o.isEqual(de.min())&&(o=mn(i)),new YA(o,s.transformResults||[])}(n,e))):[]}function mb(t,e){return{documents:[Wc(t,e.path)]}}function _b(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Wc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return v_(Tn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ns(h.field),direction:Eb(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=zc(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function yb(t){let e=fb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Be(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=y_(h);return f instanceof Tn&&Gm(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(b){return new da(rs(b.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,tl(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new fa(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new fa(d,f)}(n.endAt)),MA(e,s,o,i,a,"F",l,c)}function vb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function y_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=rs(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=rs(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rs(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=rs(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(rs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>y_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function Eb(t){return ab[t]}function Tb(t){return lb[t]}function wb(t){return cb[t]}function ns(t){return{fieldPath:t.canonicalString()}}function rs(t){return ct.fromServerFormat(t.fieldPath)}function v_(t){return t instanceof Ze?function(n){if(n.op==="=="){if(vd(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NAN"}};if(yd(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vd(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NOT_NAN"}};if(yd(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ns(n.field),op:Tb(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(s=>v_(s));return r.length===1?r[0]:{compositeFilter:{op:wb(n.op),filters:r}}}(t):he()}function Ib(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function E_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,s,i=de.min(),o=de.min(),a=wt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ab{constructor(e){this.ut=e}}function bb(t){const e=yb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hc(e,e.limit,"L"):e}/**
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
 */class Pb{constructor(){this.on=new Rb}addToCollectionParentIndex(e,n){return this.on.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(hr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class Rb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ft(ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ft(ze.comparator)).toArray()}}/**
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
 */class bs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new bs(0)}static Nn(){return new bs(-1)}}/**
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
 */class Sb{constructor(){this.changes=new Ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Cb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class kb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&di(r.mutation,s,Zt.empty(),et.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Re()){const s=kr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ei();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Dn();const o=fi(),a=function(){return fi()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Kr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),di(u.mutation,c,u.mutation.getFieldMask(),et.now())):o.set(c.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new Cb(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fi();let s=new Ke((o,a)=>o-a),i=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Zt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||Re()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=r_();u.forEach(f=>{if(!i.has(f)){const d=u_(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(kr());let a=-1,l=i;return o.next(c=>j.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?j.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,Re())).next(u=>({batchId:a,changes:n_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let s=ei();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ei();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,l=>{const c=function(h,f){return new nl(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,_t.newInvalidDocument(u)))});let a=ei();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&di(u.mutation,c,Zt.empty(),et.now()),sl(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class Ob{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return j.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:mn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:bb(s.bundledQuery),readTime:mn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class Nb{constructor(){this.overlays=new Ke(ae.comparator),this.lr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=kr(),i=n.length+1,o=new ae(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=kr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=kr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return j.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tb(n,r));let i=this.lr.get(n);i===void 0&&(i=Re(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
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
 */class sh{constructor(){this.hr=new ft(rt.Pr),this.Ir=new ft(rt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new rt(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new ae(new ze([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new ae(new ze([])),r=new rt(n,e),s=new rt(n,e+1);let i=Re();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new rt(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return ae.comparator(e.key,n.key)||xe(e.gr,n.gr)}static Tr(e,n){return xe(e.gr,n.gr)||ae.comparator(e.key,n.key)}}/**
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
 */class xb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ft(rt.Pr)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eb(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new rt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(xe);return n.forEach(s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),j.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const o=new rt(new ae(i),0);let a=new ft(xe);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),j.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Be(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return j.forEach(n.mutations,s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new rt(n,0),s=this.yr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Vb{constructor(e){this.Cr=e,this.docs=function(){return new Ke(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const o=n.path,a=new ae(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||vA(yA(u),r)<=0||(s.has(u.key)||sl(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}vr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Db(this)}getSize(e){return j.resolve(this.size)}}class Db extends Sb{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class Mb{constructor(e){this.persistence=e,this.Fr=new Ms(n=>Xu(n),Zu),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Mr=0,this.Or=new sh,this.targetCount=0,this.Nr=bs.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),j.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.kn(n),j.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Or.containsKey(n))}}/**
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
 */class Lb{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Gu(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Mb(this),this.indexManager=new Pb,this.remoteDocumentCache=function(s){return new Vb(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Ab(n),this.Kr=new Ob(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new xb(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new Fb(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return j.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Fb extends TA{constructor(e){super(),this.currentSequenceNumber=e}}class ih{constructor(e){this.persistence=e,this.Gr=new sh,this.zr=null}static jr(e){return new ih(e)}get Hr(){if(this.zr)return this.zr;throw he()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Hr,r=>{const s=ae.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return j.or([()=>j.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class oh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=Re(),s=Re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new oh(e,n.fromCache,r,s)}}/**
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
 */class Ub{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Bb{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Ub;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Qs()<=Se.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),j.resolve()):(Qs()<=Se.DEBUG&&te("QueryEngine","Query:",ts(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Qs()<=Se.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):j.resolve())}zi(e,n){if(Id(n))return j.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Hc(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Re(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,Hc(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,r,s){return Id(n)||s.isEqual(de.min())?j.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?j.resolve(null):(Qs()<=Se.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ts(n)),this.Xi(e,o,n,_A(s,-1)).next(a=>a))})}Yi(e,n){let r=new ft(e_(e));return n.forEach((s,i)=>{sl(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Qs()<=Se.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ts(n)),this.Gi.getDocumentsMatchingQuery(e,n,hr.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class jb{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Ke(xe),this.ns=new Ms(i=>Xu(i),Zu),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kb(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function qb(t,e,n,r){return new jb(t,e,n,r)}async function T_(t,e){const n=Ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Re();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function Hb(t,e){const n=Ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=j.resolve();return f.forEach(b=>{d=d.next(()=>u.getEntry(l,b)).next(S=>{const k=c.docVersions.get(b);Be(k!==null),S.version.compareTo(k)<0&&(h.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),u.addEntry(S)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function w_(t){const e=Ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function zb(t,e){const n=Ee(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(wt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(S,k,_){return S.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,d,u)&&a.push(n.qr.updateTargetData(i,d))});let l=Dn(),c=Re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push($b(i,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(de.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return j.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=s,i))}function $b(t,e,n){let r=Re(),s=Re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:s}})}function Wb(t,e){const n=Ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Kb(t,e){const n=Ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Gc(t,e,n){const r=Ee(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ji(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function Vd(t,e,n){const r=Ee(t);let s=de.min(),i=Re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=Ee(l),f=h.ns.get(u);return f!==void 0?j.resolve(h.ts.get(f)):h.qr.getTargetData(c,u)}(r,o,gn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Re())).next(a=>(Gb(r,UA(e),a),{documents:a,ls:i})))}function Gb(t,e,n){let r=t.rs.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class Dd{constructor(){this.activeTargetIds=$A()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qb{constructor(){this.eo=new Dd,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Dd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Yb{ro(e){}shutdown(){}}/**
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
 */class Md{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bo=null;function Zl(){return bo===null?bo=function(){return 268435456+Math.round(2147483648*Math.random())}():bo++,"0x"+bo.toString(16)}/**
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
 */const Jb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Xb{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const pt="WebChannelConnection";class Zb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=Zl(),l=this.So(n,r);te("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,l,c,s).then(u=>(te("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ts("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=Jb[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=Zl();return new Promise((o,a)=>{const l=new oA;l.setWithCredentials(!0),l.listenOnce(sA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Jl.NO_ERROR:const u=l.getResponseJson();te(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Jl.TIMEOUT:te(pt,`RPC '${e}' ${i} timed out`),a(new ie(q.DEADLINE_EXCEEDED,"Request time out"));break;case Jl.HTTP_ERROR:const h=l.getStatus();if(te(pt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const b=function(k){const _=k.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(_)>=0?_:q.UNKNOWN}(d.status);a(new ie(b,d.message))}else a(new ie(q.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ie(q.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(pt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);te(pt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}vo(e,n,r){const s=Zl(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nA(),a=rA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");te(pt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const b=new Xb({co:k=>{d?te(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(f||(te(pt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),te(pt,`RPC '${e}' stream ${s} sending:`,k),h.send(k))},lo:()=>h.close()}),S=(k,_,C)=>{k.listen(_,Z=>{try{C(Z)}catch(K){setTimeout(()=>{throw K},0)}})};return S(h,wo.EventType.OPEN,()=>{d||te(pt,`RPC '${e}' stream ${s} transport opened.`)}),S(h,wo.EventType.CLOSE,()=>{d||(d=!0,te(pt,`RPC '${e}' stream ${s} transport closed`),b.Ro())}),S(h,wo.EventType.ERROR,k=>{d||(d=!0,Ts(pt,`RPC '${e}' stream ${s} transport errored:`,k),b.Ro(new ie(q.UNAVAILABLE,"The operation could not be completed")))}),S(h,wo.EventType.MESSAGE,k=>{var _;if(!d){const C=k.data[0];Be(!!C);const Z=C,K=Z.error||((_=Z[0])===null||_===void 0?void 0:_.error);if(K){te(pt,`RPC '${e}' stream ${s} received error:`,K);const ge=K.status;let Ie=function(w){const Ae=Ye[w];if(Ae!==void 0)return f_(Ae)}(ge),Le=K.message;Ie===void 0&&(Ie=q.INTERNAL,Le="Unknown error status: "+ge+" with message "+K.message),d=!0,b.Ro(new ie(Ie,Le)),h.close()}else te(pt,`RPC '${e}' stream ${s} received:`,C),b.Vo(C)}}),S(a,iA.STAT_EVENT,k=>{k.stat===dd.PROXY?te(pt,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===dd.NOPROXY&&te(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.Ao()},0),b}}function ec(){return typeof document<"u"?document:null}/**
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
 */function ll(t){return new ub(t,!0)}/**
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
 */class I_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class A_{constructor(e,n,r,s,i,o,a,l){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new I_(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new ie(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eP extends A_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=db(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?mn(o.readTime):de.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Kc(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=qc(l)?{documents:mb(i,l)}:{query:_b(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=g_(i,o.resumeToken);const c=zc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(de.min())>0){a.readTime=ma(i,o.snapshotVersion.toTimestamp());const c=zc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=vb(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Kc(this.serializer),n.removeTarget=e,this.e_(n)}}class tP extends A_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=gb(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.I_(r,n)}return Be(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Kc(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pb(this.serializer,r))};this.e_(n)}}/**
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
 */class nP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie(q.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(q.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class rP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Vn(n),this.f_=!1):te("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class sP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Ee(l);c.C_.add(4),await eo(c),c.M_.set("Unknown"),c.C_.delete(4),await cl(c)}(this))})}),this.M_=new rP(r,s)}}async function cl(t){if(Gr(t))for(const e of t.v_)await e(!0)}async function eo(t){for(const e of t.v_)await e(!1)}function b_(t,e){const n=Ee(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),ch(n)?lh(n):Ls(n).Ho()&&ah(n,e))}function P_(t,e){const n=Ee(t),r=Ls(n);n.D_.delete(e),r.Ho()&&R_(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Gr(n)&&n.M_.set("Unknown"))}function ah(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ls(t).u_(e)}function R_(t,e){t.x_.Oe(e),Ls(t).c_(e)}function lh(t){t.x_=new ob({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ls(t).start(),t.M_.g_()}function ch(t){return Gr(t)&&!Ls(t).jo()&&t.D_.size>0}function Gr(t){return Ee(t).C_.size===0}function S_(t){t.x_=void 0}async function iP(t){t.D_.forEach((e,n)=>{ah(t,e)})}async function oP(t,e){S_(t),ch(t)?(t.M_.w_(e),lh(t)):t.M_.set("Unknown")}async function aP(t,e,n){if(t.M_.set("Online"),e instanceof p_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _a(t,r)}else if(e instanceof Lo?t.x_.$e(e):e instanceof d_?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(de.min()))try{const r=await w_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.D_.get(c);u&&i.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.D_.get(l);if(!u)return;i.D_.set(l,u.withResumeToken(wt.EMPTY_BYTE_STRING,u.snapshotVersion)),R_(i,l);const h=new er(u.target,l,c,u.sequenceNumber);ah(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await _a(t,r)}}async function _a(t,e,n){if(!Ji(e))throw e;t.C_.add(1),await eo(t),t.M_.set("Offline"),n||(n=()=>w_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await cl(t)})}function C_(t,e){return e().catch(n=>_a(t,n,e))}async function ul(t){const e=Ee(t),n=dr(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;lP(e);)try{const s=await Wb(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,cP(e,s)}catch(s){await _a(e,s)}k_(e)&&O_(e)}function lP(t){return Gr(t)&&t.b_.length<10}function cP(t,e){t.b_.push(e);const n=dr(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function k_(t){return Gr(t)&&!dr(t).jo()&&t.b_.length>0}function O_(t){dr(t).start()}async function uP(t){dr(t).E_()}async function hP(t){const e=dr(t);for(const n of t.b_)e.P_(n.mutations)}async function fP(t,e,n){const r=t.b_.shift(),s=th.from(r,e,n);await C_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ul(t)}async function dP(t,e){e&&dr(t).h_&&await async function(r,s){if(function(o){return rb(o)&&o!==q.ABORTED}(s.code)){const i=r.b_.shift();dr(r).Yo(),await C_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ul(r)}}(t,e),k_(t)&&O_(t)}async function Ld(t,e){const n=Ee(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Gr(n);n.C_.add(3),await eo(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await cl(n)}async function pP(t,e){const n=Ee(t);e?(n.C_.delete(2),await cl(n)):e||(n.C_.add(2),await eo(n),n.M_.set("Unknown"))}function Ls(t){return t.O_||(t.O_=function(n,r,s){const i=Ee(n);return i.A_(),new eP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:iP.bind(null,t),Io:oP.bind(null,t),a_:aP.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),ch(t)?lh(t):t.M_.set("Unknown")):(await t.O_.stop(),S_(t))})),t.O_}function dr(t){return t.N_||(t.N_=function(n,r,s){const i=Ee(n);return i.A_(),new tP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:uP.bind(null,t),Io:dP.bind(null,t),T_:hP.bind(null,t),I_:fP.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await ul(t)):(await t.N_.stop(),t.b_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class uh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new uh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hh(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Ji(t))return new ie(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class fs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=ei(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Fd{constructor(){this.B_=new Ke(ae.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):he():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ps(e,n,fs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class gP{constructor(){this.k_=void 0,this.listeners=[]}}class mP{constructor(){this.queries=new Ms(e=>Zm(e),rl),this.onlineState="Unknown",this.q_=new Set}}async function _P(t,e){const n=Ee(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new gP),s)try{i.k_=await n.onListen(r)}catch(o){const a=hh(o,`Initialization of query '${ts(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&fh(n)}async function yP(t,e){const n=Ee(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function vP(t,e){const n=Ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&fh(n)}function EP(t,e,n){const r=Ee(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function fh(t){t.q_.forEach(e=>{e.next()})}class TP{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class N_{constructor(e){this.key=e}}class x_{constructor(e){this.key=e}}class wP{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Re(),this.mutatedKeys=Re(),this._a=e_(e),this.aa=new fs(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Fd,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=sl(this.query,h)?h:null,b=!!f&&this.mutatedKeys.has(f.key),S=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let k=!1;f&&d?f.data.isEqual(d.data)?b!==S&&(r.track({type:3,doc:d}),k=!0):this.ha(f,d)||(r.track({type:2,doc:d}),k=!0,(l&&this._a(d,l)>0||c&&this._a(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),k=!0):f&&!d&&(r.track({type:1,doc:f}),k=!0,(l||c)&&(a=!0)),k&&(d?(o=o.add(d),i=S?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(d,b){const S=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return S(d)-S(b)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],l=this.oa.size===0&&this.current&&!s?1:0,c=l!==this.sa;return this.sa=l,o.length!==0||c?{snapshot:new Ps(this.query,e.aa,i,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Fd,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=Re(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new x_(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new N_(r))}),n}da(e){this.ia=e.ls,this.oa=Re();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Ps.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class IP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AP{constructor(e){this.key=e,this.Ra=!1}}class bP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ms(a=>Zm(a),rl),this.fa=new Map,this.ga=new Set,this.pa=new Ke(ae.comparator),this.ya=new Map,this.wa=new sh,this.Sa={},this.ba=new Map,this.Da=bs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function PP(t,e){const n=MP(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await Kb(n.localStore,gn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await RP(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&b_(n.remoteStore,o)}return s}async function RP(t,e,n,r,s){t.va=(h,f,d)=>async function(S,k,_,C){let Z=k.view.ca(_);Z.Zi&&(Z=await Vd(S.localStore,k.query,!1).then(({documents:Le})=>k.view.ca(Le,Z)));const K=C&&C.targetChanges.get(k.targetId),ge=C&&C.targetMismatches.get(k.targetId)!=null,Ie=k.view.applyChanges(Z,S.isPrimaryClient,K,ge);return Bd(S,k.targetId,Ie.Ta),Ie.snapshot}(t,h,f,d);const i=await Vd(t.localStore,e,!0),o=new wP(e,i.ls),a=o.ca(i.documents),l=Zi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Bd(t,n,c.Ta);const u=new IP(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function SP(t,e){const n=Ee(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!rl(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),P_(n.remoteStore,r.targetId),Qc(n,r.targetId)}).catch(Yi)):(Qc(n,r.targetId),await Gc(n.localStore,r.targetId,!0))}async function CP(t,e,n){const r=LP(t);try{const s=await function(o,a){const l=Ee(o),c=et.now(),u=a.reduce((d,b)=>d.add(b.key),Re());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let b=Dn(),S=Re();return l.ss.getEntries(d,u).next(k=>{b=k,b.forEach((_,C)=>{C.isValidDocument()||(S=S.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,b)).next(k=>{h=k;const _=[];for(const C of a){const Z=XA(C,h.get(C.key).overlayedDocument);Z!=null&&_.push(new Kr(C.key,Z,$m(Z.value.mapValue),en.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,_,a)}).next(k=>{f=k;const _=k.applyToLocalDocumentSet(h,S);return l.documentOverlayCache.saveOverlays(d,k.batchId,_)})}).then(()=>({batchId:f.batchId,changes:n_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new Ke(xe)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(r,s.batchId,n),await to(r,s.changes),await ul(r.remoteStore)}catch(s){const i=hh(s,"Failed to persist write");n.reject(i)}}async function V_(t,e){const n=Ee(t);try{const r=await zb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Be(o.Ra):s.removedDocuments.size>0&&(Be(o.Ra),o.Ra=!1))}),await to(n,r,e)}catch(r){await Yi(r)}}function Ud(t,e,n){const r=Ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=Ee(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.Q_(a)&&(c=!0)}),c&&fh(l)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kP(t,e,n){const r=Ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new Ke(ae.comparator);o=o.insert(i,_t.newNoDocument(i,de.min()));const a=Re().add(i),l=new al(de.min(),new Map,new Ke(xe),o,a);await V_(r,l),r.pa=r.pa.remove(i),r.ya.delete(e),dh(r)}else await Gc(r.localStore,e,!1).then(()=>Qc(r,e,n)).catch(Yi)}async function OP(t,e){const n=Ee(t),r=e.batch.batchId;try{const s=await Hb(n.localStore,e);M_(n,r,null),D_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await to(n,s)}catch(s){await Yi(s)}}async function NP(t,e,n){const r=Ee(t);try{const s=await function(o,a){const l=Ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Be(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);M_(r,e,n),D_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await to(r,s)}catch(s){await Yi(s)}}function D_(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function M_(t,e,n){const r=Ee(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function Qc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||L_(t,r)})}function L_(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(P_(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),dh(t))}function Bd(t,e,n){for(const r of n)r instanceof N_?(t.wa.addReference(r.key,e),xP(t,r)):r instanceof x_?(te("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||L_(t,r.key)):he()}function xP(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(te("SyncEngine","New document in limbo: "+n),t.ga.add(r),dh(t))}function dh(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new ae(ze.fromString(e)),r=t.Da.next();t.ya.set(r,new AP(n)),t.pa=t.pa.insert(n,r),b_(t.remoteStore,new er(gn(Xm(n.path)),r,"TargetPurposeLimboResolution",Gu._e))}}async function to(t,e,n){const r=Ee(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=oh.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(l,c){const u=Ee(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>j.forEach(c,f=>j.forEach(f.ki,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>j.forEach(f.qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Ji(h))throw h;te("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.ts.get(f),b=d.snapshotVersion,S=d.withLastLimboFreeSnapshotVersion(b);u.ts=u.ts.insert(f,S)}}}(r.localStore,i))}async function VP(t,e){const n=Ee(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await T_(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new ie(q.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await to(n,r._s)}}function DP(t,e){const n=Ee(t),r=n.ya.get(e);if(r&&r.Ra)return Re().add(r.key);{let s=Re();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function MP(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=V_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kP.bind(null,e),e.Va.a_=vP.bind(null,e.eventManager),e.Va.Fa=EP.bind(null,e.eventManager),e}function LP(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NP.bind(null,e),e}class jd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ll(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return qb(this.persistence,new Bb,e.initialUser,this.serializer)}createPersistence(e){return new Lb(ih.jr,this.serializer)}createSharedClientState(e){return new Qb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ud(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VP.bind(null,this.syncEngine),await pP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mP}()}createDatastore(e){const n=ll(e.databaseInfo.databaseId),r=function(i){return new Zb(i)}(e.databaseInfo);return function(i,o,a,l){return new nP(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new sP(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ud(this.syncEngine,n,0),function(){return Md.D()?new Md:new Yb}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new bP(s,i,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Ee(n);te("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await eo(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class UP{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class BP{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=qm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{te("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(te("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tc(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await T_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qP(t);te("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Ld(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Ld(e.remoteStore,i)),t._onlineComponents=e}function jP(t){return t.name==="FirebaseError"?t.code===q.FAILED_PRECONDITION||t.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function qP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!jP(n))throw n;Ts("Error using user provided cache. Falling back to memory cache: "+n),await tc(t,new jd)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await tc(t,new jd);return t._offlineComponents}async function F_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await qd(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await qd(t,new FP))),t._onlineComponents}function HP(t){return F_(t).then(e=>e.syncEngine)}async function zP(t){const e=await F_(t),n=e.eventManager;return n.onListen=PP.bind(null,e.syncEngine),n.onUnlisten=SP.bind(null,e.syncEngine),n}function $P(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new UP({next:f=>{o.enqueueAndForget(()=>yP(i,h)),f.fromCache&&l.source==="server"?c.reject(new ie(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new TP(a,u,{includeMetadataChanges:!0,J_:!0});return _P(i,h)}(await zP(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function U_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Hd=new Map;/**
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
 */function B_(t,e,n){if(!n)throw new ie(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WP(t,e,n,r){if(e===!0&&r===!0)throw new ie(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zd(t){if(!ae.isDocumentKey(t))throw new ie(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $d(t){if(ae.isDocumentKey(t))throw new ie(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ph(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Hr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ph(t);throw new ie(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Wd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=U_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lA;switch(r.type){case"firstParty":return new fA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hd.get(n);r&&(te("ComponentProvider","Removing Datastore"),Hd.delete(n),r.terminate())}(this),Promise.resolve()}}function KP(t,e,n,r={}){var s;const i=(t=Hr(t,hl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=gt.MOCK_USER;else{a=LT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new ie(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new gt(c)}t._authCredentials=new cA(new jm(a,l))}}/**
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
 */class fl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fl(this.firestore,e,this._query)}}class Kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kt(this.firestore,e,this._key)}}class ar extends fl{constructor(e,n,r){super(e,n,Xm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kt(this.firestore,null,new ae(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function Kd(t,e,...n){if(t=nn(t),B_("collection","path",e),t instanceof hl){const r=ze.fromString(e,...n);return $d(r),new ar(t,null,r)}{if(!(t instanceof Kt||t instanceof ar))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return $d(r),new ar(t.firestore,null,r)}}function gh(t,e,...n){if(t=nn(t),arguments.length===1&&(e=qm.newId()),B_("doc","path",e),t instanceof hl){const r=ze.fromString(e,...n);return zd(r),new Kt(t,null,new ae(r))}{if(!(t instanceof Kt||t instanceof ar))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return zd(r),new Kt(t.firestore,t instanceof ar?t.converter:null,new ae(r))}}/**
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
 */class GP{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new I_(this,"async_queue_retry"),this.iu=()=>{const n=ec();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=ec();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new or;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Ji(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=uh.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&he()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class no extends hl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new GP}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||q_(this),this._firestoreClient.terminate()}}function QP(t,e){const n=typeof t=="object"?t:Dg(),r=typeof t=="string"?t:e||"(default)",s=Au(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=DT("firestore");i&&KP(s,...i)}return s}function j_(t){return t._firestoreClient||q_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function q_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new AA(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,U_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new BP(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rs(wt.fromBase64String(e))}catch(n){throw new ie(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rs(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class mh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class H_{constructor(e){this._methodName=e}}/**
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
 */class _h{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */const YP=/^__.*__$/;class JP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xi(e,this.data,n,this.fieldTransforms)}}function z_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class yh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new yh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return ya(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(z_(this.Iu)&&YP.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class XP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ll(e)}pu(e,n,r,s=!1){return new yh({Iu:e,methodName:n,gu:r,path:ct.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $_(t){const e=t._freezeSettings(),n=ll(t._databaseId);return new XP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function W_(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);Y_("Data must be an object, but it was:",o,r);const a=G_(r,o);let l,c;if(i.merge)l=new Zt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=ZP(e,h,n);if(!o.contains(f))throw new ie(q.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);tR(u,f)||u.push(f)}l=new Zt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new JP(new zt(a),l,c)}function K_(t,e){if(Q_(t=nn(t)))return Y_("Unsupported field value:",e,t),G_(t,e);if(t instanceof H_)return function(r,s){if(!z_(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=K_(a,s.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=nn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return WA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=et.fromDate(r);return{timestampValue:ma(s.serializer,i)}}if(r instanceof et){const i=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ma(s.serializer,i)}}if(r instanceof _h)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rs)return{bytesValue:g_(s.serializer,r._byteString)};if(r instanceof Kt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${ph(r)}`)}(t,e)}function G_(t,e){const n={};return Hm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ds(t,(r,s)=>{const i=K_(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Q_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof _h||t instanceof Rs||t instanceof Kt||t instanceof H_)}function Y_(t,e,n){if(!Q_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ph(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function ZP(t,e,n){if((e=nn(e))instanceof mh)return e._internalPath;if(typeof e=="string")return J_(t,e);throw ya("Field path arguments must be of type string or ",t,!1,void 0,n)}const eR=new RegExp("[~\\*/\\[\\]]");function J_(t,e,n){if(e.search(eR)>=0)throw ya(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mh(...e.split("."))._internalPath}catch{throw ya(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ya(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ie(q.INVALID_ARGUMENT,a+t+l)}function tR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class X_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Z_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nR extends X_{data(){return super.data()}}function Z_(t,e){return typeof e=="string"?J_(t,e):e instanceof mh?e._internalPath:e._delegate._internalPath}/**
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
 */function rR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sR{convertValue(e,n="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ds(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new _h(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ni(e));default:return null}}convertTimestamp(e){const n=fr(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);Be(E_(r));const s=new xi(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function ey(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Po{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iR extends X_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Z_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fo extends iR{data(e={}){return super.data(e)}}class oR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Po(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fo(this._firestore,this._userDataWriter,r.key,r,new Po(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Fo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Po(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Fo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Po(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:aR(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}class lR extends sR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,n)}}function cR(t){t=Hr(t,fl);const e=Hr(t.firestore,no),n=j_(e),r=new lR(e);return rR(t._query),$P(n,t._query).then(s=>new oR(e,r,t,s))}function uR(t,e,n){t=Hr(t,Kt);const r=Hr(t.firestore,no),s=ey(t.converter,e,n);return vh(r,[W_($_(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,en.none())])}function hR(t){return vh(Hr(t.firestore,no),[new eh(t._key,en.none())])}function fR(t,e){const n=Hr(t.firestore,no),r=gh(t),s=ey(t.converter,e);return vh(n,[W_($_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function vh(t,e){return function(r,s){const i=new or;return r.asyncQueue.enqueueAndForget(async()=>CP(await HP(r),s,i)),i.promise}(j_(t),e)}(function(e,n=!0){(function(s){Vs=s})(Os),vs(new Fr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new no(new uA(r.getProvider("auth-internal")),new pA(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ie(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ir(pd,"4.4.0",e),ir(pd,"4.4.0","esm2017")})();var dR="firebase",pR="10.7.1";/**
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
 */ir(dR,pR,"app");const gR=Vg({apiKey:"AIzaSyB8LOhqL7Vb9xapsI74hRYNhpIt9LPbHtg",authDomain:"dartscoreboard-3ba6b.firebaseapp.com",projectId:"dartscoreboard-3ba6b",storageBucket:"dartscoreboard-3ba6b.appspot.com",messagingSenderId:"50859798448",appId:"1:50859798448:web:dd9210e7b79fc633367075"}),Uo=QP(gR);function Bo(t){return t==="dev"?"_dev":""}function mR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ty={exports:{}};/*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */(function(t){/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */(function(e){if(e.jQuery)return;var n=function(u,h){return new n.fn.init(u,h)};n.isWindow=function(u){return u&&u===u.window},n.type=function(u){return u?typeof u=="object"||typeof u=="function"?i[a.call(u)]||"object":typeof u:u+""},n.isArray=Array.isArray||function(u){return n.type(u)==="array"};function r(u){var h=u.length,f=n.type(u);return f==="function"||n.isWindow(u)?!1:u.nodeType===1&&h?!0:f==="array"||h===0||typeof h=="number"&&h>0&&h-1 in u}n.isPlainObject=function(u){var h;if(!u||n.type(u)!=="object"||u.nodeType||n.isWindow(u))return!1;try{if(u.constructor&&!o.call(u,"constructor")&&!o.call(u.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}for(h in u);return h===void 0||o.call(u,h)},n.each=function(u,h,f){var d,b=0,S=u.length,k=r(u);if(f){if(k)for(;b<S&&(d=h.apply(u[b],f),d!==!1);b++);else for(b in u)if(u.hasOwnProperty(b)&&(d=h.apply(u[b],f),d===!1))break}else if(k)for(;b<S&&(d=h.call(u[b],b,u[b]),d!==!1);b++);else for(b in u)if(u.hasOwnProperty(b)&&(d=h.call(u[b],b,u[b]),d===!1))break;return u},n.data=function(u,h,f){if(f===void 0){var d=u[n.expando],b=d&&s[d];if(h===void 0)return b;if(b&&h in b)return b[h]}else if(h!==void 0){var S=u[n.expando]||(u[n.expando]=++n.uuid);return s[S]=s[S]||{},s[S][h]=f,f}},n.removeData=function(u,h){var f=u[n.expando],d=f&&s[f];d&&(h?n.each(h,function(b,S){delete d[S]}):delete s[f])},n.extend=function(){var u,h,f,d,b,S,k=arguments[0]||{},_=1,C=arguments.length,Z=!1;for(typeof k=="boolean"&&(Z=k,k=arguments[_]||{},_++),typeof k!="object"&&n.type(k)!=="function"&&(k={}),_===C&&(k=this,_--);_<C;_++)if(b=arguments[_])for(d in b)b.hasOwnProperty(d)&&(u=k[d],f=b[d],k!==f&&(Z&&f&&(n.isPlainObject(f)||(h=n.isArray(f)))?(h?(h=!1,S=u&&n.isArray(u)?u:[]):S=u&&n.isPlainObject(u)?u:{},k[d]=n.extend(Z,S,f)):f!==void 0&&(k[d]=f)));return k},n.queue=function(u,h,f){function d(S,k){var _=k||[];return S&&(r(Object(S))?function(C,Z){for(var K=+Z.length,ge=0,Ie=C.length;ge<K;)C[Ie++]=Z[ge++];if(K!==K)for(;Z[ge]!==void 0;)C[Ie++]=Z[ge++];return C.length=Ie,C}(_,typeof S=="string"?[S]:S):[].push.call(_,S)),_}if(u){h=(h||"fx")+"queue";var b=n.data(u,h);return f?(!b||n.isArray(f)?b=n.data(u,h,d(f)):b.push(f),b):b||[]}},n.dequeue=function(u,h){n.each(u.nodeType?[u]:u,function(f,d){h=h||"fx";var b=n.queue(d,h),S=b.shift();S==="inprogress"&&(S=b.shift()),S&&(h==="fx"&&b.unshift("inprogress"),S.call(d,function(){n.dequeue(d,h)}))})},n.fn=n.prototype={init:function(u){if(u.nodeType)return this[0]=u,this;throw new Error("Not a DOM node.")},offset:function(){var u=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:u.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:u.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function u(S){for(var k=S.offsetParent;k&&k.nodeName.toLowerCase()!=="html"&&k.style&&k.style.position.toLowerCase()==="static";)k=k.offsetParent;return k||document}var h=this[0],f=u(h),d=this.offset(),b=/^(?:body|html)$/i.test(f.nodeName)?{top:0,left:0}:n(f).offset();return d.top-=parseFloat(h.style.marginTop)||0,d.left-=parseFloat(h.style.marginLeft)||0,f.style&&(b.top+=parseFloat(f.style.borderTopWidth)||0,b.left+=parseFloat(f.style.borderLeftWidth)||0),{top:d.top-b.top,left:d.left-b.left}}};var s={};n.expando="velocity"+new Date().getTime(),n.uuid=0;for(var i={},o=i.hasOwnProperty,a=i.toString,l="Boolean Number String Function Array Date RegExp Object Error".split(" "),c=0;c<l.length;c++)i["[object "+l[c]+"]"]=l[c].toLowerCase();n.fn.init.prototype=n.fn,e.Velocity={Utilities:n}})(window),function(e){t.exports=e()}(function(){return function(e,n,r,s){var i=function(){if(r.documentMode)return r.documentMode;for(var p=7;p>4;p--){var v=r.createElement("div");if(v.innerHTML="<!--[if IE "+p+"]><span></span><![endif]-->",v.getElementsByTagName("span").length)return v=null,p}return s}(),o=function(){var p=0;return n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||function(v){var y=new Date().getTime(),I;return I=Math.max(0,16-(y-p)),p=y+I,setTimeout(function(){v(y+I)},I)}}(),a=function(){var p=n.performance||{};if(typeof p.now!="function"){var v=p.timing&&p.timing.navigationStart?p.timing.navigationStart:new Date().getTime();p.now=function(){return new Date().getTime()-v}}return p}();function l(p){for(var v=-1,y=p?p.length:0,I=[];++v<y;){var x=p[v];x&&I.push(x)}return I}var c=function(){var p=Array.prototype.slice;try{return p.call(r.documentElement),p}catch{return function(y,I){var x=this.length;if(typeof y!="number"&&(y=0),typeof I!="number"&&(I=x),this.slice)return p.call(this,y,I);var B,V=[],O=y>=0?y:Math.max(0,x+y),L=I<0?x+I:Math.min(I,x),Y=L-O;if(Y>0)if(V=new Array(Y),this.charAt)for(B=0;B<Y;B++)V[B]=this.charAt(O+B);else for(B=0;B<Y;B++)V[B]=this[O+B];return V}}}(),u=function(){return Array.prototype.includes?function(p,v){return p.includes(v)}:Array.prototype.indexOf?function(p,v){return p.indexOf(v)>=0}:function(p,v){for(var y=0;y<p.length;y++)if(p[y]===v)return!0;return!1}};function h(p){return f.isWrapped(p)?p=c.call(p):f.isNode(p)&&(p=[p]),p}var f={isNumber:function(p){return typeof p=="number"},isString:function(p){return typeof p=="string"},isArray:Array.isArray||function(p){return Object.prototype.toString.call(p)==="[object Array]"},isFunction:function(p){return Object.prototype.toString.call(p)==="[object Function]"},isNode:function(p){return p&&p.nodeType},isWrapped:function(p){return p&&p!==n&&f.isNumber(p.length)&&!f.isString(p)&&!f.isFunction(p)&&!f.isNode(p)&&(p.length===0||f.isNode(p[0]))},isSVG:function(p){return n.SVGElement&&p instanceof n.SVGElement},isEmptyObject:function(p){for(var v in p)if(p.hasOwnProperty(v))return!1;return!0}},d,b=!1;if(e.fn&&e.fn.jquery?(d=e,b=!0):d=n.Velocity.Utilities,i<=8&&!b)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(i<=7){jQuery.fn.velocity=jQuery.fn.animate;return}var S=400,k="swing",_={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n.navigator.userAgent),isAndroid:/Android/i.test(n.navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(n.navigator.userAgent),isChrome:n.chrome,isFirefox:/Firefox/i.test(n.navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:d,Redirects:{},Easings:{},Promise:n.Promise,defaults:{queue:"",duration:S,easing:k,begin:s,complete:s,progress:s,display:s,visibility:s,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(p){d.data(p,"velocity",{isSVG:f.isSVG(p),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:2},debug:!1,timestamp:!0,pauseAll:function(p){var v=new Date().getTime();d.each(_.State.calls,function(y,I){if(I){if(p!==s&&(I[2].queue!==p||I[2].queue===!1))return!0;I[5]={resume:!1}}}),d.each(_.State.delayedElements,function(y,I){I&&Z(I,v)})},resumeAll:function(p){new Date().getTime(),d.each(_.State.calls,function(v,y){if(y){if(p!==s&&(y[2].queue!==p||y[2].queue===!1))return!0;y[5]&&(y[5].resume=!0)}}),d.each(_.State.delayedElements,function(v,y){y&&K(y)})}};n.pageYOffset!==s?(_.State.scrollAnchor=n,_.State.scrollPropertyLeft="pageXOffset",_.State.scrollPropertyTop="pageYOffset"):(_.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,_.State.scrollPropertyLeft="scrollLeft",_.State.scrollPropertyTop="scrollTop");function C(p){var v=d.data(p,"velocity");return v===null?s:v}function Z(p,v){var y=C(p);y&&y.delayTimer&&!y.delayPaused&&(y.delayRemaining=y.delay-v+y.delayBegin,y.delayPaused=!0,clearTimeout(y.delayTimer.setTimeout))}function K(p,v){var y=C(p);y&&y.delayTimer&&y.delayPaused&&(y.delayPaused=!1,y.delayTimer.setTimeout=setTimeout(y.delayTimer.next,y.delayRemaining))}function ge(p){return function(v){return Math.round(v*p)*(1/p)}}function Ie(p,v,y,I){var x=4,B=.001,V=1e-7,O=10,L=11,Y=1/(L-1),le="Float32Array"in n;if(arguments.length!==4)return!1;for(var Q=0;Q<4;++Q)if(typeof arguments[Q]!="number"||isNaN(arguments[Q])||!isFinite(arguments[Q]))return!1;p=Math.min(p,1),y=Math.min(y,1),p=Math.max(p,0),y=Math.max(y,0);var R=le?new Float32Array(L):new Array(L);function M(E,N){return 1-3*N+3*E}function F(E,N){return 3*N-6*E}function $(E){return 3*E}function se(E,N,A){return((M(N,A)*E+F(N,A))*E+$(N))*E}function g(E,N,A){return 3*M(N,A)*E*E+2*F(N,A)*E+$(N)}function m(E,N){for(var A=0;A<x;++A){var W=g(N,p,y);if(W===0)return N;var J=se(N,p,y)-E;N-=J/W}return N}function T(){for(var E=0;E<L;++E)R[E]=se(E*Y,p,y)}function P(E,N,A){var W,J,re=0;do J=N+(A-N)/2,W=se(J,p,y)-E,W>0?A=J:N=J;while(Math.abs(W)>V&&++re<O);return J}function D(E){for(var N=0,A=1,W=L-1;A!==W&&R[A]<=E;++A)N+=Y;--A;var J=(E-R[A])/(R[A+1]-R[A]),re=N+J*Y,_e=g(re,p,y);return _e>=B?m(E,re):_e===0?re:P(E,N,N+Y)}var U=!1;function G(){U=!0,(p!==v||y!==I)&&T()}var H=function(E){return U||G(),p===v&&y===I?E:E===0?0:E===1?1:se(D(E),v,I)};H.getControlPoints=function(){return[{x:p,y:v},{x:y,y:I}]};var z="generateBezier("+[p,v,y,I]+")";return H.toString=function(){return z},H}var Le=function(){function p(I){return-I.tension*I.x-I.friction*I.v}function v(I,x,B){var V={x:I.x+B.dx*x,v:I.v+B.dv*x,tension:I.tension,friction:I.friction};return{dx:V.v,dv:p(V)}}function y(I,x){var B={dx:I.v,dv:p(I)},V=v(I,x*.5,B),O=v(I,x*.5,V),L=v(I,x,O),Y=1/6*(B.dx+2*(V.dx+O.dx)+L.dx),le=1/6*(B.dv+2*(V.dv+O.dv)+L.dv);return I.x=I.x+Y*x,I.v=I.v+le*x,I}return function I(x,B,V){var O={x:-1,v:0,tension:null,friction:null},L=[0],Y=0,le=1/1e4,Q=16/1e3,R,M,F;for(x=parseFloat(x)||500,B=parseFloat(B)||20,V=V||null,O.tension=x,O.friction=B,R=V!==null,R?(Y=I(x,B),M=Y/V*Q):M=Q;F=y(F||O,M),L.push(1+F.x),Y+=16,Math.abs(F.x)>le&&Math.abs(F.v)>le;);return R?function($){return L[$*(L.length-1)|0]}:Y}}();_.Easings={linear:function(p){return p},swing:function(p){return .5-Math.cos(p*Math.PI)/2},spring:function(p){return 1-Math.cos(p*4.5*Math.PI)*Math.exp(-p*6)}},d.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(p,v){_.Easings[v[0]]=Ie.apply(null,v[1])});function ue(p,v){var y=p;return f.isString(p)?_.Easings[p]||(y=!1):f.isArray(p)&&p.length===1?y=ge.apply(null,p):f.isArray(p)&&p.length===2?y=Le.apply(null,p.concat([v])):f.isArray(p)&&p.length===4?y=Ie.apply(null,p):y=!1,y===!1&&(_.Easings[_.defaults.easing]?y=_.defaults.easing:y=k),y}var w=_.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var p=0;p<w.Lists.colors.length;p++){var v=w.Lists.colors[p]==="color"?"0 0 0 1":"255 255 255 1";w.Hooks.templates[w.Lists.colors[p]]=["Red Green Blue Alpha",v]}var y,I,x;if(i){for(y in w.Hooks.templates)if(w.Hooks.templates.hasOwnProperty(y)){I=w.Hooks.templates[y],x=I[0].split(" ");var B=I[1].match(w.RegEx.valueSplit);x[0]==="Color"&&(x.push(x.shift()),B.push(B.shift()),w.Hooks.templates[y]=[x.join(" "),B.join(" ")])}}for(y in w.Hooks.templates)if(w.Hooks.templates.hasOwnProperty(y)){I=w.Hooks.templates[y],x=I[0].split(" ");for(var V in x)if(x.hasOwnProperty(V)){var O=y+x[V],L=V;w.Hooks.registered[O]=[y,L]}}},getRoot:function(p){var v=w.Hooks.registered[p];return v?v[0]:p},getUnit:function(p,v){var y=(p.substr(v||0,5).match(/^[a-z%]+/)||[])[0]||"";return y&&u(w.Lists.units)?y:""},fixColors:function(p){return p.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(v,y,I){return w.Lists.colorNames.hasOwnProperty(I)?(y||"rgba(")+w.Lists.colorNames[I]+(y?"":",1)"):y+I})},cleanRootPropertyValue:function(p,v){return w.RegEx.valueUnwrap.test(v)&&(v=v.match(w.RegEx.valueUnwrap)[1]),w.Values.isCSSNullValue(v)&&(v=w.Hooks.templates[p][1]),v},extractValue:function(p,v){var y=w.Hooks.registered[p];if(y){var I=y[0],x=y[1];return v=w.Hooks.cleanRootPropertyValue(I,v),v.toString().match(w.RegEx.valueSplit)[x]}else return v},injectValue:function(p,v,y){var I=w.Hooks.registered[p];if(I){var x=I[0],B=I[1],V,O;return y=w.Hooks.cleanRootPropertyValue(x,y),V=y.toString().match(w.RegEx.valueSplit),V[B]=v,O=V.join(" "),O}else return y}},Normalizations:{registered:{clip:function(p,v,y){switch(p){case"name":return"clip";case"extract":var I;return w.RegEx.wrappedValueAlreadyExtracted.test(y)?I=y:(I=y.toString().match(w.RegEx.valueUnwrap),I=I?I[1].replace(/,(\s+)?/g," "):y),I;case"inject":return"rect("+y+")"}},blur:function(p,v,y){switch(p){case"name":return _.State.isFirefox?"filter":"-webkit-filter";case"extract":var I=parseFloat(y);if(!(I||I===0)){var x=y.toString().match(/blur\(([0-9]+[A-z]+)\)/i);x?I=x[1]:I=0}return I;case"inject":return parseFloat(y)?"blur("+y+")":"none"}},opacity:function(p,v,y){if(i<=8)switch(p){case"name":return"filter";case"extract":var I=y.toString().match(/alpha\(opacity=(.*)\)/i);return I?y=I[1]/100:y=1,y;case"inject":return v.style.zoom=1,parseFloat(y)>=1?"":"alpha(opacity="+parseInt(parseFloat(y)*100,10)+")"}else switch(p){case"name":return"opacity";case"extract":return y;case"inject":return y}}},register:function(){(!i||i>9)&&!_.State.isGingerbread&&(w.Lists.transformsBase=w.Lists.transformsBase.concat(w.Lists.transforms3D));for(var p=0;p<w.Lists.transformsBase.length;p++)(function(){var x=w.Lists.transformsBase[p];w.Normalizations.registered[x]=function(B,V,O){switch(B){case"name":return"transform";case"extract":return C(V)===s||C(V).transformCache[x]===s?/^scale/i.test(x)?1:0:C(V).transformCache[x].replace(/[()]/g,"");case"inject":var L=!1;switch(x.substr(0,x.length-1)){case"translate":L=!/(%|px|em|rem|vw|vh|\d)$/i.test(O);break;case"scal":case"scale":_.State.isAndroid&&C(V).transformCache[x]===s&&O<1&&(O=1),L=!/(\d)$/i.test(O);break;case"skew":L=!/(deg|\d)$/i.test(O);break;case"rotate":L=!/(deg|\d)$/i.test(O);break}return L||(C(V).transformCache[x]="("+O+")"),C(V).transformCache[x]}}})();for(var v=0;v<w.Lists.colors.length;v++)(function(){var x=w.Lists.colors[v];w.Normalizations.registered[x]=function(B,V,O){switch(B){case"name":return x;case"extract":var L;if(w.RegEx.wrappedValueAlreadyExtracted.test(O))L=O;else{var Y,le={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(O)?le[O]!==s?Y=le[O]:Y=le.black:w.RegEx.isHex.test(O)?Y="rgb("+w.Values.hexToRgb(O).join(" ")+")":/^rgba?\(/i.test(O)||(Y=le.black),L=(Y||O).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!i||i>8)&&L.split(" ").length===3&&(L+=" 1"),L;case"inject":return/^rgb/.test(O)?O:(i<=8?O.split(" ").length===4&&(O=O.split(/\s+/).slice(0,3).join(" ")):O.split(" ").length===3&&(O+=" 1"),(i<=8?"rgb":"rgba")+"("+O.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}})();function y(x,B,V){var O=w.getPropertyValue(B,"boxSizing").toString().toLowerCase()==="border-box";if(O===(V||!1)){var L,Y,le=0,Q=x==="width"?["Left","Right"]:["Top","Bottom"],R=["padding"+Q[0],"padding"+Q[1],"border"+Q[0]+"Width","border"+Q[1]+"Width"];for(L=0;L<R.length;L++)Y=parseFloat(w.getPropertyValue(B,R[L])),isNaN(Y)||(le+=Y);return V?-le:le}return 0}function I(x,B){return function(V,O,L){switch(V){case"name":return x;case"extract":return parseFloat(L)+y(x,O,B);case"inject":return parseFloat(L)-y(x,O,B)+"px"}}}w.Normalizations.registered.innerWidth=I("width",!0),w.Normalizations.registered.innerHeight=I("height",!0),w.Normalizations.registered.outerWidth=I("width"),w.Normalizations.registered.outerHeight=I("height")}},Names:{camelCase:function(p){return p.replace(/-(\w)/g,function(v,y){return y.toUpperCase()})},SVGAttribute:function(p){var v="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(i||_.State.isAndroid&&!_.State.isChrome)&&(v+="|transform"),new RegExp("^("+v+")$","i").test(p)},prefixCheck:function(p){if(_.State.prefixMatches[p])return[_.State.prefixMatches[p],!0];for(var v=["","Webkit","Moz","ms","O"],y=0,I=v.length;y<I;y++){var x;if(y===0?x=p:x=v[y]+p.replace(/^\w/,function(B){return B.toUpperCase()}),f.isString(_.State.prefixElement.style[x]))return _.State.prefixMatches[p]=x,[x,!0]}return[p,!1]}},Values:{hexToRgb:function(p){var v=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,y=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,I;return p=p.replace(v,function(x,B,V,O){return B+B+V+V+O+O}),I=y.exec(p),I?[parseInt(I[1],16),parseInt(I[2],16),parseInt(I[3],16)]:[0,0,0]},isCSSNullValue:function(p){return!p||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(p)},getUnitType:function(p){return/^(rotate|skew)/i.test(p)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(p)?"":"px"},getDisplayType:function(p){var v=p&&p.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(v)?"inline":/^(li)$/i.test(v)?"list-item":/^(tr)$/i.test(v)?"table-row":/^(table)$/i.test(v)?"table":/^(tbody)$/i.test(v)?"table-row-group":"block"},addClass:function(p,v){if(p)if(p.classList)p.classList.add(v);else if(f.isString(p.className))p.className+=(p.className.length?" ":"")+v;else{var y=p.getAttribute(i<=7?"className":"class")||"";p.setAttribute("class",y+(y?" ":"")+v)}},removeClass:function(p,v){if(p)if(p.classList)p.classList.remove(v);else if(f.isString(p.className))p.className=p.className.toString().replace(new RegExp("(^|\\s)"+v.split(" ").join("|")+"(\\s|$)","gi")," ");else{var y=p.getAttribute(i<=7?"className":"class")||"";p.setAttribute("class",y.replace(new RegExp("(^|s)"+v.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(p,v,y,I){function x(Q,R){var M=0;if(i<=8)M=d.css(Q,R);else{var F=!1;/^(width|height)$/.test(R)&&w.getPropertyValue(Q,"display")===0&&(F=!0,w.setPropertyValue(Q,"display",w.Values.getDisplayType(Q)));var $=function(){F&&w.setPropertyValue(Q,"display","none")};if(!I){if(R==="height"&&w.getPropertyValue(Q,"boxSizing").toString().toLowerCase()!=="border-box"){var se=Q.offsetHeight-(parseFloat(w.getPropertyValue(Q,"borderTopWidth"))||0)-(parseFloat(w.getPropertyValue(Q,"borderBottomWidth"))||0)-(parseFloat(w.getPropertyValue(Q,"paddingTop"))||0)-(parseFloat(w.getPropertyValue(Q,"paddingBottom"))||0);return $(),se}else if(R==="width"&&w.getPropertyValue(Q,"boxSizing").toString().toLowerCase()!=="border-box"){var g=Q.offsetWidth-(parseFloat(w.getPropertyValue(Q,"borderLeftWidth"))||0)-(parseFloat(w.getPropertyValue(Q,"borderRightWidth"))||0)-(parseFloat(w.getPropertyValue(Q,"paddingLeft"))||0)-(parseFloat(w.getPropertyValue(Q,"paddingRight"))||0);return $(),g}}var m;C(Q)===s?m=n.getComputedStyle(Q,null):C(Q).computedStyle?m=C(Q).computedStyle:m=C(Q).computedStyle=n.getComputedStyle(Q,null),R==="borderColor"&&(R="borderTopColor"),i===9&&R==="filter"?M=m.getPropertyValue(R):M=m[R],(M===""||M===null)&&(M=Q.style[R]),$()}if(M==="auto"&&/^(top|right|bottom|left)$/i.test(R)){var T=x(Q,"position");(T==="fixed"||T==="absolute"&&/top|left/i.test(R))&&(M=d(Q).position()[R]+"px")}return M}var B;if(w.Hooks.registered[v]){var V=v,O=w.Hooks.getRoot(V);y===s&&(y=w.getPropertyValue(p,w.Names.prefixCheck(O)[0])),w.Normalizations.registered[O]&&(y=w.Normalizations.registered[O]("extract",p,y)),B=w.Hooks.extractValue(V,y)}else if(w.Normalizations.registered[v]){var L,Y;L=w.Normalizations.registered[v]("name",p),L!=="transform"&&(Y=x(p,w.Names.prefixCheck(L)[0]),w.Values.isCSSNullValue(Y)&&w.Hooks.templates[v]&&(Y=w.Hooks.templates[v][1])),B=w.Normalizations.registered[v]("extract",p,Y)}if(!/^[\d-]/.test(B)){var le=C(p);if(le&&le.isSVG&&w.Names.SVGAttribute(v))if(/^(height|width)$/i.test(v))try{B=p.getBBox()[v]}catch{B=0}else B=p.getAttribute(v);else B=x(p,w.Names.prefixCheck(v)[0])}return w.Values.isCSSNullValue(B)&&(B=0),_.debug>=2&&console.log("Get "+v+": "+B),B},setPropertyValue:function(p,v,y,I,x){var B=v;if(v==="scroll")x.container?x.container["scroll"+x.direction]=y:x.direction==="Left"?n.scrollTo(y,x.alternateValue):n.scrollTo(x.alternateValue,y);else if(w.Normalizations.registered[v]&&w.Normalizations.registered[v]("name",p)==="transform")w.Normalizations.registered[v]("inject",p,y),B="transform",y=C(p).transformCache[v];else{if(w.Hooks.registered[v]){var V=v,O=w.Hooks.getRoot(v);I=I||w.getPropertyValue(p,O),y=w.Hooks.injectValue(V,y,I),v=O}if(w.Normalizations.registered[v]&&(y=w.Normalizations.registered[v]("inject",p,y),v=w.Normalizations.registered[v]("name",p)),B=w.Names.prefixCheck(v)[0],i<=8)try{p.style[B]=y}catch{_.debug&&console.log("Browser does not support ["+y+"] for ["+B+"]")}else{var L=C(p);L&&L.isSVG&&w.Names.SVGAttribute(v)?p.setAttribute(v,y):p.style[B]=y}_.debug>=2&&console.log("Set "+v+" ("+B+"): "+y)}return[B,y]},flushTransformCache:function(p){var v="",y=C(p);if((i||_.State.isAndroid&&!_.State.isChrome)&&y&&y.isSVG){var I=function(O){return parseFloat(w.getPropertyValue(p,O))},x={translate:[I("translateX"),I("translateY")],skewX:[I("skewX")],skewY:[I("skewY")],scale:I("scale")!==1?[I("scale"),I("scale")]:[I("scaleX"),I("scaleY")],rotate:[I("rotateZ"),0,0]};d.each(C(p).transformCache,function(O){/^translate/i.test(O)?O="translate":/^scale/i.test(O)?O="scale":/^rotate/i.test(O)&&(O="rotate"),x[O]&&(v+=O+"("+x[O].join(" ")+") ",delete x[O])})}else{var B,V;d.each(C(p).transformCache,function(O){if(B=C(p).transformCache[O],O==="transformPerspective")return V=B,!0;i===9&&O==="rotateZ"&&(O="rotate"),v+=O+B+" "}),V&&(v="perspective"+V+" "+v)}w.setPropertyValue(p,"transform",v)}};w.Hooks.register(),w.Normalizations.register(),_.hook=function(p,v,y){var I;return p=h(p),d.each(p,function(x,B){if(C(B)===s&&_.init(B),y===s)I===s&&(I=w.getPropertyValue(B,v));else{var V=w.setPropertyValue(B,v,y);V[0]==="transform"&&_.CSS.flushTransformCache(B),I=V}}),I};var Ae=function(){var p;function v(){return I?Y.promise||null:x}var y=arguments[0]&&(arguments[0].p||d.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||f.isString(arguments[0].properties)),I,x,B,V,O,L;f.isWrapped(this)?(I=!1,B=0,V=this,x=this):(I=!0,B=1,V=y?arguments[0].elements||arguments[0].e:arguments[0]);var Y={promise:null,resolver:null,rejecter:null};if(I&&_.Promise&&(Y.promise=new _.Promise(function(E,N){Y.resolver=E,Y.rejecter=N})),y?(O=arguments[0].properties||arguments[0].p,L=arguments[0].options||arguments[0].o):(O=arguments[B],L=arguments[B+1]),V=h(V),!V){Y.promise&&(!O||!L||L.promiseRejectEmpty!==!1?Y.rejecter():Y.resolver());return}var le=V.length,Q=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(O)&&!d.isPlainObject(L)){var R=B+1;L={};for(var M=R;M<arguments.length;M++)!f.isArray(arguments[M])&&(/^(fast|normal|slow)$/i.test(arguments[M])||/^\d/.test(arguments[M]))?L.duration=arguments[M]:f.isString(arguments[M])||f.isArray(arguments[M])?L.easing=arguments[M]:f.isFunction(arguments[M])&&(L.complete=arguments[M])}var F;switch(O){case"scroll":F="scroll";break;case"reverse":F="reverse";break;case"pause":var $=new Date().getTime();return d.each(V,function(E,N){Z(N,$)}),d.each(_.State.calls,function(E,N){var A=!1;N&&d.each(N[1],function(W,J){var re=L===s?"":L;if(re!==!0&&N[2].queue!==re&&!(L===s&&N[2].queue===!1))return!0;if(d.each(V,function(_e,Te){if(Te===J)return N[5]={resume:!1},A=!0,!1}),A)return!1})}),v();case"resume":return d.each(V,function(E,N){K(N)}),d.each(_.State.calls,function(E,N){var A=!1;N&&d.each(N[1],function(W,J){var re=L===s?"":L;if(re!==!0&&N[2].queue!==re&&!(L===s&&N[2].queue===!1)||!N[5])return!0;if(d.each(V,function(_e,Te){if(Te===J)return N[5].resume=!0,A=!0,!1}),A)return!1})}),v();case"finish":case"finishAll":case"stop":d.each(V,function(E,N){C(N)&&C(N).delayTimer&&(clearTimeout(C(N).delayTimer.setTimeout),C(N).delayTimer.next&&C(N).delayTimer.next(),delete C(N).delayTimer),O==="finishAll"&&(L===!0||f.isString(L))&&(d.each(d.queue(N,f.isString(L)?L:""),function(A,W){f.isFunction(W)&&W()}),d.queue(N,f.isString(L)?L:"",[]))});var se=[];return d.each(_.State.calls,function(E,N){N&&d.each(N[1],function(A,W){var J=L===s?"":L;if(J!==!0&&N[2].queue!==J&&!(L===s&&N[2].queue===!1))return!0;d.each(V,function(re,_e){if(_e===W)if((L===!0||f.isString(L))&&(d.each(d.queue(_e,f.isString(L)?L:""),function(Ve,ce){f.isFunction(ce)&&ce(null,!0)}),d.queue(_e,f.isString(L)?L:"",[])),O==="stop"){var Te=C(_e);Te&&Te.tweensContainer&&(J===!0||J==="")&&d.each(Te.tweensContainer,function(Ve,ce){ce.endValue=ce.currentValue}),se.push(E)}else(O==="finish"||O==="finishAll")&&(N[2].duration=1)})})}),O==="stop"&&(d.each(se,function(E,N){nt(N,!0)}),Y.promise&&Y.resolver(V)),v();default:if(d.isPlainObject(O)&&!f.isEmptyObject(O))F="start";else if(f.isString(O)&&_.Redirects[O]){p=d.extend({},L);var g=p.duration,m=p.delay||0;return p.backwards===!0&&(V=d.extend(!0,[],V).reverse()),d.each(V,function(E,N){parseFloat(p.stagger)?p.delay=m+parseFloat(p.stagger)*E:f.isFunction(p.stagger)&&(p.delay=m+p.stagger.call(N,E,le)),p.drag&&(p.duration=parseFloat(g)||(/^(callout|transition)/.test(O)?1e3:S),p.duration=Math.max(p.duration*(p.backwards?1-E/le:(E+1)/le),p.duration*.75,200)),_.Redirects[O].call(N,N,p||{},E,le,V,Y.promise?Y:s)}),v()}else{var T="Velocity: First argument ("+O+") was not a property map, a known action, or a registered redirect. Aborting.";return Y.promise?Y.rejecter(new Error(T)):n.console&&console.log(T),v()}}var P={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},D=[];function U(E,N){var A=d.extend({},_.defaults,L),W={},J;switch(C(E)===s&&_.init(E),parseFloat(A.delay)&&A.queue!==!1&&d.queue(E,A.queue,function(Ve,ce){if(ce===!0)return!0;_.velocityQueueEntryFlag=!0;var Ue=_.State.delayedElements.count++;_.State.delayedElements[Ue]=E;var Gt=function(on){return function(){_.State.delayedElements[on]=!1,Ve()}}(Ue);C(E).delayBegin=new Date().getTime(),C(E).delay=parseFloat(A.delay),C(E).delayTimer={setTimeout:setTimeout(Ve,parseFloat(A.delay)),next:Gt}}),A.duration.toString().toLowerCase()){case"fast":A.duration=200;break;case"normal":A.duration=S;break;case"slow":A.duration=600;break;default:A.duration=parseFloat(A.duration)||1}_.mock!==!1&&(_.mock===!0?A.duration=A.delay=1:(A.duration*=parseFloat(_.mock)||1,A.delay*=parseFloat(_.mock)||1)),A.easing=ue(A.easing,A.duration),A.begin&&!f.isFunction(A.begin)&&(A.begin=null),A.progress&&!f.isFunction(A.progress)&&(A.progress=null),A.complete&&!f.isFunction(A.complete)&&(A.complete=null),A.display!==s&&A.display!==null&&(A.display=A.display.toString().toLowerCase(),A.display==="auto"&&(A.display=_.CSS.Values.getDisplayType(E))),A.visibility!==s&&A.visibility!==null&&(A.visibility=A.visibility.toString().toLowerCase()),A.mobileHA=A.mobileHA&&_.State.isMobile&&!_.State.isGingerbread;function re(Ve){var ce,Ue;if(A.begin&&Q===0)try{A.begin.call(V,V)}catch(me){setTimeout(function(){throw me},1)}if(F==="scroll"){var Gt=/^x$/i.test(A.axis)?"Left":"Top",on=parseFloat(A.offset)||0,Un,dt,St;A.container?f.isWrapped(A.container)||f.isNode(A.container)?(A.container=A.container[0]||A.container,Un=A.container["scroll"+Gt],St=Un+d(E).position()[Gt.toLowerCase()]+on):A.container=null:(Un=_.State.scrollAnchor[_.State["scrollProperty"+Gt]],dt=_.State.scrollAnchor[_.State["scrollProperty"+(Gt==="Left"?"Top":"Left")]],St=d(E).offset()[Gt.toLowerCase()]+on),W={scroll:{rootPropertyValue:!1,startValue:Un,currentValue:Un,endValue:St,unitType:"",easing:A.easing,scrollData:{container:A.container,direction:Gt,alternateValue:dt}},element:E},_.debug&&console.log("tweensContainer (scroll): ",W.scroll,E)}else if(F==="reverse"){if(ce=C(E),!ce)return;if(ce.tweensContainer){ce.opts.display==="none"&&(ce.opts.display="auto"),ce.opts.visibility==="hidden"&&(ce.opts.visibility="visible"),ce.opts.loop=!1,ce.opts.begin=null,ce.opts.complete=null,L.easing||delete A.easing,L.duration||delete A.duration,A=d.extend({},ce.opts,A),Ue=d.extend(!0,{},ce?ce.tweensContainer:null);for(var xt in Ue)if(Ue.hasOwnProperty(xt)&&xt!=="element"){var xy=Ue[xt].startValue;Ue[xt].startValue=Ue[xt].currentValue=Ue[xt].endValue,Ue[xt].endValue=xy,f.isEmptyObject(L)||(Ue[xt].easing=A.easing),_.debug&&console.log("reverse tweensContainer ("+xt+"): "+JSON.stringify(Ue[xt]),E)}W=Ue}else{d.dequeue(E,A.queue);return}}else if(F==="start"){ce=C(E),ce&&ce.tweensContainer&&ce.isAnimating===!0&&(Ue=ce.tweensContainer);var Vy=function(me,Qr){var Ct,an,ye;return f.isFunction(me)&&(me=me.call(E,N,le)),f.isArray(me)?(Ct=me[0],!f.isArray(me[1])&&/^[\d-]/.test(me[1])||f.isFunction(me[1])||w.RegEx.isHex.test(me[1])?ye=me[1]:f.isString(me[1])&&!w.RegEx.isHex.test(me[1])&&_.Easings[me[1]]||f.isArray(me[1])?(an=Qr?me[1]:ue(me[1],A.duration),ye=me[2]):ye=me[1]||me[2]):Ct=me,Qr||(an=an||A.easing),f.isFunction(Ct)&&(Ct=Ct.call(E,N,le)),f.isFunction(ye)&&(ye=ye.call(E,N,le)),[Ct||0,an,ye]},Oh=function(me,Qr){var Ct=w.Hooks.getRoot(me),an=!1,ye=Qr[0],My=Qr[1],Pe=Qr[2],Ft;if((!ce||!ce.isSVG)&&Ct!=="tween"&&w.Names.prefixCheck(Ct)[1]===!1&&w.Normalizations.registered[Ct]===s){_.debug&&console.log("Skipping ["+Ct+"] due to a lack of browser support.");return}(A.display!==s&&A.display!==null&&A.display!=="none"||A.visibility!==s&&A.visibility!=="hidden")&&/opacity|filter/.test(me)&&!Pe&&ye!==0&&(Pe=0),A._cacheValues&&Ue&&Ue[me]?(Pe===s&&(Pe=Ue[me].endValue+Ue[me].unitType),an=ce.rootPropertyValueCache[Ct]):w.Hooks.registered[me]?Pe===s?(an=w.getPropertyValue(E,Ct),Pe=w.getPropertyValue(E,me,an)):an=w.Hooks.templates[Ct][1]:Pe===s&&(Pe=w.getPropertyValue(E,me));var Yr,Ut,mr,Tl=!1,Fh=function(Dt,Hs){var Jr,qn;return qn=(Hs||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(Mt){return Jr=Mt,""}),Jr||(Jr=w.Values.getUnitType(Dt)),[qn,Jr]};if(Pe!==ye&&f.isString(Pe)&&f.isString(ye)){Ft="";var Bn=0,jn=0,In=[],Bs=[],Vt=0,It=0,An=0;for(Pe=w.Hooks.fixColors(Pe),ye=w.Hooks.fixColors(ye);Bn<Pe.length&&jn<ye.length;){var Ge=Pe[Bn],_r=ye[jn];if(/[\d\.-]/.test(Ge)&&/[\d\.-]/.test(_r)){for(var js=Ge,ao=_r,Uh=".",Bh=".";++Bn<Pe.length;){if(Ge=Pe[Bn],Ge===Uh)Uh="..";else if(!/\d/.test(Ge))break;js+=Ge}for(;++jn<ye.length;){if(_r=ye[jn],_r===Bh)Bh="..";else if(!/\d/.test(_r))break;ao+=_r}var qs=w.Hooks.getUnit(Pe,Bn),wl=w.Hooks.getUnit(ye,jn);if(Bn+=qs.length,jn+=wl.length,qs===wl)js===ao?Ft+=js+qs:(Ft+="{"+In.length+(It?"!":"")+"}"+qs,In.push(parseFloat(js)),Bs.push(parseFloat(ao)));else{var lo=parseFloat(js),Il=parseFloat(ao);Ft+=(Vt<5?"calc":"")+"("+(lo?"{"+In.length+(It?"!":"")+"}":"0")+qs+" + "+(Il?"{"+(In.length+(lo?1:0))+(It?"!":"")+"}":"0")+wl+")",lo&&(In.push(lo),Bs.push(0)),Il&&(In.push(0),Bs.push(Il))}}else if(Ge===_r)Ft+=Ge,Bn++,jn++,Vt===0&&Ge==="c"||Vt===1&&Ge==="a"||Vt===2&&Ge==="l"||Vt===3&&Ge==="c"||Vt>=4&&Ge==="("?Vt++:(Vt&&Vt<5||Vt>=4&&Ge===")"&&--Vt<5)&&(Vt=0),It===0&&Ge==="r"||It===1&&Ge==="g"||It===2&&Ge==="b"||It===3&&Ge==="a"||It>=3&&Ge==="("?(It===3&&Ge==="a"&&(An=1),It++):An&&Ge===","?++An>3&&(It=An=0):(An&&It<(An?5:4)||It>=(An?4:3)&&Ge===")"&&--It<(An?5:4))&&(It=An=0);else{Vt=0;break}}(Bn!==Pe.length||jn!==ye.length)&&(_.debug&&console.error('Trying to pattern match mis-matched strings ["'+ye+'", "'+Pe+'"]'),Ft=s),Ft&&(In.length?(_.debug&&console.log('Pattern found "'+Ft+'" -> ',In,Bs,"["+Pe+","+ye+"]"),Pe=In,ye=Bs,Ut=mr=""):Ft=s)}Ft||(Yr=Fh(me,Pe),Pe=Yr[0],mr=Yr[1],Yr=Fh(me,ye),ye=Yr[0].replace(/^([+-\/*])=/,function(Dt,Hs){return Tl=Hs,""}),Ut=Yr[1],Pe=parseFloat(Pe)||0,ye=parseFloat(ye)||0,Ut==="%"&&(/^(fontSize|lineHeight)$/.test(me)?(ye=ye/100,Ut="em"):/^scale/.test(me)?(ye=ye/100,Ut=""):/(Red|Green|Blue)$/i.test(me)&&(ye=ye/100*255,Ut="")));var Ly=function(){var Dt={myParent:E.parentNode||r.body,position:w.getPropertyValue(E,"position"),fontSize:w.getPropertyValue(E,"fontSize")},Hs=Dt.position===P.lastPosition&&Dt.myParent===P.lastParent,Jr=Dt.fontSize===P.lastFontSize;P.lastParent=Dt.myParent,P.lastPosition=Dt.position,P.lastFontSize=Dt.fontSize;var qn=100,Mt={};if(!Jr||!Hs){var Bt=ce&&ce.isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");_.init(Bt),Dt.myParent.appendChild(Bt),d.each(["overflow","overflowX","overflowY"],function(Fy,Al){_.CSS.setPropertyValue(Bt,Al,"hidden")}),_.CSS.setPropertyValue(Bt,"position",Dt.position),_.CSS.setPropertyValue(Bt,"fontSize",Dt.fontSize),_.CSS.setPropertyValue(Bt,"boxSizing","content-box"),d.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(Fy,Al){_.CSS.setPropertyValue(Bt,Al,qn+"%")}),_.CSS.setPropertyValue(Bt,"paddingLeft",qn+"em"),Mt.percentToPxWidth=P.lastPercentToPxWidth=(parseFloat(w.getPropertyValue(Bt,"width",null,!0))||1)/qn,Mt.percentToPxHeight=P.lastPercentToPxHeight=(parseFloat(w.getPropertyValue(Bt,"height",null,!0))||1)/qn,Mt.emToPx=P.lastEmToPx=(parseFloat(w.getPropertyValue(Bt,"paddingLeft"))||1)/qn,Dt.myParent.removeChild(Bt)}else Mt.emToPx=P.lastEmToPx,Mt.percentToPxWidth=P.lastPercentToPxWidth,Mt.percentToPxHeight=P.lastPercentToPxHeight;return P.remToPx===null&&(P.remToPx=parseFloat(w.getPropertyValue(r.body,"fontSize"))||16),P.vwToPx===null&&(P.vwToPx=parseFloat(n.innerWidth)/100,P.vhToPx=parseFloat(n.innerHeight)/100),Mt.remToPx=P.remToPx,Mt.vwToPx=P.vwToPx,Mt.vhToPx=P.vhToPx,_.debug>=1&&console.log("Unit ratios: "+JSON.stringify(Mt),E),Mt};if(/[\/*]/.test(Tl))Ut=mr;else if(mr!==Ut&&Pe!==0)if(ye===0)Ut=mr;else{J=J||Ly();var jh=/margin|padding|left|right|width|text|word|letter/i.test(me)||/X$/.test(me)||me==="x"?"x":"y";switch(mr){case"%":Pe*=jh==="x"?J.percentToPxWidth:J.percentToPxHeight;break;case"px":break;default:Pe*=J[mr+"ToPx"]}switch(Ut){case"%":Pe*=1/(jh==="x"?J.percentToPxWidth:J.percentToPxHeight);break;case"px":break;default:Pe*=1/J[Ut+"ToPx"]}}switch(Tl){case"+":ye=Pe+ye;break;case"-":ye=Pe-ye;break;case"*":ye=Pe*ye;break;case"/":ye=Pe/ye;break}W[me]={rootPropertyValue:an,startValue:Pe,currentValue:Pe,endValue:ye,unitType:Ut,easing:My},Ft&&(W[me].pattern=Ft),_.debug&&console.log("tweensContainer ("+me+"): "+JSON.stringify(W[me]),E)};for(var vl in O)if(O.hasOwnProperty(vl)){var Nh=w.Names.camelCase(vl),oo=Vy(O[vl]);if(u(w.Lists.colors)){var xh=oo[0],Vh=oo[1],Dh=oo[2];if(w.RegEx.isHex.test(xh)){for(var Mh=["Red","Green","Blue"],Dy=w.Values.hexToRgb(xh),Lh=Dh?w.Values.hexToRgb(Dh):s,Us=0;Us<Mh.length;Us++){var El=[Dy[Us]];Vh&&El.push(Vh),Lh!==s&&El.push(Lh[Us]),Oh(Nh+Mh[Us],El)}continue}}Oh(Nh,oo)}W.element=E}W.element&&(w.Values.addClass(E,"velocity-animating"),D.push(W),ce=C(E),ce&&(A.queue===""&&(ce.tweensContainer=W,ce.opts=A),ce.isAnimating=!0),Q===le-1?(_.State.calls.push([D,V,A,null,Y.resolver,null,0]),_.State.isTicking===!1&&(_.State.isTicking=!0,ke())):Q++)}if(A.queue===!1)if(A.delay){var _e=_.State.delayedElements.count++;_.State.delayedElements[_e]=E;var Te=function(Ve){return function(){_.State.delayedElements[Ve]=!1,re()}}(_e);C(E).delayBegin=new Date().getTime(),C(E).delay=parseFloat(A.delay),C(E).delayTimer={setTimeout:setTimeout(re,parseFloat(A.delay)),next:Te}}else re();else d.queue(E,A.queue,function(Ve,ce){if(ce===!0)return Y.promise&&Y.resolver(V),!0;_.velocityQueueEntryFlag=!0,re()});(A.queue===""||A.queue==="fx")&&d.queue(E)[0]!=="inprogress"&&d.dequeue(E)}d.each(V,function(E,N){f.isNode(N)&&U(N,E)}),p=d.extend({},_.defaults,L),p.loop=parseInt(p.loop,10);var G=p.loop*2-1;if(p.loop)for(var H=0;H<G;H++){var z={delay:p.delay,progress:p.progress};H===G-1&&(z.display=p.display,z.visibility=p.visibility,z.complete=p.complete),Ae(V,"reverse",z)}return v()};_=d.extend(Ae,_),_.animate=Ae;var $e=n.requestAnimationFrame||o;if(!_.State.isMobile&&r.hidden!==s){var ne=function(){r.hidden?($e=function(p){return setTimeout(function(){p(!0)},16)},ke()):$e=n.requestAnimationFrame||o};ne(),r.addEventListener("visibilitychange",ne)}function ke(p){if(p){var v=_.timestamp&&p!==!0?p:a.now(),y=_.State.calls.length;y>1e4&&(_.State.calls=l(_.State.calls),y=_.State.calls.length);for(var I=0;I<y;I++)if(_.State.calls[I]){var x=_.State.calls[I],B=x[0],V=x[2],O=x[3],L=!O,Y=null,le=x[5],Q=x[6];if(O||(O=_.State.calls[I][3]=v-16),le)if(le.resume===!0)O=x[3]=Math.round(v-Q-16),x[5]=null;else continue;Q=x[6]=v-O;for(var R=Math.min(Q/V.duration,1),M=0,F=B.length;M<F;M++){var $=B[M],se=$.element;if(C(se)){var g=!1;if(V.display!==s&&V.display!==null&&V.display!=="none"){if(V.display==="flex"){var m=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];d.each(m,function(A,W){w.setPropertyValue(se,"display",W)})}w.setPropertyValue(se,"display",V.display)}V.visibility!==s&&V.visibility!=="hidden"&&w.setPropertyValue(se,"visibility",V.visibility);for(var T in $)if($.hasOwnProperty(T)&&T!=="element"){var P=$[T],D,U=f.isString(P.easing)?_.Easings[P.easing]:P.easing;if(f.isString(P.pattern)){var G=R===1?function(A,W,J){var re=P.endValue[W];return J?Math.round(re):re}:function(A,W,J){var re=P.startValue[W],_e=P.endValue[W]-re,Te=re+_e*U(R,V,_e);return J?Math.round(Te):Te};D=P.pattern.replace(/{(\d+)(!)?}/g,G)}else if(R===1)D=P.endValue;else{var H=P.endValue-P.startValue;D=P.startValue+H*U(R,V,H)}if(!L&&D===P.currentValue)continue;if(P.currentValue=D,T==="tween")Y=D;else{var z;if(w.Hooks.registered[T]){z=w.Hooks.getRoot(T);var E=C(se).rootPropertyValueCache[z];E&&(P.rootPropertyValue=E)}var N=w.setPropertyValue(se,T,P.currentValue+(i<9&&parseFloat(D)===0?"":P.unitType),P.rootPropertyValue,P.scrollData);w.Hooks.registered[T]&&(w.Normalizations.registered[z]?C(se).rootPropertyValueCache[z]=w.Normalizations.registered[z]("extract",null,N[1]):C(se).rootPropertyValueCache[z]=N[1]),N[0]==="transform"&&(g=!0)}}V.mobileHA&&C(se).transformCache.translate3d===s&&(C(se).transformCache.translate3d="(0px, 0px, 0px)",g=!0),g&&w.flushTransformCache(se)}}V.display!==s&&V.display!=="none"&&(_.State.calls[I][2].display=!1),V.visibility!==s&&V.visibility!=="hidden"&&(_.State.calls[I][2].visibility=!1),V.progress&&V.progress.call(x[1],x[1],R,Math.max(0,O+V.duration-v),O,Y),R===1&&nt(I)}}_.State.isTicking&&$e(ke)}function nt(p,v){if(!_.State.calls[p])return!1;for(var y=_.State.calls[p][0],I=_.State.calls[p][1],x=_.State.calls[p][2],B=_.State.calls[p][4],V=!1,O=0,L=y.length;O<L;O++){var Y=y[O].element;!v&&!x.loop&&(x.display==="none"&&w.setPropertyValue(Y,"display",x.display),x.visibility==="hidden"&&w.setPropertyValue(Y,"visibility",x.visibility));var le=C(Y);if(x.loop!==!0&&(d.queue(Y)[1]===s||!/\.velocityQueueEntryFlag/i.test(d.queue(Y)[1]))&&le){le.isAnimating=!1,le.rootPropertyValueCache={};var Q=!1;d.each(w.Lists.transforms3D,function(F,$){var se=/^scale/.test($)?1:0,g=le.transformCache[$];le.transformCache[$]!==s&&new RegExp("^\\("+se+"[^.]").test(g)&&(Q=!0,delete le.transformCache[$])}),x.mobileHA&&(Q=!0,delete le.transformCache.translate3d),Q&&w.flushTransformCache(Y),w.Values.removeClass(Y,"velocity-animating")}if(!v&&x.complete&&!x.loop&&O===L-1)try{x.complete.call(I,I)}catch(F){setTimeout(function(){throw F},1)}B&&x.loop!==!0&&B(I),le&&x.loop===!0&&!v&&(d.each(le.tweensContainer,function(F,$){if(/^rotate/.test(F)&&(parseFloat($.startValue)-parseFloat($.endValue))%360===0){var se=$.startValue;$.startValue=$.endValue,$.endValue=se}/^backgroundPosition/.test(F)&&parseFloat($.endValue)===100&&$.unitType==="%"&&($.endValue=0,$.startValue=100)}),_(Y,"reverse",{loop:!0,delay:x.delay})),x.queue!==!1&&d.dequeue(Y,x.queue)}_.State.calls[p]=!1;for(var R=0,M=_.State.calls.length;R<M;R++)if(_.State.calls[R]!==!1){V=!0;break}V===!1&&(_.State.isTicking=!1,delete _.State.calls,_.State.calls=[])}return e.Velocity=_,e!==n&&(e.fn.velocity=Ae,e.fn.velocity.defaults=_.defaults),d.each(["Down","Up"],function(p,v){_.Redirects["slide"+v]=function(y,I,x,B,V,O){var L=d.extend({},I),Y=L.begin,le=L.complete,Q={},R={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};L.display===s&&(L.display=v==="Down"?_.CSS.Values.getDisplayType(y)==="inline"?"inline-block":"block":"none"),L.begin=function(){x===0&&Y&&Y.call(V,V);for(var M in R)if(R.hasOwnProperty(M)){Q[M]=y.style[M];var F=w.getPropertyValue(y,M);R[M]=v==="Down"?[F,0]:[0,F]}Q.overflow=y.style.overflow,y.style.overflow="hidden"},L.complete=function(){for(var M in Q)Q.hasOwnProperty(M)&&(y.style[M]=Q[M]);x===B-1&&(le&&le.call(V,V),O&&O.resolver(V))},_(y,R,L)}}),d.each(["In","Out"],function(p,v){_.Redirects["fade"+v]=function(y,I,x,B,V,O){var L=d.extend({},I),Y=L.complete,le={opacity:v==="In"?1:0};x!==0&&(L.begin=null),x!==B-1?L.complete=null:L.complete=function(){Y&&Y.call(V,V),O&&O.resolver(V)},L.display===s&&(L.display=v==="In"?"auto":"none"),_(this,le,L)}}),_}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)})})(ty);var _R=ty.exports;const yR=mR(_R),dl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},vR={name:"CricketParty",props:["players","partyId","scores","date","environment"],data(){return{areas:[20,19,18,17,16,15],showHisto:!0,type:"simple",mouseOver:[!1,!1,!1,!1,!1,!1],surroundColumn:!1,passMouseOver:!1,passMouseClick:!1,cancelMouseOver:!1,cancelMouseClick:!1,showImg:!0,playerPointsAnimate:[],playerPoints:[],playersAreas:[],showstats:!0}},mounted(){this.players.forEach((t,e)=>{this.playerPoints[e]=this.getPlayerPoints(t)}),this.players.forEach(t=>{this.playersAreas[t]=[],this.areas.forEach(e=>{this.playersAreas[t][e]=this.getZoneScore(this.scores,t,e)})}),this.$refs.shorcutDiv.focus()},methods:{handleKeyDown(t){let e="simple";console.log(t.key),console.log("0"),console.log(t.key==="0"),console.log(t.key===0),console.log(t.key==="Shift"),e=t.shiftKey&&!t.ctrlKey||!t.shiftKey&&t.ctrlKey?"double":e,e=t.shiftKey&&t.ctrlKey?"triple":e,t.key==="0"||t.key==="Insert"?(t.preventDefault(),this.score(20,e)):t.key==="9"||t.key==="PageUp"?(t.preventDefault(),this.score(19,e)):t.key==="8"||t.key==="ArrowUp"?(t.preventDefault(),this.score(18,e)):t.key==="7"||t.key==="Home"?(t.preventDefault(),this.score(17,e)):t.key==="6"||t.key==="ArrowRight"?(t.preventDefault(),this.score(16,e)):(t.key==="5"||t.key==="Clear")&&(t.preventDefault(),this.score(15,e))},getNbDouble(t){return this.scores.filter(e=>e.player===t&&e.type==="double").length},getNbTriple(t){return this.scores.filter(e=>e.player===t&&e.type==="triple").length},getNb3Fails(t){const e=this.scores.filter(s=>s.player===t),n=Math.floor(e.length/3);let r=0;for(let s=0;s<n;s++)e[s*3].area===0&&e[s*3+1].area===0&&e[s*3+2].area===0&&r++;return r},getNbHits(t){let e=0,n=[];for(let r=0;r<this.scores.length;r++){if(this.scores[r].player===t&&this.scores[r].area!==0){let s=[];n.forEach(l=>s.push(l)),s.push(this.scores[r]);const i=this.getZoneScore(n,t,this.scores[r].area),o=this.getZoneScore(s,t,this.scores[r].area);e=e+(o-i);let a=0;for(let l in this.players)if(this.players[l]!==t){let c=this.getPlayerPointsAtRound(this.players[l],n),u=this.getPlayerPointsAtRound(this.players[l],s);c!==u&&(a=(u-c)/this.scores[r].area),e=e+a}}n.push(this.scores[r])}return e},getCurrentPlayerIndex(){return Math.floor(this.scores.length/3)%this.players.length},getRemainsDarts(){return 3-this.scores.length%3},pass(){let t=this.getRemainsDarts();for(let e=0;e<t;e++)this.score(0,"pass")},async score(t,e){if(this.getWinner().length>0)return;this.showImg=!1;const n=this.players[this.getCurrentPlayerIndex()];this.scores.push({player:n,area:t,type:e}),this.playersAreas[n][t]=this.getZoneScore(this.scores,n,t),this.persist(),this.type="simple",this.showImg=!0;let r=[];this.players.forEach((s,i)=>{r[i]=this.getPlayerPoints(s)}),this.players.forEach((s,i)=>{this.playerPointsAnimate[i]=this.playerPoints[i]!==r[i],this.playerPoints[i]=r[i]}),await new Promise(s=>setTimeout(s,500)),this.players.forEach((s,i)=>{this.playerPointsAnimate[i]=!1})},async persist(){await uR(gh(Uo,"Party"+Bo(this.environment),this.partyId),{players:this.players,scores:this.scores,date:this.date,winner:this.getWinner().length>0?this.getWinner()[0]:""})},cancel(){const t=this.scores[this.scores.length-1].player,e=this.scores[this.scores.length-1].area;this.scores.pop(),this.scores.length>0&&(this.players.forEach((n,r)=>{this.playerPoints[r]=this.getPlayerPoints(n)}),this.playersAreas[t][e]=this.getZoneScore(this.scores,t,e)),this.persist()},getZoneScore(t,e,n){let r=0;return t.filter(s=>s.player===e&&s.area===n).forEach(s=>r=r+this.getNbFromType(s.type)),r>3?3:r},getNbFromType(t){return t==="simple"?1:t==="double"?2:t==="triple"?3:0},getPlayerPoints(t){return this.getPlayerPointsAtRound(t,this.scores)},getPlayerPointsAtRound(t,e){let n=0,r=[];for(let s=0;s<e.length;s++)n=n+this.getPlayerScoreAtRound(t,r,e[s]),r.push(e[s]);return n},getPlayerScoreAtRound(t,e,n){const r=this.getZoneScore(e,t,n.area),s=this.getZoneScore(e,n.player,n.area),i=this.getNbFromType(n.type);return t!==n.player&&r<3&&s+i>3?(s+i-3)*n.area:0},getWinner(){return this.players.filter(t=>this.isPlayerWinner(t))},isPlayerWinner(t){const e=this.areas.filter(s=>this.playersAreas[t]&&this.playersAreas[t][s]&&this.playersAreas[t][s]<3).length===0,n=this.playerPoints[this.players.indexOf(t)],r=this.players.filter(s=>s!==t&&this.playerPoints[this.players.indexOf(s)]<n).length===0;return e&&r},doPointTransition(t,e){yR(t,{width:[80,100]},{duration:300,easing:"easeInOutBack",complete:e})}}},sn=t=>(jp("data-v-b46a4370"),t=t(),qp(),t),ER={class:"header"},TR={class:"partyPanel"},wR={class:"scorePanel"},IR={class:"bgColor2"},AR=["src"],bR=["onMouseover","onMouseleave"],PR=["onClick"],RR=["onClick"],SR=["src"],CR=["src"],kR=["src"],OR={class:"bgColor1"},NR=sn(()=>ee("td",null,"Points",-1)),xR={style:{margin:"auto"}},VR={key:0,class:"borderPanel inputPanel"},DR={class:"radio"},MR=sn(()=>ee("label",{for:"simple"},"Simple",-1)),LR={class:"radio"},FR=sn(()=>ee("label",{for:"double"},"Double",-1)),UR={class:"radio"},BR=sn(()=>ee("label",{for:"triple"},"Triple",-1)),jR={style:{display:"flex"}},qR=["src"],HR={key:1,class:"borderPanel winnerPannel"},zR={key:2,class:"borderPanel histoPanel"},$R=sn(()=>ee("div",{style:{"text-decoration":"underline","font-weight":"bold"}},"Derniers coups :",-1)),WR=sn(()=>ee("div",{style:{"margin-left":"4px","margin-bottom":"-8px"}},"....",-1)),KR=["src"],GR={key:0,class:"borderPanel statsPanel"},QR=sn(()=>ee("span",{class:"statsTitle"},"Stats",-1)),YR={class:"statsTable"},JR=sn(()=>ee("th",null,null,-1)),XR={class:"bgColor2"},ZR=sn(()=>ee("td",{class:"statsType"},"Double",-1)),eS={class:"statsValue"},tS=sn(()=>ee("td",{class:"statsType"},"Triple",-1)),nS={class:"statsValue"},rS={class:"bgColor2"},sS=sn(()=>ee("td",{class:"statsType"},"3 Fails",-1)),iS={class:"statsValue"};function oS(t,e,n,r,s,i){return we(),be("div",{tabindex:"0",class:"shorcutDiv",ref:"shorcutDiv",onKeydown:[e[13]||(e[13]=ea((...o)=>i.cancel&&i.cancel(...o),["delete"])),e[14]||(e[14]=ea((...o)=>i.pass&&i.pass(...o),["space"])),e[15]||(e[15]=(...o)=>i.handleKeyDown&&i.handleKeyDown(...o))]},[ee("div",ER,[qt("",!0)]),ee("div",TR,[ee("div",wR,[ee("table",null,[ee("thead",IR,[ee("th",null,[ee("img",{class:"remainDarts",src:"darts_"+i.getRemainsDarts()+"_left.png"},null,8,AR)]),(we(!0),be(We,null,Yt(n.players,o=>(we(),be("th",{class:mt({bgColor3:n.players[i.getCurrentPlayerIndex()]===o})},kt(o),3))),256))]),(we(!0),be(We,null,Yt(s.areas,(o,a)=>(we(),be("tr",{class:mt({cursorPointer:i.getWinner().length===0,bgColor1:a%2===0,bgColor2:a%2===1,bgColor3:s.mouseOver[a]}),onMouseover:l=>s.mouseOver[a]=!0,onMouseleave:l=>s.mouseOver[a]=!1},[ee("td",{onClick:l=>i.score(o,s.type),class:"areaColumn"},kt(o),9,PR),(we(!0),be(We,null,Yt(n.players,l=>(we(),be("td",{class:mt({bgColor3:s.surroundColumn&&n.players.length>2&&l===n.players[i.getCurrentPlayerIndex()]}),onClick:c=>i.score(o,s.type)},[qe(oi,{onEnter:i.doPointTransition,css:!1},{default:ko(()=>[s.showImg&&s.playersAreas[l]&&s.playersAreas[l][o]&&s.playersAreas[l][o]===3?(we(),be("img",{key:0,class:"scoreImg",src:"score_3.png"},null,8,SR)):qt("",!0)]),_:2},1032,["onEnter"]),qe(oi,{onEnter:i.doPointTransition,css:!1},{default:ko(()=>[s.showImg&&s.playersAreas[l]&&s.playersAreas[l][o]&&s.playersAreas[l][o]===2?(we(),be("img",{key:0,class:"scoreImg",src:"score_2.png"},null,8,CR)):qt("",!0)]),_:2},1032,["onEnter"]),qe(oi,{onEnter:i.doPointTransition,css:!1},{default:ko(()=>[s.showImg&&s.playersAreas[l]&&s.playersAreas[l][o]&&s.playersAreas[l][o]===1?(we(),be("img",{key:0,class:"scoreImg",src:"score_1.png"},null,8,kR)):qt("",!0)]),_:2},1032,["onEnter"])],10,RR))),256))],42,bR))),256)),ee("tr",OR,[NR,(we(!0),be(We,null,Yt(n.players,(o,a)=>(we(),be("td",{class:mt(["pointsRow",{bgColor3:s.surroundColumn&&n.players.length>2&&o===n.players[i.getCurrentPlayerIndex()]}])},[ee("span",{class:mt({animateZoom:s.playerPointsAnimate[a]})},kt(s.playerPoints[n.players.indexOf(o)]),3)],2))),256))])])]),ee("div",xR,[i.getWinner().length===0?(we(),be("div",VR,[ee("div",DR,[ni(ee("input",{type:"radio",name:"type",value:"simple",id:"simple","onUpdate:modelValue":e[0]||(e[0]=o=>s.type=o),checked:""},null,512),[[Dl,s.type]]),Vo(),MR]),ee("div",LR,[ni(ee("input",{type:"radio",name:"type",value:"double",id:"double","onUpdate:modelValue":e[1]||(e[1]=o=>s.type=o)},null,512),[[Dl,s.type]]),Vo(),FR]),ee("div",UR,[ni(ee("input",{type:"radio",name:"type",value:"triple",id:"triple","onUpdate:modelValue":e[2]||(e[2]=o=>s.type=o)},null,512),[[Dl,s.type]]),Vo(),BR]),ee("div",jR,[ee("img",{src:"pass_logo.png",onClick:e[3]||(e[3]=(...o)=>i.pass&&i.pass(...o)),class:mt(["button passButton",{bgColor2:s.passMouseOver,bgColor3:s.passMouseClick}]),onMouseover:e[4]||(e[4]=o=>s.passMouseOver=!0),onMouseleave:e[5]||(e[5]=o=>s.passMouseOver=!1),onMousedown:e[6]||(e[6]=o=>s.passMouseClick=!0),onMouseup:e[7]||(e[7]=o=>s.passMouseClick=!1)},null,42,qR)])])):qt("",!0),i.getWinner().length>0?(we(),be("div",HR," Winner : "+kt(i.getWinner().length>0?i.getWinner()[0]:""),1)):qt("",!0),s.showHisto?(we(),be("div",zR,[$R,WR,ee("table",null,[(we(!0),be(We,null,Yt(n.scores.slice(-6),o=>(we(),be("tr",null,[ee("td",null,kt(o.player),1),ee("td",null,kt(o.area),1),ee("td",null,kt(o.type),1)]))),256))]),ee("img",{src:"cancel.png",onClick:e[8]||(e[8]=(...o)=>i.cancel&&i.cancel(...o)),class:mt(["button cancelButton",{bgColor2:s.cancelMouseOver,bgColor3:s.cancelMouseClick}]),onMouseover:e[9]||(e[9]=o=>s.cancelMouseOver=!0),onMouseleave:e[10]||(e[10]=o=>s.cancelMouseOver=!1),onMousedown:e[11]||(e[11]=o=>s.cancelMouseClick=!0),onMouseup:e[12]||(e[12]=o=>s.cancelMouseClick=!1)},null,42,KR)])):qt("",!0)]),s.showstats?(we(),be("div",GR,[QR,ee("table",YR,[ee("thead",null,[JR,(we(!0),be(We,null,Yt(n.players,o=>(we(),be("th",null,kt(o),1))),256))]),ee("tbody",null,[ee("tr",XR,[ZR,(we(!0),be(We,null,Yt(n.players,o=>(we(),be("td",eS,kt(i.getNbDouble(o)),1))),256))]),ee("tr",null,[tS,(we(!0),be(We,null,Yt(n.players,o=>(we(),be("td",nS,kt(i.getNbTriple(o)),1))),256))]),ee("tr",rS,[sS,(we(!0),be(We,null,Yt(n.players,o=>(we(),be("td",iS,kt(i.getNb3Fails(o)),1))),256))])])])])):qt("",!0)])],544)}const aS=dl(vR,[["render",oS],["__scopeId","data-v-b46a4370"]]),lS={name:"Button",props:["src","reverseBackground"],data(){return{mouseOver:!1,mouseClick:!1}}},cS=["src"];function uS(t,e,n,r,s,i){return we(),be("img",{src:n.src,class:mt(["button",{bgColor1:s.mouseOver&&n.reverseBackground,bgColor2:s.mouseOver&&!n.reverseBackground,bgColor3:s.mouseClick}]),onMouseover:e[0]||(e[0]=o=>s.mouseOver=!0),onMouseleave:e[1]||(e[1]=o=>s.mouseOver=!1),onMousedown:e[2]||(e[2]=o=>s.mouseClick=!0),onMouseup:e[3]||(e[3]=o=>s.mouseClick=!1)},null,42,cS)}const hS=dl(lS,[["render",uS]]),fS={name:"Main",components:{CricketParty:aS,Toggle:Tc,Button:hS},data(){return{players:["Rémi","Manu"],scores:[],player:"",playing:!1,partyId:"",parties:[],date:"",environment:"prod",deleteMouseOver:!1,deleteMouseClick:!1,playMouseOver:!1,playMouseClick:!1}},computed:{unfinishedParties(){return this.parties.filter(t=>!t.winner||t.winner==="")}},mounted(){this.reload()},methods:{reload(){this.$refs.newPlayer.focus(),this.loadParties()},async loadParties(){this.parties=[],(await cR(Kd(Uo,"Party"+Bo(this.environment)))).forEach(e=>{let n=e.data();n.id=e.id,this.parties.push(n)})},remove(t){let e=this.players.indexOf(t);e!==-1&&this.players.splice(e,1),console.log(`remove ${t}`)},moveDown(t){const e=this.players.indexOf(t);this.players.indexOf(t)<this.players.length&&(this.players.splice(e,1),this.players.splice(e+1,0,t))},moveUp(t){const e=this.players.indexOf(t);this.players.indexOf(t)>0&&(this.players.splice(e,1),this.players.splice(e-1,0,t))},addPlayerOrGo(){this.player?this.addPlayer():this.play()},addPlayer(){this.players.push(this.player),this.player="",console.log(this.players)},async deleteParty(t){await hR(gh(Uo,"Party"+Bo(this.environment),t.id)),this.loadParties()},resume(t){this.partyId=t.id,this.players=t.players,this.scores=t.scores,this.date=t.date,this.playing=!0},play(){this.addParty(),this.playing=!0},async addParty(){let t=new Date;const e=this.prefix0ToNumber(t.getDate()),n=this.prefix0ToNumber(t.getMonth()+1),r=this.prefix0ToNumber(t.getHours()),s=this.prefix0ToNumber(t.getMinutes());this.date=`${e}/${n} ${r}:${s}`;const i=await fR(Kd(Uo,"Party"+Bo(this.environment)),{players:this.players,date:this.date,scores:[]});this.partyId=i.id},prefix0ToNumber(t){return t<10?"0"+t:t}}},pl=t=>(jp("data-v-5e6bfb63"),t=t(),qp(),t),dS={key:0,class:"borderPanel menuPanel"},pS={class:"environementSectionPanel"},gS={key:0,class:"menuSectionPanel unfinishedPartiesPanel"},mS=pl(()=>ee("div",{class:"sectionTitle"},"Parties en cours : ",-1)),_S={style:{display:"flex"}},yS={class:"unfinishedPlayers"},vS={class:"unfinishedButtons"},ES={class:"menuSectionPanel"},TS=pl(()=>ee("div",{class:"sectionTitle"},"Nouvelle partie :",-1)),wS={class:"playerTables"},IS={class:"newPlayer"},AS=pl(()=>ee("td",null,null,-1)),bS=pl(()=>ee("td",null,null,-1)),PS={style:{display:"flex","flex-direction":"row-reverse"}};function RS(t,e,n,r,s,i){const o=Sl("Toggle"),a=Sl("Button"),l=Sl("CricketParty");return we(),be("div",null,[s.playing?qt("",!0):(we(),be("div",dS,[ee("div",pS,[qe(o,{class:"environmentToogle",id:"toggleEnvironment",modelValue:s.environment,"onUpdate:modelValue":e[0]||(e[0]=c=>s.environment=c),offLabel:"Dev",onLabel:"Prod",trueValue:"prod",falseValue:"dev",onChange:i.reload},null,8,["modelValue","onChange"])]),i.unfinishedParties.length>0?(we(),be("div",gS,[mS,ee("ul",null,[(we(!0),be(We,null,Yt(i.unfinishedParties,c=>(we(),be("li",null,[ee("div",_S,[ee("span",yS,kt(c.players.join(", "))+" du "+kt(c.date),1),ee("div",vS,[qe(a,{class:"resumePlayButton",src:"play.png",onClick:u=>i.resume(c)},null,8,["src","onClick"]),qe(a,{class:"deleteButton",src:"delete.png",onClick:u=>i.deleteParty(c)},null,8,["src","onClick"])])])]))),256))])])):qt("",!0),ee("div",ES,[TS,ee("table",wS,[ee("tbody",null,[(we(!0),be(We,null,Yt(s.players,(c,u)=>(we(),be("tr",{class:mt({bgColor1:u%2===1,bgColor2:u%2===0})},[ee("td",null,kt(c),1),ee("td",null,[qe(a,{class:"tableButton arrowButton",src:"down.png",onClick:h=>i.moveDown(c),reverseBackground:u%2===0},null,8,["src","onClick","reverseBackground"])]),ee("td",null,[qe(a,{class:"tableButton arrowButton",src:"up.png",onClick:h=>i.moveUp(c),reverseBackground:u%2===0},null,8,["src","onClick","reverseBackground"])]),ee("td",null,[qe(a,{class:"tableButton",src:"delete.png",onClick:h=>i.remove(c),reverseBackground:u%2===0},null,8,["src","onClick","reverseBackground"])])],2))),256)),ee("tr",{class:mt({bgColor1:s.players.length%2===1,bgColor2:s.players.length%2===0})},[ee("td",IS,[ni(ee("input",{ref:"newPlayer",type:"text","onUpdate:modelValue":e[1]||(e[1]=c=>s.player=c),onKeyup:e[2]||(e[2]=ea(c=>i.addPlayerOrGo(),["enter"]))},null,544),[[lE,s.player]])]),ee("td",null,[qe(a,{class:"tableButton newPlayerButton",src:"add.png",onClick:e[3]||(e[3]=c=>i.addPlayer()),reverseBackground:s.players.length%2===0},null,8,["src","reverseBackground"])]),AS,bS],2)])]),ee("div",PS,[qe(a,{class:"playButton",src:"play.png",onClick:i.play},null,8,["src","onClick"])])])])),s.playing?(we(),Da(l,{key:1,players:s.players,partyId:s.partyId,scores:s.scores,date:s.date,environment:s.environment},null,8,["players","partyId","scores","date","environment"])):qt("",!0)])}const SS=dl(fS,[["render",RS],["__scopeId","data-v-5e6bfb63"]]);function Eh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ny(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CS=ny,ry=new Bi("auth","Firebase",ny());/**
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
 */const va=new wu("@firebase/auth");function kS(t,...e){va.logLevel<=Se.WARN&&va.warn(`Auth (${Os}): ${t}`,...e)}function jo(t,...e){va.logLevel<=Se.ERROR&&va.error(`Auth (${Os}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw Th(t,...e)}function _n(t,...e){return Th(t,...e)}function sy(t,e,n){const r=Object.assign(Object.assign({},CS()),{[e]:n});return new Bi("auth","Firebase",r).create(e,{appName:t.name})}function OS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wn(t,"argument-error"),sy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Th(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ry.create(t,...e)}function pe(t,e,...n){if(!t)throw Th(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jo(e),new Error(e)}function Mn(t,e){t||Cn(e)}/**
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
 */function Yc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function NS(){return Gd()==="http:"||Gd()==="https:"}function Gd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function xS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NS()||UT()||"connection"in navigator)?navigator.onLine:!0}function VS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ro{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=FT()||BT()}get(){return xS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wh(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class iy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const DS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MS=new ro(3e4,6e4);function Ih(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fs(t,e,n,r,s={}){return oy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ji(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),iy.fetch()(ay(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function oy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},DS),e);try{const s=new FS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ro(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ro(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ro(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ro(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw sy(t,u,c);wn(t,u)}}catch(s){if(s instanceof Fn)throw s;wn(t,"network-request-failed",{message:String(s)})}}async function LS(t,e,n,r,s={}){const i=await Fs(t,e,n,r,s);return"mfaPendingCredential"in i&&wn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ay(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?wh(t.config,s):`${t.config.apiScheme}://${s}`}class FS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),MS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=_n(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function US(t,e){return Fs(t,"POST","/v1/accounts:delete",e)}async function BS(t,e){return Fs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jS(t,e=!1){const n=nn(t),r=await n.getIdToken(e),s=Ah(r);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pi(nc(s.auth_time)),issuedAtTime:pi(nc(s.iat)),expirationTime:pi(nc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function nc(t){return Number(t)*1e3}function Ah(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Sg(n);return s?JSON.parse(s):(jo("Failed to decode base64 JWT payload"),null)}catch(s){return jo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qS(t){const e=Ah(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&HS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ly{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pi(this.lastLoginAt),this.creationTime=pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ea(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Li(t,BS(n,{idToken:r}));pe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?KS(i.providerUserInfo):[],a=WS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ly(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function $S(t){const e=nn(t);await Ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function KS(t){return t.map(e=>{var{providerId:n}=e,r=Eh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function GS(t,e){const n=await oy(t,{},async()=>{const r=ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ay(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QS(t,e){return Fs(t,"POST","/v2/accounts:revokeToken",Ih(t,e))}/**
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
 */class Fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return pe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await GS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Fi;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fi,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
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
 */function Kn(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ly(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Li(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jS(this,e)}reload(){return $S(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Li(this,US(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Z,emailVerified:K,isAnonymous:ge,providerData:Ie,stsTokenManager:Le}=n;pe(Z&&Le,e,"internal-error");const ue=Fi.fromJSON(this.name,Le);pe(typeof Z=="string",e,"internal-error"),Kn(h,e.name),Kn(f,e.name),pe(typeof K=="boolean",e,"internal-error"),pe(typeof ge=="boolean",e,"internal-error"),Kn(d,e.name),Kn(b,e.name),Kn(S,e.name),Kn(k,e.name),Kn(_,e.name),Kn(C,e.name);const w=new Mr({uid:Z,auth:e,email:f,emailVerified:K,displayName:h,isAnonymous:ge,photoURL:b,phoneNumber:d,tenantId:S,stsTokenManager:ue,createdAt:_,lastLoginAt:C});return Ie&&Array.isArray(Ie)&&(w.providerData=Ie.map(Ae=>Object.assign({},Ae))),k&&(w._redirectEventId=k),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fi;s.updateFromServerResponse(n);const i=new Mr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ea(i),i}}/**
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
 */const Qd=new Map;function kn(t){Mn(t instanceof Function,"Expected a class definition");let e=Qd.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qd.set(t,e),e)}/**
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
 */class cy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cy.type="NONE";const Yd=cy;/**
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
 */function qo(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=qo(this.userKey,s.apiKey,i),this.fullPersistenceKey=qo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(kn(Yd),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||kn(Yd);const o=qo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Mr._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ds(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ds(i,e,r))}}/**
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
 */function Jd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(py(e))return"Blackberry";if(gy(e))return"Webos";if(bh(e))return"Safari";if((e.includes("chrome/")||hy(e))&&!e.includes("edge/"))return"Chrome";if(dy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uy(t=Tt()){return/firefox\//i.test(t)}function bh(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hy(t=Tt()){return/crios\//i.test(t)}function fy(t=Tt()){return/iemobile/i.test(t)}function dy(t=Tt()){return/android/i.test(t)}function py(t=Tt()){return/blackberry/i.test(t)}function gy(t=Tt()){return/webos/i.test(t)}function gl(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YS(t=Tt()){var e;return gl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JS(){return jT()&&document.documentMode===10}function my(t=Tt()){return gl(t)||dy(t)||gy(t)||py(t)||/windows phone/i.test(t)||fy(t)}function XS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function _y(t,e=[]){let n;switch(t){case"Browser":n=Jd(Tt());break;case"Worker":n=`${Jd(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
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
 */class ZS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function eC(t,e={}){return Fs(t,"GET","/v2/passwordPolicy",Ih(t,e))}/**
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
 */const tC=6;class nC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class rC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xd(this),this.idTokenSubscription=new Xd(this),this.beforeStateQueue=new ZS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ry,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ea(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nn(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eC(this),n=new nC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await QS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_y(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ml(t){return nn(t)}class Xd{constructor(e){this.auth=e,this.observer=null,this.addObserver=GT(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function sC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=_n("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",sC().appendChild(r)})}function oC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function aC(t,e){const n=Au(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ra(i,e??{}))return s;wn(s,"already-initialized")}return n.initialize({options:e})}function lC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cC(t,e,n){const r=ml(t);pe(r._canInitEmulator,r,"emulator-config-failed"),pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=yy(e),{host:o,port:a}=uC(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||hC()}function yy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uC(t){const e=yy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Zd(o)}}}function Zd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}/**
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
 */async function ps(t,e){return LS(t,"POST","/v1/accounts:signInWithIdp",Ih(t,e))}/**
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
 */const fC="http://localhost";class zr extends vy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Eh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new zr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:fC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ji(n)}return e}}/**
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
 */class Ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class so extends Ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jn extends so{constructor(){super("facebook.com")}static credential(e){return zr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
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
 */class Rn extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
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
 */class Xn extends so{constructor(){super("github.com")}static credential(e){return zr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Zn extends so{constructor(){super("twitter.com")}static credential(e,n){return zr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */class Ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Mr._fromIdTokenResponse(e,r,s),o=ep(r);return new Ss({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ep(r);return new Ss({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ep(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ta extends Fn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ta.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ta(e,n,r,s)}}function Ey(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ta._fromErrorAndOperation(t,i,e,r):i})}async function dC(t,e,n=!1){const r=await Li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ss._forOperation(t,"link",r)}/**
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
 */async function pC(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Li(t,Ey(r,s,e,t),n);pe(i.idToken,r,"internal-error");const o=Ah(i.idToken);pe(o,r,"internal-error");const{sub:a}=o;return pe(t.uid===a,r,"user-mismatch"),Ss._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),i}}/**
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
 */async function gC(t,e,n=!1){const r="signIn",s=await Ey(t,r,e),i=await Ss._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function mC(t,e,n,r){return nn(t).onIdTokenChanged(e,n,r)}function _C(t,e,n){return nn(t).beforeAuthStateChanged(e,n)}const wa="__sak";/**
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
 */class Ty{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wa,"1"),this.storage.removeItem(wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function yC(){const t=Tt();return bh(t)||gl(t)}const vC=1e3,EC=10;class wy extends Ty{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yC()&&XS(),this.fallbackToPolling=my(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);JS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,EC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wy.type="LOCAL";const TC=wy;/**
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
 */class Iy extends Ty{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Iy.type="SESSION";const Ay=Iy;/**
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
 */function wC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new _l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await wC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_l.receivers=[];/**
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
 */function Rh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class IC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Rh("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yn(){return window}function AC(t){yn().location.href=t}/**
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
 */function by(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function bC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RC(){return by()?self:null}/**
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
 */const Py="firebaseLocalStorageDb",SC=1,Ia="firebaseLocalStorage",Ry="fbase_key";class io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yl(t,e){return t.transaction([Ia],e?"readwrite":"readonly").objectStore(Ia)}function CC(){const t=indexedDB.deleteDatabase(Py);return new io(t).toPromise()}function Jc(){const t=indexedDB.open(Py,SC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ia,{keyPath:Ry})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ia)?e(r):(r.close(),await CC(),e(await Jc()))})})}async function tp(t,e,n){const r=yl(t,!0).put({[Ry]:e,value:n});return new io(r).toPromise()}async function kC(t,e){const n=yl(t,!1).get(e),r=await new io(n).toPromise();return r===void 0?null:r.value}function np(t,e){const n=yl(t,!0).delete(e);return new io(n).toPromise()}const OC=800,NC=3;class Sy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return by()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_l._getInstance(RC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bC(),!this.activeServiceWorker)return;this.sender=new IC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jc();return await tp(e,wa,"1"),await np(e,wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>np(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=yl(s,!1).getAll();return new io(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sy.type="LOCAL";const xC=Sy;new ro(3e4,6e4);/**
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
 */function Cy(t,e){return e?kn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sh extends vy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VC(t){return gC(t.auth,new Sh(t),t.bypassAuthState)}function DC(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),pC(n,new Sh(t),t.bypassAuthState)}async function MC(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),dC(n,new Sh(t),t.bypassAuthState)}/**
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
 */class ky{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VC;case"linkViaPopup":case"linkViaRedirect":return MC;case"reauthViaPopup":case"reauthViaRedirect":return DC;default:wn(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LC=new ro(2e3,1e4);async function FC(t,e,n){const r=ml(t);OS(t,e,Ph);const s=Cy(r,n);return new Or(r,"signInViaPopup",e,s).executeNotNull()}class Or extends ky{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=Rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LC.get())};e()}}Or.currentPopupAction=null;/**
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
 */const UC="pendingRedirect",Ho=new Map;class BC extends ky{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ho.get(this.auth._key());if(!e){try{const r=await jC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ho.set(this.auth._key(),e)}return this.bypassAuthState||Ho.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jC(t,e){const n=zC(e),r=HC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qC(t,e){Ho.set(t._key(),e)}function HC(t){return kn(t._redirectPersistence)}function zC(t){return qo(UC,t.config.apiKey,t.name)}async function $C(t,e,n=!1){const r=ml(t),s=Cy(r,e),o=await new BC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const WC=10*60*1e3;class KC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Oy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WC&&this.cachedEventUids.clear(),this.cachedEventUids.has(rp(e))}saveEventToCache(e){this.cachedEventUids.add(rp(e)),this.lastProcessedEventTime=Date.now()}}function rp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Oy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oy(t);default:return!1}}/**
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
 */async function QC(t,e={}){return Fs(t,"GET","/v1/projects",e)}/**
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
 */const YC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JC=/^https?/;async function XC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QC(t);for(const n of e)try{if(ZC(n))return}catch{}wn(t,"unauthorized-domain")}function ZC(t){const e=Yc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!JC.test(n))return!1;if(YC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const e1=new ro(3e4,6e4);function sp(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function t1(t){return new Promise((e,n)=>{var r,s,i;function o(){sp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sp(),n(_n(t,"network-request-failed"))},timeout:e1.get()})}if(!((s=(r=yn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=yn().gapi)===null||i===void 0)&&i.load)o();else{const a=oC("iframefcb");return yn()[a]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},iC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw zo=null,e})}let zo=null;function n1(t){return zo=zo||t1(t),zo}/**
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
 */const r1=new ro(5e3,15e3),s1="__/auth/iframe",i1="emulator/auth/iframe",o1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},a1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function l1(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wh(e,i1):`https://${t.config.authDomain}/${s1}`,r={apiKey:e.apiKey,appName:t.name,v:Os},s=a1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ji(r).slice(1)}`}async function c1(t){const e=await n1(t),n=yn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:l1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:o1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),a=yn().setTimeout(()=>{i(o)},r1.get());function l(){yn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const u1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},h1=500,f1=600,d1="_blank",p1="http://localhost";class ip{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function g1(t,e,n,r=h1,s=f1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},u1),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Tt().toLowerCase();n&&(a=hy(c)?d1:n),uy(c)&&(e=e||p1,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,b])=>`${f}${d}=${b},`,"");if(YS(c)&&a!=="_self")return m1(e||"",a),new ip(null);const h=window.open(e||"",a,u);pe(h,t,"popup-blocked");try{h.focus()}catch{}return new ip(h)}function m1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _1="__/auth/handler",y1="emulator/auth/handler",v1=encodeURIComponent("fac");async function op(t,e,n,r,s,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:s};if(e instanceof Ph){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",KT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof so){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${v1}=${encodeURIComponent(l)}`:"";return`${E1(t)}?${ji(a).slice(1)}${c}`}function E1({config:t}){return t.emulator?wh(t,y1):`https://${t.authDomain}/${_1}`}/**
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
 */const rc="webStorageSupport";class T1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ay,this._completeRedirectFn=$C,this._overrideRedirectResult=qC}async _openPopup(e,n,r,s){var i;Mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await op(e,n,r,Yc(),s);return g1(e,o,Rh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await op(e,n,r,Yc(),s);return AC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await c1(e),r=new KC(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rc,{type:rc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[rc];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return my()||bh()||gl()}}const w1=T1;var ap="@firebase/auth",lp="1.5.1";/**
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
 */class I1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function A1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function b1(t){vs(new Fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_y(t)},c=new rC(r,s,i,l);return lC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vs(new Fr("auth-internal",e=>{const n=ml(e.getProvider("auth").getImmediate());return(r=>new I1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(ap,lp,A1(t)),ir(ap,lp,"esm2017")}/**
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
 */const P1=5*60,R1=Og("authIdTokenMaxAge")||P1;let cp=null;const S1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>R1)return;const s=n==null?void 0:n.token;cp!==s&&(cp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ny(t=Dg()){const e=Au(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aC(t,{popupRedirectResolver:w1,persistence:[xC,TC,Ay]}),r=Og("authTokenSyncURL");if(r){const i=S1(r);_C(n,i,()=>i(n.currentUser)),mC(n,o=>i(o))}const s=Cg("auth");return s&&cC(n,`http://${s}`),n}b1("Browser");const C1={name:"Register",mounted(){this.signInWithGoogle()},methods:{signInWithGoogle(){const t=new Rn,e=Ny();FC(e,t).then(n=>{console.log(n.user),kh.push("/main")})}}};function k1(t,e,n,r,s,i){return we(),be("button",{onClick:e[0]||(e[0]=(...o)=>i.signInWithGoogle&&i.signInWithGoogle(...o))},"Authenth")}const O1=dl(C1,[["render",k1]]),Ch=mE(IT),N1=!1;Ch.use(EE());const kh=TT({history:FE(),routes:[{path:"/",component:O1},{path:"/main",component:SS,meta:{requiresAuth:!0}}]});kh.beforeEach((t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)&&!N1?Ny().currentUser?n():n("/"):n()});Ch.use(kh);Ch.mount("#app");
