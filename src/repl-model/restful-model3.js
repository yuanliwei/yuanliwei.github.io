var RESTfulModelView, ViewModel;

RESTfulModelView = (function() {
  var initClickEvent, initDragEvent;

  function RESTfulModelView(nodeDataArr) {
    this.nodeDataArr = nodeDataArr;
    this.views = [];
    this.start = function() {
      this.nodeDataArr.forEach((function(_this) {
        return function(source) {
          var node;
          node = new NodeModel(source);
          return _this.addView(0, 0, node);
        };
      })(this));
      return console.log("dom has created");
    };
    this.addView = function(x, y, node) {
      var dom, source0, view;
      source0 = "<div class=\"model_item draggable\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 col-sm-4 col-md-4 bg-success\">\n      {key}\n    </div>\n    <div class=\"col-xs-6 col-sm-6 col-md-6 bg-danger\">\n      {name}\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 bg-info handle\">\n      +\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 bg-primary\">\n      description <br><br><br><br>\n    </div>\n  </div>\n</div>";
      dom = $(source0.format(node));
      view = dom[0];
      this.views.push(new ViewModel(dom, view, node));
      view.style.left = x + "px";
      view.style.top = y + "px";
      initDragEvent(dom);
      initClickEvent(dom);
      return $('#model_content').append(dom);
    };
  }

  initClickEvent = function(dom) {
    return dom.click(function() {
      console.log('click dom');
      return $('.editor').toggleClass('hide');
    });
  };

  initDragEvent = function(dom) {
    var counts;
    counts = [0, 0, 0];
    return dom.draggable({
      "axis": false,
      "addClasses": true,
      "containment": "document",
      "cursor": "crosshair",
      "disabled": false,
      handle: ".handle",
      "revert": false,
      "revertDuration": 200,
      "scope": "default",
      "scroll": false,
      "scrollSensitivity": 100,
      "scrollSpeed": 100,
      "snap": true,
      "snapMode": "both",
      "snapTolerance": 10,
      "stack": ".container",
      "zIndex": 100,
      "iframeFix": true,
      "opacity": 0.85,
      "start": function(e) {
        return counts[0]++;
      },
      "drag": function() {
        return counts[1]++;
      },
      "stop": function() {
        return counts[2]++;
      }
    });
  };

  return RESTfulModelView;

})();

ViewModel = (function() {
  function ViewModel(dom1, view1, node1) {
    this.dom = dom1;
    this.view = view1;
    this.node = node1;
  }

  return ViewModel;

})();
