(function () {
  var wilddog_script = document.createElement("script");
  var pako_script = document.createElement("script");
  wilddog_script.src="https://cdn.wilddog.com/sdk/js/2.3.10/wilddog.js";
  pako_script.src="https://cdn.bootcss.com/pako/1.0.5/pako.min.js";
  document.head.appendChild(wilddog_script);
  document.head.appendChild(pako_script);

  function log(msg) {
      if(typeof pako == "undefined" || typeof wilddog == "undefined") {
        setTimeout(function () {
          log(msg);
        }, 100);
        return;
      }
      console.log(msg);
      var binaryString = pako.deflate(JSON.stringify(msg), { to: 'string' });
      getRef().set(binaryString);
    };

  function receive(callback) {
    if(typeof pako == "undefined" || typeof wilddog == "undefined") {
      setTimeout(function () {
        receive(callback);
      }, 100);
      return;
    }
    getRef().on('value', function(snapshot, prev) {
      var data = snapshot.val();
      var restored = JSON.parse(pako.inflate(data, { to: 'string' }));
      console.log("dataLen:" + data.length + " restoredLen:" + restored.length);
      callback(restored);
    });
  }

  function getRef() {
    var config, ref;
    config = {
      authDomain: "ylw-wuziqi.wilddog.com",
      syncURL: "https://ylw-wuziqi.wilddogio.com"
    };
    wilddog.initializeApp(config);
    ref = wilddog.sync().ref("/test-view-log");
    return ref;
  }

  window.addEventListener("error", function (e) {
    wlog("Error:" + e.message + "\n" + e.error.stack+"\n\tat:"+e.filename+" (line:"+e.lineno+" col:"+e.colno+")");
  });

  window.wlog = log;
  window.receiveLog = receive;
})();
