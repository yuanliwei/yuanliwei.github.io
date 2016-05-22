class ParseLayoutXML

  parseXML:(xml, opts) ->
    x=$ xml
    eles = x.find '*[android\\:id]'
    templ = """
        @ViewInject(R.id.{id})
        private {view} {name};
        """
    results = []
    eles.each (num, item)->
      # console.log no
      viewName = item.localName
      viewName = viewName.match(/\.?([^\.]*$)/)[1]
      viewId = item.getAttribute 'android:id'
      return unless viewId.startsWith '@+id/'
      viewId = viewId.substring(5)
      origName = xml.match  new RegExp viewName,'i'
      varName = viewId.match(/(_?[a-z|A-Z|0-9]*?){0,2}$/)[0]
      varName = StringUtil.format(varName,2)
      # console.log "origName:#{oralName} - name:#{viewName} - id:#{viewId}"
      obj = {
        id : viewId
        view : origName
        name : varName
      }

      result = templ.format obj

      results.push result
    results.join '\n'

  toJava: @.prototype.parseXML
