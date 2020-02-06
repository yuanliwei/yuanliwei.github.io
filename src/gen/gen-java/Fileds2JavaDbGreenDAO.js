import FiledDbGreenDAO from "../java-model/FiledDbGreenDAO";
import ClassModelDbGreenDAO from "../java-model/ClassModelDbGreenDAO";

class Fileds2JavaDbGreenDAO {
    constructor() {
        this.className = 'ClassName';
        this.genSetter = true;
        this.genGetter = true;
        this.genInnerClass = false;
    }

    toJava(filedStr, opts) {
        var builder, fileds, java_src, model;
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
        console.log("##########################0000");
        console.dir(FiledDbGreenDAO);
        console.log("##########################1111");
        fileds.forEach(function (item) {
            var filed, result;
            filed = new FiledDbGreenDAO();
            result = filed.fromSource(item);
            if (result) {
                return model.fileds.push(filed);
            }
        });
        builder = [];
        model.toSource(builder);
        java_src = builder.join('\n');
        return js_beautify(java_src, {});
    }

    getModel(name) {
        var model;
        model = new ClassModelDbGreenDAO();
        model.name = name;
        model.genGetter = this.genGetter;
        model.genSetter = this.genSetter;
        return model;
    }

}

export default Fileds2JavaDbGreenDAO