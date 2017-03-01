###
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

###
class SQLJavaDbOrmlite extends FiledsJavaDbOrmlite
  constructor: () ->

  toJava: (sqlStr, opts) ->
    filedStr = @parseSql2FiledsStr sqlStr, opts
    super filedStr, opts

  parseSql2FiledsStr: (sqlStr, opts) ->
    # TODO: 解析表名、类名
    reg = /CREATE +TABLE +([`|\S]+) +\(/i
    className = sqlStr.match(reg)?[1]
    reg = /`(\S+)`/
    if(reg.test(className))
      opts.className = className.match(reg)[1]
    else
      opts.className = className if className?
    sqlStr.split(',').join('\n')

    # TODO: 在这里解析sql成fileds字符串
    sqlStr.split('\n')
    reg = /([`|\S]+) +(COMMENT +'(.*?)' ?,)/i
# sql="""CREATE TABLE `wrd_word_info` (
# `word_id` int(11) NOT NULL COMMENT '单词id',
# `wb_no` smallint(6) NOT NULL COMMENT '批次号',
# `word` varchar(100) NOT NULL COMMENT '英文单词',
# `paraphrase` varchar(500) DEFAULT '' COMMENT '中文释义',
# `phonetic` varchar(100) DEFAULT NULL COMMENT '音标',
# `example` text COMMENT '例句',
# `net_file` varchar(255) DEFAULT NULL COMMENT '发音文件',
# `word_desc` varchar(255) DEFAULT '' COMMENT '备注',
# `source` varchar(100) DEFAULT '' COMMENT '来源',
# PRIMARY KEY (`word_id`)
# ) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='词汇基本信息表';"""
 
