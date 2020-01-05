/* global $ */

import BaseModel from '../cfg/BaseModel'
import insertCSS from './style.scss'
import templ from './template.html'
import {
    clearData,
    initChart,
    setSpaceSplitDataString
} from './chart'
import plugin_zoom from './chartjs-plugin-zoom.min.js'

export default class Chart extends BaseModel {

    async init({ load }) {
        await load("jquery", "popper", "beautify", "highlight", "chart")
        await load("bootstrap")
        plugin_zoom()

        insertCSS()
        document.body.innerHTML = templ

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