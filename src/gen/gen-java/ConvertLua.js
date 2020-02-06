class ConvertLua {

    parse(text, opts) {
        var lua = text
        var lines = lua.split('\n')
        if (!lines[0]) {
            alert('lines[0] is null!')
        }
        var filename = lines[0].substring(3)
        var codes = []
        codes.push(`file.remove('${filename}')`)
        codes.push(`print(file.open('${filename}','w'))`)
        codes.push(`\n`)
        lines.forEach((item) => {
            codes.push(`file.writeline([[${item} ]])`)
        })
        codes.push(`file.close()`)
        return codes.join('\n')
    }

    toJava(text, opts) {
        return this.parse(text, opts)
    }
}

export default ConvertLua