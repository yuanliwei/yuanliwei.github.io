class Pom2Cmd {

    parse(text, opts) {
        var xml = text
        var dom = $.parseXML(xml)
        return $(xml.replace(/\$\{(.*?)\}/g, (match, name) => {
            var tags = dom.getElementsByTagName(name)
            return (tags.length == 0) ? match : tags[0].innerHTML
        })).find('dependency').map((num, item) => {
            var artifactId = $(item).find('artifactId')[0].innerText
            let v = $(item).find('version')[0]
            var version = v && v.innerText || 'unknown'
            var groupId = $(item).find('groupId')[0].innerText
            return `mvn install:install-file -Dfile=${artifactId}-${version}.jar -DgroupId=${groupId} -DartifactId=${artifactId} -Dversion=${version} -Dpackaging=jar`
        }).toArray().join('\n')
    }

    toJava(text, opts) {
        return this.parse(text, opts)
    }
}

export default Pom2Cmd

