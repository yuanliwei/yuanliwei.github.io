module.exports = class Escape {
    constructor(app) {
        this.app = app
        this.loader = app.loader
        this.init()
    }

    async init() {
        const { app, loader } = this
        await loader.load("jquery", "popper", "string-format", "beautify", "fontawesome", "highlight")
        await loader.load("bootstrap", "jquery.qrcode", "JsBarcode", "crypto", "pako", "jszip")

        const { loadConfig, saveConfig } = require('../js/utils/common')

        const { initEvent } = require('./escape')

        const fs = require('fs')
        app.useStyle(fs.readFileSync(__dirname + '/style.css'))
        app.useTemplate(fs.readFileSync(__dirname + '/template.html'))

        loadConfig();
        initEvent();
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }
}