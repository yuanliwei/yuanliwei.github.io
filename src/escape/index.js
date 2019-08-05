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
        const style = document.createElement('style')
        style.innerHTML = fs.readFileSync(__dirname + '/style.css', 'utf-8')
        document.head.append(style)
        document.body.innerHTML = fs.readFileSync(__dirname + '/template.html', 'utf-8')

        loadConfig();
        initEvent();
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }
}