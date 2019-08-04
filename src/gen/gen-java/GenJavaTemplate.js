var GenJavaTemplate;

GenJavaTemplate = (function() {
  function GenJavaTemplate() {}

  GenJavaTemplate.prototype.generate = function(text, opts) {
    var lines, results, simpleTempl, simpleTemplItem, templ, templItem;
    templItem = "  b.a(\"{0}\\r\\n\");";
    templ = "public String build() {\n  MessageFormatBuilder b = new MessageFormatBuilder();\n{0}\n  return b.build();\n}\n\nclass MessageFormatBuilder {\n\n  StringBuilder sb;\n\n  public MessageFormatBuilder() {\n    super();\n    this.sb = new StringBuilder();\n  }\n\n  public void a(String message, Object... params) {\n    sb.append(MessageFormat.format(message, params));\n  }\n\n  public String build() {\n    return sb.toString();\n  }\n\n}";
    simpleTemplItem = "  b.append(\"{0}\\r\\n\");";
    simpleTempl = "public String build() {\n  StringBuilder b = new StringBuilder();\n{0}\n  return b.toString();\n}";
    text = text.replace(/\r\n/g, '\n');
    text = text.replace(/\\/g, '\\\\');
    text = text.replace(/"/g, '\\"');
    lines = text.split('\n');
    results = [];
    lines.forEach(function(item) {
      if (opts.simple) {
        return results.push(simpleTemplItem.format(item));
      } else {
        return results.push(templItem.format(item));
      }
    });
    if (opts.simple) {
      return simpleTempl.format(results.join('\n'));
    } else {
      return templ.format(results.join('\n'));
    }
  };

  GenJavaTemplate.prototype.toJava = GenJavaTemplate.prototype.generate;

  return GenJavaTemplate;

})();

module.exports.GenJavaTemplate = GenJavaTemplate