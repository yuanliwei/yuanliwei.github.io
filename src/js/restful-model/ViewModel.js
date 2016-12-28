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
    this.deleteRelations = (function(_this) {
      return function() {
        var child, key, parent, ref, ref1, results;
        ref = _this.parents;
        for (key in ref) {
          parent = ref[key];
          delete parent.childs[_this.node.key];
        }
        ref1 = _this.childs;
        results = [];
        for (key in ref1) {
          child = ref1[key];
          results.push(delete child.parents[_this.node.key]);
        }
        return results;
      };
    })(this);
  }

  return ViewModel;

})();
