class ParseMain {
    constructor() {
        var self = this
        this.dbFileElm = document.getElementById('dbfile');

        this.dbFileElm.onchange = function(event) {
            var f = event.target.files[0];
            var r = new FileReader();
            r.onload = function(event) {
                var buffer = new Uint8Array(event.target.result)
                if (!self.isEquals(buffer, 0, '504b0304')) {
                    alert('请选择zip文件');
                    return
                }

                self.file = new FileBuffer(buffer)
                self.parseZipDirEntry()
            }
            r.readAsArrayBuffer(f);
        }

    }

    isEquals(buffer, start, hex) {
        for (var i = 0; i < hex.length; i += 2) {
            if (parseInt(hex[i] + hex[i + 1], 16) !== buffer[i / 2 + start]) return false;
        }
        return true;
    }

    parseZipDirEntry() {

        this.file.seek(22, 'SEEK_END')
        var buffer = this.file.readSign()
        if (!this.isEquals(buffer, 0, '504b0506')) {
            console.error('未找到目录节点');
            return;
        }

        this.file.seek(-4, 'SEEK_OFFSET')
        var zipEndLocator = this.readZipEndLocator()

        this.file.seek(zipEndLocator.directoryOffset, 'SEEK_SET')

        console.log((zipEndLocator));

        var zipDirEntrys = []
        while (this.file.pos<zipEndLocator.directoryOffset+zipEndLocator.directorySize) {
          var zipDirEntry = this.readZipDirEntry()
          console.log(zipDirEntry.fileName);
          zipDirEntrys.push(zipDirEntry)
        }

        for (var i = 0; i < zipDirEntrys.length; i++) {
          var zipDirEntry = zipDirEntrys[i]
          console.log(zipDirEntry.fileName);
          if (zipDirEntry.fileName.endsWith('xml')) {
            this.unCompressedTextFile(zipDirEntry)
          }
        }

        console.log('end');

    }

    unCompressedTextFile(zipDirEntry){
      this.file.seek(zipDirEntry.headerOffset,'SEEK_SET')
      var zipFileRecord = this.readZipFileRecord(zipDirEntry)
      var buffer = new Uint8Array(10 + zipDirEntry.compressedSize + 4 + 4)
      buffer.set([0x1F,0x8B],0)
      buffer.set([zipDirEntry.compression],2)
      buffer.set([0,0,0,0,0,0,0],3)
      buffer.set(zipFileRecord.data,10)
      buffer.set(zipDirEntry.crc,zipDirEntry.compressedSize+10)
      buffer.set(zipDirEntry.unCompressedSize,zipDirEntry.compressedSize+10+4)
      console.log(new TextDecoder('utf-8').decode(pako.ungzip(buffer)))
    }

    readZipFileRecord(zipDirEntry) {
        var zipFileRecord = {}
        zipFileRecord.sign = this.file.readSign()
        zipFileRecord.version = this.file.readInt2()
        zipFileRecord.flags = this.file.readInt2()
        zipFileRecord.compression = this.file.readInt2()
        zipFileRecord.fileTime = this.file.readInt2()
        zipFileRecord.fileDate = this.file.readInt2()
        zipFileRecord.crc = this.file.readInt4()
        zipFileRecord.compressedSize = this.file.readInt4()
        zipFileRecord.unCompressedSize = this.file.readInt4()
        zipFileRecord.fileNameLength = this.file.readInt2()
        zipFileRecord.extraFieldLength = this.file.readInt2()
        var fileName = this.file.readBuffer(zipFileRecord.fileNameLength)
        zipFileRecord.fileName = new TextDecoder('gbk').decode(fileName)
        zipFileRecord.data = this.file.readBuffer(zipDirEntry.compressedSize)
        return zipFileRecord;
    }

    readZipDirEntry() {
        var zipDirEntry = {}
        zipDirEntry.sign = this.file.readSign()
        zipDirEntry.versionMadeBy = this.file.readInt2()
        zipDirEntry.versionToExtract = this.file.readInt2()
        zipDirEntry.flags = this.file.readInt2()
        zipDirEntry.compression = this.file.readInt2()
        zipDirEntry.fileTime = this.file.readInt2()
        zipDirEntry.fileDate = this.file.readInt2()
        zipDirEntry.crc = this.file.readBuffer(4)
        zipDirEntry.compressedSize = this.file.readInt4()
        zipDirEntry.unCompressedSize = this.file.readBuffer(4)
        zipDirEntry.fileNameLength = this.file.readInt2()
        zipDirEntry.extraFieldLength = this.file.readInt2()
        zipDirEntry.fileCommentLength = this.file.readInt2()
        zipDirEntry.diskNumberStart = this.file.readInt2()
        zipDirEntry.internalAttributes = this.file.readInt2()
        zipDirEntry.externalAttributes = this.file.readInt4()
        zipDirEntry.headerOffset = this.file.readInt4()
        var fileName = this.file.readBuffer(zipDirEntry.fileNameLength)
        zipDirEntry.fileName = new TextDecoder('gbk').decode(fileName)
        return zipDirEntry;
    }

    readZipEndLocator() {
        var zipEndLocator = {}
        zipEndLocator.sign = this.file.readSign()
        zipEndLocator.diskNumber = this.file.readInt2()
        zipEndLocator.startDiskNumber = this.file.readInt2()
        zipEndLocator.entriesOnDisk = this.file.readInt2()
        zipEndLocator.entriesInDirectory = this.file.readInt2()
        zipEndLocator.directorySize = this.file.readInt4()
        zipEndLocator.directoryOffset = this.file.readInt4()
        zipEndLocator.commonLength = this.file.readInt2()
        return zipEndLocator;
    }
}

class FileBuffer {
    constructor(buffer) {
        this.buffer = buffer
        this.size = buffer.length
        this.pos = 0
    }

    readSign() {
        var arr = new Uint8Array(4)
        for (var i = 0; i < 4; i++) {
            arr[i] = this.buffer[this.pos + i]
        }
        this.pos += 4
        return arr;
    }

    readBuffer(count) {
        var arr = new Uint8Array(count)
        for (var i = 0; i < count; i++) {
            arr[i] = this.buffer[this.pos + i]
        }
        this.pos += count
        return arr;
    }

    readInt2() {
        var i = this.pos;
        var result = this.buffer[i] + (this.buffer[i + 1] << 8)
        this.pos += 2
        return result;
    }

    readInt4() {
        var i = this.pos;
        var result = this.buffer[i] + (this.buffer[i + 1] << 8) + (this.buffer[i + 2] << 16) + (this.buffer[i + 3] << 24)
        this.pos += 4
        return result;
    }

    seek(pos, seekType) {
        switch (seekType) {
            case 'SEEK_SET':
                this.pos = pos
                break;
            case 'SEEK_OFFSET':
                this.pos += pos
                break;
            case 'SEEK_END':
                this.pos = this.size - pos
                break;
            default:
                console.error('unknow seekType');
        }
    }
}
