//方法一：封装popFun
/*function popFun(arr){
	var result = new Array();
	for(var i=0;i<arr.length-1;i++){
		result[i] = arr[i];
	}
	return result;
}
var arrTest = [1,2,3,4,5];
console.log(popFun(arrTest));*/
//方法二：重写pop()方法
Array.prototype.pop = function(){
	var result = new Array();
	for(var i=0;i<this.length-1;i++){
		result[i] = this[i];
	}
	return result;
}
var arrTest = [1,2,3,4,5];
console.log(arrTest.pop());

//方法三 重写pop()方法，不使用for循环
/*Array.prototype.myPop = function(){
    var newArr=this[this.length-1]
    this.length = this.length -1
    return newArr;
}
var a = [1,2,3,4]
console.log(a.myPop())*/

