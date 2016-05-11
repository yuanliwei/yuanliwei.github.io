var playerContent = ''
		+ '<div class="player">                                              '
		+ ' <img class="player_btn active" src="../img/play-record.png" alt="播放器" />'
		+ ' <div>                                                            '
		+ '  <span class="player_time">00:00/00:00</span>                    '
		+ '  <div class="player_progress">                                   '
		+ '   <div class="player_progress_size"></div>                       '
		+ '  </div>                                                          '
		+ ' </div>                                                           '
		+ '</div>                                                            ';

function loadPlayer(page) {
	var audios = page.mediaData.audios;
	if(!audios||audios.length==0)return;

	$('.media_player').show();
	$('.media_player').html(playerContent);

	var source = audios[0].path;
	var audioId = 'top';
	if (State.isBottom) {
		audioId = 'sub';
	}
	var mode = 1;
	if(source.startsWith("http")){
		mode = -1;
	}
	var audio = new Audio(audioId + Math.random(), source, mode);
}

/**
 * @param playBtn
 *            播放器按钮<img>
 * @param normal
 *            正常状态下的按钮图片
 * @param playing
 *            播放状态下的按钮图片
 */
var PlayerView = function(pView, normal, playing) {
	this.playBtn = pView.find('.player_btn');
	this.normal = normal || '../img/play-active.png';
	this.playing = playing || '../img/pause-active.png';
	this.play = function() {
		this.playBtn.attr('src', this.playing);
	};
	this.stop = function() {
		this.playBtn.attr('src', this.normal);
	};
}
var ProgressBar = function(pView, timeView) {
	this.progressBar = pView.find('.player_progress_size');
	this.time = pView.find('.player_time');
	this.setProgress = function(progress, timeStr) {
		this.progressBar.animate({
			width : progress + '%'
		}, 200);
		this.time.text(timeStr);
	};
	this.setProgress(0, "00:00/00:00");
}
var audioMap = {};

/**
 * @param audioId
 * @param source
 * @param mode
 * @param player
 *            PlayerView
 * @param progressBar
 *            ProgressBar
 */
var Audio = function(audioId, source, mode, player, progressBar) {
	this.audioId = audioId;
	this.source = source;
	this.mode = mode;
	this.contentView = $('.player');
	this.player = player || new PlayerView(this.contentView);
	this.progressBar = progressBar || new ProgressBar(this.contentView);
	this.isPlaying = false;
	this.duration = 0;
	this.position = 0;
	audioMap[audioId] = this;

	// bing click Event
	this.player.playBtn.bind(ckEvent, function() {
		if (cancleClick)
			return;
		var thiz = audioMap[audioId];
		if (thiz.isPlaying) {
			thiz.stop();
		} else {
			thiz.play();
		}
	});

	this.play = function() {
		var curTime = Util.getCurPlayTime(audio.audioId);
		if (this.duration > 0 && curTime > 0) {
			Util.resumePlay(audioId);
		} else {
			this.duration = Util.play(audioId, source, mode);
		}
	};
	this.stop = function() {
		Util.pausePlay(audioId);
	};
	this.onAudioStateChange = function(state) {
		switch (state) {
		case 0:
			this.isPlaying = true;
			this.player.play();
			startRefreshProgress();
			break;
		case 1:
			this.isPlaying = false;
			this.player.stop();
			stopRefreshProgress();
			refresh();
			break;
		default:
			this.isPlaying = false;
			this.player.stop();
			stopRefreshProgress();
			refresh();
			this.duration = 0;
			break;
		}
	};
	this.destory = function() {
		delete audioMap[audioId];
	}
	this.timer = false;
	startRefreshProgress = function() {
		timer = setInterval("refresh()", 300);
	};
	stopRefreshProgress = function() {
		if(timer){
			clearInterval(timer);
		}
	};
	var audio = this;
	refresh = function() {
		var curTime = Util.getCurPlayTime(audio.audioId);
		if (audio.duration) {
			var time = cover(curTime) + '/' + cover(audio.duration);
			audio.progressBar.setProgress(curTime / audio.duration * 100, time);
		}
	}

	var cover = function(time) {
		var min, sec;
		min = parseInt(time / 1000 / 60);
		if (min < 10) {
			min = "0" + min;
		}
		sec = parseInt(time / 1000 % 60);
		if (sec < 10) {
			sec = "0" + sec;
		}
		return min + ":" + sec;
	};

};
// 播放状态回调 state : {开始播放 0;暂停播放 1;结束播放 2;}
function onAudioStateChange(audioId, state) {
	if (audioId in audioMap) {
		audioMap[audioId].onAudioStateChange(state);
	}
}
