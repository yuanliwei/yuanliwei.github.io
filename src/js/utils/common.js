var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

format.extend(String.prototype);
String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};

String.prototype.startsWith = function(str) {
	return (this.match("^" + str) == str)
};

String.prototype.endsWith = function(str) {
	return (this.match(str + "$") == str)
};
String.prototype.repeat = function(num) {
	var str = '';
	for (var i = 0; i < num; i++) {
		str += this;
	}
	return str;
};

