var wlog = function (msg) {
    console.log(msg);
    var binaryString = pako.deflate(JSON.stringify(msg), { to: 'string' });
    var config, ref;
    config = {
      authDomain: "ylw-wuziqi.wilddog.com",
      syncURL: "https://ylw-wuziqi.wilddogio.com"
    };
    wilddog.initializeApp(config);
    ref = wilddog.sync().ref("/test-view-log");
    ref.set(binaryString);
  };

function receive(callback) {
  var config, ref;
  config = {
    authDomain: "ylw-wuziqi.wilddog.com",
    syncURL: "https://ylw-wuziqi.wilddogio.com"
  };
  wilddog.initializeApp(config);
  ref = wilddog.sync().ref("/test-view-log");
  ref.on('value', function(snapshot, prev) {
    var data = snapshot.val();
    var restored = JSON.parse(pako.inflate(data, { to: 'string' }));
    callback(restored);
  });
}
