var DrawLine;

DrawLine = (function() {
  function DrawLine(relationModel) {
    this.relationModel = relationModel;
    this.canvas;
    this.g;
    this.draw = (function(_this) {
      return function() {
        var g, k, l, len, len1, line, lines;
        console.log("draw");
        _this.initCanvas();
        g = _this.g;
        g.strokeStyle = 'rgba(11,222,11,1)';
        g.lineWidth = 3;
        g.lineCap = 'round';
        g.clearRect(0, 0, canvas.width, canvas.height);
        g.fillStyle = 'rgba(222,111,111,1)';
        lines = _this.countLines(_this.relationModel.relations);
        g.beginPath();
        for (k = 0, len = lines.length; k < len; k++) {
          line = lines[k];
          g.moveTo(line[0], line[1]);
          g.bezierCurveTo(line[2], line[3], line[4], line[5], line[6], line[7]);
          g.moveTo(line[6], line[7]);
          g.lineTo(line[8], line[9]);
          g.moveTo(line[6], line[7]);
          g.lineTo(line[10], line[11]);
          g.moveTo(line[6], line[7]);
        }
        g.closePath();
        g.stroke();
        lines = _this.countLines(_this.relationModel.repeatRelations);
        g.strokeStyle = 'rgba(222,11,11,1)';
        g.beginPath();
        for (l = 0, len1 = lines.length; l < len1; l++) {
          line = lines[l];
          g.moveTo(line[0], line[1]);
          g.bezierCurveTo(line[2], line[3], line[4], line[5], line[6], line[7]);
          g.moveTo(line[6], line[7]);
          g.lineTo(line[8], line[9]);
          g.moveTo(line[6], line[7]);
          g.lineTo(line[10], line[11]);
          g.moveTo(line[6], line[7]);
        }
        g.closePath();
        g.stroke();
        return console.log("draw repeat line size : " + lines.length);
      };
    })(this);
    this.initCanvas = (function(_this) {
      return function() {
        if (_this.canvas == null) {
          _this.canvas = $('#canvas');
          _this.content = $('#model_content')[0];
          _this.g = canvas.getContext('2d');
          _this.canvas.css({
            'left': _this.content.offsetLeft + "px",
            'top': _this.content.offsetTop + "px"
          });
          _this.canvas[0].width = document.body.scrollWidth;
          _this.canvas[0].height = document.body.scrollHeight;
        }
        return 0;
      };
    })(this);
    this.update = (function(_this) {
      return function() {
        _this.initCanvas();
        _this.canvas.css({
          'left': _this.content.offsetLeft + "px",
          'top': _this.content.offsetTop + "px"
        });
        _this.canvas[0].width = document.body.scrollWidth;
        _this.canvas[0].height = document.body.scrollHeight;
        _this.draw();
        return 0;
      };
    })(this);
    this.countLines = (function(_this) {
      return function(relations) {
        var c, k, len, line, lines, p, relation;
        lines = [];
        for (k = 0, len = relations.length; k < len; k++) {
          relation = relations[k];
          p = _this.getNodePosition(relation[0]);
          c = _this.getNodePosition(relation[1]);
          line = _this.getLine(p, c);
          lines.push(line);
        }
        return lines;
      };
    })(this);
    this.getNodePosition = function(viewModel) {
      var halfHeight, halfWidth, height, left, top, view, width;
      view = viewModel.view;
      left = view.offsetLeft;
      top = view.offsetTop;
      width = view.clientWidth;
      height = view.clientHeight;
      halfWidth = width / 2;
      halfHeight = height / 2;
      return [
        {
          x: left + halfWidth,
          y: top
        }, {
          x: left + width,
          y: top + halfHeight
        }, {
          x: left + halfWidth,
          y: top + height
        }, {
          x: left,
          y: top + halfHeight
        }
      ];
    };
    this.getLine = function(p, c) {
      var dx, dy, i, j, k, l, length, line, r, rad, s, short, x, x1, x2, y, y1, y2;
      s = {
        p: p[0],
        c: c[0],
        i: 0,
        j: 0
      };
      short = 99999;
      for (i = k = 0; k < 4; i = ++k) {
        for (j = l = 0; l < 4; j = ++l) {
          length = this.getLength(p[i], c[j]);
          if (length < short) {
            short = length;
            s = {
              p: p[i],
              c: c[j],
              i: i,
              j: j
            };
          }
        }
      }
      dx = Math.abs(s.p.x - s.c.x) / 3;
      dy = Math.abs(s.p.y - s.c.y) / 3;
      line = [];
      line.push(s.p.x);
      line.push(s.p.y);
      if (s.i === 0) {
        line.push(s.p.x);
        line.push(s.p.y - dy);
      }
      if (s.i === 1) {
        line.push(s.p.x + dx);
        line.push(s.p.y);
      }
      if (s.i === 2) {
        line.push(s.p.x);
        line.push(s.p.y + dy);
      }
      if (s.i === 3) {
        line.push(s.p.x - dy);
        line.push(s.p.y);
      }
      if (s.j === 0) {
        line.push(s.c.x);
        line.push(s.c.y - dy);
      }
      if (s.j === 1) {
        line.push(s.c.x + dx);
        line.push(s.c.y);
      }
      if (s.j === 2) {
        line.push(s.c.x);
        line.push(s.c.y + dy);
      }
      if (s.j === 3) {
        line.push(s.c.x - dy);
        line.push(s.c.y);
      }
      line.push(s.c.x);
      line.push(s.c.y);
      x = line[4] - s.c.x;
      y = line[5] - s.c.y;
      r = Math.sqrt(x * x + y * y);
      rad = 0.4 / 3 * Math.PI;
      x1 = (x * Math.cos(rad) - y * Math.sin(rad)) / r * 50 + s.c.x;
      y1 = (x * Math.sin(rad) + y * Math.cos(rad)) / r * 50 + s.c.y;
      rad = -rad;
      x2 = (x * Math.cos(rad) - y * Math.sin(rad)) / r * 50 + s.c.x;
      y2 = (x * Math.sin(rad) + y * Math.cos(rad)) / r * 50 + s.c.y;
      line.push(x1);
      line.push(y1);
      line.push(x2);
      line.push(y2);
      return line;
    };
    this.getLength = (function(_this) {
      return function(p, c) {
        var x, y;
        x = p.x - c.x;
        y = p.y - c.y;
        return Math.sqrt(x * x + y * y);
      };
    })(this);
  }

  return DrawLine;

})();
