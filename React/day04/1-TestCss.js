import React, { Component } from 'react';
// CSS模块化处理之后，将不再直接使用，而是直接导入一个对象
// 对象名不能以数字开头
import style from './TestCss.css';
console.log(style);
class TestCss extends Component {
    render() {
        return (
            <div>
                <span className={style.one}>hello</span>
                <span id={style.two}>world</span>
            </div>
        );
    }
}
export default TestCss;