//slice 截取数组中的一部分，不改变原数组，参数为一个时从开始位置截取到末尾。参数为两个，从开始位置开始，到结束位置，不包括结束位置上的。
//返回值：截取出来的元素组成的数组
var arr = [123,34,5,67,3,6,8];
var result = arr.slice(2);
console.log(result);
console.log(arr);
var result2 = arr.slice(2,4);//[5,67]
console.log(result2);

//splice 可以进行删除、插入、替换
/*两个参数：splice(开始位置,删除的项数)
	三个参数：splice(开始位置,删除的项数,添加的元素一个或多个)
*/
//返回值：删除的数组成的数组
//改变原数组
var arr = [32,4,9,3,0];
var result = arr.splice(1,3);
console.log(result);
console.log(arr);[32,0]
//插入
arr.splice(1,0,'hello','sss');
console.log(arr);//[ 32, 'hello', 'sss', 0 ]
//替换 从索引为1的位置，删除2项，然后插入1,2
arr.splice(1,2,1,2);
console.log(arr);//[ 32, 1, 2, 0 ]



