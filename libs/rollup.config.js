// rollup.config.js

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sass from 'rollup-plugin-sass'
import html from 'rollup-plugin-html'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import svelte from 'rollup-plugin-svelte'

export default {
    input: './libs/lib.js',
    output: {
        file: './cdn/lib.js',
        format: 'iife',
        sourcemap: true,
        globals: {}
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
    })],
    external: ['monaco-editor']
}