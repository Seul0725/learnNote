for(var i=6;i<=1000;i++){
	var n = 0;
	for(var j=1;j<=i/2;j++){
		if (i%j==0) {
			n += j;
		}
	}
	if (n == i) {
		console.log(i);
	}
}