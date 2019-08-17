//Set集合
let set = new Set();
console.log(set);
//size属性返回个数
console.log(set.size); //0
//添加数据
set.add(1);
set.add(1);
set.add('hello');
console.log(set); //Set { 1, 'hello' }
// console.log(set.delete(1));
// console.log(set);
// console.log(set.has(1));
// set.clear();
// console.log(set);
//遍历
let keys = set.keys();
console.log(keys, '-----');
for (let key of keys) {
    console.log(key); // 1 hello
}
let values = set.values();
console.log(values);
let entries = set.entries();
console.log(entries);
console.log('-------');
//遍历迭代器对象
while (true) {
    let result = values.next();
    if (result.done) {
        break;
    } else {
        console.log(result.value);
    }
}
/* console.log(values.next());//{ value: 1, done: false }
console.log(values.next());//{ value: 'hello', done: false }
console.log(values.next());//{ value: undefined, done: true } 
*/
//Iterator对象可以使用for-of遍历
/* for (let value of values) {
    console.log(value); // 1 hello
} */
//使用forEach
set.forEach((value, key, set) => {
    console.log(value, key, set);
});