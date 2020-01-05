import BaseModel from '../cfg/BaseModel'
import insertCSS from './style.scss'
import templ from './template.html'

export default class RegExpDoc extends BaseModel {
    async init() {
        insertCSS()
        document.body.innerHTML = templ
    }
}