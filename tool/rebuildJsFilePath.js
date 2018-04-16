const fs = require('fs');
const path = require('path');

var dir = path.join(__dirname, '../src').replace(/\\/g,'/')
var projectDir = path.parse(dir).dir

function ListDirFiles(dir, fileArr) {
  fs.readdirSync(dir).forEach((file)=> {
    var pathname = path.posix.join(dir, file)
    if (fs.statSync(pathname).isDirectory()) {
      ListDirFiles(pathname, fileArr)
    } else {
      fileArr.push(pathname)
    }
  })
}
var fileArr = []
ListDirFiles(dir, fileArr)
var jsFiles = fileArr.filter((item)=>{
  return item.endsWith('.js')
}).map((item)=>{
 return item.replace(dir,'/src')
})
var htmlFiles = fileArr.filter((item)=>{
  return item.endsWith('.html') || item.endsWith('/loadJsConfig.js')
})

var handleHtmlFile = (file)=>{
  var curDir = path.parse(file).dir
  var html = fs.readFileSync(file, 'utf-8')

  html = html.replace(/['"]([\.\/][\w\.\/-]+\.js)['"]/g, (a,b,c)=>{
    console.log(a,b,c);
    var fullPath = path.join(projectDir, b)
    if (b.startsWith('.')&&!b.startsWith('..')) {
      fullPath = path.join(curDir, b)
    }
    if (fs.existsSync(fullPath)) {
      return a
    }

    var fileName = b.split('/').pop()
    var findPath = jsFiles.filter((item)=>{
      return item.endsWith('/'+fileName)
    })[0]
    if (findPath) {
      return `"${findPath}"`
    }
    console.error(a);
    return a
  })
  fs.writeFileSync(file, html, 'utf-8')
}
// console.log(jsFiles);
// console.log(htmlFiles);
htmlFiles.forEach((item)=>{
   handleHtmlFile(item)
})
