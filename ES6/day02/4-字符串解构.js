let str = 'hello';
let [a,b,c] = str;
console.log(a,b,c);//h e l
let {length} = str;
console.log(length);//5
let {toString:s} = 123;
console.log(s===Number.prototype.toString);//true
let {toString} = true;
console.log(toString===Boolean.prototype.toString);//true
