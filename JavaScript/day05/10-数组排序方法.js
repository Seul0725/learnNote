// var arr = [23,454,12,33,12,56,90];
// console.log(arr);
//反转 翻转
/*
console.log(arr.reverse());//[ 90, 56, 12, 33, 12, 454, 23 ]
console.log(arr);//[ 90, 56, 12, 33, 12, 454, 23 ]
*/
//排序
/*console.log(arr.sort());//[ 12, 12, 23, 33, 454, 56, 90 ]
console.log(arr);//[ 12, 12, 23, 33, 454, 56, 90 ]
console.log(arr.sort(com));//[ 12, 12, 23, 33, 56, 90, 454 ]
function com(a,b){*/
	//升序
	//return a-b; a-b<0 a<b 负数，不交换位置 a b--》升序
	//            a-b>0 a>b 正数  交换位置  b a--》升序
	/*if(a<b){
		return -1;//负数，不交换位置
	}
	return 1;
	*/
	//降序
	// return b-a;//a<b b-a>0 正数，交换位置 a b -->b a
	/*if(a>b){
		return -1;
	}
	return 1;
	*/
// }



var stus = [{
	name:"zhangsan",
	age:14
},{
	name:"lisi",
	age:20
}]
console.log(stus);
stus.sort(compare("name","升序"));
console.log(stus);
//按照name排
//按照age排
////万能比较函数
function compare(attr,rules){
	return function(o1,o2){
		if(rules==="升序"){
			if(o1[attr]<o2[attr]){
				return -1;
			}
			return 1;
		}else{
			if(o1[attr]>o2[attr]){
				return -1;
			}
			return 1;
		}
	}
}
















