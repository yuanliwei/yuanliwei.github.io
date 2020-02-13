import Loader from '@yuanliwei/web-loader'
import cfg from './cfg/loaderConfig'
import Index from './index/index'
import Generate from './gen/Generate.svelte'
import Escape from './escape/Escape.svelte'
import JsonTool from './json-tool/index'
import RegExpDoc from './regexp-doc/index'
import Chart from './chart/Chart.svelte'
import GnuPlot from './gnuplot/index'
import Editor from './editor/index'
import EditorDiff from './editor/index-diff'
import QRScan from './qr-scan/QRScan.svelte'

class App {
    constructor() {
        navigator.serviceWorker.register('/cache.js')
        Loader.config(cfg)
        this.loader = new Loader()
        window.onhashchange = () => location.reload()
        this.initPage()
    }

    initPage() {
        const load = (...args) => new Promise((resolve) => this.loader.load(...args).then(resolve))
        const svelteParam = { target: document.body, props: { load: load } }
        switch (location.hash) {
            case '#/qrscan': return new QRScan({ target: document.body })
            case '#/editor/diff-editor': return new EditorDiff(this)
            case '#/editor/editor': return new Editor(this)
            // case '#/three.js/particle/fireworks': return new GnuPlot(this)
            case '#/gnuplot': return new GnuPlot(this)
            case '#/chart': return new Chart(svelteParam)
            case '#/regexp-doc': return new RegExpDoc(this)
            case '#/json-tool': return new JsonTool(this)
            case '#/escape': return new Escape(svelteParam)
            case '#/generate': return new Generate(svelteParam)
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
