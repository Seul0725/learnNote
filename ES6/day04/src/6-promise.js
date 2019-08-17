const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<!DOCTYPE html>');
const $ = require('jquery')(window);
// const $ = require('jquery'); //undefined
// console.log($.ajax);
let p = new Promise((resolve, reject) => {
    console.log('-------');
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
console.log(p);
/* p.then((res) => {
    console.log(res, '=====');
});
p.catch((err) => {
    console.log(err);
}); */