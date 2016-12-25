class RESTfulModel

  constructor: () ->
    # body...
    @start = ->
      # alert('hello restful')
      node = new NodeModel('name1', 'alert("exec code");')
      node.onNotify()



class NodeModel

  constructor: (@name, @source) ->
    # body...
    @parents = []
    @childs = []
    @callIndex
    @success = false
    @over = false
    @result = {}
    @switchCase = 0
    @message
    @onNotify = =>
      console.log 'onNotify'
      return if not @canExecute()
      @exec()
      @over = true
      @childs[@switchCase].onNotify()

    @canExecute = =>
      console.log 'canExecute'
      can = true
      @parents.forEach (parent) ->
        can = false if not parent.over
      can

    @exec = =>
      console.log 'exec'
      params = {}
      @parents.forEach (parent) ->
        result = parent.result
        for key of result
          params[key] = result[key]
        result
      obj = eval(@source)
      @result = obj.run(params)
      @switchCase = @result.switchCase if @result.switchCase?
