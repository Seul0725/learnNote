/*function test(){
	console.log(this);
	(()=>{
		console.log(this);
	})();
}
test();//global 两次

let obj = {
	name:'zhangsan',
	test
}
obj.test();//obj 两次*/

function test(){
	console.log(this);
	return ()=>{
		console.log(this);
	}
}
let obj = {
	test:test()
}
//首先obj中执行test()打印global，而箭头函数this指向其声明时的父作用域的this指向
obj.test();//golbal 两次