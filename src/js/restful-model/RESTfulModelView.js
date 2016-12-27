var RESTfulModelView;

RESTfulModelView = (function() {
  var initClickEvent, initDragEvent;

  function RESTfulModelView() {
    this.views = [];
    this.createAddView = function(left, top) {
      var node, source;
      source = "var NodeSample;\n\nNodeSample = (function() {\n  function NodeSample() {\n    this.name = \"NodeSample\";\n    this.key = \"000\";\n    this.run = (function(_this) {\n      return function(params, childs, callback) {\n        var key, mIndex, mKey, mNotifyKeys, mResult, resultModel, value;\n        console.log(\"run in source {0}\");\n        console.dir(params);\n        mKey = _this.key;\n        mIndex = 0;\n        mResult = {\n          'key1{0}': 'value1{0}',\n          'key2{0}': 'value2{0}'\n        };\n        mNotifyKeys = [];\n        for (key in childs) {\n          value = childs[key];\n          mNotifyKeys.push(value.key);\n        }\n        resultModel = new NodeResultModel(mKey, mIndex, mResult, mNotifyKeys);\n        return callback(resultModel);\n      };\n    })(this);\n  }\n\n  return NodeSample;\n\n})();";
      node = new NodeModel(source);
      return this.addView(left, top, node);
    };
    this.addView = function(left, top, node) {
      var dom, source0, view, viewModel;
      source0 = "<div class=\"model_item draggable\">\n  <div class=\"row\">\n    <div class=\"key col-xs-10 col-sm-10 col-md-10 bg-success handle\">\n      {key}\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 bg-info editor-delete\">\n      -\n    </div>\n    <div class=\"name col-xs-12 col-sm-12 col-md-12 bg-danger editor-action\">\n      {name}\n    </div>\n  </div>\n  <div class=\"row editor-select\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 bg-primary\">\n      description <br><br><br><br>\n    </div>\n  </div>\n</div>";
      dom = $(source0.format(node));
      view = dom[0];
      viewModel = new ViewModel(dom, view, node);
      this.views.push(viewModel);
      view.style.left = left;
      view.style.top = top;
      initDragEvent(dom);
      initClickEvent(dom, node, viewModel);
      return $('#model_content').append(dom);
    };
  }

  initClickEvent = function(dom, node, viewModel) {
    dom.find('.editor-action').click(function() {
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
    dom.find('.editor-delete').click(function() {
      return deleteNodeView(viewModel);
    });
    return dom.find('.editor-select').click(function() {
      return relationModel.click(viewModel);
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
      "scroll": true,
      "scrollSensitivity": 100,
      "scrollSpeed": 10,
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
        return relationModel.redraw();
      },
      "stop": function() {
        return saveSourceData();
      }
    });
  };

  return RESTfulModelView;

})();
