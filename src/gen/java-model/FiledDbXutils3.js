//var Filed, Modifiers, StringUtil;

import StringUtil from '../../js/utils/StringUtil'

import Filed from './Filed';
import Modifiers from './Modifiers';

class FiledDbXutils3 extends Filed {
    toSource(buffer, first) {
        let columeName = StringUtil.format(this.name, 4);
        if (first) {
            if (this.type === 'int' || this.type === 'long') {
                buffer.push(`@Column(name = "${columeName}", isId = true, autoGen = false)`)
            } else {
                buffer.push(`@Column(name = "${columeName}", isId = true)`)
            }
        } else {
            if (this.modifier & Modifiers.static
                || this.modifier & Modifiers.final) {
                console.log(this.modifier & Modifiers.static, this.modifier & Modifiers.final);
            } else {
                buffer.push(`@Column(name = "${columeName}")`)
            }
        }
        let name_ = StringUtil.format(this.name, 2);
        buffer.push(`${this.getModifier()} ${this.type} ${name_}${this.getValue()};${this.getComment()}`)
    }
}


export default FiledDbXutils3