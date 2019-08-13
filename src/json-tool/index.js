module.exports = class JsonTool {
    constructor(app) {
        this.app = app
        this.loader = app.loader
        this.init()
    }

    async init() {
        const { app, loader } = this
        await loader.load("jquery", "popper", "string-format", "beautify", "highlight")
        await loader.load("bootstrap")

        const fs = require('fs')
        app.useStyle(fs.readFileSync(__dirname + '/style.css'))
        app.useTemplate(fs.readFileSync(__dirname + '/template.html'))

        const { loadConfig, saveConfig } = require('../js/utils/common')
        const { initEvent } = require('./json-tool')

        loadConfig()
        initEvent()
    }
}