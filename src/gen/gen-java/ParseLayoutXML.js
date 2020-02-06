import StringUtil from "../../js/utils/StringUtil";

class ParseLayoutXML {
    parseXML(xml, opts) {
        let x = $(xml);
        let eles = x.find('*[android\\:id]');
        let results = [];
        eles.each(function (num, item) {
            var obj, origName, result, varName, viewId, viewName;
            viewName = item.localName;
            viewName = viewName.match(/\.?([^.]*$)/)[1];
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
            result = `@ViewInject(R.id.${obj.id})\nprivate ${obj.view} ${obj.name};`
            return results.push(result);
        });
        return results.join('\n');
    }

    toJava(text, opts) {
        return this.parseXML(text, opts)
    }
}

export default ParseLayoutXML