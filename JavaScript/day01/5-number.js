//number类型
var a = 1;
var b = 1.414;
console.log(a,b);
console.log(typeof a);//number

//八进制
var eight = 011;
console.log(eight);//9

//十六进制
var h = 0x11;
console.log(h);//17

//科学计数法
console.log(5e2);//5*10的2次方 500
console.log(5e-2);//5*10的-2次方 0.05

//NaN,Not a Number,不是一个数值，但属于number类型
var c = NaN;
console.log('------');
console.log(c);//NaN
console.log(typeof c);//number
var d = 10/'hello';
console.log(d);//NaN
console.log(typeof d);//number
//两个NaN是否相等
console.log(d == NaN);//false
console.log(NaN == NaN);//false
//判断一个值是否是NaN，不能使用==去判断，使用isNaN()函数去判断
console.log(isNaN(d));//true 
//isNaN(实际参数，实参，参数)
console.log(isNaN(120));//false
//infinity正无限大
console.log(10/0);//Infinity
console.log(Number.MIN_VALUE);//5e-324
console.log(Number.MAX_VALUE);//1.7976931348623157e+308

console.log(3e333);//Infinity
console.log(typeof Infinity);//number
console.log(-3e333);//-Infinity
console.log(typeof -Infinity);//number

console.log(2e-333);//0

