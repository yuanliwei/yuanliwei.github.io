var TemplManager;

TemplManager = (function() {
  function TemplManager() {
    var ref;
    wilddog.initializeApp({
      syncURL: "https://ylw-wuziqi.wilddogio.com"
    });
    ref = wilddog.sync().ref("/code-template");
    ref.on('value', (function(_this) {
      return function(snapshot, prev) {
        return _this.updateList(snapshot.val());
      };
    })(this));
    this.addTempl = function(type, name, code) {
      return ref.child(new Date().getTime()).child(type).child(name).set(code);
    };
    this.getViewsJavaCode = function(views) {
      var i, len, result, results, templ, viewObj;
      templ = "@ViewInject(R.id.{id})\nprivate {view} {name};";
      results = [];
      for (i = 0, len = views.length; i < len; i++) {
        viewObj = views[i];
        result = templ.format(obj);
        results.push(result);
      }
      return results.join('\n');
    };
    this.getViews = function(xml) {
      var eles, views, x;
      x = $(xml);
      eles = x.find('*[android\\:id]');
      views = [];
      eles.each(function(num, item) {
        var obj, origName, varName, viewId, viewName;
        viewName = item.localName;
        viewName = viewName.match(/\.?([^\.]*$)/)[1];
        viewId = item.getAttribute('android:id');
        if (!viewId.startsWith('@+id/')) {
          return;
        }
        viewId = viewId.substring(5);
        origName = xml.match(new RegExp(viewName, 'i'));
        varName = viewId.match(/(_?[a-z|A-Z|0-9]*?){0,2}$/)[0];
        varName = StringUtil.format(varName, 2);
        obj = {
          id: viewId,
          view: origName,
          name: varName
        };
        return views.push(obj);
      });
      return views;
    };
    this.updateList = (function(_this) {
      return function(val) {
        var code, key, name, ref1, ref2, results, value;
        if (_this.tableTempl == null) {
          _this.tableTempl = $('#table-templ').html();
        }
        _this.maps = {};
        for (key in val) {
          value = val[key];
          ref1 = value.type;
          for (name in ref1) {
            code = ref1[name];
            _this.maps[name] = code;
          }
        }
        results = [];
        ref2 = _this.maps;
        for (name in ref2) {
          code = ref2[name];
          results.push(_this.tableTempl.format({
            name: name
          }));
        }
        return $('#table-templ').html(results.join(''));
      };
    })(this);
  }

  return TemplManager;

})();
