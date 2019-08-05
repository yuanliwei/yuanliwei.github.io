
module.exports = class Index {

    constructor(app) {
        this.app = app
        this.loader = app.loader
        this.init()
    }

    async init() {
        const { app, loader } = this
        await loader.load('jquery', 'particles')
        await loader.load('jqueryui')
        await loader.load('https://cdn.bootcss.com/packery/2.1.2/packery.pkgd.min.js')

        const fs = require('fs')
        const style = document.createElement('style')
        style.innerHTML = fs.readFileSync(__dirname + '/style.css', 'utf-8')
        document.head.append(style)
        document.body.innerHTML = fs.readFileSync(__dirname + '/template.html', 'utf-8')

        Particles.init({
            selector: 'canvas',
            maxParticles: 5,
            color: ['#FF0000', '#FF0000', '#FF0000', '#00FF00', '#0000FF'],
            connectParticles: true
        })

        let grid = $('.grid').packery({
            itemSelector: '.grid-item',
            gutter: 30,
        })

        grid.on('click', '.grid-item', function (event) {
            location.hash = event.target.attributes.data.value
        })

        let sleep = async (time) => new Promise((resolve) => setTimeout(resolve, time))
        let cfg = [...require('./config')]
        while (cfg.length > 0) {
            let o = cfg.shift()
            let r = parseInt(Math.random() * 3)
            let cls = r == 0 ? 'grid-item-large'
                : r == 1 ? 'grid-item'
                    : 'grid-item-small'
            var item = $(`<div class="grid-item ${cls}" data="${o.href}">${o.name}</div>`).draggable()
            grid.append(item)
                .packery('appended', item)
                .packery('bindUIDraggableEvents', item)
            await sleep(100)
        }
    }
}