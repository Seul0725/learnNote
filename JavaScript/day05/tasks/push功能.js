/*function pushFun(arr,items){
	for(var i=1;i<arguments.length;i++){
		arr[arr.length] = arguments[i];
	}
	return arr;
}
var arrTest = [1,2,3,4];
console.log(pushFun(arrTest,"hello","111",5,7,9));*/
//方法二
Array.prototype.push = function(){
	for(var i=0;i<arguments.length;i++){
		this[this.length] = arguments[i];
	}
	return this;
}
var arrTest = [1,2,3,4];
console.log(arrTest.push("hello"));
//方法三
/*Array.prototype.myPush = function(item){
    this[this.length] = item;
    return this.length
}
var a = [1,2,3,4];
a.myPush(5);
console.log(a);*/