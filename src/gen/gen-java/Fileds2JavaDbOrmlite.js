import ClassModelDbOrmlite from "../java-model/ClassModelDbOrmlite";
import FiledDbOrmlite from "../java-model/FiledDbOrmlite";

class Fileds2JavaDbOrmlite {

    constructor() {
        this.className = 'ClassName';
        this.genSetter = true;
        this.genGetter = true;
        this.genInnerClass = false;
    }

    getModel(name) {
        var model;
        model = new ClassModelDbOrmlite()
        model.name = name;
        model.genGetter = this.genGetter;
        model.genSetter = this.genSetter;
        return model;
    }

    toJava(filedStr, opts) {
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
        let model = this.getModel(this.className);
        model["package"] = this.packageName;
        let fileds = filedStr.trim().split(/\n/g);
        console.dir(fileds);
        if (!((fileds != null ? fileds.length : void 0) > 0)) {
            return "fileds is null";
        }
        fileds.forEach(function (item) {
            var filed, result;
            filed = new FiledDbOrmlite();
            result = filed.fromSource(item);
            if (result) {
                return model.fileds.push(filed);
            }
        });
        let builder = [];
        model.toSource(builder);
        let java_src = builder.join('\n');
        return js_beautify(java_src, {});
    }

}

export default Fileds2JavaDbOrmlite