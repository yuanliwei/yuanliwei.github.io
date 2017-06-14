# 滚动代码

`http://www.thepetedesign.com/demos/onepage_scroll_demo.html`
`https://alvarotrigo.com/fullPage/`
```javascript
$.fn.transformPage = function(settings, pos, index) {
  if (typeof settings.beforeMove == 'function') settings.beforeMove(index);

  // Just a simple edit that makes use of modernizr to detect an IE8 browser and changes the transform method into
  // an top animate so IE8 users can also use this script.
  if($('html').hasClass('ie8')){
    if (settings.direction == 'horizontal') {
      var toppos = (el.width()/100)*pos;
      $(this).animate({left: toppos+'px'},settings.animationTime);
    } else {
      var toppos = (el.height()/100)*pos;
      $(this).animate({top: toppos+'px'},settings.animationTime);
    }
  } else{
    $(this).css({
      "-webkit-transform": ( settings.direction == 'horizontal' ) ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
     "-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
     "-moz-transform": ( settings.direction == 'horizontal' ) ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
     "-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
     "-ms-transform": ( settings.direction == 'horizontal' ) ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
     "-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
     "transform": ( settings.direction == 'horizontal' ) ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
     "transition": "all " + settings.animationTime + "ms " + settings.easing
    });
  }
  $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    if (typeof settings.afterMove == 'function') settings.afterMove(index);
  });
}

```

# 分割页面代码

`https://nathancahill.github.io/Split.js/`

# java 链式网络请求
new HttpGet(url)
  .onResponse(new Http{
      public void on(String res){

      }
    })
  .onSuccess()
  .onError()
