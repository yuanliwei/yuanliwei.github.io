class TemplManager

  constructor: () ->
    config = {
      authDomain: "ylw-wuziqi.wilddog.com"
      syncURL: "https://ylw-wuziqi.wilddogio.com"
    }
    wilddog.initializeApp(config)
    ref = wilddog.sync().ref("/code-template")
    ref.on 'value', (snapshot, prev) =>
      @updateList snapshot.val()

    @addTempl = (type, name, code)->
      ref.child(new Date().getTime()).child(type).child(name).set(code);

    @getViewsJavaCode = (views)->
      templ = """
      @ViewInject(R.id.{id})
      private {view} {name};
      """
      results = []
      for viewObj in views
        result = templ.format obj
        results.push result
      results.join '\n'

    @getViews=(xml) ->
      x=$ xml
      eles = x.find '*[android\\:id]'
      views = []
      eles.each (num, item)->
        viewName = item.localName
        viewName = viewName.match(/\.?([^\.]*$)/)[1]
        viewId = item.getAttribute 'android:id'
        return unless viewId.startsWith '@+id/'
        viewId = viewId.substring(5)
        origName = xml.match  new RegExp viewName,'i'
        varName = viewId.match(/(_?[a-z|A-Z|0-9]*?){0,2}$/)[0]
        varName = StringUtil.format(varName,2)
        obj = {
          id : viewId
          view : origName
          name : varName
        }
        views.push obj
      views
    @updateList = (val) =>
      # date type key value
      if not @tableTempl?
        @tableTempl = $('#table-templ').html()
      @maps = {}
      for key, value of val
        for name, code of value.type
          @maps[name] = code
      results = []
      for name, code of @maps
        results.push @tableTempl.format {name:name}
      $('#table-templ').html(results.join(''))
