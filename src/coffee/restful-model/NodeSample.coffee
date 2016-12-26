class NodeSample

  constructor: () ->
    # body...
    @name = "NodeSample"
    @key = "000"

    @run = (params, childs, callback) =>
      console.log "run in source {0}"
      console.dir params
      mKey = @key
      mIndex = 0
      mResult = {'key1{0}': 'value1{0}', 'key2{0}': 'value2{0}',}
      mNotifyKeys = []
      for key, value of childs
        mNotifyKeys.push value.key
      resultModel = new NodeResultModel(mKey, mIndex, mResult, mNotifyKeys)
      callback(resultModel)
