//分支语句 switch 开关语句
//判断星期几 1-7
var num = 2;
var result = '';
switch(num){
	case 1:
		result = '星期一';
		break;
	case 2 :
		result = '星期二';
		break;
	case 3 :
		result = '星期三';
		break;
	case 4 :
		result = '星期四';
		break;
	case 5 :
		result = '星期五';
		break;
	case 6 :
		result = '星期六';
		break;
	case 7 :
		result = '星期日';
		break;
	default:
		result = '出错了';
		break;
}
console.log(result);






