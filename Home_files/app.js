(function(t){function e(e){for(var i,s,a=e[0],u=e[1],l=e[2],h=0,d=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0790":function(t,e,n){"use strict";var i=n("0fbc"),r=n.n(i);r.a},"0fbc":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var i,r,o,s,a,u,l,c,h,d,m,p,f,g,v,b,w,x,y,k,M,S,C,T,O,j,F,_,E=n("a026"),A=(n("c3f0"),n("d5ba"),{props:["tonum"],data:function(){return{begin:0,end:0,start:0,num:0}},methods:{countUp:function(){this.num>=this.end?this.num=this.begin:this.num+=Math.round(5*Math.random())+5;let t=new String(this.num).padStart(this.tonum.length,"0");this.$nextTick(()=>{this.$el.getElementsByClassName("odometer")[0].innerHTML=t,setTimeout(this.countUp,3e3)})}},mounted:function(){this.end=parseInt(this.tonum,10),this.begin=this.num=this.end-15e3,this.countUp()}}),G=A,L=n("2877"),R=Object(L["a"])(G,i,r,!1,null,null,null),H=R.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"marquee"},t._l(t.news,(function(e,i){return n("span",{key:i,domProps:{textContent:t._s(e)}})})),0)},D=[],N={data:function(){return Object.assign({news:[]})},methods:{loadNewsFeed:function(){fetch("/api/v1/visitor/newsfeed/").then(t=>{t.ok&&t.json().then(t=>{let e=[];for(let n of t.results)e.push(n["text"]);this.$data.news=e})}).catch(()=>{this.$data.news=[]})}},mounted:function(){this.loadNewsFeed()}},P=N,I=(n("84b8"),Object(L["a"])(P,$,D,!1,null,"0c222b52",null)),q=I.exports,U={CSRF:{methods:{getCookie:function(t){var e=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),i=0;i<n.length;i++){var r=n[i].trim();if(r.substring(0,t.length+1)===t+"="){e=decodeURIComponent(r.substring(t.length+1));break}}return e},getCSRF:function(){return this.getCookie("csrftoken")},getHeaders:function(){return{"Content-Type":"application/json","X-CSRFToken":this.getCSRF()}}}},GameAccount:{methods:{requestNewGameAccount:function(){var t=document.getElementById(this.target);let e=new FormData(t);fetch(this.$props.api,{method:"POST",body:e}).then(t=>{400==t.status?t.json().then(t=>{this.errorlist=t}):t.ok&&this.retrieveGameAccountList()}).catch(()=>{})},retrieveGameAccountList:function(){fetch(this.$props.api,{method:"GET"}).then(t=>{t.ok&&t.json().then(t=>{this.accounts=t.data,this.$emit("new-account",this.accounts)})}).catch(t=>{console.log(t)})}}},FormHandler:{methods:{onResponseOK:function(t){window.location.href=t.dataset.successUrl},onSubmit:function(t){let e=document.getElementById(this.target),n=new FormData(e);fetch(e.action,{method:this.$data.method||e.method,body:n,headers:{"X-CSRFToken":this.getCSRF()}}).then(t=>{t.ok?this.onResponseOK(e):400==t.status&&t.json().then(t=>{this.errorlist=t,"recaptcha"in this&&grecaptcha.reset()})}).catch(t=>{console.error(t)})}}}},B={mixins:[U.CSRF,U.FormHandler],data:function(){return{target:"signin-form",errorlist:{},username:"",password:"",recaptcha:""}},methods:{onReset:function(){this.username="",this.password="",this.recaptcha=""}}},W=B,V=Object(L["a"])(W,o,s,!1,null,null,null),X=V.exports,K={mixins:[U.CSRF,U.FormHandler],data:function(){return{target:"signup-form",currencies:[],errorlist:{},username:"",password1:"",password2:"",mobile:"",currency:"",recaptcha:"",referrer_code:""}},methods:{onReset:function(){this.username="",this.password1="",this.password2="",this.mobile="",this.currency=this.$props.initial.currency,this.referrer_code=this.$props.initial.referrer_code}},mounted:function(){fetch("/api/v1/visitor/currency/",{method:"GET"}).then(t=>{t.ok&&t.json().then(t=>{this.currencies=t.results})}).catch(()=>{})}},z=K,J=Object(L["a"])(z,a,u,!1,null,null,null),Q=J.exports,Y={mixins:[U.CSRF,U.FormHandler],data:function(){return{target:"addbankacc-form",errorlist:{},bank:"",name:"",number:"",accounts:[]}},methods:{onResponseOK:function(t){this.retrieveBankAccounts().then(this.onReset)},onReset:function(){this.name="",this.number=""},retrieveBankAccounts:function(){return fetch("/api/v1/member/bank/customer/",{method:"GET"}).then(t=>{t.ok&&t.json().then(t=>{this.accounts=t.results})}).catch(()=>{})}},mounted:function(){this.retrieveBankAccounts()}},Z=Y,tt=Object(L["a"])(Z,l,c,!1,null,null,null),et=tt.exports,nt={mixins:[U.CSRF,U.FormHandler],data:function(){return{target:"changepassword-form",errorlist:{},method:"PUT"}},methods:{onReset:function(){this.current_password="",this.new_password1="",this.new_password2=""}}},it=nt,rt=Object(L["a"])(it,h,d,!1,null,null,null),ot=rt.exports,st={mixins:[U.CSRF,U.FormHandler],data:function(){return{target:"deposit-form",errorlist:{},merchant_bank_account_list:[]}},methods:{},mounted:function(){fetch("/api/v1/member/bank/merchant/",{method:"GET"}).then(t=>{t.ok&&t.json().then(t=>{this.merchant_bank_account_list=t.results})})}},at=st,ut=Object(L["a"])(at,m,p,!1,null,null,null),lt=ut.exports,ct={mixins:[U.CSRF,U.FormHandler],data:function(){return Object.assign({target:"withdraw-form",errorlist:{}})},methods:{}},ht=ct,dt=Object(L["a"])(ht,f,g,!1,null,null,null),mt=dt.exports,pt={mixins:[U.GameAccount],props:["api"],data:function(){return{target:"kiss918-register-form",errorlist:{},accounts:[]}},mounted:function(){this.retrieveGameAccountList()}},ft=pt,gt=Object(L["a"])(ft,v,b,!1,null,null,null),vt=gt.exports,bt={mixins:[U.GameAccount],props:["api"],data:function(){return Object.assign({target:"gw99-register-form",errorlist:{},accounts:[]})},mounted:function(){this.retrieveGameAccountList()}},wt=bt,xt=Object(L["a"])(wt,w,x,!1,null,null,null),yt=xt.exports,kt={mixins:[U.GameAccount],props:["api"],data:function(){return Object.assign({target:"joker-register-form",errorlist:{},accounts:[]})},mounted:function(){this.retrieveGameAccountList()}},Mt=kt,St=Object(L["a"])(Mt,y,k,!1,null,null,null),Ct=St.exports,Tt={mixins:[U.CSRF,U.FormHandler],props:["accounts"],data:function(){return{target:"transfer-in-form",errorlist:{}}},methods:{}},Ot=Tt,jt=Object(L["a"])(Ot,M,S,!1,null,null,null),Ft=jt.exports,_t={mixins:[U.CSRF,U.FormHandler],props:["accounts"],data:function(){return{target:"transfer-out-form",errorlist:{},promotions:[],account:""}},methods:{retrievePromotions:function(){let t=0;for(let e of this.accounts)e.id===parseInt(this.account,10)&&(t=e.product);0===t?this.promotions=[]:fetch(`/api/v1/member/promotions/?product=${t}`,{method:"GET"}).then(t=>{t.ok&&t.json().then(t=>{this.promotions=t.results})}).catch(t=>{console.log(t)})}}},Et=_t,At=Object(L["a"])(Et,C,T,!1,null,null,null),Gt=At.exports,Lt={mixins:[U.CSRF,U.FormHandler],components:{"xx-kiss918":vt,"xx-gw99":yt,"xx-joker":Ct,"xx-transfer-in":Ft,"xx-transfer-out":Gt},data:function(){return{accounts:[],promotions:[]}},methods:{onInsertNewGameAccount:function(t){for(let e of t){let t=this.accounts.find(t=>{return t.id===e.id});t||this.accounts.push(e)}this.accounts.sort((t,e)=>{let n=t.id,i=e.id;return n>i?-1:n<i?1:0})},retrieveGameAccounts:function(){fetch("/api/v1/member/games/",{method:"GET"}).then(t=>{t.ok&&t.json().then(t=>{this.accounts=t.results})}).catch(t=>{console.log(t)})}},mounted:function(){this.retrieveGameAccounts()}},Rt=Lt,Ht=Object(L["a"])(Rt,O,j,!1,null,null,null),$t=Ht.exports,Dt={props:["pk"],data:function(){return{refreshing:!1,currency:"",balance:"0.00"}},methods:{onRefresh:function(){this.refreshing=!0,fetch(`/api/v1/member/wallet/${this.$props.pk}/`,{method:"GET"}).then(t=>{t.ok?t.json().then(t=>{this.currency=t.currency_display,this.balance=t.balance,setTimeout(()=>{this.refreshing=!1},500)}):this.refreshing=!1})}}},Nt=Dt,Pt=Object(L["a"])(Nt,F,_,!1,null,null,null),It=Pt.exports,qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.socials,(function(e,i){return n("li",{key:i},[n("a",{attrs:{href:e.href}},[n("img",{attrs:{src:e.image_url,alt:e.provider_display}}),n("h5",[t._v(t._s(e.provider_display))])])])})),0)},Ut=[],Bt={data:function(){return{}},props:["socials"]},Wt=Bt,Vt=Object(L["a"])(Wt,qt,Ut,!1,null,null,null),Xt=Vt.exports,Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg mb-2"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Type")]),n("div",{staticClass:"collapse navbar-collapse"},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{class:["nav-item",{active:""===this.filter}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.showAll}},[t._v("Show All "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])]),n("li",{class:["nav-item",{active:"Slot"===this.filter}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.showSlotOnly}},[t._v("SLOTS")])]),n("li",{class:["nav-item",{active:"Fishing"===this.filter}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.showFishingOnly}},[t._v("FISHING")])]),n("li",{class:["nav-item",{active:"ECasino"===this.filter}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.showECasinoOnly}},[t._v("E-CASINO")])])])])]),n("div",{staticClass:"card-columns"},t._l(t.gameList,(function(e){return n("div",{directives:[{name:"show",rawName:"v-show",value:""===t.filter||t.filter===e.GameType,expression:"filter === '' || filter === game.GameType"}],key:e.GameCode,staticClass:"card"},[n("a",{attrs:{href:"#"},on:{click:function(n){return t.forwardToGame(e.GameCode,e.GameName)}}},[n("img",{staticClass:"card-img-top",attrs:{src:e.Image2,alt:e.GameName}})]),n("div",{staticClass:"card-body text-center"},[n("p",[t._v(t._s(e.GameName))])]),n("div",{staticClass:"card-footer"},[n("p",[n("i",{directives:[{name:"show",rawName:"v-show",value:e.SupportedPlatForms.includes("Mobile"),expression:"game.SupportedPlatForms.includes('Mobile')"}],staticClass:"fa fa-mobile fa-2x mr-1",attrs:{title:"Mobile","aria-hidden":"true"}}),n("i",{directives:[{name:"show",rawName:"v-show",value:e.SupportedPlatForms.includes("Desktop"),expression:"game.SupportedPlatForms.includes('Desktop')"}],staticClass:"fa fa-desktop",attrs:{title:"Desktop","aria-hidden":"true"}}),n("small",{staticClass:"pull-right"},[t._v(t._s(e.Technology))])])])])})),0),n("form",{attrs:{id:"gameForwarder",action:"",method:"POST"}})])},zt=[],Jt={mixins:[U.CSRF],data:function(){return{gameList:[],filter:""}},methods:{showAll:function(){this.filter=""},showSlotOnly:function(){this.filter="Slot"},showFishingOnly:function(){this.filter="Fishing"},showECasinoOnly:function(){this.filter="ECasino"},retrieveGameList:function(){let t=this;fetch("/api/v1/member/game/joker/",{method:"GET",headers:this.getHeaders()}).then(e=>{e.ok&&e.json().then(e=>{t.gameList=e})})},forwardToGame:function(t,e){let n=this,i={game_code:t,game_name:e,redirect_url:location.href};fetch(`/api/v1/member/game/joker/token/?game=${t}&returnUrl=${location.href}`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify(i)}).then(t=>{t.ok&&t.json().then(t=>{const e=n.$el.querySelector("#gameForwarder");e.action=t.url,e.submit()})})}},mounted:function(){this.retrieveGameList()}},Qt=Jt,Yt=(n("0790"),Object(L["a"])(Qt,Kt,zt,!1,null,"10478a4a",null)),Zt=Yt.exports;E["a"].config.productionTip=!1,new E["a"]({delimiters:["${","}"],components:{"xx-odometer":H,"xx-newsfeed":q,"sign-in":X,"sign-up":Q,"xx-addbankacc":et,"xx-changepassword":ot,deposit:lt,withdraw:mt,"xx-transfer":$t,"xx-wallet":It,"xx-social":Xt,"xx-joker-game-list":Zt},data:{socials:[]},methods:{loadSocial:function(){fetch("/api/v1/visitor/social/").then(t=>{t.ok&&t.json().then(t=>{this.socials=t.results})})}},mounted:function(){this.loadSocial()}}).$mount("#app")},"84b8":function(t,e,n){"use strict";var i=n("babb"),r=n.n(i);r.a},babb:function(t,e,n){},c3f0:function(t,e,n){},d5ba:function(t,e,n){var i,r;/*! odometer 0.4.6 */(function(){var o,s,a,u,l,c,h,d,m,p,f,g,v,b,w,x,y,k,M,S,C,T,O,j,F,_,E,A,G,L,R,H,$=[].slice;y='<span class="odometer-value"></span>',b='<span class="odometer-ribbon"><span class="odometer-ribbon-inner">'+y+"</span></span>",u='<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">'+b+"</span></span>",h='<span class="odometer-formatting-mark"></span>',a="(,ddd).dd",d=/^\(?([^)]*)\)?(?:(.)(d+))?$/,m=30,c=2e3,o=20,p=2,l=.5,f=1e3/m,s=1e3/o,w="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",F=document.createElement("div").style,x=null!=F.transition||null!=F.webkitTransition||null!=F.mozTransition||null!=F.oTransition,O=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,g=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,M=function(t){var e;return e=document.createElement("div"),e.innerHTML=t,e.children[0]},T=function(t,e){return t.className=t.className.replace(new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi")," ")},k=function(t,e){return T(t,e),t.className+=" "+e},_=function(t,e){var n;return null!=document.createEvent?(n=document.createEvent("HTMLEvents"),n.initEvent(e,!0,!0),t.dispatchEvent(n)):void 0},C=function(){var t,e;return null!=(t=null!=(e=window.performance)&&"function"==typeof e.now?e.now():void 0)?t:+new Date},j=function(t,e){return null==e&&(e=0),e?(t*=Math.pow(10,e),t+=.5,t=Math.floor(t),t/=Math.pow(10,e)):Math.round(t)},E=function(t){return 0>t?Math.ceil(t):Math.floor(t)},S=function(t){return t-j(t)},G=!1,(A=function(){var t,e,n,i,r;if(!G&&null!=window.jQuery){for(G=!0,i=["html","text"],r=[],e=0,n=i.length;n>e;e++)t=i[e],r.push(function(t){var e;return e=window.jQuery.fn[t],window.jQuery.fn[t]=function(t){var n;return null==t||null==(null!=(n=this[0])?n.odometer:void 0)?e.apply(this,arguments):this[0].odometer.update(t)}}(t));return r}})(),setTimeout(A,0),v=function(){function t(e){var n,i,r,o,s,a,u,l,h,d=this;if(this.options=e,this.el=this.options.el,null!=this.el.odometer)return this.el.odometer;for(n in this.el.odometer=this,u=t.options,u)r=u[n],null==this.options[n]&&(this.options[n]=r);null==(o=this.options).duration&&(o.duration=c),this.MAX_VALUES=this.options.duration/f/p|0,this.resetFormat(),this.value=this.cleanValue(null!=(l=this.options.value)?l:""),this.renderInside(),this.render();try{for(h=["innerHTML","innerText","textContent"],s=0,a=h.length;a>s;s++)i=h[s],null!=this.el[i]&&function(t){Object.defineProperty(d.el,t,{get:function(){var e;return"innerHTML"===t?d.inside.outerHTML:null!=(e=d.inside.innerText)?e:d.inside.textContent},set:function(t){return d.update(t)}})}(i)}catch(y){y,this.watchForMutations()}}return t.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},t.prototype.watchForMutations=function(){var t=this;if(null!=g)try{return null==this.observer&&(this.observer=new g((function(){var e;return e=t.el.innerText,t.renderInside(),t.render(t.value),t.update(e)}))),this.watchMutations=!0,this.startWatchingMutations()}catch(a){a}},t.prototype.startWatchingMutations=function(){return this.watchMutations?this.observer.observe(this.el,{childList:!0}):void 0},t.prototype.stopWatchingMutations=function(){var t;return null!=(t=this.observer)?t.disconnect():void 0},t.prototype.cleanValue=function(t){var e;return"string"==typeof t&&(t=t.replace(null!=(e=this.format.radix)?e:".","<radix>"),t=t.replace(/[.,]/g,""),t=t.replace("<radix>","."),t=parseFloat(t,10)||0),j(t,this.format.precision)},t.prototype.bindTransitionEnd=function(){var t,e,n,i,r,o,s=this;if(!this.transitionEndBound){for(this.transitionEndBound=!0,e=!1,r=w.split(" "),o=[],n=0,i=r.length;i>n;n++)t=r[n],o.push(this.el.addEventListener(t,(function(){return!!e||(e=!0,setTimeout((function(){return s.render(),e=!1,_(s.el,"odometerdone")}),0),!0)}),!1));return o}},t.prototype.resetFormat=function(){var t,e,n,i,r,o,s,u;if(t=null!=(s=this.options.format)?s:a,t||(t="d"),n=d.exec(t),!n)throw new Error("Odometer: Unparsable digit format");return u=n.slice(1,4),o=u[0],r=u[1],e=u[2],i=(null!=e?e.length:void 0)||0,this.format={repeating:o,radix:r,precision:i}},t.prototype.render=function(t){var e,n,i,r,o,s,a,u,l,c,h,d;for(null==t&&(t=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",s=this.options.theme,e=this.el.className.split(" "),o=[],u=0,c=e.length;c>u;u++)n=e[u],n.length&&((r=/^odometer-theme-(.+)$/.exec(n))?s=r[1]:/^odometer(-|$)/.test(n)||o.push(n));for(o.push("odometer"),x||o.push("odometer-no-transitions"),o.push(s?"odometer-theme-"+s:"odometer-auto-theme"),this.el.className=o.join(" "),this.ribbons={},this.digits=[],a=!this.format.precision||!S(t)||!1,d=t.toString().split("").reverse(),l=0,h=d.length;h>l;l++)i=d[l],"."===i&&(a=!0),this.addDigit(i,a);return this.startWatchingMutations()},t.prototype.update=function(t){var e,n=this;return t=this.cleanValue(t),(e=t-this.value)?(T(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),k(this.el,e>0?"odometer-animating-up":"odometer-animating-down"),this.stopWatchingMutations(),this.animate(t),this.startWatchingMutations(),setTimeout((function(){return n.el.offsetHeight,k(n.el,"odometer-animating")}),0),this.value=t):void 0},t.prototype.renderDigit=function(){return M(u)},t.prototype.insertDigit=function(t,e){return null!=e?this.inside.insertBefore(t,e):this.inside.children.length?this.inside.insertBefore(t,this.inside.children[0]):this.inside.appendChild(t)},t.prototype.addSpacer=function(t,e,n){var i;return i=M(h),i.innerHTML=t,n&&k(i,n),this.insertDigit(i,e)},t.prototype.addDigit=function(t,e){var n,i,r,o;if(null==e&&(e=!0),"-"===t)return this.addSpacer(t,null,"odometer-negation-mark");if("."===t)return this.addSpacer(null!=(o=this.format.radix)?o:".",null,"odometer-radix-mark");if(e)for(r=!1;;){if(!this.format.repeating.length){if(r)throw new Error("Bad odometer format without digits");this.resetFormat(),r=!0}if(n=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),"d"===n)break;this.addSpacer(n)}return i=this.renderDigit(),i.querySelector(".odometer-value").innerHTML=t,this.digits.push(i),this.insertDigit(i)},t.prototype.animate=function(t){return x&&"count"!==this.options.animation?this.animateSlide(t):this.animateCount(t)},t.prototype.animateCount=function(t){var e,n,i,r,o,a=this;if(n=+t-this.value)return r=i=C(),e=this.value,(o=function(){var u,l,c;return C()-r>a.options.duration?(a.value=t,a.render(),void _(a.el,"odometerdone")):(u=C()-i,u>s&&(i=C(),c=u/a.options.duration,l=n*c,e+=l,a.render(Math.round(e))),null!=O?O(o):setTimeout(o,s))})()},t.prototype.getDigitCount=function(){var t,e,n,i,r,o;for(i=1<=arguments.length?$.call(arguments,0):[],t=r=0,o=i.length;o>r;t=++r)n=i[t],i[t]=Math.abs(n);return e=Math.max.apply(Math,i),Math.ceil(Math.log(e+1)/Math.log(10))},t.prototype.getFractionalDigitCount=function(){var t,e,n,i,r,o,s;for(r=1<=arguments.length?$.call(arguments,0):[],e=/^\-?\d*\.(\d*?)0*$/,t=o=0,s=r.length;s>o;t=++o)i=r[t],r[t]=i.toString(),n=e.exec(r[t]),r[t]=null==n?0:n[1].length;return Math.max.apply(Math,r)},t.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},t.prototype.animateSlide=function(t){var e,n,i,r,o,s,a,u,c,h,d,m,p,f,g,v,b,w,x,y,M,S,C,T,O,j,F;if(v=this.value,u=this.getFractionalDigitCount(v,t),u&&(t*=Math.pow(10,u),v*=Math.pow(10,u)),i=t-v){for(this.bindTransitionEnd(),r=this.getDigitCount(v,t),o=[],e=0,d=x=0;r>=0?r>x:x>r;d=r>=0?++x:--x){if(b=E(v/Math.pow(10,r-d-1)),a=E(t/Math.pow(10,r-d-1)),s=a-b,Math.abs(s)>this.MAX_VALUES){for(h=[],m=s/(this.MAX_VALUES+this.MAX_VALUES*e*l),n=b;s>0&&a>n||0>s&&n>a;)h.push(Math.round(n)),n+=m;h[h.length-1]!==a&&h.push(a),e++}else h=function(){F=[];for(var t=b;a>=b?a>=t:t>=a;a>=b?t++:t--)F.push(t);return F}.apply(this);for(d=y=0,S=h.length;S>y;d=++y)c=h[d],h[d]=Math.abs(c%10);o.push(h)}for(this.resetDigits(),j=o.reverse(),d=M=0,C=j.length;C>M;d=++M)for(h=j[d],this.digits[d]||this.addDigit(" ",d>=u),null==(w=this.ribbons)[d]&&(w[d]=this.digits[d].querySelector(".odometer-ribbon-inner")),this.ribbons[d].innerHTML="",0>i&&(h=h.reverse()),p=O=0,T=h.length;T>O;p=++O)c=h[p],g=document.createElement("div"),g.className="odometer-value",g.innerHTML=c,this.ribbons[d].appendChild(g),p===h.length-1&&k(g,"odometer-last-value"),0===p&&k(g,"odometer-first-value");return 0>b&&this.addDigit("-"),f=this.inside.querySelector(".odometer-radix-mark"),null!=f&&f.parent.removeChild(f),u?this.addSpacer(this.format.radix,this.digits[u-1],"odometer-radix-mark"):void 0}},t}(),v.options=null!=(R=window.odometerOptions)?R:{},setTimeout((function(){var t,e,n,i,r;if(window.odometerOptions){for(t in i=window.odometerOptions,r=[],i)e=i[t],r.push(null!=(n=v.options)[t]?(n=v.options)[t]:n[t]=e);return r}}),0),v.init=function(){var t,e,n,i,r,o;if(null!=document.querySelectorAll){for(e=document.querySelectorAll(v.options.selector||".odometer"),o=[],n=0,i=e.length;i>n;n++)t=e[n],o.push(t.odometer=new v({el:t,value:null!=(r=t.innerText)?r:t.textContent}));return o}},null!=(null!=(H=document.documentElement)?H.doScroll:void 0)&&null!=document.createEventObject?(L=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&!1!==v.options.auto&&v.init(),null!=L?L.apply(this,arguments):void 0}):document.addEventListener("DOMContentLoaded",(function(){return!1!==v.options.auto?v.init():void 0}),!1),i=[n("1157")],r=function(){return v}.apply(e,i),void 0===r||(t.exports=r)}).call(this)}});
//# sourceMappingURL=app.bde7f563.js.map