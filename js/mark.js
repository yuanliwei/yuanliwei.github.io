var Mark = function(page){
	this.datas = page.markData.markList;
	this.init = true;
	if(!this.datas||this.datas.length == 0){
		this.init = false;
	}

	var getCheckBg_ = function(i){
		if(!this.datas||this.datas.length<i)
			return '';
		var data = this.datas[0];
    	return getCheckBgByCode_(data.result);
	};

	var getCheckBgById_ = function(id){
		if(!this.init)
			return '';
		var data = this.datas[0];
		this.datas.forEach(function(item){
		  if(item.id == id){
				data = item;
		  }
		});
		return getCheckBgByCode_(data.result);
	};

	var getCheckBgByCode_ = function(code){
	switch (parseInt(code)) {
		case 1:
			return rightClass_;
		case 2:
			return wrongClass_;
		default:
			return halfClass_;
		}
  };

/* 批阅数据模板 begin */
  var markListTem1 = ''
			+ '     <div class="mark_inline_item">                    '
			+ '      <img class="mark_result" src="{0}" />            '
			+ '      <span class="mark_score">{1}</span>              '
			+ '      <span class="mark_comment">{2}</span>            '
			+ '     </div>                                            ';
  var markDataTem2 = ''
			+ '     <div class="mark">                                '
			+ '      <p class="inline mark_text">批改结果：</p>        '
			+ '      <img class="mark_result" src="{0}" />            '
			+ '      <span class="mark_score">{1}</span>              '
			+ '      <span class="mark_comment">{2}</span>            '
			+ '     </div>                                            ';
  var scoreStr = '+{0}分';

  var markPic = [ '../img/right.png', '../img/wrong.png', '../img/half.png' ];

  var addTip_ = function(pEle, markData){
  	var pic = markPic[markData.result - 1];
  	var score = markData.score > 0 ? scoreStr.format(markData.score) : '';
  	var comment = markData.comment;
	var ele = markListTem1.format(pic, score, comment);
	pEle.before(ele);
	var tip = pEle.prev();
	tip.addClass('item_tip');
	tip.attr('pId',pEle.attr('id'));
  };

  var addMarkTip_ = function(pEle, state){
  	var pic = markPic[0];
  	switch(state){
  		case 'right':pic = markPic[0];break;
  		case 'wrong':pic = markPic[1];break;
  	}
  	var score = '';
  	var comment = '';
	var ele = markListTem1.format(pic, score, comment);
	pEle.before(ele);
	var tip = pEle.prev();
	tip.addClass('item_tip');
	tip.attr('pId',pEle.attr('id'));

  }

  var html_ = function(i){
  	if(!this.init)return '';
  	var markData = this.datas[i];
  	var pic = markPic[markData.result - 1];
  	var score = markData.score > 0 ? scoreStr.format(markData.score) : '';
  	var html = markDataTem2.format(pic,score , markData.comment);
  	return html;
  };

	var each_ = function(callBack) {
		if(this.init){
			this.datas.forEach(callBack);
		}
	}

  var rightClass_ = 'checkbg_mark_right';
  var wrongClass_ = 'checkbg_mark_wrong';
  var halfClass_  = 'checkbg_mark_half';
  
  this.colorRight = 'green';
  this.colorWrong = 'red';

  this.rightClass = rightClass_;
  this.wrongClass = wrongClass_;
  this.halfClass = halfClass_;

/**
 * 重新计算修改单词上边的单词的位置
 */
	var reCountTipPosition_ = function(offX,offY) {
		if(!this.init)return;
		var tipEles = $('div.item_tip');
		tipEles.toArray().forEach(function(tip) {
			tip = $(tip);
			var pId = tip.attr('pId');
			var pEle = $('#' + pId);

			// count tip position
			var cX = pEle[0].offsetLeft;
			var cY = pEle[0].offsetTop;
			var cW = pEle[0].clientWidth;
			var cH = pEle[0].clientHeight;

			var tX;
			var tY;
			var tW = tip[0].clientWidth;
			var tH = tip[0].clientHeight;

			var x = cX + cW / 2;
			var y = cY + cH / 4;

			tX = x + offX;
			tY = y + offY;

			tip.css({
				'left' : tX + 'px',
				'top' : tY + 'px',
			});
		});
	};

	/*
	markData:
			{"comment":"这个答案是正确的","id":"1","markText":"","result":"2","score":0}
	*/
	// 获取markList指定索引位置选项的样式:function(i)
	this.getCheckBg = getCheckBg_;
	// 获取指定id选项的样式:function(id)
	this.getCheckBgById = getCheckBgById_;
	// 获取指定result对应的样式:function(code)
	this.getCheckBgByCode = getCheckBgByCode_;
	// 给指定元素添加一个tip元素:function(pEle, markData)
	this.addTip = addTip_;
	// 重新计算所有tip元素的位置:function(offsetX,offsetY) (填空、李大侠改错、....)
	this.reCountTipPosition = reCountTipPosition_;
	// 遍历markDatas元素:function(callBack)
	this.each = each_;
	// 获取批改结果html（单选，多选，。。。）
	this.html = html_;
	// 给指定元素添加指定状态的tip:addMarkTip(pEle, 'right')
	this.addMarkTip = addMarkTip_;
};
