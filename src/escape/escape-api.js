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
