var RelationModel;

RelationModel = (function() {
  function RelationModel(modelView) {
    this.modelView = modelView;
    this.drawLine = new DrawLine(this);
    this.relations = [];
    this.repeatRelations = [];
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
        _this.update();
        return saveSourceData();
      };
    })(this);
    this.update = (function(_this) {
      return function() {
        var i, j, len, len1, ref, ref1, relationsKeys, viewModel;
        _this.relations = [];
        relationsKeys = [];
        ref = _this.modelView.views;
        for (i = 0, len = ref.length; i < len; i++) {
          viewModel = ref[i];
          if ($.isEmptyObject(viewModel.parents)) {
            _this.getViewModelRelations(viewModel, relationsKeys, _this.relations);
          }
        }
        _this.repeatRelations = [];
        ref1 = _this.modelView.views;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          viewModel = ref1[j];
          relationsKeys = [];
          relationsKeys.push(viewModel.node.key);
          _this.getRepeatViewModelRelations(viewModel.node.key, viewModel, relationsKeys, _this.repeatRelations);
        }
        return _this.drawLine.update();
      };
    })(this);
    this.redraw = (function(_this) {
      return function() {
        return _this.drawLine.draw();
      };
    })(this);
    this.getViewModelRelations = (function(_this) {
      return function(viewModel, relationsKeys, relations) {
        var childViewModel, childs, key, relationsKey, results;
        childs = viewModel.childs;
        if ($.isEmptyObject(childs)) {
          return;
        }
        if (relations.length > 1000) {
          return;
        }
        results = [];
        for (key in childs) {
          childViewModel = childs[key];
          relationsKey = "" + viewModel.node.key + childViewModel.node.key;
          if (relationsKeys.indexOf(relationsKey) < 0) {
            relationsKeys.push("" + viewModel.node.key + childViewModel.node.key);
            relations.push([viewModel, childViewModel]);
          } else {
            continue;
          }
          results.push(_this.getViewModelRelations(childViewModel, relationsKeys, relations));
        }
        return results;
      };
    })(this);
    this.getRepeatViewModelRelations = (function(_this) {
      return function(uniqueKey, viewModel, relationsKeys, repeatRelations) {
        var childViewModel, childs, key, relationsKey, results;
        childs = viewModel.childs;
        if ($.isEmptyObject(childs)) {
          return;
        }
        results = [];
        for (key in childs) {
          childViewModel = childs[key];
          relationsKey = "" + childViewModel.node.key;
          if (relationsKeys.indexOf(relationsKey) > -1) {
            if (uniqueKey === relationsKey) {
              repeatRelations.push([viewModel, childViewModel]);
            }
            continue;
          }
          relationsKeys.push(relationsKey);
          results.push(_this.getRepeatViewModelRelations(uniqueKey, childViewModel, relationsKeys, repeatRelations));
        }
        return results;
      };
    })(this);
    this.getRelationData = (function(_this) {
      return function() {
        var i, len, ref, relation, relationDatas;
        relationDatas = [];
        ref = _this.relations;
        for (i = 0, len = ref.length; i < len; i++) {
          relation = ref[i];
          relationDatas.push([relation[0].node.key, relation[1].node.key]);
        }
        return relationDatas;
      };
    })(this);
    this.loadRelationData = (function(_this) {
      return function(relationDatas) {
        var cViewModel, i, j, len, len1, pViewModel, ref, relation, relationMap, results, viewModel;
        if (relationDatas == null) {
          return;
        }
        relationMap = {};
        ref = _this.modelView.views;
        for (i = 0, len = ref.length; i < len; i++) {
          viewModel = ref[i];
          relationMap[viewModel.node.key] = viewModel;
        }
        results = [];
        for (j = 0, len1 = relationDatas.length; j < len1; j++) {
          relation = relationDatas[j];
          pViewModel = relationMap[relation[0]];
          cViewModel = relationMap[relation[1]];
          results.push(pViewModel.addChild(cViewModel));
        }
        return results;
      };
    })(this);
  }

  return RelationModel;

})();
