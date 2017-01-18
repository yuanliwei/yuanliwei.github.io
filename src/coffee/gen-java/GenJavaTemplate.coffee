class GenJavaTemplate

  generate:(text, opts) ->
    templItem = """  b.a("{0}\\r\\n");"""
    templ = """
          public String build() {
            MessageFormatBuilder b = new MessageFormatBuilder();
          {0}
            return b.build();
          }

          class MessageFormatBuilder {

            StringBuilder sb;

            public MessageFormatBuilder() {
              super();
              this.sb = new StringBuilder();
            }

            public void a(String message, Object... params) {
              sb.append(MessageFormat.format(message, params));
            }

            public String build() {
              return sb.toString();
            }

          }
        """
    simpleTemplItem = """  b.append("{0}\\r\\n");"""
    simpleTempl = """
          public String build() {
            StringBuilder b = new StringBuilder();
          {0}
            return b.toString();
          }
          """
    text = text.replace(/\r\n/g,'\n')
    text = text.replace(/\\/g,'\\\\')
    text = text.replace(/"/g,'\\"')
    lines = text.split('\n')

    results = []
    lines.forEach (item)->
      if opts.simple
        results.push simpleTemplItem.format(item)
      else
        results.push templItem.format(item)
    if opts.simple
      simpleTempl.format results.join '\n'
    else
      templ.format results.join '\n'

  toJava: @.prototype.generate
