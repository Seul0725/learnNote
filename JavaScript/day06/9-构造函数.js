//构造函数模式
//自定义构造函数
function sayName(){
	console.log(this.name);
}
function Person(name,age,gender){
	//new Person()
	//this new关键字创建的新实例
	this.name = name ;
	this.age = age;
	this.gender = gender;
	this.sayName = sayName;
	//return 新对象
}
var p1 = new Person('zs',18,'male');
console.log(p1.constructor);
console.log(p1);

function Dog(name,age,color){
	this.name = name;
	this.age = age;
	this.color = color;
}
var dog = new Dog('ww',1,'grey');
console.log(dog);
console.log(dog.constructor);






