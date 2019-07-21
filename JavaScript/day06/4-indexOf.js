var arr = [2,5,67,'2',3,2,45];
//找数组中的2 
//返回找到的第一个索引，没找到返回-1
console.log(arr.indexOf(2));//0
//两个参数，第二个参数为索引开始位置
console.log(arr.indexOf(2,1));//5
console.log(arr.indexOf(22));//-1
//判断
if(arr.indexOf(2)!=-1){}
//从后往前找
console.log(arr.lastIndexOf(2));//5
console.log(arr.lastIndexOf(2,3));//0








