function myAJAX(method,url,param,handle,handle2){
	var xmlhttp = new XMLHttpRequest();
	var baseURL = 'http://134.175.154.93:8099';
	if(method=='GET'&&param){
		url += '?'+encodeFormData(param);
	}
	xmlhttp.open(method,baseURL+url);
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			handle(JSON.parse(xmlhttp.responseText));
		}else if(xmlhttp.status!=200){
			handle2(xmlhttp.responseText);
		}
	}
	if(method=='POST'&&param){
		xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
		xmlhttp.send(encodeFormData(param));
	}else {
		xmlhttp.send();	
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