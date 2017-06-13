
/*
Android 样式 转 style.xml
使用：
    fileds2Java = new StyleXML()
    filedStr = """
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:gravity="center_horizontal"
        """
    javaSrc = fileds2Java.toJava filedStr, opts
    console.log javaSrc
 */

var StyleXML = (function () {
    function StyleXML() {

    }

    StyleXML.prototype.toStyleXML = function (text, opts) {
        var arr, lines, tem;
        lines = text.trim().split(/\n/g);
        if (!((lines != null ? lines.length : void 0) > 0)) {
            return "lines is null";
        }
        arr = [];
        tem = '<item name="{0}">{1}</item>';
        lines.forEach(function (item) {
            var name, ss, value;
            ss = item.split('=');
            if (ss.length === 2) {
                name = ss[0].trim();
                value = ss[1].trim();
                value = value.replace(/^"(.*)"$/, function (match, first) {
                    return first;
                });
                return arr.push(tem.format(name, value));
            }
        });
        return arr.join('\n');
    };

    StyleXML.prototype.toJava = StyleXML.prototype.toStyleXML;

    return StyleXML;

})();



var AlignComment = (function () {
    function AlignComment() {

    }

    AlignComment.prototype.alignComment = function (text, opts) {
        return text;
    };

    AlignComment.prototype.toJava = AlignComment.prototype.alignComment;

    return AlignComment;

})();




var FormatCode = (function () {
    function FormatCode() {

    }

    FormatCode.prototype.getLogUrl = function (text, opts) {
        return js_beautify(text);
    };

    FormatCode.prototype.toJava = FormatCode.prototype.getLogUrl;

    return FormatCode;

})();


var ParseLayoutXML = (function() {
  function ParseLayoutXML() {}

  ParseLayoutXML.prototype.parseXML = function(xml, opts) {
    var eles, results, templ, x;
    x = $(xml);
    eles = x.find('*[android\\:id]');
    templ = "@ViewInject(R.id.{id})\nprivate {view} {name};";
    results = [];
    eles.each(function(num, item) {
      var obj, origName, result, varName, viewId, viewName;
      viewName = item.localName;
      viewName = viewName.match(/\.?([^\.]*$)/)[1];
      viewId = item.getAttribute('android:id');
      if (!viewId.startsWith('@+id/')) {
        return;
      }
      viewId = viewId.substring(5);
      origName = xml.match(new RegExp(viewName, 'i'));
      varName = viewId.match(/(_?[a-z|A-Z|0-9]*?){0,2}$/)[0];
      varName = StringUtil.format(varName, 2);
      obj = {
        id: viewId,
        view: origName,
        name: varName
      };
      result = templ.format(obj);
      return results.push(result);
    });
    return results.join('\n');
  };

  ParseLayoutXML.prototype.toJava = ParseLayoutXML.prototype.parseXML;

  return ParseLayoutXML;

})();



var Pom2Cmd = (function () {
    function Pom2Cmd() {

    }

    Pom2Cmd.prototype.parse = function (text, opts) {
      var xml = text
      var dom = $.parseXML(xml)
      return $(xml.replace(/\$\{(.*?)\}/g, (match, name)=>{
        var tags = dom.getElementsByTagName(name)
        return (tags.length == 0)?match:tags[0].innerHTML
      })).find('dependency').map((num, item)=>{
        var artifactId = $(item).find('artifactId')[0].innerText
        var version = $(item).find('version')[0].innerText
        var groupId = $(item).find('groupId')[0].innerText
        return `mvn install:install-file -Dfile=${artifactId}-${version}.jar -DgroupId=${groupId} -DartifactId=${artifactId} -Dversion=${version} -Dpackaging=jar`
      }).toArray().join('\n')
    };

    Pom2Cmd.prototype.toJava = Pom2Cmd.prototype.parse;

    return Pom2Cmd;

})();
