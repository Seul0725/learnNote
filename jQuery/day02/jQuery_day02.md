*2019/07/27 学习jQuery的第二天*

##### jQuery事件绑定方法

1. eventType()
`$("button").click(function(){});`
2. bind()
```jaavascript
$("button").bind("click",function(){});
$("button").bind("click",{1,2,3},function(event){
console.log(event.data);
});
```
**事件数据(一个对象)，保存在回调函数的事件对象的data属性中**
还可以同时绑定多个事件类型/处理程序
```javascript
$("button").bind({
	click:function(){},
	mouseup:function(){}
});
```
3. on()
`$("body").on("click","button",function(){});`
`$("body").on("click","button",{id:1001},function(){};`

##### jQuery事件解绑方法

1. unbind()
```javascript
$("button").unbind();
$("button").unbind("click");
$("button").unbind("click",handle);
```
2. off()
`$("body").off("click","button");`

##### jQuery事件委派/事件代理

1. on()
```javascript
$("body").on("click","button",function(event){
	console.log(event);
});
```
2. delegate()
```javascript
$("body").delegate("button","click",function(event){
	console.log(event);
});
```

##### 模拟事件执行/自动触发事件

trigger() 
可以传递给事件处理程序的额外参数。**为数组类型。**
```javascript
$("body").on("click","button",function(event,a,b){
	console.log(event,a,b);
});
$("button").trigger("click",[1,2]);
```

###### 鼠标事件

1. click()		鼠标单击事件
2. dblclick()	鼠标双击事件
3. hover()		鼠标悬停事件
4. mousedown()	鼠标按下事件
5. mouseup()	鼠标抬起事件
6. mouseenter()	鼠标进入事件	不支持子元素
7. mouseleave()	鼠标离开事件	不支持子元素
8. mouseout()	鼠标离开事件	支持子元素
9. mouseover()	鼠标进入事件	支持子元素
10. mousemove() 鼠标移动事件

###### 键盘事件

1. keyup()
2. keydown()

###### 表单事件

1. focus()   聚焦事件
2. blur()	失去焦点事件
3. change()	当元素的值发生改变时触发的事件
4. select()  当textarea 或文本类型的input元素中的文本被选择时触发的事件。绑定在单行文本框或多行文本框上
5. submit()	表单提交事件，绑定给form

##### 获取HTML代码/文本/值

**html()和val()匹配多个时，会获得匹配的第一个，可以通过回调函数获取所有匹配的**
```javascript
$("div").html(function(index,item){
	//index 索引
	//item html值
	console.log(index,item);
});
```
1. html()
用为读取和修改元素的HTML标签
2. text()
用来读取或修改元素的纯文本内容
3. val() 
用来读取或修改【表单元素】value属性的值

##### jQuery中的工具方法

1. get() 返回所有匹配的DOM节点，这些节点包含在一个数组中，可传入索引指定DOM对象
2. toArray() 返回一个包含所有DOM元素的数组
3. eq(index) 用于指示元素的索引，当为负数时从集合中的最后一个元素开始倒数，返回指定索引位置上的【jQuery对象】。
4. filter() 参数可放选择器或者回调函数
5. map() 该方法特别适用于获取或设置元素集合中的值；参数function(index,item){}回调函数。
6. not() 从匹配的元素集合中移除指定的元素。除了..
7. each() 遍历一个jQuery对象，为每个匹配元素执行一个函数
8. first() 获取匹配元素集合中第一个元素。
9. last() 获取匹配元素集合中第一个元素。
10. is()
判断当前匹配的元素集合中的元素，是否为一个选择器/DOM元素/jQuery对象，如果这些元素至少一个匹配给定的参数，那么返回true。
11. has() 筛选匹配元素集合中的那些有相匹配的选择器或DOM元素的后代元素。
12. slice() 根据指定的下标范围，过滤匹配的元素集合，并生成一个新的jQuery对象。

##### jQuery中属性操作方法

1. attr() 获取匹配的元素集合中的第一个元素的属性的值或设置每一个匹配元素的一个或多个属性。使用attr操作正常属性及自定义属性
2. prop()  使用prop操作布尔属性
3. removeAttr() 为匹配的元素集合中的每个元素中移除一个属性
4. removeProp() 移除自定义的属性。
5. css() 设置样式属性
6. addClass() 增加类
7. removeClass() 删除类
8. toggleClass() 切换类
9. hasClass() 确定任何一个匹配元素是否有被分配给定的（样式）类。有返回true

***

##### jQuery中的ajax

jQuery的ajax默认提交的是表单格式的数据。get方式的参数，将data中的数据转成查询字符串格式追加到url后。post方式的参数，将data中的数据转成表单格式的数据放在请求头中，设置了请求头的'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'。
```javascript
$.ajax('http://www.wangshuwen.com/api/getRegion',{
	//请求方式
	method:'GET',
	//传递给后台的数据
	data:{id:1001},
	//请求成功的回调函数
	success:function(res){
		console.log(res);
	},
	//请求失败的回调函数
	error:function(error){
		console.log(error);
	}
});
```

```javascript
//1.get无参
$.ajax({
	url:'http://www.wangshuwen.com/api/getRegion',
	method:'GET',
	success:function(res){
		console.log(res);
	},
	error:function(error){
		console.log(error);
	}
});
//2.get有参
$.ajax({
	url:'http://www.wangshuwen.com/api/getRegion',
	method:'GET',
	data:{
		name:"tom",
		age:12
	},
	success:function(res){
		console.log(res);
	},
	error:function(error){
		console.log(error);
	}
});
//3.post无参
$.ajax({
	url:'http://www.wangshuwen.com/api/getRegion',
	method:'POST',
	success:function(res){
		console.log(res);
	},
	error:function(error){
		console.log(error);
	}
});
//4.post有参
$.ajax({
	url:'http://www.wangshuwen.com/api/getRegion',
	method:'POST',
	data:{
		name:"jerry",
		age:13
	},
	success:function(res){
		console.log(res);
	},
	error:function(error){
		console.log(error);
	}
});
```

##### AJAX快捷函数

```javascript
//$.get
$.get('http://www.wangshuwen.com/api/getRegion',function(res){
	console.log(res,"$.get请求");
});
//$.post
$.post('http://www.wangshuwen.com/api/getRegion',function(res){
	console.log(res,"$.post请求");
});
//$.getJSON 后台返回的数据类型是JSON的时候使用该方法
$.getJSON('http://www.wangshuwen.com/api/getRegion',function(res){
	console.log(res,"$.getJSON请求");
});
//$.load
$('#result').load('ajax/test.html #container');//载入test.html中的$("#container")
//加载页面 加载的是相对于index.html的相对路径
$(".content").load("./pages/student.html");
```

##### jQuery样式相关方法

**以下方法均不带单位px，是可以用于计算的数值**
1. .height() 获取匹配元素集合中的第一个元素的当前计算高度值，可以传入数值设置
`$("p").height();`
`$("p").height(20);`
2. .width() 为匹配的元素集合中获取第一个元素的当前计算宽度值或给每个匹配的元素设置宽度。
3. .innerWidth() .innerHeight()
获取或设置匹配集合中第一个元素的内部宽高值，只包含padding和元素内容的
4. .outWidth() .outHeight() 
获取元素集合中第一个元素的当前计算宽高值，包含内容、padding和边框
**传入true时返回包含margin的宽高值**
***
5. offset()
设置或返回当前匹配元素相对于当前文档的偏移
`$("p:last").offset({ top: 10, left: 30 });`
6. .position()
获取匹配元素相对父元素的偏移。
`$p1.text("left1:"+$position.left+",top1:"+$position.top);`
7. .scrollTop()	 获取匹配元素相对滚动条顶部的偏移。
8. .scrollLeft() 获取匹配元素相对滚动条左侧的偏移。
9. .offsetParent() 取得离指定元素最近的含有定位信息的祖先元素。含有定位信息的元素指的是CSS的position属性是 relative,absolute,或fixed的元素。**如果没有定位祖先元素，返回根元素html**

***
##### jQuery中动画效果

* 基本效果  参数([duration ],[complete])
1. .hide() 隐藏
2. .show() 显示
3. .toggle() 显示与隐藏，还可以传布尔值，true表示显示，false表示隐藏
如果没有提供参数,被匹配的元素将不带动画地立即隐藏。等同于`.css("display","none")`；
可以接受一个数值或者字符串，fast表示200ms，normal默认为400ms，slow为800ms
```javascript
$("p").show("fast",function(){
   $(this).text("Animation Done!");
 });
```

* 淡入淡出效果 参数( [duration ] ，[complete ] )
通过不透明度的变化来实现所有匹配元素的淡入效果
1. .fadeIn() 淡入
2. .fadeOut() 淡出
3. .fadeTo() 淡入到，接收一个0到1之间的数字，表示目标不透明度。
4. .fadeToggle() 淡入与淡出

* 滑动效果 参数( [duration ] ，[complete ] )
通过高度变化（向上减小或向下增大）来动态地隐藏所有匹配的元素，在隐藏完成后可选地触发一个回调函数。
1. .slideDown() 滑下
2. .slideUp() 滑上
3. .slideToggle() 滑上与滑下

* 自定义效果
animate() 参数：样式对象，持续时间，回调函数
样式的属性值可以设置为单一的数值，或者带单位的数值
```javascript
$("div").animate({
	// width:"300px",
	width:300,
	// height:"200px",
	height:200,
	// marginTop:"100px"
	marginTop:100
},3000);
```

* .stop() 停止匹配元素当前正在运行的动画。
可以传递两个参数：[clearQueue],[gotoEnd]
clearQueue:如果设置成true，则清空队列。可以立即结束动画。
jumpToEnd:如果设置成true，则完成队列。可以立即完成动画。
* .finish() 停止当前正在运行的动画，删除所有排队的动画，并完成匹配元素所有的动画。
如果第一个参数提供，该字符串表示的队列中的动画将被停止。
**.finish()方法和.stop(true, true)很相似，.stop(true, true)将清除队列，并且目前的动画跳转到其最终值。但是不同的是，.finish() 会导致所有排队的动画的CSS属性跳转到他们的最终值。**
```javascript
$(function(){
	$("#start").click(function(){
		$("div").animate({
			width:1000
		},3000);
	});
	$("#start").click(function(){
		$("div").animate({
			height:500
		},3000);
	});
	$("#stop").click(function(){
		$("div").stop();
		// $("div").stop(true,true);//清空队列，立即完成当前动画
		// $("div").stop(false,false);//停止当前正在执行的动画，后续队列中的动画继续执行。与不传参数一致
		// $("div").stop(false,true);//立即完成当前动画，后续队列中的动画继续执行。
		// $("div").stop(true,false);//stop(true)停止当前正在执行的动画，后续队列中的动画不继续执行
	});
	$("#finish").click(function(){
		$("div").finish();//两个动画直接完成
	});
});
```
* .queue()
显示或操作匹配的元素上**已经执行**的函数列队。
1. 显示队列长度
`console.log($("div").queue("fx").length);`
2. 通过设定队列数组来删除动画队列
` $("div").queue("fx",[]);$("div").stop();`相当于`$("div").stop(true,false);`
3. 插入一个自定义函数
```javascript
$("div").queue(function(){
	//只是插入的话，动画执行到这里就会停止
	$(this).addClass('blue');
	// 如果函数执行后要继续队列，则执行 $(this).dequeue();
	$(this).dequeue();
});
```

* .delay()
设置一个延时来推迟执行队列中后续的项。
`$('#foo').slideUp(300).delay(800).fadeIn(400);`在.slideUp() 和 .fadeIn()之间延时800毫秒。

* .clearQueue() 
清空对象上尚未执行的所有队列
如果不带参数，则默认清空的是动画队列。这跟stop(true)类似，但stop()只能清空动画队列，而这个可以清空所有通过 .queue() 创建的队列。











