const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<!DOCTYPE html>');
const $ = require('jquery')(window);

let p1 = new Promise((resolve, reject) => {
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
let p2 = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://134.175.154.93:8099/manager/article/findArticle?page=0&&pageSize=10',
        method: 'GET',
        success(res) {
            resolve(res);
        },
        error(err) {
            reject(err);
        }
    });
});
let p3 = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://134.175.154.93:8099/manager/user/findAllUser',
        method: 'GET',
        success(res) {
            resolve(res);
        },
        error(err) {
            reject(err);
        }
    });
});
//all 如果p1,p2,p3都执行成功，做什么操作。。，其他情况做什么操作。。
/* let p = Promise.all([p1, p2, p3]);
p.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
}); */
//race 谁执行的快，就用谁的结果，无论它的返回结果是什么将直接决定p的状态
let p = Promise.race([p1, p2, p3]);
p.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});