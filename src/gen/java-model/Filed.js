//var Filed, Modifiers, StringUtil;

import StringUtil from '../../js/utils/StringUtil'

import Modifiers from './Modifiers'

class Filed {
    constructor(type, name, value, comment) {
        this.name = name;
        this.value = value;
        this.comment = comment;
        this.annotations = [];
        this.modifier = Modifiers["private"];
        this.type = type || 'String';
    }

    /** private String name = "value"; // this is comment */
    fromSource(source) {
        var i, items, strs;
        source = source.trim();
        i = source.indexOf('//');
        if (i > 3) {
            if (i > 3) {
                this.comment = source.substr(i + 2).trim();
            }
            source = source.substr(0, i).trim();
        }
        i = source.indexOf('=');
        if (i > 3) {
            strs = source.split('=');
            this.value = strs[1].replace(/[\\"|\s|;]/g, '');
            source = strs[0].trim();
        }
        source = source.replace(';', '').trim();
        this.type = false;
        this.modifier = 0;
        items = source.split(/\s+/g);
        items.forEach((function (_this) {
            return function (item) {
                var value;
                if (item in Modifiers) {
                    value = Modifiers[item];
                    return _this.modifier += value;
                } else if (!_this.type) {
                    return _this.type = item;
                } else {
                    return _this.name = item;
                }
            };
        })(this));
        if (!this.name) {
            return false;
        }
        if (this.name.match(/^[A-Za-z0-9_]+$/) != null) {
            return this;
        } else {
            return false;
        }
    }

    /**
     * 
     * @param {string[]} buffer 
     */
    toSource(buffer) {
        buffer.push(`${this.getModifier()} ${this.type} ${this.name}${this.getValue()};${this.getComment()}`)
    }

    /**
     * 
     * @param {string[]} buffer 
     */
    toSetter(buffer) {
        buffer.push(`
        public void set${StringUtil.upperBegin(this.name)}(${this.type} ${this.name}) {
              this.${this.name} = ${this.name};
        }`)
    }

    /**
     * 
     * @param {string[]} buffer 
     */
    toGetter(buffer) {
        buffer.push(`
            public ${this.type} get${StringUtil.upperBegin(this.name)}() {
                return this.${ this.name};
            }`)
    }

    getValue() {
        if (!this.value) {
            return "";
        } else if (this.type === 'String') {
            return " = \"" + this.value + "\"";
        } else {
            return " = " + this.value;
        }
    }

    getComment() {
        if (!this.comment) {
            return "";
        } else {
            return " // " + this.comment;
        }
    }

    getModifier() {
        var key, mdf;
        mdf = [];
        for (key in Modifiers) {
            if ((parseInt(key) & this.modifier) > 0) {
                mdf.push(Modifiers[key]);
            }
        }
        return mdf.join(' ')
    }

    toString() {
        let buffer = []
        this.toSource(buffer)
        return buffer.join('\n')
    }

}

export default Filed