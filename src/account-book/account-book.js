/*
container container-fluid
row
col-xs-12 col-sm-12 col-md-12
col-xs-offset-4 col-sm-offset-4 col-md-offset-4
bg-info bg-primary bg-success bg-warning bg-danger
text-left text-center text-right text-justify text-nowrap
text-muted text-muted text-primary text-success text-info text-warning text-danger
img-responsive img-rounded img-circle img-thumbnail
pull-left pull-right
center-block clearfix
show hidden
text-lowercase text-uppercase text-capitalize
dl-horizontal
*/

var templ = '';
function initEvent() {
//     var input = $('#input_json_text')[0];
//     input.onchange = onChange;
//     input.onkeyup = onChange;
//     $('#mode-option-group input, #gen-option-group input').click(function () {
//         onChange();
//     });
    templ = $('#out-table').html();

//     onChange();
    GBData = JSON.parse($('#input_json_text').val());
    showTable();

}

function onCount(){
  var rows = [];
  for(key in GBData) {
    rows.push(GBData[key]);
  }
  var T = 0
  var M1 = 0;
  var M2 = 0;
  var M3 = 0;
  var M4 = 0;
  
  rows.forEach(function(row){
    T += row.type1.sum + row.type2.sum + row.type3.sum;
    M1 += row.summ1;
    M2 += row.summ2;
    M3 += row.summ3;
    M4 += row.summ4;
  });
//   alert("T:"+T+"\nM1:"+M1+"\nM2:"+M2+"\nM3:"+M3+"\nM4:"+M4);
  var t = `
              <table class="table table-bordered table-hover text-center">
                <tr>
                  <th>T</th>
                  <th>M1</th>
                  <th>M2</th>
                  <th>M3</th>
                  <th>M4</th>
                </tr>
                <tr>
                  <td>{T}</td>
                  <td>{M1}</td>
                  <td>{M2}</td>
                  <td>{M3}</td>
                  <td>{M4}</td>
                </tr>
               </table>
  `;
  $('.alert-result').html(t.format({
    T:T,
    M1:M1,
    M2:M2,
    M3:M3,
    M4:M4
  }));
}

function onSave() {
    saveConfig();
    var inputs = $('input');
    var selects = $('select');
    var row = {
      date:inputs[0].value,
      type1:{
        name:"tc",
        count:parseFloat(inputs[1].value),
        price:parseFloat(selects[0].value)
      },
      type2:{
        name:"tcm",
         count:parseFloat(inputs[2].value),
         price:parseFloat(selects[1].value)
       },
      type3:{
        name:"ec",
         count:parseFloat(inputs[3].value),
         price:parseFloat(selects[2].value)
       },
      etype1:{
        m1:parseFloat(inputs[4].value),
        m2:parseFloat(inputs[5].value),
        m3:parseFloat(inputs[6].value),
        m4:parseFloat(inputs[7].value)
      },
      etype2:{
        m1:parseFloat(inputs[8].value),
        m2:parseFloat(inputs[9].value),
        m3:parseFloat(inputs[10].value),
        m4:parseFloat(inputs[11].value)
      },
      etype3:{
        m1:parseFloat(inputs[12].value),
        m2:parseFloat(inputs[13].value),
        m3:parseFloat(inputs[14].value),
        m4:parseFloat(inputs[15].value)
      }
    };
    row.type1.sum = row.type1.count * row.type1.price;
    row.type2.sum = row.type2.count * row.type2.price;
    row.type3.sum = row.type3.count * row.type3.price;
    row.summ1 = row.etype1.m1 * row.type1.price
                   + row.etype2.m1 * row.type2.price
                   + row.etype3.m1 * row.type3.price;
    row.summ2 = row.etype1.m2 * row.type1.price
                   + row.etype2.m2 * row.type2.price
                   + row.etype3.m2 * row.type3.price;
    row.summ3 = row.etype1.m3 * row.type1.price
                   + row.etype2.m3 * row.type2.price
                   + row.etype3.m3 * row.type3.price;
    row.summ4 = row.etype1.m4 * row.type1.price
                   + row.etype2.m4 * row.type2.price
                   + row.etype3.m4 * row.type3.price;
//     console.dir(row);
    var TCount = row.type1.count + row.type2.count + row.type3.count;
    var OCount = row.etype1.m1 + row.etype2.m1 + row.etype3.m1
               + row.etype1.m2 + row.etype2.m2 + row.etype3.m2
               + row.etype1.m3 + row.etype2.m3 + row.etype3.m3
               + row.etype1.m4 + row.etype2.m4 + row.etype3.m4;
    row.bg = (TCount == OCount)?"":"error_bg"; 
    GBData[row.date] = row;
    $('#input_json_text').val(JSON.stringify(GBData));
    saveToDog(row);
    saveConfig();
    showTable();
}

function saveToDog(row){
        // 初始化
      var config = {
        authDomain: "ylw-wuziqi.wilddog.com",
        syncURL: "https://ylw-wuziqi.wilddogio.com"
      };
      wilddog.initializeApp(config);
      var ref = wilddog.sync().ref("/account");
      // child() 用来定位到某个节点。

        ref.child(row.date).set({
            "date": JSON.stringify(row)
        });

}

function showTable(){
  var rows = [];
  for(key in GBData) {
    rows.push(GBData[key]);
  }
  html = [];
  rows.sort(function(l,h){
    console.dir(l);
    console.dir(h);
    return new Date(l.date).getTime() - new Date(h.date).getTime();
  });
  rows.forEach(function(row){
    html.push(templ.format(row));
  });
  $('#out-table').html(html.join(''));
}

function onClickRow(date){
  console.log(date);
  var row = GBData[date];
   var inputs = $('input');
    var selects = $('select');
    inputs[0].value = row.date;
    inputs[1].value = row.type1.count;
    selects[0].value = row.type1.price;
    inputs[2].value = row.type2.count;
    selects[1].value = row.type2.price;
    inputs[3].value = row.type3.count;
    selects[2].value = row.type3.price;
        
    inputs[4].value = row.etype1.m1;
    inputs[5].value = row.etype1.m2;
    inputs[6].value = row.etype1.m3;
    inputs[7].value = row.etype1.m4;

    inputs[8].value = row.etype2.m1;
    inputs[9].value = row.etype2.m2;
    inputs[10].value = row.etype2.m3;
    inputs[11].value = row.etype2.m4;

    inputs[12].value = row.etype3.m1;
    inputs[13].value = row.etype3.m2;
    inputs[14].value = row.etype3.m3;
    inputs[15].value = row.etype3.m4;

}

function initDatepicker(){
    $("#datepicker").datepicker({//添加日期选择功能  
      numberOfMonths:1,//显示几个月  
      showButtonPanel:true,//是否显示按钮面板  
      dateFormat: 'yy-mm-dd',//日期格式  
      clearText:"清除",//清除日期的按钮名称  
      closeText:"关闭",//关闭选择框的按钮名称  
      // todayText:"今天",//关闭选择框的按钮名称              
      yearSuffix: '年', //年的后缀  
      showMonthAfterYear:true,//是否把月放在年的后面  
      // defaultDate:'2011-03-10',//默认日期  
      // minDate:'2011-03-05',//最小日期  
      // maxDate:'2011-03-20',//最大日期  
      monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],  
      dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],  
      dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],  
      dayNamesMin: ['日','一','二','三','四','五','六'],  
      onSelect: function(selectedDate) {//选择日期后执行的操作  
        console.log(selectedDate); 
      }  
    });  
}

function onDelete(){
  var inputs = $('input');
  delete GBData[inputs[0].value];
  showTable();
}