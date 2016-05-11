//var ClassModel, DbCLassModel, DbFiled, Filed, Fileds2Java, Modifiers, StringUtil,

//ClassModel = require('../model/class-model');

//Modifiers = require('../model/modifiers');

//Filed = require('../model/filed');

//StringUtil = require('../utils/string-util');


/*
Fileds 转 Java model
使用：
    Fileds2Java = require './filed-java-db-ormlite'
    fileds2Java = new Fileds2Java()
    opts = {
      packageName: 'com.ylw.generate.spec' # [option]
      className: 'TestClassSpec'           # [require]
      genSetter: true                      # [option default true]
      genGetter: true                      # [option default true]
    }
    filedStr = """
        private String schoolName; // "语音风暴"
        private String studentName; // "老师3"
        private int userType; // 1030410
        """
    javaSrc = fileds2Java.toJava filedStr, opts
    console.log javaSrc
 */

var Fileds2Java = (function() {
  function Fileds2Java() {
    this.className = 'ClassName';
    this.genSetter = true;
    this.genGetter = true;
    this.genInnerClass = false;
  }

  Fileds2Java.prototype.toJava = function(filedStr, opts) {
    var b_java_src, builder, fileds, java_src, jsBeautify, model;
    if ('packageName' in opts) {
      this.packageName = opts.packageName;
    }
    if ('className' in opts) {
      this.className = opts.className;
    }
    if ('genSetter' in opts) {
      this.genSetter = opts.genSetter;
    }
    if ('genGetter' in opts) {
      this.genGetter = opts.genGetter;
    }
    if ('genInnerClass' in opts) {
      this.genInnerClass = opts.genInnerClass;
    }
    model = this.getModel(this.className);
    model["package"] = this.packageName;
    fileds = filedStr.trim().split(/\n/g);
    console.dir(fileds);
    if (!((fileds != null ? fileds.length : void 0) > 0)) {
      return "fileds is null";
    }
    fileds.forEach(function(item) {
      var filed, result;
      filed = new DbFiled();
      result = filed.fromSource(item);
      if (result) {
        return model.fileds.push(filed);
      }
    });
    builder = [];
    model.toSource(builder);
    java_src = builder.join('\n');
    return js_beautify(java_src, {});
  };

  Fileds2Java.prototype.getModel = function(name) {
    var model;
    model = new DbCLassModel();
    model.name = name;
    model.genGetter = this.genGetter;
    model.genSetter = this.genSetter;
    return model;
  };

  var DbCLassModel = (function(superClass) {
    extend(DbCLassModel, superClass);

    function DbCLassModel() {
      return DbCLassModel.__super__.constructor.apply(this, arguments);
    }

    DbCLassModel.prototype.genClassName = function(builder) {
      var tableName, tem;
      tem = '@DatabaseTable(tableName = "{0}")';
      tableName = StringUtil.format(this.name, 3);
      builder.push(tem.format(tableName));
      return DbCLassModel.__super__.genClassName.call(this, builder);
    };

    DbCLassModel.prototype.genNormalFiled = function(builder) {
      var first;
      first = true;
      return this.fileds.forEach(function(filed) {
        if ((filed.modifier & Modifiers["static"]) === 0) {
          filed.toSource(builder, first);
          return first = false;
        }
      });
    };

    return DbCLassModel;

  })(ClassModel);

  var DbFiled = (function(superClass) {
    extend(DbFiled, superClass);

    function DbFiled() {
      return DbFiled.__super__.constructor.apply(this, arguments);
    }

    DbFiled.prototype.toSource = function(buffer, first) {
      var columeName, name_, tem, tem0;
      tem0 = '@DatabaseField(id = true, unique = true, columnName = "{0}")';
      tem = '@DatabaseField(columnName = "{0}")';
      if (first) {
        tem = tem0;
      }
      columeName = StringUtil.format(this.name, 4);
      buffer.push(tem.format(columeName));
      tem = '{0} {1} {2}{3};{4}';
      name_ = StringUtil.format(this.name, 2);
      return buffer.push(StringUtil.formatStr(tem, this.getModifier(), this.type, name_, this.getValue(), this.getComment()));
    };

    return DbFiled;

  })(Filed);

  return Fileds2Java;

})();
