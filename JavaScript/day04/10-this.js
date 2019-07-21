//this 指向当前函数作用域
function test(){
	console.log(this);//global全局对象
	//如果测试环境是浏览器，指向的是window对象
}
test();

var obj = {
	name:"zhangsan",
	age:12,
	sayName:function(){//length属性代表存放实参的个数
		console.log(this.name);//obj .name zhangsan
	}
}
obj.sayName();








