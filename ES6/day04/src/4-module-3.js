//引入3-module.js中的变量
/* import { a, b, test, m, say } from './3-module';
console.log(a, b, test, m, say); */
//export-default的导入可随意命名
/* import test from './3-module';
import { n, a, b } from './3-module'; */
//export的导入 组成对象
//export的导入和export default的导入组成对象，并且export default的属性名是'default'
// import * as obj from './3-module';
/* console.log(obj); //{ default: 100, n: 10, a: 1, b: 2 }
obj.default(); //default */
// console.log(test, n, a, b);
// test();
//import {n,a} from './3-module'; export{n,a}的简写
/* export { n, a }
from './3-module';
console.log(n, a); */

export { foo, fun }
from './3-module';