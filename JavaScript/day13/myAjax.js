//get无参
//get有参 拼接在URL后，查询字符串格式
//post无参
//post有参 表单格式数据
//handle当内部的异步执行成功的回调函数，将后台响应返回的数据提交给handle
function myAjax(method,url,param,handle,handle2){
	//后台服务器的地址及端口号
	var baseURL = 'http://134.175.154.93:8099';
	var http = new XMLHttpRequest();
	//处理get有参的情况
	if(method=='GET'&&param){
		url += '?'+encodeFormData(param);
	}
	http.open(method,baseURL+url);
	http.onreadystatechange = function(){
		if(http.readyState==4&&http.status==200){
			console.log('访问成功');
			handle(JSON.parse(http.responseText));
		}else if(http.status!=200){
			handle2(http.responseText);
		}
	}
	//post有参
	if(method=='POST'&&param){
		//设置Content-Type为表单格式
		http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
		//发送表单格式数据
		http.send(encodeFormData(param));
	}else {
		http.send();
	}
	
}
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