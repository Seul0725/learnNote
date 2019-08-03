*2019/07/19 学习JavaScript的第十天*


**默认情况下，使用childNodes查看body的子节点列表时，会把body外的html结束标签格式也包含在里面。
即使里面div后面紧跟着body，就算没有空格和回车换行，但只要body结束标签与html有回车或者换行，
body的childNodes也会算进去。
而div与body有空格或者回车时，这个影响就会自动消除。**


* 三种类数组对象 NodeList HTMLCollection NamedNodeMap
NodeList存在于childNodes中；document.querySelectorAll()的返回值
HTMLCollection：文档子节点：images,forms,links;以及getElementsByTagName()、getElementsByName()、getElementsByClassName()中;Element的children属性。
NamedNodeMap存在于元素的attributes属性中。


###### 浏览器兼容性问题
1. IE8及以下不会把回车换行空格等看成节点，但是其他浏览器会。
2. 谷歌浏览器对JavaScript代码执行顺序有差，火狐不会。
3. 谷歌和火狐对于childNodes的解析，如果appendChild()写在打印语句后面，在没有使用appendChild()也会返回增加之后的，但只限于展开的时候。
4. 事件对象 event=event||window.event
5. 事件目标 target=event.target||event.srcElement
6. 取消事件冒泡 event.stopPropogation?event.stopPropogation():(event.cancelBubble=true)
7. 取消默认行为 event.preventDefault?event.preventDefault():(event.returnValue=false)
8. getElementsByClassName不支持IE8及以下浏览器
在IE8中可以用document.querySelector来代替getElementsByClassName，但是该方法只会返回满足条件的第一个元素
`var div = document.querySelector('.box1 div');
var box1 = document.querySelector('.box1');`
document.querySelectorAll把符合条件的元素封装到NodeList类数组对象中返回
`var box1 = document.querySelectorAll('.box1');`
9. 事件绑定非IE`div.addEventListener('click',callBack,false);`
事件绑定IE`div.attachEvent('onclick',callBack);`
事件解绑非IE`div.removeEventListener('click',callBack,false);`
事件解绑IE`div.detachEvent('onclick',callBack);`



### Document类型

* 文档子节点--可以继承Node中的所有属性和方法

##### 文档子节点的属性：
**document.all代表页面中所有的元素
`document.getElementsByTagName('*')`用法与document.all一样**
1. documentElement 始终指向HTML页面中的html元素
`console.log(document.documentElement);//整个html标签`
2. body 直接指向body元素
3. title 获取文档的标题
`console.log(document.title);//标题名`
4. links 获取文档中所有**带href属性**的a元素，返回HTMLColleaction类数组对象
`console.log(document.links[0]);`
5. forms 获取所有的form对象，返回HTMLCollection类数组对象
`console.log(document.forms[0]);`
6. images 获取所有的img对象，返回HTMLCollection类数组对象
`console.log(document.images[0]);`
7. doctype 获取`<!DOCTYPE>`声明，各浏览器支持不一致
`console.log(document.doctype);//火狐<!DOCTYPE html> 谷歌<!doctype html>`
8. URL 获取完整的网页地址
`console.log(document.URL);//file:///C:/Users/JS/JavaScript/a.html`
9. domain 获取当前文档的服务器域名
`console.log(document.domain);//www.runoob.com`
10. referrer 取得链接到当前页面的那个页面的URL，即来源页面的URL。如果当前文档不是通过超级链接访问的，则为 null。
`console.log(document.referrer);//http://www.w3school.com.cn/tiy/t.asp?f=hdom_document_referrer`


### Element类型

##### HTML元素的属性
1. id 元素的id值，元素在文档中的唯一标识符
2. title 关于元素的附加说明信息
3. className 获取元素的class属性
4. src img元素具有的属性
5. alt img元素具有的属性
6. lang 元素内容的语言代码，一般用在html标签中
7. dir 规定元素内容的文本方向。ltr左到右，rtl右到左

**根据HTML5规范，自定义属性应该加上data-前缀，以便验证**
`<div data-flag='1001'>自定义属性</div>`
##### getAttribute()  获取自定义属性，参数为元素的属性名
**一般只用来访问自定义属性，它只会返回属性对应的属性值的文本内容**
**style通过getAttribute()方法获得的是CSS文本，通过属性访问返回的是一个对象**
**onclick类似的事件处理程序 通过getAttribute()方法获得的是代码字符串，通过属性访问返回的是一个函数**

##### 设置属性
1. 通过属性直接设置属性值
2. setAttribute() 第一个参数为属性名，第二个参数为属性值，如果存在则替换。
**通过.设置的属性值，只能通过.访问，通过setAttribute()设置的属性值，只能通过getAttribute()访问**
```javascript
div.className = 'newClass';
div.setAttribute('id', 'newOne');
div.setAttribute('date-flag',1002);
```

##### 移除属性
removeAttribute() `div.removeAttribute('title');`

##### attributes属性 **属性节点的nodeType为2**
包含一个NamedNodeMap类数组对象，用于存放元素的属性
* attributes的方法
1. getNamedItem('attr') 返回nodeName为attr的属性节点
2. removeNamedItem('attr') 从列表中删除nodeName为attr的属性节点
3. setNamedItem(node) 将node节点添加到列表中，如果节点已经存在，它将被替换，并返回替换节点的值，否则将返回 null。
4. item(index) 返回指定索引位置的属性节点
```javascript
console.log(div.attributes.item(1));
console.log(div.attributes.getNamedItem('title'));
console.log(div.attributes.removeNamedItem('title'));
var name = document.createAttribute('name');
name.nodeValue = 'newName';
console.log(div.attributes.setNamedItem(name));//null
console.log(div.attributes);
var id = div.attributes.getNamedItem('id');
id.nodeValue = '110';
console.log(div.attributes.setNamedItem(id));//id="110"
```

##### 创建属性
`document.createAttribute('attr_name')`

##### 创建元素
`document.createElement('attr')`


#### Element中的属性
1. children 返回HTMLCollection类数组对象，包含有该元素的子元素节点
2. firstElementChild	children中的第一个子元素
3. lastElementChild		children中的最后一个子元素
4. previousElementSibling	当前元素的上一个兄弟元素
5. nextElementSibling		当前元素的下一个兄弟元素
6. childElementCount	相当于children.length，返回子元素的数量
```javascript
var body = document.body;
console.log(body.childElementCount===body.children.length);//true
```

##### 元素内容

**使用以下属性获取的文本均不能使用Text类型的方法**

1. innerHTML 返回元素内容
2. innerText 元素内部的文本，去除回车和换行
3. textContent 元素内部的文本，不去除空格和回车
**使用反引号放HTML标签内容**
```javascript
div.innerHTML = `
				<div>
					<span>hello</span>
				</div>
			`;
```

### Text类型 ---- 文本节点，包括空格和回车换行
* 文本节点的属性和方法
1. length 文本长度
2. appendData(text) 追加文本
3. deleteData(index,count) 删除文本，第一个参数为开始位置索引，第二个参数为删除数量
4. insertData(index,text) 插入文本
5. replaceData(index,count,text) 替换文本
6. splitText(index) 从index位置将当前文本节点分成两个文本节点
7. substringData(index,count) 从index位置提取count数量的文本，并将提取的文本返回。对于splitText截取后的，只会对第一部分进行提取。
8. document.createTextNode() 创建文本节点
```javascript
var div = document.body.firstChild;
var text = div.firstChild;
console.log(text.length);
text.appendData('的爱');
text.deleteData(6,1);
text.insertData(7,'的人');
text.replaceData(6,3,'想要的');
text.splitText(5);
div.normalize();
console.log(text.substringData(5,3));
var newText = document.createTextNode('新文本');
div.appendChild(newText);
```

### Comment类型
```javascript
var comment = document.body.childNodes[1];
console.log(comment);
console.log(comment.nodeValue);
console.log(comment.nodeName);
console.log(comment.nodeType);
```

### 事件
Javascript与HTML之间的交互是通过事件实现的。
**事件就是文档或浏览器窗口中发生的一些特定的交互瞬间。**

##### 事件三要素
1. 事件目标(event target)
发生的事件与之相关联或与之相关的对象
2. 事件处理程序(event handler)
处理或响应事件的函数
3. 事件对象(event object)
与特定事件相关，且包含有该事件详细信息的对象
如`div.onclick=function(event){}`
事件目标为div，事件处理程序为funtion(){}，事件对象为event

###### 事件event的属性
* event的兼容问题
IE8及以下，不支持event，需要改成window.event
解决办法：event=event||window.event 对所有浏览器都支持
1).target 事件目标，触发事件执行的元素 target=event.target||event.srcElement
2).currentTarget 当前正在执行事件处理程序的元素
`event.currentTarget===this`

##### 事件流 -- 从页面中接受事件的顺序
1. 事件冒泡(IE事件流) -- 从内到外
事件开始由最具体的元素接收，然后逐级向上传播到不具体的节点
* 阻止冒泡：event.stopPropogation()用于IE8以上；event.cancelBubble=true;用于IE8及以下
```javascript
if(event.stopPropagation){
	event.stopPropagation();
}else {
	event.cancelBubble = true;
}	
```
2. 事件捕获(Netscape事件流) --从外到内
不太具体的节点更早接收事件，具体的节点到最后接收事件。
3. DOM事件流
“DOM2级事件”规定了事件流包括三个阶段：事件捕获阶段，处理目标阶段和事件冒泡阶段。

##### 阻止默认行为
形如a标签的默认跳转，提交submit按钮的默认提交等成为默认行为。
IE8以上：event.preventDefault()
IE8及以下：event.returnValue=false;
```javascript
if(event.preventDefault){
	event.preventDefault();
}else {
	event.returnValue = false;
}
```
##### 事件委派(事件代理)
**将事件统一绑定给共同的祖先元素**
```javascript
var lis = document.getElementsByTagName('li');
lis = Array.prototype.slice.call(lis,0);
var ul = document.getElementsByTagName('ul')[0];
ul.onclick = function(event){
	if(event.target.nodeName==='LI'){
		lis.forEach(function(item){
			item.style.backgroundColor = '#fff';
		});
		event.target.style.backgroundColor = 'red';
	}
}
```

### 事件处理程序
响应某个事件的函数为事件处理程序，事件处理程序以"on"开头(onclick,onload)
* HTML事件处理程序
```javascript
<input type="button" value="clickMe" onclick = "alert('is clicked')">
<input type="button" value="clickMe" onclick = "showMsg()">
<script type="text/javascript">
	function showMsg(){
	alert("is clicked");
	}
</script>
```
* DOM0级事件处理程序
通过Javascript指定事件处理程序的传统方式，将一个函数赋值给一个事件处理程序属性。
```javascript
var btn = document.getElementById("btn");
btn.onclick = function(){
alert('cliked');
}
btn.onclick = null; //删除事件处理程序
```
* DOM2级事件处理程序

