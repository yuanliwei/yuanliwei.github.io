//@ts-check

module.exports = class BaseModel {

    /**
     * @param {import('../app')} app
     */
    constructor(app) {
        this.app = app
        this.load = (...args) => new Promise((resolve) => app.loader.load(...args).then(resolve))
        this.init(this)
    }

    /**
     * @param {BaseModel} param0
     */
    async init({ app, load }) {
        // const fs = require('fs')
        // app.useStyle(fs.readFileSync(__dirname + '/style.css'))
        // app.useTemplate(fs.readFileSync(__dirname + '/template.html'))
    }
}