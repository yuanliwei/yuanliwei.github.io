var list = null;
var mark = null;
var alertTmpl = $("#alert-container").html();
format.extend(String.prototype, {});

var NetCapture = {
    devArr: [],
    devNo: 0,
    hasStart: false,
    getDevices: function(){
      return getClient().findAllDevs();
    },
    start: function(){
      this.hasStart = getClient().startCapture(this.devArr[this.devNo].name);
      return this.hasStart;
    },
    stop: function(){
      this.hasStart = !getClient().stopCapture();
      return !this.hasStart;
    },
    onCapture: function(callback){
      getClient().registerCaptureCallback({onHttpPacket: callback});
    }
};

function registerCaptureCallback(){
  NetCapture.onCapture(function(header, content){
    // console.log(header);
    // console.log(content);
    HttpRequestHandle.handle(header, content, function (url, request, response) {
      list.append({url: url, request:request, response: response});
      if (list.filterStr.length > 3) {
        mark.unmark();
        mark.markRegExp(list.filter);
      }
    });
  });
  console.log('register capture callback.');
}

function getDevs() {
  var devs = NetCapture.getDevices();
  var devArr = JSON.parse(devs);
  devName = devArr[0].name;
  console.log(devs);
}

function startCapture() {
  var result = NetCapture.start();
  console.log('start capture : ' + result);
}

function stopCapture() {
  NetCapture.stop();
  console.log('stop capture.');
}

function netCapture() {
  if (NetCapture.hasStart) {
    var result = NetCapture.stop();
    console.log("stop capture : " + result);
    showAlert('stop capture : ' + result);
    if (result) {
      $("#captureBtn").removeClass("btn-danger").addClass("btn-success");
      $("#captureBtn").text("Start");
    }
  } else {
    var result = NetCapture.start();
    console.log("start capture : " + result);
    showAlert('start capture : ' + result);
    if (result) {
      registerCaptureCallback();
      $("#captureBtn").removeClass("btn-success").addClass("btn-danger");
      $("#captureBtn").text("Stop");
    }
  }
}

function clearCapture() {
  list.setDatas([]);
}

function initList() {
  var root = $("#list");
  list = new NormalList(root);
  list.setHandle({
    createViewHolder: function (view) {
      var holder = {
        wordNo: $(view.find('.wordNo')),
        request: $(view.find('.request')),
        response: $(view.find('.response')),
        url: $(view.find('.url')),
        arrow: $(view.find('.arrow')),
        fa: $(view.find('.fa')),
        captureContent: $(view.find('.capture-content')),
        item: $(view.find('.row'))
      }
      return holder;
    },
    bindData: function (position, holder, data) {
      holder.wordNo.text(data.wordNo);
      holder.request.text(data.request);
      holder.response.text(data.response);
      // holder.url.text(data.url + " - " + data.response.length);
      holder.url.text(data.url);
      holder.arrow.click(function (view) {
        holder.fa.removeClass("fa-chevron-right fa-chevron-down");
        if (holder.captureContent.hasClass("d-none")) {
          holder.captureContent.removeClass("d-none");
          holder.fa.addClass("fa-chevron-down");
        } else {
          holder.captureContent.addClass("d-none");
          holder.fa.addClass("fa-chevron-right");
        }
      });
    },
    filter: function (data, filter) {
      return data.url.match(filter);
    }
  });
  var context = document.querySelector("#list");
  mark = new Mark(context);
  alertTmpl = $("#alert-container").html();
  $("#alert-container").html('');
}

var HttpRequestHandle = {
  request: null,
  url: null,
  handle: function (header, content, callback) {
    if (header.startsWith('POST ')
    || header.startsWith('GET ')
    || header.startsWith('DELETE ')
    || header.startsWith('PUT ')
    || header.startsWith('OPTIONS ')) {
      this.request = header + content;
      this.url = this.getUrl(header);
    }
    if (header.startsWith('HTTP')) {
      try {
        var json = JSON.parse(content.trim());
        content = js_beautify(content.trim(), {});
      } catch (e) { }
      var response = header + content;
      callback(this.url, this.request, response);
    }
  },
  getUrl: function (header) {
    var headers = header.split('\n');
    var params = {};
    var firstLine = headers[0].trim();
    var path = firstLine.split(' ')[1];
    for (var i = 1; i < headers.length; i++) {
      var paramKV = headers[i].trim();
      paramKV = paramKV.split(': ');
      params[paramKV[0]] = paramKV[1];
    }
    var host = params["Host"];
    if (!!host) {
      host = params["HOST"];
    }
    var url = "http://" + host + path;
    return url;
  }
};

function initDropdownMenus() {
  var devBtn = $("#dev-name");
  var devDropdown = $("#dev-name-dropdown");
  var netDeviceName = Client.loadData("netDeviceName");
  var devs = NetCapture.getDevices();
  var devArr = JSON.parse(devs);
  NetCapture.devArr = devArr;
  var found = false;
  for (var i = 0; i < devArr.length; i++) {
    var dev = devArr[i];
    if (dev.name == netDeviceName) {
      found = true;
    }
    devDropdown.append('<a class="dropdown-item" href="#" onclick="selNetDevice('+i+')">' + dev.name + '</a>');
  }
  if (!found) {
    netDeviceName = devArr[0].name;
    Client.saveData("netDeviceName", netDeviceName);
    NetCapture.devNo = 0;
  }
  devBtn.text(netDeviceName);
  showAlert(netDeviceName);

  $("#url-filter").keyup(function (view) {
    var value = view.target.value;
    list.setFilter(value);
    if (list.filterStr.length > 3) {
      mark.unmark();
      mark.markRegExp(list.filter);
    }
  });
}

function selNetDevice(devNo) {
  var devBtn = $("#dev-name");
  devBtn.text(NetCapture.devArr[devNo].name);
  Client.saveData("netDeviceName", devNo);
  NetCapture.devNo = devNo;
}

$(document).ready(function () {
  initList();
  // for (var i = 0; i < 300; i++) {
  //   list.append({url: 'url', request:'request', response: 'response'});
  // }
  setTimeout(initDropdownMenus, 300);
});

function showAlert(msg) {
  var alert = $(alertTmpl.format(msg));
  $("#alert-container").append(alert);
  setTimeout(function () {
    alert.alert('close');
  }, 3000);
}
