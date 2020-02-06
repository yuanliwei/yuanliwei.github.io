class GenJavaTemplate {
    generate(text, opts) {
        text = text.replace(/\r\n/g, '\n');
        text = text.replace(/\\/g, '\\\\');
        text = text.replace(/"/g, '\\"');
        let lines = text.split('\n');
        let results = [];
        lines.forEach(function (item) {
            if (opts.simple) {
                return results.push(`  b.append("${item}\\r\\n");`)
            } else {
                return results.push(`  b.a("${item}\\r\\n");`)
            }
        });
        if (opts.simple) {
            return `public String build() {
          StringBuilder b = new StringBuilder();
          ${results.join('\n')}
          return b.toString();
        }`
        } else {
            return `public String build() {
          MessageFormatBuilder b = new MessageFormatBuilder();
          ${results.join('\n')}
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
          
        }`
        }
    }
    toJava(text, opts) {
        return this.generate(text, opts)
    }

}

export default GenJavaTemplate