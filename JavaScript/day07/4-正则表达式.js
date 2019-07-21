//进行字符串的匹配
var str = 'HELLOworld helloworld hello';
//找hello字符串，如果有，返回true，如果没有，返回false
var pattern = /hello/ig;
//进行模式匹配
console.log(pattern.lastIndex);//0
var result = pattern.test(str);
console.log(result);
console.log(pattern.lastIndex);//5
//exec 如果找到返回包含该字符串的数组,如果没有找到返回null
var result = pattern.exec(str);
console.log(result);//['hello']
console.log(result.length);//1
console.log(result.index);//11 查找到的字符串开始的位置
console.log(result.input);//str字符串 












