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

var config = {
  "jquery":["https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"]
};
new Load(config).load("jquery", "bootstrap", "jquery-ui")
  .then()
  .load("wlog").load("bodymovin", "model");

var Load = (function () {
  function Load(config_) {
    this.config = config_;
    this.isChain = false;
    this.loadArgs = function (args) {

    };
    this.doCallBack = function () {
      this.callback();
    }

    this.load = function () {
      var params = arguments;
      var load_ = this.load;
      var then_ = this.then;
      var args = null;

      if (this.isChain) {
        this.params = params;
      } else {
        this.loadArgs(params, function () {
          if (this.hasChain) {
            if (this.isDoLoad) {
              this.chain.doLoad(this.params);
            }
            if (this.isDoThen) {
              this.chain.doThen(this.callback);
            }
          }
        });
      }

      var chain = new Load(this.config);
      chain.isChain = true;
      
      return chain;
    }
    this.then = function (callback_) {
      var chain = new Load(this.config);
      if (this.isChain) {
        this.callback = callback_;
        chain.isChain = true;
      }
      return chain;
    }
  }

  return Load;
})
