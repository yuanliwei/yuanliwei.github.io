
/*
 从SQL建表语句创建java对象

CREATE TABLE `wrd_word_info` (
`word_id` int(11) NOT NULL COMMENT '单词id',
`wb_no` smallint(6) NOT NULL COMMENT '批次号',
`word` varchar(100) NOT NULL COMMENT '英文单词',
`paraphrase` varchar(500) DEFAULT '' COMMENT '中文释义',
`phonetic` varchar(100) DEFAULT NULL COMMENT '音标',
`example` text COMMENT '例句',
`net_file` varchar(255) DEFAULT NULL COMMENT '发音文件',
`word_desc` varchar(255) DEFAULT '' COMMENT '备注',
`source` varchar(100) DEFAULT '' COMMENT '来源',
PRIMARY KEY (`word_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='词汇基本信息表';
 */
var SQLJavaDbOrmlite,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

SQLJavaDbOrmlite = (function(superClass) {
  extend(SQLJavaDbOrmlite, superClass);

  function SQLJavaDbOrmlite() {}

  SQLJavaDbOrmlite.prototype.toJava = function(sqlStr, opts) {
    var filedStr;
    filedStr = this.parseSql2FiledsStr(sqlStr, opts);
    return SQLJavaDbOrmlite.__super__.toJava.call(this, filedStr, opts);
  };

  SQLJavaDbOrmlite.prototype.parseSql2FiledsStr = function(sqlStr, opts) {
    var className, i, key, keyStr, len, ref, reg, regKey, regName, regNote, regType, resultArr, sqlS, strFile, strFiles, strKeyName, strName, strNote, strType, value;
    reg = /CREATE +TABLE +([`|\S]+) +\(/i;
    className = (ref = sqlStr.match(reg)) != null ? ref[1] : void 0;
    reg = /`(\S+)`/;
    if (reg.test(className)) {
      opts.className = className.match(reg)[1];
    } else {
      if (className != null) {
        opts.className = className;
      }
    }
    sqlStr.split(',').join('\n');
    sqlS = sqlStr.split('\n');
    reg = /([`|\S]+) +(COMMENT +'(.*?)' ?,)/i;
    regName = /`\S+`/i;
    regType = /\S+\(/i;
    regNote = /'\S+'/i;
    regKey = /PRIMARY KEY/i;
    strFiles = {};
    strKeyName = '';
    for (key = i = 0, len = sqlS.length; i < len; key = ++i) {
      value = sqlS[key];
      if (value.match(reg)) {
        strName = value.match(regName);
        strName = strName[0].substring(1, strName[0].length - 1);
        strType = value.match(regType);
        strType = strType[0].substring(0, strType[0].length - 1);
        strNote = value.match(regNote);
        strNote = strNote[0].substring(1, strNote[0].length - 1);
        if ('varchar' === strType) {
          strType = "String";
        } else if ('smallint' === strType) {
          strType = "int";
        }
        strFile = "private " + strType + " " + strName + ";//" + strNote + "\n";
        strFiles[strName] = strFile;
      } else if (value.match(regKey)) {
        strKeyName = value.match(regName);
        strKeyName = strKeyName[0].substring(1, strKeyName[0].length - 1);
      }
      console.log(strFiles);
    }
    keyStr = strFiles[strKeyName];
    delete strFiles[strKeyName];
    resultArr = [];
    resultArr.push(keyStr);
    for (key in strFiles) {
      value = strFiles[key];
      resultArr.push(value);
    }
    console.log(resultArr.join('\n'));
    return resultArr.join('\n');
  };

  return SQLJavaDbOrmlite;

})(FiledsJavaDbOrmlite);
