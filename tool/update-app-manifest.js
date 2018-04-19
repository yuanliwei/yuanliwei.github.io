const fs = require('fs');
const path = require('path');
console.log(__dirname,path.join(__dirname,'../src/js/utils/loadJsConfig.js'),path.join(__dirname,'..'));
var ignores = '.git,doc,tool,coffee'.split(',')

function listFiles(path,length, paths) {
  var files = fs.readdirSync(path);
  for (var i = 0; i < files.length; i++) {
    if (ignores.includes(files[i])) continue
    var file = path + '/' + files[i]
    var stat = fs.statSync(file);
    if (stat.isDirectory() == true) {
      listFiles(file,length, paths);
    } else {
      paths.push(file.substr(length))
    }
  }
}

function listSource() {
  var LoadES6 = {}
  var urls = []
  LoadES6.config = function (cfg) {
    for(key in cfg){
        var value = cfg[key]
        urls = urls.concat(value)
    }
  }
  var src = fs.readFileSync(path.join(__dirname,'../src/js/utils/loadJsConfig.js'), {encoding: 'utf-8'})
  eval(src)
  var dir = path.join(__dirname,'..')
  listFiles(dir,dir.length, urls)
  urls = [...new Set(urls)]
  return urls.join('\n')
}

function updateManifest() {
  var d = new Date()
  var now = d.toLocaleDateString() + ' ' + d.toLocaleTimeString();

  var sources = listSource()

  var manifest = `CACHE MANIFEST

  # 生成时间 ${now}

  # 指定不进行缓存的资源文件
  NETWORK:
  *

  # 每行指定两个文件，第一个为在线时使用的资源，第二个是离线时使用的资源
  FALLBACK:
  # *.html /offline.html

  # 该类别指定要缓存的资源文件
  CACHE:
  ${sources}
  `

  manifest = manifest.split('\n').map((line)=>{
    return line.trim()
  }).join('\n')

  fs.writeFileSync(path.join(__dirname,'../app.manifest'), manifest, {encoding: 'utf-8'})
  console.log(`manifest update on ${now}`);
}

updateManifest()
