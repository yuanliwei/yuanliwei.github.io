import ClassModel from "./ClassModel";
import StringUtil from "../../js/utils/StringUtil";
import Modifiers from "./Modifiers";

class ClassModelDbOrmlite extends ClassModel {

    genClassName(builder) {
        let tableName = StringUtil.format(this.name, 3);
        builder.push(`@DatabaseTable(tableName = "${tableName}")`);
        super.genClassName(builder)
    }

    genNormalFiled(builder) {
        var first;
        first = true;
        return this.fileds.forEach(function (filed) {
            if ((filed.modifier & Modifiers["static"]) === 0) {
                filed.toSource(builder, first);
                return first = false;
            }
        });
    }
}

export default ClassModelDbOrmlite