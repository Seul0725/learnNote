let arr = [1,2,3];
//数组填充
/*console.log(arr.fill(9));//[ 9, 9, 9 ]
console.log(arr);//[ 9, 9, 9 ]*/
//是否包含，返回true/false
console.log(arr.includes(2));//true
//遍历
//遍历 keys values entries
//返回的是迭代器对象
let keys = arr.keys(arr);
console.log(keys);
for(let key of keys){
	console.log(key);//0 1 2
}

let values = arr.values(arr);
console.log(values);
for(let value of values){
	console.log(value);//1 2 3
}

let entries = arr.entries(arr);
console.log(entries);
/*for(let entrie of entries){
	console.log(entrie);
}*/
for(let [index,item] of entries){
	console.log(index,item);//0 1  1 2  2 3
}
