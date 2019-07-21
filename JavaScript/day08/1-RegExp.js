//var str = 'helabababab2lo123woraa8ld567ae';
//var pattern = /[abe][abe]/ig;
//var pattern = /[abe]{2,}\d/ig;
//var pattern = /[^abe]/ig;
var pattern = /^[A-z].*\d$/ig;
var str = 'a29';

var pattern = /^\d{11}$/;
//console.log(str.match(pattern));//['']/null
//var pattern = /^([a-z]|[0-9]){3,12}@([a-z]|[0-9]){2,10}\.[a-z]{3,5}$/ig;
var pattern = /^([a-z]|[0-9]){2,12}@\1{1,10}\.[a-z]{3,5}$/i;
//\1对([])中的做了限制，只看()最后一次匹配的结果
var str = 'liuyr@r.com';
console.log(str.match(pattern));//r

//如果圆括号()后面有次数，在使用\n引用时，用的是第n个圆括号最后一次匹配的结果
//可以在不加g的match方法中的数组中除了第一个之外的其他元素中拿到。
var str = 'ababa';
var pattern = /([a-z]){2}.\1/;
console.log(str.match(pattern));//[ 'abab', 'b', index: 0, input: 'ababa']
var pattern = /([a-z]){2}.\1/g;
console.log(str.match(pattern));//[ 'abab' ]
