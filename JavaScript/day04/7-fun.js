//1.函数声明
function test(){
	//函数体
	console.log("test");
	//return 后面的语句不会再执行
	return 1;
	console.log("after");//不会打印
};
test();//test
//var result = test();
//console.log(result);//1

console.log("----");
//2.函数表达式声明 匿名函数function(){}
var test1 = function(){
	console.log(123);
}
test1();//123

//匿名函数的使用 立即执行函数IIFE
(function(){
	console.log(111);
})();


