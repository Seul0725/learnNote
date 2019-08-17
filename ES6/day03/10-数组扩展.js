//Array.from()
//Array.of()
let temp = {
	'0':'hello',
	'1':'world',
	length:2
}
//没有length不成功
console.log(Array.from(temp));//[ 'hello', 'world' ]
console.log(Array.of(10));//[ 10 ]
console.log(Array.of(10,11));//[ 10, 11 ]

console.log(new Array(10));//[ <10 empty items> ]
console.log(new Array(10,11));//[ 10, 11 ]

let arr = [24,45,24,6,45,2];
//数组去重
let set = new Set(arr);
console.log(set);//Set { 24, 45, 6, 2 }
console.log(Array.from(set));//[ 24, 45, 6, 2 ]
console.log([...set]);//[ 24, 45, 6, 2 ]

console.log([...new Set(arr)]);//归纳

//find findIndex 迭代方法
//find 返回元素或者undefined
let result = arr.find((item)=>{
	// return item>40;
	return item>100;
});
console.log(result);//45
//返回索引或者-1
let result2 = arr.findIndex((item)=>{
	// return item>40;
	return item>100;
});
console.log(result2);//1