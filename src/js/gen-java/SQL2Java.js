var SQLJavaDbOrmlite,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

SQLJavaDbOrmlite = (function(superClass) {
  extend(SQLJavaDbOrmlite, superClass);

  function SQLJavaDbOrmlite() {}

  SQLJavaDbOrmlite.prototype.toJava = function(sqlStr, opts) {
    var filedStr;
    filedStr = this.parseSql2FiledsStr(sqlStr);
    return SQLJavaDbOrmlite.__super__.toJava.call(this, filedStr, opts);
  };

  SQLJavaDbOrmlite.prototype.parseSql2FiledsStr = function(sqlStr) {
    return sqlStr.split(',').join('\n');
  };

  return SQLJavaDbOrmlite;

})(FiledsJavaDbOrmlite);
