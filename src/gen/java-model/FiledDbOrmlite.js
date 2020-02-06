//var Filed, Modifiers, StringUtil;

import StringUtil from '../../js/utils/StringUtil'

import Filed from './Filed';
import Modifiers from './Modifiers';

class FiledDbOrmlite extends Filed {

    toSource(buffer, first) {
        let columeName = StringUtil.format(this.name, 4);
        if (first) {
            buffer.push(`@DatabaseField(id = true, unique = true, columnName = "${columeName}")`);
        } else {
            if (this.modifier & Modifiers.static
                || this.modifier & Modifiers.final) {
                console.log(this.modifier & Modifiers.static, this.modifier & Modifiers.final);
            } else {
                buffer.push(`@DatabaseField(columnName = "${columeName}")`);
            }
        }
        let name_ = StringUtil.format(this.name, 2);
        return buffer.push(`${this.getModifier()} ${this.type} ${name_}${this.getValue()};${this.getComment()}`)
    }
}

export default FiledDbOrmlite