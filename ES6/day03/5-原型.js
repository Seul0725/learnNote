let obj = {name:'tom'};
console.log(obj.__proto__===Object.prototype);//true
console.log(Object.getPrototypeOf(obj)===Object.prototype);//true

let objPro = {
	toString(){
		return 'hello';
	}
}
Object.setPrototypeOf(obj,objPro);
console.log(Object.setPrototypeOf(obj,objPro));
console.log('-----');
console.log(Object.getPrototypeOf(obj)===objPro);
console.log(obj.valueOf());//不会中断对Object原型对象方法的访问