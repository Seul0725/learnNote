var count = 0;
for(var i=101;i<200;i++){
	var flag = true;
	for(var j=2;j<=Math.sqrt(i);j++){
	// for(var j=2;j<i;j++){
		if (i%j == 0) {
			flag = false;
			break;
		}
	}
	if(flag == true){
		console.log(i);
		count++;
	}
}
console.log("一共有"+count+"个素数");