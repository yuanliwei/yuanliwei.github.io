class ViewModel

  constructor: (@dom, @view, @node) ->
    # body...
    @childs = {}
    @parents = {}
    @notify = =>
      @dom.find('.key').text(@node.key)
      @dom.find('.name').text(@node.name)

    @addChild = (viewModel) =>
      delete @node.parents[viewModel.node.key]
      delete @parents[viewModel.node.key]
      delete viewModel.node.childs[@node.key]
      delete viewModel.childs[@node.key]

      @node.addChild viewModel.node
      @childs[viewModel.node.key] = viewModel
      viewModel.parents[@node.key] = @
    @deleteRelations = () =>
      for key, parent of @parents
        delete parent.childs[@node.key]
      for key, child of @childs
        delete child.parents[@node.key]
