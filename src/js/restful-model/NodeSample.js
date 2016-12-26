var NodeSample;

NodeSample = (function() {
  function NodeSample() {
    this.name = "NodeSample";
    this.key = "000";
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

  return NodeSample;

})();
