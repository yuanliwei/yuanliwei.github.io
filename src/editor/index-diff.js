// @ts-check
const BaseModel = require('../cfg/BaseModel');

module.exports = class Index extends BaseModel {

    /**
     * @param {Index} param0
     */
    async init({ app, load }) {
        await load('https://cdn.bootcss.com/monaco-editor/0.14.3/min/vs/loader.js')

        const fs = require('fs')
        app.useStyle(fs.readFileSync(__dirname + '/style.css'))
        app.useTemplate(fs.readFileSync(__dirname + '/template.html'))

        window['require'].config({ paths: { 'vs': 'https://cdn.bootcss.com/monaco-editor/0.14.3/min/vs' } })
        window['require'](['vs/editor/editor.main'], function () {
            const monaco = window.monaco || require('monaco-editor');
            var editor = monaco.editor.createDiffEditor(document.querySelector('.editor-container'), {
                originalEditable: true,
            });

            var originalModel = monaco.editor.createModel("\n");
            var modifiedModel = monaco.editor.createModel("\n");

            editor.setModel({
                original: originalModel,
                modified: modifiedModel
            });
        });
    }
}