var Load = (function () {
  function Load(config_) {
    this.config = config_ || {};

    this.___isChain = false;

    this.load = function () {
      this.params = [];
      this.chain = new Load(this.config);
      this.chain.___isChain = true;
      for (var i = 0; i < arguments.length; i++) {
        this.params.push(arguments[i]);
      }
      if (!this.___isChain) {
        this.___doLoad();
      }
      return this.chain;
    };

    this.then = function (callback_) {
      this.chain = new Load(this.config);
      this.chain.___isChain = true;
      this.callback = callback_;
      if (!this.___isChain) {
        this.___doThen();
      }
      return this.chain;
    };

    this.thenAsync = function (callbackAsync_) {
      this.chain = new Load(this.config);
      this.chain.___isChain = true;
      this.callbackAsync = callbackAsync_;
      if (!this.___isChain) {
        this.___doThenAsync();
      }
      return this.chain;
    };

    this.wait = function (millis) {
      this.chain = new Load(this.config);
      this.chain.___isChain = true;
      this.millis = millis;
      if (!this.___isChain) {
        this.___doWait();
      }
      return this.chain;
    };
// mmmm mmmmm mmmmmmmnn mnmnm mmmm
    this.___doLoad = function () {
      this.___isChain = false;
      var self = this;
      loadArgs(this.params, this.config, function () {
        if (self.chain) {
          self.chain.___doNext();
        }
      });
    };

    this.___doWait = function () {
      var self = this;
      setTimeout(function () {
        self.chain.___doNext();
      }, this.millis);
    };

    this.___doThen = function () {
      this.callback();
      if (this.chain) {
        this.chain.___doNext();
      }
    };

    this.___doThenAsync = function () {
      var self = this;
      this.callbackAsync(function () {
        if (self.chain) {
          self.chain.___doNext();
        }
      });
    }

    this.___doNext = function () {
      if (this.callback) {
        this.___doThen();
      }
      if (this.callbackAsync) {
        this.___doThenAsync();
      }
      if (this.params) {
        this.___doLoad();
      }
      if (this.millis) {
        this.___doWait();
      }
    };

    function loadArgs(params, config, callback) {
      var urls = getUrls(params, config);
      var ldParams = {};
      ldParams.size = urls.length;
      ldParams.overSize = 0;
      for (var i = 0; i < urls.length; i++) {
        var url = urls[i];
        var type = parseType(url);
        switch (type) {
          case "js":
            loadScript(url, ldParams, callback);
            break;
          case "css":
            loadLink(url, ldParams, callback);
            break;
          default:
            console.error("unknow type! " + url);
        }
      }
    };

    function loadScript(url, ldParams, callback) {
      var node = document.createElement('script');
      node.type = 'text/javascript';
      node.charset = 'utf-8';
      node.async = true;
      node.src = url;
      appendNode(node, url, ldParams, callback);
    };

    function loadLink(url, ldParams, callback) {
      var node = document.createElement('link');
      node.rel = "stylesheet";
      node.href = url;
      appendNode(node, url, ldParams, callback)
    };

    function getUrls(params, config) {
      var urls = [];
      for (var i = 0; i < params.length; i++) {
        var param = params[i];
        var configUrls = config[param];
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
