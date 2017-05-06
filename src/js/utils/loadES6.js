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
      console.log("load:" + JSON.stringify(params));
      var promises = LoadES6.getLoadPromises(params, this);
      return Promise.all(promises).catch((e)=>console.error(e));
    });
    return new LoadES6(this.config, this.promise);
  }

  then(callback, isAsync) {
    this.promise = this.promise.then((data)=>{
      return new Promise((resolve, reject)=>{
        if (isAsync) {
          callback(resolve, data);
        } else {
          data = callback(data);
          resolve(data);
        }
      }).catch((e)=>console.error(e));
    });
    return new LoadES6(this.config, this.promise);
  }

  wait(millis) {
    return this.then((resolve)=>{ setTimeout(resolve, millis) }, true);
  }

  hide(selector) {
    selector = selector || 'body';
    return this.then(()=> { document.querySelector(selector).style.display='none' })
  }

  show(selector) {
    selector = selector || 'body';
    return this.then(()=> { document.querySelector(selector).style.display='' })
  }

  static getLoadPromises(params, self) {
    var urls = LoadES6.getUrls(params, self);
    var promises = urls.map(url=>{
      return new Promise((resolve, reject)=>{
        var type = LoadES6.parseType(url);
        switch (type) {
          case "js":
            LoadES6.loadScript(url, resolve);
            break;
          case "css":
            LoadES6.loadLink(url, resolve);
            break;
          default:
            console.error("unknow type! " + url);
        }
      });
    });
    return promises;
  };

  static loadScript(url, resolve) {
    var node = document.createElement('script');
    node.type = 'text/javascript';
    node.charset = 'utf-8';
    node.async = true;
    node.src = url;
    LoadES6.appendNode(node, url, resolve);
  };

  static loadLink(url, resolve) {
    var node = document.createElement('link');
    node.rel = "stylesheet";
    node.href = url;
    LoadES6.appendNode(node, url, resolve);
  };

  static getUrls(params, self) {
    var urls = [];
    if (typeof params == "string") {
      params = [params];
    }
    params.map(param=> {
      var configUrls = self.config[param];
      if (configUrls) {
        urls = urls.concat(configUrls);
      } else {
        urls.push(param);
      }
    });
    return urls;
  }

  static appendNode(node, url, resolve) {
    if (LoadES6.loaded[url]) {
      resolve();
      return;
    }
    node.onload = function () {
      LoadES6.loaded[url] = true;
      resolve();
    };
    node.onerror = function (e) {
      console.error(JSON.stringify(e));
      resolve();
    };
    document.head.appendChild(node);
  }

  static parseType(url) {
    var urlArr = url.split('?');
    var urls = urlArr[0].split('.');
    var end = urls[urls.length-1];
    return end.toLowerCase();
  }

}

LoadES6.loaded = {};
