import canvasDatagrid from "canvas-datagrid";
import jsQR from "jsqr";
import "@material/mwc-checkbox";
import "@material/mwc-drawer";
import "@material/mwc-formfield";
import "@material/mwc-icon-button";
import "@material/mwc-radio";
import "@material/mwc-textarea";
import "@material/mwc-textfield";
import "@material/mwc-top-app-bar";
import "@material/mwc-button";

import * as echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/dataZoom";
import elementResizeDetectorMaker from "element-resize-detector";
import Split from "split.js";

import vkbeautify from 'vkbeautify'
import QRCode from 'qrcode'
import JsBarcode from 'jsbarcode'

window['canvasDatagrid'] = canvasDatagrid;
window['jsQR'] = jsQR;
window['echarts'] = echarts;
window['elementResizeDetectorMaker'] = elementResizeDetectorMaker;
window['Split'] = Split;
window['vkbeautify'] = vkbeautify;
window['QRCode'] = QRCode;
window['JsBarcode'] = JsBarcode;