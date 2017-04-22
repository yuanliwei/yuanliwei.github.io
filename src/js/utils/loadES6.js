class LoadES6 {

  constructor(config_, promise_) {
    this.config = config_;
    this.promise = promise_ || Promise.resolve();
    return this;
  }

  load() {
    var params = [];
    for (var i = 0; i < arguments.length; i++) {
      params.push(arguments[i]);
    }
    this.promise = this.promise.then(()=>{
      return new Promise((resolve, reject)=>{
        console.log("doload - " + JSON.stringify(params));
        // TODO: change to map
        this.___loadParams(params, ()=> resolve());
      }).catch((e)=>console.error(e));
    });
    return new LoadES6(this.config, this.promise);
  }

  then(callback) {
    this.promise = this.promise.then(()=>{
      return new Promise((resolve, reject)=>{
        console.log("dothen");
        callback();
        resolve();
      }).catch((e)=>console.error(e));
    });
    return new LoadES6(this.config, this.promise);
  }

  wait(millis) {
    this.promise = this.promise.then(()=>{
      return new Promise((resolve, reject)=>{
        console.log("wait - " + millis);
        setTimeout(resolve, millis);
      }).catch((e)=>console.error(e));
    });
    return new LoadES6(this.config, this.promise);
  }

  ___loadParams(params, callback) {
    var urls = this.___getUrls(params);
    var ldParams = {};
    ldParams.size = urls.length;
    ldParams.overSize = 0;
    // TODO: use map
    // [1,2,3,4,5].map(v => {
    //     return v * 2;
    // })
    // [2, 4, 6, 8, 10]
    urls.map(url=>{
      var type = this.___parseType(url);
      switch (type) {
        case "js":
          this.___loadScript(url, ldParams, callback);
          break;
        case "css":
          this.___loadLink(url, ldParams, callback);
          break;
        default:
          console.error("unknow type! " + url);
      }
    });
  };

  ___loadScript(url, ldParams, callback) {
    var node = document.createElement('script');
    node.type = 'text/javascript';
    node.charset = 'utf-8';
    node.async = true;
    node.src = url;
    this.___appendNode(node, url, ldParams, callback);
  };

  ___loadLink(url, ldParams, callback) {
    var node = document.createElement('link');
    node.rel = "stylesheet";
    node.href = url;
    this.___appendNode(node, url, ldParams, callback)
  };

  ___getUrls(params) {
    var urls = [];
    if (typeof params == "string") {
      params = [params];
    }
    params.map(param=> {
      var configUrls = this.config[param];
      if (configUrls) {
        urls = urls.concat(configUrls);
      } else {
        urls.push(param);
      }
    });
    return urls;
  }

  ___appendNode(node, url, ldParams, callback) {
    if (LoadES6.loaded[url]) {
      ldParams.overSize++;
      if (ldParams.overSize == ldParams.size) {
        callback();
      }
      return;
    }
    node.onload = function () {
      LoadES6.loaded[url] = true;
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

  ___parseType(url) {
    var urlArr = url.split('?');
    var urls = urlArr[0].split('.');
    var end = urls[urls.length-1];
    return end.toLowerCase();
  }

}

LoadES6.loaded = {};
