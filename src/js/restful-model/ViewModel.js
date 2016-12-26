var ViewModel;

ViewModel = (function() {
  function ViewModel(dom, view, node) {
    this.dom = dom;
    this.view = view;
    this.node = node;
    this.notify = (function(_this) {
      return function() {
        _this.dom.find('.key').text(_this.node.key);
        return _this.dom.find('.name').text(_this.node.name);
      };
    })(this);
  }

  return ViewModel;

})();
