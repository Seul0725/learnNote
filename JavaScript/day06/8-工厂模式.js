//工厂模式批量创建对象
var obj = {
	name:'zs',
	age:12,
	gender:'male'
};
var obj2 = {
	name:'ls',
	age:18,
	gender:'female'
};
function sayName(){
	return this;
}
function createPerson(name,age,gender){
	return {
		name:name,
		age:age,
		gender:gender,
		sayName:sayName
		/*sayName:function(){
			return this;
		}*/
	};
}
var o1 = createPerson('zs',12,'male');
var o2 = createPerson('ls',18,'female');
var dog = createPerson('wc',1,'雌');

console.log(o1,o2,dog);
//通过实例找构造函数 实例实际上调用的是构造函数的原型对象的属性和方法
console.log(o1.constructor);//[Function: Object]
console.log(o2.constructor);//[Function: Object]
console.log(dog.constructor);//[Function: Object]
console.log(o1.sayName===o2.sayName);//false -> true
console.log(o1.sayName());








