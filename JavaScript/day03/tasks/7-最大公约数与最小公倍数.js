var a = 108,b = 96;
var min = a>b?b:a;
var max = a>b?a:b;
for(var i=min;i>0;i--){
	if(a%i==0 && b%i==0){
		console.log("最大公约数为："+i);
		break;
	}
}
console.log("---------------------");
for(var i=max;i<a*b;i++){
	if (i%a==0 && i%b==0) {
		console.log("最小公倍数为："+i);
		break;
	}
}