// rollup.config.js

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sass from 'rollup-plugin-sass'
import html from 'rollup-plugin-html'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'

export default {
    input: './src/app.js',
    output: {
        file: './dest/bundle.js',
        format: 'iife',
        sourcemap: true,
        globals: { }
    },
    plugins: [resolve(), commonjs(), globals(), builtins(), html(), sass({
        insert: true,
        output: 'dest/style.css',
    })],
    external: ['monaco-editor']
}