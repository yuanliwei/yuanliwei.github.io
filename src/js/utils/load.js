/*
(function () {
  function Load(params) {
    if (typeof params == "array") {
      params.forEach(function (param) {
        parseParam(param);
      });
    } else {
      parseParam(params);
    }

    function parseParam(param) {
      if (param.startsWith('http')) {
        loadScript(param);
      } else if (param.startsWith('file')) {
        loadScript(param);
      } else if (param.startsWith('.')) {
        loadScript(param);
      } else if (param.startsWith('.')) {
        loadScript(param);
      } else {

      }
    }

    function loadScript(src) {
      var script = document.createElement("script");
      script.src = src;
      script.type = ""
      document.head.appendChild(script);
    }

    function loadStyle(src) {
      var style = document.createElement("link");
      style.src = src;
      style.rel="stylesheet";
      document.head.appendChild(style);
    }
  }

  return Load;
})();
*/

// var config = {
//   "jquery":["https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"]
// };
// new Load(config).load("jquery", "bootstrap", "jquery-ui")
//   .then(func)
//   .load("wlog").load("bodymovin", "model");

var Load = (function () {
  function Load(config_) {
    this.config = config_ || {};
    this.isChain = false;

    this.load = function () {
      this.params = [];
      this.chain = new Load(this.config);
      this.chain.isChain = true;
      for (var i = 0; i < arguments.length; i++) {
        this.params.push(arguments[i]);
      }
      if (!this.isChain) {
        this.doLoad();
      }
      return this.chain;
    };

    this.then = function (callback_) {
      this.chain = new Load(this.config);
      this.chain.isChain = true;
      this.callback = callback_;
      if (!this.isChain) {
        this.doThen();
      }
      return this.chain;
    };

    this.wait = function (millis) {
      this.chain = new Load(this.config);
      this.chain.isChain = true;
      this.millis = millis;
      if (!this.isChain) {
        this.doWait();
      }
      return this.chain;
    };

    this.doLoad = function () {
      var self = this;
      this.loadArgs(this.params, function () {
        if (self.chain) {
          self.chain.doNext();
        }
      });
    };

    this.doWait = function () {
      var self = this;
      setTimeout(function () {
        self.chain.doNext();
      }, this.millis);
    };

    this.doThen = function () {
      this.callback();
      if (this.chain) {
        this.chain.doNext();
      }
    };

    this.doNext = function () {
      if (this.callback) {
        this.doThen();
      }
      if (this.params) {
        this.doLoad();
      }
      if (this.millis) {
        this.doWait();
      }
    };

    this.loadParamMap = {};
    this.loadArgs = function (params, callback) {
      var urls = this.getUrls(params);
      var ldParams = {};
      this.loadParamMap[params] = ldParams;
      ldParams.size = urls.length;
      ldParams.overSize = 0;
      for (var i = 0; i < urls.length; i++) {
        var url = urls[i];
        // TODO: 解析文件名判断是 js 还是 css
        var type = parseType(url);
        switch (type) {
          case "js":
            this.loadScript(url, ldParams, callback);
            break;
          case "css":
            this.loadLink(url, ldParams, callback);
            break;
          default:
            console.error("unknow type! " + url);
        }
      }
      // setTimeout(function () {
      //   console.log("loadParams..." + JSON.stringify(params));
      //   callback();
      // }, 1000);
    };

    this.loadScript = function (url, ldParams, callback) {
      var node = document.createElement('script');
      node.type = 'text/javascript';
      node.charset = 'utf-8';
      node.async = true;
      node.src = url;
      appendNode(node, url, ldParams, callback);
    };

    this.loadLink = function (url, ldParams, callback) {
      var node = document.createElement('link');
      node.rel = "stylesheet";
      node.href = url;
      appendNode(node, url, ldParams, callback)
    };

    this.getUrls = function (params) {
      var urls = [];
      for (var i = 0; i < params.length; i++) {
        var param = params[i];
        var configUrls = this.config[param];
        if (configUrls) {
          urls = urls.concat(configUrls);
        } else {
          urls.push(param);
        }
      }
      return urls;
    }

    function appendNode(node, url, ldParams, callback) {
      node.onload = function () {
        ldParams.overSize++;
        if (ldParams.overSize == ldParams.size) {
          callback();
        }
      };
      node.onerror = function (e) {
        console.error(e.stack);
        ldParams.overSize++;
        if (ldParams.overSize == ldParams.size) {
          callback();
        }
      };
      document.head.appendChild(node);
    }

    function isEmptyObject(e) {
      var t;
      for (t in e)
      return !1;
      return !0
    }

    function parseType(url) {
      var urlArr = url.split('?');
      var urls = urlArr[0].split('.');
      var end = urls[urls.length-1];
      return end.toLowerCase();
    }

  }

  return Load;
})();
