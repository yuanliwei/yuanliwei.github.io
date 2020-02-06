class JavaModel2Java {
    /**
     * @param {import('../java-model/ClassModel').default} model 
     */
    constructor(model) {
        this.model = model
    }

    toJava() {
        let builder = []
        this.model.toSource(builder)
        return builder.join('\n')
    }
}

export default JavaModel2Java