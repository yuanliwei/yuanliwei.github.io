import ClassModel from "./ClassModel";
import StringUtil from "../../js/utils/StringUtil";

/*
判断js数据类型
    console.log([].constructor == Array);
    console.log({}.constructor == Object);
    console.log("string".constructor == String);
    console.log((123).constructor == Number);
    console.log(true.constructor == Boolean);
    */

class ClassModelUrl extends ClassModel {

    insertOtherCode(builder) {

        /*
        public TestModel getTestModel() {
            TestModel info = new TestModel();
            info.setUserName(this.user_name);
            return info;
        }
         */
        var clsName, filedsBuilder, templClass
        filedsBuilder = [];
        this.fileds.forEach(function (filed) {
            var name;
            name = {
                setJavaVarName: StringUtil.format(filed.name, 2, 0),
                varName: filed.name
            }
            return filedsBuilder.push(`info.set${name.setJavaVarName}(this.${name.varName});`);
        });
        clsName = this.name.replace(/^Url/, '');
        templClass = {
            ClassName: clsName,
            setFileds: filedsBuilder.join('\n')
        }
        return builder.push(`
                public ${templClass.ClassName} get${templClass.ClassName}() {
                    ${templClass.ClassName} info = new ${templClass.ClassName}();
                    ${templClass.setFileds}
                    return info;
                }`);
    }
}

export default ClassModelUrl