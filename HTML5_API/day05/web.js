//后台线程
onmessage = function(event){
	var num = event.data;
	var total = 0;
	for(var i=0;i<num;i++){
			total+=i;
		}
	postMessage(total);
}