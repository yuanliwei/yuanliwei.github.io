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

 class StyleXML {
    toStyleXML(text, opts) {
        let lines = text.trim().split(/\n/g);
        if (!((lines != null ? lines.length : void 0) > 0)) {
            return "lines is null";
        }
        let arr = [];
        lines.forEach(function (item) {
            var name, ss, value;
            ss = item.split('=');
            if (ss.length === 2) {
                name = ss[0].trim();
                value = ss[1].trim();
                value = value.replace(/^"(.*)"$/, function (match, first) {
                    return first;
                });
                return arr.push(`<item name="${name}">${value}</item>`);
            }
        });
        return arr.join('\n');
    }

    toJava(text, opts) {
        return this.toStyleXML(text, opts)
    }
}

export default StyleXML