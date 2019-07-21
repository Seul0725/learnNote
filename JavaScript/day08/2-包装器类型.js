//Boolean Number String
//Boolean
//Number
//String
var n = new Number(123);
console.log(n);//[Number: 123] Number的实例
console.log(typeof n);//object
console.log(n instanceof Number);//true
console.log(n instanceof Object);//true
var m = 123;
var m = Number('123');
console.log(m);//123
console.log(typeof m);//number
console.log(m instanceof Number);//false
console.log(m instanceof Object);//false

//Object可以将基本数据类型number/boolean/string装换为对应的包装器类型
var o = new Object(123);
console.log(o);//[Number:123]
console.log(o instanceof Number);//true
console.log(o instanceof Object);//true







