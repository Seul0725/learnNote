let obj = {
	name:'tom',
	age:18,
	gender:'male'
}
//for-in
//返回属性名组成的数组
console.log(Object.keys(obj));
//返回属性值组成的数组
console.log(Object.values(obj));
//返回键值对组成的数组，二维数组
let entries = Object.entries(obj)
console.log(entries);
console.log('-------------');
//for-of遍历
//let en of entries
//let [key,value] = en;
//let [key,value] of entries
// for(let [key,value] of entries){
for(let [key,value] of Object.entries(obj)){
	console.log(key,value);
}
console.log('-----------');
//遍历数组
let arr = ['hello','time','reduce'];
for(let item of arr){
	console.log(item);
}
function test(){
	for(let item of arguments){
		console.log(item);
	}
}
test(1,2,3);
//for-of 不能直接遍历对象，遍历对象可直接用for-in，或者for-of遍历entries
//遍历对象
/*for(let ke of obj){
	console.log(ke);
}*/