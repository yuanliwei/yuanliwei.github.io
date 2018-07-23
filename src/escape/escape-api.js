var Escape = {};

/*
 * URL编码
*/
Escape.encodeURIComponent = function(text) {
    return encodeURIComponent(text);
};

/*
 * URL解码
 */
Escape.decodeURIComponent = function(text) {
    return decodeURIComponent(text);
};

/*
 * Base64编码
*/
Escape.encodeBase64 = function(text) {
    return Base64.encode(text);
};

/*
 * Base64解码
 */
Escape.decodeBase64 = function(text) {
    return Base64.decode(text);
};

/*
 * MD5
 */
Escape.md5 = function(text) {
    return CryptoJS.MD5(text).toString();
};

/*
 * SHA1
 */
Escape.sha1 = function(text) {
    return CryptoJS.SHA1(text).toString();
};

/*
 * SHA256
 */
Escape.sha256 = function(text) {
    return CryptoJS.SHA256(text).toString();
};
/*
 * SHA512
 */
Escape.sha512 = function(text) {
    return CryptoJS.SHA512(text).toString();
};


/*
 * ascii2native
 */
Escape.ascii2native = function(ascii) {
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
};

/*
 * native2ascii
 */
Escape.native2ascii = function(native_) {
  var ascii, char, charAscii, chars, code, i, j, len;
  chars = native_.split('');
  ascii = '';
  for (i = j = 0, len = chars.length; j < len; i = ++j) {
    char = chars[i];
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
};

/*
 * HtmlEncode
 */
Escape.HtmlEncode = function(text) {
  return he.encode(text);
};

/*
 * HtmlDecode
 */
Escape.HtmlDecode = function(text) {
  return he.decode(text);
};

Escape.formatDate = function (dataValue) {
  return dataValue.replace(/(\d{13})|(\d{10})/g, function (val) {
    console.log(val);
    var date = parseInt(val)
    if (date == 2147483647) {
      // java中的Integer.MAX_VALUE
      return 'Integer.MAX_VALUE'
    }
    if (val.length == 10) {
      date *= 1000
    }
    return new Date(date).Format('yyyy-MM-dd hh:mm:ss.S');
  })
}

Escape.toUnicode = function (str) {
  var codes = []
  for (var i = 0; i < str.length; i++) {
    codes.push(("000"+str.charCodeAt(i).toString(16)).slice(-4))
  }
  return "\\u"+codes.join("\\u");
}

Escape.fromUnicode = function (str) {
  return unescape(str.replace(/\\/g, "%"));
}

Escape.htmlEncode= function(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

Escape.htmlDecode= function(str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  return div.innerText;
}

/*
 * GZIP编码
*/
Escape.encodeGZIP = function(text) {
    return buf2hex(pako.gzip(text));
};

/*
 * GZIP解码
 */
Escape.decodeGZIP = function(text) {
  return new TextDecoder('utf-8').decode(pako.ungzip(hex2buf(text)));
};

/*
 * ZIP编码
*/
Escape.encodeZIP = function(text) {
  var zip = new JSZip();
  zip.file("0", text).generateAsync({type:'arraybuffer'})
     .then((buf)=>{ Escape.encodeZIP.result = buf2hex(new Uint8Array(buf)) })
  return Escape.encodeZIP.result;
};

/*
 * ZIP解码
 */
Escape.decodeZIP = function(text) {
  let result = null
  try {
    return HexZip.parse(text.trim());
  } catch (e) { result = e.stack }
  try {
    new JSZip().loadAsync(hex2buf(text))
    .then((zip)=>{
      zip.file('0').async('text').then((text)=>{Escape.decodeZIP.result=text})
    }).catch((e)=>{ result += '\n'+e.stack })
    return Escape.decodeZIP.result;
  } catch (e) { result += '\n'+e.stack }
  return result
};

/*
 * JSON格式化
*/
Escape.formatJSON = function(text) {
  return js_beautify(text, {})
};

/*
 * XML格式化
 */
Escape.formatXML = function(text) {
  return vkbeautify.xml(text, 4)
};

/*
 * SQL格式化
 */
Escape.formatSQL = function(text) {
  return vkbeautify.sql(text, 4)
};

function hex2buf(hex) {
  let hexStr = hex.trim()
  var bytes = new Uint8Array(hexStr.length / 2)
  for (let i = 0; i < hexStr.length; i += 2) {
    bytes[i / 2] = parseInt(hexStr[i] + hexStr[i + 1], 16)
  }
  return bytes;
}

function buf2hex(buffer) {
  return [...buffer].map((item)=>(item>0xf?'':'0')+item.toString(16)).join('')
}

/*
  读取文件字节的工具类，包含读取指定字节数方法、定位方法、读取Int2，读取Int4等方法
*/
class FileBuffer {
    constructor(buffer) {
        this.buffer = buffer
        this.size = buffer.length
        this.pos = 0
    }

    readSign() {
        var arr = new Uint8Array(4)
        for (var i = 0; i < 4; i++) {
            arr[i] = this.buffer[this.pos + i]
        }
        this.pos += 4
        return arr;
    }

    readBuffer(count) {
        var arr = new Uint8Array(count)
        for (var i = 0; i < count; i++) {
            arr[i] = this.buffer[this.pos + i]
        }
        this.pos += count
        return arr;
    }

    readInt2() {
        var i = this.pos;
        var result = this.buffer[i] + (this.buffer[i + 1] << 8)
        this.pos += 2
        return result;
    }

    readInt4() {
        var i = this.pos;
        var result = this.buffer[i] + (this.buffer[i + 1] << 8) + (this.buffer[i + 2] << 16) + (this.buffer[i + 3] << 24)
        this.pos += 4
        return result;
    }

    seek(pos, seekType) {
        switch (seekType) {
            case 'SEEK_SET':
                this.pos = pos
                break;
            case 'SEEK_OFFSET':
                this.pos += pos
                break;
            case 'SEEK_END':
                this.pos = this.size - pos
                break;
            default:
                console.error('unknow seekType');
        }
    }

    EOF(){
      return this.pos>=this.buffer.length-1
    }
}

/*
  解析zip格式hex字符串的工具类
*/
class HexZip {
  static parse(hexStr) {
    var i = 0
    var bytes = new Uint8Array(hexStr.length / 2)

    for (i = 0; i < hexStr.length; i += 2) {
      bytes[i / 2] = parseInt(hexStr[i] + hexStr[i + 1], 16)
    }

    var file = new FileBuffer(bytes)
    file.seek(8, 'SEEK_SET')
    var comptype = file.readBuffer(2)
    file.seek(12, 'SEEK_END')
    var crc = file.readBuffer(4)
    var compressSize = file.readBuffer(4)
    var unCompressSize = file.readBuffer(4)
    file.seek(8, 'SEEK_END')
    var compressSizeInt = file.readInt4()
    var unCompressSizeInt = file.readInt4()

    var gz = new Uint8Array(18 + compressSizeInt)

    this.copy([0x1f, 0x8b, comptype[0]], gz, 0, 0, 10)
    this.copy(bytes, gz, 0x1f, 0x0a, compressSizeInt)
    this.copy(crc, gz, 0, 10 + compressSizeInt, 4)
    this.copy(unCompressSize, gz, 0, 10 + compressSizeInt + 4, 4)

    return new TextDecoder('utf-8').decode(pako.ungzip(gz))
  }

  static copy(src, dest, srcStart, destStart, length) {
    for (var i = 0; i < length; i++) {
      dest[destStart + i] = src[srcStart + i]
    }
  }
}

window.FileBuffer = FileBuffer
window.HexZip = HexZip
