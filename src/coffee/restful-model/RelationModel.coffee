class RelationModel

  constructor: (@modelView) ->
    # body...
    @drawLine = new DrawLine(@modelView)
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

      @lastViewModel.addChild viewModel
      @lastViewModel.dom.toggleClass 'view-model-select'
      @lastViewModel = null
      @drawLine.draw()

    @update = =>
      @drawLine.update()
    @redraw = =>
      @drawLine.draw()
