function initEvent(){
	var input = $('#code_input')[0]
	input.onchange = onChange;
	input.onkeyup = onChange;
}
var count = 0;
function onChange(){
	var input = $('#code_input').val();
	var opts;
	opts = {
		packageName: '',
		className: 'TestClassSpec',
		genSetter: true,
		genGetter: true,
		genInnerClass: true
	};
	opts.packageName = 'config.gen_java.packageName';
	opts.className = 'config.gen_java.className';

	var fileds2Java = new Fileds2Java();
	fileds = input;
	javaSrc = fileds2Java.toJava(fileds, opts);
	console.log('ssssssssss' + javaSrc);
	$('pre code').text(javaSrc);

	 $('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	  });
}