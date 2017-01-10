var Login;

Login = (function() {
  function Login(username, password) {
    this.username = username;
    this.password = password;
    this.doLogin = (function(_this) {
      return function() {
        return _this.GET('http://www.baidu.com/login', function(headers, body) {
          var b, execution, lt;
          b = $(body);
          lt = b.find('input[name="lt"]').val();
          execution = b.find('input[name="execution"]').val();
          return _this.POST('http://www.baidu.com/login', {
            username: _this.username,
            password: _this.password,
            captcha: 9527,
            submit: '',
            lt: lt,
            execution: execution,
            _eventId: 'submit'
          }, function(headers, body) {
            return this.body = JSON.stringify(headers);
          });
        });
      };
    })(this);
    this.GET = (function(_this) {
      return function(url, onSuccess, onError) {
        return jsObj.GET({
          url: url,
          onSuccess: onSuccess,
          onError: onError
        });
      };
    })(this);
    this.POST = (function(_this) {
      return function(url, params, onSuccess, onError) {
        return jsObj.POST({
          url: url,
          params: _this.combine(params),
          onSuccess: onSuccess,
          onError: onError
        });
      };
    })(this);
    this.combine = (function(_this) {
      return function(params) {
        var key, kv, value;
        kv = [];
        for (key in params) {
          value = params[key];
          kv.push(key + "=" + value);
        }
        return kv.join('&');
      };
    })(this);
  }

  return Login;

})();
