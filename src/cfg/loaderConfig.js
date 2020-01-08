// hack for rollup-plugin-sass
// eslint-disable-next-line no-undef
const insertStyle = ___$insertStyle
// eslint-disable-next-line no-undef
___$insertStyle = (css) => () => {
    insertStyle(css)
}

export default {
    "jquery": [
        "/cdn/cdn.bootcss.com/jquery/3.1.1/jquery.min.js"
    ],
    "jqueryui": [
        "/cdn/cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.structure.min.css",
        "/cdn/cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.theme.min.css",
        "/cdn/cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min.js",
        "/cdn/cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min.css"
    ],
    "jquery.qrcode": [
        "/cdn/cdn.bootcss.com/jquery.qrcode/1.0/jquery.qrcode.min.js"
    ],
    "JsBarcode": [
        "/cdn/cdn.bootcss.com/jsbarcode/3.6.0/JsBarcode.all.min.js"
    ],
    "split": [
        "/cdn/cdn.bootcss.com/split.js/1.3.5/split.min.js"
    ],
    "jquery-terminal": [
        "/cdn/cdn.bootcss.com/jquery.terminal/1.4.0/css/jquery.terminal.min.css",
        "/cdn/cdn.bootcss.com/jquery.terminal/1.4.0/js/jquery.terminal.min.js"
    ],
    "codemirror": [
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/codemirror.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/dracula.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/codemirror.min.css"
    ],
    "codemirror-show-hint": [
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/hint/show-hint.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/hint/show-hint.min.js"
    ],
    // "codemirror-javascript": [
    //     "https://cdn.bootcss.com/codemirror/5.25.2/addon/hint/javascript-hint.min.js",
    //     "https://cdn.bootcss.com/codemirror/5.25.2/addon/lint/javascript-lint.min.js",
    //     "https://cdn.bootcss.com/codemirror/5.25.2/mode/javascript/javascript.min.js"
    // ],
    "codemirror-theme": [
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/3024-day.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/3024-night.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/abcdef.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/ambiance.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/base16-dark.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/base16-light.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/bespin.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/blackboard.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/cobalt.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/colorforth.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/dracula.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/duotone-dark.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/duotone-light.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/eclipse.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/erlang-dark.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/hopscotch.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/icecoder.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/isotope.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/lesser-dark.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/liquibyte.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/material.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/mbo.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/mdn-like.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/midnight.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/monokai.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/neo.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/night.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/panda-syntax.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/paraiso-dark.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/paraiso-light.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/pastel-on-dark.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/railscasts.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/rubyblue.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/seti.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/solarized.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/the-matrix.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/tomorrow-night-bright.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/tomorrow-night-eighties.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/ttcn.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/twilight.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/vibrant-ink.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/xq-dark.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/xq-light.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/yeti.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/theme/zenburn.min.css"
    ],
    "codemirror-javascript": [
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/mode/javascript/javascript.min.js",
        // "https://cdn.bootcss.com/codemirror/5.25.2/addon/hint/javascript-hint.min.js"
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/hint/javascript-hint.js"
    ],
    "codemirror-fullscreen": [
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/display/fullscreen.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/display/fullscreen.min.js"
    ],
    "codemirror-comment": [
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/comment/comment.min.js"
    ],
    "codemirror-dialog": [
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/dialog/dialog.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/dialog/dialog.min.js"
    ],
    "codemirror-addons": [
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/edit/matchbrackets.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/fold/foldcode.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/fold/brace-fold.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/fold/indent-fold.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/fold/foldgutter.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/fold/foldgutter.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/edit/closebrackets.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/selection/selection-pointer.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/selection/mark-selection.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/selection/active-line.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/search/search.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/search/searchcursor.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/search/matchesonscrollbar.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/search/matchesonscrollbar.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/search/match-highlighter.min.js",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/scroll/annotatescrollbar.min.js"
    ],
    "mark": [
        "/cdn/cdn.bootcss.com/mark.js/8.9.0/mark.min.js",
        "/cdn/cdn.bootcss.com/mark.js/8.9.0/jquery.mark.min.js"
    ],
    "tether": [
        "/cdn/cdn.bootcss.com/tether/1.4.0/css/tether.min.css",
        "/cdn/cdn.bootcss.com/tether/1.4.0/js/tether.min.js"
    ],
    "popper": [
        "/cdn/cdn.bootcss.com/popper.js/1.12.5/umd/popper.min.js"
    ],
    "bootstrap": [
        "/cdn/cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap.min.css",
        "/cdn/cdn.bootcss.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
    ],
    "bootstrap-css": [
        "/cdn/cdn.bootcss.com/tether/1.4.0/css/tether.min.css",
        "/cdn/cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
    ],
    "moment": [
        "/cdn/cdn.bootcss.com/moment.js/2.19.4/moment.min.js",
        "/cdn/cdn.bootcss.com/moment.js/2.19.4/locale/zh-cn.js"
    ],
    "jade": [
        "/cdn/cdn.bootcss.com/jade/1.11.0/jade.min.js"
    ],
    "bootstrap-table": [
        "/cdn/cdn.bootcss.com/bootstrap-table/1.11.1/bootstrap-table.min.js",
        "/cdn/cdn.bootcss.com/bootstrap-table/1.11.1/bootstrap-table.min.css"
    ],
    "fontawesome": [
        "/cdn/cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"
    ],
    "three.js": [
        "/cdn/cdn.bootcss.com/three.js/r83/three.min.js"
    ],
    "Stats": [
        "/cdn/cdn.bootcss.com/stats.js/r16/Stats.min.js"
    ],
    "particles": [
        "/cdn/cdn.bootcss.com/particlesjs/2.2.3/particles.min.js"
    ],
    "bodymovin": [
        "/cdn/cdn.bootcss.com/bodymovin/4.13.0/bodymovin.min.js"
    ],
    "csshake": [
        "/cdn/cdn.bootcss.com/csshake/1.5.2/csshake.min.css"
    ],
    "beautify": [
        "/cdn/cdn.bootcss.com/js-beautify/1.6.12/beautify.min.js"
    ],
    "highlight": [
        "/cdn/cdn.bootcss.com/highlight.js/9.12.0/highlight.min.js",
        "/cdn/cdn.bootcss.com/highlight.js/9.12.0/styles/atom-one-light.min.css"
    ],
    "highlight-languages": [
        "/cdn/cdn.bootcss.com/highlight.js/9.12.0/languages/javascript.min.js",
        "/cdn/cdn.bootcss.com/highlight.js/9.12.0/languages/xml.min.js",
        "/cdn/cdn.bootcss.com/highlight.js/9.12.0/languages/json.min.js"
    ],
    "string-format": [
        "/cdn/cdn.bootcss.com/string-format/0.5.0/string-format.min.js"
    ],
    "chart": [
        "/cdn/cdn.bootcss.com/Chart.js/2.7.2/Chart.js",
        "/cdn/cdn.bootcss.com/Chart.js/2.7.2/Chart.bundle.js"
    ],
    "sql": [
        "/cdn/cdn.bootcss.com/sql.js/0.4.0/js/sql.js"
    ],
    "babel-core": [
        "/cdn/unpkg.com/babel-standalone@6.15.0/babel.min.js"
    ],
    "react": [
        "/cdn/cdn.bootcss.com/react/16.2.0/umd/react.development.js",
        "/cdn/cdn.bootcss.com/react-dom/16.2.0/umd/react-dom.development.js",
        "/cdn/cdn.bootcss.com/react-dom/16.2.0/umd/react-dom-server.browser.development.js"
    ],
    "jszip": [
        "/cdn/cdn.bootcss.com/jszip/3.1.4/jszip.js"
    ],
    "crypto": [
        "/cdn/cdn.bootcss.com/crypto-js/3.1.9/crypto-js.js"
    ],
    "goldenlayout": [
        "/cdn/cdn.bootcss.com/golden-layout/1.5.9/css/goldenlayout-base.css",
        "/cdn/cdn.bootcss.com/golden-layout/1.5.9/css/goldenlayout-light-theme.css",
        // "https://cdn.bootcss.com/golden-layout/1.5.9/css/goldenlayout-dark-theme.css",
        // "https://cdn.bootcss.com/golden-layout/1.5.9/css/default-theme.css",
        // "https://cdn.bootcss.com/golden-layout/1.5.9/css/goldenlayout-soda-theme.css",
        // "https://cdn.bootcss.com/golden-layout/1.5.9/css/goldenlayout-translucent-theme.css",
        "/cdn/cdn.bootcss.com/golden-layout/1.5.9/goldenlayout.min.js"
    ],
    "pako": [
        "/cdn/cdn.bootcss.com/pako/1.0.5/pako.min.js"
    ],
    "diff_match_patch": [
        "/cdn/cdn.bootcss.com/diff_match_patch/20121119/diff_match_patch.js"
    ],
    "codemirror-merge": [
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/merge/merge.min.css",
        "/cdn/cdn.bootcss.com/codemirror/5.25.2/addon/merge/merge.min.js"
    ],
    "ajv": [
        "/cdn/cdn.bootcss.com/ajv/6.4.0/ajv.min.js"
    ],
    "monaco-editor": [
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/base/worker/workerMain.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/apex/apex.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/azcli/azcli.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/bat/bat.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/clojure/clojure.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/coffee/coffee.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/cpp/cpp.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/csharp/csharp.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/csp/csp.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/css/css.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/dockerfile/dockerfile.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/fsharp/fsharp.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/go/go.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/graphql/graphql.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/handlebars/handlebars.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/html/html.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/ini/ini.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/java/java.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/javascript/javascript.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/kotlin/kotlin.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/less/less.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/lua/lua.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/markdown/markdown.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/msdax/msdax.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/mysql/mysql.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/objective-c/objective-c.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/pascal/pascal.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/perl/perl.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/pgsql/pgsql.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/php/php.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/postiats/postiats.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/powerquery/powerquery.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/powershell/powershell.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/pug/pug.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/python/python.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/r/r.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/razor/razor.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/redis/redis.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/redshift/redshift.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/ruby/ruby.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/rust/rust.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/sb/sb.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/scheme/scheme.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/scss/scss.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/shell/shell.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/solidity/solidity.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/sql/sql.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/st/st.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/swift/swift.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/tcl/tcl.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/typescript/typescript.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/vb/vb.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/xml/xml.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/basic-languages/yaml/yaml.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.css",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.de.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.es.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.fr.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.it.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.ja.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.ko.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.ru.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.zh-cn.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/editor/editor.main.nls.zh-tw.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/css/cssMode.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/css/cssWorker.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/html/htmlMode.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/html/htmlWorker.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/json/jsonMode.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/json/jsonWorker.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/typescript/tsMode.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/language/typescript/tsWorker.js",
        "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/loader.js"
    ],
    "packery.pkgd": [
        "/cdn/cdn.bootcss.com/packery/2.1.2/packery.pkgd.js"
    ]
}