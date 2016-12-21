function initEvent() {
    var input = $('#input_json_text')[0];
    input.onchange = onChange;
    input.onkeyup = onChange;
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
        case 2: result = getBookListHtml(json); break;
      }
    } catch (e) {
      result = e.stack;
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
        $('pre code').text('');
        $('#result_content').html(result);
        break;
      default:
    }
}

function getBookListHtml(json) {
  var bookTempl = `
    <div class="container-fluid">
      <div class="row bg-info">
        <div class="col-md-2 col-sm-2 col-xs-2">
          <img class="img-responsive img-rounded" src="{img_url.viewurl}" alt="">
        </div>
        <div class="col-md-8 col-sm-8 col-xs-8 bg-success">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 text-left">
              book_name : {book_name}
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 text-left">
              book_id : {book_id}
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 text-left">
              packType : {packType}
            </div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3 col-md-3 text-left">
              flag : {flag}
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 text-left">
              valid : {valid}
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 text-left">
              end_date : {end_date}
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 text-left">
              zipfile_url : {zipfile_url.viewurl}
            </div>
          </div>
        </div>
        <div class="col-md-2 col-sm-2 col-xs-2">
          col-md-2
        </div>
     </div>
    </div>

  `;
  var books = JSON.parse(json);
  var results = [];
  books.forEach(function (book) {
    castEndDate(book);
    castBookType(book);
    castFlag(book);
    castValid(book);
    results.push(bookTempl.format(book));
  });
  return results.join('<br>');
}

function castEndDate(book) {
  var endDate = book.end_date;
  if(endDate < 1000) return;
  book.end_date = new Date(endDate).Format("yyyy-MM-dd hh:mm:ss");
}

function castBookType(book) {
  var packType = book.packType;
  switch (packType) {
    case 1: book.packType =  "1 - 听力风暴"; break;
    case 2: book.packType =  "2 - 同步视听说"; break;
    case 3: book.packType =  "3 - 语音风暴"; break;
    case 4: book.packType =  "4 - 李大侠"; break;
    case 5: book.packType =  "5 - 听说风暴"; break;
    case 6: book.packType =  "6 - 2016版"; break;
    default: book.packType =  packType + " - 未知的打包类型"; break;
  }
}
function castFlag(book) {
  var flag = book.flag;
  switch (flag) {
    case 1: book.flag = "1 - 已购买"; break;
    case 2: book.flag = "2 - 已授权"; break;
    case 3: book.flag = "3 - 未购买"; break;
    default: book.flag = flag + " - 未知的购买类型"; break;
  }
}
function castValid(book) {
  var valid = book.valid;
  switch (valid) {
    case 0: book.valid = "0 - 已过期"; break;
    case 1: book.valid = "1 - 未过期"; break;
    default: book.valid = valid + " - 未知类型"; break;
  }
}
