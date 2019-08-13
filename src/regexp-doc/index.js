module.exports = class RegExpDoc {
    constructor(app) {
        this.app = app
        this.loader = app.loader
        this.init()
    }

    async init() {
        const { app, loader } = this

        const fs = require('fs')
        app.useStyle(fs.readFileSync(__dirname + '/style.css'))
        app.useTemplate(fs.readFileSync(__dirname + '/template.html'))
    }
}