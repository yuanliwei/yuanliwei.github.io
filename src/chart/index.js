module.exports = class Chart {
    constructor(app) {
        this.app = app
        this.loader = app.loader
        this.init()
    }

    async init() {
        const { app, loader } = this

        await loader.load("jquery", "popper", "string-format", "beautify", "highlight", "chart")
        await loader.load("bootstrap")

        const { loadConfig, saveConfig } = require('../js/utils/common')
        const { addData,
            setDatas,
            clearData,
            initChart,
            setSpaceSplitDataString } = require('./chart')

        require('./chartjs-plugin-zoom.min.js')

        const fs = require('fs')
        app.useStyle(fs.readFileSync(__dirname + '/style.css'))
        app.useTemplate(fs.readFileSync(__dirname + '/template.html'))

        var ctx = document.getElementById("myChart");
        initChart(ctx)

        $('.add').click(() => {
            var dataStr = $('#input_json_text').val()
            setSpaceSplitDataString(dataStr)
        })

        $('.clearChart').click(clearData)
        $('.resetData').click(() => {
            clearData()
            $('.add').click()
        })
    }
}