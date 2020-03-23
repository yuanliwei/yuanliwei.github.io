// rollup.config.js

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sass from 'rollup-plugin-sass'
import html from 'rollup-plugin-html'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import svelte from 'rollup-plugin-svelte'
import livereload from 'rollup-plugin-livereload'

export default {
    input: './src/app.js',
    output: {
        file: './dest/bundle.js',
        format: 'iife',
        sourcemap: true,
        globals: {
            "echarts": "echarts",
            "element-resize-detector": "elementResizeDetectorMaker",
            "jsqr": "jsQR",
            "split.js": "Split",
            'jsbarcode': "JsBarcode",
            'qrcode': "QRCode",
            'vkbeautify': "vkbeautify",
            "canvas-datagrid": "canvasDatagrid",
        }
    },
    plugins: [svelte({
        dev: true,
        extensions: ['.svelte']
    }),
    resolve({
        browser: true,
        dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }), commonjs(), globals(), builtins(), html(), sass({
        insert: true,
        output: 'dest/style.css',
    }),
    livereload('dest/bundle.js')],
    external: ['monaco-editor']
}