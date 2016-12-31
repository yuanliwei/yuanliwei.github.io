class Angle

  constructor: (@canvas, @points) ->
    # body...
    @initCanvas = =>
      if not @g?
        @g = @canvas.getContext('2d')
        @canvas.width = document.body.scrollWidth
        @canvas.height = document.body.scrollHeight - 10
      0
    @draw = =>
      @initTips()
      @initCanvas()
      console.log "draw"
      g = @g
      g.strokeStyle = 'rgba(11,222,11,1)'
      g.fillStyle = 'rgba(222,222,111,1)'
      g.lineWidth = 3
      g.lineCap = 'round'
      g.clearRect(0, 0, canvas.width, canvas.height)
      # g.fillRect(0, 0, canvas.width, canvas.height)
      g.beginPath()
      p = @points[0]
      g.moveTo p.x, p.y if @points.length > 1
      for p in @points
        g.lineTo p.x,p.y
      p = @points[@points.length-1]
      g.moveTo p.x,p.y if @points.length > 1
      g.closePath()
      g.stroke()
      for p in @points
        g.beginPath()
        g.arc(p.x,p.y,10,0,2*Math.PI)
        g.fill()
        g.closePath()
        g.stroke()
      g.fillStyle = 'rgba(255,0,0,1)'
      for p, i in @points
        g.fillText("P#{i}",p.x-5,p.y+5)

    @getLength = (p, c) =>
      x = p.x - c.x
      y = p.y - c.y
      Math.sqrt(x*x+y*y)
    @findPoint = (point)=>
      short = 50
      result = {x:-1000,y:-1000}
      for p in @points
        length = @getLength(point,p)
        if(length<short)
          result = p
      result
    @initTips = =>
      p00 = @points[0]
      p01 = @points[1]
      p02 = @points[2]
      return if not p02?
      p0 = {x:p00.x-p01?.x,y:-(p00.y-p01?.y)}
      p1 = {x:p01.x-p01?.x,y:-(p01.y-p01?.y)}
      p2 = {x:p02.x-p01?.x,y:-(p02.y-p01?.y)}
      tip = ""
      tip += "P0:{x:#{p0.x},y:#{p0.y}}<br>"
      tip += "P1:{x:#{p1.x},y:#{p1.y}}<br>"
      tip += "P2:{x:#{p2.x},y:#{p2.y}}<br>"
      tip += "-------------<br>"
      tip += "acos(x/sqrt(x*x+y*y)) = #{Math.acos(p0.x/Math.sqrt(p0.x*p0.x+p0.y*p0.y))*180/Math.PI}<br>"


      $('#tips').html(tip)
