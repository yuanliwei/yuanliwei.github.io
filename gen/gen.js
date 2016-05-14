function initEvent() {
	var input = $('#code_input')[0];
	input.onchange = onChange;
	input.onkeyup = onChange;
	$('#mode-option-group input').click(function () {
		onChange();
	});
}
var count = 0;
function onChange() {
	var input = $('#code_input').val();
	var opts;
	opts = {
		packageName: '',
		className: 'TestClassSpec',
		genSetter: true,
		genGetter: true,
		genInnerClass: true
	};
	opts.packageName = $('#inputPackageName').val();
	opts.className = $('#inputClassName').val();

	var fileds2Java = new JsonJavaUrl();
	var mode = parseInt($('#mode-option-group input:checked').val());

	switch (mode) {
		case 1: fileds2Java = new FiledsJavaDbOrmlite(); break;
		case 2: fileds2Java = new FiledsJavaDbXutils(); break;
		case 3: fileds2Java = new FiledsJavaDbXutils3(); break;
		case 4: fileds2Java = new FiledsJava(); break;

		case 5: fileds2Java = new JsonJavaDbOrmlite(); break;
		case 6: fileds2Java = new JsonJavaDbXutils(); break;
		case 7: fileds2Java = new JsonJavaDbXutils3(); break;
		case 8: fileds2Java = new JsonJava(); break;
		default:
			fileds2Java = new JsonJavaUrl();
			break;
	}

	fileds = input;
	javaSrc = fileds2Java.toJava(fileds, opts);
	console.log('ssssssssss' + javaSrc);
	$('pre code').text(javaSrc);

	$('pre code').each(function (i, block) {
		hljs.highlightBlock(block);
	});
}

