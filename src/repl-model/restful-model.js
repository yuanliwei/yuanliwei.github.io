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
        case 2: result = new BookList(json).html(); break;
        case 3: result = getCourseListHtml(json); break;
        case 4: result = new BookChapterList(json).html(); break;
        case 5: result = new RESTfulModel().start(); break;
        case 6:
          if (!modelView) modelView = new RESTfulModelView(nodeDataArr);
          result = modelView.start(); break;
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

var nodeDataArr = []
function addSource() {
  var sourceNode = $('#source_node');
  var srcNode = $('#input_json_text');
  nodeDataArr.push(srcNode.val());
  sourceNode.val(JSON.stringify(nodeDataArr));
  saveConfig();
}

function initData() {
  var sourceNode = $('#source_node');
  if(!sourceNode || !sourceNode.val()) return;
  nodeDataArr = JSON.parse(sourceNode.val());
  if(Object.prototype.toString.call(nodeDataArr) != '[object Array]') nodeDataArr = [];
}
