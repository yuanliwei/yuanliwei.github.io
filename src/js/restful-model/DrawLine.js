var DrawLine;

DrawLine = (function() {
  function DrawLine(relationModel) {
    this.relationModel = relationModel;
    this.canvas;
    this.g;
    this.draw = (function(_this) {
      return function() {
        var g, i, j, len, len1, line, lines;
        console.log("draw");
        _this.initCanvas();
        g = _this.g;
        g.strokeStyle = 'rgba(11,222,11,1)';
        g.lineWidth = 10;
        g.lineCap = 'round';
        g.clearRect(0, 0, canvas.width, canvas.height);
        g.fillStyle = 'rgba(222,111,111,1)';
        lines = _this.countLines(_this.relationModel.relations);
        g.beginPath();
        for (i = 0, len = lines.length; i < len; i++) {
          line = lines[i];
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
        for (j = 0, len1 = lines.length; j < len1; j++) {
          line = lines[j];
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
    this.countLines = function(relations) {
      var c, dx, dy, i, len, line, lines, p, r, rad, relation, x, x1, x2, y, y1, y2;
      lines = [];
      for (i = 0, len = relations.length; i < len; i++) {
        relation = relations[i];
        p = this.getNodePosition(relation[0]);
        c = this.getNodePosition(relation[1]);
        line = this.getLine(p, c);
        dx = c.x - p.x;
        dy = c.y - p.y;
        x = p.x - c.x;
        y = p.y - c.y;
        r = Math.sqrt(x * x + y * y);
        rad = 0.4 / 3 * Math.PI;
        x1 = (x * Math.cos(rad) - y * Math.sin(rad)) / r * 50 + c.x;
        y1 = (x * Math.sin(rad) + y * Math.cos(rad)) / r * 50 + c.y;
        rad = -rad;
        x2 = (x * Math.cos(rad) - y * Math.sin(rad)) / r * 50 + c.x;
        y2 = (x * Math.sin(rad) + y * Math.cos(rad)) / r * 50 + c.y;
        line = [p.x, p.y, p.x + dx / 3, p.y, c.x - dx / 3, c.y, c.x, c.y, x1, y1, x2, y2];
        lines.push(line);
      }
      return lines;
    };
    this.getNodePosition = function(viewModel) {
      var halfHeight, halfWidth, height, left, top, view, width;
      view = viewModel.view;
      left = view.offsetLeft;
      top = view.offsetTop;
      width = view.clientWidth;
      height = view.clientHeight;
      halfWidth = width / 2;
      halfHeight = height / 2;
      return {
        top: {
          x: left + halfWidth,
          y: top
        },
        right: {
          x: left + width,
          y: top + halfHeight
        },
        bottom: {
          x: left + halfWidth,
          y: top + height
        },
        left: {
          x: left,
          y: top + halfHeight
        }
      };
    };
    this.getLine = function(p, c) {
      var c2, key, length, lineLength, p1, results, value;
      p1 = p.top;
      c2 = c.top;
      length = 9999999;
      results = [];
      for (key in p) {
        value = p[key];
        results.push(lineLength = this.getLength);
      }
      return results;
    };
  }

  return DrawLine;

})();
