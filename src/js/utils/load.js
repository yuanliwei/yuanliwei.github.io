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
      this.isChain = false;
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

    this.loadArgs = function (params, callback) {
      var urls = this.getUrls(params);
      var ldParams = {};
      ldParams.size = urls.length;
      ldParams.overSize = 0;
      for (var i = 0; i < urls.length; i++) {
        var url = urls[i];
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
      if (Load.loadSrcMap[url]) {
        ldParams.overSize++;
        if (ldParams.overSize == ldParams.size) {
          callback();
        }
        return;
      }
      node.onload = function () {
        Load.loadSrcMap[url] = true;
        ldParams.overSize++;
        if (ldParams.overSize == ldParams.size) {
          callback();
        }
      };
      node.onerror = function (e) {
        console.error(JSON.stringify(e));
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

  Load.loadSrcMap = {};

  return Load;
})();
