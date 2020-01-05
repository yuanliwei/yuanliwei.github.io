const fs = require('fs')
const path = require('path')
import { minify } from 'html-minifier'

export default function spa() {
    return {
        name: 'spa',
        async generateBundle(options, bundle) {

            let fileName = 'index.html'

            let content = fs.readFileSync(path.join('./src/index.html'), 'utf-8')
            let code = bundle['bundle.js'].code
            let html = content.replace('<script type="module" src="../dest/bundle.js"></script>', `<script>${code}</script>`)
            let source = minify(html, {
                removeComments: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: false,
                removeEmptyAttributes: false,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                minifyJS: true,
                minifyCSS: true
            })

            delete bundle['bundle.js']

            this.emitFile({
                type: 'asset',
                source,
                name: 'HTML Asset',
                fileName
            })
        }
    }
}