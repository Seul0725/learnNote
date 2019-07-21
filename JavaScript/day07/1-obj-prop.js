//对象的属性的特性
var obj = {
	name:'zs',
	age:12
};
console.log(obj);//{name:'zs',age:12} 键值对key-value
//获取属性的描述信息
console.log(Object.getOwnPropertyDescriptor(obj,'name'));
//修改属性的描述信息/修改属性的默认特性
Object.defineProperty(obj,'name',{
	//设置可枚举性
	//enumerable:false,
	//设置是否可修改值
	//writable:false,
	//设置属性的值
	value:'terry',
	//设置是否可配置---是否可使用delete删除，是否可重新定义
	configurable:false
});
/*Object.defineProperty(obj,'name',{
	enumerable:false
});
*/
//obj.name = 'tom';
//delete obj.name;
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj,'name'));










