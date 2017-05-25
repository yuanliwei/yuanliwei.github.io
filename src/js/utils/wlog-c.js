<script src="https://cdn.wilddog.com/sdk/js/2.5.6/wilddog.js" charset="utf-8"></script>
<script src="https://cdn.bootcss.com/pako/1.0.5/pako.min.js" charset="utf-8"></script>
<script>
(function () {
  function log(msg) {
    console.log(msg);
    var binaryString = pako.deflate(JSON.stringify(msg), { to: 'string' });
    getRef().set(binaryString);
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
})();

</script>
