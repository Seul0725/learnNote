//引入3,4
//引入3模块中的default导出
//引入4模块中的n,a的导出
/* import test from './3-module';
import { a, n } from './4-module-3';
console.log(test, n, a); */
import { foo, fun } from './4-module-3';
console.log(foo);
fun();