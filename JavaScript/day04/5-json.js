//对象序列化
var obj = {
	name:"zhangsan",
	age:12
};
console.log(obj);//{ name: 'zhangsan', age: 12 }
console.log(JSON.stringify(obj));//{"name":"zhangsan","age":12}
var str = '{"name":"zhangsan","age":12}';
console.log(JSON.parse(str));//{ name: 'zhangsan', age: 12 }

console.log("toString" in obj);




