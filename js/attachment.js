var playerContent = ''
		+ '<div id="{0}" class="attachment">'
		+ ' <img class="attach_img" src="{1}"/>'
		+ ' <span class="attach_name">{2}</span>'
		+ ' <span class="attach_size">（{3}）</span>'
		+ '</div>';

function loadAttaches(attaches) {
$('#attachment').show();
	var html = "";
	if(!attaches)return;
	for(var i = 0;i <attaches.length;i++){
	    var  attach = attaches[i];
	    var id = attach.key;
	    var imgPng = "../data/img/"+extToImg(attach.fileExt);
        var filesize = sizeToGBMBKB(attach.fileSize);
        var name = attach.fileTitle;
        html +=playerContent.format(id,imgPng,name,filesize);
    }
      $('#attachment').html(html);
}

function extToImg(ext){
	var imgPng = "Icon_Q.png";
   	if (ext.match(/doc/i)) {
          imgPng = "Icon_W.png";
    }else if(ext.match(/ppt/i)){
           imgPng = "Icon_P.png";
    }else if(ext.match(/txt/i)){
           imgPng = "Icon_T.png";
    }else if(ext.match(/(mp4|avi|rmvb|mkv)/i)){
           imgPng = "Icon_V.png";
    }else if(ext.match(/mp3/i)){
           imgPng = "Icon_A.png";
    }else if(ext.match(/(jpg|png|bmp|gif)/)){
           imgPng = "Icon_I.png";
    }
   	return imgPng;
}

function sizeToGBMBKB(kSize){
   if(kSize>=1024 * 1024 * 1024 / 10){  // GB = 1024 * 1024 * 1024
        return (kSize/(1024 * 1024 * 1024)).toFixed(2)+"GB";
   }
   if(kSize>=1024 * 1024 / 10){  // MB =  1024 * 1024
        return (kSize/(1024 * 1024)).toFixed(2)+"MB";
   }
   if(kSize>=1024){  // MB =  1024
        return (kSize/1024).toFixed(2)+"KB";
   }
   return kSize + "B";
}
