import StringUtil from "../../js/utils/StringUtil";

class ParseLayoutXML2 {

    parseXML(xml, opts) {
        let x = $(xml);
        let eles = x.find('*[android\\:id]');

        var defines = [];
        var values = [];
        eles.each(function (num, item) {
            var obj, origName,  varName, viewId, viewName;
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
            defines.push(`private ${obj.view} ${obj.name};`);
            values.push(`${obj.name} = (${obj.view}) findViewById(R.id.${obj.id});`);
        });
        return defines.join('\n') + '\n\n\n' + values.join('\n');
    }

    toJava(text, opts) {
        return this.parseXML(text, opts)
    }
}


export default ParseLayoutXML2