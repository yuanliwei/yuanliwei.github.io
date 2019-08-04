//var Filed, Modifiers, StringUtil;

const StringUtil = require('../../js/utils/StringUtil');

const Modifiers = require('./Modifiers');

var Filed = (function() {

  /*
  0x01:private
  0x02:public
  0x04:protect
  0x08:final
  0x10:static
   */
  function Filed(type, name, value1, comment) {
    this.name = name;
    this.value = value1;
    this.comment = comment;
    this.annotations = [];
    this.modifier = Modifiers["private"];
    this.type = type || 'String';
  }


  /*
  private String name = "value"; // this is comment
   */

  Filed.prototype.fromSource = function(source) {
    var i, items, strs;
    source = source.trim();
    i = source.indexOf('//');
    if (i > 3) {
      if (i > 3) {
        this.comment = source.substr(i + 2).trim();
      }
      source = source.substr(0, i).trim();
    }
    i = source.indexOf('=');
    if (i > 3) {
      strs = source.split('=');
      this.value = strs[1].replace(/[\\"|\s|;]/g, '');
      source = strs[0].trim();
    }
    source = source.replace(';', '').trim();
    this.type = false;
    this.modifier = 0;
    items = source.split(/\s+/g);
    items.forEach((function(_this) {
      return function(item) {
        var value;
        if (item in Modifiers) {
          value = Modifiers[item];
          return _this.modifier += value;
        } else if (!_this.type) {
          return _this.type = item;
        } else {
          return _this.name = item;
        }
      };
    })(this));
    if (!this.name) {
      return false;
    }
    if (this.name.match(/^[A-Za-z0-9_]+$/) != null) {
      return this;
    } else {
      return false;
    }
  };


  /*
  private String name = "value"; // this is comment
  private String name = "value";
  private String name; // this is comment
  private String name;
   */

  Filed.prototype.toSource = function(buffer) {
    var tem;
    tem = '{0} {1} {2}{3};{4}';
    return buffer.push(StringUtil.formatStr(tem, this.getModifier(), this.type, this.name, this.getValue(), this.getComment()));
  };


  /*
  public void setName(String name) {
    this.name = name
  }
   */

  Filed.prototype.toSetter = function(buffer) {
    var tem;
    tem = "public void set{0}({1} {2}) {\n  this.{2} = {2};\n}";
    return buffer.push(StringUtil.formatStr(tem, StringUtil.upperBegin(this.name), this.type, this.name));
  };


  /*
  public String getName() {
    return this.name;
  }
   */

  Filed.prototype.toGetter = function(buffer) {
    var tem;
    tem = "public {0} get{1}() {\n  return this.{2};\n}";
    return buffer.push(StringUtil.formatStr(tem, this.type, StringUtil.upperBegin(this.name), this.name));
  };

  Filed.prototype.getValue = function() {
    if (!this.value) {
      return "";
    } else if (this.type === 'String') {
      return " = \"" + this.value + "\"";
    } else {
      return " = " + this.value;
    }
  };

  Filed.prototype.getComment = function() {
    if (!this.comment) {
      return "";
    } else {
      return " // " + this.comment;
    }
  };

  Filed.prototype.getModifier = function() {
    var key, mdf;
    mdf = [];
    for (key in Modifiers) {
      if ((parseInt(key) & this.modifier) > 0) {
        mdf.push(Modifiers[key]);
      }
    }
    return mdf.join(' ');
  };

  Filed.prototype.toString = function() {
    var buffer;
    buffer = [];
    this.toSource(buffer);
    return buffer[0];
  };

  return Filed;

})();

module.exports = Filed