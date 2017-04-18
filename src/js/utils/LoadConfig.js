var LoadConfig = {
  getPath: function (path) {
    var url = document.location.href;
    return url.substr(0, url.indexOf('src')) + path;
  },
  "jquery":[
    "https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"
  ],
  "jqueryui":[
    "https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.structure.min.css",
    "https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.theme.min.css",
    "https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min.js",
    "https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min.css"
  ],
  "bootstrap":[
    "https://cdn.bootcss.com/tether/1.4.0/css/tether.min.css",
    "https://cdn.bootcss.com/tether/1.4.0/js/tether.min.js",
    "https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",
    "https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
  ],
  "bodymovin":[
    "https://cdn.bootcss.com/bodymovin/4.5.8/bodymovin.js"
  ],
  "wlog":[
    this.getPath("src/js/utils/wlog.js")
  ]
};
