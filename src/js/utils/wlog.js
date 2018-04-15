(function () {
  var wilddog_script = document.createElement("script");
  var pako_script = document.createElement("script");
  wilddog_script.src="https://cdn.wilddog.com/sdk/js/2.5.17/wilddog.js";
  pako_script.src="https://cdn.bootcss.com/pako/1.0.5/pako.min.js";
  if (typeof wilddog == "undefined") document.head.appendChild(wilddog_script);
  if (typeof pako == "undefined") document.head.appendChild(pako_script);

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
      try {
        var restored = JSON.parse(pako.inflate(data, { to: 'string' }));
        console.log("dataLen:" + data.length + " restoredLen:" + restored.length);
        callback(restored);
      } catch (e) {
        callback(data)
      }
    });
  }

  function getRef() {
    wilddog.initializeApp({ syncURL: "https://ylw-wuziqi.wilddogio.com" });
    return wilddog.sync().ref("/test-view-log");
  }

  window.addEventListener("error", function (e) {
    e.error = e.error || {}
    wlog("Error:" + e.message + "\n" + e.error.stack+"\n\tat:"+e.filename+" (line:"+e.lineno+" col:"+e.colno+")");
  });

  window.wlog = log;
  window.receiveLog = receive;
})();
