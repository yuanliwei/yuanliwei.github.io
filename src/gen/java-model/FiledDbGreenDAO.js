//var Filed, Modifiers, StringUtil;

import StringUtil from '../../js/utils/StringUtil'

import Filed from './Filed';
import Modifiers from './Modifiers';

class FiledDbGreenDAO extends Filed {
    toSource(buffer, first) {
        let columeName = StringUtil.format(this.name, 4);
        if (first) {
            buffer.push(`@Id(autoincrement = true)`)
            buffer.push(`private Long rowId;`)
            buffer.push(`@Index(unique = true)`)
        }
        if (this.modifier & Modifiers.static
            || this.modifier & Modifiers.final) {
            console.log(this.modifier & Modifiers.static, this.modifier & Modifiers.final);
        } else {
            buffer.push(`@Property(nameInDb = "${columeName}")`)
        }
        let name_ = StringUtil.format(this.name, 2);
        buffer.push(`${this.getModifier()} ${this.type} ${name_}${this.getValue()};${this.getComment()}`)
    }
}


export default FiledDbGreenDAO