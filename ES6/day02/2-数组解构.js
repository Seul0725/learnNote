/*let [a,b,c] = [1,2,3,4,5];
// a b c
// 1 2 3
console.log(a,b,c);*/

//保存数组剩余的值
let [a,b,c,...d] = [1,2,3,4,5,6,7];
// a b c  d
// 1 2 3 [ 4, 5, 6, 7 ]
console.log(a,b,c,d);

//扩展运算符可以将数据展开
let result = Math.max(2,47,92,8);
console.log(result); //92
let result2 = Math.max(...[1,2,3,4,5,6,7]);
console.log(result2); //7
//不能单独使用扩展运算符展开数组，可以在参数中使用，将参数数组转成参数列表。
//如果扩展运算符后面跟的是变量，那么接受单独多余的数组放置到数组中。
console.log(...[1,2,3]);
// let result3 = ...[1,2,3];
// console.log(result3);
// rest参数----将不再推荐使用arguments
/*function test(...tail){
	//获取所有的实参，然后累加
	//tail = [1,2,3,4,5];
	
}
test(1,2,3,4,5);*/
function test([a,...tail]){
	//tail = [2,3,4,5];

}
test([1,2,3,4,5]);

//默认值解释
{	//  默认值   匹配值
	let [a,b] = [];
	console.log(a,b);
	let [c=1,d=2] = [];
	console.log(c,d);
	//当解构完成之后，变量严格等于undefined时，默认值生效
	let [e=1,f=2] = [3,4];
	console.log(e,f);
	console.log('------');
	function test(){
		console.log('test');
		return 2;
	}
	//一种情况是先进行默认值的赋值，再去解构值，如果有值，覆盖原先默认值
	//√ 另一种情况是先去判断解构的值有无，若有，进行赋值，若无，进行默认值赋值
	/*let [g=test] = [1];
	console.log(g);*/
	/*let [g=test()] = [1];
	console.log(g);*/
	let [g=test()] = [];
	console.log(g);
}