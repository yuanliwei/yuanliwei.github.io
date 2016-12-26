class ViewModel

  constructor: (@dom, @view, @node) ->
    # body...
    @notify = =>
      @dom.find('.key').text(@node.key)
      @dom.find('.name').text(@node.name)
