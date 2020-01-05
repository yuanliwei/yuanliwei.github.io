import insertCSS from './style.scss'
import templ from './template.html'
import BaseModel from '../cfg/BaseModel'
import './gnuplot_api.js'
import App from './app'

export default class GnuPlot extends BaseModel {

    async init({ load }) {
        await load("jquery", "popper", "fontawesome", "csshake")
        await load("bootstrap", "jqueryui", "split", "codemirror")
        await load("codemirror-javascript", "codemirror-show-hint", "codemirror-addons", "codemirror-fullscreen", "codemirror-comment", "codemirror-theme")

        insertCSS()
        document.body.innerHTML = templ

        new App()
    }
}