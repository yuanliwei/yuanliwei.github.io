const fs = require('fs');

var ignores = '.git,doc,tool,coffee'.split(',')

function listFiles(path, paths) {
  var files = fs.readdirSync(path);
  for (var i = 0; i < files.length; i++) {
    if (ignores.includes(files[i])) continue
    var file = path + '/' + files[i]
    var stat = fs.statSync(file);
    if (stat.isDirectory() == true) {
      listFiles(file, paths);
    } else {
      paths.push(file.substr(2))
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
  var src = fs.readFileSync('../src/js/utils/loadJsConfig.js', {encoding: 'utf-8'})
  eval(src)
  listFiles('..', urls)
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

  fs.writeFileSync('../app.manifest', manifest, {encoding: 'utf-8'})
  console.log(`manifest update on ${now}`);
}

var lastUpdateTime = 0;

function watch(dir) {
  fs.watch(dir, (event, filename)=> {
    if (ignores.includes(filename)) return
    var diff = Date.now() - lastUpdateTime
    lastUpdateTime = Date.now()
    if (diff < 100) return
    console.log('event is: ' + event + 'filename:' + filename + ' now:' + Date.now());
    updateManifest()
  })

  var files = fs.readdirSync(dir);
  for (var i = 0; i < files.length; i++) {
    if (ignores.includes(files[i])) continue
    var file = dir + '/' + files[i]
    var stat = fs.statSync(file)
    if (stat.isDirectory() == true) {
      watch(file);
    }
  }
}

watch('..')
console.log('start watch...');
updateManifest()
