*2019/07/16 学习 JavaScript 第七天*

#### 对象的属性的特性
* 获取属性的描述信息
`console.log(Object.getOwnPropertyDescriptor(对象名,'属性名'));`
* 修改属性的描述信息/修改属性的默认特性
```javascript
Object.defineProperty(obj,'name',{
	//设置可枚举性
	enumerable:false,
	//设置是否可修改值
	writable:false,
	//设置属性的值
	value:'terry',
	//设置是否可配置---是否可使用delete删除，是否可重新定义
	configurable:false
});
```
实例：
```javascript
var obj = {
	name:'zs',
	age:12
};
console.log(obj);//{name:'zs',age:12} 键值对key-value
//获取属性的描述信息
console.log(Object.getOwnPropertyDescriptor(obj,'name'));
//修改属性的描述信息/修改属性的默认特性
Object.defineProperty(obj,'name',{
	//设置可枚举性
	//enumerable:false,
	//设置是否可修改值
	//writable:false,
	//设置属性的值
	value:'terry',
	//设置是否可配置---是否可使用delete删除，是否可重新定义
	configurable:false
});
/*Object.defineProperty(obj,'name',{
	enumerable:false
});
*/
//obj.name = 'tom';
//delete obj.name;
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj,'name'));
```
* 访问器属性---没有值，通过get和set方法获取值
```javascript
var obj = {
	name:'zs',
	age:12,
	_weight:100
};
Object.defineProperty(obj,'weight',{
	get:function(){
		//获取值
		return this._weight-5;
	},
	set:function(param){
		//设置值
		this._weight = param;
	},
	enumerable:true
});
Object.defineProperty(obj,'_weight',{
	enumerable:false
});
console.log(obj.weight);//95
obj.weight = 130;
console.log(obj.weight);//125
console.log(obj._weight);//130
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj,'weight'));
console.log(Object.getOwnPropertyDescriptor(obj,'_weight'));
```
* 定义多个属性
```javascript
var obj = {
	name:'zs',
	age:12,
	_weight:100
};
Object.defineProperty(obj,'weight',{
	get:function(){
		//获取值
		return this._weight-5;
	},
	set:function(param){
		//设置值
		this._weight = param;
	},
	configurable:true
});
//定义多个属性
Object.defineProperties(obj,{
	weight:{
		enumerable:true
	},
	_weight:{
		enumerable:false
	}
});
console.log(obj.weight);//95
obj.weight = 130;
console.log(obj.weight);//125
console.log(obj._weight);//130
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj,'weight'));
console.log(Object.getOwnPropertyDescriptor(obj,'_weight'));
```

### 正则表达式---是一个描述字符模式的对象.
* 正则表达式对象的创建
	1.构造函数
	`var pattern = new RegExp("正则表达式","修饰符");`
	2.字面量
	`var pattern = /正则表达式/修饰符;`

* 修饰符
	g -- global 全局
	i -- ignore case 不区分大小写
	m -- mutiline 多行

* 正则表达式对象的原型属性
	1).RegExp.prototype.global 判断是否全局查找
	console.log(pattern.global);//布尔值
	2).RegExp.prototype.ignoreCase 判断是否忽略大小写
	console.log(pattern.ignoreCase);//布尔值
	3).RegExp.prototype.multiline 判断是否多行查找
	console.log(pattern.multiline);//布尔值
	4).RegExp.prototype.source 正则表达式文本
	console.log(pattern.source);
	5).RegExp.prototype.lastIndex 
	下一次检索的位置 有g修饰，会维护lastIndex,没有g修饰，lastIndex永远都是0
	console.log(pattern.lastIndex);//0

* 正则表达式对象的原型方法
	1.RegExp.prototype.exec() 进行字符串的匹配
	检索字符串中的正则表达式的匹配
	如果找到返回包含该字符串的数组,如果没有找到返回null
```javascript
		var str = 'HELLOworld helloworld hello';
		var pattern = /hello/ig;
		var result = pattern.exec(str);
		console.log(result);//['hello']
		console.log(result.length);//1
		console.log(result.index);//11 查找到的字符串开始的位置
		console.log(result.input);//str字符串 
```
	将匹配到的所有字符串拿出来，放在一个数组中['','']
```javascript
	var arr = [];
		while(var result = pattern.exec(str)){
			//console.log(result);
			//arr.push(result[0]);
			arr = arr.concat(result);
		}
```
	2.RegExp.prototype.test() 进行模式匹配
	检测一个字符串是否匹配某个模式
	找指定字符串，如果有，返回true，如果没有，返回false
```javascript
		var result = pattern.test(str);
		console.log(result);
```
* Javascript中 String对正则表达式的支持
	1).search() -匹配到返回索引，没有匹配到返回-1
	`console.log(str.search(pattern));`
	2).match() -返回由匹配结果组成的数组或者null
	当正则表达式中没有g修饰符的时候，就不是全局匹配。这时，数组的第一个元素就为匹配的字符串，剩余的元素则是由正则表达式中用圆括号括起来的子表达式。
	**数组的第0个元素存储的是匹配字符串，第1个元素存放的是第一个引用型分组(子表达式)匹配的字符串，第2个元素存放的是第二个引用型分组(子表达式)匹配的字符串，依次类推。**
	**在非全局匹配模式下，此函数的作用和exec()函数是一样的，只能够在字符串中匹配一次**
	`var result = str.match(pattern);`
	3).replace()
	将所有的hello字符串替换成js字符串，不改变原字符串，返回更改后的字符串
	`var result = str.replace(/hello/ig,'JavaScript');`
	4).split() -将字符串转成数组
```javascript
//如果是正则表达式内部的符号，如*、+等，需要使用\进行转义。
var str = '12&34&45';
console.log(str.split('&'));
console.log(str.split(/&/));
console.log(str.split(''));
```

##### 正则表达式数量词--直接量
`a*` 匹配a 0或多次
`a+` 匹配a 1或多次
`a?` 匹配a 0或1次
* 贪婪模式与非贪婪模式 -默认为贪婪模式
`a{3,8}` 贪婪模式 匹配a 8次
`a{3,8}?` 非贪婪模式 匹配a 3次
`a*?` 非贪婪模式(懒惰) 匹配a 0次
`a+?` 非贪婪模式(懒惰) 匹配a 1次
`a|b` 匹配a或b
`a{n}` a连续出现n次匹配
`a{n,}` a至少出现n次时匹配
`a{n,m}` a至少出现n次，至多出现m次时匹配

##### 边界
`\b` 匹配一个零宽单词边界，如一个字母和一个空格之间
`\B` 匹配一个非零宽单词边界，如两个字母或两个空格之间
`^a` 匹配以a开头
`a$` 匹配以a结尾
`^a$` 匹配a
`^a|a$` 匹配以a开头或者以a结尾
* 手机号定义：
以1开头，第二个数3-9，三位以上任意数字9个
`^1[3-9][0-9]{9}$`

##### 字符集合
`[abc]` 匹配集合中的任意字符
`[0-9]` 匹配任意阿拉伯数字，相当于`\d`
`[a-z]` 匹配任意小写字母
`[A-Z]` 匹配任意大写字母
`[A-z]` 匹配任意字母
`[^abc]` 反义字符组，匹配任意不在括号内的字符
`[^0-9]` 匹配任意不是阿拉伯数字的字符，相当于`\D`

##### 正则表达式字符类
**行结束符：和系统有关，用于标记一行文本数据的结尾，linux为"$",windows为"^M"**
`.` 匹配任意单个字符，行结束符除外
`\d` 匹配任意阿拉伯数字，相当于`[0-9]`
`\D` 匹配任意一个不是阿拉伯数字的字符，相当于`[^0-9]`
`\w` 匹配任意字母数字还有下划线，相当于`[A-z0-9_]`
`\W` 匹配任意不是字母数字、下划线的字符，相当于`[^A-z0-9]`
`\s` 匹配一个空白符，包括空格、制表符、回车符、换行符、换页符等
`\S` 匹配一个非空白符
`\t` 匹配一个水平制表符； `\r` 回车符 ；`\n` 换行符；`\v` 垂直制表符；`\f` 换页符

##### 分组
`(a)` 匹配a并且捕获匹配项。 称为捕获括号
`\n` n 是一个正整数。一个反向引用，指向正则表达式中第 n 个括号（从左开始数）中匹配的子字符串。

* 如果圆括号()后面有次数，在使用\n引用时，用的是第n个圆括号最后一次匹配的结果
  可以在不加g的match方法或者pattern的exec方法中的数组中除了第一个之外的其他元素中拿到。
```javascript
	var str = 'ababa';
	var pattern = /([a-z]){2}.\1/;
	console.log(str.match(pattern));//[ 'abab', 'b', index: 0, input: 'ababa']
	var pattern = /([a-z]){2}.\1/g;
	console.log(str.match(pattern));//[ 'abab' ]
```

