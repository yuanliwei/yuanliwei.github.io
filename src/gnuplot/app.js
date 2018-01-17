class App {
  constructor() {
    var gnuplot = this.gnuplot = new Gnuplot('gnuplot.js');
    gnuplot.onOutput = function(text) {
      console.log('output:'+text);
    };
    gnuplot.onError = function(text) {
      console.log('onError:'+text);
    }
    Split(['#left', '#right'], {
      sizes: [40, 60],
      minSize: 30,
      gutterSize: 25
    });
    this.initEditor()
    this.plot()
  }

  plot(){
    const { gnuplot, editor } = this
    var val = editor.getValue();
    if (editor.lastTAContent == val) return;
    if (gnuplot.isRunning) {
      setTimeout(this.plot, 500);
    } else {
      editor.lastTAContent = val;
      this.runScript();
    }
  }

  initEditor(){
    this.editor = CodeMirror.fromTextArea(document.getElementById("gnuplot"), {
      lineNumbers: true,
      matchBrackets : true,
      mode: {name: "javascript", globalVars: true},
      foldGutter: true,
      autoCloseBrackets: true,
      codeToolTip: true,
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
      highlightSelectionMatches: {showToken: /\w/, annotateScrollbar: true}
    });
    this.editor.on("change", (Editor, changes)=> {
      this.plot()
    });
  }

  // files = {};
  // if (localStorage["gnuplot.files"])
  // files = JSON.parse(localStorage["gnuplot.files"]);
  // for (var key in files)
  // gnuplot.onOutput("Found locally stored file: " + key + " with " + files[key].length + " bytes.");
  runScript () {
    const { gnuplot, editor } = this
    // var start = Date.now();
    // "upload" files to worker thread
    // for (var f in files)
    // gnuplot.putFile(f, files[f]);

    gnuplot.run(editor.lastTAContent, (e)=> {
      var start = 0;
      gnuplot.onOutput('Execution took ' + (Date.now() - start) / 1000 + 's.');
      gnuplot.getFile('out.svg', (e)=> {
        if (!e.content) {
          gnuplot.onError("Output file out.svg not found!");
          return;
        }
        var img = document.getElementById('gnuimg');
        var ab = new Uint8Array(e.content);
        var blob = new Blob([ab], {"type": "image\/svg+xml"});
        window.URL = window.URL || window.webkitURL;
        img.src = window.URL.createObjectURL(blob);
      })
    })
  }
}
