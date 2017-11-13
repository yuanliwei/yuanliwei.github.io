/* https://github.com/lahmatiy/es6-promise-polyfill */
(function(t){function z(){for(var a=0;a<g.length;a++)g[a][0](g[a][1]);g=[];m=!1}function n(a,b){g.push([a,b]);m||(m=!0,A(z,0))}function B(a,b){function c(a){p(b,a)}function h(a){k(b,a)}try{a(c,h)}catch(d){h(d)}}function u(a){var b=a.owner,c=b.state_,b=b.data_,h=a[c];a=a.then;if("function"===typeof h){c=l;try{b=h(b)}catch(d){k(a,d)}}v(a,b)||(c===l&&p(a,b),c===q&&k(a,b))}function v(a,b){var c;try{if(a===b)throw new TypeError("A promises callback cannot return that same promise.");if(b&&("function"===
typeof b||"object"===typeof b)){var h=b.then;if("function"===typeof h)return h.call(b,function(d){c||(c=!0,b!==d?p(a,d):w(a,d))},function(b){c||(c=!0,k(a,b))}),!0}}catch(d){return c||k(a,d),!0}return!1}function p(a,b){a!==b&&v(a,b)||w(a,b)}function w(a,b){a.state_===r&&(a.state_=x,a.data_=b,n(C,a))}function k(a,b){a.state_===r&&(a.state_=x,a.data_=b,n(D,a))}function y(a){var b=a.then_;a.then_=void 0;for(a=0;a<b.length;a++)u(b[a])}function C(a){a.state_=l;y(a)}function D(a){a.state_=q;y(a)}function e(a){if("function"!==
typeof a)throw new TypeError("Promise constructor takes a function argument");if(!1===this instanceof e)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[];B(a,this)}var f=t.Promise,s=f&&"resolve"in f&&"reject"in f&&"all"in f&&"race"in f&&function(){var a;new f(function(b){a=b});return"function"===typeof a}();"undefined"!==typeof exports&&exports?(exports.Promise=s?f:e,exports.Polyfill=e):"function"==
typeof define&&define.amd?define(function(){return s?f:e}):s||(t.Promise=e);var r="pending",x="sealed",l="fulfilled",q="rejected",E=function(){},A="undefined"!==typeof setImmediate?setImmediate:setTimeout,g=[],m;e.prototype={constructor:e,state_:r,then_:null,data_:void 0,then:function(a,b){var c={owner:this,then:new this.constructor(E),fulfilled:a,rejected:b};this.state_===l||this.state_===q?n(u,c):this.then_.push(c);return c.then},"catch":function(a){return this.then(null,a)}};e.all=function(a){if("[object Array]"!==
Object.prototype.toString.call(a))throw new TypeError("You must pass an array to Promise.all().");return new this(function(b,c){function h(a){e++;return function(c){d[a]=c;--e||b(d)}}for(var d=[],e=0,f=0,g;f<a.length;f++)(g=a[f])&&"function"===typeof g.then?g.then(h(f),c):d[f]=g;e||b(d)})};e.race=function(a){if("[object Array]"!==Object.prototype.toString.call(a))throw new TypeError("You must pass an array to Promise.race().");return new this(function(b,c){for(var e=0,d;e<a.length;e++)(d=a[e])&&"function"===
typeof d.then?d.then(b,c):b(d)})};e.resolve=function(a){return a&&"object"===typeof a&&a.constructor===this?a:new this(function(b){b(a)})};e.reject=function(a){
return new this(function(b,c){c(a)})}})("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this);

/* generate by https://babeljs.io/repl/ */
var Load = (function () {
  'use strict';
  var _createClass=function(){function a(b,c){for(var f,d=0;d<c.length;d++)f=c[d],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var LoadES6=function(){function a(b){return _classCallCheck(this,a),this.promise=b||Promise.resolve(),this}return _createClass(a,[{key:'load',value:function load(){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c]);return this.promise=this.promise.then(function(){console.log('load:'+JSON.stringify(b));var d=a.getLoadPromises(b);return Promise.all(d).catch(function(f){return console.error(f)})}),new a(this.promise)}},{key:'then',value:function then(b,c){return this.promise=this.promise.then(function(d){return new Promise(function(f){c?b(f,d):(d=b(d),f(d))}).catch(function(f){return console.error(f)})}),new a(this.promise)}},{key:'wait',value:function wait(b){return this.then(function(c){setTimeout(c,b)},!0)}},{key:'hide',value:function hide(b){return b=b||'body',this.then(function(){document.querySelector(b).style.display='none'})}},{key:'show',value:function show(b){return b=b||'body',this.then(function(){document.querySelector(b).style.display=''})}}],[{key:'config',value:function config(b){Object.assign(a.configuration,b)}},{key:'getLoadPromises',value:function getLoadPromises(b){var c=a.getUrls(b),d=c.map(function(f){return new Promise(function(g){var j=a.parseType(f);'js'===j?a.loadScript(f,g):'css'===j?a.loadLink(f,g):console.error('unknow type! '+f)})});return d}},{key:'loadScript',value:function loadScript(b,c){var d=document.createElement('script');d.type='text/javascript',d.charset='utf-8',d.async=!0,d.src=b,a.appendNode(d,b,c)}},{key:'loadLink',value:function loadLink(b,c){var d=document.createElement('link');d.rel='stylesheet',d.href=b,a.appendNode(d,b,c)}},{key:'getUrls',value:function getUrls(b){var c=[];return'string'==typeof b&&(b=[b]),b.map(function(d){var f=a.configuration[d];f?c=c.concat(f):c.push(d)}),c}},{key:'appendNode',value:function appendNode(b,c,d){return a.loaded[c]?void d():void(b.onload=function(){a.loaded[c]=!0,d()},b.onerror=function(f){console.error(JSON.stringify(f)),d()},document.head.appendChild(b))}},{key:'parseType',value:function parseType(b){var c=b.split('?'),d=c[0].split('.'),f=d[d.length-1];return f.toLowerCase()}}]),a}();LoadES6.loaded={},LoadES6.configuration={};
  return LoadES6;
})();
