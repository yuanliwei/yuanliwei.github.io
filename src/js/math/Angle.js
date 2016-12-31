var Angle;

Angle = (function() {
  function Angle(canvas1, points) {
    this.canvas = canvas1;
    this.points = points;
    this.initCanvas = (function(_this) {
      return function() {
        if (_this.g == null) {
          _this.g = _this.canvas.getContext('2d');
          _this.canvas.width = document.body.scrollWidth;
          _this.canvas.height = document.body.scrollHeight - 10;
        }
        return 0;
      };
    })(this);
    this.draw = (function(_this) {
      return function() {
        var g, i, j, k, l, len, len1, len2, p, ref, ref1, ref2, results;
        _this.initTips();
        _this.initCanvas();
        console.log("draw");
        g = _this.g;
        g.strokeStyle = 'rgba(11,222,11,1)';
        g.fillStyle = 'rgba(222,222,111,1)';
        g.lineWidth = 3;
        g.lineCap = 'round';
        g.clearRect(0, 0, canvas.width, canvas.height);
        g.beginPath();
        p = _this.points[0];
        if (_this.points.length > 1) {
          g.moveTo(p.x, p.y);
        }
        ref = _this.points;
        for (j = 0, len = ref.length; j < len; j++) {
          p = ref[j];
          g.lineTo(p.x, p.y);
        }
        p = _this.points[_this.points.length - 1];
        if (_this.points.length > 1) {
          g.moveTo(p.x, p.y);
        }
        g.closePath();
        g.stroke();
        ref1 = _this.points;
        for (k = 0, len1 = ref1.length; k < len1; k++) {
          p = ref1[k];
          g.beginPath();
          g.arc(p.x, p.y, 10, 0, 2 * Math.PI);
          g.fill();
          g.closePath();
          g.stroke();
        }
        g.fillStyle = 'rgba(255,0,0,1)';
        ref2 = _this.points;
        results = [];
        for (i = l = 0, len2 = ref2.length; l < len2; i = ++l) {
          p = ref2[i];
          results.push(g.fillText("P" + i, p.x - 5, p.y + 5));
        }
        return results;
      };
    })(this);
    this.getLength = (function(_this) {
      return function(p, c) {
        var x, y;
        x = p.x - c.x;
        y = p.y - c.y;
        return Math.sqrt(x * x + y * y);
      };
    })(this);
    this.findPoint = (function(_this) {
      return function(point) {
        var j, len, length, p, ref, result, short;
        short = 50;
        result = {
          x: -1000,
          y: -1000
        };
        ref = _this.points;
        for (j = 0, len = ref.length; j < len; j++) {
          p = ref[j];
          length = _this.getLength(point, p);
          if (length < short) {
            result = p;
          }
        }
        return result;
      };
    })(this);
    this.initTips = (function(_this) {
      return function() {
        var p0, p00, p01, p02, p1, p2, tip;
        p00 = _this.points[0];
        p01 = _this.points[1];
        p02 = _this.points[2];
        if (p02 == null) {
          return;
        }
        p0 = {
          x: p00.x - (p01 != null ? p01.x : void 0),
          y: -(p00.y - (p01 != null ? p01.y : void 0))
        };
        p1 = {
          x: p01.x - (p01 != null ? p01.x : void 0),
          y: -(p01.y - (p01 != null ? p01.y : void 0))
        };
        p2 = {
          x: p02.x - (p01 != null ? p01.x : void 0),
          y: -(p02.y - (p01 != null ? p01.y : void 0))
        };
        tip = "";
        tip += "P0:{x:" + p0.x + ",y:" + p0.y + "}<br>";
        tip += "P1:{x:" + p1.x + ",y:" + p1.y + "}<br>";
        tip += "P2:{x:" + p2.x + ",y:" + p2.y + "}<br>";
        tip += "-------------<br>";
        tip += "acos(x/sqrt(x*x+y*y)) = " + (Math.acos(p0.x / Math.sqrt(p0.x * p0.x + p0.y * p0.y)) * 180 / Math.PI) + "<br>";
        return $('#tips').html(tip);
      };
    })(this);
  }

  return Angle;

})();
