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
        doLoad(this);
      }
      return this.chain;
    };

    this.then = function (callback_, isAsync) {
      this.chain = new Load(this.config);
      this.chain.___isChain = true;
      if (isAsync) {
        this.callbackAsync = callback_;
        if (!this.___isChain) {
          doThenAsync(this);
        }
      } else {
        this.callback = callback_;
        if (!this.___isChain) {
          doThen(this);
        }
      }
      return this.chain;
    };

    this.wait = function (millis) {
      return this.then(function(next) {
        setTimeout(next, millis);
      }, true);
    };

    this.hide = function(selector) {
      selector = selector || 'body';
      return this.then(function() { document.querySelector(selector).style.display='none'; });
    }

    this.show = function(selector) {
      selector = selector || 'body';
      return this.then(function() { document.querySelector(selector).style.display=''; });
    }

    this.___doNext = function () {
      if (this.callback) {
        doThen(this);
      }
      if (this.callbackAsync) {
        doThenAsync(this);
      }
      if (this.params) {
        doLoad(this);
      }
    };

    function doLoad(self) {
      self.___isChain = false;
      loadArgs(self.params, self.config, function () {
        if (self.chain) {
          self.chain.___doNext();
        }
      });
    };

    function doThen(self) {
      self.chain.data = self.callback(self.data);
      if (self.chain) {
        self.chain.___doNext();
        self.chain.___isChain = false;
      }
    };

    function doThenAsync(self) {
      self.callbackAsync(function (data) {
        if (self.chain) {
          self.chain.data = data;
          self.chain.___doNext();
        }
      }, self.data);
    }

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
