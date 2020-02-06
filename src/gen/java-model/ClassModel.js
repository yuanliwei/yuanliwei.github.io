import Modifiers from './Modifiers'

class ClassModel {
    constructor() {
        this["package"] = '';
        this.name = 'Class';
        this.fileds = [];
        this.innerClass = [];
        this.genGetter = false;
        this.genSetter = false;
    }

    /** @param {string[]} builder */
    toSource(builder) {
        this.genPackage(builder);
        this.genClassName(builder);
        this.genStaticFiled(builder);
        this.genNormalFiled(builder);
        this.insertOtherCode(builder);
        this.genInnerClass(builder);
        this.genGetterSetter(builder);
        return this.genCloseClass(builder);
    }

    /** @param {string[]} builder */
    genPackage(builder) {
        if (this["package"] && this["package"].trim().length > 0) {
            builder.push(`package ${this["package"]}`)
        }
    }

    /** @param {string[]} builder */
    genClassName(builder) {
        builder.push(`public class ${this.name} {`)
    }

    /** @param {string[]} builder */
    genStaticFiled(builder) {
        return this.fileds.forEach(function (filed) {
            if ((filed.modifier & Modifiers["static"]) > 0) {
                return filed.toSource(builder);
            }
        });
    }

    /** @param {string[]} builder */
    genNormalFiled(builder) {
        return this.fileds.forEach(function (filed) {
            if ((filed.modifier & Modifiers["static"]) === 0) {
                return filed.toSource(builder);
            }
        });
    }

    /** @param {string[]} builder */
    insertOtherCode(builder) {
        return console.log("implament in sub class");
    }

    /** @param {string[]} builder */
    genInnerClass(builder) {
        return this.innerClass.forEach(function (model) {
            return model.toSource(builder);
        });
    }

    /** @param {string[]} builder */
    genGetterSetter(builder) {
        return this.fileds.forEach((function (_this) {
            return function (filed) {
                if ((filed.modifier & (Modifiers["static"] | Modifiers.final | Modifiers["public"])) === 0) {
                    if (_this.genSetter) {
                        filed.toSetter(builder);
                    }
                    if (_this.genGetter) {
                        return filed.toGetter(builder);
                    }
                }
            }
        })(this));
    }

    /** @param {string[]} builder */
    genCloseClass(builder) {
        return builder.push('}');
    }

}

export default ClassModel