class Pieces {
  constructor(x,y,type) {
    //type 1 白，2黑
    this.x = x;
    this.y = y;
    this.type = type;
  }
  draw(ctx,gridw){
    ctx.fillStyle = (this.type == 1) ? "#fff" : "#000";
    ctx.beginPath();
    ctx.arc(this.x * gridw,this.y * gridw,20*dp,0,2*Math.PI);
    ctx.fill();
  }
}
