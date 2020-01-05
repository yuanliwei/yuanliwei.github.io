import BaseModel from '../cfg/BaseModel'
import templ from './template.html'
import insertCSS from './style.scss'
import gen from './gen'

export default class Generate extends BaseModel {
    async init({ load }) {
        await load("jquery", "popper", "beautify", "highlight")
        await load("bootstrap")
        insertCSS()
        document.body.innerHTML = templ
        gen()
    }
}