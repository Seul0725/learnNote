let {a,b} = {a:1,b:2};
// let {a,b} = {1,2};//Unexpected token ,
console.log(a,b);//1 2

{
	let {name,age} = {
		name:'tom',
		gender:'男',
		age:18
	}
	console.log(name,age);
	/*let {name:name,age:age} = {
		name:'tom',
		gender:'男',
		age:18
	}
	console.log(name,age);*/
	//属性重命名
	/*let {name:myName,age:myAge} = {
		name:'tom',
		gender:'男',
		age:18
	}
	console.log(myName,myAge);*/
	let {name:myName,age:myAge,address:myAddress="江苏"} = {
		name:'tom',
		gender:'男',
		age:18
	}
	console.log(myName,myAge,myAddress);
}