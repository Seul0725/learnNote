*2019/08/28 学习React的第八天*

### Redux
Redux 是 JavaScript 状态容器， 提供**可预测化**的状态管理。
**可预测化:根据一个固定的输入，必然会得到一个固定的结果。**
redux是专门为react开发的，但并不是只能用于react,可以用于任何界面库。

* redux产生的动机
随着单页面应用的普及，web app内部需要管理的状态越来越多，为了规范的管理各种状态，提出的一种状态管理机制。

* 三大原则
1. 单一数据源
使用redux的程序，所有的state都存储在一个单一的数据源store内部，类似一个巨大的对象树。
2. state是只读的
state是只读的，能改变state的唯一方式是通过触发action来修改
3. 使用纯函数执行修改
**纯函数：一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数**
为了描述 action 如何改变 state tree ， 需要编写 reducers。
reducers是一些纯函数，接口当前state和action。只需要根据action，返回对应的state。

* action的生成函数也必须是一个纯函数，只能返回一个对象，并且是同步返回。
* Action 只是描述了有事情发生了这件事实，但并没有说明要做哪些改变，这正是reducer需要做的事情。
* 如果是多个reducer,需要使用combineReducers先将reducer进行合并。
* store是redux应用的唯一数据源，我们调用createStore Api创建store。

### Redux同步操作步骤
1. 在actionCreators文件夹中创建一或多个action，使用action生成函数创建action
```javascript
//actionCreators/test1Action.js
import { CHANGE_TEST1 } from '../actionTypes';
export const changeA = (value)=>{
    return {
        //type从actionType文件中获取
        type:CHANGE_TEST1,
        value
    }
}
//actionCreators/test2Action.js
import { CHANGE_TEST2 } from '../actionTypes';
export const changeB = (value)=>{
    return {
        type:CHANGE_TEST2,
        value
    }
}
```
2. 在`actionType/index.js`文件夹中设置action类型
```javascript
export const CHANGE_TEST1 = 'CHANGE_TEST1'
export const CHANGE_TEST2 = 'CHANGE_TEST2'
```
3. 在reducer文件夹中设置`test1Reducer.js`和`test2Reducer.js`
```javascript
import { CHANGE_TEST1 } from '../actionTypes';
let test1State = {
    msg: 'test1'
};
export default (state = test1State, action) => {
    //业务逻辑处理
    if (action.type === CHANGE_TEST1) {
        return {
            ...state,
            msg: action.value
        }
    }
    return state;
};
```
4. 在reducer文件夹的入口文件`index.js`合并reducer
```javascript
//整合所有的Reducer，导出一个合并后的Reducer
import { combineReducers } from 'redux';
import test1Reducer from './test1Reducer';
import test2Reducer from './test2Reducer';
const reducer = combineReducers({
    //需要整合的reducer
    test1: test1Reducer,
    test2: test2Reducer
});
export default reducer;
```
5. 在store文件夹的入口文件`index.js`创建store
`window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`为Redux的DevTools插件配置.
```javascript
import { createStore } from 'redux';
import reducer from './reducers';
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
```
6. 在组件中引入store和action
```javascript
import React, { Component } from 'react';
import store from '../store';
import { changeTest1A } from '../store/actionCreators/test1Action';
import { changeTest2A } from '../store/actionCreators/test2Action';
export default class Test1 extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.changeState);
    }
    changeState = () => {
        this.setState(store.getState());
    }
    changeTest1 = () => {
        //分发action,action对象
        store.dispatch(changeTest1A('hello111'));
    }
    changeTest2 = () => {
        store.dispatch(changeTest2A('world222'))
    }
    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                hello
                <button onClick={this.changeTest1}>更改test1的数据</button>
                <button onClick={this.changeTest2}>更改test2的数据</button>
            </div>
        )
    }
}
```
