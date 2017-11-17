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
    $('input.t-count-quick').keyup(function(input){
//       if(!parseFloat(input.target.value)){
//         input.target.value = '0';
//       }
//       input.target.value = parseFloat(input.target.value);
//       countAvg();
         if(input.keyCode>47&&input.keyCode<58||input.keyCode==8||input.keyCode==46){
           // 输入数字 计算
           var nums = input.target.value.split('+');
           var inputs = $('input.tcount');
           for(var i=0;i<inputs.length;i++){
             inputs[i].value = 0;
             if(parseInt(nums[i])){
               inputs[i].value = parseInt(nums[i]);
             }
           }
           countAvg();
           return;
         }
         var value = input.target.value;
         input.target.value = value.substr(0,value.length-1);
         if(input.keyCode==32){
           input.target.value += '+';
         }
         if(input.keyCode==13){
           input.target.value = value + '+';
         }
         console.log(input.keyCode);
    });

    $('input.sum-count').keyup(function(input){
      if(input.keyCode==13){
        // 回车
        addNumToTable(parseFloat(input.target.value));
        $('input.sum-count').select();
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

function deleteAllAvgNums(){
  var inputs = $('input.tcount');
  var selects = $('select');
  inputs[0].value = '0';
  inputs[1].value = '0';
  inputs[2].value = '0';
  inputs[3].value = '0';
  inputs[4].value = '0';
  $('input.t-count-quick').val('');
  countAvg();
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
  $('input.sum-count,input.tcount').each(function(ind,input){
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
