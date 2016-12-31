var DrawLine;

DrawLine = (function() {
  function DrawLine(relationModel) {
    this.relationModel = relationModel;
    this.canvas;
    this.g;
    this.draw = (function(_this) {
      return function() {
        var g, k, l, len, len1, line, lines, x, y;
        _this.initCanvas();
        g = _this.g;
        g.strokeStyle = 'rgba(11,222,11,1)';
        g.lineWidth = 2;
        g.lineCap = 'round';
        g.fillStyle = '#FFFFFF';
        g.clearRect(0, 0, canvas.width, canvas.height);
        lines = _this.countLines(_this.relationModel.relations);
        g.strokeStyle = 'rgba(11,222,11,1)';
        g.fillStyle = 'rgba(11,222,11,1)';
        for (k = 0, len = lines.length; k < len; k++) {
          line = lines[k];
          g.beginPath();
          g.moveTo(line[0], line[1]);
          g.bezierCurveTo(line[2], line[3], line[4], line[5], line[6], line[7]);
          g.moveTo(line[6], line[7]);
          g.closePath();
          g.stroke();
          g.save();
          g.beginPath();
          g.translate(line[8], line[9]);
          x = line[8] - line[6];
          y = line[9] - line[7];
          g.rotate(line[10] + Math.PI / 2);
          g.moveTo(0, 0);
          g.lineTo(-15, -20);
          g.lineTo(0, 30);
          g.lineTo(15, -20);
          g.lineTo(0, 0);
          g.fill();
          g.closePath();
          g.restore();
        }
        lines = _this.countLines(_this.relationModel.repeatRelations);
        g.strokeStyle = 'rgba(222,11,11,1)';
        g.fillStyle = 'rgba(222,11,11,1)';
        for (l = 0, len1 = lines.length; l < len1; l++) {
          line = lines[l];
          g.beginPath();
          g.moveTo(line[0], line[1]);
          g.bezierCurveTo(line[2], line[3], line[4], line[5], line[6], line[7]);
          g.moveTo(line[6], line[7]);
          g.closePath();
          g.stroke();
          g.save();
          g.beginPath();
          g.translate(line[8], line[9]);
          x = line[8] - line[6];
          y = line[9] - line[7];
          g.rotate(line[10] + Math.PI / 2);
          g.moveTo(0, 0);
          g.lineTo(-15, -20);
          g.lineTo(0, 30);
          g.lineTo(15, -20);
          g.lineTo(0, 0);
          g.fill();
          g.closePath();
          g.restore();
        }
        return 0;
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
      var cursor, cursorEnd, dx, dy, i, j, k, l, length, line, r, rad, s, short, x, y;
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
      cursor = this.getCursor(line, 50);
      cursorEnd = this.getCursor(line, 20);
      x = cursor.x - cursorEnd.x;
      y = cursor.y - cursorEnd.y;
      r = Math.sqrt(x * x + y * y);
      rad = Math.acos(x / r);
      if (y < 0) {
        rad = 2 * Math.PI - rad;
      }
      line.push(cursor.x);
      line.push(cursor.y);
      line.push(rad);
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
    this.getCursor = (function(_this) {
      return function(line, end) {
        var count, dt, i, k, length, t, x, x0, x1, x11, x12, x13, x2, x21, x22, x3, y, y0, y1, y11, y12, y13, y2, y21, y22, y3;
        x0 = line[0];
        x1 = line[2];
        x2 = line[4];
        x3 = line[6];
        y0 = line[1];
        y1 = line[3];
        y2 = line[5];
        y3 = line[7];
        dt = 0.5;
        t = 0.5;
        count = 0;
        for (i = k = 0; k <= 10; i = ++k) {
          x11 = t * x1 - t * x0 + x0;
          x12 = t * x2 - t * x1 + x1;
          x13 = t * x3 - t * x2 + x2;
          y11 = t * y1 - t * y0 + y0;
          y12 = t * y2 - t * y1 + y1;
          y13 = t * y3 - t * y2 + y2;
          x21 = t * x12 - t * x11 + x11;
          x22 = t * x13 - t * x12 + x12;
          y21 = t * y12 - t * y11 + y11;
          y22 = t * y13 - t * y12 + y12;
          x = t * x22 - t * x21 + x21;
          y = t * y22 - t * y21 + y21;
          length = _this.getLength({
            x: x,
            y: y
          }, {
            x: x3,
            y: y3
          });
          dt = dt / 2;
          if (length > end) {
            t += dt;
          } else {
            t -= dt;
          }
          count++;
          if (Math.abs(length - end) < 1) {
            break;
          }
        }
        return {
          x: x,
          y: y
        };
      };
    })(this);
  }

  return DrawLine;

})();
