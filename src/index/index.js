import insertCSS from './style.scss'
import templ from './template.html'
import config from './config'
import BaseModel from '../cfg/BaseModel'

class Index extends BaseModel {
    async init({ load }) {
        await load('jquery', 'particles')
        await load('jqueryui')
        await load('packery.pkgd')
        insertCSS()
        document.body.innerHTML = templ
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

        let cfg = [...config]
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

export default Index