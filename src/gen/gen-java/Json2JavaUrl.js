import StringUtil from "../../js/utils/StringUtil";
import Filed from "../java-model/Filed";
import ClassModelUrl from "../java-model/ClassModelUrl";

class Json2JavaUrl {

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
        java_src = builder.join('\n');
        return js_beautify(java_src, {});
    }

    getModel(name) {
        var model;
        model = new ClassModelUrl();
        model.name = name;
        model.genGetter = this.genGetter;
        model.genSetter = this.genSetter;
        return model;
    }

    parseJsonToJava(jsObj, model) {
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
    }
}

export default Json2JavaUrl