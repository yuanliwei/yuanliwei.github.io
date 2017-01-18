var GenJavaTemplate;

GenJavaTemplate = (function() {
  function GenJavaTemplate() {}

  GenJavaTemplate.prototype.generate = function(text, opts) {
    var lines, results, templ, templItem;
    templItem = "  b.a(\"{0}\\r\\n\");";
    templ = "public String build() {\n  MessageFormatBuilder b = new MessageFormatBuilder();\n{0}\n  return b.build();\n}\n\nclass MessageFormatBuilder {\n\n  StringBuilder sb;\n\n  public MessageFormatBuilder() {\n    super();\n    this.sb = new StringBuilder();\n  }\n\n  public void a(String message, Object... params) {\n    sb.append(MessageFormat.format(message, params));\n  }\n\n  public String build() {\n    return sb.toString();\n  }\n\n}";
    text = text.replace(/\r\n/g, '\n');
    text = text.replace(/\\/g, '\\\\');
    text = text.replace(/"/g, '\\"');
    lines = text.split('\n');
    results = [];
    lines.forEach(function(item) {
      return results.push(templItem.format(item));
    });
    return templ.format(results.join('\n'));
  };

  GenJavaTemplate.prototype.toJava = GenJavaTemplate.prototype.generate;

  return GenJavaTemplate;

})();
