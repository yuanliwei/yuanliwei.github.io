var NodeModel, NodeResultModel, RESTfulModel;

RESTfulModel = (function() {
  function RESTfulModel() {
    this.start = function() {
      var node0, node1, node2, node3, node4, node5, node6, node7, node8, source0;
      source0 = "var Node1;\n\nNode1 = (function() {\n  function Node1() {\n    this.name = \"Node1{0}\";\n    this.key = \"{0}\";\n    this.run = (function(_this) {\n      return function(params, childs, callback) {\n        var key, mIndex, mKey, mNotifyKeys, mResult, resultModel, value;\n        console.log(\"run in source {0}\");\n        console.dir(params);\n        mKey = _this.key;\n        mIndex = 0;\n        mResult = {\n          'key1{0}': 'value1{0}',\n          'key2{0}': 'value2{0}'\n        };\n        mNotifyKeys = [];\n        for (key in childs) {\n          value = childs[key];\n          mNotifyKeys.push(value.key);\n        }\n        resultModel = new NodeResultModel(mKey, mIndex, mResult, mNotifyKeys);\n        return callback(resultModel);\n      };\n    })(this);\n  }\n\n  return Node1;\n\n})();";
      node0 = new NodeModel(source0.format("000"));
      node1 = new NodeModel(source0.format("001"));
      node2 = new NodeModel(source0.format("002"));
      node3 = new NodeModel(source0.format("003"));
      node4 = new NodeModel(source0.format("004"));
      node5 = new NodeModel(source0.format("005"));
      node6 = new NodeModel(source0.format("006"));
      node7 = new NodeModel(source0.format("007"));
      node8 = new NodeModel(source0.format("008"));
      node0.addChild(node1);
      node0.addChild(node2);
      node1.addChild(node3);
      node2.addChild(node3);
      node3.addChild(node4);
      return node0.onNotify();
    };
  }

  return RESTfulModel;

})();

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

NodeResultModel = (function() {
  function NodeResultModel(key1, index, result1, notifyKeys) {
    this.key = key1;
    this.index = index;
    this.result = result1;
    this.notifyKeys = notifyKeys;
  }

  return NodeResultModel;

})();
