var RESTfulModel;

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
