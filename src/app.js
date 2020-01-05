import Loader from '@yuanliwei/web-loader'
import cfg from './cfg/loaderConfig'
import Index from './index/index'
import Generate from './gen/index'
import Escape from './escape/index'
import JsonTool from './json-tool/index'
import RegExpDoc from './regexp-doc/index'
import Chart from './chart/index'
import GnuPlot from './gnuplot/index'
import Editor from './editor/index'
import EditorDiff from './editor/index-diff'

class App {
    constructor() {
        Loader.config(cfg)
        this.loader = new Loader()
        onhashchange = () => location.reload()
        this.initPage()
    }

    initPage() {
        switch (location.hash) {
            case '#/editor/diff-editor': return new EditorDiff(this)
            case '#/editor/editor': return new Editor(this)
            // case '#/three.js/particle/fireworks': return new GnuPlot(this)
            case '#/gnuplot': return new GnuPlot(this)
            case '#/chart': return new Chart(this)
            case '#/regexp-doc': return new RegExpDoc(this)
            case '#/json-tool': return new JsonTool(this)
            case '#/escape': return new Escape(this)
            case '#/generate': return new Generate(this)
            default: return new Index(this)
        }
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

export default App
