//移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
//方法一：
/*function remove(arr,item){
	return arr.filter(function(ele){
		return ele!=item;
	});
}
var arr = [1,2,3,4,2];
var result = remove(arr,2);
console.log(result);
console.log(arr);*/
//方法二：
function remove(arr,item){
	var temp = arr.slice(0);
	//var temp = arr.concat();
	for(var i=0;i<arr.length;i++){
		if(temp[i]==item){
			temp.splice(i,1);
			i--;
		}
	}
	return temp;
}
var arr = [1,2,3,4,2];
var result = remove(arr,2);
console.log(result);
console.log(arr);
//方法三：
/*function remove(arr,item){
	var temp = [];
	for(var i=0;i<arr.length;i++){
		if(arr[i]!=item){
			temp.push(arr[i]);
		}
	}
	return temp
}
var arr = [1,2,3,4,2];
var result = remove(arr,2);
console.log(result);
console.log(arr);*/
//方法四
/*function remove(arr,item){
	var temp = [];
	arr.forEach(function(ele){
		if(ele!=item){
			temp.push(ele);
		}
	});
	return temp;
}
var arr = [1,2,3,4,2];
var result = remove(arr,2);
console.log(result);
console.log(arr);*/