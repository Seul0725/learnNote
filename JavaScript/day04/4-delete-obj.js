var obj = {
	name:'zhangsan',
	age:12,
	gender:'男',
	info:'',
	hobby:null,
	address:''
};
console.log(obj);
//删除对象中的属性
//delete obj.address;
for(var key in obj){
	//如果obj[key]转换为boolean为false
	if(!obj[key]){
		delete obj[key];
	}
}
console.log(obj);










