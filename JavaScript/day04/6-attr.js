//每一个构造函数都有一个原型对象
//实例可以调用对应的构造函数中的原型对象的属性和方法
//Object的原型对象
console.log(Object.prototype);//{}
console.log(Object.prototype.constructor === Object);//true
var obj = {name:"zhangsan"};
console.log(obj.toString());//[object Object]
//toString()方法默认返回"[object objectname]" 
//实例中没有属性和方法，实际上是使用的原型对象中的属性和方法
console.log(obj.toString === Object.prototype.toString);//true
console.log("------------");
//通过实例找构造函数
console.log(obj.constructor);//[Function: Object]

//in 是否是自有属性或继承属性，为true
console.log("name" in obj);//true
console.log("toString" in obj);//true
console.log("aaa" in obj);//false
//重写toString()方法
obj.toString = function(){
	console.log("aaa");
};
//hasOwnProperty() 判断是否是自有属性
console.log(obj.hasOwnProperty("name"));//true
console.log(obj.hasOwnProperty("toString"));//false，如果自己重写了toString()，为true

console.log("---------");
//是否是自有属性并且可枚举的 propertyIsEnumerable
console.log(obj.propertyIsEnumerable("name"));//true
console.log(obj.propertyIsEnumerable("toString"));//true
for(var key in obj){
	console.log(key);
};

console.log(Object.prototype.isPrototypeOf(obj));//true

var date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());





























