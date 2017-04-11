var NormalList = (function () {
  function NormalList(root_) {
    this.root = root_;

    this.itemTempl = this.root.html();
    var item = this.root.find('.item');
    item.remove();

    this.handle = null;   // 数据处理器
    this.rawDatas = [];   // 原始数据
    this.datas = [];      // 过滤后的数据
    this.filter = /./;    // 过滤器
    this.filterStr = ".";

    // 设置数据处理器
    this.setHandle = function (handle_) {
      this.handle = handle_;
    };

    // 设置数据
    this.setDatas = function (datas_) {
      this.root.html('');
      this.rawDatas = datas_;
      this.datas = this.filterDatas();
      this.updateList();
    };

    // 设置过滤器
    this.setFilter = function (filter_, ignoreCase_) {
      if (this.filterStr == filter_) {
        return;
      }
      this.filterStr = filter_;
      this.filter = new RegExp(filter_);
      this.filter.ignoreCase = ignoreCase_;
      this.setDatas(this.rawDatas);
    };

    // 过滤数据
    this.filterDatas = function () {
        var datas = [];
        for (var i = 0; i < this.rawDatas.length; i++) {
          var data = this.rawDatas[i];
          if (this.filterData(data)) {
            datas.push(data);
          }
        }
        return datas;
    };

    this.filterData = function (data) {
      if (typeof this.handle.filter == "function") {
        return this.handle.filter(data, this.filter);
      } else {
        return true;
      }
    };

    // 添加数据
    this.append = function (data_) {
      this.rawDatas.push(data_);
      if (this.filterData(data_)) {
        this.datas.push(data_);
        var i = this.datas.length - 1;
        var holder = this.getViewHolder(i);
        var data = this.datas[i];
        this.bindData(i, holder, data);
      }
    };

    // 更新列表
    this.updateList = function () {
      for (var i = 0; i < this.datas.length; i++) {
        var holder = this.getViewHolder(i);
        var data = this.datas[i];
        this.bindData(i, holder, data);
      }
    };

    this.getViewHolder = function (index) {
        var holder = this.createViewHolder();
        return holder;
    };

    this.createViewHolder = function () {
      var view = $(this.itemTempl);
      var holder = this.handle.createViewHolder(view);
      holder.view = view;
      this.root.append(holder.view);
      return holder;
    };

    this.bindData = function(i, holder, data){
      this.handle.bindData(i, holder, data);
      holder._index = i;
      holder._data = data;
    };

  };

  return NormalList;
})();
