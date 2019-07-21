//判断一个年龄是否成年
var age = 22;
if(age >= 18){
	console.log('成年');
}else{
	console.log('未成年');
}

var result;
if(age>=18)
	result = '成年';
else
	result = '未成年';
console.log(result);

//使用三目运算符表示if-else
console.log((age>=18)?'成年':'未成年');
