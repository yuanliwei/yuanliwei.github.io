class App {
  constructor() {
    var self = this
    this.swiper = new Swiper('.swiper-container',{ });
    this.rootView = $('.swiper-wrapper')
    $.getJSON('https://api.bootcdn.cn/libraries.min.json', (datas)=>{
      self.datas = datas
      self.curIndex = 0
      self.addPages()
    })
    this.swiper.on('slideChange', function () {
      var cur = self.swiper.realIndex
      var total = self.swiper.slides.length
      console.log('slide changed cur:'+cur+" total:"+total);
      if (total - cur < 3) {
        self.addPages()
      }
    });
  }

  addPages(){
    console.log('add pages');
    var pageSize = 30
    var datas = this.datas.slice(this.curIndex,this.curIndex + pageSize)
    this.curIndex += pageSize
    for (var i = 0; i < datas.length;) {
      var n = parseInt(4 * Math.random()) + 1
      var subDatas = datas.slice(i,i+n)
      console.log('append i = ' + i);
      this.swiper.appendSlide(new Page(subDatas).element())
      i+=n
    }
  }
}

class Page {
  constructor(datas) {
    if (datas.length == 0) {
      throw new Error()
    }
    this.el = $('<div class="swiper-slide"></div>')
    this.initView(datas, this.el)
  }

  initView(datas, el){
    if (datas.length == 1) {
      el.append(this.getContent(datas[0]))
    } else {
      el.append(new SplitPage(datas).element())
    }
  }

  getContent(data){
    return $(`
        <div style="display:block; height:100%;">
          <h1>${data[0]}</h1>
          <p>${data[1]}</p>
          <p><i class="fa fa-star" aria-hidden="true" style="color:green;"></i>${data[2]}</p>
        </div>
      `)
  }

  element(){
    return this.el;
  }
}

class SplitPage {
  constructor(datas) {
    var sub = datas.slice(1,datas.length)
    this.el = $(`
      <div class="container">
        <div class="top split"></div>
        <div class="bottom split"></div>
      </div>
      `)
    var top = this.el.find('.top')
    var bottom = this.el.find('.bottom')
    Split([top[0], bottom[0]], {
      sizes: [40, 60],
      minSize: 30,
      gutterSize: 25,
      direction: 'vertical'
    });
    this.top = top
    this.bottom = bottom
    this.datas = datas
    this.render()
  }

  render(){
    var top = this.top
    var bottom = this.bottom
    var datas = this.datas
    top.append(new Page(datas.slice(0,1)).element())
    datas = datas.slice(1,datas.length)
    var el = $(`
        <div class="swiper-container">
          <div class="swiper-wrapper">
          </div>
        </div>
      `)
    bottom.append(el)
    let swiper = new Swiper(el[0],{
      nested: true
    });
    swiper.on('touchStart',(e)=>{
      swiper.update()
    })
    for (var i = 0; i < datas.length; i++) {
      var data = datas[i]
      swiper.appendSlide(new Page([data]).element())
    }
  }

  element(){
    return this.el;
  }
}
