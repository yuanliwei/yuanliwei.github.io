var DrawLine;

DrawLine = (function() {
  function DrawLine(modelView) {
    this.modelView = modelView;
    this.canvas;
    this.g;
    this.draw = (function(_this) {
      return function() {
        var g, i, len, line, lines;
        console.log("draw");
        _this.initCanvas();
        g = _this.g;
        g.strokeStyle = 'rgba(11,222,11,1)';
        g.lineWidth = 10;
        g.lineCap = 'round';
        g.clearRect(0, 0, canvas.width, canvas.height);
        g.fillStyle = 'rgba(222,111,111,1)';
        lines = _this.countLines();
        g.beginPath();
        for (i = 0, len = lines.length; i < len; i++) {
          line = lines[i];
          g.moveTo(line[0], line[1]);
          g.bezierCurveTo(line[2], line[3], line[4], line[5], line[6], line[7]);
          g.moveTo(line[6], line[7]);
        }
        g.closePath();
        return g.stroke();
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
          return _this.canvas[0].height = document.body.scrollHeight;
        }
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
        return _this.draw();
      };
    })(this);
    this.countLines = function() {
      var c, dx, dy, i, j, len, len1, line, lines, p, ref, relation, relations, viewModel;
      lines = [];
      relations = [];
      ref = this.modelView.views;
      for (i = 0, len = ref.length; i < len; i++) {
        viewModel = ref[i];
        if ($.isEmptyObject(viewModel.parents)) {
          this.getViewModelRelations(viewModel, relations);
        }
      }
      for (j = 0, len1 = relations.length; j < len1; j++) {
        relation = relations[j];
        p = this.getNodePosition(relation[0]);
        c = this.getNodePosition(relation[1]);
        dx = c.x - p.x;
        dy = c.y - p.y;
        line = [p.x, p.y, p.x + dx / 3, p.y, c.x - dx / 3, c.y, c.x, c.y];
        lines.push(line);
      }
      return lines;
    };
    this.getNodePosition = function(viewModel) {
      var height, left, top, view, width;
      view = viewModel.view;
      left = view.offsetLeft;
      top = view.offsetTop;
      width = view.clientWidth;
      height = view.clientHeight;
      return {
        x: left,
        y: top
      };
    };
    this.getViewModelRelations = (function(_this) {
      return function(viewModel, relations) {
        var childViewModel, childs, key, results;
        childs = viewModel.childs;
        if ($.isEmptyObject(childs)) {
          return;
        }
        if (relations.length > 1000) {
          return;
        }
        results = [];
        for (key in childs) {
          childViewModel = childs[key];
          relations.push([viewModel, childViewModel]);
          results.push(_this.getViewModelRelations(childViewModel, relations));
        }
        return results;
      };
    })(this);
  }

  return DrawLine;

})();
