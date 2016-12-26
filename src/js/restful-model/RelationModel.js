var RelationModel;

RelationModel = (function() {
  function RelationModel() {
    this.drawLine = new DrawLine();
    this.lastViewModel;
    this.click = (function(_this) {
      return function(viewModel) {
        if (_this.lastViewModel == null) {
          _this.lastViewModel = viewModel;
          _this.lastViewModel.dom.toggleClass('view-model-select');
          return;
        }
        if (_this.lastViewModel === viewModel) {
          _this.lastViewModel.dom.toggleClass('view-model-select');
          _this.lastViewModel = null;
          return;
        }
        delete _this.lastViewModel.node.parents[viewModel.node.key];
        delete viewModel.node.childs[_this.lastViewModel.node.key];
        _this.lastViewModel.node.addChild(viewModel.node);
        _this.lastViewModel.dom.toggleClass('view-model-select');
        _this.lastViewModel = null;
        return _this.drawLine.draw();
      };
    })(this);
  }

  return RelationModel;

})();
