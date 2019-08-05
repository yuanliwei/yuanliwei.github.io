module.exports = class RegExpDoc {
    constructor(app) {
        this.app = app
        this.loader = app.loader
        this.init()
    }

    async init() {
        const { app, loader } = this

        const fs = require('fs')
        const style = document.createElement('style')
        style.innerHTML = fs.readFileSync(__dirname + '/style.css', 'utf-8')
        document.head.append(style)
        document.body.innerHTML = fs.readFileSync(__dirname + '/template.html', 'utf-8')
    }
}