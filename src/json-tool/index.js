import BaseModel from '../cfg/BaseModel'
import insertCSS from './style.scss'
import templ from './template.html'
import { loadConfig } from '../js/utils/common'
import { initEvent } from './json-tool'

export default class JsonTool extends BaseModel {

    async init({ load }) {
        await load("jquery", "popper", "string-format", "beautify", "highlight")
        await load("bootstrap")

        insertCSS()
        document.body.innerHTML = templ

        loadConfig()
        initEvent()
    }
}