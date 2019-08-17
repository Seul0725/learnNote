let name = 'tom';
let age = 18;
let gender = 'male';
// let obj = {name,age,gender};
let obj = {
	name,
	age,
	gender,
	sayName(){
		console.log('hello');
	}
};
console.log(obj);
let obj2 = {
	name,age,gender,
	sayHi(){
		console.log('hi');
	}
}
obj2.sayHi();
//属性名可以用表达式
let obj3 = {
};
for(let i=1;i<11;i++){
	obj3['name'+i] = i;
}
console.log(obj3);
//
let obj4 ={
	['name'+name]:'hello'
}
console.log(obj4);
//用上面name变量的值作为属性名
let obj5 = {
	[name]:'hello'
}
console.log(obj5);
//函数/方法的名字
console.log(obj2.sayHi.name);
function test(){}
console.log(test.name);
console.log(typeof test.name);//string