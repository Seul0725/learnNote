*2019/07/15 学习 JavaScript 的第六天*

* for...in 语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。

* 数组的截取方法
	1).concat 拼接--**不改变原数组**
```javascript
		var arr = [1,2,3];
		var arr2 = ['hello','world'];
		console.log(arr.concat(arr2));//[ 1, 2, 3, 'hello', 'world' ]
		console.log(arr);//[ 1, 2, 3 ]
```
		重写concat方法
```javascript
			Array.prototype.myConcat = function(param){
				//1.创建副本
				//var temp = this;这里不能这么写，因为this为当前的数组对象，如果赋值给另一个变量的话，会把内存地址复制给temp，这样原数组也会改变了。
				var temp = [];
				for(var i=0;i<this.length;i++){
					temp.push(this[i]);
				}
				//2.判断参数数据类型
				if(Array.isArray(param)){
				//3.若参数是数组，遍历参数数组，添加到副本末尾
					for(var j=0;j<param.length;j++){
						temp.push(param[j]);
					}
				}else{
				//4.若参数不是数组，直接添加到副本末尾
					temp.push(param);
				}
				//5.返回副本
				return temp;
			}
```
	2).slice 切割--**不改变原数组**
		可接受一个或两个参数。
		接受一个参数表示从当前指定位置切割，到数组末尾的所有项。
		接受两个参数，表示切割从起始到结束之间的项，但不包括结束位置的项。
		**可接受负数，-1表示末尾的索引位置。**
		**返回值：切割出来的元素组成的数组**
```javascript
			var arr = [1,2,3,4];
			console.log(arr.slice(2));//[3,4]
			console.log(arr.slice(1,2));//[2]
			console.log(arr.slice(-2));//[3,4]
			arr.slice(1,-1);//[2,3]
			console.log(arr);//[1,2,3,4]
```
		重写slice方法：
```javascript
			Array.prototype.mySlice = function(){
		var newArr = [];
		if(arguments[0]===(undefined||null)&&arguments[1]===undefined){
			return this;
		}
		if(arguments[0]===(undefined||null)&&arguments[1]>this.length){
			arguments[1]=this.length;
			for(var i=0;i<arguments[1];i++){
				newArr.push(this[i]);
			}
		}
		if(arguments[0]<0){
			arguments[0]=this.length+arguments[0];
		}
		if(arguments[1]<0){
			arguments[1]=this.length+arguments[1];
		}
		if(arguments[0]<0){
			arguments[0]=0;
		}
		if(arguments[0]!==null){
			for(var i=arguments[0];i<(arguments[1]?arguments[1]:this.length);i++){
				newArr.push(this[i]);
			}
		}	
		return newArr;
		}
		var arr = [1,2,3,4];
		console.log(arr.mySlice(null,5));
```
	3).splice 删除、插入、替换
		一个参数：splice(开始位置到数组末尾)
		两个参数：splice(开始位置,删除的项数)
		三个参数：splice(开始位置,删除的项数,添加的元素一个或多个)
		三个参数时，若删除的项数为0，表示插入
		**可接受负值，-1表示最后一位索引**
		**返回值：删除的数组成的数组**
```javascript
			var arr = [1,2,3,4];
			//注释一行测试一行
			console.log(arr.splice(2));//[3,4]
			console.log(arr.splice(1,2));//[2,3]
			console.log(arr);//[1,4]
			console.log(arr.splice(1,0,"hello"));//[] 插入，删除的项为0，返回空数组
			console.log(arr);//[1,'hello',4]
			console.log(arr.splice(1,1,3));//['hello']
```

* 数组索引方法
	1).indexOf() 
	**从数组开头向后查找，使用全等操作符，找不到该元素返回-1。**
	第一个参数为要查找的项，第二个参数为索引开始位置(不写默认从0号索引开始)
```javascript
		var arr = [2,5,4,2,3];
		console.log(arr.indexOf(2));//0
		console.log(arr.indexOf(2,1));//3
		console.log(arr.indexOf(2,4));//-1
```
	2).lastIndexOf()
	**从数组末尾向前查找，使用全等操作符，找不到该元素返回-1。**
```javascript
		var arr = [2,5,4,2,3];
		console.log(arr.lastIndexOf(2));//3
		console.log(arr.lastIndexOf(2,2));//0
```

* 数组迭代方法
	**第一个参数为每一项上运行的函数，第二个参数为运行该函数的作用域对象（可选）**
	1).every()
		如果该函数对每一项都返回true,则该函数返回true
```javascript
			var arr = [23,45,1,4,3,45,7];
			/*var result = arr.every(function(item,index,arr){
				console.log(this);//this指向global全局对象
				return item>20;
			})*/
			Array.prototype.myEvery = function(fun,funThis){
				for(var i=0;i<this.length;i++){
					var result = fun.call(funThis,this[i],i,this);
					if(!result){
						break;
					}
				}
				return result;
			};
			var result = arr.myEvery(function(item,index,arr){
				console.log(this);//{}
				return item>20;
			},{})
			console.log(result);//false
```
	2).some()
		如果该函数对任一项都返回true,则返回true
```javascript
			var result = !(stus.some(function(item,index,arr){
				return item.age<18;
			}));
			var result = stus.some(function(item,index,arr){
				return item.age<18;
			});
```
	3).filter() 过滤
		**返回满足该函数的项组成的数组**
	4).map() 映射
		**返回每次函数调用的结果组成的数组**
```javascript
//链式调用
			var result = stus.filter(function(item,index,arr){
				return item.age<18;
			}).map(function(item,index,arr){
				return item.name;
			});
```
	5).forEach() 遍历元素  **没有返回值**
```javascript
//遍历数组中的每一项
			var ageInit = 10;
			arr.forEach(function(item,index,arr){
				//console.log(item,index,arr);
				item.age = ageInit++;
			});
```

### 面向对象的程序设计
	
##### 创建对象
* 工厂模式
```javascript
		function sayName(){
			return this;
		}
		function createPerson(name,age,gender){
			var o = new Object();
			o.name = name;
			o.age = age;
			o.gender = gender;
			/*o.sayName = function(){
				return this.name;
			};*/
			o.sayName = sayName;
			return o;
			/*return {
				name:name,
				age:age,
				gender:gender,
				sayName:function(){
					return this;
				}
			}*/
		}
		var o1 = createPerson('Tom',18,'男');
		var o2 = createPerson('Mary',16,'女');
		console.log(o1.constructor);//[Function: Object]
		console.log(o2.constructor);//[Function: Object]
		console.log(o1.sayName===o2.sayName);//false->true
```
	当在对象中定义sayName时，相当于每次创建一个新对象，都会在内存中重新开辟一个新的空间存放sayName方法，所以o1.sayName===o2.sayName为false，因为两者的sayName方法内存地址不同。而通过声明函数声明的sayName，在内存中的内存地址不变，所以返回true。
	**工厂模式的问题：工厂模式创建的所有对象都是Object类型，且工厂模式每创建一个对象，其对象的方法就会开辟一个新的内存空间，耗费内存资源。**
* 构造函数模式
```javascript
		function sayName(){
			return this;
		}
		function Person(name,age,job){
		this.name = name;
		this.age = age;
		this.job = job;
		/*this.sayName = function(){
		alert(this.name);
		} */
		this.sayName = sayName;
		}
		var p1 = new Person("terry",11,"boss");
		var p2 = new Person("larry",12,"daBoss");
		console.log(p1.constructor);//[Function: Person]
		console.log(p1.sayName===p2.sayName);//false->true
```
	使用new关键字调用构造函数创建对象的步骤：
	1.创建一个新对象
	2.将构造函数的作用域赋给新对象（this指向这个新对象）
	3.执行构造函数中的代码
	4.返回新对象
	**构造函数的问题：
		每个方法都需要在每个实例上重新创建一遍，但是毫无必要。
		可以通过在全局作用域中声明一个函数，然后将引用传递给对象中的函数属性，但是这样会导致全局函数过多，体现不了对象的封装性。**
* 原型模式
	原型语法：
	创建了自定义的构造函数之后，会同时创建它的 prototype对象，其原型对象默认会取得constructor属性；当调用构造函数创建一个新实例后，该实例的内部将包含一个指针（内部属性），指向构造函数的原型对象。（指向的是原型对象而不是构造函数）
	
```javascript
		function Person(){}
		Person.prototype.name = 'z';
		Person.prototype.friends = [];
		Person.prototype.sayName = function(){
			console.log(this.name);
		};
		var p1 = new Person();
		console.log(p1.name);//z
		var p2 = new Person();
		console.log(p2.name);//z
		p1.friends.push('tom');
		console.log(p1.friends);//[ 'tom' ]
		console.log(p2.friends);//[ 'tom' ]
		console.log(p1.sayName===p2.sayName);//true
```
	更简单的原型语法：
	将原型对象设置为等于一个以对象字面量形式创建的新对象，实例对象使用效果相同，但是原型中的constructor属性不再指向Person。因为每创建一个函数，就会同时创建它的prototype对象，这个对象也自动获得constructor属性。这里重写了prototype对象因此新创建的原型中constructor属性指向就不再是Person，所以往Person的父级寻找，最后指向Object。
```javascript
function Person(){}
Person.prototype={
	name:'yoyo',
	friends:[],
	sayName:function(){
		console.log(this.name);
	}
}
```
	**原型对象的问题：
		所有实例在默认情况下都将取得相同的属性值，这种共享对于函数来说非常合适，但是包含引用数据类型的值就不太好**
* 组合使用构造函数模式和原型模式
	构造函数用于定义实例属性，原型模式用于定义方法和共享属性。
```javascript
function Person(name,age){
	this.name = name;
	this.age = age;
	this.friends = [];
}
Person.prototype = {
	constructor:Person,
	sayName:function(){
		return this.name;
	}
};
var p1 = new Person('Tom',18);
var p2 = new Person('Jerry',16);
p2.friends.push('Mary');
console.log(p1);//Person { name: 'Tom', age: 18, friends: [] }
console.log(p2);//Person { name: 'Jerry', age: 16, friends: [ 'Mary' ] }
console.log(p1.sayName());//Tom
```