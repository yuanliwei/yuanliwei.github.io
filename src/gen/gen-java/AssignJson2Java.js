function parse(string) {
    return (function () { return window['eval'](`(${string})`) })()
}

class AssignJson2Java {

    toJava(json) {
        try {
            json = parse(json)
        } catch (e) {
            var msg = e.message
            console.log('origin', msg);
            var stack = e.stack
            var pos = json.length
            while (pos > 0) {
                pos -= 10
                try {
                    parse(json.substr(0, pos))
                } catch (e) {
                    if (msg != e.message) {
                        break
                    }
                }
            }
            console.log(e.message);
            console.error(e);
            var str = json.substr(pos - 10, 30)
            return str + '\n\n' + stack
        }
        var keys = Object.keys(json)
        var length = 16
        keys.forEach((item) => {
            length = Math.max(item.length, length)
        })
        length++
        var results = []
        let space = ' '.repeat(length - 17 + 1)
        results.push(`JSONObject jsObj${space}= JSON.parseObject(json);`);
        keys.forEach((item) => {
            let data = json[item]
            let type = (typeof data)
            let space = ' '.repeat(length - item.length)
            if (type == 'string') {
                results.push(`${item}${space}= jsObj.getString("${item}");`);
            }
            if (type == 'number') {
                if (data % 1 == 0) {
                    results.push(`${item}${space}= jsObj.getIntValue("${item}");`);
                } else {
                    results.push(`${item}${space}= jsObj.getFloatValue("${item}");`);
                }
            }
        })
        return results.join('\n')
    }
}

export default AssignJson2Java