//闭包
{
	let arr = [];
	for(let i=0;i<10;i++){
		arr[i] = function(){
			console.log(i);
		}
	}
	// arr[5]();
} 
// console.log(arr);

let test = 'test';
// console.log(test);
console.time();
//内部可以访问外部的变量
{
	let a =1;
	console.log(a);
	{	
		let b =2;
		console.log(a,b);
		{
			console.log(a,b);
		}
	}
}
console.timeEnd();
console.log('-----------');
//外部不能访问内部的变量
{
	{
	let m = 10;
	console.log(m);
}
// console.log(m);
}
console.log('---------');

let a = 1;
console.log(a);