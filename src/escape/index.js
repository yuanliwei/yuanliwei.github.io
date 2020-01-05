import insertCSS from './style.scss'
import templ from './template.html'
import BaseModel from '../cfg/BaseModel'
import { loadConfig } from '../js/utils/common'
import { initEvent } from './escape'

export default class Escape extends BaseModel {

    async init({ load }) {
        await load("jquery", "popper", "beautify", "fontawesome", "highlight")
        await load("bootstrap", "jquery.qrcode", "JsBarcode", "crypto", "pako", "jszip")


        insertCSS()
        document.body.innerHTML = templ

        loadConfig();
        initEvent();
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }
}