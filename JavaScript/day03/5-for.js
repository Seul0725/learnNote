//for 输出 1-10
//初始化条件执行了1次
//结束条件判断了11次
//迭代条件执行了10次
for(var i=1;i<11;i++){
	console.log(i);
}
//1-10
console.log('i的值在外部访问是'+i);//11
console.log('------------------');

var j = 1;
for(;j<11;){
	console.log(j);
	j++;
}
//死循环
var count = 0;
my:for(;;){
	console.log(count);
	count+=1;
	if(count == 5){
		continue;//结束本次循环，执行下一次循环
	}
	console.log('--------');
	if(count == 20){
		break;//结束循环，不再执行下一次循环
	}
}
console.log('count的值为'+count);
