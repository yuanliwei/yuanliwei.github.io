var get, jsObj, post, refresh, run;

run = function() {
  var login;
  login = new Login('yyyyyy', '123456');
  login.doLogin();
  return $('#code_output').text(login.body);
};

refresh = function() {
  return window.location.href = window.location.href;
};

get = function() {
  return jsObj.GET({
    url: 'http://www.baidu.com',
    onSuccess: function(headers, body) {
      return alert(body);
    },
    onError: function(msg) {
      return alert(msg);
    }
  });
};

post = function() {
  return jsObj.POST({
    url: 'http://www.baidu.com',
    params: 'name=yyy',
    onSuccess: function(headers, body) {
      return alert(body);
    },
    onError: function(msg) {
      return alert(msg);
    }
  });
};

if (typeof jsObj === "undefined" || jsObj === null) {
  jsObj = {};
  jsObj.HTTP = function(callback) {
    return callback.onSuccess('success');
  };
}
