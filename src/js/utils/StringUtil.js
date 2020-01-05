export default class StringUtil {

  static upperBegin(item) {
    return item.replace(/(\w)/, function (match) {
      return match.toUpperCase();
    });
  }

  static lowerBegin(item) {
    return item.replace(/(\w)/, function (match) {
      return match.toLowerCase();
    });
  }

  static formatJavaType(item) {
    switch (item) {
      case 'char':
      case 'string':
      case 'datetime':
      case 'text':
        return 'String';
      case 'int':
        return 'int';
      case 'decimal':
      case 'double':
        return 'double';
      case 'float':
        return 'float';
      default:
        return 'ERROR TYPE';
    }
  }

  static formatDbType(item) {
    switch (item) {
      case 'String':
        return 'TEXT';
      case 'int':
        return 'INTEGER';
      case 'float':
        return 'DOUBLE';
      default:
        return 'ERROR TYPE';
    }
  }

  static formatJavaVarName(item) {
    return this.lowerBegin(item.replace(/(_\w)/g, function (match) {
      return match[1].toUpperCase();
    }));
  }

  static formatJSONVarName(item) {
    return this.formatJavaVarName(item).replace(/([A-Z])/g, function (match) {
      return '_' + match.toLowerCase();
    });
  }

  static format() {
    var arg, args, i, item, j, len;
    args = arguments;
    item = args[0];
    for (i = j = 0, len = args.length; j < len; i = ++j) {
      arg = args[i];
      if (i !== 0) {
        switch (arg) {
          case 0:
            item = this.upperBegin(item);
            break;
          case 1:
            item = this.lowerBegin(item);
            break;
          case 2:
            item = this.formatJavaVarName(item);
            break;
          case 3:
            item = this.formatJSONVarName(item);
            break;
          case 4:
            item = this.formatJSONVarName(item);
            break;
          case 5:
            item = this.formatJavaType(item);
            break;
          case 6:
            item = this.formatDbType(item);
            break;
          default:
            throw new Error("IllegalArgument for " + arg);
        }
      }
    }
    return item;
  }

  static ascii2native(ascii) {
    var code, i, j, len, native1, words;
    words = ascii.split('\\u');
    native1 = words[0];
    for (i = j = 0, len = words.length; j < len; i = ++j) {
      code = words[i];
      if (!(i !== 0)) {
        continue;
      }
      native1 += String.fromCharCode(parseInt("0x" + (code.substr(0, 4))));
      if (code.length > 4) {
        native1 += code.substr(4, code.length);
      }
    }
    return native1;
  }

  static native2ascii(native_) {
    var ascii, charAscii, chars, code, i, j, len;
    chars = native_.split('');
    ascii = '';
    for (i = j = 0, len = chars.length; j < len; i = ++j) {
      code = Number(chars[i].charCodeAt(0));
      if (code > 127) {
        charAscii = code.toString(16);
        charAscii = new String('0000').substr(charAscii.length, 4) + charAscii;
        ascii += '\\u' + charAscii;
      } else {
        ascii += chars[i];
      }
    }
    return ascii;
  }

  static formatStr() {
    var args, item;
    args = arguments;
    item = args[0];
    return item.replace(/{(\d+)}/g, function (match, num) {
      var i;
      i = parseInt(num) + 1;
      if (typeof args[i] !== 'undefined') {
        return args[i];
      } else {
        return match;
      }
    });
  }
}

