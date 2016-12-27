var ViewModel;

ViewModel = (function() {
  function ViewModel(dom, view, node) {
    this.dom = dom;
    this.view = view;
    this.node = node;
    this.childs = {};
    this.parents = {};
    this.notify = (function(_this) {
      return function() {
        _this.dom.find('.key').text(_this.node.key);
        return _this.dom.find('.name').text(_this.node.name);
      };
    })(this);
    this.addChild = (function(_this) {
      return function(viewModel) {
        delete _this.node.parents[viewModel.node.key];
        delete _this.parents[viewModel.node.key];
        delete viewModel.node.childs[_this.node.key];
        delete viewModel.childs[_this.node.key];
        _this.node.addChild(viewModel.node);
        _this.childs[viewModel.node.key] = viewModel;
        return viewModel.parents[_this.node.key] = _this;
      };
    })(this);
  }

  return ViewModel;

})();
