*2019/07/26 学习jQuery的第一天*

### jQuery是一个优秀的JavaScript库

* jQuery的特性：
1. HTML元素的获取和操作
2. CSS的操作
3. HTML事件函数
4. JavaScript的特效动画
5. HTMLDOM的遍历与修改
6. AJAX
7. Utilities

* jQuery的优势及特点：
1. 轻量级
2. 强大的选择器
3. 出色的DOM操作的封装
4. 可靠地事件处理机制
5. 完善的Ajax
6. 不污染顶级变量
7. 出色的浏览器兼容性
8. 链式操作方式
9. 隐式迭代
10. 行为层与结构层的分离
11. 丰富的插件支持
12. 完善的文档
13. 开源

##### jQuery入口函数的种类：

```javascript
//第一种
$(document).ready(function(){});
//第二种
jQuery(document).ready(function(){});
//第三种
$(function(){});
//第四种
jQuery(function(){});
```

##### jQuery的冲突问题：

如果引入的其他库让`$`失效，需要释放`$`的使用权
```javascript
jQuery.noConflict();
jQuery(function(){
	alert(1);
});
//或者指定一个变量代替$
var no = jQuery.noConflict();
no(function(){
	alert(1);
});
```

##### jQuery函数的参数类型

1. 匿名函数
`$(function(){ });`当文档结构加载完毕之后jQuery函数调用匿名函数。
2. 选择器(字符串)
jQuery函数通过该选择器获取对应的DOM，然后将这些DOM封装到一个jQuery对象中并返回。
3. HTML字符串
`$("<div class='one'>one<div>");` jQuery函数会根据传入的文本创建好HTML元素并封装成jQuery对象返回。
4. DOM节点
`$(document.body)` jQuery函数将该DOM节点封装成jQuery对象并返回。

##### DOM对象与jQuery对象的转换

1. DOM对象->jQuery对象
`var $dom = $(dom);` dom为一个DOM对象，$dom为jQuery对象
2. jQuery对象->DOM对象
`var dom = $(".one")[0]`

***
* 将checkbox选择的value值保存到数组中：
```javascript
$(function(){	
	$("form :checkbox").click(function(event){
		var arr = [];	
		var $result = $("form :checkbox:checked");
		// console.log($result);
		//1.获取内部DOM，获取DOM对应的value属性值
		for(var i=0;i<$result.length;i++){
			arr.push($result[i].value);
		}
		console.log(arr);
		//2.将result转成数组，再映射出value属性
		/*var result = Array.prototype.slice.call($result);
		arr = result.map(function(item){
			return item.value;
		});*/
		// console.log(arr);
		//3.可以使用jQuery对象提供的map方法，将value映射出来
		/*$arr = $result.map(function(index,item){
			// return item.value;
			return $(item).val();
		});
		arr = Array.prototype.slice.call($arr);*/
		// console.log(arr);
	});
});
```

* jQuery计算1-100的累加
```javascript
//计算1-100的累加
var arr = [];
for(var i=1;i<=100;i++){
	arr.push(i);
}
var $arr = $(arr);
var num = 0;
$arr.each(function(index,item){
	num += item;
});
console.log(num);
```

***

### 选择器

##### 基本选择器

1. 普遍选择器 `$("*")`
2. 标签选择器 `$("div")`
3. ID选择器 `$("#one")`
4. 类选择器 `$(".one")`
5. 组合选择器 多个选择器使用逗号分隔 `$("div,.one")`
6. 嵌套选择器 多个选择器共同使用 `$("div.one")`

##### 层次选择器

1. 后代选择器 `$(".outer .inner")`
2. 子代选择器 `$(".outer>.inner")`或者`$(".outer>`代表选择的所有子代

##### 兄弟选择器

1. 下一个兄弟选择器 `$(".one+.two")`或者`$(".one+")`
2. 之后所有兄弟选择器 
`$(".one~.two")`表示之后所有兄弟中类为two的元素
`$(".one~")`表示之后所有的兄弟元素

### 过滤器

jQuery的过滤器必须用在jQuery选择器后，表示对通过前面的jQuery选择器选择到的内容的过滤。
是建立在前面选择器已经选择到元素的基础之上的。

##### 基本过滤器

1. selector:first 获取所有已找到的元素中的第一个元素
2. selector:last 获取所有已找到的元素中最后一个元素
3. selector:even 获取所有已找到的元素中索引为偶数的元素(从0开始)
4. selector:odd 获取所有已找到的元素中索引为奇数的元素(从0开始)
5. selector:eq(index) 获取所有已找到的元素中索引等于index的元素
6. selector:lt(index) 获取所有已找到的元素中索引小于index的元素
7. selector:gt(index) 获取所有已找到的元素中索引大于index的元素
8. selector:not(selector2) 获取所有已找到的元素中除了selector2的元素
9. selector:header 获取所有已选择到的元素中的标题元素(`h1~h6`)

##### 内容过滤器

1. selector:contains(text) 获取所有已选择到的元素中文本包含text的元素
2. selector:empty 获取所有已选择到的元素中的空元素（没有子节点）
3. selector:parent 获取所有已选择到的元素中非空元素（有子节点）
4. selector:has(selector2) 获取所有已选择到的元素中子元素为selector2的元素
`$(".outer>:has('span')")`

##### 可见性过滤器

* 不占据屏幕空间的
1. `display:none`
2. `<input type="hidden" />`

* 占据屏幕空间的
1. `visibility:hidden;`
2. `opacity:0;`

* 使用：
1. selector:hidden 选择所有不占据屏幕空间的元素
2. selector:visible 选择所有占据屏幕空间的元素

##### 属性过滤器

1. `selector[attr]` 获取所有已选择到的元素中具有属性attr的元素
2. `selector[attr=value]` 获取所有已选择到的元素中具有属性attr，并且属性值为value的元素
3. `selector[attr^=v]` 获取所有已选择到的元素中具有属性attr，并且属性值以v开头的元素
4. `selector[attr$=v]` 获取所有已选择到的元素中具有属性attr，并且属性值以v结尾的元素
5. `selector[attr*=v]` 获取所有已选择到的元素中具有属性attr，并且属性值以v结尾的元素
6. `selector[attr!=value]` 获取所有已选择到的元素中不具有属性attr，并且属性值不为value的元素

##### 后代选择器
选择器一定要先选择到后代元素，是对选择到的后代元素的过滤
1. `selector:first-child`
获取每个selector元素中第一个子元素（每个父元素的第一个子元素）

**与`selector:first`的区别，获取所有selector元素的子元素中的第一个（只有一个）**

2. `selector:last-child`
获取每个selector元素中最后一个子元素（每个父元素的最后一个子元素）
**注意与`selector:last`的区别**

3. `selector:nth-child(index)`
获取每个selector元素中索引为index的子元素**【注意】index从1开始**

4. `selector:first-of-type`
获取每个selector元素中每种类型子元素中的第一个

5. `selector:last-of-type`
获取每个selector元素中每种类型子元素中的最后一个

6. `selector:only-child`
获取每个selector元素中独生子子元素

##### 表单过滤器
主要是对选择的表单元素进行过滤`HTML表单元素(<button>,<input>,<optgroup>,<option>,<select>,和<textarea>)`

1. `:enabled` 选取所有可用元素
2. `:disabled` 选取所有不可用元素
3. `:checked` 选取所有被选中的元素，用于复选框和单选框
4. `:selected` 选取所有被选中的选项元素，该选择器只适用于`<option>`
5. `:focus` 选择当前获取焦点的元素
6. `:input` 选取所有的`<input><textarea><select><button>`元素。
**注意：$(":input")是选择可以让用户输入的标签元素,而$("input')是选择名字为input的标签元素**
7. `:text` 选取所有的单行文本框
8. `:password` 选取所有的密码框
9. `:radio` 选取所有的单选框
10. `:checkbox`	选取所有的多选框		
11.	`:submit`	选取所有的提交按钮      		
12.	`:image`	选取所有input类型为image的表单元素
13.	`:reset`	选取所有input类型为reset的表单元素      	
14.	`:button`	选取所有input类型为button的表单元素	
15.	`:file`		选取所有input类型为file的表单元素

***

### CSS样式操作

1. 逐个设置
`$("div").css("width","100px");`

2. 链式设置 超过3步建议分开
`$("div").css("width","100px").css("background","red");`

3. 批量设置
`$("div").css({
	width:"100px",
	background:"red"
});`

4. 获取样式
`$("div").css("width");`

***

### jQuery中的DOM操作

##### 查找节点

通过jQuery选择器来完成。

##### 创建节点

`var newTd = $("<td>文本内容</td>")`

##### 插入节点

1. append() 在每个匹配的元素内部的末尾添加一个子元素，如果将页面上的元素插入到另一个元素内部，原来的元素会被移除。
`var $result = $(".one").append($(".two"));`
2. appendTo() 颠倒了$A.append($B)的效果
3. prepend() 在每个匹配的元素内部的顶部添加一个子元素
`var $result = $(".one").prepend($(".two"));`
4. prependTo() 颠倒了$A.prepend($B)的效果
5. after() 作为其兄弟节点插在每个匹配元素的后面。
`var $result = $(".one").after($newDiv);`
6. insertAfter() 颠倒了$(A).after($B)的效果
7. before() 作为其兄弟节点插在每个匹配元素的前面。
`var $result = $(".one").before($(".two"));`
8. insertBefore() 颠倒了$(A).before($B)的效果

##### 删除节点

1. remove() 
删除被选元素及其子元素，包括其绑定的事件及与该元素相关的jQuery数据。返回值是一个指向已经被删除的节点的引用。
**()中可接受一个参数，允许对被删元素进行过滤**
`$(".one").remove();`
`$("div").remove(".two");`
2. detach()
和.remove()类似，但是保存所有jQuery数据和被移走的元	素相关联事件。
3. empty()
从被选元素中删除子元素 

##### 复制节点

1. clone() 
返回的是一个节点的引用，参数默认为false，为浅复制，复制元素自身及子节点；参数为true时表示深复制，复制元素的自身及子节点，包括事件。 
`var $clone = $(".one").clone();`
**与cloneNode的区别：JS原生的cloneNode()深复制代表复制子节点，浅复制不复制子节点，跟事件没关系。**

##### 替换节点

1. `repalceWith()` 用提供的内容替换集合中所有匹配的元素并且返回被删除元素的集合。
`$(".one").replaceWith($("<div>hello</div>"));`
2. `replaceAll()` 颠倒了replaceWith()操作效果
`$("<div>hello</div>").replaceAll($(".one"));`

##### 包裹节点

1. wrap() 
在每个匹配的元素外层包上一个html元素
`$(".inner").wrap($("<div class='green'></div>"));`
2. wrapAll() 
将所有匹配的元素用一个元素来包裹，在所有匹配元素外面包一层HTML结构。
`$(".inner").wrapAll($("<div class='green'></div>"));`
3. wrapInner()
每个匹配元素里面内容(子元素)都会被这种结构包裹。
`$(".inner").wrapInner($("<div class='green'></div>"));`

##### 节点遍历

1. childern() 用于取得匹配元素的子元素集合（只考虑子元素而不考虑任何后代元素。
**可以传入参数进行过滤**
2. find() 查找当前元素和参数所匹配的所有的后代元素	
3. next() 取得匹配的元素集合中每一个元素紧邻的后面兄弟元素。
4. nextAll() 查找当前元素之后所有的兄弟元素。
5. prev() 取得匹配元素前面紧邻的兄弟元素
6. prevAll() 查找当前元素之前所有的同辈元素
7. siblings() 取得匹配元素前后所有的兄弟元素
8. closest() 取得和参数匹配的最近的元素，如果匹配不上继续向上查找父元素
9. filter() 把当前所选择的所有元素再进行筛选过滤
10. parent() 取得匹配元素集合中，每个元素的父元素
11. parents() 获得集合中每个匹配元素的祖先元素

