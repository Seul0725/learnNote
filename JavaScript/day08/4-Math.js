var num = 12.3;
//向上取整
console.log(Math.ceil(num));//13
//向下取整  parseInt
console.log(Math.floor(num));//12
console.log(parseInt(num));//12
//四舍五入取整
console.log(Math.round(num));//12
//随机数
console.log(Math.random());//[0-1)

//前世今生
var arr = ['tom','李白','貂蝉','西施','杨玉环','妲己','亚索'];
//随机数-->数组的下标
var index = Math.floor(Math.random()*arr.length);
console.log(arr[index]);

console.log(Math.min(23,45,2,3,4,5,6));//2
console.log(Math.max(23,45,23,52,6));//52
//ES6解构       babel
//console.log(Math.max(...[45,23,2]));//NaN










