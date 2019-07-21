//在函数内部使用var修饰的变量是局部变量。局部变量在函数外部是访问不到的。
//在函数外部声明的变量是当前js文件的全局变量--函数内部没有使用var声明的变量是全局变量
//在函数内部可以访问全局变量
//在函数外部不可以访问局部变量
var a = 1;
function test(){
	console.log(a);//1
	//var b = 2;
	b = 2;//全局变量
	console.log(b);//2
	c = 3;
}
test();
console.log(a);//1
console.log(b);//b is not defined //2
console.log(c);

var g = 100;
function testG(){
	console.log(g);//undefined
	var g = 200;//g声明提升到函数顶部
	console.log(g);//200
}
testG();
console.log(g);//100





