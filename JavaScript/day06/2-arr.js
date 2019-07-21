//concat slice splice
//拼接   截取   删除、替换、插入
var arr = [3,4,5,2,4];
var arr2 = [1,2,3,4,5];
//arr.push(arr2);
console.log(arr);//[3,4,5,2,4,[1,2,3,4,5]]
//如果arr2是数组，那么遍历arr2，拿到内部每一个元素，依次返给arr中
/*if(Array.isArray(arr2)){
	for(var i=0;i<arr2.length;i++){
		arr.push(arr2[i]);
	}
}
console.log(arr);
*/
//不改变原数组
var result = arr.concat(arr2);
console.log(arr,'----------');
console.log(result,'+++++++++++');

var result2 = arr.concat('hello');
console.log(result2);
/*1.创建副本
  2.如果参数是数组，展开放入；
  3.如果参数是其他类型，直接放在末尾；
  4.返回副本
*/
Array.prototype.myConcat = function(param){
	//1.创建副本
	//var temp = this;
	var temp = [];
	for(var i=0;i<this.length;i++){
		temp.push(this[i]);
	}
	//2.判断参数数据类型
	if(Array.isArray(param)){
	//3.若参数是数组，遍历参数数组，添加到副本末尾
		for(var j=0;j<param.length;j++){
			temp.push(param[j]);
		}
	}else{
	//4.若参数不是数组，直接添加到副本末尾
		temp.push(param);
	}
	//5.返回副本
	return temp;
}
console.log('----------');
var result = arr.myConcat('hello');
console.log(result);
var result2 = arr.myConcat([6,7,8,9]);
console.log(result2);
console.log(arr);







