/*计算给定数组 arr 中所有元素的总和(数组中的元素均为 Number 类型)
    eg.输入[ 1, 2, 3, 4 ]
    输出 10

    利用forEach
*/
//方法一
/*function total(arr){
	var result = 0;
	arr.forEach(function(item){
		result += item;
	});
	return result;
}
var sum = total([1,2,3,4]);
console.log(sum);*/
//方法二
Array.prototype.sumFun = function(){
	var result = 0;
	this.forEach(function(item){
		result += item;
	});
	return result;
}
console.log([1,2,3,4].sumFun());