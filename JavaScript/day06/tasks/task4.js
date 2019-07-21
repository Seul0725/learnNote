//合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
//方法一 使用concat()方法
/*function myConcat(arr1,arr2){
	return arr1.concat(arr2);
}*/
//方法二 使用slice+push+apply 
/*function myConcat(arr1,arr2){
	var newArr = arr1.slice(0);
	//var newArr = arr1.concat();
	[].push.apply(newArr,arr2);//Array.prototype.push 可以实现两个数组合并
	return newArr;
}*/
//方法三 使用slice+for循环
/*function myConcat(arr1,arr2){
	var newArr = arr1.slice(0);
	for(var i=0;i<arr2.length;i++){
		newArr.push(arr2[i]);
	}
	return newArr;
}*/
//方法四 使用slice+forEach+push
/*function myConcat(arr1,arr2){
	var newArr = arr1.slice(0);
	arr2.forEach(function(item){
		newArr.push(item);
	});
	return newArr;
}*/
//方法五 for循环+push
function myConcat(arr1,arr2){
	var newArr = [];
	for(var i=0;i<arr1.length;i++){
		newArr.push(arr1[i]);
	};
	for(var j=0;j<arr2.length;j++){
		newArr.push(arr2[j]);
	}
	return newArr;
}
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var result = myConcat(arr1,arr2);
console.log(result);
console.log(arr1);