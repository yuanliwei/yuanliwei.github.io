var RelationModel;

RelationModel = (function() {
  function RelationModel(modelView) {
    this.modelView = modelView;
    this.drawLine = new DrawLine(this.modelView);
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
        _this.lastViewModel.addChild(viewModel);
        _this.lastViewModel.dom.toggleClass('view-model-select');
        _this.lastViewModel = null;
        return _this.drawLine.draw();
      };
    })(this);
    this.update = (function(_this) {
      return function() {
        return _this.drawLine.update();
      };
    })(this);
    this.redraw = (function(_this) {
      return function() {
        return _this.drawLine.draw();
      };
    })(this);
  }

  return RelationModel;

})();
