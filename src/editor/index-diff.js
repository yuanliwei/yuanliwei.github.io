import BaseModel from '../cfg/BaseModel'
import insertCSS from './style.scss'
import templ from './template.html'

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
            const erd = elementResizeDetectorMaker();
            let root = document.querySelector('.editor-container')
            /** @type{import('monaco-editor')*/
            const monaco = window['monaco']
            var editor = monaco.editor.createDiffEditor(root, {
                originalEditable: true,
            });

            var originalModel = monaco.editor.createModel("\n");
            var modifiedModel = monaco.editor.createModel("\n");

            editor.setModel({
                original: originalModel,
                modified: modifiedModel
            });

            erd.listenTo(root, element => {
                editor.layout();
            });
        });
    }
}