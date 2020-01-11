// hack for rollup-plugin-sass
// eslint-disable-next-line no-undef
const insertStyle = ___$insertStyle
// eslint-disable-next-line no-undef
___$insertStyle = (css) => () => {
    insertStyle(css)
}

export default {
    "jquery": [
        "https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"
    ],
    "jqueryui": [
        "https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.structure.min.css",
        "https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.theme.min.css",
        "https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min.js",
        "https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min.css"
    ],
    "jquery.qrcode": [
        "https://cdn.bootcss.com/jquery.qrcode/1.0/jquery.qrcode.min.js"
    ],
    "JsBarcode": [
        "https://cdn.bootcss.com/jsbarcode/3.6.0/JsBarcode.all.min.js"
    ],
    "split": [
        "https://cdn.bootcss.com/split.js/1.3.5/split.min.js"
    ],
    "jquery-terminal": [
        "https://cdn.bootcss.com/jquery.terminal/1.4.0/css/jquery.terminal.min.css",
        "https://cdn.bootcss.com/jquery.terminal/1.4.0/js/jquery.terminal.min.js"
    ],
    "codemirror": [
        "https://cdn.bootcss.com/codemirror/5.48.4/codemirror.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/dracula.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/codemirror.min.css"
    ],
    "codemirror-show-hint": [
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/hint/show-hint.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/hint/show-hint.min.js"
    ],
    // "codemirror-javascript": [
    //     "https://cdn.bootcss.com/codemirror/5.48.4/addon/hint/javascript-hint.min.js",
    //     "https://cdn.bootcss.com/codemirror/5.48.4/addon/lint/javascript-lint.min.js",
    //     "https://cdn.bootcss.com/codemirror/5.48.4/mode/javascript/javascript.min.js"
    // ],
    "codemirror-theme": [
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/3024-day.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/3024-night.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/abcdef.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/ambiance.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/base16-dark.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/base16-light.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/bespin.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/blackboard.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/cobalt.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/colorforth.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/dracula.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/duotone-dark.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/duotone-light.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/eclipse.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/erlang-dark.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/hopscotch.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/icecoder.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/isotope.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/lesser-dark.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/liquibyte.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/material.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/mbo.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/mdn-like.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/midnight.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/monokai.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/neo.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/night.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/panda-syntax.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/paraiso-dark.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/paraiso-light.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/pastel-on-dark.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/railscasts.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/rubyblue.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/seti.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/solarized.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/the-matrix.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/tomorrow-night-bright.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/tomorrow-night-eighties.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/ttcn.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/twilight.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/vibrant-ink.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/xq-dark.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/xq-light.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/yeti.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/theme/zenburn.min.css"
    ],
    "codemirror-javascript": [
        "https://cdn.bootcss.com/codemirror/5.48.4/mode/javascript/javascript.min.js",
        // "https://cdn.bootcss.com/codemirror/5.48.4/addon/hint/javascript-hint.min.js"
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/hint/javascript-hint.js"
    ],
    "codemirror-fullscreen": [
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/display/fullscreen.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/display/fullscreen.min.js"
    ],
    "codemirror-comment": [
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/comment/comment.min.js"
    ],
    "codemirror-dialog": [
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/dialog/dialog.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/dialog/dialog.min.js"
    ],
    "codemirror-addons": [
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/edit/matchbrackets.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/fold/foldcode.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/fold/brace-fold.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/fold/indent-fold.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/fold/foldgutter.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/fold/foldgutter.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/edit/closebrackets.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/selection/selection-pointer.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/selection/mark-selection.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/selection/active-line.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/search/search.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/search/searchcursor.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/search/matchesonscrollbar.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/search/matchesonscrollbar.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/search/match-highlighter.min.js",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/scroll/annotatescrollbar.min.js"
    ],
    "mark": [
        "https://cdn.bootcss.com/mark.js/8.9.0/mark.min.js",
        "https://cdn.bootcss.com/mark.js/8.9.0/jquery.mark.min.js"
    ],
    "tether": [
        "https://cdn.bootcss.com/tether/1.4.0/css/tether.min.css",
        "https://cdn.bootcss.com/tether/1.4.0/js/tether.min.js"
    ],
    "popper": [
        "https://cdn.bootcss.com/popper.js/1.12.5/umd/popper.min.js"
    ],
    "bootstrap": [
        "https://cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap.min.css",
        "https://cdn.bootcss.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
    ],
    "bootstrap-css": [
        "https://cdn.bootcss.com/tether/1.4.0/css/tether.min.css",
        "https://cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
    ],
    "moment": [
        "https://cdn.bootcss.com/moment.js/2.19.4/moment.min.js",
        "https://cdn.bootcss.com/moment.js/2.19.4/locale/zh-cn.js"
    ],
    "jade": [
        "https://cdn.bootcss.com/jade/1.11.0/jade.min.js"
    ],
    "bootstrap-table": [
        "https://cdn.bootcss.com/bootstrap-table/1.11.1/bootstrap-table.min.js",
        "https://cdn.bootcss.com/bootstrap-table/1.11.1/bootstrap-table.min.css"
    ],
    "fontawesome": [
        "https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"
    ],
    "three.js": [
        "https://cdn.bootcss.com/three.js/r83/three.min.js"
    ],
    "Stats": [
        "https://cdn.bootcss.com/stats.js/r16/Stats.min.js"
    ],
    "particles": [
        "https://cdn.bootcss.com/particlesjs/2.2.3/particles.min.js"
    ],
    "bodymovin": [
        "https://cdn.bootcss.com/bodymovin/4.13.0/bodymovin.min.js"
    ],
    "csshake": [
        "https://cdn.bootcss.com/csshake/1.5.2/csshake.min.css"
    ],
    "beautify": [
        "https://cdn.bootcss.com/js-beautify/1.6.12/beautify.min.js"
    ],
    "highlight": [
        "https://cdn.bootcss.com/highlight.js/9.12.0/highlight.min.js",
        "https://cdn.bootcss.com/highlight.js/9.12.0/styles/atom-one-light.min.css"
    ],
    "highlight-languages": [
        "https://cdn.bootcss.com/highlight.js/9.12.0/languages/javascript.min.js",
        "https://cdn.bootcss.com/highlight.js/9.12.0/languages/xml.min.js",
        "https://cdn.bootcss.com/highlight.js/9.12.0/languages/json.min.js"
    ],
    "string-format": [
        "https://cdn.bootcss.com/string-format/0.5.0/string-format.min.js"
    ],
    "chart": [
        "https://cdn.bootcss.com/Chart.js/2.7.2/Chart.js",
        "https://cdn.bootcss.com/Chart.js/2.7.2/Chart.bundle.js"
    ],
    "sql": [
        "https://cdn.bootcss.com/sql.js/0.4.0/js/sql.js"
    ],
    "babel-core": [
        "https://unpkg.com/babel-standalone@6.15.0/babel.min.js"
    ],
    "react": [
        "https://cdn.bootcss.com/react/16.2.0/umd/react.development.js",
        "https://cdn.bootcss.com/react-dom/16.2.0/umd/react-dom.development.js",
        "https://cdn.bootcss.com/react-dom/16.2.0/umd/react-dom-server.browser.development.js"
    ],
    "jszip": [
        "https://cdn.bootcss.com/jszip/3.1.4/jszip.js"
    ],
    "crypto": [
        "https://cdn.bootcss.com/crypto-js/3.1.9/crypto-js.js"
    ],
    "goldenlayout": [
        "https://cdn.bootcss.com/golden-layout/1.5.9/css/goldenlayout-base.css",
        "https://cdn.bootcss.com/golden-layout/1.5.9/css/goldenlayout-light-theme.css",
        // "https://cdn.bootcss.com/golden-layout/1.5.9/css/goldenlayout-dark-theme.css",
        // "https://cdn.bootcss.com/golden-layout/1.5.9/css/default-theme.css",
        // "https://cdn.bootcss.com/golden-layout/1.5.9/css/goldenlayout-soda-theme.css",
        // "https://cdn.bootcss.com/golden-layout/1.5.9/css/goldenlayout-translucent-theme.css",
        "https://cdn.bootcss.com/golden-layout/1.5.9/goldenlayout.min.js"
    ],
    "pako": [
        "https://cdn.bootcss.com/pako/1.0.5/pako.min.js"
    ],
    "diff_match_patch": [
        "https://cdn.bootcss.com/diff_match_patch/20121119/diff_match_patch.js"
    ],
    "codemirror-merge": [
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/merge/merge.min.css",
        "https://cdn.bootcss.com/codemirror/5.48.4/addon/merge/merge.min.js"
    ],
    "ajv": [
        "https://cdn.bootcss.com/ajv/6.4.0/ajv.min.js"
    ],
    "monaco-editor": [
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/base/worker/workerMain.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/apex/apex.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/azcli/azcli.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/bat/bat.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/clojure/clojure.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/coffee/coffee.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/cpp/cpp.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/csharp/csharp.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/csp/csp.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/css/css.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/dockerfile/dockerfile.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/fsharp/fsharp.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/go/go.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/graphql/graphql.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/handlebars/handlebars.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/html/html.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/ini/ini.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/java/java.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/javascript/javascript.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/kotlin/kotlin.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/less/less.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/lua/lua.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/markdown/markdown.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/msdax/msdax.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/mysql/mysql.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/objective-c/objective-c.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/pascal/pascal.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/perl/perl.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/pgsql/pgsql.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/php/php.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/postiats/postiats.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/powerquery/powerquery.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/powershell/powershell.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/pug/pug.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/python/python.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/r/r.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/razor/razor.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/redis/redis.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/redshift/redshift.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/ruby/ruby.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/rust/rust.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/sb/sb.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/scheme/scheme.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/scss/scss.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/shell/shell.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/solidity/solidity.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/sql/sql.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/st/st.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/swift/swift.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/tcl/tcl.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/typescript/typescript.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/vb/vb.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/xml/xml.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/yaml/yaml.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.css",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.de.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.es.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.fr.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.it.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.ja.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.ko.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.ru.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.zh-cn.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.zh-tw.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/css/cssMode.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/css/cssWorker.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/html/htmlMode.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/html/htmlWorker.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/json/jsonMode.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/json/jsonWorker.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/typescript/tsMode.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/typescript/tsWorker.js",
        "https://cdn.bootcss.com/monaco-editor/0.18.0/min/vs/loader.js"
    ],
    "packery.pkgd": [
        "https://cdn.bootcss.com/packery/2.1.2/packery.pkgd.js"
    ],
    "dat.gui": [
        "https://cdn.bootcss.com/dat-gui/0.7.6/dat.gui.min.js"
    ]
}