/*! Built with http://stenciljs.com */
ComparsionsSlider.loadBundle("juvphb60",["exports"],function(t){var e=window.ComparsionsSlider.h;window.ComparsionsSlider.Context,function(t){!function(e,i,n,s){var r,o=["","webkit","Moz","MS","ms","o"],a=i.createElement("div"),c="function",u=Math.round,l=Math.abs,h=Date.now;function p(t,e,i){return setTimeout(T(t,i),e)}function d(t,e,i){return!!Array.isArray(t)&&(f(t,i[e],i),!0)}function f(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==s)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function m(t,i,n){var s="DEPRECATED METHOD: "+i+"\n"+n+" AT \n";return function(){var i=new Error("get-stack-trace"),n=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=e.console&&(e.console.warn||e.console.log);return r&&r.call(e.console,s,n),t.apply(this,arguments)}}r="function"!=typeof Object.assign?function(t){if(t===s||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(n!==s&&null!==n)for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}:Object.assign;var v=m(function(t,e,i){for(var n=Object.keys(e),r=0;r<n.length;)(!i||i&&t[n[r]]===s)&&(t[n[r]]=e[n[r]]),r++;return t},"extend","Use `assign`."),g=m(function(t,e){return v(t,e,!0)},"merge","Use `assign`.");function y(t,e,i){var n,s=e.prototype;(n=t.prototype=Object.create(s)).constructor=t,n._super=s,i&&r(n,i)}function T(t,e){return function(){return t.apply(e,arguments)}}function E(t,e){return typeof t==c?t.apply(e&&e[0]||s,e):t}function _(t,e){return t===s?e:t}function b(t,e,i){f(x(e),function(e){t.addEventListener(e,i,!1)})}function w(t,e,i){f(x(e),function(e){t.removeEventListener(e,i,!1)})}function S(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function A(t,e){return t.indexOf(e)>-1}function x(t){return t.trim().split(/\s+/g)}function C(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function I(t){return Array.prototype.slice.call(t,0)}function P(t,e,i){for(var n=[],s=[],r=0;r<t.length;){var o=e?t[r][e]:t[r];C(s,o)<0&&n.push(t[r]),s[r]=o,r++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function z(t,e){for(var i,n,r=e[0].toUpperCase()+e.slice(1),a=0;a<o.length;){if((n=(i=o[a])?i+r:e)in t)return n;a++}return s}var D=1;function F(t){var i=t.ownerDocument||t;return i.defaultView||i.parentWindow||e}var L="ontouchstart"in e,O=z(e,"PointerEvent")!==s,R=L&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),q=25,M=1,N=4,X=8,Y=1,W=2,H=4,k=8,j=16,B=W|H,U=k|j,V=B|U,G=["x","y"],Z=["clientX","clientY"];function $(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){E(t.options.enable,[t])&&i.handler(e)},this.init()}function J(t,e,i){var n=i.pointers.length,r=i.changedPointers.length,o=e&M&&n-r==0,a=e&(N|X)&&n-r==0;i.isFirst=!!o,i.isFinal=!!a,o&&(t.session={}),i.eventType=e,function(t,e){var i=t.session,n=e.pointers,r=n.length;i.firstInput||(i.firstInput=K(e)),r>1&&!i.firstMultiple?i.firstMultiple=K(e):1===r&&(i.firstMultiple=!1);var o=i.firstInput,a=i.firstMultiple,c=a?a.center:o.center,u=e.center=Q(n);e.timeStamp=h(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=nt(c,u),e.distance=it(c,u),function(t,e){var i=e.center,n=t.offsetDelta||{},s=t.prevDelta||{},r=t.prevInput||{};e.eventType!==M&&r.eventType!==N||(s=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=s.x+(i.x-n.x),e.deltaY=s.y+(i.y-n.y)}(i,e),e.offsetDirection=et(e.deltaX,e.deltaY);var p,d,f=tt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=f.x,e.overallVelocityY=f.y,e.overallVelocity=l(f.x)>l(f.y)?f.x:f.y,e.scale=a?(p=a.pointers,it((d=n)[0],d[1],Z)/it(p[0],p[1],Z)):1,e.rotation=a?function(t,e){return nt(e[1],e[0],Z)+nt(t[1],t[0],Z)}(a.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,n,r,o,a=t.lastInterval||e,c=e.timeStamp-a.timeStamp;if(e.eventType!=X&&(c>q||a.velocity===s)){var u=e.deltaX-a.deltaX,h=e.deltaY-a.deltaY,p=tt(c,u,h);n=p.x,r=p.y,i=l(p.x)>l(p.y)?p.x:p.y,o=et(u,h),t.lastInterval=e}else i=a.velocity,n=a.velocityX,r=a.velocityY,o=a.direction;e.velocity=i,e.velocityX=n,e.velocityY=r,e.direction=o}(i,e);var m=t.element;S(e.srcEvent.target,m)&&(m=e.srcEvent.target),e.target=m}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function K(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:u(t.pointers[i].clientX),clientY:u(t.pointers[i].clientY)},i++;return{timeStamp:h(),pointers:e,center:Q(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Q(t){var e=t.length;if(1===e)return{x:u(t[0].clientX),y:u(t[0].clientY)};for(var i=0,n=0,s=0;s<e;)i+=t[s].clientX,n+=t[s].clientY,s++;return{x:u(i/e),y:u(n/e)}}function tt(t,e,i){return{x:e/t||0,y:i/t||0}}function et(t,e){return t===e?Y:l(t)>=l(e)?t<0?W:H:e<0?k:j}function it(t,e,i){i||(i=G);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return Math.sqrt(n*n+s*s)}function nt(t,e,i){i||(i=G);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return 180*Math.atan2(s,n)/Math.PI}$.prototype={handler:function(){},init:function(){this.evEl&&b(this.element,this.evEl,this.domHandler),this.evTarget&&b(this.target,this.evTarget,this.domHandler),this.evWin&&b(F(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&w(this.element,this.evEl,this.domHandler),this.evTarget&&w(this.target,this.evTarget,this.domHandler),this.evWin&&w(F(this.element),this.evWin,this.domHandler)}};var st={mousedown:M,mousemove:2,mouseup:N},rt="mousedown",ot="mousemove mouseup";function at(){this.evEl=rt,this.evWin=ot,this.pressed=!1,$.apply(this,arguments)}y(at,$,{handler:function(t){var e=st[t.type];e&M&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=N),this.pressed&&(e&N&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var ct={pointerdown:M,pointermove:2,pointerup:N,pointercancel:X,pointerout:X},ut={2:"touch",3:"pen",4:"mouse",5:"kinect"},lt="pointerdown",ht="pointermove pointerup pointercancel";function pt(){this.evEl=lt,this.evWin=ht,$.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}e.MSPointerEvent&&!e.PointerEvent&&(lt="MSPointerDown",ht="MSPointerMove MSPointerUp MSPointerCancel"),y(pt,$,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),s=ct[n],r=ut[t.pointerType]||t.pointerType,o="touch"==r,a=C(e,t.pointerId,"pointerId");s&M&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):s&(N|X)&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,s,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),i&&e.splice(a,1))}});var dt={touchstart:M,touchmove:2,touchend:N,touchcancel:X},ft="touchstart",mt="touchstart touchmove touchend touchcancel";function vt(){this.evTarget=ft,this.evWin=mt,this.started=!1,$.apply(this,arguments)}y(vt,$,{handler:function(t){var e=dt[t.type];if(e===M&&(this.started=!0),this.started){var i=function(t,e){var i=I(t.touches),n=I(t.changedTouches);return e&(N|X)&&(i=P(i.concat(n),"identifier",!0)),[i,n]}.call(this,t,e);e&(N|X)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}}});var gt={touchstart:M,touchmove:2,touchend:N,touchcancel:X},yt="touchstart touchmove touchend touchcancel";function Tt(){this.evTarget=yt,this.targetIds={},$.apply(this,arguments)}y(Tt,$,{handler:function(t){var e=gt[t.type],i=function(t,e){var i=I(t.touches),n=this.targetIds;if(e&(2|M)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var s,r,o=I(t.changedTouches),a=[],c=this.target;if(r=i.filter(function(t){return S(t.target,c)}),e===M)for(s=0;s<r.length;)n[r[s].identifier]=!0,s++;for(s=0;s<o.length;)n[o[s].identifier]&&a.push(o[s]),e&(N|X)&&delete n[o[s].identifier],s++;return a.length?[P(r.concat(a),"identifier",!0),a]:void 0}.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}});var Et=2500;function _t(){$.apply(this,arguments);var t=T(this.handler,this);this.touch=new Tt(this.manager,t),this.mouse=new at(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function bt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout(function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)},Et)}}y(_t,$,{handler:function(t,e,i){var n="touch"==i.pointerType,s="mouse"==i.pointerType;if(!(s&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)(function(t,e){t&M?(this.primaryTouch=e.changedPointers[0].identifier,bt.call(this,e)):t&(N|X)&&bt.call(this,e)}).call(this,e,i);else if(s&&function(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var s=this.lastTouches[n],r=Math.abs(e-s.x),o=Math.abs(i-s.y);if(r<=25&&o<=25)return!0}return!1}.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var wt=z(a.style,"touchAction"),St=wt!==s,At=function(){if(!St)return!1;var t={},i=e.CSS&&e.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!i||e.CSS.supports("touch-action",n)}),t}();function xt(t,e){this.manager=t,this.set(e)}xt.prototype={set:function(t){"compute"==t&&(t=this.compute()),St&&this.manager.element.style&&At[t]&&(this.manager.element.style[wt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return f(this.manager.recognizers,function(e){E(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(t){if(A(t,"none"))return"none";var e=A(t,"pan-x"),i=A(t,"pan-y");return e&&i?"none":e||i?e?"pan-x":"pan-y":A(t,"manipulation")?"manipulation":"auto"}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var n=this.actions,s=A(n,"none")&&!At.none,r=A(n,"pan-y")&&!At["pan-y"],o=A(n,"pan-x")&&!At["pan-x"];if(s){var a=1===t.pointers.length,c=t.distance<2,u=t.deltaTime<250;if(a&&c&&u)return}if(!o||!r)return s||r&&i&B||o&&i&U?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Ct=1,It=2,Pt=4,zt=8,Dt=zt,Ft=16;function Lt(t){this.options=r({},this.defaults,t||{}),this.id=D++,this.manager=null,this.options.enable=_(this.options.enable,!0),this.state=Ct,this.simultaneous={},this.requireFail=[]}function Ot(t){return t&Ft?"cancel":t&zt?"end":t&Pt?"move":t&It?"start":""}function Rt(t){return t==j?"down":t==k?"up":t==W?"left":t==H?"right":""}function qt(t,e){var i=e.manager;return i?i.get(t):t}function Mt(){Lt.apply(this,arguments)}function Nt(){Mt.apply(this,arguments),this.pX=null,this.pY=null}function Xt(){Mt.apply(this,arguments)}function Yt(){Lt.apply(this,arguments),this._timer=null,this._input=null}function Wt(){Mt.apply(this,arguments)}function Ht(){Mt.apply(this,arguments)}function kt(){Lt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function jt(t,e){return(e=e||{}).recognizers=_(e.recognizers,jt.defaults.preset),new Bt(t,e)}function Bt(t,e){var i;this.options=r({},jt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(O?pt:R?Tt:L?_t:at))(i,J),this.touchAction=new xt(this,this.options.touchAction),Ut(this,!0),f(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function Ut(t,e){var i,n=t.element;n.style&&(f(t.options.cssProps,function(s,r){i=z(n.style,r),e?(t.oldCssProps[i]=n.style[i],n.style[i]=s):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={}))}Lt.prototype={defaults:{},set:function(t){return r(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(d(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=qt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return d(t,"dropRecognizeWith",this)?this:(t=qt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(d(t,"requireFailure",this))return this;var e=this.requireFail;return-1===C(e,t=qt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(d(t,"dropRequireFailure",this))return this;t=qt(t,this);var e=C(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function n(i){e.manager.emit(i,t)}i<zt&&n(e.options.event+Ot(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=zt&&n(e.options.event+Ot(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|Ct)))return!1;t++}return!0},recognize:function(t){var e=r({},t);if(!E(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(Dt|Ft|32)&&(this.state=Ct),this.state=this.process(e),this.state&(It|Pt|zt|Ft)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},y(Mt,Lt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(It|Pt),s=this.attrTest(t);return n&&(i&X||!s)?e|Ft:n||s?i&N?e|zt:e&It?e|Pt:It:32}}),y(Nt,Mt,{defaults:{event:"pan",threshold:10,pointers:1,direction:V},getTouchAction:function(){var t=this.options.direction,e=[];return t&B&&e.push("pan-y"),t&U&&e.push("pan-x"),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,s=t.direction,r=t.deltaX,o=t.deltaY;return s&e.direction||(e.direction&B?(s=0===r?Y:r<0?W:H,i=r!=this.pX,n=Math.abs(t.deltaX)):(s=0===o?Y:o<0?k:j,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=s,i&&n>e.threshold&&s&e.direction},attrTest:function(t){return Mt.prototype.attrTest.call(this,t)&&(this.state&It||!(this.state&It)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Rt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),y(Xt,Mt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&It)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),y(Yt,Lt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(N|X)&&!s)this.reset();else if(t.eventType&M)this.reset(),this._timer=p(function(){this.state=Dt,this.tryEmit()},e.time,this);else if(t.eventType&N)return Dt;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Dt&&(t&&t.eventType&N?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=h(),this.manager.emit(this.options.event,this._input)))}}),y(Wt,Mt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&It)}}),y(Ht,Mt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:B|U,pointers:1},getTouchAction:function(){return Nt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(B|U)?e=t.overallVelocity:i&B?e=t.overallVelocityX:i&U&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&l(e)>this.options.velocity&&t.eventType&N},emit:function(t){var e=Rt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),y(kt,Lt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return["manipulation"]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&M&&0===this.count)return this.failTimeout();if(n&&s&&i){if(t.eventType!=N)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||it(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,o&&r?this.count+=1:this.count=1,this._input=t,0==this.count%e.taps)return this.hasRequireFailures()?(this._timer=p(function(){this.state=Dt,this.tryEmit()},e.interval,this),It):Dt}return 32},failTimeout:function(){return this._timer=p(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Dt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),jt.VERSION="2.0.7",jt.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[Wt,{enable:!1}],[Xt,{enable:!1},["rotate"]],[Ht,{direction:B}],[Nt,{direction:B},["swipe"]],[kt],[kt,{event:"doubletap",taps:2},["tap"]],[Yt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Bt.prototype={set:function(t){return r(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var n=this.recognizers,s=e.curRecognizer;(!s||s&&s.state&Dt)&&(s=e.curRecognizer=null);for(var r=0;r<n.length;)i=n[r],2===e.stopped||s&&i!=s&&!i.canRecognizeWith(s)?i.reset():i.recognize(t),!s&&i.state&(It|Pt|zt)&&(s=e.curRecognizer=i),r++}},get:function(t){if(t instanceof Lt)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(d(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(d(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=C(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==s&&e!==s){var i=this.handlers;return f(x(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this}},off:function(t,e){if(t!==s){var i=this.handlers;return f(x(t),function(t){e?i[t]&&i[t].splice(C(i[t],e),1):delete i[t]}),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var n=i.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var s=0;s<n.length;)n[s](e),s++}},destroy:function(){this.element&&Ut(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},r(jt,{INPUT_START:M,INPUT_MOVE:2,INPUT_END:N,INPUT_CANCEL:X,STATE_POSSIBLE:Ct,STATE_BEGAN:It,STATE_CHANGED:Pt,STATE_ENDED:zt,STATE_RECOGNIZED:Dt,STATE_CANCELLED:Ft,STATE_FAILED:32,DIRECTION_NONE:Y,DIRECTION_LEFT:W,DIRECTION_RIGHT:H,DIRECTION_UP:k,DIRECTION_DOWN:j,DIRECTION_HORIZONTAL:B,DIRECTION_VERTICAL:U,DIRECTION_ALL:V,Manager:Bt,Input:$,TouchAction:xt,TouchInput:Tt,MouseInput:at,PointerEventInput:pt,TouchMouseInput:_t,SingleTouchInput:vt,Recognizer:Lt,AttrRecognizer:Mt,Tap:kt,Pan:Nt,Swipe:Ht,Pinch:Xt,Rotate:Wt,Press:Yt,on:b,off:w,each:f,merge:g,extend:v,assign:r,inherit:y,bindFn:T,prefixed:z}),(void 0!==e?e:"undefined"!=typeof self?self:{}).Hammer=jt,"function"==typeof s&&s.amd?s(function(){return jt}):t.exports?t.exports=jt:e.Hammer=jt}(window,document)}({exports:{}});var i=function(){function t(){}return t.prototype.componentDidLoad=function(){var t=!1,e=!1,i=!1,n=[].slice.call(this.comparsionsSliderContainer.querySelectorAll(".comparsions__slider-container"));function s(t){t.forEach(function(t){t.getBoundingClientRect().top<=350&&t.classList.add("is-visible")}),e=!1}function r(t){t.forEach(function(t){console.log("container"),console.log(t);var e=t;a(e.querySelector('.comparsions__slider-image-label[data-type="modified"]'),e.querySelector(".comparsions__slider-resize-img"),"left"),a(e.querySelector('.comparsions__slider-image-label[data-type="original"]'),e.querySelector(".comparsions__slider-resize-img"),"right")}),i=!1}function o(e,i,n,s,r,o,c,u,l,h,p){var d=e+i-n;d<s?d=s:d>r&&(d=r);var f=100*(d+n/2-o)/c+"%",m=document.getElementsByClassName("draggable-"+p),v=document.getElementsByClassName("resizable-"+p);m[0].style.left=f,m[0].addEventListener("mouseup vmouseup",function(){this.classList.remove("draggable"),this.classList.remove("draggable-"+p),u.classList.remove("resizable"),u.classList.remove("resizable-"+p)}),v[0].style.width=f,a(h,u,"left"),a(l,u,"right"),t=!1}function a(t,e,i){"left"===i?c(t)+t.clientWidth<c(e)+e.clientWidth?t.classList.remove("is-hidden"):t.classList.add("is-hidden"):c(t)>c(e)+e.clientWidth?t.classList.remove("is-hidden"):t.classList.add("is-hidden")}function c(t){var e=0;do{isNaN(t.offsetLeft)||(e+=t.offsetLeft)}while(t=t.offsetParent);return e}console.log(n),window.addEventListener("scroll",function(){e||(e=!0,window.requestAnimationFrame?requestAnimationFrame(function(){s(n)}):setTimeout(function(){s(n)},100))}),n.forEach(function(e){var i,n,s,r,a,c,u,l,h,p=e,d=p.querySelector(".comparsions__slider-handle"),f=d.getAttribute("data-handle-id");d.setAttribute("id","comparsions__slider-handle-"+f),i=p.querySelector(".comparsions__slider-handle"),n=p.querySelector(".comparsions__slider-resize-img"),s=p,r=p.querySelector('.comparsions__slider-image-label[data-type="original"]'),a=p.querySelector('.comparsions__slider-image-label[data-type="modified"]'),c=f,u=document.getElementById("comparsions__slider-handle-"+c),l=new Hammer.Manager(u),h=new Hammer.Pan,l.add(h),l.on("panstart",function(e){u.classList.add("draggable"),u.classList.add("draggable-"+c),n.classList.add("resizable"),n.classList.add("resizable-"+c);var i=u.getBoundingClientRect(),h=s.getBoundingClientRect(),p=u.clientWidth,d=i.left+document.body.scrollLeft+p-e.center.x,f=h.left+document.body.scrollLeft,m=s.clientWidth,v=f+10,g=f+m-p-10;l.on("panmove",function(e){t||(t=!0,window.requestAnimationFrame?requestAnimationFrame(function(){o(e.center.x,d,p,v,g,f,m,n,r,a,c)}):setTimeout(function(){o(e.center.x,d,p,v,g,f,m,n,r,a,c)},100))})}),l.on("panend",function(){i.classList.remove("draggable"),n.classList.remove("resizable")})}),window.addEventListener("resize",function(){i||(i=!0,window.requestAnimationFrame?requestAnimationFrame(function(){r(n)}):setTimeout(function(){r(n)},100)),console.log("resizing")},!1)},t.prototype.render=function(){return e("div",{class:"comparsions"},e("div",{class:"comparsions__wrapper"},e("div",{class:"comparsions__slider"},e("figure",{class:"comparsions__slider-container is-visible"},e("img",{src:this.after,alt:"After Image"}),e("span",{class:"comparsions__slider-image-label","data-type":"original"},"After"),e("div",{class:"comparsions__slider-resize-img"},e("img",{src:this.before,alt:"Before Image"}),e("span",{class:"comparsions__slider-image-label","data-type":"modified"},"Before")),e("span",{class:"comparsions__slider-handle",id:"comparsions__slider-handle","data-handle-id":this.id},e("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 32 32","enable-background":"new 0 0 32 32"},e("polygon",{fill:"#FFFFFF",points:"13,21 8,16 13,11 "}),e("polygon",{fill:"#FFFFFF",points:"19,11 24,16 19,21 "})))))))},Object.defineProperty(t,"is",{get:function(){return"comparsions-slider"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{after:{type:String,attr:"after"},before:{type:String,attr:"before"},comparsionsSliderContainer:{elementRef:!0},id:{type:String,attr:"id"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".comparsions{width:100%;position:relative;height:auto}.comparsions__info{height:100%}.comparsions__info>*{max-width:650px;width:100%}.comparsions__info-content{padding:2.5rem;color:#fff}.comparsions__slider{position:relative;width:100%;margin:0 auto}.comparsions__slider-container{margin:0}.comparsions__slider-container img{display:block;width:100%;height:auto}.comparsions__slider-image-label{position:absolute;bottom:0;right:0;color:#fff;padding:1em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;opacity:0;transform:translateY(20px);transition:transform .3s .7s,opacity .3s .7s}.comparsions__slider-image-label.is-hidden{visibility:hidden}.is-visible .comparsions__slider-image-label{opacity:1;transform:translateY(0)}.comparsions__slider-resize-img{position:absolute;top:0;left:0;width:0;height:100%;overflow:hidden;transform:translateZ(0);backface-visibility:hidden}.comparsions__slider-resize-img img{position:absolute;left:0;top:0;display:block;height:100%;width:auto;max-width:none}.comparsions__slider-resize-img .comparsions__slider-image-label{right:auto;left:0}.is-visible .comparsions__slider-resize-img{width:50%;animation:cd-bounce-in .7s}\@keyframes cd-bounce-in{0%{width:0}60%{width:55%}100%{width:50%}}.comparsions__slider-handle{position:absolute;height:44px;width:44px;left:50%;top:50%;margin-left:-22px;margin-top:-22px;border-radius:50%;background:#f1c40f url(img/cd-arrows.svg) no-repeat center center;cursor:move;box-shadow:0 0 0 6px rgba(0,0,0,.2),0 0 10px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.3);opacity:1;transform:translate3d(0,0,0) scale(1)}.comparsions__slider-handle.draggable{background-color:#e67e22}.is-visible .comparsions__slider-handle{opacity:1;transform:translate3d(0,0,0) scale(1);transition:transform .3s .7s,opacity 0s .7s}.comparsions__slider-handle svg{width:44px;height:44px}"},enumerable:!0,configurable:!0}),t}();t.ComparsionsSlider=i,Object.defineProperty(t,"__esModule",{value:!0})});