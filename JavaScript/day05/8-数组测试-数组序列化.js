var arr = [1,2,3,4];
console.log(typeof arr);//object
console.log(arr instanceof Array);//true
//Array继承自Object
console.log(arr instanceof Object);//true
//arr孩子 Array父亲  Object爷爷
console.log(Array.isArray(arr));//true

function test(){
	console.log(Array.isArray(arguments));
}
test();//false

console.log(arr);
//数组序列化
console.log(arr.toString());//1,2,3,4
console.log(arr.join());//1,2,3,4
console.log(arr.join('&'));//1&2&3&4
console.log(JSON.stringify(arr));//'[1,2,3,4]'








