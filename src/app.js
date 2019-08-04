require("regenerator-runtime/runtime");

const Loader = require('@yuanliwei/web-loader');
const Index = require('./index/index')
const Generate = require('./gen/index')

new class App {
    constructor() {
        Loader.config(require('./cfg/loaderConfig'))
        this.loader = new Loader()
        window.onhashchange = (ev) => {
            switch (location.hash) {
                case '#/src/gen/gen.html': return new Generate(this)
                default: return new Index(this)
            }
        }
        window.onhashchange(location.hash)
    }
}
