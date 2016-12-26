class RESTfulModelView

  constructor: () ->
    # body...
    @views = []

    @createAddView = (left, top) ->
      source = """
        var NodeSample;

        NodeSample = (function() {
          function NodeSample() {
            this.name = "NodeSample";
            this.key = "000";
            this.run = (function(_this) {
              return function(params, childs, callback) {
                var key, mIndex, mKey, mNotifyKeys, mResult, resultModel, value;
                console.log("run in source {0}");
                console.dir(params);
                mKey = _this.key;
                mIndex = 0;
                mResult = {
                  'key1{0}': 'value1{0}',
                  'key2{0}': 'value2{0}'
                };
                mNotifyKeys = [];
                for (key in childs) {
                  value = childs[key];
                  mNotifyKeys.push(value.key);
                }
                resultModel = new NodeResultModel(mKey, mIndex, mResult, mNotifyKeys);
                return callback(resultModel);
              };
            })(this);
          }

          return NodeSample;

        })();
      """
      node = new NodeModel(source)
      @addView left, top, node

    @addView = (left, top, node)->
      source0 = """
      <div class="model_item draggable">
        <div class="row">
          <div class="key col-xs-10 col-sm-10 col-md-10 bg-success handle">
            {key}
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 bg-info editor-delete">
            -
          </div>
          <div class="name col-xs-12 col-sm-12 col-md-12 bg-danger editor-action">
            {name}
          </div>
        </div>
        <div class="row editor-select">
          <div class="col-xs-12 col-sm-12 col-md-12 bg-primary">
            description <br><br><br><br>
          </div>
        </div>
      </div>
      """
      dom = $(source0.format(node))
      view = dom[0]
      @views.push new ViewModel(dom, view, node)
      view.style.left = left
      view.style.top = top
      initDragEvent dom
      initClickEvent dom, node
      $('#model_content').append(dom);

  initClickEvent = (dom, node) ->
    dom.find('.editor-action').click ->
      console.log 'click dom'
      $('.editor').toggleClass('editor-hide editor-show')
      $('#editor-source').val(node.source);

      $('#editor-save').unbind('click').click ->
        node.source = $('#editor-source').val()
        node.onSourceChange()
        saveSourceData()
        $('.editor').toggleClass('editor-hide editor-show')

      $('#editor-cancle').unbind('click').click ->
        $('.editor').toggleClass('editor-hide editor-show')
    dom.find('.editor-delete').click ->
      deleteNodeView(node)

  initDragEvent = (dom) ->
    counts = [ 0, 0, 0 ]
    dom.draggable({
                    "axis": false        # "x"  "y"
                    # "distance" : 5
                    # "delay": 200
                    "addClasses": true
                    "containment": "document"
                    "cursor": "crosshair"
                    # cursorAt: { right: 15, bottom:15 }
                    "disabled": false
                    # grid: [ 50, 50 ]     # 拖动时对齐到网格
                    handle: ".handle"       # 拖动手柄
                    # "helper": "clone"        # original clone
                    "revert": false           # true invalid valid
                    "revertDuration": 200
                    "scope": "default"       # 拖放分组 tasks default
                    "scroll": true
                    "scrollSensitivity": 100 # 拖放滚动敏感度
                    "scrollSpeed": 10       # 拖放滚动速度
                    "snap": true
                    "snapMode": "both"       # "inner", "outer", "both"
                    "snapTolerance": 10
                    "stack": ".container"    # 元素层级
                    "zIndex": 100            # 元素层级
                    "iframeFix": true
                    "opacity": 0.85
                    "start": (e) -> counts[ 0 ]++
                    "drag": -> counts[ 1 ]++
                    "stop": -> saveSourceData()
                   })

class ViewModel

  constructor: (@dom, @view, @node) ->
    # body...
    @notify = =>
      @dom.find('.key').text(@node.key)
      @dom.find('.name').text(@node.name)
