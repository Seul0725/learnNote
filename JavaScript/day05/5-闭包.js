//闭包 函数访问上下文中的变量
//有权访问另一个函数作用域中的变量的函数
var arr = [];
for(var i=0;i<5;i++){
	/*arr[i] = function(){
		console.log(i);
	}*/
	arr[i] = (function(num){
		//return num;
		return function(){
			console.log(num);
		}
	})(i);
}
arr[0]();//5
arr[1]();//5
arr[2]();//5
arr[3]();//5
arr[4]();//5

