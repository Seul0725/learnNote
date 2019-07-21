var stus = [{
	name:"zs",
	age:20
},{
	name:"ls",
	age:12
},{
	name:"br",
	age:13
}];
console.log(stus);
//判断数组中是否都是成年人，都是返回true，否则返回false
var result = !(stus.some(function(item,index,arr){
	return item.age<18;
}));
console.log(result);//false
//判断是否有未成年人，有返回true，没有返回false
var result = stus.some(function(item,index,arr){
	return item.age<18;
});
console.log(result);//true

//filter
//过滤出来所有成年人和未成年人
var result = stus.filter(function(item,index,arr){
	//return item.age>=18;
	return item.age<18;
});
console.log(result);

//map
//查找所有人的名字，返回运算后的数组
var result = stus.map(function(item,index,arr){
	//return item.name;
	return item.age*2;
});
console.log(result);
//链式调用
//查找所有未成年人的名字
//先过滤未成年人，再映射名字
var result = stus.filter(function(item,index,arr){
	return item.age<18;
}).map(function(item,index,arr){
	return item.name;
});
console.log(result);










