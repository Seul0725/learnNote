//将字符串转成数组 split('')
let arr = [...'hello'];
console.log(arr);//[ 'h', 'e', 'l', 'l', 'o' ]
let a = 'hello';
a = a.split('');
console.log(a);//[ 'h', 'e', 'l', 'l', 'o' ]
/*扩展运算符后面如果跟的是变量，那么这个变量将来是一个数组，存放多余的数据*/
/*扩展运算符后面如果是数组，可以将数组展开，在参数那么使用*/
/*扩展运算符后面如果跟的是字符串，外部包裹[]，就是一个数组*/
let arr2 = [...[1,2,3,4]];
console.log(arr2);//[ 1, 2, 3, 4 ]

//类数组测试
let test = (...tail)=>{
	console.log(tail);
}
test(1,2,3)
