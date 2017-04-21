var getPath = function (path) {
  var url = document.location.href;
  return url.substr(0, url.indexOf('src')) + path;
}
var loadConfig = {
  "jquery":[
    "https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"
  ],
  "jqueryui":[
    "https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.structure.min.css",
    "https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.theme.min.css",
    "https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min.js",
    "https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min.css"
  ],
  "mark":[
    "https://cdn.bootcss.com/mark.js/8.9.0/mark.min.js",
    "https://cdn.bootcss.com/mark.js/8.9.0/jquery.mark.min.js"
  ],
  "bootstrap":[
    "https://cdn.bootcss.com/tether/1.4.0/css/tether.min.css",
    "https://cdn.bootcss.com/tether/1.4.0/js/tether.min.js",
    "https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",
    "https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
  ],
  "fontawesome":[
    "https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"
  ],
  "bodymovin":[
    "https://cdn.bootcss.com/bodymovin/4.5.8/bodymovin.js"
  ],
  "beautify":[
    "https://cdn.bootcss.com/js-beautify/1.6.12/beautify.min.js"
  ],
  "string-format":[
    "https://cdn.bootcss.com/string-format/0.5.0/string-format.min.js"
  ],
  "normal-list":[
    getPath("src/js/list/normal-list.js")
  ],
  "fast-list":[
    getPath("src/js/list/fast-list.js")
  ],
  "wlog":[
    getPath("src/js/utils/wlog.js")
  ]
};
