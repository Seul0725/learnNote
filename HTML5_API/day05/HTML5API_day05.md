*2019/08/06 学习HTML5API的第五天*


**console.time();console.timeEnd();判断一段代码的执行时间**


客户端存储：
cookie：浏览器为了辨别用户身份，进行session跟踪而储存在用户本地终端的数据。
cookie容量有限，并且数据不够安全。为此，HTML5提出了Web Storage

* Cookie通过在客户端记录信息确认用户身份，Session通过在服务器端记录信息确认用户身份

#### Web Storage
分为两种Storage：sessionStorage 和 localStorage
* sessionStorage 提供一种在cookie之外存储会话数据的途径 仅限当前选项卡
* localStorage 提供一种存储大量可以跨会话存在的数据的机制 将数据保存在客户端本地的硬盘设备中

* Storage对象提供的方法：
1. setItem(name,value) 为指定的name设置一个对应的值
2. getItem(name) 根据指定的名字name获取对应的值
3. removeItem(name) 删除由name指定的键值对
4. clear() 删除所有值
5. key(index) 获得index位置处的值的名字
6. length Storage对象中，键值对的数量
```javascript
sessionStorage.setItem('age', 12);
sessionStorage.setItem('obj', JSON.stringify({name:'zhangsan',age:12}));
var age = sessionStorage.getItem('age');
var obj = sessionStorage.getItem('obj');
console.log(age);
console.log(JSON.parse(obj));
console.log(sessionStorage.key(1));
console.log(sessionStorage.length);
```

#### window对象提供的storage事件 

当在【其他页面】中修改sessionStorage或者localStorage中的值时要执行的处理，
可以使用window对象ᨀ供的storage事件来监听。
event.key 被修改的数据键值
event.oldValue 被修改前的值
event.newValue 被修改后的值
event.url 页面的URL地址
event.storageArea 为变动的sessionStorage对象或localStorage对象


#### Web Workers
Web Workers是HTML5新增的，用来在Web应用程序中实现后台处理的一项技术。
使用Worker-API用户可以创建在后台运行的线程，将程序交给后台运行，对用户在前台页面中执行的操作完全没有影响。

* Worker构造函数
1. onmessage 监听，当在后台线程代码中调用postMessage时激发
2. postMessage 调用后台线程。字符串参数将赋值给后台线程中事件对象event.data

```javascript
//创建后台线程
var worker = new Worker('web.js');
//设定监听，等待线程结束返回计算结果
worker.onmessage = function(event){
	console.log(event.data);
}
//启动后台线程
worker.postMessage(10000000000);

//web.js
onmessage = function(event){
	var num = event.data;
	var total = 0;
	for(var i=0;i<num;i++){
		total+=i;
	}
	postMessage(total);
}
```



