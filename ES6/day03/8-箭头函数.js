//普通函数
function test(){
	console.log(this);
}
// test();//global/window
//模块的导出对象
/*console.log(this);//module.exports --> {}
console.log(this==module.exports);// true*/
//箭头函数
let test2 = ()=>{
	//箭头函数内部没有自己的this，this指向箭头函数声明时的父作用域中的this
	console.log(this);
}
test2();//{}

let obj = {
	test,
	test2
}
obj.test();//-->obj
obj.test2();//-->{}

//箭头函数内部的arguments不保存实参
/*let test3 = ()=>{
	console.log(arguments);
}
test3(1,2,3);*/
