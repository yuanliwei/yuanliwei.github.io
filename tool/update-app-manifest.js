const fs = require('fs');
const path = require('path');
console.log(__dirname,path.join(__dirname,'../src/js/utils/loadJsConfig.js'),path.join(__dirname,'..'));

function updateManifest() {
  var d = new Date()
  var now = d.toLocaleDateString() + ' ' + d.toLocaleTimeString();

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
  index.html
  `

  manifest = manifest.split('\n').map((line)=>{
    return line.trim()
  }).join('\n')

  fs.writeFileSync(path.join(__dirname,'../app.manifest'), manifest, {encoding: 'utf-8'})
  console.log(`manifest update on ${now}`);
}

updateManifest()
