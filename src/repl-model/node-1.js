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
