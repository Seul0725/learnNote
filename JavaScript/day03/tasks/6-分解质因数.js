var num = 90;
var n = num;
var result = '';
for(var i=2;i<=num;i++){
	if(num%i == 0){
		num /= i;
		if(num/i>=1){
			result += i+"*";
		}else{
			result += i;
		}
		i--;
	}
}
console.log(n+"="+result);
