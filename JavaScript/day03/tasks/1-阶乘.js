var num = 10;
var mult = 1;
var str = '';
while(num>0){
	mult *= num;
	if(num==1){
		str += num;
	}else{
		str += num+'*';
	}
	num--;
}
console.log('使用while循环得到的10的阶乘：'+str+'='+mult);
console.log('--------------------------------------------');
num = 10;
mult = 1;
str = '';
do{
	mult *= num;
	if(num == 1){
		str += num;
	}else{
		str += num+'*';
	};
	num--;
}while(num>0);
console.log('使用do-while循环的到的10的阶乘：'+str+'='+mult);
console.log('---------------------------------------------');
num = 10;
mult = 1;
str = '';
for(num;num>0;num--){
	mult *= num;
	if(num==1){
		str += num;
	}else{
		str += num+'*';
	};
}
console.log('使用foe循环得到的10的阶乘：'+str+'='+mult);



