//扩展运算符
//1.对数组的展开
let arr = [...[1, 2, 3]];
console.log(arr);
//2.保存剩余数据
let [a, ...b] = [1, 2, 3];
console.log(b);
//函数的rest参数
let test = (...tail) => {
    console.log(tail);
}
test(1, 2, 3);
//3.将字符串转为数组
console.log([...
    'hello'
]);
//4.将数据结构数据展开
console.log(...new Set([1, 2, 3, 2]));

console.log(...
    'hello');
console.log(...[1, 2, 3]);

//对象的扩展 
//属性的简写、方法的简写、属性名表达式、方法的name属性
let name = 'tom';
let age = 'Age';
let obj = {
    name,
    ['my' + age]: 13,
    sayName() {
        console.log(this.name);
    }
}
console.log(obj, obj.name);
obj.sayName();
console.log(obj.sayName.name);
//Object.is() Object.assign() Object.getPrototypeOf() Object.setPrototypeOf Object.keys() Object.values() Object.entries()
Object.is(+0, -0); //false
Object.is(NaN, NaN); //true
let obj2 = {
    gender: 'male'
}
Object.assign(obj, obj2);
console.log(obj instanceof Object);
console.log(Object.prototype.isPrototypeOf(obj));
console.log(Object.getPrototypeOf(obj) === Object.prototype);

let obj3 = {
    toString() {
        return '11'
    }
}
Object.setPrototypeOf(obj, obj3);
console.log(obj.toString());
console.log(obj.valueOf());

for (let key of Object.keys(obj)) {
    console.log('keys:' + key);
}
for (let value of Object.values(obj)) {
    console.log('values:' + value);
}
for (let [key, value] of Object.entries(obj)) {
    console.log('key:' + key, 'value:' + value);
}
//函数的扩展
function fun(a, b = 2, c) {

}
console.log(fun.length);
console.log(this);
console.log(module.exports);
console.log(this === module.exports);

function fun2() {
    console.log(this);
}
// fun2();
let arrow = () => {
        console.log(this);
    }
    // arrow();
let obj6 = {
        test() {
            console.log(this);
            return () => {
                console.log(this);
            }
        }
    }
    // obj6.test();
obj6.test()();
//数组扩展
let arrLike = {
    '0': 1,
    '1': 2,
    length: 2
}
console.log(Array.from(arrLike));
console.log(Array.of(10));
//find findIndex fill includes keys values entries
let newArr = [1, 2, 3, 4];
let result = newArr.find(function(item) {
    return item > 3
});
console.log(result);
let result2 = newArr.findIndex((item) => {
    return item > 3;
});
console.log(result2);
console.log(new Array(3).fill(3));
console.log(newArr.includes(2));
for (let key of newArr.keys()) {
    console.log(key);
}
for (let value of newArr.values()) {
    console.log(value);
}
for (let [index, item] of newArr.entries()) {
    console.log(index, item);
}