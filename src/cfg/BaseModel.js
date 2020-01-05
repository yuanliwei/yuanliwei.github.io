export default class BaseModel {

    /** @param {import('../app').default} app */
    constructor(app) {
        this.app = app
        this.load = (...args) => new Promise((resolve) => app.loader.load(...args).then(resolve))
        this.init(this)
    }

    // eslint-disable-next-line no-unused-vars
    async init({app, load}) {
    }
}

