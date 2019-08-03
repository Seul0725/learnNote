*2019/07/22 学习JavaScript的第11天*


##### 事件绑定
非IE事件处理程序：
* addEventListener() 事件绑定
参数：
1.要绑定的事件名，不加'on'前缀；
2.回调函数；
3.布尔值：false冒泡阶段调用，true捕获阶段调用
**最后一个参数不写默认是false**
* removeEventListener() 事件解绑
参数：
1.要解绑的事件名，不加'on'前缀；
2.回调函数；
3.布尔值：false冒泡阶段调用，true捕获阶段调用
**可添加多个事件处理程序，并且它们是按顺序触发**
**事件绑定中的函数如果是匿名函数将无法删除**
***
IE事件处理程序：
* attachEvent() 事件绑定
参数：
1.要绑定的事件名，要加'on'前缀；
2.回调函数；
* detachEvent() 事件解绑
参数：
1.要解绑的事件名，要加'on'前缀；
2.回调函数；
**this指向window对象**
**多个事件处理程序执行时，按相反的顺序执行**
***
**事件对象的属性均为只读属性**
**在事件处理程序内部，对象this始终等于currentTarget值，即当前正在处理程序的目标**

##### IE的事件对象
1.在IE8及以下，不支持event，需要使用window.event
2.在使用DOM0级添加事件时，event对象可以作为window对象的一个属性。
```javascript
div.onclick = function(){
	console.log(window.event);//[object Event]
}
```
3.在使用attachEvent添加事件时，event对象会作为参数传入事件处理函数中
```javascript
div.attachEvent('onclick',function(event){
				alert(window.event);//[object Event]
			});
```
