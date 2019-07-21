for(var i=100;i<1000;i++){
	var a = parseInt(i/100);
	var b = (parseInt(i/10))%10;
	var c = i%10;
	if(a*a*a+b*b*b+c*c*c == i){
		console.log(i);
	}
}