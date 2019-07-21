//函数声明提升 会提升到代码的最前面
test();
function test(){
	console.log(1);
}
//函数声明提升和变量声明提升
console.log(a);//undefined
var a = 1;

//函数和变量相比，会被优先提升。这意味着函数会被提升到更靠前的位置。
console.log(one);//[Function:one]
function one(){
	console.log("one");
}
var one = 123;
console.log(one);//123
/*
	function one(){}
	console.log(one);//函数本身
	var one;//再次声明
	one = 123;
	console.log(one);//123
*/





