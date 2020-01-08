import insertCSS from './style.scss'
import templ from './template.html'
import BaseModel from '../cfg/BaseModel'

export default class Index extends BaseModel {

    /**
     * @param {Index} param0
     */
    async init({ load }) {
        await load('/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/loader.js')

        insertCSS()
        document.body.innerHTML = templ

        window['require'].config({ paths: { 'vs': '/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs' } })
        window['require'](['vs/editor/editor.main'], function () {
            /** @type{import('monaco-editor')*/
            const monaco = window['monaco']
            var editor = monaco.editor.create(document.querySelector('.editor-container'), {
                language: "javascript",
                roundedSelection: false,
                scrollBeyondLastLine: false,
                readOnly: false,
                theme: "vs",
                fontSize: 20,
            });
        });
    }
}