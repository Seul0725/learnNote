var a; //undefined
console.log(a);
//typeof关键字进行数据类型的判断
console.log(typeof a); //undefined
console.log(typeof undefined); //undefined
//undefined类型只有一个值，就是undefined值

var b = undefined;
console.log('b的值:',b);
console.log('b的数据类型:'+typeof b);

//console.log(c);//使用一个没有声明过的变量会报错 c is not defined

//变量声明提升
console.log('变量c声明在后：',c);//undefined
var c =1; //变量声明提升到代码的第一行，然后再解析执行代码
console.log('变量c声明在前：',c);
