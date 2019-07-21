//判断一个成绩属于什么级别
var grade = '';
var result = '';
if(grade){
	grade = grade+'';
	grade = +grade;

//要求输出不及格60以下，中60-70，良70-90，优90以上
	if(grade<60&&grade>=0){
		result = '不及格';
	}else if(grade>=60 && grade<70){
		result = '中';
	}else if(grade>=70 && grade<90){
		result = '良';
	}else if(grade>=90 && grade<=100){
		result = '优'
	}else{
		result = '成绩出错';
	}
}
console.log(result);





