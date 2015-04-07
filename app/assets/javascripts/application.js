// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//

(function(){
/*!     SWFObject v2.2 <http://code.google.com/p/swfobject/>
  is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var a=function(){var E="undefined",s="object",T="Shockwave Flash",X="ShockwaveFlash.ShockwaveFlash",r="application/x-shockwave-flash",S="SWFObjectExprInst",y="onreadystatechange",P=window,k=document,u=navigator,U=false,V=[i],p=[],O=[],J=[],m,R,F,C,K=false,b=false,o,H,n=true,N=function(){var ab=typeof k.getElementById!=E&&typeof k.getElementsByTagName!=E&&typeof k.createElement!=E,ai=u.userAgent.toLowerCase(),Z=u.platform.toLowerCase(),af=Z?/win/.test(Z):/win/.test(ai),ad=Z?/mac/.test(Z):/mac/.test(ai),ag=/webkit/.test(ai)?parseFloat(ai.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,Y=!+"\v1",ah=[0,0,0],ac=null;if(typeof u.plugins!=E&&typeof u.plugins[T]==s){ac=u.plugins[T].description;if(ac&&!(typeof u.mimeTypes!=E&&u.mimeTypes[r]&&!u.mimeTypes[r].enabledPlugin)){U=true;Y=false;ac=ac.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ah[0]=parseInt(ac.replace(/^(.*)\..*$/,"$1"),10);ah[1]=parseInt(ac.replace(/^.*\.(.*)\s.*$/,"$1"),10);ah[2]=/[a-zA-Z]/.test(ac)?parseInt(ac.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof P.ActiveXObject!=E){try{var ae=new ActiveXObject(X);if(ae){ac=ae.GetVariable("$version");if(ac){Y=true;ac=ac.split(" ")[1].split(",");ah=[parseInt(ac[0],10),parseInt(ac[1],10),parseInt(ac[2],10)]}}}catch(aa){}}}return{w3:ab,pv:ah,wk:ag,ie:Y,win:af,mac:ad}}(),l=function(){if(!N.w3){return}if((typeof k.readyState!=E&&k.readyState=="complete")||(typeof k.readyState==E&&(k.getElementsByTagName("body")[0]||k.body))){g()}if(!K){if(typeof k.addEventListener!=E){k.addEventListener("DOMContentLoaded",g,false)}if(N.ie&&N.win){k.attachEvent(y,function(){if(k.readyState=="complete"){k.detachEvent(y,arguments.callee);g()}});if(P==top){(function(){if(K){return}try{k.documentElement.doScroll("left")}catch(Y){setTimeout(arguments.callee,0);return}g()})()}}if(N.wk){(function(){if(K){return}if(!/loaded|complete/.test(k.readyState)){setTimeout(arguments.callee,0);return}g()})()}t(g)}}();function g(){if(K){return}try{var aa=k.getElementsByTagName("body")[0].appendChild(D("span"));aa.parentNode.removeChild(aa)}catch(ab){return}K=true;var Y=V.length;for(var Z=0;Z<Y;Z++){V[Z]()}}function L(Y){if(K){Y()}else{V[V.length]=Y}}function t(Z){if(typeof P.addEventListener!=E){P.addEventListener("load",Z,false)}else{if(typeof k.addEventListener!=E){k.addEventListener("load",Z,false)}else{if(typeof P.attachEvent!=E){j(P,"onload",Z)}else{if(typeof P.onload=="function"){var Y=P.onload;P.onload=function(){Y();Z()}}else{P.onload=Z}}}}}function i(){if(U){W()}else{I()}}function W(){var Y=k.getElementsByTagName("body")[0];var ab=D(s);ab.setAttribute("type",r);var aa=Y.appendChild(ab);if(aa){var Z=0;(function(){if(typeof aa.GetVariable!=E){var ac=aa.GetVariable("$version");if(ac){ac=ac.split(" ")[1].split(",");N.pv=[parseInt(ac[0],10),parseInt(ac[1],10),parseInt(ac[2],10)]}}else{if(Z<10){Z++;setTimeout(arguments.callee,10);return}}Y.removeChild(ab);aa=null;I()})()}else{I()}}function I(){var ah=p.length;if(ah>0){for(var ag=0;ag<ah;ag++){var Z=p[ag].id;var ac=p[ag].callbackFn;var ab={success:false,id:Z};if(N.pv[0]>0){var af=d(Z);if(af){if(G(p[ag].swfVersion)&&!(N.wk&&N.wk<312)){x(Z,true);if(ac){ab.success=true;ab.ref=A(Z);ac(ab)}}else{if(p[ag].expressInstall&&B()){var aj={};aj.data=p[ag].expressInstall;aj.width=af.getAttribute("width")||"0";aj.height=af.getAttribute("height")||"0";if(af.getAttribute("class")){aj.styleclass=af.getAttribute("class")}if(af.getAttribute("align")){aj.align=af.getAttribute("align")}var ai={};var Y=af.getElementsByTagName("param");var ad=Y.length;for(var ae=0;ae<ad;ae++){if(Y[ae].getAttribute("name").toLowerCase()!="movie"){ai[Y[ae].getAttribute("name")]=Y[ae].getAttribute("value")}}Q(aj,ai,Z,ac)}else{q(af);if(ac){ac(ab)}}}}}else{x(Z,true);if(ac){var aa=A(Z);if(aa&&typeof aa.SetVariable!=E){ab.success=true;ab.ref=aa}ac(ab)}}}}}function A(ab){var Y=null;var Z=d(ab);if(Z&&Z.nodeName=="OBJECT"){if(typeof Z.SetVariable!=E){Y=Z}else{var aa=Z.getElementsByTagName(s)[0];if(aa){Y=aa}}}return Y}function B(){return !b&&G("6.0.65")&&(N.win||N.mac)&&!(N.wk&&N.wk<312)}function Q(ab,ac,Y,aa){b=true;F=aa||null;C={success:false,id:Y};var af=d(Y);if(af){if(af.nodeName=="OBJECT"){m=h(af);R=null}else{m=af;R=Y}ab.id=S;if(typeof ab.width==E||(!/%$/.test(ab.width)&&parseInt(ab.width,10)<310)){ab.width="310"}if(typeof ab.height==E||(!/%$/.test(ab.height)&&parseInt(ab.height,10)<137)){ab.height="137"}k.title=k.title.slice(0,47)+" - Flash Player Installation";var ae=N.ie&&N.win?"ActiveX":"PlugIn",ad="MMredirectURL="+P.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ae+"&MMdoctitle="+k.title;if(typeof ac.flashvars!=E){ac.flashvars+="&"+ad}else{ac.flashvars=ad}if(N.ie&&N.win&&af.readyState!=4){var Z=D("div");Y+="SWFObjectNew";Z.setAttribute("id",Y);af.parentNode.insertBefore(Z,af);af.style.display="none";(function(){if(af.readyState==4){af.parentNode.removeChild(af)}else{setTimeout(arguments.callee,10)}})()}v(ab,ac,Y)}}function q(Z){if(N.ie&&N.win&&Z.readyState!=4){var Y=D("div");Z.parentNode.insertBefore(Y,Z);Y.parentNode.replaceChild(h(Z),Y);Z.style.display="none";(function(){if(Z.readyState==4){Z.parentNode.removeChild(Z)}else{setTimeout(arguments.callee,10)}})()}else{Z.parentNode.replaceChild(h(Z),Z)}}function h(ad){var ab=D("div");if(N.win&&N.ie){ab.innerHTML=ad.innerHTML}else{var Z=ad.getElementsByTagName(s)[0];if(Z){var ae=Z.childNodes;if(ae){var Y=ae.length;for(var aa=0;aa<Y;aa++){if(!(ae[aa].nodeType==1&&ae[aa].nodeName=="PARAM")&&!(ae[aa].nodeType==8)){ab.appendChild(ae[aa].cloneNode(true))}}}}}return ab}function v(aj,ah,Z){var Y,ab=d(Z);if(N.wk&&N.wk<312){return Y}if(ab){if(typeof aj.id==E){aj.id=Z}if(N.ie&&N.win){var ai="";for(var af in aj){if(aj[af]!=Object.prototype[af]){if(af.toLowerCase()=="data"){ah.movie=aj[af]}else{if(af.toLowerCase()=="styleclass"){ai+=' class="'+aj[af]+'"'}else{if(af.toLowerCase()!="classid"){ai+=" "+af+'="'+aj[af]+'"'}}}}}var ag="";for(var ae in ah){if(ah[ae]!=Object.prototype[ae]){ag+='<param name="'+ae+'" value="'+ah[ae]+'" />'}}ab.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ai+">"+ag+"</object>";O[O.length]=aj.id;Y=d(aj.id)}else{var aa=D(s);aa.setAttribute("type",r);for(var ad in aj){if(aj[ad]!=Object.prototype[ad]){if(ad.toLowerCase()=="styleclass"){aa.setAttribute("class",aj[ad])}else{if(ad.toLowerCase()!="classid"){aa.setAttribute(ad,aj[ad])}}}}for(var ac in ah){if(ah[ac]!=Object.prototype[ac]&&ac.toLowerCase()!="movie"){f(aa,ac,ah[ac])}}ab.parentNode.replaceChild(aa,ab);Y=aa}}return Y}function f(aa,Y,Z){var ab=D("param");ab.setAttribute("name",Y);ab.setAttribute("value",Z);aa.appendChild(ab)}function z(Z){var Y=d(Z);if(Y&&Y.nodeName=="OBJECT"){if(N.ie&&N.win){Y.style.display="none";(function(){if(Y.readyState==4){c(Z)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.removeChild(Y)}}}function c(aa){var Z=d(aa);if(Z){for(var Y in Z){if(typeof Z[Y]=="function"){Z[Y]=null}}Z.parentNode.removeChild(Z)}}function d(aa){var Y=null;try{Y=k.getElementById(aa)}catch(Z){}return Y}function D(Y){return k.createElement(Y)}function j(aa,Y,Z){aa.attachEvent(Y,Z);J[J.length]=[aa,Y,Z]}function G(aa){var Z=N.pv,Y=aa.split(".");Y[0]=parseInt(Y[0],10);Y[1]=parseInt(Y[1],10)||0;Y[2]=parseInt(Y[2],10)||0;return(Z[0]>Y[0]||(Z[0]==Y[0]&&Z[1]>Y[1])||(Z[0]==Y[0]&&Z[1]==Y[1]&&Z[2]>=Y[2]))?true:false}function w(ad,Z,ae,ac){if(N.ie&&N.mac){return}var ab=k.getElementsByTagName("head")[0];if(!ab){return}var Y=(ae&&typeof ae=="string")?ae:"screen";if(ac){o=null;H=null}if(!o||H!=Y){var aa=D("style");aa.setAttribute("type","text/css");aa.setAttribute("media",Y);o=ab.appendChild(aa);if(N.ie&&N.win&&typeof k.styleSheets!=E&&k.styleSheets.length>0){o=k.styleSheets[k.styleSheets.length-1]}H=Y}if(N.ie&&N.win){if(o&&typeof o.addRule==s){o.addRule(ad,Z)}}else{if(o&&typeof k.createTextNode!=E){o.appendChild(k.createTextNode(ad+" {"+Z+"}"))}}}function x(aa,Y){if(!n){return}var Z=Y?"visible":"hidden";if(K&&d(aa)){d(aa).style.visibility=Z}else{w("#"+aa,"visibility:"+Z)}}function M(Z){var aa=/[\\\"<>\.;]/;var Y=aa.exec(Z)!=null;return Y&&typeof encodeURIComponent!=E?encodeURIComponent(Z):Z}var e=function(){if(N.ie&&N.win){window.attachEvent("onunload",function(){var ad=J.length;for(var ac=0;ac<ad;ac++){J[ac][0].detachEvent(J[ac][1],J[ac][2])}var aa=O.length;for(var ab=0;ab<aa;ab++){z(O[ab])}for(var Z in N){N[Z]=null}N=null;for(var Y in a){a[Y]=null}a=null})}}();return{registerObject:function(ac,Y,ab,aa){if(N.w3&&ac&&Y){var Z={};Z.id=ac;Z.swfVersion=Y;Z.expressInstall=ab;Z.callbackFn=aa;p[p.length]=Z;x(ac,false)}else{if(aa){aa({success:false,id:ac})}}},getObjectById:function(Y){if(N.w3){return A(Y)}},embedSWF:function(ac,ai,af,ah,Z,ab,aa,ae,ag,ad){var Y={success:false,id:ai};if(N.w3&&!(N.wk&&N.wk<312)&&ac&&ai&&af&&ah&&Z){x(ai,false);L(function(){af+="";ah+="";var ak={};if(ag&&typeof ag===s){for(var am in ag){ak[am]=ag[am]}}ak.data=ac;ak.width=af;ak.height=ah;var an={};if(ae&&typeof ae===s){for(var al in ae){an[al]=ae[al]}}if(aa&&typeof aa===s){for(var aj in aa){if(typeof an.flashvars!=E){an.flashvars+="&"+aj+"="+aa[aj]}else{an.flashvars=aj+"="+aa[aj]}}}if(G(Z)){var ao=v(ak,an,ai);if(ak.id==ai){x(ai,true)}Y.success=true;Y.ref=ao}else{if(ab&&B()){ak.data=ab;Q(ak,an,ai,ad);return}else{x(ai,true)}}if(ad){ad(Y)}})}else{if(ad){ad(Y)}}},switchOffAutoHideShow:function(){n=false},ua:N,getFlashPlayerVersion:function(){return{major:N.pv[0],minor:N.pv[1],release:N.pv[2]}},hasFlashPlayerVersion:G,createSWF:function(aa,Z,Y){if(N.w3){return v(aa,Z,Y)}else{return undefined}},showExpressInstall:function(aa,ab,Y,Z){if(N.w3&&B()){Q(aa,ab,Y,Z)}},removeSWF:function(Y){if(N.w3){z(Y)}},createCSS:function(ab,aa,Z,Y){if(N.w3){w(ab,aa,Z,Y)}},addDomLoadEvent:L,addLoadEvent:t,getQueryParamValue:function(ab){var aa=k.location.search||k.location.hash;if(aa){if(/\?/.test(aa)){aa=aa.split("?")[1]}if(ab==null){return M(aa)}var Z=aa.split("&");for(var Y=0;Y<Z.length;Y++){if(Z[Y].substring(0,Z[Y].indexOf("="))==ab){return M(Z[Y].substring((Z[Y].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(b){var Y=d(S);if(Y&&m){Y.parentNode.replaceChild(m,Y);if(R){x(R,true);if(N.ie&&N.win){m.style.display="block"}}if(F){F(C)}}b=false}}}}();
/*!     rdio.jquery v0.1 <http://developer.rdio.com/>
  is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
  Copyright 2011 Rdio Inc.
*/
(function(c){c.fn.rdio=function b(d){var e=c(this);var l=e.data("rdio");if(l!=undefined){return l}var f="rdio_swf_"+Math.floor(Math.random()*10000);c("<div></div>").attr("id",f).prependTo(e);var m=f+"_cb";var h={};h.ready=function(n){e.trigger("ready.rdio",[n])};h.playStateChanged=function(n){e.trigger("playStateChanged.rdio",[n])};h.playingTrackChanged=function(o,n){e.trigger("playingTrackChanged.rdio",[o,n])};h.playingSourceChanged=function(n){e.trigger("playingSourceChanged.rdio",[n])};h.volumeChanged=function(n){e.trigger("volumeChanged.rdio",[n])};h.muteChanged=function(n){e.trigger("muteChanged.rdio",[n])};h.positionChanged=function(n){e.trigger("positionChanged.rdio",[n])};h.queueChanged=function(n){e.trigger("queueChanged.rdio",[n])};h.shuffleChanged=function(n){e.trigger("shuffleChanged.rdio",[n])};h.repeatChanged=function(n){e.trigger("repeatChanged.rdio",[n])};h.updateFrequencyData=function(n){e.trigger("updateFrequencyData.rdio",[n])};h.playingSomewhereElse=function(){e.trigger("playingSomewhereElse.rdio")};h.freeRemainingChanged=function(n){e.trigger("freeRemainingChanged.rdio",[frequencyData])};window[m]=h;var i={playbackToken:d,domain:document.domain,listener:m};var j={allowScriptAccess:"always"};var k={};var g={embed:null};a.embedSWF("http://www.rdio.com/api/swf/",f,1,1,"9.0.0","",i,j,k,function(n){g.embed=c("#"+f).get(0)});g.play=function(o,n){this.embed.rdio_play(o,n)};g.pause=function(){this.embed.rdio_pause()};g.stop=function(){this.embed.rdio_stop()};g.next=function(n){this.embed.rdio_next(n)};g.previous=function(){this.embed.rdio_previous()};g.seek=function(n){this.embed.rdio_seek(n)};g.setShuffle=function(n){this.embed.rdio_setShuffle(n)};g.setRepeat=function(n){this.embed.rdio_setRepeat(n)};g.queue=function(o,n){this.embed.rdio_queue(o,n)};g.setVolume=function(n){this.embed.rdio_setVolume(n)};g.setMute=function(n){this.embed.rdio_setMute(n)};g.playQueuedTrack=function(n,o){this.embed.rdio_playQueuedTrack(n,o)};g.moveQueuedSource=function(o,n){this.embed.rdio_moveQueuedSource(o,n)};g.clearQueue=function(){this.embed.rdio_clearQueue()};g.setCurrentPosition=function(n){this.embed.rdio_setCurrentPosition(n)};g.removeFromQueue=function(n){this.embed.rdio_removeFromQueue(n)};g.sendState=function(){this.embed.rdio_sendState()};g.startFrequencyAnalyzer=function(n){this.embed.rdio_startFrequencyAnalyzer(n)};g.stopFrequencyAnalyzer=function(){this.embed.rdio_stopFrequencyAnalyzer()};e.data("rdio",g);return g}})(jQuery)})();


// $(document).ready(function() {
//   alert('test')
// }

// (function(){
// /*!     SWFObject v2.2 <http://code.google.com/p/swfobject/>
//   is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
// */

// var swfobject = function() {

//   var UNDEF = "undefined",
//     OBJECT = "object",
//     SHOCKWAVE_FLASH = "Shockwave Flash",
//     SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
//     FLASH_MIME_TYPE = "application/x-shockwave-flash",
//     EXPRESS_INSTALL_ID = "SWFObjectExprInst",
//     ON_READY_STATE_CHANGE = "onreadystatechange",

//     win = window,
//     doc = document,
//     nav = navigator,

//     plugin = false,
//     domLoadFnArr = [main],
//     regObjArr = [],
//     objIdArr = [],
//     listenersArr = [],
//     storedAltContent,
//     storedAltContentId,
//     storedCallbackFn,
//     storedCallbackObj,
//     isDomLoaded = false,
//     isExpressInstallActive = false,
//     dynamicStylesheet,
//     dynamicStylesheetMedia,
//     autoHideShow = true,

//   /* Centralized function for browser feature detection
//     - User agent string detection is only used when no good alternative is possible
//     - Is executed directly for optimal performance
//   */
//   ua = function() {
//     var w3cdom = typeof doc.getElementById != UNDEF && typeof doc.getElementsByTagName != UNDEF && typeof doc.createElement != UNDEF,
//       u = nav.userAgent.toLowerCase(),
//       p = nav.platform.toLowerCase(),
//       windows = p ? /win/.test(p) : /win/.test(u),
//       mac = p ? /mac/.test(p) : /mac/.test(u),
//       webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, // returns either the webkit version or false if not webkit
//       ie = !+"\v1", // feature detection based on Andrea Giammarchi's solution: http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html
//       playerVersion = [0,0,0],
//       d = null;
//     if (typeof nav.plugins != UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] == OBJECT) {
//       d = nav.plugins[SHOCKWAVE_FLASH].description;
//       if (d && !(typeof nav.mimeTypes != UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) { // navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
//         plugin = true;
//         ie = false; // cascaded feature detection for Internet Explorer
//         d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
//         playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
//         playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
//         playerVersion[2] = /[a-zA-Z]/.test(d) ? parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
//       }
//     }
//     else if (typeof win.ActiveXObject != UNDEF) {
//       try {
//         var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
//         if (a) { // a will return null when ActiveX is disabled
//           d = a.GetVariable("$version");
//           if (d) {
//             ie = true; // cascaded feature detection for Internet Explorer
//             d = d.split(" ")[1].split(",");
//             playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
//           }
//         }
//       }
//       catch(e) {}
//     }
//     return { w3:w3cdom, pv:playerVersion, wk:webkit, ie:ie, win:windows, mac:mac };
//   }(),

//   /* Cross-browser onDomLoad
//     - Will fire an event as soon as the DOM of a web page is loaded
//     - Internet Explorer workaround based on Diego Perini's solution: http://javascript.nwbox.com/IEContentLoaded/
//     - Regular onload serves as fallback
//   */
//   onDomLoad = function() {
//     if (!ua.w3) { return; }
//     if ((typeof doc.readyState != UNDEF && doc.readyState == "complete") || (typeof doc.readyState == UNDEF && (doc.getElementsByTagName("body")[0] || doc.body))) { // function is fired after onload, e.g. when script is inserted dynamically
//       callDomLoadFunctions();
//     }
//     if (!isDomLoaded) {
//       if (typeof doc.addEventListener != UNDEF) {
//         doc.addEventListener("DOMContentLoaded", callDomLoadFunctions, false);
//       }
//       if (ua.ie && ua.win) {
//         doc.attachEvent(ON_READY_STATE_CHANGE, function() {
//           if (doc.readyState == "complete") {
//             doc.detachEvent(ON_READY_STATE_CHANGE, arguments.callee);
//             callDomLoadFunctions();
//           }
//         });
//         if (win == top) { // if not inside an iframe
//           (function(){
//             if (isDomLoaded) { return; }
//             try {
//               doc.documentElement.doScroll("left");
//             }
//             catch(e) {
//               setTimeout(arguments.callee, 0);
//               return;
//             }
//             callDomLoadFunctions();
//           })();
//         }
//       }
//       if (ua.wk) {
//         (function(){
//           if (isDomLoaded) { return; }
//           if (!/loaded|complete/.test(doc.readyState)) {
//             setTimeout(arguments.callee, 0);
//             return;
//           }
//           callDomLoadFunctions();
//         })();
//       }
//       addLoadEvent(callDomLoadFunctions);
//     }
//   }();

//   function callDomLoadFunctions() {
//     if (isDomLoaded) { return; }
//     try { // test if we can really add/remove elements to/from the DOM; we don't want to fire it too early
//       var t = doc.getElementsByTagName("body")[0].appendChild(createElement("span"));
//       t.parentNode.removeChild(t);
//     }
//     catch (e) { return; }
//     isDomLoaded = true;
//     var dl = domLoadFnArr.length;
//     for (var i = 0; i < dl; i++) {
//       domLoadFnArr[i]();
//     }
//   }

//   function addDomLoadEvent(fn) {
//     if (isDomLoaded) {
//       fn();
//     }
//     else {
//       domLoadFnArr[domLoadFnArr.length] = fn; // Array.push() is only available in IE5.5+
//     }
//   }

//   /* Cross-browser onload
//     - Based on James Edwards' solution: http://brothercake.com/site/resources/scripts/onload/
//     - Will fire an event as soon as a web page including all of its assets are loaded
//    */
//   function addLoadEvent(fn) {
//     if (typeof win.addEventListener != UNDEF) {
//       win.addEventListener("load", fn, false);
//     }
//     else if (typeof doc.addEventListener != UNDEF) {
//       doc.addEventListener("load", fn, false);
//     }
//     else if (typeof win.attachEvent != UNDEF) {
//       addListener(win, "onload", fn);
//     }
//     else if (typeof win.onload == "function") {
//       var fnOld = win.onload;
//       win.onload = function() {
//         fnOld();
//         fn();
//       };
//     }
//     else {
//       win.onload = fn;
//     }
//   }

//   /* Main function
//     - Will preferably execute onDomLoad, otherwise onload (as a fallback)
//   */
//   function main() {
//     if (plugin) {
//       testPlayerVersion();
//     }
//     else {
//       matchVersions();
//     }
//   }

//   /* Detect the Flash Player version for non-Internet Explorer browsers
//     - Detecting the plug-in version via the object element is more precise than using the plugins collection item's description:
//       a. Both release and build numbers can be detected
//       b. Avoid wrong descriptions by corrupt installers provided by Adobe
//       c. Avoid wrong descriptions by multiple Flash Player entries in the plugin Array, caused by incorrect browser imports
//     - Disadvantage of this method is that it depends on the availability of the DOM, while the plugins collection is immediately available
//   */
//   function testPlayerVersion() {
//     var b = doc.getElementsByTagName("body")[0];
//     var o = createElement(OBJECT);
//     o.setAttribute("type", FLASH_MIME_TYPE);
//     var t = b.appendChild(o);
//     if (t) {
//       var counter = 0;
//       (function(){
//         if (typeof t.GetVariable != UNDEF) {
//           var d = t.GetVariable("$version");
//           if (d) {
//             d = d.split(" ")[1].split(",");
//             ua.pv = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
//           }
//         }
//         else if (counter < 10) {
//           counter++;
//           setTimeout(arguments.callee, 10);
//           return;
//         }
//         b.removeChild(o);
//         t = null;
//         matchVersions();
//       })();
//     }
//     else {
//       matchVersions();
//     }
//   }

//   /* Perform Flash Player and SWF version matching; static publishing only
//   */
//   function matchVersions() {
//     var rl = regObjArr.length;
//     if (rl > 0) {
//       for (var i = 0; i < rl; i++) { // for each registered object element
//         var id = regObjArr[i].id;
//         var cb = regObjArr[i].callbackFn;
//         var cbObj = {success:false, id:id};
//         if (ua.pv[0] > 0) {
//           var obj = getElementById(id);
//           if (obj) {
//             if (hasPlayerVersion(regObjArr[i].swfVersion) && !(ua.wk && ua.wk < 312)) { // Flash Player version >= published SWF version: Houston, we have a match!
//               setVisibility(id, true);
//               if (cb) {
//                 cbObj.success = true;
//                 cbObj.ref = getObjectById(id);
//                 cb(cbObj);
//               }
//             }
//             else if (regObjArr[i].expressInstall && canExpressInstall()) { // show the Adobe Express Install dialog if set by the web page author and if supported
//               var att = {};
//               att.data = regObjArr[i].expressInstall;
//               att.width = obj.getAttribute("width") || "0";
//               att.height = obj.getAttribute("height") || "0";
//               if (obj.getAttribute("class")) { att.styleclass = obj.getAttribute("class"); }
//               if (obj.getAttribute("align")) { att.align = obj.getAttribute("align"); }
//               // parse HTML object param element's name-value pairs
//               var par = {};
//               var p = obj.getElementsByTagName("param");
//               var pl = p.length;
//               for (var j = 0; j < pl; j++) {
//                 if (p[j].getAttribute("name").toLowerCase() != "movie") {
//                   par[p[j].getAttribute("name")] = p[j].getAttribute("value");
//                 }
//               }
//               showExpressInstall(att, par, id, cb);
//             }
//             else { // Flash Player and SWF version mismatch or an older Webkit engine that ignores the HTML object element's nested param elements: display alternative content instead of SWF
//               displayAltContent(obj);
//               if (cb) { cb(cbObj); }
//             }
//           }
//         }
//         else {  // if no Flash Player is installed or the fp version cannot be detected we let the HTML object element do its job (either show a SWF or alternative content)
//           setVisibility(id, true);
//           if (cb) {
//             var o = getObjectById(id); // test whether there is an HTML object element or not
//             if (o && typeof o.SetVariable != UNDEF) {
//               cbObj.success = true;
//               cbObj.ref = o;
//             }
//             cb(cbObj);
//           }
//         }
//       }
//     }
//   }

//   function getObjectById(objectIdStr) {
//     var r = null;
//     var o = getElementById(objectIdStr);
//     if (o && o.nodeName == "OBJECT") {
//       if (typeof o.SetVariable != UNDEF) {
//         r = o;
//       }
//       else {
//         var n = o.getElementsByTagName(OBJECT)[0];
//         if (n) {
//           r = n;
//         }
//       }
//     }
//     return r;
//   }

//   /* Requirements for Adobe Express Install
//     - only one instance can be active at a time
//     - fp 6.0.65 or higher
//     - Win/Mac OS only
//     - no Webkit engines older than version 312
//   */
//   function canExpressInstall() {
//     return !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac) && !(ua.wk && ua.wk < 312);
//   }

//   /* Show the Adobe Express Install dialog
//     - Reference: http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=6a253b75
//   */
//   function showExpressInstall(att, par, replaceElemIdStr, callbackFn) {
//     isExpressInstallActive = true;
//     storedCallbackFn = callbackFn || null;
//     storedCallbackObj = {success:false, id:replaceElemIdStr};
//     var obj = getElementById(replaceElemIdStr);
//     if (obj) {
//       if (obj.nodeName == "OBJECT") { // static publishing
//         storedAltContent = abstractAltContent(obj);
//         storedAltContentId = null;
//       }
//       else { // dynamic publishing
//         storedAltContent = obj;
//         storedAltContentId = replaceElemIdStr;
//       }
//       att.id = EXPRESS_INSTALL_ID;
//       if (typeof att.width == UNDEF || (!/%$/.test(att.width) && parseInt(att.width, 10) < 310)) { att.width = "310"; }
//       if (typeof att.height == UNDEF || (!/%$/.test(att.height) && parseInt(att.height, 10) < 137)) { att.height = "137"; }
//       doc.title = doc.title.slice(0, 47) + " - Flash Player Installation";
//       var pt = ua.ie && ua.win ? "ActiveX" : "PlugIn",
//         fv = "MMredirectURL=" + win.location.toString().replace(/&/g,"%26") + "&MMplayerType=" + pt + "&MMdoctitle=" + doc.title;
//       if (typeof par.flashvars != UNDEF) {
//         par.flashvars += "&" + fv;
//       }
//       else {
//         par.flashvars = fv;
//       }
//       // IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
//       // because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
//       if (ua.ie && ua.win && obj.readyState != 4) {
//         var newObj = createElement("div");
//         replaceElemIdStr += "SWFObjectNew";
//         newObj.setAttribute("id", replaceElemIdStr);
//         obj.parentNode.insertBefore(newObj, obj); // insert placeholder div that will be replaced by the object element that loads expressinstall.swf
//         obj.style.display = "none";
//         (function(){
//           if (obj.readyState == 4) {
//             obj.parentNode.removeChild(obj);
//           }
//           else {
//             setTimeout(arguments.callee, 10);
//           }
//         })();
//       }
//       createSWF(att, par, replaceElemIdStr);
//     }
//   }

//   /* Functions to abstract and display alternative content
//   */
//   function displayAltContent(obj) {
//     if (ua.ie && ua.win && obj.readyState != 4) {
//       // IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
//       // because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
//       var el = createElement("div");
//       obj.parentNode.insertBefore(el, obj); // insert placeholder div that will be replaced by the alternative content
//       el.parentNode.replaceChild(abstractAltContent(obj), el);
//       obj.style.display = "none";
//       (function(){
//         if (obj.readyState == 4) {
//           obj.parentNode.removeChild(obj);
//         }
//         else {
//           setTimeout(arguments.callee, 10);
//         }
//       })();
//     }
//     else {
//       obj.parentNode.replaceChild(abstractAltContent(obj), obj);
//     }
//   }

//   function abstractAltContent(obj) {
//     var ac = createElement("div");
//     if (ua.win && ua.ie) {
//       ac.innerHTML = obj.innerHTML;
//     }
//     else {
//       var nestedObj = obj.getElementsByTagName(OBJECT)[0];
//       if (nestedObj) {
//         var c = nestedObj.childNodes;
//         if (c) {
//           var cl = c.length;
//           for (var i = 0; i < cl; i++) {
//             if (!(c[i].nodeType == 1 && c[i].nodeName == "PARAM") && !(c[i].nodeType == 8)) {
//               ac.appendChild(c[i].cloneNode(true));
//             }
//           }
//         }
//       }
//     }
//     return ac;
//   }

//   /* Cross-browser dynamic SWF creation
//   */
//   function createSWF(attObj, parObj, id) {
//     var r, el = getElementById(id);
//     if (ua.wk && ua.wk < 312) { return r; }
//     if (el) {
//       if (typeof attObj.id == UNDEF) { // if no 'id' is defined for the object element, it will inherit the 'id' from the alternative content
//         attObj.id = id;
//       }
//       if (ua.ie && ua.win) { // Internet Explorer + the HTML object element + W3C DOM methods do not combine: fall back to outerHTML
//         var att = "";
//         for (var i in attObj) {
//           if (attObj[i] != Object.prototype[i]) { // filter out prototype additions from other potential libraries
//             if (i.toLowerCase() == "data") {
//               parObj.movie = attObj[i];
//             }
//             else if (i.toLowerCase() == "styleclass") { // 'class' is an ECMA4 reserved keyword
//               att += ' class="' + attObj[i] + '"';
//             }
//             else if (i.toLowerCase() != "classid") {
//               att += ' ' + i + '="' + attObj[i] + '"';
//             }
//           }
//         }
//         var par = "";
//         for (var j in parObj) {
//           if (parObj[j] != Object.prototype[j]) { // filter out prototype additions from other potential libraries
//             par += '<param name="' + j + '" value="' + parObj[j] + '" />';
//           }
//         }
//         el.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + att + '>' + par + '</object>';
//         objIdArr[objIdArr.length] = attObj.id; // stored to fix object 'leaks' on unload (dynamic publishing only)
//         r = getElementById(attObj.id);
//       }
//       else { // well-behaving browsers
//         var o = createElement(OBJECT);
//         o.setAttribute("type", FLASH_MIME_TYPE);
//         for (var m in attObj) {
//           if (attObj[m] != Object.prototype[m]) { // filter out prototype additions from other potential libraries
//             if (m.toLowerCase() == "styleclass") { // 'class' is an ECMA4 reserved keyword
//               o.setAttribute("class", attObj[m]);
//             }
//             else if (m.toLowerCase() != "classid") { // filter out IE specific attribute
//               o.setAttribute(m, attObj[m]);
//             }
//           }
//         }
//         for (var n in parObj) {
//           if (parObj[n] != Object.prototype[n] && n.toLowerCase() != "movie") { // filter out prototype additions from other potential libraries and IE specific param element
//             createObjParam(o, n, parObj[n]);
//           }
//         }
//         el.parentNode.replaceChild(o, el);
//         r = o;
//       }
//     }
//     return r;
//   }

//   function createObjParam(el, pName, pValue) {
//     var p = createElement("param");
//     p.setAttribute("name", pName);
//     p.setAttribute("value", pValue);
//     el.appendChild(p);
//   }

//   /* Cross-browser SWF removal
//     - Especially needed to safely and completely remove a SWF in Internet Explorer
//   */
//   function removeSWF(id) {
//     var obj = getElementById(id);
//     if (obj && obj.nodeName == "OBJECT") {
//       if (ua.ie && ua.win) {
//         obj.style.display = "none";
//         (function(){
//           if (obj.readyState == 4) {
//             removeObjectInIE(id);
//           }
//           else {
//             setTimeout(arguments.callee, 10);
//           }
//         })();
//       }
//       else {
//         obj.parentNode.removeChild(obj);
//       }
//     }
//   }

//   function removeObjectInIE(id) {
//     var obj = getElementById(id);
//     if (obj) {
//       for (var i in obj) {
//         if (typeof obj[i] == "function") {
//           obj[i] = null;
//         }
//       }
//       obj.parentNode.removeChild(obj);
//     }
//   }

//   /* Functions to optimize JavaScript compression
//   */
//   function getElementById(id) {
//     var el = null;
//     try {
//       el = doc.getElementById(id);
//     }
//     catch (e) {}
//     return el;
//   }

//   function createElement(el) {
//     return doc.createElement(el);
//   }

//   /* Updated attachEvent function for Internet Explorer
//     - Stores attachEvent information in an Array, so on unload the detachEvent functions can be called to avoid memory leaks
//   */
//   function addListener(target, eventType, fn) {
//     target.attachEvent(eventType, fn);
//     listenersArr[listenersArr.length] = [target, eventType, fn];
//   }

//   /* Flash Player and SWF content version matching
//   */
//   function hasPlayerVersion(rv) {
//     var pv = ua.pv, v = rv.split(".");
//     v[0] = parseInt(v[0], 10);
//     v[1] = parseInt(v[1], 10) || 0; // supports short notation, e.g. "9" instead of "9.0.0"
//     v[2] = parseInt(v[2], 10) || 0;
//     return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
//   }

//   /* Cross-browser dynamic CSS creation
//     - Based on Bobby van der Sluis' solution: http://www.bobbyvandersluis.com/articles/dynamicCSS.php
//   */
//   function createCSS(sel, decl, media, newStyle) {
//     if (ua.ie && ua.mac) { return; }
//     var h = doc.getElementsByTagName("head")[0];
//     if (!h) { return; } // to also support badly authored HTML pages that lack a head element
//     var m = (media && typeof media == "string") ? media : "screen";
//     if (newStyle) {
//       dynamicStylesheet = null;
//       dynamicStylesheetMedia = null;
//     }
//     if (!dynamicStylesheet || dynamicStylesheetMedia != m) {
//       // create dynamic stylesheet + get a global reference to it
//       var s = createElement("style");
//       s.setAttribute("type", "text/css");
//       s.setAttribute("media", m);
//       dynamicStylesheet = h.appendChild(s);
//       if (ua.ie && ua.win && typeof doc.styleSheets != UNDEF && doc.styleSheets.length > 0) {
//         dynamicStylesheet = doc.styleSheets[doc.styleSheets.length - 1];
//       }
//       dynamicStylesheetMedia = m;
//     }
//     // add style rule
//     if (ua.ie && ua.win) {
//       if (dynamicStylesheet && typeof dynamicStylesheet.addRule == OBJECT) {
//         dynamicStylesheet.addRule(sel, decl);
//       }
//     }
//     else {
//       if (dynamicStylesheet && typeof doc.createTextNode != UNDEF) {
//         dynamicStylesheet.appendChild(doc.createTextNode(sel + " {" + decl + "}"));
//       }
//     }
//   }

//   function setVisibility(id, isVisible) {
//     if (!autoHideShow) { return; }
//     var v = isVisible ? "visible" : "hidden";
//     if (isDomLoaded && getElementById(id)) {
//       getElementById(id).style.visibility = v;
//     }
//     else {
//       createCSS("#" + id, "visibility:" + v);
//     }
//   }

//   /* Filter to avoid XSS attacks
//   */
//   function urlEncodeIfNecessary(s) {
//     var regex = /[\\\"<>\.;]/;
//     var hasBadChars = regex.exec(s) != null;
//     return hasBadChars && typeof encodeURIComponent != UNDEF ? encodeURIComponent(s) : s;
//   }

//   /* Release memory to avoid memory leaks caused by closures, fix hanging audio/video threads and force open sockets/NetConnections to disconnect (Internet Explorer only)
//   */
//   var cleanup = function() {
//     if (ua.ie && ua.win) {
//       window.attachEvent("onunload", function() {
//         // remove listeners to avoid memory leaks
//         var ll = listenersArr.length;
//         for (var i = 0; i < ll; i++) {
//           listenersArr[i][0].detachEvent(listenersArr[i][1], listenersArr[i][2]);
//         }
//         // cleanup dynamically embedded objects to fix audio/video threads and force open sockets and NetConnections to disconnect
//         var il = objIdArr.length;
//         for (var j = 0; j < il; j++) {
//           removeSWF(objIdArr[j]);
//         }
//         // cleanup library's main closures to avoid memory leaks
//         for (var k in ua) {
//           ua[k] = null;
//         }
//         ua = null;
//         for (var l in swfobject) {
//           swfobject[l] = null;
//         }
//         swfobject = null;
//       });
//     }
//   }();

//   return {
//     /* Public API
//       - Reference: http://code.google.com/p/swfobject/wiki/documentation
//     */
//     registerObject: function(objectIdStr, swfVersionStr, xiSwfUrlStr, callbackFn) {
//       if (ua.w3 && objectIdStr && swfVersionStr) {
//         var regObj = {};
//         regObj.id = objectIdStr;
//         regObj.swfVersion = swfVersionStr;
//         regObj.expressInstall = xiSwfUrlStr;
//         regObj.callbackFn = callbackFn;
//         regObjArr[regObjArr.length] = regObj;
//         setVisibility(objectIdStr, false);
//       }
//       else if (callbackFn) {
//         callbackFn({success:false, id:objectIdStr});
//       }
//     },

//     getObjectById: function(objectIdStr) {
//       if (ua.w3) {
//         return getObjectById(objectIdStr);
//       }
//     },

//     embedSWF: function(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, parObj, attObj, callbackFn) {
//       var callbackObj = {success:false, id:replaceElemIdStr};
//       if (ua.w3 && !(ua.wk && ua.wk < 312) && swfUrlStr && replaceElemIdStr && widthStr && heightStr && swfVersionStr) {
//         setVisibility(replaceElemIdStr, false);
//         addDomLoadEvent(function() {
//           widthStr += ""; // auto-convert to string
//           heightStr += "";
//           var att = {};
//           if (attObj && typeof attObj === OBJECT) {
//             for (var i in attObj) { // copy object to avoid the use of references, because web authors often reuse attObj for multiple SWFs
//               att[i] = attObj[i];
//             }
//           }
//           att.data = swfUrlStr;
//           att.width = widthStr;
//           att.height = heightStr;
//           var par = {};
//           if (parObj && typeof parObj === OBJECT) {
//             for (var j in parObj) { // copy object to avoid the use of references, because web authors often reuse parObj for multiple SWFs
//               par[j] = parObj[j];
//             }
//           }
//           if (flashvarsObj && typeof flashvarsObj === OBJECT) {
//             for (var k in flashvarsObj) { // copy object to avoid the use of references, because web authors often reuse flashvarsObj for multiple SWFs
//               if (typeof par.flashvars != UNDEF) {
//                 par.flashvars += "&" + k + "=" + flashvarsObj[k];
//               }
//               else {
//                 par.flashvars = k + "=" + flashvarsObj[k];
//               }
//             }
//           }
//           if (hasPlayerVersion(swfVersionStr)) { // create SWF
//             var obj = createSWF(att, par, replaceElemIdStr);
//             if (att.id == replaceElemIdStr) {
//               setVisibility(replaceElemIdStr, true);
//             }
//             callbackObj.success = true;
//             callbackObj.ref = obj;
//           }
//           else if (xiSwfUrlStr && canExpressInstall()) { // show Adobe Express Install
//             att.data = xiSwfUrlStr;
//             showExpressInstall(att, par, replaceElemIdStr, callbackFn);
//             return;
//           }
//           else { // show alternative content
//             setVisibility(replaceElemIdStr, true);
//           }
//           if (callbackFn) { callbackFn(callbackObj); }
//         });
//       }
//       else if (callbackFn) { callbackFn(callbackObj);   }
//     },

//     switchOffAutoHideShow: function() {
//       autoHideShow = false;
//     },

//     ua: ua,

//     getFlashPlayerVersion: function() {
//       return { major:ua.pv[0], minor:ua.pv[1], release:ua.pv[2] };
//     },

//     hasFlashPlayerVersion: hasPlayerVersion,

//     createSWF: function(attObj, parObj, replaceElemIdStr) {
//       if (ua.w3) {
//         return createSWF(attObj, parObj, replaceElemIdStr);
//       }
//       else {
//         return undefined;
//       }
//     },

//     showExpressInstall: function(att, par, replaceElemIdStr, callbackFn) {
//       if (ua.w3 && canExpressInstall()) {
//         showExpressInstall(att, par, replaceElemIdStr, callbackFn);
//       }
//     },

//     removeSWF: function(objElemIdStr) {
//       if (ua.w3) {
//         removeSWF(objElemIdStr);
//       }
//     },

//     createCSS: function(selStr, declStr, mediaStr, newStyleBoolean) {
//       if (ua.w3) {
//         createCSS(selStr, declStr, mediaStr, newStyleBoolean);
//       }
//     },

//     addDomLoadEvent: addDomLoadEvent,

//     addLoadEvent: addLoadEvent,

//     getQueryParamValue: function(param) {
//       var q = doc.location.search || doc.location.hash;
//       if (q) {
//         if (/\?/.test(q)) { q = q.split("?")[1]; } // strip question mark
//         if (param == null) {
//           return urlEncodeIfNecessary(q);
//         }
//         var pairs = q.split("&");
//         for (var i = 0; i < pairs.length; i++) {
//           if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
//             return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=") + 1)));
//           }
//         }
//       }
//       return "";
//     },

//     // For internal usage only
//     expressInstallCallback: function() {
//       if (isExpressInstallActive) {
//         var obj = getElementById(EXPRESS_INSTALL_ID);
//         if (obj && storedAltContent) {
//           obj.parentNode.replaceChild(storedAltContent, obj);
//           if (storedAltContentId) {
//             setVisibility(storedAltContentId, true);
//             if (ua.ie && ua.win) { storedAltContent.style.display = "block"; }
//           }
//           if (storedCallbackFn) { storedCallbackFn(storedCallbackObj); }
//         }
//         isExpressInstallActive = false;
//       }
//     }
//   };
// }();
// /*!     rdio.jquery v0.1 <http://developer.rdio.com/>
//   is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
//   Copyright 2011 Rdio Inc.
// */

// (function($) {
//   $.fn.rdio = function jQuery_fn_rdio(playbackToken) {
//     var container = $(this);
//     var rdio = container.data('rdio');
//     if (rdio != undefined) {
//       return rdio;
//     }
//     // create an ID for the EMBED / OBJECT
//     var id = 'rdio_swf_'+Math.floor(Math.random()*10000);
//     // add a placeholder that SWFObject will replace
//     $('<div></div>').attr('id', id).prependTo(container);

//     // create a name for the listener
//     var listener_name = id + '_cb';
//     // build a listener that turns callbacks into jQuery events
//     var listener = {};
//     listener.ready = function(userInfo) { container.trigger('ready.rdio', [userInfo])};
//     listener.playStateChanged = function(playState) { container.trigger('playStateChanged.rdio', [playState])};
//     listener.playingTrackChanged = function(playingTrack, sourcePosition) { container.trigger('playingTrackChanged.rdio', [playingTrack, sourcePosition])};
//     listener.playingSourceChanged = function(playingSource) { container.trigger('playingSourceChanged.rdio', [playingSource])};
//     listener.volumeChanged = function(volume) { container.trigger('volumeChanged.rdio', [volume])};
//     listener.muteChanged = function(mute) { container.trigger('muteChanged.rdio', [mute])};
//     listener.positionChanged = function(position) { container.trigger('positionChanged.rdio', [position])};
//     listener.queueChanged = function(newQueue) { container.trigger('queueChanged.rdio', [newQueue])};
//     listener.shuffleChanged = function(shuffle) { container.trigger('shuffleChanged.rdio', [shuffle])};
//     listener.repeatChanged = function(repeat) { container.trigger('repeatChanged.rdio', [repeat])};
//     listener.updateFrequencyData = function(frequencyData) { container.trigger('updateFrequencyData.rdio', [frequencyData])};
//     listener.playingSomewhereElse = function() { container.trigger('playingSomewhereElse.rdio')};
//     listener.freeRemainingChanged = function(remaining) { container.trigger('freeRemainingChanged.rdio', [frequencyData])};
//     window[listener_name] = listener;

//     // get SWFObject to embed the playback SWF
//     var flashvars = {
//       'playbackToken': playbackToken,
//       'domain': document.domain,
//       'listener': listener_name
//     };
//     var params = {'allowScriptAccess': 'always'};
//     var attributes = {};
//     var o = {'embed': null};
//     swfobject.embedSWF('http://www.rdio.com/api/swf/', id, 1, 1, '9.0.0', '', flashvars, params, attributes, function(status) {o.embed = $('#'+id).get(0);});

//     // build a wrapper object to dispatch method calls into the SWF
//     o.play = function(key, options) { this.embed.rdio_play(key, options); };
//     o.pause = function() { this.embed.rdio_pause(); };
//     o.stop = function() { this.embed.rdio_stop(); };
//     o.next = function(superSkip) { this.embed.rdio_next(superSkip); };
//     o.previous = function() { this.embed.rdio_previous(); };
//     o.seek = function(position) { this.embed.rdio_seek(position); };
//     o.setShuffle = function(shuffle) { this.embed.rdio_setShuffle(shuffle); };
//     o.setRepeat = function(mode) { this.embed.rdio_setRepeat(mode); };
//     o.queue = function(key, options) { this.embed.rdio_queue(key, options); };
//     o.setVolume = function(volume) { this.embed.rdio_setVolume(volume); };
//     o.setMute = function(mute) { this.embed.rdio_setMute(mute); };
//     o.playQueuedTrack = function(position, offset) { this.embed.rdio_playQueuedTrack(position, offset); };
//     o.moveQueuedSource = function(from, to) { this.embed.rdio_moveQueuedSource(from, to); };
//     o.clearQueue = function() { this.embed.rdio_clearQueue(); };
//     o.setCurrentPosition = function(sourceIndex) { this.embed.rdio_setCurrentPosition(sourceIndex); };
//     o.removeFromQueue = function(sourceIndex) { this.embed.rdio_removeFromQueue(sourceIndex); };
//     o.sendState = function() { this.embed.rdio_sendState(); };
//     o.startFrequencyAnalyzer = function(options) { this.embed.rdio_startFrequencyAnalyzer(options); };
//     o.stopFrequencyAnalyzer = function() { this.embed.rdio_stopFrequencyAnalyzer(); };

//     // store it on the container element
//     container.data('rdio', o);

//     return o;
//   }

// })(jQuery);
// })();
