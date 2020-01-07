const fs = require('fs')
const path = require('path')

export default function copy() {
    return {
        name: 'copy',
        async generateBundle(options, bundle) {
            let fileName = 'index.html'
            let source = bundle[fileName].source
            // eslint-disable-next-line no-undef
            fs.writeFileSync(path.join(__dirname, fileName), source)
        }
    }
}