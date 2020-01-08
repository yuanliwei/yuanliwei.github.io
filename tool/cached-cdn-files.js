const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process');

/**
 * 缓存cdn上的文件到本地
 * 主要用于做本地的缓存
 */
async function start() {
    let destCdnPath = path.join(__dirname, "../cdn")
    let configPath = path.join(__dirname, '../src/cfg/loaderConfig-raw.js')
    let destConfigPath = path.join(__dirname, '../src/cfg/loaderConfig.js')
    let config = fs.readFileSync(configPath, 'utf-8')
    let lines = config.split('\n')
    execSync(`rm -rf ./unpkg.com`, { cwd: destCdnPath })
    execSync(`rm -rf ./cdn.bootcss.com`, { cwd: destCdnPath })
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let match = line.match(/^ +"(https[^"]+)",?\s*$/)
        if (!match) { continue }
        let url = match[1]
        let destPath = path.posix.join(destCdnPath, url.replace('https://', ''))
        let convertUrl = line.replace("https://", '/cdn/')
        console.log(`download ${url}`)
        await downloadFile(url, destPath)
        lines[i] = convertUrl
    }
    config = lines.join('\n')
    fs.writeFileSync(destConfigPath, config)
    console.log(configPath)
    console.log(destConfigPath)
    console.log('over!')
}

async function downloadFile(url, destPath) {
    const fs = require('fs')
    let pDir = destPath.substr(0, destPath.lastIndexOf('/'))
    fs.mkdirSync(pDir, { recursive: true })
    return new Promise((resolve, reject) => {
        /** @type{object} */
        let options = require('url').parse(url)
        options.method = 'GET'
        options.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
            'Accept-Encoding': 'gzip',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        }
        let req = require(url.split(':')[0]).request(options, (res) => {
            console.log('STATUS:' + res.statusCode)
            let isGzip = res.headers['content-encoding'] == 'gzip'
            if (!isGzip) { res.setEncoding('utf-8') }
            let decodeGzip = () => require('zlib').gunzipSync(Buffer.concat(buffer)).toString()
            let buffer = []
            res.on('data', (chunk) => { buffer.push(chunk) })
            res.on('end', () => {
                let source = isGzip ? decodeGzip() : buffer.join('')
                fs.writeFileSync(destPath, source)
                resolve()
            })
        })
        req.on('error', (e) => { reject(e) })
        req.end()
    })
}

start()
