//var Class, Modifiers, async, format;

//async = require('async');

//format = require('string-format');

//format.extend(String.prototype);

const Modifiers = require('./Modifiers');

var ClassModel = (function() {
  function ClassModel() {
    this["package"] = '';
    this.name = 'Class';
    this.fileds = [];
    this.innerClass = [];
    this.genGetter = false;
    this.genSetter = false;
  }

  ClassModel.prototype.toSource = function(builder) {
    this.genPackage(builder);
    this.genClassName(builder);
    this.genStaticFiled(builder);
    this.genNormalFiled(builder);
    this.insertOtherCode(builder);
    this.genInnerClass(builder);
    this.genGetterSetter(builder);
    return this.genCloseClass(builder);
  };

  ClassModel.prototype.genPackage = function(builder) {
    var tem;
    tem = "package {0};";
    if (this["package"] && this["package"].trim().length > 0) {
      return builder.push(tem.format(this["package"]));
    }
  };

  ClassModel.prototype.genClassName = function(builder) {
    var tem;
    tem = "public class {0} {";
    return builder.push(tem.format(this.name));
  };

  ClassModel.prototype.genStaticFiled = function(builder) {
    return this.fileds.forEach(function(filed) {
      if ((filed.modifier & Modifiers["static"]) > 0) {
        return filed.toSource(builder);
      }
    });
  };

  ClassModel.prototype.genNormalFiled = function(builder) {
    return this.fileds.forEach(function(filed) {
      if ((filed.modifier & Modifiers["static"]) === 0) {
        return filed.toSource(builder);
      }
    });
  };

  ClassModel.prototype.insertOtherCode = function(builder) {
    return console.log("implament in sub class");
  };

  ClassModel.prototype.genInnerClass = function(builder) {
    return this.innerClass.forEach(function(model) {
      return model.toSource(builder);
    });
  };

  ClassModel.prototype.genGetterSetter = function(builder) {
    return this.fileds.forEach((function(_this) {
      return function(filed) {
        if ((filed.modifier & (Modifiers["static"] | Modifiers.final | Modifiers["public"])) === 0) {
          if (_this.genSetter) {
            filed.toSetter(builder);
          }
          if (_this.genGetter) {
            return filed.toGetter(builder);
          }
        }
      };
    })(this));
  };

  ClassModel.prototype.genCloseClass = function(builder) {
    return builder.push('}');
  };

  return ClassModel;

})();

module.exports = ClassModel