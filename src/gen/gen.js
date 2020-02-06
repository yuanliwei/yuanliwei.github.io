import {
    loadConfig,
    saveConfig
} from '../js/utils/common'
import Filed from './java-model/Filed';
import Fileds2JavaDbXutils from './gen-java/Fileds2JavaDbXutils';
import Fileds2JavaDbOrmlite from './gen-java/Fileds2JavaDbOrmlite';
import Fileds2JavaDbXutils3 from './gen-java/Fileds2JavaDbXutils3';
import Fileds2Java from './gen-java/Fileds2Java';
import Json2JavaDbOrmlite from './gen-java/Json2JavaDbOrmlite';
import Json2JavaDbXutils from './gen-java/Json2JavaDbXutils';
import Json2JavaDbXutils3 from './gen-java/Json2JavaDbXutils3';
import Json2Java from './gen-java/Json2Java';
import Json2JavaUrl from './gen-java/Json2JavaUrl';
import StyleXML from './gen-java/StyleXML';
import AlignComment from './gen-java/AlignComment';
import FormatCode from './gen-java/FormatCode';
import ParseLayoutXML from './gen-java/ParseLayoutXML';
import ParseLayoutXML2 from './gen-java/ParseLayoutXML2';
import GenJavaTemplate from './gen-java/GenJavaTemplate';
import SQL2JavaDbOrmlite from './gen-java/SQL2JavaDbOrmlite';
import SQL2JavaDbXutils from './gen-java/SQL2JavaDbXutils';
import SQL2JavaDbXutils3 from './gen-java/SQL2JavaDbXutils3';
import SQL2Java from './gen-java/SQL2Java';
import Pom2Cmd from './gen-java/Pom2Cmd';
import ConvertLua from './gen-java/ConvertLua';
import AssignJson2Java from './gen-java/AssignJson2Java';
import Json2JavaDbGreenDAO from './gen-java/Json2JavaDbGreenDAO';
import SQL2JavaDbGreenDAO from './gen-java/SQL2JavaDbGreenDAO';
import Fileds2JavaDbGreenDAO from './gen-java/Fileds2JavaDbGreenDAO';

function initEvent() {
    var input = $('#code_input')[0];
    input.onchange = onChange;
    input.onkeyup = onChange;
    $('#mode-option-group input, #gen-option-group input').click(function () {
        onChange();
    })
}

function onChange() {
    var input = $('#code_input').val();
    var opts = {
        packageName: '',
        className: 'TestClassSpec',
        genSetter: true,
        genGetter: true,
        genInnerClass: true
    };
    opts.packageName = $('#inputPackageName').val();
    opts.className = $('#inputClassName').val();
    opts.genSetter = $('#genSetter')[0].checked;
    opts.genGetter = $('#genGetter')[0].checked;
    opts.genInnerClass = $('#genInnerClass')[0].checked;
    opts.simple = $('#GenJavaTemplateSimple')[0].checked;

    let fileds2Java = new Fileds2JavaDbXutils();
    let mode = parseInt($('#mode-option-group input[name="genMode"]:checked').val());

    switch (mode) {
        case 1: fileds2Java = new Fileds2JavaDbOrmlite(); break;
        case 2: fileds2Java = new Fileds2JavaDbXutils(); break;
        case 3: fileds2Java = new Fileds2JavaDbXutils3(); break;
        case 4: fileds2Java = new Fileds2Java(); break;

        case 5: fileds2Java = new Json2JavaDbOrmlite(); break;
        case 6: fileds2Java = new Json2JavaDbXutils(); break;
        case 7: fileds2Java = new Json2JavaDbXutils3(); break;
        case 8: fileds2Java = new Json2Java(); break;
        case 9: fileds2Java = new Json2JavaUrl(); break;

        case 10: fileds2Java = new StyleXML(); break;
        case 11: fileds2Java = new AlignComment(); break;
        case 12: fileds2Java = new FormatCode(); break;
        case 13: fileds2Java = new ParseLayoutXML(); break;
        case 21: fileds2Java = new ParseLayoutXML2(); break;
        case 14: fileds2Java = new GenJavaTemplate(); break;
        case 15: fileds2Java = new SQL2JavaDbOrmlite(); break;
        case 16: fileds2Java = new SQL2JavaDbXutils(); break;
        case 17: fileds2Java = new SQL2JavaDbXutils3(); break;
        case 18: fileds2Java = new SQL2Java(); break;
        case 19: fileds2Java = new Pom2Cmd(); break;
        case 20: fileds2Java = new ConvertLua(); break;
        case 22: fileds2Java = new AssignJson2Java(); break;
        case 23: fileds2Java = new Fileds2JavaDbGreenDAO(); break;
        case 24: fileds2Java = new Json2JavaDbGreenDAO(); break;
        case 25: fileds2Java = new SQL2JavaDbGreenDAO(); break;
        default:
            fileds2Java = new Fileds2JavaDbXutils();
            break;
    }

    let fileds = input;
    var javaSrc = fileds2Java.toJava(fileds, opts);
    //     console.log('ssssssssss' + javaSrc);
    javaSrc = FormatCode.alignComment(javaSrc);
    $('pre code').text(javaSrc);

    $('pre code').each(function (i, block) {
        // @ts-ignore
        hljs.highlightBlock(block);
    });

    saveConfig();
}

export default () => {
    loadConfig();
    initEvent();
    $('pre code').each(function (i, block) {
        // @ts-ignore
        hljs.highlightBlock(block);
    });
}
