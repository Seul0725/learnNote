//日期对象 Date
//没有放参数表示当前时间的日期对象
var date = new Date(1563355259000);
console.log(date);
//获取年份 月 日 时 分 秒
//保存在数据库中的是时间戳  秒时间戳 毫秒时间戳  1000倍
//将时间戳转换为JS中的Date，获取年月日时分秒，展现给用户
//2019-07-17 17:20:59
console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDate());
console.log(date.getDay()+1);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

var year = date.getFullYear();
var month = date.getMonth()+1
month = month<10?'0'+month:month;
var day = date.getDate();
day = day<10?'0'+day:day;
var hours = date.getHours();
hours = hours<10?'0'+hours:hours;
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var str = year+'-'+month+'-'+day+' '+hours+'-'+minutes+'-'+seconds;
console.log(str);

//将JS的date转变为时间戳，传递给后台
console.log((new Date()).getTime());
//一天的秒数
console.log(24*60*60);

