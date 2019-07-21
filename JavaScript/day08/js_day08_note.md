*2019/07/17 学习 JavaScript 第八天*

##### 包装器类型
* 三个基本包装类型对象：Number、Boolean、String
**每当读取一个基本数据类型值的时候，后台就会创建一个基本包装类型对象，
从而可以调用基本包装类型对象原型中办法来操作这些数据。**
```javascript
	var s = "briup";
	s.substring(2);
```
如上述代码片段，后台会自动完成以下操作
(1).创建String类型的一个实例--装箱
(2).在实例上调用指定方法
(3).销毁这个实例--拆箱

* Object构造函数会根据传入值的类型(number/boolean/string)返回相应的包装器类型
```javascript
	var o = new Object(123);
	console.log(o);//[Number:123]
	console.log(o instanceof Number);//true
	console.log(o instanceof Object);//true
```
* 使用new调用包装器类型的构造函数，与直接调用同名的转换类型函数或者直接给变量赋值不一样
使用new关键字创建出来的变量是对象，而后者则是普通的变量。
```javascript
	var n = new Number(123);
	console.log(n);//[Number: 123] Number的实例
	console.log(typeof n);//object
	console.log(n instanceof Number);//true
	console.log(n instanceof Object);//true
	var m = 123;
	var m = Number('123');
	console.log(m);//123
	console.log(typeof m);//number
	console.log(m instanceof Number);//false
	console.log(m instanceof Object);//false
```

**Boolean,Number不建议直接使用这两种包装器类型**

##### String的属性和方法
1).length 字符个数
2).charAt(index) 获取index位置上的字符
3).charCodeAt(index) 获取index位置上的字符的ASCII码值
4).indexOf('char',index) 从前往后查找指定字符所在位置,可以有第二个参数，代表从字
符串中哪个位置开始查找。
5).lastIndexOf('char',index) 从后往前查找字符串所在位置，也有第二个参数。
```javascript
	var str = 'abcdefg';
	for(var i=0;i<str.length;i++){
		console.log(str.charAt(i),'---',str.charCodeAt(i));
	}
	console.log(str.indexOf('a',2));
	console.log(str.lastIndexOf('a',3));
```
6)trim() 去除前置和后置的空格，返回结果
	`console.log(str.trim());`
**去除字符串中所有的空格：
	`console.log(str.split(' ').join(''))`**
7)concat() 字符串拼接，返回拼接得到的新字符串,大多使用"+"拼接
8)slice() 截取字符串 (开始位置，结束位置但不包括结束位置)
9)substring() 截取字符串 (开始位置，结束位置但不包括结束位置)
10)substr() 截取字符串 (开始位置，字符个数)
```javascript
	//四种均不改变原字符串
	var s = "helloworld";
	console.log(s.concat(132));//helloworld132
	console.log(s.slice(3,7)); //lowo
	console.log(s.substring(3,7));//lowo
	console.log(s.substr(3,7)); //loworld
	console.log(s);//helloworld
```
11)toUpperCase() 转成全大写 
12)toLowerCase() 转成全小写 
```javascript
	console.log('hello'.toUpperCase());//HELLO
	console.log('HELLO'.toLowerCase());//hello
```

##### Math对象
Math.ceil() 向上舍入
Math.floor() 向下舍入 **相当于parseInt** `parseInt(num)`
Math.round() 四舍五入
Math.min()  求一组数中的最小值
Math.max()  求一组数中的最大值
Math.random() 返回大于0小于1的一个随机数 包含0，但不包含1
**生成一个0-9的随机整数**
`Math.floor(Math.random()*10`
**获取一个m-n的随机数：**
```javascript
function randomRange(Max,Min){
	return Math.floor(Math.random()*(Max - Min + 1) + Min);
}
```

##### Date对象
* 创建Date对象 ()不带参数表示当前时间的日期对象
**可以把`2012-12-12 23:59:59`或者`2012/12/12 23:59:59`或者时间戳传入，会返回对应的GMT时间**
`var date = new Date();`

* Date方法
Date.prototype.getFullYear() 返回年份
Date.prototype.getMonth() 返回月份，返回值0(1月)-11(12月)
Date.prototype.getDate() 返回月份中的几号
Date.prototype.getDay() 返回星期几，星期天0-星期6
Date.prototype.getHours() 返回小时 0-23
Date.prototype.getMinutes() 返回分钟数 0-59
Date.prototype.getSeconds() 返回秒数 0-59
Date.prototype.getMilliseconds() 返回毫秒数
```javascript
var date = new Date(1563355259000);
console.log(date);//2019-07-17 17:20:59
var year = date.getFullYear();
var month = date.getMonth()+1
month = month<10?'0'+month:month;
var day = date.getDate();
day = day<10?'0'+day:day;
var hours = date.getHours();
hours = hours<10?'0'+hours:hours;
var minutes = date.getMinutes();
minutes = minutes<10?'0'+minutes:minutes;
var seconds = date.getSeconds();
seconds = seconds<10?'0'+seconds:seconds;
var str = year+'-'+month+'-'+day+' '+hours+'-'+minutes+'-'+seconds;
console.log(str); //2019-07-17 17-20-59
```
***
Date.prototype.getTime() 返回时间戳
**将JS的date转变为时间戳，传递给后台**
`console.log((new Date()).getTime());`


