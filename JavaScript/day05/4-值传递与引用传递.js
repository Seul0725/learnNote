//值传递与引用传递(址传递)
var a = 1;
var b = a;
console.log(a,b);//1 1 
b = 3;
console.log(a,b);//1 3

var obj = {
	name:"zhangsan",
	age:12
}
var obj2 = obj;
console.log(obj,obj2);//{ name: 'zhangsan', age: 12 }
obj2.gender = "male";
console.log(obj,obj2);//{ name: 'zhangsan', age: 12, gender: 'male' }






