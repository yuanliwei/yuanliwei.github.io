class DrawLine

  constructor: () ->
    # body...
    @canvas
    @g

    @draw = =>
      console.log "draw"
      @initCanvas()
      g = @g
      g.strokeStyle = 'rgba(11,222,11,1)'
      g.lineWidth = 1
      g.lineCap = 'round'
      g.clearRect(0, 0, canvas.width, canvas.height)
      g.fillStyle = 'rgba(222,111,111,0)'
      g.fillRect(0, 0, canvas.width, canvas.height)
      g.moveTo(20, 30)
      g.bezierCurveTo(50, 30, 20, 60, 70, 60)
      g.stroke()

    @initCanvas = =>
      if not @canvas?
        @canvas = $('#canvas')
        @g = canvas.getContext('2d')
        cl = 0
        ct = 0
        cw = 500
        ch= 400
        @canvas.css { 'left': cl + 'px', 'top': ct + 'px' }
        @canvas.width = cw
        @canvas.height = ch
