//Number()或者使用一元运算符+
console.log(Number(123));//123
console.log(Number('123'));//123
console.log(Number('+123.34'));//123.34
console.log(Number('abc'));//NaN
console.log(Number('1+2'));//NaN
console.log(Number('123a'));//NaN
console.log(Number(null));//0
console.log(Number(undefined));//NaN
console.log(Number(true));//1
console.log(Number(false));//0
//可以解析十六进制
console.log(Number('0xc'));//12
//不解析八进制，当做十进制处理
console.log(Number('010'));//10

console.log('----parseInt----');
console.log(parseInt(123.3));//123
console.log(parseInt('123.45s123'));//123
console.log(parseInt('abc12'));//NaN
console.log(parseInt('0xa'));//10
console.log(parseInt('010'));//10
console.log('----parseFloat----');
console.log(parseFloat('123.34'));//123.34
console.log(parseFloat('a123'));//NaN
console.log(parseFloat('0xa'));//0
console.log(parseFloat('010'));


