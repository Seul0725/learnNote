//每个实例自有的放到构造函数中，实例共享的放在原型对象中
function Person(name,age,gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.friends = [];
}
Person.prototype = {
	//constructor:Person,
	sayName:function(){
		console.log(this.name);
	}
};

var p1 = new Person('zs',12,'男');
console.log(p1);
console.log(p1.constructor);//Object
p1.friends.push('tom');
console.log(p1.friends);
var p2 = new Person('mk',15,'女');
console.log(p2);
console.log(p2.constructor);
console.log(p2.friends);

console.log(Person('zs'));







