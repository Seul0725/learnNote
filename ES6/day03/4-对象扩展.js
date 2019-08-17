//Object.assign() 对象的浅复制，对象的合并
let obj = {
	name:'tom',
	friends:[],
	count:{}
}
//浅复制
// let obj2 = obj;
let obj2 = Object.assign(obj);
console.log(obj2===obj);//true
//对象的合并
let obj3 = {
	age:18,
	name:'lili'
}
//深复制
let obj4 = Object.assign({},obj);
console.log(obj4===obj);//false
console.log(obj4);
console.log('--------');
console.log(obj4.friends===obj.friends);//true
console.log(obj4.count===obj.count);//true
//对象的合并
let obj5 = {};
Object.assign(obj5,obj,obj3);
console.log(obj5);
