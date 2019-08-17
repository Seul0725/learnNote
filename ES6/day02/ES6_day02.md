*2019/08/13 学习ES6的第二天*


//复制对象
1. JSON.parse(JSON.stringify(obj));
2. 遍历对象
let obj2 = {};
for(var key in obj){
	obj2[key] = obj[key];
}
3. ES6方式
let obj2 = {};
//返回值也是obj2
obj2 = Object.assign(obj2,obj,obj3,obj4);


#### let关键字
* 特性：
1. 块级作用域
2. 变量声明不提升
3. 暂时性死区
4. 不能重复声明

#### const关键字
* 特性：
1. 块级作用域
2. 变量声明不提升
3. 暂时性死区
4. 不能重复声明
5. 在声明时初始化
6. 不可更改值

#### 解构 -- 模式匹配
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

##### 解构成功
* 完全解构
`let [a, b, c] = [1, 2, 3];`
* 不完全解构
`let [a, b] = [1, 2, 3];`

* 解构不成功，变量的值就等于undefined
`let [a, b, c] = [1, 2];`

**先去判断解构的值有无，若有，进行赋值，若无，进行默认值赋值**

##### 扩展运算符...
* 扩展运算符可以将数据展开
* 不能单独使用扩展运算符展开数组，可以在参数中使用，将参数数组转成参数列表。
* 如果扩展运算符后面跟的是变量，那么接受单独多余的数组放置到数组中。
```javascript
let [a,b,c,...d] = [1,2,3,4,5,6,7];
let result = Math.max(...[1,2,3,4,5,6,7]);
console.log(...[1,2,3]);
```
* rest参数----将不再推荐使用arguments
`function test(...tail){}`
`test(1,2,3);`

#### 对象的解构
* 对象的属性没有次序，变量必须与属性同名
* 使用:对属性进行重命名
```javascript
let {name:myName,age:myAge,address:myAddress="江苏"} = {
		name:'tom',
		gender:'男',
		age:18
	}
console.log(myName,myAge,myAddress);
```

#### 字符串的解构
```javascript
let [a, b, c, d, e] = 'hello'; //a=h;b=e;c=l;d=l;e=o
let {length : len} = 'hello'; //len = 5
```
#### 数值和布尔值的解构
**解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。**
```javascript
let {toString:s} = 123;
console.log(s===Number.prototype.toString);//true
let {toString} = true;
console.log(toString===Boolean.prototype.toString);//true
```
#### 函数参数的解构赋值
```javascript
function test([a=0,b=0]){}
test([1,2])
function test({a,b}){}
test({1,2})
```

* 交换变量的值：
```javascript
let x=1;
let y=2;
[x,y] = [y,x];
```

#### 对象扩展

* 属性简写(属性名和变量名一致时才可以简写)
```javascript
let name = 'tom';
let age = 18;
let gender = 'male';
let obj = {name,age,gender};
```
* 方法简写(只有在对象中的方法才可简写)
```javascript
let obj2 = {
	sayHi(){
		console.log('hi');
	}
}
```
* 属性名表达式
```javascript
let name = 'tom';
let obj3 ={
	['name'+name]:'hello'
}
```
* 方法的name属性
```javascript
const person = { sayName() { console.log('test') } };
console.log(person.sayName.name);//'test'
console.log(typeof person.sayName.name);//string
```