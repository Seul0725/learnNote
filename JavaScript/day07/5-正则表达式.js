
//var str = 'hello world hello';
var str = '123HELLO world hello';
//var pattern = /helloo/ig;
var pattern = /hello/ig;
var pattern = /hello/i;
/*console.log(pattern.test(str));//false
console.log(pattern.lastIndex);
*/
//console.log(pattern.exec(str));//null
//将匹配到的所有字符串拿出来，放在一个数组中['','']
var arr = [];
/*while(result = pattern.exec(str)){
	//console.log(result);
	//arr.push(result[0]);
	arr = arr.concat(result);
}
*/
console.log(arr);
//String类型提供的正则表达式的方法match，返回所有符合条件的元素组成的数组
var result = str.match(pattern);
console.log(result);

//匹配到返回索引，没有匹配到返回-1
console.log(str.search(pattern));

var str = 'hello hello hello world';
//将所有的hello字符串替换成js字符串，不改变原字符串，返回更改后的字符串
var result = str.replace(/hello/ig,'JavaScript');
console.log(result);
console.log(str);

var str = '12&34&45';
console.log(str.split('&'));
console.log(str.split(/&/));
console.log(str.split(''));//[ '1', '2', '&', '3', '4', '&', '4', '5' ]









