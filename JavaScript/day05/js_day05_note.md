*2019/07/12 学习 JavaScript 的第五天*


**length：返回函数形参的个数**
```javascript
function test(a,b){}
console.log(test.length);
```

**函数声明提升在变量声明提升之前**

* 函数中返回 undefined 的情况：
	1.函数中形参列表，在没有传入实参的情况下直接打印：undefined
```javascript
			function test(a){
				console.log(a);
			}
			test();//undefined
			//这里a作为局部变量被声明，但是没有赋值，所以打印出undefined
```
	2.作为对象方法被调用的函数，若其中没有内容，打印出：undefined
```javascript
			var obj = {
				test:function(){}
			};
			console.log(obj.test());//undefined
			//一个方法(函数)中如果它的函数体为空时，在调用时会返回undefined
```
	3.函数作为返回值时没有在其内部设置返回值，打印外部函数调用时：undefined
```javascript
			function test(){
				return function(){
					console.log(1);
				}
			}
			console.log(test()());// 1  undefined
			//这里test()调用自身，然后再()调用内部的返回函数，打印出1，console.log()默认接受函数时会打印返回值，如果没有设定，会返回undefined
```
	4.打印函数的调用会返回：undefined 与上一种情况类似
```javascript
			function test(){
				console.log(1);
			}
			console.log(test());//1  undefined
			//例2：
			function test(){};
			console.log(test());
			//这里test()相当于1，先打印1，然后console.log()在接受函数时，默认会打印返回值，如果没有设定返回值，会返回undefined。
```
		**console.log()在打印函数时，除了打印内容外，还会将函数的返回值打印，如果没有设定返回值，会返回undefined**

* 全局变量与局部变量
	
##### 全局变量
	1.使用 var 关键字在函数外部声明的变量，为全局变量（显示声明）
	2.在函数内部，没有使用 var 声明的变量，也为全局变量（隐式声明）
	3.使用 window 全局对象来声明的变量，也为全局变量 `window.a = 1;`
##### 局部变量
	1.在函数内部使用 var 关键字声明的变量，为局部变量（显示声明）
	2.函数的参数列表中的形参，为局部变量（隐式声明）

####全局变量与局部变量的关系
**在函数内部可以访问全局变量，在函数外部不可以访问局部变量**


###### 函数的应用--函数本质上是一种对象，可以将其当成普通对象来使用
1.函数作为参数
```javascript
	function handle(fun){
		var msg = "hello";
		fun(msg);
	}
	handle(function(m){
		console.log(m);
	});//hello
```
2.函数作为返回值
```javascript
	function handle2(){
		return function(){
		console.log(123);
		}
	}
	handle2()();//123
	console.log(handle2());//[Function]
```

##### 值传递与引用传递(址传递)
* 值传递--作用于基本数据类型的变量
```javascript
		var a = 1;
		var b = a;
		console.log(a,b);//1 1 
		b = 3;
		console.log(a,b);//1 3
	//首先，声明a,b即在栈内存中存入a,b，然后把1赋值给a，相当于给栈内存中的a传值，传的值是1，然后又把a赋值给b，相当于把a的值复制了一份，然后赋值给了b。
```
	特点：1.可以直接操作保存在变量中的实际的值
		2.参数传递时传递的是实际值
* 引用传递--作用于引用类型的变量
```javascript
		var obj = {
			name:"zhangsan",
			age:12
		}
		var obj2 = obj;
		console.log(obj,obj2);//{ name: 'zhangsan', age: 12 }
		obj2.gender = "male";
		console.log(obj,obj2);//{ name: 'zhangsan', age: 12, gender: 'male' }
	//首先，在栈内存中保存变量obj，然后在堆内存中开辟一块新的空间用来保存对象的属性和方法，然后会返回一个内存地址，传给obj，实际上，obj是通过内存地址访问内部的属性和方法的。
	obj2=obj，实际上是将obj中的引用地址复制给了obj2。
```
	特点:1.不能直接操作对象的内存空间，实际上是在操作对象的引用。可以添加、删除、修改引用数据类型变量的属性和方法。
		2.参数传递时传递的是引用地址

#### 闭包
**闭包就是有权访问另一个函数作用域中变量的函数**
**函数可以使用函数之外定义的变量。**
**外部函数调用之后其变量对象本应该被销毁，但闭包的存在使我们仍然可以访问外部函数的变量对象**
**闭包是可访问上一层函数作用域里变量的函数，即便上一层函数已经关闭**
**闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。
直观的说就是形成一个不销毁的栈环境。**
* 闭包特性：
	1.函数嵌套函数
	2.函数内部可以引用外部的参数和变量
	3.参数和变量不会被垃圾回收机制回收
* 全局变量会在浏览器关闭时被销毁
* 通常，函数的作用域及其所有变量都会在函数执行结束后被销毁。但是，在创建了一个闭包以后，这个函数的作用域就会一直保存到闭包不存在为止。

**闭包只能取得包含函数中任何变量的最后一个值**
```javascript
		function test(){
			var arr = [];
			for(var i=0;i<5;i++){
				arr[i] = function(){
					return i;
				} //产生闭包
			}
			return arr;
		}
		var result = test();
		for(var i=0;i<result.length;i++){
			console.log(result[i]());
		}//5 5 5 5 5
	//当test函数执行完毕后，其作用域被销毁，但它的变量对象仍保存在内存中，得以被匿名函数访问，此时i的值为5
```
	上述代码中就产生了闭包。其陷阱是：函数带()才是执行函数。
	上面代码的执行顺序如下：
```javascript
		function test(){}
		var result;
		test();
		var arr,i;
		arr[0] = function(){ return i;}//此时函数未执行，函数内部不变，i的值保持不变
		arr[1] = function(){ return i;}//此时函数未执行，函数内部不变，i的值保持不变
		...
		arr[4] = function(){ return i;}//此时函数未执行，函数内部不变，i的值保持不变
		i = 5;
		result = arr;//此时test()执行test函数会返回arr
		console.log(result[0]())//相当于执行arr[0]()，而上面的return i始终保持不变，最后返回i的值为5
		...
		console.log(result[4]())//相当于执行arr[0]()，而上面的return i始终保持不变，最后返回i的值为5
```
	要想保存循环过程中的每一个i的值，需要在匿名函数外部再套用一个匿名函数，在这个外层的匿名函数中定义另一个变量并且立即执行来保存i的值。
```javascript
		function test(){
			var arr = [];
			for(var i=0;i<5;i++){
				arr[i] = function(num){
					return function(){
						return num;
					}
				}(i); 
			}
			return arr;
		}
		var result = test();
		for(var i=0;i<result.length;i++){
			console.log(result[i]());
		}//0 1 2 3 4
	//此时在test函数执行完毕之后，其作用域和变量对象都会被销毁，i不再一直保存在内存中。
```
	上述代码的执行过程如下：
```javascript
		function test(){}
		var result;
		test();
		var arr,i;
		arr[0] = function(num){return function(){return num}(0);
		//此时function(num){}执行，并且传入参数0，即num=0，返回function(){return 0}
		arr[0] = function(){ return 0 }
		...
		arr[4] = function(){ return 4 }
		result = arr;
		console.log(arr[0]());//arr[0]()执行函数function(){return 0}，返回0，所以打印出来0
		...
		console.log(arr[4]());//arr[4]()执行函数function(){return 4}，返回4，所以打印出来4
```

### 数组--ECMAScript数组是有序列表，是存放多个值的集合
* 特性：
	1.每一项都可以保存任何类型的数据
	2.数组的大小是可以动态调整的
	3.数组的length属性，可读可写。

* 创建数组
	1.使用Array构造函数
```javascript
		var arr = new Array();
		var arr = new Array(20);//指定数组长度
		var arr = new Array("hello",1,2);//传入参数
```
	2.使用数组字面量
		var arr = [];//空数组
* 访问数组元素 -- 数组变量名[索引]
	1.索引小于数组的长度，返回索引对应的项。
	2.索引大于数组的长度，数组自动增加至该索引+1的长度
```javascript
var arr = [1,2];
arr[4] = "hello";//数组长度变为5
```
	**其他没有存放数据的索引位置，在Node.js环境中打印出空，在IE浏览器为undefined**
	如：
```javascript
		var arr = new Array(5);
		console.log(arr);
		//Node.js环境中打印出：[ , , , , ]，在IE浏览器中空项用undefined代替
```
**`console.log(arr[0]);//undefined 打印一个空项会返回undefined`**

* 数组检测
```javascript
var arr = [];
console.log(typeof arr);//object 证明数组是属于对象的
console.log(arr instanceof Array);//true
console.log(Array.isArray(arr));//true
```
**所有的对象都是Object的后代。**
**在同一个全局作用域下可用instanceof判断，不同的全局执行环境，会存在两个不同版本的Array构造函数**
**instanceof:测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。即判断一个对象是否是一个类的实例**
**类数组对象：不是由Array构造函数创建的对象，所以arguments不是数组**
```javascript
function test(){
	console.log(Array.isArray(arguments));
}
test();//false
```

* 数组序列化 -- 将数组的状态转换为字符串
	1.toSting() 默认以逗号,分隔各项
	2.join()   可以传入字符串指定分隔字符，不传参数默认为逗号,
	3.JSON.stringify() 将数组序列化为JSON字符串
```javascript
var arr = [1,2,3];
console.log(arr.toString());//'1,2,3'
console.log(arr.join());//'1,2,3'
console.log(JSON.stringify(arr));//"[1,2,3]"
```

* 栈、队列方法
	1).栈方法--LIFO(Last-In-First-Out)
		push() 把()接受的参数，添加到数组的末尾，并返回新数组的长度
		pop() 移除数组的最后一项，并返回移除的项，数组长度减一
	2).队列方法--FIFO(First-In-First-Out)
		shift() 移除数组的第一项，并返回移除的项，数组长度减一
		unshift() 在数组前端可添加任意项，并返回新数组的长度
* 排序
	1.反转
		reverse()反转数组项的顺序
```javascript
var arr = [1,2,3,4];
console.log(arr.reverse());[4,3,2,1]
console.log(arr);[4,3,2,1]
```
	2.排序
		sort()
		1).默认排序：会调用每个数组项的toString()方法，然后把元素的首个字符按照ASCII字符序列排序,如果数组中含有未定义的元素，会被排到数组末尾。
		2).自定义排序：将一个比较函数作为参数 **必须是函数**
			比较函数应该具有两个参数 a 和 b，其返回值如下：
				若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
				若 a 等于 b，则返回 0。
				若 a 大于 b，则返回一个大于 0 的值。

			-升序
			**返回 `a-b` 只用于数字排序，字母排序需要使用if语句进行判断**
```javascript
				var arr = [4,3,2,1];
				function compareFun(a,b){
					//return a-b;
					if(a<b){
						return -1;
					}
					return 1;
				}
				console.log(arr.sort(compareFun));//[1,2,3,4]
```
			-降序
			**返回 `b-a` 只用于数字排序，字母排序需要使用if语句进行判断**
```javascript
				var arr = [1,2,3,4];
				function compareFun(a,b){
					//return b-a;
					if(a>b){
						return -1;
					}
					return 1;
				}
				console.log(arr.sort(compareFun));//[4,3,2,1]
```
* 万能比较函数
```javascript
	var stus = [{
		name:"zhangsan",
		age:14
	},{
		name:"lisi",
		age:20
	}]
	console.log(stus);
	stus.sort(compare("name","asc"));
	console.log(stus);
	function compare(attr,rules){
		return function(o1,o2){
			//asc升序 desc降序
			if(rules === "asc"){
				if(o1[attr]<o2[attr]){
					return -1;
				}else{
					return 1;
				}
			}else{
				if(o1[attr]>o2[attr]){
					return -1;
				}else{
					return 1;
				}
			}
		}
	}
```
