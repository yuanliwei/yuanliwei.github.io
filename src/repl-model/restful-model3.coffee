class RESTfulModelView

  constructor: () ->
    # body...
    @views = []

    @addView = (left, top, node)->
      source0 = """
      <div class="model_item draggable">
        <div class="row">
          <div class="key col-xs-4 col-sm-4 col-md-4 bg-success">
            {key}
          </div>
          <div class="name col-xs-6 col-sm-6 col-md-6 bg-danger">
            {name}
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 bg-info handle">
            +
          </div>
        </div>
        <div class="row">
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
    dom.click ->
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
                    "scroll": false
                    "scrollSensitivity": 100 # 拖放滚动敏感度
                    "scrollSpeed": 100       # 拖放滚动速度
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
