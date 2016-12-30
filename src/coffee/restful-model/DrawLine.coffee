class DrawLine

  constructor: (@relationModel) ->
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
      lines = @countLines(@relationModel.relations)
      g.beginPath()
      for line in lines
        # body...
        g.moveTo line[0], line[1]
        # g.lineTo line[6], line[7]
        g.bezierCurveTo(line[2], line[3], line[4], line[5], line[6], line[7])
        g.moveTo line[6], line[7]
        g.lineTo line[8], line[9]
        g.moveTo line[6], line[7]
        g.lineTo line[10], line[11]
        g.moveTo line[6], line[7]
      g.closePath()
      g.stroke()
      lines = @countLines(@relationModel.repeatRelations)
      g.strokeStyle = 'rgba(222,11,11,1)'
      g.beginPath()
      for line in lines
        # body...
        g.moveTo line[0], line[1]
        # g.lineTo line[6], line[7]
        g.bezierCurveTo(line[2], line[3], line[4], line[5], line[6], line[7])
        g.moveTo line[6], line[7]
        g.lineTo line[8], line[9]
        g.moveTo line[6], line[7]
        g.lineTo line[10], line[11]
        g.moveTo line[6], line[7]
      g.closePath()
      g.stroke()
      console.log "draw repeat line size : #{lines.length}"

    @initCanvas = =>
      if not @canvas?
        @canvas = $('#canvas')
        @content = $('#model_content')[0]
        @g = canvas.getContext('2d')
        @canvas.css { 'left': "#{@content.offsetLeft}px", 'top': "#{@content.offsetTop}px" }
        @canvas[0].width = document.body.scrollWidth
        @canvas[0].height = document.body.scrollHeight
      0

    @update = =>
      @initCanvas()
      @canvas.css { 'left': "#{@content.offsetLeft}px", 'top': "#{@content.offsetTop}px" }
      @canvas[0].width = document.body.scrollWidth
      @canvas[0].height = document.body.scrollHeight
      @draw()
      0


    @countLines = (relations)->
      lines = []
      for relation in relations
        # body...
        p = @getNodePosition(relation[0])
        c = @getNodePosition(relation[1])
        line = @getLine(p, c)
        dx = c.x - p.x
        dy = c.y - p.y
        # 箭头
        x = (p.x-c.x)
        y = (p.y-c.y)
        r = Math.sqrt(x*x+y*y)
        rad = 0.4/3*Math.PI
        x1 = (x*Math.cos(rad) - y*Math.sin(rad))/r*50+c.x
        y1 = (x*Math.sin(rad) + y*Math.cos(rad))/r*50+c.y
        rad = -rad
        x2 = (x*Math.cos(rad) - y*Math.sin(rad))/r*50+c.x
        y2 = (x*Math.sin(rad) + y*Math.cos(rad))/r*50+c.y
        line = [p.x, p.y, p.x + dx/3, p.y, c.x - dx/3, c.y, c.x, c.y, x1, y1, x2, y2]

        lines.push line
      lines

    @getNodePosition = (viewModel) ->
      view = viewModel.view
      left = view.offsetLeft
      top = view.offsetTop
      width = view.clientWidth
      height = view.clientHeight
      halfWidth = width / 2
      halfHeight = height / 2
      {
        top:   {x:left+halfWidth,y:top           }
        right: {x:left+width,    y:top+halfHeight}
        bottom:{x:left+halfWidth,y:top+height    }
        left:  {x:left,          y:top+halfHeight}
      }

    @getLine = (p, c) ->
      p1 = p.top
      c2 = c.top
      length = 9999999
      for key, value of p
        # body...
        lineLength = @getLength
