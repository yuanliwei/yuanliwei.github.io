module.exports = class GnuPlot {
    constructor(app) {
        this.app = app
        this.loader = app.loader
        this.init()
    }

    async init() {
        const { app, loader } = this

        await loader.load("jquery", "popper", "fontawesome", "csshake")
        await loader.load("bootstrap", "jqueryui", "split", "codemirror")
        await loader.load("codemirror-javascript", "codemirror-show-hint", "codemirror-addons", "codemirror-fullscreen", "codemirror-comment", "codemirror-theme")

        const fs = require('fs')
        const style = document.createElement('style')
        style.innerHTML = fs.readFileSync(__dirname + '/style.css', 'utf-8')
        document.head.append(style)
        document.body.innerHTML = fs.readFileSync(__dirname + '/template.html', 'utf-8')

        require('./gnuplot_api.js')

        const App = require('./app')

        new App()
    }
}