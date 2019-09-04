/* function* test() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    yield 3;
    console.log(4);
    return 4;
}
let temp = test();
console.log(temp); //Object [Generator] {}
console.log(temp.next());
console.log(temp.next());
console.log(temp.next());
console.log(temp.next());
console.log(temp.next()); */
// function* test(params) {
//     let a = yield 1;
//     console.log(a, '-------'); //a->undefined
//     let b = yield 2;
//     console.log(b, '+++++++');
// }
// let temp = test();
// /* console.log(temp.next());
// console.log(temp.next()); */
// console.log(temp.next(temp.next(temp.next().value).value));