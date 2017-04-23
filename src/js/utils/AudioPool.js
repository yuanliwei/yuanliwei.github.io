class AudioPool {
  static play(src){
    console.log("AudioPool.idlePool : " + AudioPool.idlePool.length);
    var audio = AudioPool.idlePool.pop();
    if (!audio) {
      audio = document.createElement('audio');
      audio.addEventListener('ended', ()=>AudioPool.idlePool.push(audio));
    }
    audio.src = src;
    audio.play();
  }
}

AudioPool.idlePool = [];
