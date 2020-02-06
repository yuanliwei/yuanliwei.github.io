import ClassModel from "../java-model/ClassModel";
import StringUtil from "../../js/utils/StringUtil";
import Filed from "../java-model/Filed";

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

class Json2Java {
    constructor() {
        this.className = 'ClassName';
        this.genSetter = false;
        this.genGetter = false;
        this.genInnerClass = true;
    }

    toJava(jsonStr, opts) {
        var builder, java_src, jsObj, model;
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
    }

    getModel(name) {
        var model;
        model = new ClassModel();
        model.name = name;
        model.genGetter = this.genGetter;
        model.genSetter = this.genSetter;
        return model;
    }

    parseJsonToJava(jsObj, model) {
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
    }

    parseJsonObject(jsObj, model) {
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
    }

    getType(jsObj, name, model) {
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
    }

}

export default Json2Java