var dp = window.devicePixelRatio;
var canvas, ctx,
    gridW = 40 *dp ,
    lineNum = 10,
    colNum = 10,
    cw, ch;

var isMe = true,
    myType = 1,
    foeType = 2,
    userId,
    friendId;

var pieces = [];

// pieces.push(new Pieces(0,0,1));//white
// pieces.push(new Pieces(5,7,2));//black

function startGame() {
  var cmd = {};
  cmd.command = true;
  cmd.start = true;
  cmd.uid = userId = Math.random();
  cmd.foeUid = Math.random();
  cmd.first = true;
  cmd.myType = 1;
  cmd.foeType = 2;
  sendMsg(JSON.stringify(cmd));
  isMe = true;
  wlog("开始游戏");
}

function initCanvas(id) {

  wlog("Allen");
  canvas = document.getElementById(id);
  ctx = canvas.getContext( '2d' );
  window.addEventListener("resize", updateWindow);

  updateWindow();
  draw();

  canvas.addEventListener( 'mouseup', function( e ) {

    if (!isMe) {
      return;
    }

    var size = lineNum * gridW;
    var startX = (cw - size) / 2;
    var startY = (ch - size) / 2;
    //鼠标坐标
    var mX = e.x * dp - startX;
    var mY = e.y * dp - startY;

    var x = parseInt(mX/gridW + 0.5);//在第几个网子上
    var y = parseInt(mY/gridW + 0.5);

    var pices = new Pieces(x,y,myType);
    pieces.push(pices);
    draw();

    pices.step = true;
    pices.uid = userId;
    sendMsg(JSON.stringify(pices));
    isMe = false;
  });
  receiveMsg();
}

function sendMsg(message) {
  var ref = wilddog.sync().ref("web-wuziqi");
  ref.set(message);
  wlog(message);
}

function receiveMsg() {
  var ref = wilddog.sync().ref("web-wuziqi");
  ref.on('value', function(snapshot, prev) {
    var data = snapshot.val();
    console.log(data);
    var pices = JSON.parse(data);
    if (pices.command && pices.uid != userId) {
      if (pices.start) {
        userId = pices.foeUid//我的
        friendId = pices.uid;
        isMe = !pices.first;
        myType = pices.foeType;
        foeType = pices.myType;
      }
    }

    if (pices.step && pices.uid == friendId ) {
      isMe = true;
      pices = new Pieces(pices.x,pices.y,pices.type)
      pieces.push(pices);
      draw();
    }

  });
}

function draw() {
  drawChessboard();
  drawPieces();
}

function drawPieces() {
  var size = lineNum * gridW;
  var startX = (cw - size) / 2;
  var startY = (ch - size) / 2;
  ctx.save();
  ctx.translate(startX,startY);
  pieces.forEach((piece)=>{
    piece.draw(ctx,gridW);
  });
  ctx.restore();

}

function drawChessboard() {

  var size = lineNum * gridW;
  var startX = (cw - size) / 2;
  var startY = (ch - size) / 2;

  ctx.beginPath();
  for (var i = 0; i < lineNum+1; i++) {
    ctx.moveTo(startX,startY+i*gridW);
    ctx.lineTo(cw-startX,startY+i*gridW);
  }

  for (var i = 0; i < colNum+1; i++) {
    ctx.moveTo(startX+i*gridW,startY);
    ctx.lineTo(startX+i*gridW,ch-startY);
  }

  ctx.stroke();
}
function updateWindow() {
  // full screen dimensions
  cw = window.innerWidth * window.devicePixelRatio;
  ch = window.innerHeight * window.devicePixelRatio;
  // set canvas dimensions
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  canvas.width = cw;
  canvas.height = ch;
  lineWidth = window.devicePixelRatio;
  ctx.lineWidth = lineWidth;
  drawChessboard();

}
