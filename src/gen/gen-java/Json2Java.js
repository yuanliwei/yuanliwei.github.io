const StringUtil = require('../../js/utils/StringUtil')
const ClassModel = require('../java-model/ClassModel')
const Filed = require('../java-model/Filed')
const Modifiers = require('../java-model/Modifiers')

var extend = function (child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

/*
JSON 转 Java model
使用：
    j2j = new JsonJavaDbOrmlite()
    [option]
    opts = {
        packageName: 'com.ylw.generate' [option]
        className: 'TestClass'          [require]
        genSetter: true                 [option default true]
        genGetter: true                 [option default true]
        genInnerClass: false            [option default false]
    }
    jsonStr = '{"name": "ylw", "age": "12"}'
    javaSrc = j2j.toJava jsonStr, opts
    console.log javaSrc
 */

var JsonJavaDbOrmlite = (function () {
    function Json2Java() {
        this.className = 'ClassName';
        this.genSetter = true;
        this.genGetter = true;
        this.genInnerClass = false;
    }

    Json2Java.prototype.toJava = function (jsonStr, opts) {
        var b_java_src, builder, java_src, jsBeautify, jsObj, model;
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
        try {
            jsObj = JSON.parse(jsonStr);
            this.parseJsonToJava(jsObj, model);
        } catch (error) {
            console.error(error);
            return error.stack;
        }

        builder = [];
        model.toSource(builder);
        java_src = builder.join('\n');
        return js_beautify(java_src, {});
    };

    Json2Java.prototype.getModel = function (name) {
        var model;
        model = new DbCLassModel();
        model.name = name;
        model.genGetter = this.genGetter;
        model.genSetter = this.genSetter;
        return model;
    };

    Json2Java.prototype.parseJsonToJava = function (jsObj, model) {
        switch (jsObj.constructor) {
            case Object:
                return this.parseJsonObject(jsObj, model);
            case Array:
                return console.log("Array");
            case String:
                return console.log("String");
            case Number:
                return console.log("Number");
            case Boolean:
                return console.log("Boolean");
        }
    };

    Json2Java.prototype.parseJsonObject = function (jsObj, model) {
        var comment, filed, name, results, type, value;
        results = [];
        for (name in jsObj) {
            value = jsObj[name];
            type = this.getType(value, name, model);
            comment = JSON.stringify(value);
            filed = new DbFiled(type, name, null, comment);
            results.push(model.fileds.push(filed));
        }
        return results;
    };

    Json2Java.prototype.getType = function (jsObj, name, model) {
        var innerModel, name_, vstr;
        if (jsObj === null) return "null type";
        switch (jsObj.constructor) {
            case Object:
                name_ = StringUtil.format(name, 2, 0);
                console.dir(this.genInnerClass);
                if (this.genInnerClass) {
                    innerModel = this.getModel(name_);
                    model.innerClass.push(innerModel);
                    this.parseJsonToJava(jsObj, innerModel);
                }
                return name_;
            case Array:
                name_ = StringUtil.format(name, 2, 0);
                if (this.genInnerClass) {
                    innerModel = this.getModel(name_);
                    model.innerClass.push(innerModel);
                    if (jsObj.length > 0) {
                        this.parseJsonToJava(jsObj[0], innerModel);
                    }
                }
                return "List<" + name_ + ">";
            case String:
                return "String";
            case Number:
                vstr = "" + jsObj;
                if (vstr.match(/^-?\d{1,10}$/)) {
                    return "int";
                } else if (vstr.match(/^-?\d+$/)) {
                    return "long";
                } else if (vstr.match(/^-?\d+\.\d+$/)) {
                    return "float";
                } else {
                    return "Number";
                }
            // break;
            case Boolean:
                return "boolean";
            default:
                return "unkonwn type";
        }
    };

    /*
    判断js数据类型
        console.log([].constructor == Array);
        console.log({}.constructor == Object);
        console.log("string".constructor == String);
        console.log((123).constructor == Number);
        console.log(true.constructor == Boolean);
     */

    var DbCLassModel = (function (superClass) {
        extend(DbCLassModel, superClass);

        function DbCLassModel() {
            return DbCLassModel.__super__.constructor.apply(this, arguments);
        }

        DbCLassModel.prototype.genClassName = function (builder) {
            var tableName, tem;
            tem = '@DatabaseTable(tableName = "{0}")';
            tableName = StringUtil.format(this.name, 3);
            builder.push(tem.format(tableName));
            return DbCLassModel.__super__.genClassName.call(this, builder);
        };

        DbCLassModel.prototype.genNormalFiled = function (builder) {
            var first;
            first = true;
            return this.fileds.forEach(function (filed) {
                if ((filed.modifier & Modifiers["static"]) === 0) {
                    filed.toSource(builder, first);
                    return first = false;
                }
            });
        };

        return DbCLassModel;

    })(ClassModel);

    var DbFiled = (function (superClass) {
        extend(DbFiled, superClass);

        function DbFiled() {
            return DbFiled.__super__.constructor.apply(this, arguments);
        }

        DbFiled.prototype.toSource = function (buffer, first) {
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

    return Json2Java;

})();


/*
JSON 转 Java model
使用：
    j2j = new JsonJavaDbXutils()
    [option]
    opts = {
        packageName: 'com.ylw.generate' [option]
        className: 'TestClass'          [require]
        genSetter: true                 [option default true]
        genGetter: true                 [option default true]
        genInnerClass: false            [option default false]
    }
    jsonStr = '{"name": "ylw", "age": "12"}'
    javaSrc = j2j.toJava jsonStr, opts
    console.log javaSrc
 */

var JsonJavaDbXutils = (function () {
    function Json2Java() {
        this.className = 'ClassName';
        this.genSetter = true;
        this.genGetter = true;
        this.genInnerClass = false;
    }

    Json2Java.prototype.toJava = function (jsonStr, opts) {
        var b_java_src, builder, java_src, jsBeautify, jsObj, model;
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
        try {
            jsObj = JSON.parse(jsonStr);
            this.parseJsonToJava(jsObj, model);
        } catch (error) {
            console.error(error);
            return error.stack;
        }
        builder = [];
        model.toSource(builder);
        java_src = builder.join('\n');
        return js_beautify(java_src, {});
    };

    Json2Java.prototype.getModel = function (name) {
        var model;
        model = new DbCLassModel();
        model.name = name;
        model.genGetter = this.genGetter;
        model.genSetter = this.genSetter;
        return model;
    };

    Json2Java.prototype.parseJsonToJava = function (jsObj, model) {
        switch (jsObj.constructor) {
            case Object:
                return this.parseJsonObject(jsObj, model);
            case Array:
                return console.log("Array");
            case String:
                return console.log("String");
            case Number:
                return console.log("Number");
            case Boolean:
                return console.log("Boolean");
        }
    };

    Json2Java.prototype.parseJsonObject = function (jsObj, model) {
        var comment, filed, name, results, type, value;
        results = [];
        for (name in jsObj) {
            value = jsObj[name];
            type = this.getType(value, name, model);
            comment = JSON.stringify(value);
            filed = new DbFiled(type, name, null, comment);
            results.push(model.fileds.push(filed));
        }
        return results;
    };

    Json2Java.prototype.getType = function (jsObj, name, model) {
        var innerModel, name_, vstr;
        if (jsObj === null) return "null type";
        switch (jsObj.constructor) {
            case Object:
                name_ = StringUtil.format(name, 2, 0);
                console.dir(this.genInnerClass);
                if (this.genInnerClass) {
                    innerModel = this.getModel(name_);
                    model.innerClass.push(innerModel);
                    this.parseJsonToJava(jsObj, innerModel);
                }
                return name_;
            case Array:
                name_ = StringUtil.format(name, 2, 0);
                if (this.genInnerClass) {
                    innerModel = this.getModel(name_);
                    model.innerClass.push(innerModel);
                    if (jsObj.length > 0) {
                        this.parseJsonToJava(jsObj[0], innerModel);
                    }
                }
                return "List<" + name_ + ">";
            case String:
                return "String";
            case Number:
                vstr = "" + jsObj;
                if (vstr.match(/^-?\d{1,10}$/)) {
                    return "int";
                } else if (vstr.match(/^-?\d+$/)) {
                    return "long";
                } else if (vstr.match(/^-?\d+\.\d+$/)) {
                    return "float";
                } else {
                    return "Number";
                }
            // break;
            case Boolean:
                return "boolean";
            default:
                return "unkonwn type";
        }
    };


    /*
    判断js数据类型
        console.log([].constructor == Array);
        console.log({}.constructor == Object);
        console.log("string".constructor == String);
        console.log((123).constructor == Number);
        console.log(true.constructor == Boolean);
     */

    var DbCLassModel = (function (superClass) {
        extend(DbCLassModel, superClass);

        function DbCLassModel() {
            return DbCLassModel.__super__.constructor.apply(this, arguments);
        }

        DbCLassModel.prototype.genClassName = function (builder) {
            var tableName, tem;
            tem = '@Table(name = "{0}")';
            tableName = StringUtil.format(this.name, 3);
            builder.push(tem.format(tableName));
            return DbCLassModel.__super__.genClassName.call(this, builder);
        };

        DbCLassModel.prototype.genNormalFiled = function (builder) {
            var first;
            first = true;
            return this.fileds.forEach(function (filed) {
                if ((filed.modifier & Modifiers["static"]) === 0) {
                    filed.toSource(builder, first);
                    return first = false;
                }
            });
        };

        return DbCLassModel;

    })(ClassModel);

    var DbFiled = (function (superClass) {
        extend(DbFiled, superClass);

        function DbFiled() {
            return DbFiled.__super__.constructor.apply(this, arguments);
        }

        DbFiled.prototype.toSource = function (buffer, first) {
            tem;
            var columeName, name_, tem;
            if (first) {
                tem = '@Id(column = "{0}")';
                if (this.type === 'int' || this.type === 'long') {
                    tem += '\n@NoAutoIncrement';
                }
            } else {
                tem = '@Column(column = "{0}")';
            }
            columeName = StringUtil.format(this.name, 4);
            buffer.push(tem.format(columeName));
            tem = '{0} {1} {2}{3};{4}';
            name_ = StringUtil.format(this.name, 2);
            return buffer.push(StringUtil.formatStr(tem, this.getModifier(), this.type, name_, this.getValue(), this.getComment()));
        };

        return DbFiled;

    })(Filed);

    return Json2Java;

})();



/*
JSON 转 Java model
使用：
    j2j = new JsonJavaDbXutils3()
    [option]
    opts = {
        packageName: 'com.ylw.generate' [option]
        className: 'TestClass'          [require]
        genSetter: true                 [option default true]
        genGetter: true                 [option default true]
        genInnerClass: false            [option default false]
    }
    jsonStr = '{"name": "ylw", "age": "12"}'
    javaSrc = j2j.toJava jsonStr, opts
    console.log javaSrc
 */

var JsonJavaDbXutils3 = (function () {
    function Json2Java() {
        this.className = 'ClassName';
        this.genSetter = true;
        this.genGetter = true;
        this.genInnerClass = false;
    }

    Json2Java.prototype.toJava = function (jsonStr, opts) {
        var b_java_src, builder, java_src, jsBeautify, jsObj, model;
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
        try {
            jsObj = JSON.parse(jsonStr);
            this.parseJsonToJava(jsObj, model);
        } catch (error) {
            console.error(error);
            return error.stack;
        }
        builder = [];
        model.toSource(builder);
        java_src = builder.join('\n');
        return js_beautify(java_src, {});
    };

    Json2Java.prototype.getModel = function (name) {
        var model;
        model = new DbCLassModel();
        model.name = name;
        model.genGetter = this.genGetter;
        model.genSetter = this.genSetter;
        return model;
    };

    Json2Java.prototype.parseJsonToJava = function (jsObj, model) {
        switch (jsObj.constructor) {
            case Object:
                return this.parseJsonObject(jsObj, model);
            case Array:
                return console.log("Array");
            case String:
                return console.log("String");
            case Number:
                return console.log("Number");
            case Boolean:
                return console.log("Boolean");
        }
    };

    Json2Java.prototype.parseJsonObject = function (jsObj, model) {
        var comment, filed, name, results, type, value;
        results = [];
        for (name in jsObj) {
            value = jsObj[name];
            type = this.getType(value, name, model);
            comment = JSON.stringify(value);
            filed = new DbFiled(type, name, null, comment);
            results.push(model.fileds.push(filed));
        }
        return results;
    };

    Json2Java.prototype.getType = function (jsObj, name, model) {
        var innerModel, name_, vstr;
        if (jsObj === null) return "null type";
        switch (jsObj.constructor) {
            case Object:
                name_ = StringUtil.format(name, 2, 0);
                console.dir(this.genInnerClass);
                if (this.genInnerClass) {
                    innerModel = this.getModel(name_);
                    model.innerClass.push(innerModel);
                    this.parseJsonToJava(jsObj, innerModel);
                }
                return name_;
            case Array:
                name_ = StringUtil.format(name, 2, 0);
                if (this.genInnerClass) {
                    innerModel = this.getModel(name_);
                    model.innerClass.push(innerModel);
                    if (jsObj.length > 0) {
                        this.parseJsonToJava(jsObj[0], innerModel);
                    }
                }
                return "List<" + name_ + ">";
            case String:
                return "String";
            case Number:
                vstr = "" + jsObj;
                if (vstr.match(/^-?\d{1,10}$/)) {
                    return "int";
                } else if (vstr.match(/^-?\d+$/)) {
                    return "long";
                } else if (vstr.match(/^-?\d+\.\d+$/)) {
                    return "float";
                } else {
                    return "Number";
                }
            // break;
            case Boolean:
                return "boolean";
            default:
                return "unkonwn type";
        }
    };

	/*
	判断js数据类型
		console.log([].constructor == Array);
		console.log({}.constructor == Object);
		console.log("string".constructor == String);
		console.log((123).constructor == Number);
		console.log(true.constructor == Boolean);
	 */

    var DbCLassModel = (function (superClass) {
        extend(DbCLassModel, superClass);

        function DbCLassModel() {
            return DbCLassModel.__super__.constructor.apply(this, arguments);
        }

        DbCLassModel.prototype.genClassName = function (builder) {
            var tableName, tem;
            tem = '@Table(name = "{0}")';
            tableName = StringUtil.format(this.name, 3);
            builder.push(tem.format(tableName));
            return DbCLassModel.__super__.genClassName.call(this, builder);
        };

        DbCLassModel.prototype.genNormalFiled = function (builder) {
            var first;
            first = true;
            return this.fileds.forEach(function (filed) {
                if ((filed.modifier & Modifiers["static"]) === 0) {
                    filed.toSource(builder, first);
                    return first = false;
                }
            });
        };

        return DbCLassModel;

    })(ClassModel);

    var DbFiled = (function (superClass) {
        extend(DbFiled, superClass);

        function DbFiled() {
            return DbFiled.__super__.constructor.apply(this, arguments);
        }

        DbFiled.prototype.toSource = function (buffer, first) {
            tem;
            var columeName, name_, tem;
            if (first) {
                tem = '@Column(name = "{0}", isId = true)';
                if (this.type === 'int' || this.type === 'long') {
                    tem = '@Column(name = "{0}", isId = true, autoGen = false)';
                }
            } else {
                tem = '@Column(name = "{0}")';
            }
            columeName = StringUtil.format(this.name, 4);
            buffer.push(tem.format(columeName));
            tem = '{0} {1} {2}{3};{4}';
            name_ = StringUtil.format(this.name, 2);
            return buffer.push(StringUtil.formatStr(tem, this.getModifier(), this.type, name_, this.getValue(), this.getComment()));
        };

        return DbFiled;

    })(Filed);

    return Json2Java;

})();



/*
JSON 转 Java model
使用：
    j2j = new JsonJava()
    [option]
    opts = {
        packageName: 'com.ylw.generate' [option]
        className: 'TestClass'          [require]
        genSetter: true                 [option default false]
        genGetter: true                 [option default false]
        genInnerClass: true             [option default true]
    }
    jsonStr = '{"name": "ylw", "age": "12"}'
    javaSrc = j2j.toJava jsonStr, opts
    console.log javaSrc
 */

var JsonJava = (function () {
    function Json2Java() {
        this.className = 'ClassName';
        this.genSetter = false;
        this.genGetter = false;
        this.genInnerClass = true;
    }

    Json2Java.prototype.toJava = function (jsonStr, opts) {
        var b_java_src, builder, java_src, jsBeautify, jsObj, model;
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
        try {
            jsObj = JSON.parse(jsonStr);
            this.parseJsonToJava(jsObj, model);
        } catch (error) {
            console.error(error);
            return error.stack;
        }
        builder = [];
        model.toSource(builder);
        console.dir(model);
        java_src = builder.join('\n');
        return js_beautify(java_src, {});
    };

    Json2Java.prototype.getModel = function (name) {
        var model;
        model = new ClassModel();
        model.name = name;
        model.genGetter = this.genGetter;
        model.genSetter = this.genSetter;
        return model;
    };

    Json2Java.prototype.parseJsonToJava = function (jsObj, model) {
        window.jsObj = jsObj;
        console.dir(jsObj);
        switch (jsObj.constructor) {
            case Object:
                return this.parseJsonObject(jsObj, model);
            case Array:
                return console.log("Array");
            case String:
                return console.log("String");
            case Number:
                return console.log("Number");
            case Boolean:
                return console.log("Boolean");
        }
    };

    Json2Java.prototype.parseJsonObject = function (jsObj, model) {
        var comment, filed, name, name_, results, type, value;
        results = [];
        for (name in jsObj) {
            value = jsObj[name];
            type = this.getType(value, name, model);
            name_ = StringUtil.format(name, 2);
            comment = JSON.stringify(value);
            filed = new Filed(type, name_, null, comment);
            results.push(model.fileds.push(filed));
        }
        return results;
    };

    Json2Java.prototype.getType = function (jsObj, name, model) {
        var innerModel, name_, vstr;
        if (jsObj === null) return "null type";
        switch (jsObj.constructor) {
            case Object:
                name_ = StringUtil.format(name, 2, 0);
                if (this.genInnerClass) {
                    innerModel = this.getModel(name_);
                    model.innerClass.push(innerModel);
                    this.parseJsonToJava(jsObj, innerModel);
                }
                return name_;
            case Array:
                name_ = StringUtil.format(name, 2, 0);
                if (this.genInnerClass) {
                    innerModel = this.getModel(name_);
                    model.innerClass.push(innerModel);
                    if (jsObj.length > 0) {
                        this.parseJsonToJava(jsObj[0], innerModel);
                    }
                }
                return "List<" + name_ + ">";
            case String:
                return "String";
            case Number:
                vstr = "" + jsObj;
                if (vstr.match(/^-?\d{1,10}$/)) {
                    return "int";
                } else if (vstr.match(/^-?\d+$/)) {
                    return "long";
                } else if (vstr.match(/^-?\d+\.\d+$/)) {
                    return "float";
                } else {
                    return "Number";
                }
            // break;
            case Boolean:
                return "boolean";
            default:
                return "unkonwn type";
        }
    };

    return Json2Java;

})();


/*
判断js数据类型
    console.log([].constructor == Array);
    console.log({}.constructor == Object);
    console.log("string".constructor == String);
    console.log((123).constructor == Number);
    console.log(true.constructor == Boolean);
 */



/*
JSON 转 Java model
使用：
    j2j = new JsonJavaUrl()
    [option]
    opts = {
        packageName: 'com.ylw.generate' [option]
        className: 'TestClass'          [require]
        genSetter: true                 [option default true]
        genGetter: true                 [option default true]
        genInnerClass: true             [option default true]
    }
    jsonStr = '{"name": "ylw", "age": "12"}'
    javaSrc = j2j.toJava jsonStr, opts
    console.log javaSrc
 */

var JsonJavaUrl = (function () {
    function Json2Java() {
        this.className = 'ClassName';
        this.genSetter = false;
        this.genGetter = false;
        this.genInnerClass = true;
    }

    Json2Java.prototype.toJava = function (jsonStr, opts) {
        var b_java_src, builder, java_src, jsBeautify, jsObj, model;
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
        try {
            jsObj = JSON.parse(jsonStr);
            this.parseJsonToJava(jsObj, model);
        } catch (error) {
            console.error(error);
            return error.stack;
        }
        builder = [];
        model.toSource(builder);
        java_src = builder.join('\n');
        return js_beautify(java_src, {});
    };

    Json2Java.prototype.getModel = function (name) {
        var model;
        model = new UrlCLassModel();
        model.name = name;
        model.genGetter = this.genGetter;
        model.genSetter = this.genSetter;
        return model;
    };

    Json2Java.prototype.parseJsonToJava = function (jsObj, model) {
        switch (jsObj.constructor) {
            case Object:
                return this.parseJsonObject(jsObj, model);
            case Array:
                return console.log("Array");
            case String:
                return console.log("String");
            case Number:
                return console.log("Number");
            case Boolean:
                return console.log("Boolean");
        }
    };

    Json2Java.prototype.parseJsonObject = function (jsObj, model) {
        var comment, filed, name, results, type, value;
        results = [];
        for (name in jsObj) {
            value = jsObj[name];
            type = this.getType(value, name, model);
            comment = JSON.stringify(value);
            filed = new Filed(type, name, null, comment);
            results.push(model.fileds.push(filed));
        }
        return results;
    };

    Json2Java.prototype.getType = function (jsObj, name, model) {
        var innerModel, name_, vstr;
        if (jsObj === null) return "null type";
        switch (jsObj.constructor) {
            case Object:
                name_ = StringUtil.format(name, 2, 0);
                if (this.genInnerClass) {
                    innerModel = this.getModel(name_);
                    model.innerClass.push(innerModel);
                    this.parseJsonToJava(jsObj, innerModel);
                }
                return name_;
            case Array:
                if (this.genInnerClass) {
                    name_ = StringUtil.format(name, 2, 0);
                    innerModel = this.getModel(name_);
                    model.innerClass.push(innerModel);
                    if (jsObj.length > 0) {
                        this.parseJsonToJava(jsObj[0], innerModel);
                    }
                }
                return "List<" + name_ + ">";
            case String:
                return "String";
            case Number:
                vstr = "" + jsObj;
                if (vstr.match(/^-?\d{1,10}$/)) {
                    return "int";
                } else if (vstr.match(/^-?\d+$/)) {
                    return "long";
                } else if (vstr.match(/^-?\d+\.\d+$/)) {
                    return "float";
                } else {
                    return "Number";
                }
            // break;
            case Boolean:
                return "boolean";
            default:
                return "unkonwn type";
        }
    };


    /*
    判断js数据类型
        console.log([].constructor == Array);
        console.log({}.constructor == Object);
        console.log("string".constructor == String);
        console.log((123).constructor == Number);
        console.log(true.constructor == Boolean);
     */

    var UrlCLassModel = (function (superClass) {
        extend(UrlCLassModel, superClass);

        function UrlCLassModel() {
            return UrlCLassModel.__super__.constructor.apply(this, arguments);
        }

        UrlCLassModel.prototype.insertOtherCode = function (builder) {

            /*
            public TestModel getTestModel() {
                TestModel info = new TestModel();
                info.setUserName(this.user_name);
                return info;
            }
             */
            var clsName, filedsBuilder, templClass, templateClass, templateSetFiled;
            templateClass = "public {ClassName} get{ClassName}() {\n    {ClassName} info = new {ClassName}();\n    {setFileds}\n    return info;\n}";
            templateSetFiled = "info.set{setJavaVarName}(this.{varName});";
            filedsBuilder = [];
            this.fileds.forEach(function (filed) {
                var name;
                name = {
                    setJavaVarName: StringUtil.format(filed.name, 2, 0),
                    varName: filed.name
                };
                return filedsBuilder.push(templateSetFiled.format(name));
            });
            clsName = this.name.replace(/^Url/, '');
            templClass = {
                ClassName: clsName,
                setFileds: filedsBuilder.join('\n')
            };
            return builder.push(templateClass.format(templClass));
        };

        return UrlCLassModel;

    })(ClassModel);

    return Json2Java;

})();

class AssignJson2Java {
  constructor() {
  }

  toJava(json){
    try {
      var xxxx = {}
      eval(`xxxx = ${json}`)
      json = xxxx
    } catch (e) {
      var msg = e.message
      console.log('origin',msg);
      var stack = e.stack
      var pos = json.length
      while(pos > 0){
        pos -= 10
        try {
          var xxxx = {}
          eval(`xxxx = ${json.substr(0,pos)}`)
        } catch (e) {
          if (msg != e.message) {
            break
          }
        }
      }
      console.log(e.message);
      console.error(e);
      var str = json.substr(pos-10,30)
      return str+'\n\n'+stack
    }
    var keys = Object.keys(json)
    var length = 16
    keys.forEach((item)=>{
      length = Math.max(item.length,length)
    })
    length++
    var results = []
    let space = ' '.repeat(length-17+1)
    results.push(`JSONObject jsObj${space}= JSON.parseObject(json);`);
    keys.forEach((item)=>{
      let data = json[item]
      let type = (typeof data)
      let space = ' '.repeat(length-item.length)
      if (type == 'string') {
        results.push(`${item}${space}= jsObj.getString("${item}");`);
      }
      if (type == 'number') {
        if (data%1 == 0) {
          results.push(`${item}${space}= jsObj.getIntValue("${item}");`);
        } else {
          results.push(`${item}${space}= jsObj.getFloatValue("${item}");`);
        }
      }
    })
    return results.join('\n')
  }
}


module.exports.JsonJavaDbOrmlite = JsonJavaDbOrmlite
module.exports.JsonJavaDbXutils = JsonJavaDbXutils
module.exports.JsonJavaDbXutils3 = JsonJavaDbXutils3
module.exports.JsonJava = JsonJava
module.exports.JsonJavaUrl = JsonJavaUrl
module.exports.AssignJson2Java = AssignJson2Java