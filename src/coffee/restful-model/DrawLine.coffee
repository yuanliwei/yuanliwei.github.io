class DrawLine

  constructor: (@modelView) ->
    # body...
    @canvas
    @g

    @draw = =>
      console.log "draw"
      @initCanvas()
      g = @g
      g.strokeStyle = 'rgba(11,222,11,1)'
      g.lineWidth = 10
      g.lineCap = 'round'
      g.clearRect(0, 0, canvas.width, canvas.height)
      g.fillStyle = 'rgba(222,111,111,1)'
      # g.fillRect(0, 0, canvas.width, canvas.height)
      lines = @countLines()
      g.beginPath()
      for line in lines
        # body...
        g.moveTo line[0], line[1]
        # g.lineTo line[6], line[7]
        g.bezierCurveTo(line[2], line[3], line[4], line[5], line[6], line[7])
        g.moveTo line[6], line[7]
      g.closePath()
      g.stroke()

    @initCanvas = =>
      if not @canvas?
        @canvas = $('#canvas')
        @content = $('#model_content')[0]
        @g = canvas.getContext('2d')
        @canvas.css { 'left': "#{@content.offsetLeft}px", 'top': "#{@content.offsetTop}px" }
        @canvas[0].width = document.body.scrollWidth
        @canvas[0].height = document.body.scrollHeight

    @update = =>
      @initCanvas()
      @canvas.css { 'left': "#{@content.offsetLeft}px", 'top': "#{@content.offsetTop}px" }
      @canvas[0].width = document.body.scrollWidth
      @canvas[0].height = document.body.scrollHeight
      @draw()

    @countLines = ->
      lines = []
      relations = []
      for viewModel in @modelView.views
        if($.isEmptyObject(viewModel.parents))
          @getViewModelRelations viewModel, relations

      for relation in relations
        # body...
        p = @getNodePosition(relation[0])
        c = @getNodePosition(relation[1])
        dx = c.x - p.x
        dy = c.y - p.y
        line = [p.x, p.y, p.x + dx/3, p.y, c.x - dx/3, c.y, c.x, c.y]
        lines.push line
      lines

    @getNodePosition = (viewModel) ->
      view = viewModel.view
      left = view.offsetLeft
      top = view.offsetTop
      width = view.clientWidth
      height = view.clientHeight
      {x:left, y:top}

    @getViewModelRelations = (viewModel, relations) =>
      childs = viewModel.childs
      return if $.isEmptyObject(childs)
      return if relations.length > 1000
      for key, childViewModel of childs
        # body...
        relations.push [viewModel, childViewModel]
        @getViewModelRelations childViewModel, relations
