var NodeModel;

NodeModel = (function() {
  function NodeModel(source) {
    var SrcNode;
    this.source = source;
    SrcNode = eval(this.source);
    this.node = new SrcNode();
    this.key = this.node.key;
    this.name = this.node.name;
    this.parents = {};
    this.childs = {};
    this.resultModelMap = {};
    this.addChild = (function(_this) {
      return function(node) {
        _this.childs[node.key] = node;
        return node.parents[_this.key] = _this;
      };
    })(this);
    this.onNotify = (function(_this) {
      return function(resultModel) {
        var modelMap;
        console.log("notify key " + _this.key);
        if (resultModel != null) {
          modelMap = _this.resultModelMap[resultModel.index];
        }
        if (modelMap == null) {
          modelMap = [];
          if (resultModel != null) {
            _this.resultModelMap[resultModel.index] = modelMap;
          }
        }
        if (resultModel != null) {
          modelMap.push(resultModel);
        }
        if (modelMap.length !== _this.parentsSize()) {
          return;
        }
        return _this.exec(modelMap);
      };
    })(this);
    this.onSourceChange = (function(_this) {
      return function() {
        SrcNode = eval(_this.source);
        _this.node = new SrcNode();
        _this.key = _this.node.key;
        return _this.name = _this.node.name;
      };
    })(this);
    this.parentsSize = (function(_this) {
      return function() {
        var count, key, ref, value;
        count = 0;
        ref = _this.parents;
        for (key in ref) {
          value = ref[key];
          count++;
        }
        return count;
      };
    })(this);
    this.exec = (function(_this) {
      return function(modelMap) {
        var params;
        params = {};
        modelMap.forEach(function(resultModel) {
          var key, result;
          result = resultModel.result;
          for (key in result) {
            params[key] = result[key];
          }
          return result;
        });
        return _this.node.run(params, _this.childs, function(newResultModel) {
          return newResultModel.notifyKeys.forEach(function(childKey) {
            return _this.childs[childKey].onNotify(newResultModel);
          });
        });
      };
    })(this);
  }

  return NodeModel;

})();
