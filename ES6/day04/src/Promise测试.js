const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<!DOCTYPE html>');
const $ = require('jquery')(window);

let p = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://134.175.154.93:8099/manager/category/findAllCategory',
        method: 'GET',
        success(res) {
            resolve(res, '-----');
        },
        error(err) {
            reject(err);
        }
    });
});
p.then((res) => {
    console.log(res, 'ppppp');
});
p.catch((err) => {
    console.log(err);
});