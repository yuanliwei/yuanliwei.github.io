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
    templNums = $('#numstable').html();
    $('#numstable').html('');

    $('input.tcount').keyup(function(input){
      if(input.target.value == ''){
        input.target.value = '0';
      }
      if(!parseFloat(input.target.value)){
        input.target.value = '0';
      }
      input.target.value = parseFloat(input.target.value);
      countAvg();
    });
    $('input.sum-count').keyup(function(input){
      if(input.keyCode==13){
        // 回车
        addNumToTable(parseFloat(input.target.value));
      }
      if(input.target.value == ''){
        input.target.value = '0';
      }
      if(!parseFloat(input.target.value)){
        input.target.value = '0';
      }
      if(input.target.value != ''+parseFloat(input.target.value)){
        input.target.value = parseFloat(input.target.value);
      }
    });


    $('select').change(function(input){
      if(input.target.value == ''){
        input.target.value = '0';
      }
      if(!parseFloat(input.target.value)){
        input.target.value = '0';
      }
      countAvg();
    });


}

var numMap = {};
var templNums;
function addNumToTable(num){
   numMap[new Date().getTime()] = num;
   showNumsTable();
}
function deleteNum(num){
  delete numMap[num];
  showNumsTable();
}

function showNumsTable(){
   var nums = [];
   var index = 1;
   for(key in numMap){
     var value = numMap[key];
     nums.push(templNums.format(index++,value,key));
   }
   $('#numstable').html(nums.join(''));

//    numstable_result
    var count = 0;
   for(key in numMap){
     var value = numMap[key];
     count+=value;
   }
   $('#numstable_result').html("总和："+count);
   document.body.scrollTop=9999999;
}

function deleteAllNums(){
  numMap = {};
  showNumsTable();
}

function countAvg(){
  $('input').each(function(ind,input){
      if(!parseFloat(input.value)){
        input.value = '0';
      }
    });
  var inputs = $('input.tcount');
  var selects = $('select');
  var sum = parseFloat(inputs[0].value)
          + parseFloat(inputs[1].value)
          + parseFloat(inputs[2].value)
          + parseFloat(inputs[3].value)
          + parseFloat(inputs[4].value);
  var price = parseFloat(selects[0].value);
  var count = parseFloat(selects[1].value);
  var avg = sum * price / count;
  avg = avg.toFixed(2);
  $("#result").html('<h1>'+avg+'</h1>');
  saveConfig();
}
