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

var modelView, relationModel;

function initEvent() {
    var input = $('#input_json_text')[0];
    input.onchange = onChange;
    input.onkeyup = onChange;
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
        case 2: result = new RESTfulModel().start(); break;
      }
    } catch (e) {
      result = e.stack;
      console.error(e);
      mode = 1;
    }
    switch (mode) {
      case 1:
      case 2:
        $('#result_content').html('');
        $('pre code').text(result);
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
        break;
    }
}

var viewLeft = 0;
var viewTop = 300;
function addView() {
  viewLeft += 20;
  viewTop += 20;
  modelView.createAddView(viewLeft + "px", viewTop + "px");
  saveSourceData();
}

