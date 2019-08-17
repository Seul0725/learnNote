*2019/08/14 学习ES6的第三天*


### 扩展运算符
**扩展运算符后面直接跟字符串、数组、数据结构，会将其展开；用[]包起来会转为数组**
* 将字符串转成数组
```javascript
let arr = [...'hello'];
console.log(arr);//[ 'h', 'e', 'l', 'l', 'o' ]
```

* 展开数组
```javascript
let arr2 = [...[1,2,3,4]];
console.log(arr2);//[ 1, 2, 3, 4 ]
```

* 后面跟变量 -- 用于保存多余数据
```javascript
let [a,b,c,...d] = [1,2,3,4,5,6,7];
function test(...tail){
	console.log(tail);//[ 1, 2, 3 ]
}
test(1,2,3);
```

* 展开数据结构
```javascript
let arr = [24,45,24,6,45,2];
//Set对象，用于数组去重
console.log(...new Set(arr));[24,45,6,2]
```

### 对象扩展

* Object.is(v1,v2) 判断两个值是否全等
```javascript
//与===的区别 +0和-0是false，NaN是true
console.log(+0===-0);//true
console.log(NaN===NaN);//false
console.log(Object.is(+0,-0));//false
console.log(Object.is(NaN,NaN));//true
```

* Object.assign(target,o1,o2...) 用于对象的合并，属于浅复制
**返回目标对象**
```javascript
let obj2 = Object.assign(obj);
console.log(obj2===obj);//true
let obj4 = Object.assign({},obj);
console.log(obj4===obj);//false
```

* `__proto__`本质上属于内部属性，指向当前对象的prototype对象
**ES6中不支持使用**

* Object.getPrototypeOf(obj) 读取一个实例对象的原型对象
`console.log(Object.getPrototypeOf(obj) === Object.prototype);`

* Object.setPrototypeOf(obj,newPrototype) 设置一个实例的原型对象
**返回参数对象本身**
**虽然设置了新的原型对象，但是实例依旧可调用Object的属性和方法**

* Object.keys(obj) 返回属性名组成的数组

* Object.values(obj) 返回属性值组成的数组

* Object.entries(obj) 返回键值对组成的二维数组
```javascript
for(let [key,value] of Object.entries(obj)){
	console.log(key,value);
}
```

* for-of 遍历数组、类数组
**for-of 不能直接遍历对象，遍历对象可直接用for-in，或者for-of遍历entries**
```javascript
let arr = ['hello','time','reduce'];
for(let item of arr){
	console.log(item);
}
function test(){
	for(let item of arguments){
		console.log(item);
	}
}
test(1,2,3);
```

### 函数的扩展

* 函数参数的默认值 
1. ES6 允许为函数的参数设置默认值
2. 与解构赋值默认值结合使用
3. 函数的length属性，将**返回没有指定默认值的参数的个数，遇到有默认值的参数就会停止**
```javascript
function test(a,b,c='1',d){}
console.log(test.length);//2
```


* rest参数 用于获取函数的多余参数
```javascript
function test(...tail){}
tail --> [1,2,3]
test(1,2,3)
```

* 箭头函数

1. 箭头函数参数部分使用一个圆括号代表参数部分
2. 箭头函数的代码块部分多余一条语句，就使用{}包裹，并且使用return语句返回

> 不能作为构造函数
> 有arguments属性，但是不保存实参

* 箭头函数中的this指向
箭头函数没有自己的this，其this指向的是**箭头函数声明时的父作用域中的this**
```javascript
//模块的导出对象
console.log(this);//module.exports --> {} 
console.log(this==module.exports);// true
let test = ()=>{
	console.log(this);
}
test();//{}
let obj = {
	test
}
obj.test();//{}
function test(){
	console.log(this);
	return ()=>{
		console.log(this);
	}
}
let obj = {
	test:test()
}
obj.test();//golbal 两次
```
**箭头函数的this指向即当前该箭头函数声明时父作用域中this是什么它就是什么**

### 数组的扩展

* Array.from(arr); 可将类数组、可遍历的对象转换为数组

> 只要是部署了Iterator接口的数据结构，Array.from()都能将其转换为数组
```javascript
let temp = {
	'0':'hello',
	'1':'world',
	length:2
}
//没有length不成功
console.log(Array.from(temp));//[ 'hello', 'world' ]
```

* Array.of(nums); 用于将一个或一组值转换为数组
```javascript
console.log(Array.of(10));//[ 10 ]
console.log(Array.of(10,11));//[ 10, 11 ]
```

> Array.of()方法的主要目的是为了弥补构造函数Array的不足。因为参数个数的不同，会导致Array的行为有差异

* find()和findIndex() 属于数组的迭代方法
find()用于找出第一个符合条件的数组元素，若没有符合条件的，返回undefined
findIndex()返回第一个符合条件的数组元素的索引，若没有，返回-1
```javascript
let arr = [1,20,8,12,45];
let result = arr.find((item)=>{
	return item>20;
});
let result2 = arr.findIndex((item)=>{
	return item>20;
});
console.log(result);//45
console.log(result2);//4
```

* fill 填充数组
```javascript
let arr = [1,2,3];
console.log(arr.fill(9));//[ 9, 9, 9 ]
console.log(arr);//[ 9, 9, 9 ]
console.log(new Array(3).fill(7));//[ 7, 7, 7]
```
* includes 判断数组中是否包含某个值，返回布尔值
```javascript
let arr = [1,2,3];
console.log(arr.includes(2));//true
```

* 数组实例的keys、values、entries
keys()用来遍历数组中的索引，values()用来遍历数组中的值，entries用来遍历index-item键值对
**返回迭代器Iterator对象**
```javascript
let arr = [1,2,3];
for(let key of arr.keys()){
	console.log(key);//0 1 2
}
for(let value of arr.values()){
	console.log(value);//1 2 3
}
for(let [index,item] of arr.entries()){
	console.log(index,item);//0 1  1 2  2 3
}
```

