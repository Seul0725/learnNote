//移除数组 arr 中的所有值与 item 相等的元素，直接在给定的arr数组上进行操作，并将结果返回
//方法一 从前往后遍历，符合添加剔除，数组会往前移1，所以i--，对新移入的进行判断
/*function remove(arr,item){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==item){
			arr.splice(i,1);
			i--;
		}
	}
	return arr;
}*/
//方法二 从后往前遍历，索引依次递减
/*function remove(arr,item){
	for(var i=arr.length;i>0;i--){
		if(arr[i]==item){
			arr.splice(i,1);
		}
	}
	return arr;
}*/
//方法三 for..in遍历数组+while对数组的项进行判断，只有该项满足，就剔除，不论是否移动，索引不变
/*function remove(arr,item){
	for(var i in arr){
		while(arr[i]==item){
			arr.splice(i,1);
		}
	}
	return arr;
}*/

//方法四
/*[function remove(arr,item){
	while(arr.indexOf(item)!=-1){
		arr.splice(arr.indexOf(item),1);
	};
	return arr;
}]*/
//方法五
function remove(arr,item){
	arr.forEach(function(ele,index,arr){
		while(arr[index]==item){
			arr.splice(index,1);
		}
	});
	return arr;
}
var arr = [1,2,2,3,4];
var result = remove(arr,2);
console.log(result);
console.log(arr);


