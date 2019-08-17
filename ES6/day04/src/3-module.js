//需要导出内容让其他模块使用
/* let a = 1;
let b = 2;
let test = () => {
    console.log('test');
}; */
// console.log('3-module...');
//导出
/* export { a, b, test }
export let m = 10;
export function say() {
    console.log('say');
} */
//默认导出
/* export default function() {
    console.log('default');
} */
/* export default {
    name: 'zhangsan',
    age: 12
} */
// export default 'hello';
/* let m = 100;
export default m; */
/* export default function() {
    console.log('default');
} */
// export let n = 10;
/* export let a = 1;
export let b = 2; */
/* let f = 1;
export { f as g }; */

let foo = 1;
let fun = () => {
    console.log('foo');
}
export { foo, fun };