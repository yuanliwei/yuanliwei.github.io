var DrawLine;

DrawLine = (function() {
  function DrawLine() {
    this.canvas;
    this.g;
    this.draw = (function(_this) {
      return function() {
        var g;
        console.log("draw");
        _this.initCanvas();
        g = _this.g;
        g.strokeStyle = 'rgba(11,222,11,1)';
        g.lineWidth = 1;
        g.lineCap = 'round';
        g.clearRect(0, 0, canvas.width, canvas.height);
        g.fillStyle = 'rgba(222,111,111,0)';
        g.fillRect(0, 0, canvas.width, canvas.height);
        g.moveTo(20, 30);
        g.bezierCurveTo(50, 30, 20, 60, 70, 60);
        return g.stroke();
      };
    })(this);
    this.initCanvas = (function(_this) {
      return function() {
        var ch, cl, ct, cw;
        if (_this.canvas == null) {
          _this.canvas = $('#canvas');
          _this.g = canvas.getContext('2d');
          cl = 0;
          ct = 0;
          cw = 500;
          ch = 400;
          _this.canvas.css({
            'left': cl + 'px',
            'top': ct + 'px'
          });
          _this.canvas.width = cw;
          return _this.canvas.height = ch;
        }
      };
    })(this);
  }

  return DrawLine;

})();
