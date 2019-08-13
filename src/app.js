//@ts-check

require("regenerator-runtime/runtime");

const Loader = require('@yuanliwei/web-loader');
const Index = require('./index/index')
const Generate = require('./gen/index')
const Escape = require('./escape/index')
const JsonTool = require('./json-tool/index')
const RegExpDoc = require('./regexp-doc/index')
const Chart = require('./chart/index')
const GnuPlot = require('./gnuplot/index')
const Editor = require('./editor/index')
const EditorDiff = require('./editor/index-diff')

class App {
    constructor() {
        Loader.config(require('./cfg/loaderConfig'))
        this.loader = new Loader()
        window.onhashchange = (ev) => {
            document.querySelectorAll('style').forEach(o => o.remove())
            switch (location.hash) {
                case '#/editor/diff-editor': return new EditorDiff(this)
                case '#/editor/editor': return new Editor(this)
                case '#/three.js/particle/fireworks': return new GnuPlot(this)
                case '#/gnuplot': return new GnuPlot(this)
                case '#/chart': return new Chart(this)
                case '#/regexp-doc': return new RegExpDoc(this)
                case '#/json-tool': return new JsonTool(this)
                case '#/escape': return new Escape(this)
                case '#/generate': return new Generate(this)
                default: return new Index(this)
            }
        }
        window.onhashchange(null)
    }

    useStyle(styleText) {
        const style = document.createElement('style')
        style.innerHTML = styleText
        document.head.append(style)
    }

    useTemplate(templateText) {
        document.body.innerHTML = templateText
    }

}

new App

module.exports = App