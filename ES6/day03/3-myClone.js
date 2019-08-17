let obj = {};
let obj1 = {
	name:'zs',
	age:18,
	friends:[],
	count:{
		time:'2019-09-01'
	}
}
let obj2 = {
	name:'ls',
	gender:'male',
	sayName:function(){}
	
}
let obj3 = {
	color:'red',
	weight:'100'
}

function myClone(target,...tail){
	tail.forEach(function(item){
		for(let key in item){
			if(Array.isArray(item[key])||(item[key].constructor===Object)){
				target[key] = JSON.parse(JSON.stringify(item[key]));
			}
			// if(item[key] instanceof Object){}
			/*if((typeof item[key]==='object')&&item[key]!=null){
				target[key] = JSON.parse(JSON.stringify(item[key]));
			}*/
			else {
				target[key] = item[key];
			}
		}
	});
	return target;
}
myClone(obj,obj1,obj2);
console.log(obj);
console.log(obj.sayName===obj2.sayName);
console.log(obj.friends===obj1.friends);
console.log(obj.count===obj1.count);
