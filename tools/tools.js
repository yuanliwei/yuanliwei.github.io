function initEvent() {
	var input = $('#code_input')[0]
	input.onchange = onChange;
	input.onkeyup = onChange;
}
var count = 0;
function onChange() {
	var input = $('#code_input').val();
	var result = CodeFormat.alignComment(input);
	$('#code_output').val(result);
}

//////////////////////////////////////////////////////
