function initEvent() {
    $('.copy-to-up').click(()=>{
      $('#code_input').val($('pre code').text())
    })
    var input = $('#code_input')[0];
    input.onchange = onChange;
    input.onkeyup = onChange;
    $('#mode-option-group input, #gen-option-group input').click(function () {
        onChange();
    });
}

function onChange() {
    var input = $('#code_input').val();

    var fun = Escape.encodeURIComponent;
    var mode = parseInt($('#mode-option-group input[name="genMode"]:checked').val());

    switch (mode) {
        case 1: fun = Escape.encodeURIComponent; break;
        case 2: fun = Escape.decodeURIComponent; break;
        case 3: fun = Escape.encodeBase64; break;
        case 4: fun = Escape.decodeBase64; break;
        case 5: fun = Escape.native2ascii; break;
        case 6: fun = Escape.ascii2native; break;
        case 7: fun = Escape.HtmlEncode; break;
        case 8: fun = Escape.HtmlDecode; break;

        case 9: fun = Escape.md5; break;
        case 10: fun = Escape.sha1; break;
        case 11: fun = Escape.sha256; break;
        case 12: fun = Escape.sha512; break;
        case 13: fun = Escape.formatDate; break;
        case 14: fun = Escape.toUnicode; break;
        case 15: fun = Escape.fromUnicode; break;
        case 16: fun = Escape.htmlEncode; break;
        case 17: fun = Escape.htmlDecode; break;
        case 18: fun = 18; break;
        case 19: fun = 19; break;
        case 20: fun = Escape.encodeGZIP; break;
        case 21: fun = Escape.decodeGZIP; break;
        case 22: fun = Escape.encodeZIP; break;
        case 23: fun = Escape.decodeZIP; break;
        case 24: fun = Escape.formatJSON; break;
        case 25: fun = Escape.formatXML; break;
        case 26: fun = Escape.formatSQL; break;

        default:
            fun = Escape.encodeURIComponent;
            break;
    }
    if(fun == 18){
      $('pre code').html('')
      // L : 1, M : 0, Q : 3, H : 2
      $('pre code').qrcode({text:input, correctLevel: 1});
      saveConfig();
      return
    }
    if(fun == 19){
      $('pre code').html('')
      $('pre code').append('<img id="barcode">')
      $("#barcode").JsBarcode(input);
      saveConfig();
      return
    }
    var javaSrc;
    try {
        javaSrc = fun(input);
    } catch (error) {
        javaSrc = error.stack;
        console.error(error);
    }
    //     javaSrc = CodeFormat.alignComment(javaSrc);
    $('pre code').text(javaSrc);

    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });

    saveConfig();
}
