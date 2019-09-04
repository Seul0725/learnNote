*2019/08/27 学习React的第七天*

### Redux
Redux是一个流行的JavaScript框架，为应用程序提供一个可预测的状态容器。
为了规范的管理各种状态-----状态管理机制

* Redux的使用
1. 安装
`yarn add redux`
2. 创建reducer(助推器) 纯函数
store->reducer.js
定义默认state={}导出函数
export default (state,action)=>{
    if(action.type===XXX){
    return {
    }
    }
}
3. 创建store
store->index.js
import { createStore } from 'redux';
import reducer from './reducer';
// 注入reducer,将reducer与store绑定,创建store并返回
export default createStore(reducer);
4. 引入store
components->ToDo.js
import store from './store';(/index.js)
5. 使用
在constructor里
this.state = store.getState();   将store中的数据导入到当前组件的state
store.subscribe(this.storeChange) //订阅Redux的状态，如果redux中的状态发生更改，需要监听并渲染
**订阅者模式:store中的数据一更改，页面的订阅者发现，就去改页面的数据，让页面重新去渲染。**
storeChange = () => {
      this.setState(store.getState());
    }
6. 编写action,触发reducer更改store中的数据
const action = {
    type: 'TO_CHANGE_INPUT',
    value: e.target.value
};
store.dispatch(action);

##### action
action是数据从应用传递到store中的有效载荷。它是store数据的唯一来源.通过store.dispatch() 将 action 传到 store。Action本质上是一个对象，但是我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。除了 type 字段外，action 对象的结构完全自己决定。
默认情况下action不能是异步的！必须是同步的。action生成函数也必须是纯函数，只能返回一个对象，并且是同步返回。
const ADD_TODO = 'ADD_TODO'; 
function addTodo(text) { 
return { type: ADD_TODO, text } 
}
如果我们想要发起一个action就可以
store.dispatch({type: 'ADD_TODO', text: 'Go to swimming pool'}) 
//或者
store.dispatch(addTodo('Go to swimming pool'))