*2019/07/24 学习JavaScript的第十二天*

### BOM
##### 间歇调用和超时调用(this指向window)
* 超时调用
setTimeout(); 只执行一次，返回一个数值id
参数：1.匿名函数内放要执行的代码；2.时间，单位毫秒
使用clearTimeout(id);通过id值取消指定的超时调用

* 间歇调用
setInterval(); 重复执行，返回一个数值id
参数：1.匿名函数内放要执行的代码；2.时间，单位毫秒
使用clearInterval(id);通过id值取消指定的超时调用

* 网页动态时间
```javascript
window.onload = function(){
			var span = document.getElementsByTagName('span')[0];
			var dateStr = formatDate();
			//将时间放置到span内
			span.innerText = dateStr;
			//每隔1秒再放置一次最新的时间
			setInterval(function(){
				span.innerText = formatDate();
			}, 1000);
			//格式化年月日时分秒
			function formatDate(){
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth()+1;
				month = month<10?'0'+month:month;
				var day = date.getDate();
				day = day<10?'0'+day:day;
				var hours = date.getHours();
				hours = hours<10?'0'+hours:hours;
				var minutes = date.getMinutes();
				minutes = minutes<10?'0'+minutes:minutes;
				var seconds = date.getSeconds();
				seconds = seconds<10?'0'+seconds:seconds;
				return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
			}
		}
```

##### 系统对话框
* alert() 警告框、弹出框
* confirm() 确认对话框，返回布尔值，点击确定返回true，取消返回false
* prompt() 会话框，点击确认返回输入的值，点击取消返回null

##### location 当前浏览器的地址栏信息
**该对象即是document的属性也是window的属性**
`console.log(window.location == document.location);//true`
属性：
1. host 返回服务器名称和端口号 `'127.0.0.1:8080'`
2. hostname返回不带端口号的服务器名称 `'127.0.0.1'`
3. href 返回当前加载页面的完整URL `"http://127.0.0.1:8080/4-location.html"`
4. pathname 返回URL的目录和文件名 `"/4-location.html"`
5. port 返回URL中指定的端口号 `"8080"`
6. protocol 返回页面使用的协议 `"http:"`
7. search 返回URL的查询字符串，这个字符串以?开头
方法：
1. assign() 传递一个url参数，打开新url，并在浏览记录中生成一条记录。
`location.assign('https://www.baidu.com');`
2. replace() 传递一个url参数，打开新url，但是不会在浏览记录中生成新记录。
3. reload() 
重新加载当前页面，参数为布尔值，默认false表示从缓存中重新加载，true会强制清空缓存刷新页面，即从服务器中重新加载。

* 跳转到指定URL，以下四种方式：
1. `location='https://www.baidu.com';`
2. `location.href='https://www.baidu.com';`
3. `loaction.assign('https://www.baidu.com');`
4. `window.open('https://www.baidu.com');` window可以省略

##### history 该对象保存着用户上网的历史记录
**但是只能操作浏览器向前向后翻页**
1. length 返回历史列表中的网址数
注意：IE9和Opera从0开始，而IE10-11、Firefox、Chrome和Safari从1开始。
2. back() 加载 history 列表中的前一个URL
3. forward() 加载 history 列表中的下一个URL
4. go() 加载 history列表中的某个具体页面
负数表示向后跳转，正数表示向前跳转 `history.go(1);//向前跳转`


### AJAX 
是Asynchronous JavaScript and XML的缩写，异步的JavaScript和XML.
Ajax描述了一种主要使用脚本操作HTTP的Web应用架构，
Ajax应用的主要特点是使用脚本操纵HTTP和Web服务器进行数据交换，不会导致页面重载。
**通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。**

同步：提交请求->等待服务器处理->处理完毕返回 这个期间客户端浏览器不能干任何事
异步: 请求通过事件触发->服务器处理（这是浏览器仍然可以作其他事情）->处理完毕

* XMLHttpRequest对象
**XMLHttpRequest 是 AJAX 的基础。**
**XMLHttpRequest 用于在后台与服务器交换数据。**这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。

* 创建XMLHttpRequest对象
`var xmlhttp = new XMLHttpRequest();`

* 向服务器发送请求，使用open()和send()方法
1. open(method,url,async) 规定请求的类型，url以及是否异步处理请求
method:GET或POST
url:文件在服务器上的位置，跨域(服务器)请求会报错。
async:true(异步)或false(同步)
2. send(string) 将请求发送到服务器
**string：仅用于 POST 请求**
请求主体内容，如果没有，为null,或者省略。

* 与 POST 相比，GET 更简单也更快，以下几种情况使用POST请求：
1. 无法使用缓存文件（更新服务器上的文件或数据库） 
2. 向服务器发送大量数据（POST 没有数据量限制） 
3. 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠
* 设置请求头setRequestHeader(header,value)
向请求添加 HTTP 头。
参数：
header: 规定头的名称 
value: 规定头的值
当使用POST方式提交这种顺序的表单时，必须设置"Content-Type"请求头为"application/x-www-form-urlencoded"
`xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");`
```javascript
//使用POST方法发送纯文本给服务器
function postMessage(url,msg){
	var request = new XMLHttpRequest();
	request.open("POST",url);
	request.setRequestHeader("Content-type","text/plain;charset=UTF-8");
	request.send(msg);
}
```
* 服务器响应
1. responseText 获得字符串形式的响应数据。 
2. responseXML 获得 XML 形式的响应数据。 
* onreadystatechange 事件
每当 readyState 改变时，就会触发 onreadystatechange 事件。
readyState返回HTTP请求状态：
	0: 请求未初始化 
	1: 服务器连接已建立 
	2: 请求已接收 
	3: 请求处理中 
	4: 请求已完成，且响应已就绪
statusHTTP响应码：
	200	OK
	404	Not Found
	403 Forbidden	
	500 后台代码异常
```javascript
//获取HTTP响应
function getText(url,callback){
	var request = new XMLHttpRequest();
	request.open("GET",url);
	request.onreadystatechange = function(){
		//如果请求完成，并且响应成功
		if(request.readyState === 4 && request.status ===200){
			var type = request.getResponseHeader("Content-type");
			if(type.match(/^text/)){	//如果响应是文本
				callback(request.responseText);//执行回调函数
			}
		}
	};
	request.send(null);
}
```
* 响应解码
	1.MIME类型为text/plain,text/html,text/css 文本类型时，可以使用responseText属性解析
	2.MIME类型为XML文档类型时，使用responseXML属性解析
	3.如果服务器发送对象，数组这样的结构化数据作为其响应，它应该传输JSON编码的字符串数据。通过responseText接受到它，可以把它传递给JSON.parse()方法来解析。


##### 用于HTTP请求的编码对象
```javascript
function encodeFormData(data){
	if(!data){
		return "";
	}
	var pairs = [];
	for(var name in data){
		if(!data.hasOwnProperty(name)){
			continue;
		}
		if(typeof data[name] == "function"){
			continue;
		}
		var value = data[name].toString();
		name = encodeURIComponent(name.replace("%20","+"));//编码名字
		value = encodeURIComponent(value.replace("%20","+"));//编码值
		pairs.push(name+"="+value);
	}
	return pairs.join('&');
}
````

