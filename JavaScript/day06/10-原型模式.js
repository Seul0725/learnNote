function Person(){}
Person.prototype.name = 'z';
Person.prototype.friends = [];
Person.prototype.sayName = function(){
	console.log(this.name);
};
var p1 = new Person();
console.log(p1.name);//z
var p2 = new Person();
console.log(p2.name);//z

p1.friends.push('tom');
console.log(p1.friends);//[ 'tom' ]
console.log(p2.friends);//[ 'tom' ]
console.log(p1.sayName===p2.sayName);//true










