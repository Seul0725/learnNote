*2019/07/08 学习JavaScript的第一天*

**特点**
	1.客户端(浏览器)执行，服务器端(搭建node环境)执行
	2.解释性语言
	3.弱类型语言
	4.自上而下去执行

**JS的组成：ECMAScript,DOM,BOM**
	ECMAScript--核心语法规则
	DOM--对文档节点的操作
	BOM--对浏览器的操作

**数据类型：分为基本数据类型和引用数据类型**
* 基本数据类型	typeof
	undefined	undefined
	null		+object
	boolean		boolean
	number		number
	string		string
* 引用数据类型
	+object		+object
	array		+object
	function	function  

**变量声明提升**
* 如果一个变量的声明在输出它之后再声明的，那么这个变量的声明会提前，且不会报错
		console.log('变量c声明在后：',c);//undefined
		var c =1;

**JavaScript变量命名规则(唯一标识符)**
*所有 JavaScript 变量必须以唯一的名称来标识。这些唯一的名称称为标识符。*
* 可包含字母、数字、下划线和美元符号($)
* 不能以数字开头，最好不要以下划线开头
*通常变量前加下划线表示私有变量*
* 有特殊含义的，采用小驼峰命名法
* 不能使用关键字和保留字

**NaN--Not a Number**
* NaN不是一个数值，但是其类型是number
* 判断一个值是否是NaN，使用isNaN()函数来判断
	若返回true，表示该值是非数字值NaN，
	若返回false，表示不为NaN

**Infinity--正无限大**
* 类型是number
```javascript
console.log(10/0);//Infinity
console.log(Number.MIN_VALUE);//5e-324
console.log(Number.MAX_VALUE);//1.7976931348623157e+308
```

**undefined与null的区别**
1. undefined表示未定义的，类型是undefined
	null表示空，一般用来存放一个空对象的指针，类型是object
2. undefined是null的派生，undefined == null 返回true
	undefined === true 返回false，两者只是值相等，但是类型不相等

