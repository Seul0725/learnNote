*2019/07/18 学习JavaScript的第九天*


### 继承
每个构造函数都有一个原型对象，原型对象中包含一个指向该构造函数的指针(constructor)，而实例中包含一个指向其构造函数的原型对象的内部指针(`__proto__`)。

1. 原型链继承：子构造函数的原型对象是父构造函数的实例。
```javascript
	//创建父构造函数
	function Animal(name,age){
		this.name = name;
		this.age = age;
	}
	//向父构造函数的原型对象中添加方法sayName()
	Animal.prototype.sayName = function(){
		console.log(this.name);
	};
	//创建子构造函数
	function Dog(name,age,color){
		this.name = name;
		this.age = age;
		this.color = color;
	}
	Dog.prototype = new Animal();
	Dog.prototype.constructor = Dog;
	Dog.prototype.sayColor = function(){
		console.log(this.color);
	};
	var dog = new Dog('ww',1,'yellow');
	dog.sayName();
	dog.sayColor();
	console.log(dog);
	console.log(dog.constructor);//[Function: Dog]
```
2. 经典继承--借用构造函数
通过call()或apply()方法在子构造函数中执行父构造函数中初始化过的代码。
```javascript
	function Animal(name,age){
		this.name = name;
		this.age = age;
	}
	function Dog(name,age,color){
		Animal.call(this,name,age);
		this.color = color;
	}
```
3. 伪经典继承--将原型链继承与借用构造函数技术结合在一起。
**原理：使用原型链继承实现对原型属性和方法的继承，通过借用构造函数实现对实例属性的继承**
```javascript
	function Animal(name,age){
		this.name = name;
		this.age = age;
	}
	Animal.prototype.sayName = function(){
		console.log(this.name);
	};
	function Dog(name,age,color){
		Animal.call(this,name,age);
		this.color = color;
	}
	Dog.prototype = new Animal();
	Dog.prototype.constructor = Dog;
```

##### 默认原型
所有函数的默认原型都是Object的实例，默认原型中都会包含一个内部指针，指向Object原型对象。
```javascript
	console.log(Array.prototype.__proto__.constructor.name);//Object
	console.log(Date.prototype.__proto__.constructor.name);//Object
	//console.log(Object.prototype.__proto__.constructor.name);//null
```

### 文档对象模型

* DOM--操作文档节点

##### Node类型
Javascript中所有的节点类型都继承自Node类型，所有节点类型都共享着相同的基本属性和方法。
1).Document类型 文档
2).Element类型 元素节点
3).Text类型	文本节点，包括回车换行
4).注释类型	注释节点


**文档加载完毕之后再执行某段JS代码:window.onload=function(){};**
```javascript
console.log(document.constructor);//HTMLDocument
console.log(HTMLDocument.prototype.__proto__.constructor.name);//Document
```

##### Node类型的属性和方法
* 节点关系
1. nodeType 节点类型
Document--> 9;Element -->1;Text-->3;Comment--> 8;属性attr-->2
document是Document构造函数的实例；
document.body是Element构造函数的实例；
document.body.firstChild是Text构造函数的实例
`console.log(document.body.nodeType);//1`
2. nodeName 节点名称(**全大写**)
`console.log(document.body.nodeName);//BODY`
3. nodeValue 节点的值，如果是元素类型，返回null
`console.log(document.body.nodeValue);//null`
4. childNodes 存放孩子节点，保存一个NodeList类数组对象
可以用slice方法将NodeList转换为数组。
`Array.prototype.slice.call(arguments);或者[].prototype.slice.call(arguments);`
**将具有length的对象转换为数组**
```javascript
	console.log(document.body.childNodes);
	var childs = document.body.childNodes;
	var arr = Array.prototype.slice.call(childs,0);
	//var arr = Array.prototype.slice.call(childs);
	//var arr = [].slice.call(childs);
```
5. parentNode 父节点，包含在childNodes列表中所有的节点都具有相同的父节点，每个节点之间都是同胞/兄弟节点。
`console.log(childs[2].parentNode);//父节点body`
6. previousSibling 兄弟节点的前一个节点
7. nextSibling 兄弟节点的下一个节点
8. firstChild childNodes列表中的第一个节点
9. lastChild childNodes列表中的最后一个节点
10. ownerDocument 整个文档的文档节点
任何节点都属于它所在的文档，任何节点都不能同时存在于两个或更多的文档中。
11. hasChildNodes() 在有一个或多个子节点的情况下返回true
```javascript
	console.log(document.body.ownerDocument);//整个文档的文档节点document
	console.log(document.body.ownerDocument===document);//true
	console.log(document.body.hasChildNodes());//true
```
* 操作节点
**以下四种方法都需要父节点对象进行调用**
1. appendChild() 向childNodes列表末尾添加一个节点。返回新增的节点。
关系更新如果参数节点已经成为文档的一部分，**位置更新而不插入，**DOM树可以看成是一系列指针连接起来的，任何DOM节点不能同时出现在文档中的任何位置。
2. insertBefore() 
第一个参数是插入节点，第二个参数是参照节点
被插入节点会变成参照节点的前一个兄弟节点，同时返回插入的节点。如果第二个参数为null，则会将该节点追加到NodeList末尾。
3. replaceChild() 
第一个参数是要插入的节点，第二个参数是要替换的节点
要替换的节点将由这个方法返回并从文档树中被移除，同时由要插入的节点占
据其位置
4. removeChild() 
一个参数，要移除的节点
移除的节点将作为方法的返回值。
```javascript
var two = document.getElementById('two');
document.body.appendChild(three);
document.body.insertBefore(two,null);
document.body.replaceChild(two, one);
document.body.removeChild(two);
```

* 其他方法
1. cloneNodes()
克隆节点，默认浅复制(false)，只复制节点本身，不复制内部子节点。true深复制，复制节点本身，并且复制子节点
```javascript
var cloneOne = one.cloneNode(true);
cloneOne.innerText = 'cloneOne';
```
2. normalize()
处理文档树中的文本节点，在某个节点上调用了该方法，会删除空白节点，会找到相邻的两个文本节点，并将他们合并为一个文本节点。

##### Document类型
Javascript通过使用Document类型表示文档。在浏览器中，document对象是HTMLDocument的一个实例，表示整个HTML页面。document对象是window对象的一个属性，因此可以直接调用。HTMLDocument继承自Document。

* 查找元素
1. getElementById() 
获取元素ID，找到返回该元素，没找到返回null
**如果页面中多个元素的ID值相同，只返回文档中第一次出现的元素**
2. getElementsByTagName()
获取元素的标签名，返回一个HTMLCollection对象
3. getElementsByName() 
获取元素的name，返回符合条件的HTMLColleaction对象
4. getElementsByClassName() 
获取元素的类名

##### Element类型
所有的HTML元素都由HTMLElement类型表示，或者其子类型表示。

* 创建元素
`document.createElement()`一个参数，要创建元素的标签名。