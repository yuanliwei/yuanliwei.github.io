var hisMap = {};
var History = function (page) {
  this.qes = $('.content');
  this.wrongNot = this.qes.find('section.wrongNote');

  var wrongNotTemplate = ''
  		+ '  <!-- 错题本内容区域 -->                                    '
  		+ '  <div class="wrong_content">                                '
  		+ '    <!-- 错题本头部按钮 -->                                  '
  		+ '    <div class="wrong_btn_panel">                            '
  		+ '      <span class = "wrong_std_answer_btn active_border">查看答案</span>   '
  		+ '      <span class = "wrong_stu_history_btn active_border">答题记录</span>  '
  		+ '    </div>                                                   '
  		+ '    <!-- 答题历史记录 -->                                    '
  		+ '    <div class="wrong_history">                              '
  		+ '      <ol>                                                   '
  		+ '      </ol>                                                  '
  		+ '    </div>                                                   '
  		+ '    <!-- 参考答案区域 -->                                    '
  		+ '    <div class="wrong_std_answer"></div>                     '
  		+ '  </div>                                                     ';

  //初始化错题本dom结构
	this.wrongNot.html(wrongNotTemplate);
	var stdAnswer = this.qes.find('section.stdAnswer');
	var analysis = this.qes.find('section.analysis');
    stdAnswer.remove();
	analysis.remove();
	this.wrongNot.find('div.wrong_std_answer').html(stdAnswer);
	this.wrongNot.find('div.wrong_std_answer').append(analysis);


  var wrongHistoryContent = this.wrongNot.find('.wrong_history')
  var wrongStdAnswerContent = this.wrongNot.find('.wrong_std_answer')

	wrongHistoryContent.hide();
	wrongStdAnswerContent.hide();

  this.toggle = function(tab){
  	switch(tab){
  		case 1:
  			wrongHistoryContent.hide();
  			wrongStdAnswerContent.show();
  			break;
  		case 2:
        wrongHistoryContent.show();
  			wrongStdAnswerContent.hide();
  			break;
  	}
  }
  thiz = this;
	// 查看答案
	this.wrongNot.find('span.wrong_std_answer_btn').bind(ckEvent, function() {
		if (cancleClick)
			return;
		thiz.toggle(1);
	});
	// 答题记录
	this.wrongNot.find('span.wrong_stu_history_btn').bind(ckEvent, function() {
		if (cancleClick)
			return;
		thiz.toggle(2);
	});

//▲▼
var liTem = ''
        +'<li>                                                 '
        +'	<span class="wrong_history_result">{0}</span>    '
        +'	<span class="wrong_history_time">{1}</span>      '
        +'	<span class="wrong_history_arrow">▼</span>       '
        +'	<div class="wrong_history_content">{2}</div>     '
        +'</li>                                                '

  var ol = this.wrongNot.find('div.wrong_history ol');

  var label1 = ["▲","▼"]
  var label2 = ["✔","✘"]
  this.callBack = function(history){
    var lis = [];
    history.forEach(function(item){
      var v1 = item.fresult==1?'✔':'✘';
      var v2 = item.addTime;
      // v3的数据从每个题型对应的js中获取
      var v3 = getStuAnswerDataHtml(item.answer);
      lis.push(liTem.format(v1, v2, v3));
    });
    if(lis.length==0){
      var li = '<li class="wrong_item_template_item">{0}</li>';
      lis.push(li.format('没有答题记录'));
    }
    ol.html(lis.join(''));
  };
  hisMap[page.question.questionId] = this;
  	// getHistoryData
	jsObj.getAnswerHistory(page.question.questionId,page.question.questionType);
};
//
// var wrongNoteTemplate_ol = '<ol class="wrong_item_template">{0}</ol>';
// var wrongNoteTemplate_li = '<li class="wrong_item_template_item">{0}</li>';
//
// function getStuAnswerDataHtml(answerData) {
// 	var builder = [];
// 	var answers = answerData.answers;
// 	if(answers&&answers.length>0){
// 		answers.forEach(function(answer){
// 			builder.push(wrongNoteTemplate_li.format(answer.content));
// 		});
// 	}
// 	return wrongNoteTemplate_ol.format(builder.join(''));
// }

function onAnswerHistoryCallBack(history, qesId){
  console.log("onAnswerHistoryCallBack -------  : " + history);
  history = JSON.parse(history);
  his = hisMap[qesId];
  if(his)
    his.callBack(history);
};
