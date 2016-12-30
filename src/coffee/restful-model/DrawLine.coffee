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
      g.lineWidth = 3
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


    @countLines = (relations)=>
      lines = []
      for relation in relations
        # body...
        p = @getNodePosition(relation[0])
        c = @getNodePosition(relation[1])
        line = @getLine(p, c)
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
      [
        {x:left+halfWidth,y:top           }
        {x:left+width,    y:top+halfHeight}
        {x:left+halfWidth,y:top+height    }
        {x:left,          y:top+halfHeight}
      ]

    @getLine = (p, c) ->
      s = {p:p[0],c:c[0],i:0,j:0}
      short = 99999
      for i in [0...4]
        for j in [0...4]
          length = @getLength(p[i],c[j])
          if length < short
            short = length
            s = {p:p[i],c:c[j],i:i,j:j}

      dx = Math.abs(s.p.x-s.c.x) / 3
      dy = Math.abs(s.p.y-s.c.y) / 3
      line = []
      line.push s.p.x
      line.push s.p.y
      if s.i == 0
        line.push s.p.x
        line.push s.p.y - dy
      if s.i == 1
        line.push s.p.x + dx
        line.push s.p.y
      if s.i == 2
        line.push s.p.x
        line.push s.p.y + dy
      if s.i == 3
        line.push s.p.x - dy
        line.push s.p.y
      if s.j == 0
        line.push s.c.x
        line.push s.c.y - dy
      if s.j == 1
        line.push s.c.x + dx
        line.push s.c.y
      if s.j == 2
        line.push s.c.x
        line.push s.c.y + dy
      if s.j == 3
        line.push s.c.x - dy
        line.push s.c.y

      line.push s.c.x
      line.push s.c.y

      # 箭头
      x = line[4] - s.c.x
      y = line[5] - s.c.y
      r = Math.sqrt(x*x+y*y)
      rad = 0.4/3*Math.PI
      x1 = (x*Math.cos(rad) - y*Math.sin(rad))/r*50+s.c.x
      y1 = (x*Math.sin(rad) + y*Math.cos(rad))/r*50+s.c.y
      rad = -rad
      x2 = (x*Math.cos(rad) - y*Math.sin(rad))/r*50+s.c.x
      y2 = (x*Math.sin(rad) + y*Math.cos(rad))/r*50+s.c.y
      line.push x1
      line.push y1
      line.push x2
      line.push y2
      line

    @getLength = (p, c) =>
      x = p.x - c.x
      y = p.y - c.y
      Math.sqrt(x*x+y*y)
