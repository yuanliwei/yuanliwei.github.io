class PageState {
  constructor() {

  }

  static load(){
    var params = arguments;
    var pageStateName = document.title;
    var pageStateJson = localStorage.getItem(pageStateName);
    console.log("load:" + pageStateJson);
    if (localStorage && pageStateJson) {
        var pageStateMap = JSON.parse(pageStateJson);
        for (var i = 0; i < params.length; i++) {
          var param = params[i];
          var input = $(param)[0];
          switch (input.type) {
            case "text": input.value = pageStateMap[param]; break;
            case "radio":
            case "checkbox": input.checked = pageStateMap[param]; break;
            default: console.error("unknow type");

          }
        }
        // var textareas = $('textarea');
        // textareas.each(function (ind, textarea) {
        //   textarea.value = Config[index];
        //   index++;
        // });
    }
  }

  static save(){
    if (!localStorage) return;
    var params = arguments;
    var pageStateName = document.title;
    var pageStateMapJson = localStorage.getItem(pageStateName) || "{}";
    var pageStateMap = JSON.parse(pageStateMapJson);
    for (var i = 0; i < params.length; i++) {
      var param = params[i];
      var input = $(param)[0];
      switch (input.type) {
        case "text": pageStateMap[param] = input.value; break;
        case "radio":
        case "checkbox": pageStateMap[param] = input.checked; break;
        default: console.error("unknow type");
      }
    }
    localStorage.setItem(pageStateName, JSON.stringify(pageStateMap));
        // var textareas = $('textarea');
        // textareas.each(function (ind, textarea) {
        //   textarea.value = Config[index];
        //   index++;
        // });
  }
}
