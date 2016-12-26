var RESTfulModelView, ViewModel;

RESTfulModelView = (function() {
  var initClickEvent, initDragEvent;

  function RESTfulModelView() {
    this.views = [];
    this.addView = function(left, top, node) {
      var dom, source0, view;
      source0 = "<div class=\"model_item draggable\">\n  <div class=\"row\">\n    <div class=\"key col-xs-4 col-sm-4 col-md-4 bg-success\">\n      {key}\n    </div>\n    <div class=\"name col-xs-6 col-sm-6 col-md-6 bg-danger\">\n      {name}\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 bg-info handle\">\n      +\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 bg-primary\">\n      description <br><br><br><br>\n    </div>\n  </div>\n</div>";
      dom = $(source0.format(node));
      view = dom[0];
      this.views.push(new ViewModel(dom, view, node));
      view.style.left = left;
      view.style.top = top;
      initDragEvent(dom);
      initClickEvent(dom, node);
      return $('#model_content').append(dom);
    };
  }

  initClickEvent = function(dom, node) {
    return dom.click(function() {
      console.log('click dom');
      $('.editor').toggleClass('editor-hide editor-show');
      $('#editor-source').val(node.source);
      $('#editor-save').unbind('click').click(function() {
        node.source = $('#editor-source').val();
        node.onSourceChange();
        saveSourceData();
        return $('.editor').toggleClass('editor-hide editor-show');
      });
      return $('#editor-cancle').unbind('click').click(function() {
        return $('.editor').toggleClass('editor-hide editor-show');
      });
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
        return saveSourceData();
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
    this.notify = (function(_this) {
      return function() {
        _this.dom.find('.key').text(_this.node.key);
        return _this.dom.find('.name').text(_this.node.name);
      };
    })(this);
  }

  return ViewModel;

})();
