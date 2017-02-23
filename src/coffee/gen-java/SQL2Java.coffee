# 从SQL建表语句创建java对象
class SQLJavaDbOrmlite extends FiledsJavaDbOrmlite

  constructor: () ->

  toJava: (sqlStr, opts) ->
    filedStr = @parseSql2FiledsStr sqlStr
    super filedStr, opts

  parseSql2FiledsStr: (sqlStr) ->
    # TODO: 在这里解析sql成fileds字符串
    # TODO: 解析表名、类名
    sqlStr.split(',').join('\n')
