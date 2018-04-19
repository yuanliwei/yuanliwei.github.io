class App {
  constructor() {
    this.data = new AppData(this)
    this.searchBar = new SearchBar(this)
    this.validPanel = new ValidPanel(this)
    this.schemaPanel = new SchemaPanel(this)
  }
}
class SchemaPanel {
  constructor(app) {
    this.app = app
    this.buildElement()
    this.themeBtn = this.el.find('.change-theme')
    this.fullscreenBtn = this.el.find('.fullscreen')
    this.urlInput = this.el.find('.url')
    this.save = this.el.find('.save')
    this.close = this.el.find('.close-btn')
    this.cancle = this.el.find('.cancle-btn')
    this.genSchemaBtn = this.el.find('.genSchema')
    this.beautify = this.el.find('.beautify')
    this.themeInd = 0
    this.themeArr = [ "default", "3024-day", "3024-night", "abcdef", "ambiance", "base16-dark", "base16-light", "bespin", "blackboard", "cobalt", "colorforth", "dracula", "duotone-dark", "duotone-light", "eclipse", "elegant", "erlang-dark", "hopscotch", "icecoder", "isotope", "lesser-dark", "liquibyte", "material", "mbo", "mdn-like", "midnight", "monokai", "neat", "neo", "night", "panda-syntax", "paraiso-dark", "paraiso-light", "pastel-on-dark", "railscasts", "rubyblue", "seti", "solarized dark", "solarized light", "the-matrix", "tomorrow-night-bright", "tomorrow-night-eighties", "ttcn", "twilight", "vibrant-ink", "xq-dark", "xq-light", "yeti", "zenburn" ]

  }

  handleExtraKeys(){
    var extraKeys = {
      "Alt-/": "autocomplete",
      "Tab": (cm)=> cm.replaceSelection(Array(cm.getOption("indentUnit") + 1).join(" ")),
      "Ctrl-Q": (cm)=> cm.foldCode(cm.getCursor()),
      "Ctrl-/": (cm)=> cm.toggleComment(),
      "Esc": (cm)=>cm.setOption("fullScreen", false)
    }

    this.editor.setOption("extraKeys", extraKeys)
  }

  handleSpecialChars(){
    // \u0020 space | \u0009 tab
    var specialChars = /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\u0020\u0009]/
    this.editor.setOption("specialChars", specialChars)
    var defaultSpecialCharPlaceholder = this.editor.getOption("specialCharPlaceholder")
    this.editor.setOption("specialCharPlaceholder", (ch)=>{
      var token = defaultSpecialCharPlaceholder(ch)
      switch (ch.charCodeAt(0)) {
        case 9:  // tab
        token.classList.remove("cm-invalidchar")
        token.classList.add('cm-invalidchar-u20')
        token.innerText='→'
        break;
        case 32: // space
        token.classList.remove("cm-invalidchar")
        token.classList.add('cm-invalidchar-u20')
        break;
      }
      return token
    })
  }

  initTheme(){
    const {themeBtn, themeArr} = this
    this.themeInd = localStorage.CodeEditorThemeIndex
    if (!this.themeInd) {
      this.themeInd = 0
    }
    themeBtn.text(themeArr[this.themeInd])
    this.editor.setOption("theme", themeArr[this.themeInd])
  }

  initClick(){
    const {app, themeBtn, themeArr, fullscreenBtn,save, close, cancle, genSchemaBtn, urlInput, editor, beautify} = this
    themeBtn.click(()=>{
      this.themeInd++
      if (this.themeInd >= themeArr.length) {
        this.themeInd = 0
      }
      var theme = themeArr[this.themeInd]
      this.editor.setOption("theme", theme)
      localStorage.CodeEditorThemeIndex = this.themeInd
      themeBtn.text(theme)
    })
    fullscreenBtn.click(()=>{
      this.editor.setOption("fullScreen", true)
    })
    cancle.click(()=>{
      this.hide()
    })
    close.click(()=>{
      this.hide()
    })
    save.click(()=>{
      var url = urlInput.val()
      if (url.trim().length == 0) {
        alert('url 不能为空！')
        return
      }
      var code = editor.getValue()
      if (code.trim().length == 0) {
        alert('schema 不能为空！')
        return
      }
      var id = CryptoJS.SHA1(code).toString()
      var key = CryptoJS.SHA1(url).toString()
      var old = app.data.keys[key]
      if (old) {
        old.id = id
      } else {
        app.data.keys[key] = {
          id: id,
          num: 0,
          name: url
        }
      }
      app.data.updateKeys(key, app.data.keys[key])
      app.data.saveObject(id, code)
      app.data.updateHistory(key, id)
      app.data.saveLocal(key, id)
      this.hide()
      app.searchBar.fireFilter()
      app.searchBar.hideDropDown()
    })
    genSchemaBtn.click(()=>{
      var dialog = $(`
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <textarea class="form-control" placeholder="在此输入JSON...😀😁😂😄👅" rows="20"></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" class="paste btn btn-outline-info">粘贴</button>
                <button type="button" class="ok btn btn-outline-success" data-dismiss="modal">确定</button>
              </div>
            </div>
          </div>
        </div>
      `)
      $('body').append(dialog)
      dialog.modal('show')
      dialog.on('hidden.bs.modal', function (e) {
        dialog.modal('dispose')
        dialog.remove()
      })
      dialog.find('.ok').click(()=>{
        var json = dialog.find('textarea').val().trim()
        if (json.length > 0) {
          var scheam = this.generateSchema(json)
          this.editor.setValue(js_beautify(scheam))
        }
      })
      dialog.find('.paste').click(()=>{
        if (!navigator.clipboard) {
          new Alert("danger","提示信息",`不能从剪贴板读取数据，无法访问剪贴板API。剪贴板API需要在 chrome 66+ 中才能使用，请及时更新到新版 Chrome 体验更多新增特性。`,`关于剪贴板API详情查看<a href="https://googlechrome.github.io/samples/async-clipboard/index.html">Asynchronous Clipboard API Sample</a>`).show()
          return
        }
        navigator.clipboard.readText()
        .then(text => {
          dialog.find('textarea').val(text)
        })
        .catch(() => {
          new Alert("danger","提示信息",`不能从剪贴板读取数据，可能是本网站的剪贴板读取权限被您给禁用了，如需查看权限设置请在地址栏输入 <b>chrome://settings/content/clipboard</b>，请务必设置允许本网站访问剪贴板。`,`关于剪贴板API详情查看<a href="https://googlechrome.github.io/samples/async-clipboard/index.html">Asynchronous Clipboard API Sample</a>`).show()
        });
      })
    })
    beautify.click(()=>{
      var code = editor.getValue()
      editor.setValue(js_beautify(code))
    })
  }

  show(obj){
    const {app, urlInput} = this
    app.searchBar.hideDropDown()
    if (!this.hasShow) {
      $('body').append(this.el)
      this.initEditor()
      this.initTheme()
      this.handleExtraKeys()
      this.handleSpecialChars()
      this.initClick()
      this.hasShow = true
    }
    this.el.css('display','')
    this.setupSize()
    if (obj) {
      urlInput.val(obj.name)
      if (obj.code) {
        this.editor.setValue(obj.code)
      } else {
        obj.code = js_beautify(this.generateSchema(obj.json))
        this.editor.setValue(obj.code)
      }
    } else {
      urlInput.val('')
      this.editor.setValue('')
    }
  }
  generateSchema(jsonStr){
    try {
      var obj = JSON.parse(jsonStr)
      return JSON.stringify(this.genSchema(obj))
    } catch (e) {
      console.error(e);
      return JSON.stringify({
        "required": [ ],
        "properties": { }
      })
    }
  }
  genSchema(obj){
    let type = (typeof obj)
    if (Array.isArray(obj)) {
      type = "array"
    }
    switch (type) {
      case 'object': return {
        "type": "object",
        "required": Object.keys(obj),
        "properties": (()=>{
          let p = {}
          Object.keys(obj).forEach((item)=>{
            p[item] = this.genSchema(obj[item])
          })
          return p
        })()
      }
      case 'array': return {
        "type": "array",
        "items": this.genSchema(obj[0])
      }
      case "string": return {
        "type": "string"
      }
      case "number": return {
        "type": "number"
      }
      case "undefined": return { }
      default:
        console.error(new Error('unknown type : ' + (typeof obj)));
        throw new Error('unknown type : ' + (typeof obj))
    }
  }
  hide(){
    this.el.css('display','none')
  }
  setupSize(){
    setTimeout(()=>{
      var h0 = this.el.find('.cmh0').height()
      var h1 = 0
      this.el.find('.cmh1').each((num,el)=>{
        h1+=el.clientHeight
      })
      this.editor.setSize('height', (h0 - h1 - 60)+'px');
    },100)
  }
  initEditor(){
    this.editor = CodeMirror.fromTextArea(this.el.find("#schema-editor")[0], {
      lineNumbers: true,
      matchBrackets : true,
      mode: {name: "javascript", globalVars: true},
      foldGutter: true,
      autoCloseBrackets: true,
      codeToolTip: true,
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
      highlightSelectionMatches: {showToken: /\w/, annotateScrollbar: true}
    });
    this.setupSize()
    window.addEventListener('resize',()=>{
      console.log('on resize');
      this.setupSize()
    })
  }
  buildElement(){
    var templ = `
    <div class="container-fluid" style="position: absolute; top: 0px; bottom: 0px; background: aliceblue; height: 100%; z-index: 3;">
      <div class="row h-100">
        <div class="form-group p-3 col-12">
          <div class="cmh0 card h-100">
            <div class="card-body">
              <div class="row">
                <div class="cmh1 col-12">
                  <button type="button" class="btn btn-outline-primary save">保存</button>
                  <button type="button" class="btn btn-outline-secondary cancle-btn">取消</button>
                  <button type="button" class="btn btn-outline-success close-btn">关闭</button>
                  <button type="button" class="btn btn-outline-danger genSchema">生成Schema</button>
                  <button type="button" class="btn btn-outline-warning">修改Url</button>
                  <button type="button" class="btn btn-outline-info beautify">格式化</button>
                  <button type="button" class="btn btn-outline-light">Light</button>
                  <button type="button" class="btn btn-outline-dark fullscreen">全屏</button>
                  <button type="button" class="btn btn-outline-primary change-theme">修改主题</button>
                </div>
                <div class="cmh1 col-12 mt-2">
                  <input type="text" class="form-control url" placeholder="url addr">
                </div>
                <div class="col-12 mt-2">
                  <textarea class="form-control" id="schema-editor" rows="20"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `
    this.el = $(templ)
  }
}
class AppData {
  constructor(app) {
    this.app = app
    this.initData()
  }
  initData(){
    wilddog.initializeApp({ syncURL: "https://ylw-wuziqi.wilddogio.com" });
    this.ref = wilddog.sync().ref("/restful-valid");
    this.keys = {}
    this.ref.child("keys").once('value', (data)=>{
      if (data.val()) {
        this.keys = data.val()
        this.app.searchBar.fireFilter()
        this.app.searchBar.hideDropDown()
      }
    })
  }
  saveLocal(key, id){
    localStorage[`restful-valid-${key}`] = id
  }
  deleteKey(name){
    var key = CryptoJS.SHA1(name).toString()
    delete this.keys[key]
  }
  saveObject(id, code){
    var obj = {
      time: Date.now(),
      code: pako.deflate(code, { to: 'string' })
    }
    localStorage[`restful-objects-${id}`] = JSON.stringify(obj)
    this.ref.child("objects").child(id).set(obj)
  }
  addFireCountNum(key){
    this.ref.child("keys").child(key).transaction((currentValue)=>{
      if (!currentValue) {
        return currentValue
      }
      currentValue.num++
      this.keys[key].num = currentValue.num
      return currentValue
    })
  }
  getObjectCode(id){
    return new Promise((resolve, reject)=> {
      this.ref.child("objects").child(id).once('value', (data)=>{
        var obj = data.val()
        var schema = ''
        if (obj) {
          schema = pako.inflate(obj.code, { to: 'string' });
        }
        resolve(schema)
      })
    });
  }
  updateKeys(key, obj){
    this.ref.child("keys").child(key).set(obj)
  }
  updateHistory(key, id){
    this.ref.child("history").child(key).transaction((currentValue)=>{
      if (!currentValue) {
        return pako.deflate([id].join(','), { to: 'string' })
      }
      var history = pako.inflate(currentValue, { to: 'string' }).split(',')
      history.push(id)
      return pako.deflate(history.join(','), { to: 'string' })
    })
  }
}
class DiffPanel {
  constructor(app,value, orig1, orig2, mergeResult) {
    this.app = app
    this.buildElement()
    this.el.appendTo('body')
    this.mergeResult = mergeResult
    this.value = value || ''
    this.orig1 = orig1 || ''
    this.orig2 = orig2 || ''
    this.panes = 2
    this.connect = "align"
    this.collapse = false
    this.highlight = true

    this.initEvent()

    this.initUI()
  }
  initUI(){
    const {app} = this
    this.el.find('.merge-view').html('')
    this.dv = CodeMirror.MergeView(this.el.find('.merge-view')[0], {
      value: this.value,
      origLeft: this.panes == 3 ? this.orig1 : null,
      orig: this.orig2,
      matchBrackets : true,
      lineNumbers: true,
      mode: {name: "javascript"},
      highlightDifferences: this.highlight,
      connect: this.connect,
      collapseIdentical: this.collapse
    });

    this.handleResize()

  }
  initEvent(){
    this.el.find('.merge-ok').click(()=>{
      $('body').removeClass('modal-open')
      var result = this.dv.edit.getValue()
      this.el.remove()
      document.removeEventListener('resize', this.handle)
      this.mergeResult(result)
    })
    this.el.find('.merge-two-way').click(()=>{
      this.panes = 2
      this.initUI()
    })
    this.el.find('.merge-three-way').click(()=>{
      this.panes = 3
      this.initUI()
    })
    this.el.find('.merge-optionally').click(()=>{
      this.toggleDifferences()
    })
    this.el.find('.merge-collapse').click(()=>{
      this.collapse = !this.collapse
      this.initUI()
    })
    this.el.find('.merge-align').click(()=>{
      this.connect = this.connect ? null : 'align'
      this.initUI()
    })

    this.handleResize = ()=> {
      var height = this.el.find('.merge-view').height()
      this.resize(height, this.dv)
    }
    document.addEventListener('resize', this.handleResize)
  }

  toggleDifferences() {
    this.dv.setShowDifferences(this.highlight = !this.highlight);
  }

  resize(height, mergeView) {
    if (mergeView.leftOriginal())
    mergeView.leftOriginal().setSize(null, height);
    mergeView.editor().setSize(null, height);
    if (mergeView.rightOriginal())
    mergeView.rightOriginal().setSize(null, height);
    mergeView.wrap.style.height = height + "px";
  }

  buildElement(){
    this.el = $(`
      <div class="CodeMirror-fullscreen d-flex flex-column bg-faded">
        <div class="text-right p-2 btn-pane" style="background: aliceblue;">
          <button type="button" class="btn btn-outline-primary merge-two-way">two-way</button>
          <button type="button" class="btn btn-outline-primary merge-three-way">three-way</button>
          <button type="button" class="btn btn-outline-primary merge-optionally">optionally</button>
          <button type="button" class="btn btn-outline-primary merge-collapse">collapse</button>
          <button type="button" class="btn btn-outline-primary merge-align">align</button>
          <button type="button" class="btn btn-outline-primary merge-ok">完成</button>
        </div>
        <div class="bg-success h-100 merge-view">
        </div>
      </div>
        `)
  }
}
class ValidPanel {
  constructor(app) {
    this.app = app
    this.buildElement()
    $('body').append(this.el)
    this.addSchema = this.el.find('.add-schema')
    this.updateSchema = this.el.find('.update-schema')
    this.valid = this.el.find('.valid-json')
    this.selAll = this.el.find('.select-all')
    this.jsons = this.el.find('.jsons')
    this.beautify = this.el.find('.beautify')
    this.result = this.el.find('.result')
    this.clear = this.el.find('.clear-json')
    this.paste = this.el.find('.paste-text')
    this.diff = this.el.find('.diff-btn')
    this.initClick()
  }
  initClick(){
    const {app, addSchema, updateSchema, selAll, jsons, valid, beautify, clear, paste} = this
    addSchema.click(()=>{
      var name = app.searchBar.input.val()
      var jsonStr = jsons.val()
      app.schemaPanel.show({
        name: name,
        json: jsonStr
      })
    })
    updateSchema.click(()=>{
      var obj = app.searchBar.findActive()
      if (!obj) {
        alert('没有选中的Schema')
        return
      }

      app.data.getObjectCode(obj.id).then((schema)=>{
        app.schemaPanel.show({
          name: obj.name,
          code: schema
        })
      })
    })
    selAll.click(()=>{
      jsons.select()
    })
    valid.click(()=>{
      this.validJson()
    })
    beautify.click(()=>{
      var code = jsons.val()
      jsons.val(js_beautify(code))
    })
    clear.click(()=>{
      jsons.val('')
    })
    paste.click(()=>{
      if (!navigator.clipboard) {
        new Alert("danger","提示信息",`不能从剪贴板读取数据，无法访问剪贴板API。剪贴板API需要在 chrome 66+ 中才能使用，请及时更新到新版 Chrome 体验更多新增特性。`,`关于剪贴板API详情查看<a href="https://googlechrome.github.io/samples/async-clipboard/index.html">Asynchronous Clipboard API Sample</a>`).show()
        return
      }
      navigator.clipboard.readText()
      .then(text => {
        jsons.val(text)
      })
      .catch(() => {
        new Alert("danger","提示信息",`不能从剪贴板读取数据，可能是本网站的剪贴板读取权限被您给禁用了，如需查看权限设置请在地址栏输入 <b>chrome://settings/content/clipboard</b>，请务必设置允许本网站访问剪贴板。`,`关于剪贴板API详情查看<a href="https://googlechrome.github.io/samples/async-clipboard/index.html">Asynchronous Clipboard API Sample</a>`).show()
      });
    })
  }
  showDiffButton(name, localId, netId){
    const {app} = this
    this.diff.removeClass('invisible')
    this.diff.click(()=>{
      Promise.all([app.data.getObjectCode(localId), app.data.getObjectCode(netId)]).then((data)=>{
        new DiffPanel(app,data[1],data[1],data[0],(value)=>{
          app.schemaPanel.show({
            name: name,
            code: value
          })
        })
      })
    })
  }
  hideDiffButton(){
    this.diff.addClass('invisible')
  }
  validJson(){
    const {app, addSchema, updateSchema, selAll, jsons, valid, result} = this
    var localize_zh = function (errors) {
      if (!(errors && errors.length)) return;
      for (var i = 0; i < errors.length; i++) {
        var e = errors[i];
        var out;
        switch (e.keyword) {
          case '$ref':
          out = '无法找到引用' + (e.params.ref);
          break;
          case 'additionalItems':
          out = '';
          var n = e.params.limit;
          out += '不允许超过' + (n) + '个元素';
          break;
          case 'additionalProperties':
          out = '不允许有额外的属性';
          break;
          case 'anyOf':
          out = '数据应为 anyOf 所指定的其中一个';
          break;
          case 'const':
          out = '应当等于常量';
          break;
          case 'contains':
          out = '应当包含一个有效项';
          break;
          case 'custom':
          out = '应当通过 "' + (e.keyword) + ' 关键词校验"';
          break;
          case 'dependencies':
          out = '';
          var n = e.params.depsCount;
          out += '应当拥有属性' + (e.params.property) + '的依赖属性' + (e.params.deps);
          break;
          case 'enum':
          out = '应当是预设定的枚举值之一';
          break;
          case 'exclusiveMaximum':
          out = '';
          var cond = e.params.comparison + " " + e.params.limit;
          out += '应当为 ' + (cond);
          break;
          case 'exclusiveMinimum':
          out = '';
          var cond = e.params.comparison + " " + e.params.limit;
          out += '应当为 ' + (cond);
          break;
          case 'false schema':
          out = '布尔模式出错';
          break;
          case 'format':
          out = '应当匹配格式 "' + (e.params.format) + '"';
          break;
          case 'formatExclusiveMaximum':
          out = 'formatExclusiveMaximum 应当是布尔值';
          break;
          case 'formatExclusiveMinimum':
          out = 'formatExclusiveMinimum 应当是布尔值';
          break;
          case 'formatMaximum':
          out = '';
          var cond = e.params.comparison + " " + e.params.limit;
          out += '应当是 ' + (cond);
          break;
          case 'formatMinimum':
          out = '';
          var cond = e.params.comparison + " " + e.params.limit;
          out += '应当是 ' + (cond);
          break;
          case 'if':
          out = '应当匹配模式 "' + (e.params.failingKeyword) + '" ';
          break;
          case 'maximum':
          out = '';
          var cond = e.params.comparison + " " + e.params.limit;
          out += '应当为 ' + (cond);
          break;
          case 'maxItems':
          out = '';
          var n = e.params.limit;
          out += '不应多于 ' + (n) + ' 个项';
          break;
          case 'maxLength':
          out = '';
          var n = e.params.limit;
          out += '不应多于 ' + (n) + ' 个字符';
          break;
          case 'maxProperties':
          out = '';
          var n = e.params.limit;
          out += '不应有多于 ' + (n) + ' 个属性';
          break;
          case 'minimum':
          out = '';
          var cond = e.params.comparison + " " + e.params.limit;
          out += '应当为 ' + (cond);
          break;
          case 'minItems':
          out = '';
          var n = e.params.limit;
          out += '不应少于 ' + (n) + ' 个项';
          break;
          case 'minLength':
          out = '';
          var n = e.params.limit;
          out += '不应少于 ' + (n) + ' 个字符';
          break;
          case 'minProperties':
          out = '';
          var n = e.params.limit;
          out += '不应有少于 ' + (n) + ' 个属性';
          break;
          case 'multipleOf':
          out = '应当是 ' + (e.params.multipleOf) + ' 的整数倍';
          break;
          case 'not':
          out = '不应当匹配 "not" schema';
          break;
          case 'oneOf':
          out = '只能匹配一个 "oneOf" 中的 schema';
          break;
          case 'pattern':
          out = '应当匹配模式 "' + (e.params.pattern) + '"';
          break;
          case 'patternRequired':
          out = '应当有属性匹配模式 ' + (e.params.missingPattern);
          break;
          case 'propertyNames':
          out = '属性名 \'' + (e.params.propertyName) + '\' 无效';
          break;
          case 'required':
          out = '应当有必需属性 ' + (e.params.missingProperty);
          break;
          case 'switch':
          out = '由于 ' + (e.params.caseIndex) + ' 失败，未通过 "switch" 校验, ';
          break;
          case 'type':
          out = '应当是 ' + (e.params.type) + ' 类型';
          break;
          case 'uniqueItems':
          out = '不应当含有重复项 (第 ' + (e.params.j) + ' 项与第 ' + (e.params.i) + ' 项是重复的)';
          break;
          default:
          continue;
        }
        e.message = out;
      }
    };
    var obj = app.searchBar.findActive()
    if (!obj) {
      alert('没有选中的Schema')
      return
    }
    app.data.getObjectCode(obj.id).then((schema)=>{
      var jsonStr = jsons.val()
      var ajv = new Ajv({allErrors: true, removeAdditional: true})
      try {
        var valid = ajv.validate(JSON.parse(schema), JSON.parse(jsonStr));
        if (!valid) {
          localize_zh(ajv.errors);
          var output = ajv.errorsText(ajv.errors)
          console.log(ajv.errorsText(ajv.errors));
          result.html(output.split(', ').map((item)=>{
            return `<p>${item}</p>`
          }).join(''))
        } else {
          result.html(`<p>验证通过！</p>`)
        }
      } catch (e) {
        console.error(e);
        result.html(`<pre>${e.stack}</pre>`)
      }
    })
  }
  buildElement() {
    var templ = `
    <div class="container-fluid">
      <div class="row">
        <div class="form-group p-3 col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <div class="row">
                <div class="col-12 pb-1">
                  <button type="button" class="btn btn-outline-primary valid-json">验证</button>
                  <button type="button" class="btn btn-outline-secondary beautify">格式化</button>
                  <button type="button" class="btn btn-outline-success clear-json">Clear</button>
                  <button type="button" class="btn btn-outline-danger diff-btn">DIFF</button>
                  <button type="button" class="btn btn-outline-warning select-all">全选</button>
                  <button type="button" class="btn btn-outline-info paste-text">粘贴</button>
                  <button type="button" class="btn btn-outline-light">Light</button>
                  <button type="button" class="btn btn-outline-dark update-schema">修改 Schema</button>
                  <button type="button" class="btn btn-outline-primary add-schema">添加 Schema</button>
                </div>
              </div>
              <textarea class="form-control jsons" rows="3"></textarea>
            </div>
          </div>
        </div>
        <div class="col-12 p-3">
          <div class="card">
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <div class="result" contenteditable="true">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    this.el = $(templ)
  }
}
class Alert {
  constructor(type, title, body, message) {
    this.alertDig = $(`
    <div class="alert alert-${type} w-50 m-5 fixed-top" style="z-index:1051" role="alert">
      <h4 class="alert-heading">${title}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </h4>
      <p>${body}</p>
      <hr>
      <p class="mb-0">${message}</p>
    </div>
      `)
  }
  show(){
    document.body.append(this.alertDig[0])
    this.alertDig.on('closed.bs.alert',()=>{
      this.alertDig.alert('dispose')
      this.alertDig.remove()
    })
  }
}
class SearchBar {
  constructor(app) {
    this.app = app
    this.buildElement()
    $('body').append(this.el)
    this.input = this.el.find('input')
    this.menus = this.el.find('.dropdown-menu')
    this.clear = this.el.find('.clear-url')
    this.initInput()
    this.refreshList()
    this.clear.click(()=>{
      this.input.val('')
      this.fireFilter()
      this.hideDropDown()
    })
  }
  refreshList(){
    clearTimeout(this.timer)
    this.timer = setTimeout(()=>{
      const {app,input,menus,listData} = this
      var html = ''
      listData.forEach((item)=>{
        html += `<a class="dropdown-item${item.active?' active':''}" href="#">${item.colorName}</a>\n`
      })
      menus.html(html)
      menus.find('a').click((e)=>{
        menus.find('a').removeClass('active')
        $(e.target).addClass('active')
        menus.find('a').each((num,el)=>{
          listData[num].active = $(el).hasClass('active')
        })
        this.fireActive()
      })
      var obj = listData.filter((item)=>{
       return item.active
     })[0]
     this.refreshDiffButton(obj)
    },100)
  }
  refreshDiffButton(obj){
    if (!obj) { return }
    const {app} = this
    var key = CryptoJS.SHA1(obj.name).toString()
    var id = localStorage[`restful-valid-${key}`]
    if (id && id != obj.id) {
      app.validPanel.showDiffButton(obj.name, id, obj.id)
    } else {
      app.validPanel.hideDiffButton()
    }
  }
  initInput(){
    const {app,input,menus} = this
    const {data} = app
    this.listData = Object.values(data.keys).map((item)=>{
      let o = this.cloneItem(item)
      o.active = false
      return o
    })

    input.oldValue = input.val()
    input.keydown((e)=>{
      if (e.key == "Enter") {
        this.fireActive()
        return ;
      }

      if (e.key == "ArrowUp") {
        this.fireArrowUp()
        return ;
      }

      if (e.key == "ArrowDown") {
        this.fireArrowDown()
        return ;
      }

      clearTimeout(this.timer)
      this.timer = setTimeout(()=>{
        if (input.oldValue == input.val()) {
          return
        }
        input.oldValue = input.val()
        this.fireFilter()
      },100)
    })
  }
  findActive(){
    const {app, menus, input, listData} = this
    var obj = listData.filter((item)=>{
      return item.active
    })[0]
    this.refreshDiffButton(obj)
    return obj
  }
  fireActive(){
    const {app, menus, input, listData} = this
    var obj = this.findActive()
    if(!obj){
      return ;
    }
    obj.num++
    input.val(obj.name)
    menus.removeClass('show')
    var key = CryptoJS.SHA1(obj.name).toString()
    app.data.addFireCountNum(key)
  }

  fireArrowUp(){
    const {listData} = this
    for (var i = 0; i < listData.length; i++) {
      if(listData[i].active){
        if (i!=0) {
          listData[i].active = false
          listData[i-1].active = true
        }
        this.refreshList()
        return
      }
    }
    listData[0].active = true
    this.refreshList()
  }
  fireArrowDown(){
    const {listData} = this
    for (var i = 0; i < listData.length; i++) {
      if(listData[i].active){
        if (i<listData.length-1) {
          listData[i].active = false
          listData[i+1].active = true
        }
        this.refreshList()
        return
      }
    }
    listData[0].active = true
    this.refreshList()
  }
  fireFilter(){
    const {app,input,menus} = this
    const {data} = app
    var val = input.val().trim()
    var reg = new RegExp(val.split('').filter((item)=>{
      return !'.\\/?*+^$'.includes(item)
    }).map((item)=>{
      return `(${item})`
    }).join('(.*?)'))
    let list = Object.values(data.keys).filter((item)=>{
      if (val.length == 0) {
        return true
      }
      return item.name.match(reg)
    }).map((item)=>{
      if (val.length == 0) {
        let o = this.cloneItem(item)
        o.active = false
        return o
      }
      let name = item.name
      let colorName = ''
      let i = 0
      let j = 0
      let m = false
      for (;i < val.length||j < name.length; i++) {
        let c = val[i]
        for (;j < name.length; j++) {
          let c2 = name[j]
          if(c == c2){
            if (!m) {
              colorName += `<span style="color: red;">`
              m = true
            }
            colorName += c2
            j++
            break
          } else {
            if (m) {
              colorName += `</span>`
              m = false
            }
            colorName += c2
          }
        }
      }
      let o = this.cloneItem(item)
      o.colorName = colorName
      o.active = false
      return o
    })
    if (list.length>0) {
      list.sort((l,h)=>{
        return h.num - l.num
      })
      list[0].active = true
    }
    this.listData = list
    this.refreshList()
    menus.addClass('show')
  }
  hideDropDown(){
    const {app,input,menus} = this
    menus.removeClass('show')
  }
  cloneItem(item){
    return {
      id: item.id,
      name: item.name,
      colorName: item.name,
      active: item.active,
      num: item.num
    };
  }
  buildElement() {
    var templ = `
    <div class="container-fluid">
      <div class="row">
        <div class="dropdown p-3 col-12">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" data-toggle="dropdown">
            <div class="dropdown-menu" style="max-height:400px; width: 90%; overflow-y:auto;">
            </div>
            <div class="input-group-append">
              <button class="btn btn-outline-warning clear-url" type="button">Clear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    this.el = $(templ)
  }
}
