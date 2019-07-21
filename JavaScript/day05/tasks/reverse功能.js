//方法一 直接封装
/*function reverseFun(arr){
	for(var i=0;i<arr.length-1;i++){
		var temp;
		for(var j=0;j<arr.length-1-i;j++){
			temp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = temp;
		}
	}
	return arr;
}
var arrTest = ["hello","aa",2,3,4];
console.log(reverseFun(arrTest));*/

//方法二：使用闭包
/*function reverseFun(ar){
	return function(arr){
		for(var i=0;i<arr.length-1;i++){
		var temp;
			for(var j=0;j<arr.length-1-i;j++){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
		return arr;
	}(ar);
}
var arrTest = [1,2,3,4];
console.log(reverseFun(arrTest));*/

//方法三：重写reverse()方法
Array.prototype.reverse = function(){
	for(var i=0;i<this.length-1;i++){
		var temp;
		for(var j=0;j<this.length-1-i;j++){
			temp = this[j];
			this[j] = this[j+1];
			this[j+1] = temp;
		}
	}
	return this;
}
var arr = [1,2,3];
console.log(arr.reverse());
