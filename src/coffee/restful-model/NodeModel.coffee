class NodeModel

  constructor: (@source) ->
    # body...
    SrcNode = eval(@source)
    @node = new SrcNode()
    @key = @node.key
    @name = @node.name
    @parents = {}
    @childs = {}
    @resultModelMap = {}

    @addChild = (node) =>
      @childs[node.key] = node
      node.parents[@key] = @

    @resetRun = ()=>
      @resultModelMap = {}

    @onNotify = (resultModel) =>
      console.log "notify key #{@key}"
      modelMap = @resultModelMap[resultModel.index] if resultModel?
      if not modelMap?
        modelMap = []
        @resultModelMap[resultModel.index] = modelMap if resultModel?
      modelMap.push resultModel if resultModel?
      return unless modelMap.length == @parentsSize()
      @exec modelMap

    @onSourceChange = =>
      SrcNode = eval(@source)
      @node = new SrcNode()
      @key = @node.key
      @name = @node.name

    @parentsSize = =>
      count = 0
      for key, value of @parents
        # body...
        count++
      count

    @exec = (modelMap) =>
      params = {}
      modelMap.forEach (resultModel) =>
        result = resultModel.result
        for key of result
          params[key] = result[key]
        result
      @node.run params, @childs, (newResultModel) =>
        newResultModel.notifyKeys.forEach (childKey) =>
          @childs[childKey].onNotify newResultModel
