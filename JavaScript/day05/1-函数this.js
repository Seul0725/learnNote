//更改this指向，执行函数
function test(a,b){
	//var a = 1;
	//var b;

	console.log(this,a,b);
}

// test();//global对象 undefined undefined

var obj = {
	name:"zhangsan"}
//更改test内部的this指向为obj
test.call(obj,3,4);//obj 3 4
test.apply(obj,[3,4]);//obj 3 4
console.log("---------------");
test.bind(obj);//不执行test，只更改this指向,返回更改了this指向的test函数
test.bind(obj)(5,6);//执行更改了this之后的test，并且传递了参数5,6
test.bind(obj,7,8)();
test.bind()();//global







