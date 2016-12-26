class RESTfulModel

  constructor: () ->
    # body...
    @start = ->
      # alert('hello restful')
      source0 = """
      var Node1;

      Node1 = (function() {
        function Node1() {
          this.name = "Node1{0}";
          this.key = "{0}";
          this.run = (function(_this) {
            return function(params, childs, callback) {
              var key, mIndex, mKey, mNotifyKeys, mResult, resultModel, value;
              console.log("run in source {0}");
              console.dir(params);
              mKey = _this.key;
              mIndex = 0;
              mResult = {
                'key1{0}': 'value1{0}',
                'key2{0}': 'value2{0}'
              };
              mNotifyKeys = [];
              for (key in childs) {
                value = childs[key];
                mNotifyKeys.push(value.key);
              }
              resultModel = new NodeResultModel(mKey, mIndex, mResult, mNotifyKeys);
              return callback(resultModel);
            };
          })(this);
        }

        return Node1;

      })();
      """
      #===========================================#
      node0 = new NodeModel(source0.format("000"))

      node1 = new NodeModel(source0.format("001"))
      node2 = new NodeModel(source0.format("002"))
      node3 = new NodeModel(source0.format("003"))
      node4 = new NodeModel(source0.format("004"))
      node5 = new NodeModel(source0.format("005"))
      node6 = new NodeModel(source0.format("006"))
      node7 = new NodeModel(source0.format("007"))
      node8 = new NodeModel(source0.format("008"))

      node0.addChild node1
      node0.addChild node2

      node1.addChild node3
      node2.addChild node3
      node3.addChild node4

      node0.onNotify()
