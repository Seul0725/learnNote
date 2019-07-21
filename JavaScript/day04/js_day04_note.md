*2019/07/11 学习JavaScript的第四天*

### 对象----一组数据（属性）和功能（方法）的集合。

* 创建对象
	1.使用构造函数创建对象 new Object()
	```var obj = new Object();```
	2.使用对象字面量声明对象
	```var obj = {};```

* 访问对象属性
	1.使用.访问对象中的属性或方法
		obj.name/obj.sayName()
		**若对象中没有要访问的属性，结果不会报错，会返回undefined**
			没有的属性obj.name -> undefined
			调用没有的方法obj.sayName() -> 报错
		**点表示法适用于直接访问对象的属性和方法，[]适用于函数传参时通过变量来访问对象属性值**
```javascript
		var myObj = {
		gift: "pony",
		pet: "kitten"
		};
		function checkObj(checkProp) {
		if(myObj.hasOwnProperty(checkProp)){
  		  return myObj[checkProp];//注意这里
		}
		return "Not Found";
		}
		console.log(checkObj("pet"));//此时传入的属性名使用引号引起来的，必须使用[]来访问对象的属性值
```
	2.使用[]访问对象中的属性
		属性名用引号包裹，`["name"]`
		**[]中没有用引号包裹的，会被当成变量处理**

* 遍历对象的属性 for-in
```javascript
for(var key in obj){
		//key-->属性名--变量
		console.log(key,'-----',obj[key]);
	}
```

* 删除对象中的属性 delete obj.name;
	例，删除对象中的属性值为空的属性：
```javascript
	var obj ={
		name:"bob",
		gender:'',
		address:null
	};
	for(var key in obj){
		if(!obj[key]){
			delete obj[key];
		}
	}
```

* 检测属性
	1.in 检测是否是自有属性或继承属性
```javascript
console.log("name" in obj);//true
		console.log("toString" in obj);//true
```
	2.hasOwnProperty() 判断是否是自有属性
		自有属性返回`true`，继承属性返回`false`，如果重写了toString()方法，则返回`true`
```javascript
		console.log(obj.hasOwnProperty("name"));//true
		console.log(obj.hasOwnProperty("toString"));//false
```
	3.propertyIsEnumerable() 判断是否是自有属性，且是可枚举的
```javascript
console.log(obj.propertyIsEnumerable("name"));//true
```
	4.判断是否是继承属性
```javascript
function inherit(attr){
		if((attr in obj)&&!obj.hasOwnProperty(attr)){
		console.log("是继承属性");
		}else{
		console.log("不是继承属性");
			}
	}
```

**每一个构造函数都有一个原型对象**
**实例可以调用对应的构造函数中的原型对象的属性和方法**
* Object的原型对象 
	```console.log(Object.prototype);//{}```
* 实例中没有属性和方法，实际上是使用的原型对象中的属性和方法
	```console.log(obj.toString === Object.prototype.toString);//true```
* Object的原型中的属性与方法 
	1.constructor 获取当前对象的构造函数
	```console.log(Object.prototype.constructor === Object);//true```
	```console.log(obj.constructor);//Object```
	通过实例找构造函数
	```console.log(obj.constructor);//[Function: Object]```
	2.toString() 返回对象的字符串表示
		```console.log(obj.toString());//'[object Object]'```
		对象调用toString()方法默认返回 `'[object Object]'`
	3.valueOf() 返回对象的原始值
	4.hasOwnProperty() 判断是否是自有属性
	5.propertyIsEnumerable() 判断是否是自有属性，且可枚举的
	6.isPrototypeOf() 
		a.isPrototypeOf(b) 判断a是否是对象b的原型
		```Object.prototype.isPrototypeOf(obj)//true```
	7.toLocaleString() 将时间转换为本地日期和时间的格式
		```2019-7-11 3:25:09 PM```

* 对象序列化--将对象的状态转换为字符串，用""引起来
	JSON -- JavaScript Object Notation JavaScript对象表示法
	1.JSON.stringify(obj) 将对象序列化为JSON字符串
	*只能序列化对象可枚举的自有属性*
	2.JSON.parse(jsonStr) 反序列化，将字符串还原为对象函数
	**RegExp，Error对象，undefined，函数均不能序列化和反序列化**

### 函数---用于封装一系列代码来完成特定的任务
**函数由关键字function声明**
* 方法（method）
	一般为定义在对象中的函数。
	如：```var obj = {
		sayName:function(){}
	};``` 这里的sayName()就是obj对象的一个方法。

* 函数的表示方式
	1.函数声明
		```function 函数名(形参列表){
			//函数体
		}```
	2.函数表达式
	**将一个匿名函数赋值给一个函数变量，这种方式成为函数表达式**
		匿名函数 **匿名函数的执行环境具有全局性**
		**匿名函数最大的用途是创建闭包，并且还可以构建命名空间，以减少全局变量的使用。**
		```function(){}```
		var 函数名 = function(形参列表){
			//函数体
		}
	**立即执行函数 IIFE(Immediately-Invoked Function Expression)**
	```(function(){})()或者(function(){}())```形如这样的叫做立即执行函数
	IIFE作用：
			1.改变变量的作用域（创建一个独立的作用域）
			2.封装临时变量，避免全局变量污染
			3.只执行一次

* 函数声明提前
	函数和变量相比，会被优先提升。这意味着函数会被提升到更靠前的位置。
	**只是函数声明提升了，函数表达式并不会提升。**

* 函数的内部属性--只有在函数内部才能访问的属性
	1.arguments 类数组对象，包含着传入函数中的参数
	**即使不定义形参，也能通过arguments使用实参**
	*类数组对象：不是由Array构造函数创建的对象，但是指具有向对象元素的数字索引下标以及 length 属性*
		**callee属性 用来指向拥有这个arguments对象的函数
		length属性代表存放实参的个数**
		1).累加
```javascript
function add(){
//console.log(arguments);//{ '0': 1, '1': 2, '2': 3, '3': 4 }
var total = 0;
for(var i=0;i<arguments.length;i++){
	total += arguments[i];
	}
return total;
}
var result = add(1,2,3,4);
console.log(result);//10
```
		2).递归阶乘
```javascript
function mul(n){
			if(n>1){
				return n*arguments.callee(n-1);
			}else{
				return 1;
			}	
		}
```
	2.this--指向函数执行的环境对象--指向当前函数作用域
		1).纯粹的函数调用 
```javascript
function test(){
			console.log(this);
		}
		var test = function(){
		console.log(this);
		}//匿名函数的执行环境具有全局性
		//在nodejs环境中指向的是global变量(全局变量)
		//在浏览器中指向的是window对象
		test();
```
		2).作为对象方法被调用
```javascript
var obj = {
				sayName:function(){
					console.log(this);
				}
		}	//此时this指向的是上一级对象，obj
```
		3).作为构造函数被调用
```javascript
function Test(){
			this.name = 1;
			}
			var test = new Test();
			console.log(test.name);//1
			//此时this指向的是这个新对象test
```
		4).调用apply()或call()方法 **参数列表为空时，默认调用全局对象**
		**在 apply 模式中如果使用 null，就是函数模式，如果使用对象，就是方法模式。**
		**当call或apply的第一个参数为null || undefined时 this指向window ||global**
		调用apply()和call()方法，可以将一个对象指定为第一个参数，此时这个对象就是函数执行的this
```javascript
function fun(){
			console.log(this.name);
		}
		var obj = {
			name:"obj";
		};
		fun.apply(obj);//obj
```
		apply()和call()方法的不同在于：
			call()可以将实参在对象之后依次传递，apply()需要将实参封装到数组中统一传递
			call(obj,1,2,.....);
			apply(obj,[1,2,3,....]);
```javascript
function test(a,b){
			console.log(this,a,b);
			}
			var obj = {
				age:1
			}
			test.call(obj,1,2); //{ age:1 } 1 2
			test.apply(obj,[1,2]);//{ age:1 } 1 2
```
		5).调用bind()方法
			test.bind();不传参数默认指向全局变量global,浏览器指向window
			test.bind(obj);不执行test函数，只是更改this指向，返回更改了this指向后的test函数
			传递参数的两者表示：
			test.bind(obj)(5,6)
			test.bind(obj,5,6)
```javascript
function test(a,b){
				console.log(this,a,b);
				}
				var obj = {};
				test.bind();//不执行
				test.bind(obj);//不执行
				test.bind(obj)(1,2);//{} 1 2
				test.bind(obj,1,2)();//{} 1 2
```



