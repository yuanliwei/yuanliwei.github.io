import "@material/mwc-button";
import "@material/mwc-checkbox";
import "@material/mwc-drawer";
import "@material/mwc-formfield";
import "@material/mwc-icon-button";
import "@material/mwc-radio";
import "@material/mwc-textarea";
import "@material/mwc-textfield";
import "@material/mwc-top-app-bar";

import "echarts/lib/chart/bar";
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/tooltip";
import * as echarts from "echarts/lib/echarts";

import JsBarcode from 'jsbarcode'
import QRCode from 'qrcode'
import Split from "split.js";
import canvasDatagrid from "canvas-datagrid";
import elementResizeDetectorMaker from "element-resize-detector";
import jsQR from "jsqr";
import vkbeautify from 'vkbeautify'

window['canvasDatagrid'] = canvasDatagrid;
window['jsQR'] = jsQR;
window['echarts'] = echarts;
window['elementResizeDetectorMaker'] = elementResizeDetectorMaker;
window['Split'] = Split;
window['vkbeautify'] = vkbeautify;
window['QRCode'] = QRCode;
window['JsBarcode'] = JsBarcode;