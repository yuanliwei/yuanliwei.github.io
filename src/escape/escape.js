function initEvent() {
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

        default:
            fun = Escape.encodeURIComponent;
            break;
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
