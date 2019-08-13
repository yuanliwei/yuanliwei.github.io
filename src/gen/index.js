module.exports = class Generate {
    constructor(app) {
        this.app = app
        this.loader = app.loader
        this.init()
    }

    async init() {
        const { app, loader } = this
        await loader.load("jquery", "popper", "string-format", "beautify", "highlight")
        await loader.load("bootstrap")

        require('../js/utils/StringUtil')
        require('../js/utils/common')
        require('../js/utils/code-format')

        const fs = require('fs')
        app.useStyle(fs.readFileSync(__dirname + '/style.css'))
        app.useTemplate(fs.readFileSync(__dirname + '/template.html'))

        require('./gen')

    }
}