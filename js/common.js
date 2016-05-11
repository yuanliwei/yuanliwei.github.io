var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;
  
var ckEvent = 'touchend';
var ckTouchStart = 'touchstart';
var ckTouchMove = 'touchmove';
try {
	ontouchstart;
} catch (e) {
	ckEvent = 'click';
	ckTouchStart = 'click';
	ckTouchMove = 'click';
}

var cancleClick = false;
// 取消浏览器的所有事件，使得active的样式在手机上正常生效
document.addEventListener('touchstart', function() {
	cancleClick = false;
	return false;
}, false);
document.addEventListener('touchmove', function() {
	cancleClick = true;
}, false);
document.addEventListener('mousedown', function() {
	cancleClick = false;
}, false);

String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};

String.prototype.startsWith = function(str) {
	return (this.match("^" + str) == str)
};

String.prototype.endsWith = function(str) {
	return (this.match(str + "$") == str)
};
String.prototype.format = function() {
	var args = arguments;
	return this.replace(/{(\d+)}/g, function(match, number) {
		return typeof args[number] != 'undefined' ? args[number] : match;
	});
};
String.prototype.repeat = function(num) {
	var str = '';
	for (var i = 0; i < num; i++) {
		str += this;
	}
	return str;
};

