var NodeModel, RESTfulModel;

RESTfulModel = (function() {
  function RESTfulModel() {
    this.start = function() {
      var node;
      node = new NodeModel('name1', 'alert("exec code");');
      return node.onNotify();
    };
  }

  return RESTfulModel;

})();

NodeModel = (function() {
  function NodeModel(name, source) {
    this.name = name;
    this.source = source;
    this.parents = [];
    this.childs = [];
    this.callIndex;
    this.success = false;
    this.over = false;
    this.result = {};
    this.switchCase = 0;
    this.message;
    this.onNotify = (function(_this) {
      return function() {
        console.log('onNotify');
        if (!_this.canExecute()) {
          return;
        }
        _this.exec();
        _this.over = true;
        return _this.childs[_this.switchCase].onNotify();
      };
    })(this);
    this.canExecute = (function(_this) {
      return function() {
        var can;
        console.log('canExecute');
        can = true;
        _this.parents.forEach(function(parent) {
          if (!parent.over) {
            return can = false;
          }
        });
        return can;
      };
    })(this);
    this.exec = (function(_this) {
      return function() {
        var obj, params;
        console.log('exec');
        params = {};
        _this.parents.forEach(function(parent) {
          var key, result;
          result = parent.result;
          for (key in result) {
            params[key] = result[key];
          }
          return result;
        });
        obj = eval(_this.source);
        _this.result = obj.run(params);
        if (_this.result.switchCase != null) {
          return _this.switchCase = _this.result.switchCase;
        }
      };
    })(this);
  }

  return NodeModel;

})();
