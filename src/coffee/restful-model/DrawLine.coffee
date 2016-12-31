class DrawLine

  constructor: (@relationModel) ->
    # body...
    @canvas
    @g

    @draw = =>
      # console.log "draw"
      @initCanvas()
      g = @g
      g.strokeStyle = 'rgba(11,222,11,1)'
      g.lineWidth = 2
      g.lineCap = 'round'
      g.fillStyle = '#FFFFFF'
      g.clearRect(0, 0, canvas.width, canvas.height)
      # g.fillRect(0, 0, canvas.width, canvas.height)
      lines = @countLines(@relationModel.relations)
      g.strokeStyle = 'rgba(11,222,11,1)'
      g.fillStyle = 'rgba(11,222,11,1)'
      for line in lines
        # body...
        g.beginPath()
        g.moveTo line[0], line[1]
        g.bezierCurveTo(line[2], line[3], line[4], line[5], line[6], line[7])
        g.moveTo line[6], line[7]
        g.closePath()
        g.stroke()
        g.save()
        g.beginPath()
        g.translate line[8], line[9]
        x = line[8] - line[6]
        y = line[9] - line[7]
        g.rotate(line[10]+Math.PI/2)
        g.moveTo 0, 0
        g.lineTo -15, -20
        g.lineTo 0, 30
        g.lineTo 15, -20
        g.lineTo 0, 0
        g.fill()
        g.closePath()
        g.restore()

      lines = @countLines(@relationModel.repeatRelations)
      g.strokeStyle = 'rgba(222,11,11,1)'
      g.fillStyle = 'rgba(222,11,11,1)'
      for line in lines
        # body...
        g.beginPath()
        g.moveTo line[0], line[1]
        g.bezierCurveTo(line[2], line[3], line[4], line[5], line[6], line[7])
        g.moveTo line[6], line[7]
        g.closePath()
        g.stroke()
        g.save()
        g.beginPath()
        g.translate line[8], line[9]
        x = line[8] - line[6]
        y = line[9] - line[7]
        g.rotate(line[10]+Math.PI/2)
        g.moveTo 0, 0
        g.lineTo -15, -20
        g.lineTo 0, 30
        g.lineTo 15, -20
        g.lineTo 0, 0
        g.fill()
        g.closePath()
        g.restore()
      0

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
      cursor = @getCursor line, 50
      cursorEnd = @getCursor line, 20
      x = cursor.x - cursorEnd.x
      y = cursor.y - cursorEnd.y
      r = Math.sqrt(x*x+y*y)
      rad = Math.acos(x/r)
      rad = 2*Math.PI - rad if y<0
      line.push cursor.x
      line.push cursor.y
      line.push rad
      line

    @getLength = (p, c) =>
      x = p.x - c.x
      y = p.y - c.y
      Math.sqrt(x*x+y*y)
    @getCursor = (line, end) =>
      x0 = line[0]
      x1 = line[2]
      x2 = line[4]
      x3 = line[6]
      y0 = line[1]
      y1 = line[3]
      y2 = line[5]
      y3 = line[7]
      dt = 0.5
      t = 0.5
      count = 0
      for i in [0..10]
        #-----------------
        x11 = t*x1-t*x0+x0
        x12 = t*x2-t*x1+x1
        x13 = t*x3-t*x2+x2
        y11 = t*y1-t*y0+y0
        y12 = t*y2-t*y1+y1
        y13 = t*y3-t*y2+y2
        #-----------------
        x21 = t*x12-t*x11+x11
        x22 = t*x13-t*x12+x12
        y21 = t*y12-t*y11+y11
        y22 = t*y13-t*y12+y12
        #-----------------
        x = t*x22-t*x21+x21
        y = t*y22-t*y21+y21
        # ----------------
        length = @getLength {x:x,y:y},{x:x3,y:y3}
        dt = dt / 2
        if length > end
          t += dt
        else
          t -= dt
        count++
        # console.log "count:#{count} t:#{t} length:#{length}"
        if Math.abs(length-end) < 1
          break;
      {x:x,y:y}
