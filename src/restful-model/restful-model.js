/*
container container-fluid
row
col-xs-12 col-sm-12 col-md-12
col-xs-offset-4 col-sm-offset-4 col-md-offset-4
bg-info bg-primary bg-success bg-warning bg-danger
text-left text-center text-right text-justify text-nowrap
text-muted text-muted text-primary text-success text-info text-warning text-danger
img-responsive img-rounded img-circle img-thumbnail
pull-left pull-right
center-block clearfix
show hidden
text-lowercase text-uppercase text-capitalize
dl-horizontal
*/

var BookChapterList, BookList, CourseList;
var modelView;

function initEvent() {
    // var input = $('#input_json_text')[0];
    // input.onchange = onChange;
    // input.onkeyup = onChange;
    $('#editor-close').click(function () {
      var editor;
      console.log('click dom');
      $('.editor').toggleClass('editor-hide editor-show');
    });
    $('#mode-option-group input, #gen-option-group input').click(function () {
        onChange();
    });
    onChange();
}

function onChange() {
    saveConfig();
    var json = $('#input_json_text').val();
    var mode = parseInt($('#mode-option-group input[name="genMode"]:checked').val());

    var result;
    try {
      switch (mode) {
        case 1: result = js_beautify(json, {}); break;
        case 5: result = new RESTfulModel().start(); break;
        case 6:
          if (!modelView){
            modelView = new RESTfulModelView();
            initData();
          }
          break;
      }
    } catch (e) {
      result = e.stack;
      console.error(e);
      mode = 1;
    }
    switch (mode) {
      case 1:
        $('#result_content').html('');
        $('pre code').text(result);
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
        break;
      case 2:
      case 3:
      case 4:
        $('pre code').text('');
        $('#result_content').html(result);
        break;
      default:
    }
}

var viewLeft = 0;
var viewTop = 0;
function addView() {
  viewLeft += 20;
  viewTop += 20;
  modelView.createAddView(viewLeft + "px", viewTop + "px");
  saveSourceData();
}

function initData() {
  var nodeDataArr = [];
  var sourceNode = $('#source_node');
  if(!sourceNode || !sourceNode.val()) return;
  nodeDataArr = JSON.parse(sourceNode.val());
  if(Object.prototype.toString.call(nodeDataArr) != '[object Array]') nodeDataArr = [];

  // nodeDataArr = [];
  nodeDataArr.forEach(function (nodeData) {
    var node = new NodeModel(nodeData.source);
    modelView.addView(nodeData.left, nodeData.top, node);
  });
}

function saveSourceData() {
  var views = modelView.views;
  var nodeDataArr = [];
  views.forEach(function (viewMode) {
    // @dom, @view, @node
    viewMode.notify();
    var source = viewMode.node.source;
    var dom = viewMode.dom[0];
    nodeDataArr.push({"left": dom.style.left, "top": dom.style.top, "source": source });
  });
  var sourceNode = $('#source_node');
  sourceNode.val(JSON.stringify(nodeDataArr));
  saveConfig();
}

function deleteNodeView(node) {
  var views = modelView.views;
  var nodeDataArr = [];
  for (var i = 0; i < views.length; i++) {
    var viewMode = views[i];
    if(viewMode.node == node){
      views.splice(i, 1);
      viewMode.dom.remove();
      break;
    }
  }
  saveSourceData();
}
