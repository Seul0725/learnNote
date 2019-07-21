function test(a,b){
	// return "hello";
}

console.log(test.length);//2 形参的个数
test();
//打印test()运行之后的返回值，如果没有手动设置返回值，则为undefined
console.log(test());//undefined

//函数作为参数
function handle(fun){
	var msg = "hello";
	fun(msg);
}
handle(function(m){
	console.log(m);
}); //hello

//函数作为返回值
function handle2(){
	return function(){
		console.log(123);
	}
}
handle2()();//123
console.log(handle2());//[Function]
handle2();//没有打印


