//arguments里存放实参列表，类数组对象，length属性代表存放实参的个数，callee属性代表函数
//累加 可以不传形参
function add(a,b){
	console.log(arguments);
	var total = 0;
	//遍历arguments进行累加
	for(var i=0;i<arguments.length;i++){
		//console.log(arguments[i]);
		total += arguments[i];
	}
	return total;
}
var result = add(1,2,3,4);
console.log(result);

//递归阶乘
function mul(num){
	//console.log(arguments.callee);
	//num*mul(num-1);
	if(num>1){
		//return num*mul(num-1);
		return num*arguments.callee(num-1);
	}else{
		return 1;
	}
}
var result = mul(5);//[Function:mul]
console.log(result);



