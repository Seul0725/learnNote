//声明数组
//1.构造函数
var arr = new Array();
console.log(arr);//[]
var arr = new Array(20);//设置数组长度为20
console.log(arr);//[,,,,,] 浏览器undefined
console.log(arr[5]);//undefined
var arr = new Array("zs","ls");
console.log(arr);//[ 'zs', 'ls' ]
console.log(arr.length);//2
console.log(arr[0]);//zs
console.log(arr[100]);//undefined

//2.数组字面量
var arr = [];
console.log(arr);//[]

var arr = ["zs","ls"];
console.log(arr);//[ 'zs', 'ls' ]







