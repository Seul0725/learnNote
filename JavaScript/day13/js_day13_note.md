*2019/07/25 学习JavaScript的第13天*

##### AJAX的封装
```javascript
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
```

##### AJAX封装的测试

```javascript
//1.查找
findAllCategory();
function findAllCategory(){
	myAJAX('GET','/manager/category/findAllCategory',null,function(res){
		console.log(res);
	},function(error){
		console.log(error);
	});
}
//2.删除单个
// deleteCategoryById({id:3001});
function deleteCategoryById(obj){
	myAJAX('GET','/manager/category/deleteCategoryById',obj,function(res){
		console.log(res);
		findAllCategory();
	},function(error){console.log(error)});
}
//3.批量删除
// batchDeleteCatagory({ids:[3026,3027].join()});
function batchDeleteCatagory(obj){
	myAJAX('POST','/manager/category/batchDeleteCategory',obj,function(res){
		console.log(res);
		findAllCategory();
	},function(error){console.log(error);});
}
//4.批量增加
var obj = {
	name:'wpTest',
	comment:'wp',
	no:1
}
// var arr = [];
for(var i=0;i<10;i++){
	var temp = JSON.parse(JSON.stringify(obj));
	temp.name += i;
	// arr.push(temp);
	saveOrUpdateCategory(temp);
}
/*arr.forEach(function(item){
	saveOrUpdateCategory(item);
});*/
function saveOrUpdateCategory(obj){
	myAJAX('POST','/manager/category/saveOrUpdateCategory',obj,function(res){
		console.log(res);
		findAllCategory();
	},function(error){console.log(error);});
}
```

##### AJAX表格的增删改查数据交互

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>表格</title>
	<script src="myNewAJAX.js"></script>
	<script>
		window.onload = function(){
			var tbody = document.getElementsByTagName('tbody')[0];
			var btnsDiv = document.getElementById('btnsDiv');
			findAllCategory();
			function findAllCategory(){
				myAJAX('GET','/manager/category/findAllCategory',null,function(res){
					var str = '';
					// console.log(res.data);
					res.data.forEach(function(item){
						str += `<tr>
								<td><input type="checkbox" value="`+item.id+`"/></td>
								<td>`+item.name+`</td>
								<td>`+item.comment+`</td>
								<td><button data-id="`+item.id+`">删除</button></td>
							</tr>`;
					});
					tbody.innerHTML = str;
				},function(error){
					console.log(error);
				});
			}
			function deleteCategoryById(obj){
				myAJAX('GET','/manager/category/deleteCategoryById',obj,function(res){
					findAllCategory();
				},function(error){console.log(error)});
			}
			tbody.onclick = function(event){
				var target = event.target;
				if(target.nodeName=='BUTTON'){
					var btnId = target.getAttribute('data-id');
					deleteCategoryById({id:btnId});
				}
			}
			function batchDeleteCatagory(obj){
				myAJAX('POST','/manager/category/batchDeleteCategory',obj,function(res){
					findAllCategory();
				},function(error){console.log(error);});
			}
			function saveOrUpdateCategory(obj){
				myAJAX('POST','/manager/category/saveOrUpdateCategory',obj,function(res){
					findAllCategory();
				},function(error){
					console.log(error);
				});
			}
			btnsDiv.onclick = function(event){
				var target = event.target; 
				var inputs = document.getElementsByTagName('input');
				inputs = Array.prototype.slice.call(inputs);
				if(target.innerText=='全选'){
					inputs.forEach(function(item){
						item.checked?item.checked=false:item.checked=true;
					});
				}
				if(target.innerText=='新增'){
					var name = prompt('请输入您想添加的项目名称：');
					var comment = prompt('请输入您想添加的项目备注：');
					var number = prompt('请输入您想添加的项目序号：');
					saveOrUpdateCategory({
						name:name,
						comment:comment,
						no:number
					});
				}
				if(target.innerText=='批量删除'){
					var btnId = inputs.filter(function(item){
						return item.checked;
					}).map(function(item){
						return item.value;
					});
					batchDeleteCatagory({ids:btnId});
				}
			}

		}
	</script>
</head>
<body>
	<div id='btnsDiv'>
		<button>全选</button>
		<button>新增</button>
		<button>批量删除</button>
	</div>
	<table>
		<thead>
			<tr>
				<th>编号</th>
				<th>名称</th>
				<th>备注</th>
				<th>操作</th>
			</tr>	
		</thead>
		<tbody>
		</tbody>
	</table>
</body>
</html>
```
