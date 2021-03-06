import ClassModel from '../java-model/ClassModel'
import Filed from '../java-model/Filed'
/*
Fileds 转 Java model
使用：
    Fileds2Java = require './filed-java'
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

class Fileds2Java {

    constructor() {
        this.className = 'ClassName';
        this.genSetter = true;
        this.genGetter = true;
        this.genInnerClass = false;
    }

    getModel(name) {
        var model;
        model = new ClassModel()
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
        if (!((fileds != null ? fileds.length : void 0) > 0)) {
            return "fileds is null";
        }
        fileds.forEach((item) => {
            var filed, result;
            filed = new Filed()
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

export default Fileds2Java