class RelationModel

  constructor: () ->
    # body...
    @drawLine = new DrawLine()
    @lastViewModel
    @click = (viewModel) =>
      if not @lastViewModel?
        @lastViewModel = viewModel
        @lastViewModel.dom.toggleClass 'view-model-select'
        return

      if @lastViewModel == viewModel
        @lastViewModel.dom.toggleClass 'view-model-select'
        @lastViewModel = null
        return

      delete @lastViewModel.node.parents[viewModel.node.key]
      delete viewModel.node.childs[@lastViewModel.node.key]

      @lastViewModel.node.addChild viewModel.node
      @lastViewModel.dom.toggleClass 'view-model-select'
      @lastViewModel = null
      @drawLine.draw()
