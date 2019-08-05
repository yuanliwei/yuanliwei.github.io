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
        const style = document.createElement('style')
        style.innerHTML = fs.readFileSync(__dirname + '/style.css', 'utf-8')
        document.head.append(style)
        document.body.innerHTML = fs.readFileSync(__dirname + '/template.html', 'utf-8')

        const { loadConfig, saveConfig } = require('../js/utils/common')
        const { initEvent } = require('./json-tool')

        loadConfig()
        initEvent()
    }
}