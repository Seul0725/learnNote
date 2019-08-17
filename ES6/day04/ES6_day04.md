*2019/08/15 学习ES6的第四天*


### Set数据结构
类似于数组，但成员的值是唯一的，没有重复的值

* 去除数组中的重复成员
`[...new Set(arr)]`

* Set原型对象的属性
1. constructor 返回当前实例的构造函数，默认就是Set
2. size 返回Set实例的成员总数

* Set原型对象的方法
1. add(value) 添加某个值，返回Set结构本身
2. delete(value) 删除某个值，返回一个布尔值，表示删除是否成功
3. has(value) 判断该值是否是Set成员，返回一个布尔值
4. clear() 清除所有成员，没有返回值
5. keys() 返回键名的Iterator遍历器对象
6. values() 返回键值的Iterator遍历器对象
7. entries() 返回键值对的Iterator遍历器对象
8. forEach() 使用回调函数遍历每一个成员

### Map数据结构
类似于对象，是键值对的集合，但是**键**的范围包括字符串及其他各种类型的数据(包括对象)
**也可接受一个二维数组作为参数**，该数组的成员是一个表示键值对的数组

* Map原型对象的属性：
1. constructor 构造函数，默认为Map
2. size 返回Map结构的成员总数

* Map原型对象的方法：
1. set(key,value) 设置键名及键值，返回整个Map结构。**如果键名key存在，键值会被更新，否则就新生成该键**
2. get(key) 读取对于的键值，如果找不到，返回undefined
3. has(key) 判断该键是否是Map对象成员，返回一个布尔值
4. delete(key) 删除某个键，返回一个布尔值
5. clear() 清除所有成员，没有返回值
6. keys() 返回键名的Iterator迭代器对象
7. values() 返回键值的Iterator迭代器对象
8. entries() 返回键值对的Iterator迭代器对象
9. forEach() 使用回调函数遍历每一个成员

### Iterator 遍历器/迭代器
是一种接口，为各种不同的数据结构提供统一的访问机制，即for-of循环。
任何数据结构，只要部署了Iterator接口，就可以完成遍历操作。
一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是**可遍历的**（iterable）。

* 作用：
1. 为各种数据结构，提供一个统一的，简便的访问接口
2. 使得数据结构的成员能够按照某种次序排列
3. Iterator主要供ES6新提出的遍历命令for-of循环使用

* next()方法
第一次调用Iterator的next()方法，可以将指针指向数据结构的第一个成员
第二次调用next()方法，指针就指向数据结构的第二个成员
不断调用Iterator的next()方法，直到它指向数据结构的结束位置
```javascript
console.log(values.next());//{ value: 1, done: false }
console.log(values.next());//{ value: 'hello', done: false }
console.log(values.next());//{ value: undefined, done: true } 
```
**可以使用for-of循环来遍历Iterator对象，或者在while语句中使用done属性来遍历**

* 原生JS具备Iterator接口的数据结构如下：
1. Set
2. Map
3. Array
4. String
5. 函数的arguments对象
6. NodeList对象                                                                                                    
### ES6模块

* export命令 用于规定模块的对外接口
导出内容供其他模块使用，一个模块中，export可以调用多次
**必须与模块内部的变量建立一对一的关系，不能直接导出一个值**

**export写法**：
1. `export let a = 1;`
2. `let a = 1; export {a};`
3. `let a = 1; export {a as b};//更改变量a的名字`
* export default 默认导出
用于指定模块的默认输出。
一个模块只能有**一个默认输出**，因此export default命令只能使用一次，所以import和export后面不用加{}花括号

**export default写法**:
1. 导出一个匿名函数 
`export default function(){}`
2. 导出一个字符串 
`export default 'hello';`
3. 导出一个变量
`let m = 1; export default m;`
4. 导出一条语句
`export default let m = 1;`


* import命令 用于导入其他模块提供的功能
其他JS文件通过import命令加载这个模板

**import写法**:
1. 解构导入
`import {a, b, test} from './module';`
2. 重命名变量
`import {a as b} from './module';`
3. 重复导入
`import {a} from './module';`
`import {b} from './module';`
如果多次重复执行同一句import语句，那么只会执行一次模块代码。
4. 模块的整体加载 包括默认导出的数据，export default属性名为'default'
`import * as obj from './module';`
5. 默认模块的导入
`import test from './module';`

* export和import的复合写法
如果在一个模块中，先导入和后导出都是同一个模块，import语句和export语句可以写在一起
`export { foo, bar } from 'my_module';`
等同于
`import {foo, bar} from 'my_module';`
`export {foo, bar};`

### Promise 承诺机制

1. 是一个容器，存放着某个未来才会结束的事件结果(通常是一个异步操作)
2. 是一个对象，可以获取到异步操作的消息。

参数是一个异步处理函数，如果异步执行成功，调用resolve函数，如果异步执行失败，调用reject函数
`let p = new Promise((resolve,reject)=>{//异步操作});`
内部异步执行成功的回调函数
`p.then((response)=>{});`
内部异步执行失败的回调函数
`p.catch((error)=>{});`
**Promise.prototype.catch**方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数

有了Promise对象，就可以将异步操作以**同步操作的流程**表达出来，避免了层层嵌套的回调函数。

***

### Axios
Axios是一个基于promise的HTTP库，可以用在浏览器和node.js中，可用于发送get和post请求。
```javascript
const axios = require('axios');
axios.get('http://134.175.154.93:8099/findAllCategory').then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.log(error);
});
```

###在Node环境中使用jQuery

* 在项目根目录安装jsdom和jquery `cnpm i -S jsdom jquery`
```javascript
const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<!DOCTYPE html>');
const $ = require('jquery')(window);
let p = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://134.175.154.93:8099/manager/category/findAllCategory',
        method: 'GET',
        success(res) {
            //将异步执行成功结果返回给resolve
            resolve(res);
        },
        error(err) {
            //将异步执行结果返回给reject
            reject(err);
        }
    });
});
//接受异步操作成功的结果
p.then((res) => {
    console.log(res, '=====');
});
//接受异步操作失败的结果
p.catch((err) => {
    console.log(err);
});
```