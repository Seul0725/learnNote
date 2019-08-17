const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<!DOCTYPE html>');
const $ = require('jquery')(window);

// console.log($.ajax);
let p = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://134.175.154.93:8099/manager/category/findAllCategory',
        method: 'GET',
        success(res) {
            resolve(res);
        },
        error(err) {
            reject(err);
        }
    });
});
//如果传递的参数是Promise对象，不做任何操作，原样返回
let p1 = Promise.resolve(p);
console.log(p === p1); //true
/* p1.then((res) => {
    console.log(res, '=====');
}).catch((err) => {
    console.log(err);
}).finally(() => {
    //无论异步操作最后状态是什么，最终都会执行
    console.log('hello');
}); */
//如果参数是非thenable对象或者原始值，那么返回resolved状态的promise对象
//thenable对象 内部有then方法的对象
//既然返回的是resolved状态的promise对象，那么内部执行了resolve函数，
//因为在执行了resolve函数之后，promise对象状态才从pending=>resolved。
/* let p2 = Promise.resolve('hello');
p2.then(() => {
    console.log('resolve');
}).catch(() => {
    console.log('reject');
}); */
//参数：thenable对象
/* let obj = {
    name: 'tom',
    then() {
        console.log('obj的then方法');
    }
};
let p3 = Promise.resolve(obj);//会直接执行thenable对象中的then方法
//不执行
p3.then(() => {
    console.log('resolve');
}); */
//参数：空
let p4 = Promise.resolve();
p4.then(() => {
    console.log('resolve');
}).catch(() => {
    console.log('reject');
});
/* let p5 = Promise.reject('hello');
p5.then(() => {
    console.log('resolve');
}).catch(() => {
    console.log('reject');
}); */