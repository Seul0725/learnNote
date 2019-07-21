var arr = [1,2,3,4];
var result = 0;
var count = 0;
for(var i=0;i<arr.length;i++){
	for(var j=0;j<arr.length;j++){
		for(var k=0;k<arr.length;k++){
				result = arr[i]*100+arr[j]*10+arr[k];
				console.log(result);
				count++;
		}
	}
};
console.log("一共能组成"+count+"个三位数");	
