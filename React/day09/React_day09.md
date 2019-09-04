*2019/08/29 学习React的第九天*

### React-Redux
React-Redux 将所有组件分成两大类：**UI 组件**（负责 UI 的呈现）和**容器组件**（负责管理数据和逻辑）。

* UI组件
1. 只负责 UI 的呈现，不带有任何业务逻辑
2. 没有状态（即不使用this.state这个变量）
3. 所有数据都由参数（this.props）提供
4. 不使用任何 Redux 的 API
5. 因为不含有状态，UI 组件又称为"纯组件"，即它跟纯函数一样，纯粹由参数决定它的值。

* 容器组件
1. 负责管理数据和业务逻辑，不负责 UI 的呈现
2. 带有内部状态
3. 使用 Redux 的 API

* UI 组件和容器组件的结合
1. 如果一个组件既有 UI 又有业务逻辑，那么将它拆分成两层结构：外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。
2. React-Redux 规定，所有的 UI 组件都由用户提供，容器组件则是由 React-Redux 自动生成。

* React-Redux中的connect()
用于从 UI 组件生成容器组件

* React-Redux中的mapStateToProps()
1. mapStateToProps是connect函数的第一个参数，它的作用是建立一个从外部state对象到 UI 组件的props对象的映射关系。执行后返回一个对象，里面的每一个键值对就是一个映射
2. mapStateToProps会订阅（绑定） Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
3. mapStateToProps是一个函数，第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。使用ownProps作为参数后，如果容器组件的参数发生变化，也会引发 UI 组件重新渲染。
4. 如果connect方法省略mapStateToProps参数，那么UI 组件就不会订阅Store，就是说 Store 的更新不会引起 UI 组件的更新。

* React-Redux中的mapDispatchToProps()
1. mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了用户的哪些操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
2. 如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数，应该返回一个对象，该对象的每个键值对都是一个映射，定义了 UI 组件的参数怎样发出 Action。
3. 如果mapDispatchToProps是一个对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator ，返回的 Action 会由 Redux 自动发出。

* React-Redux的<Provider> 组件
connect方法生成容器组件以后，需要让容器组件拿到state对象，才能生成 UI 组件的参数。
一种解决方法是将state对象作为参数，传入容器组件。但是容器组件可能在很深的层级，一级级将state传下去就很麻烦。React-Redux 提供Provider组件，可以让容器组件拿到state。在根组件外面包了一层Provider，App的所有子组件都可以拿到state了。它的原理是React组件的context属性，store放在了上下文对象context上面。React-Redux自动生成的容器组件的代码，就类似下面这样，然后子组件就可以从context拿到store。
```javascript
    <Provider store={store}>
      <App />
    </Provider>
```
### React-Redux安装及使用
安装
  yarn add redux react-redux
使用
1. 在项目index.js里，引入Provider,引入store，然后使用
`import { Provider } from 'react-redux'`
`import store from './store'`
`<Provider store={store}><App /></Provider>`
<Provider>是一个提供器，只要使用了这个组件，组件里边的其它所有组件都可以使用store了
2. 使用store中的数据
在需要使用store数据的地方，引入连接器
`import {connect} from 'react-redux'`  //引入连接器
创建映射关系，把原来的state映射成组件中的props属性
```javascript
const TodoList = (props) => {
    return (
        <div>
            TODO
        </div>
    );
}
//mapStateToProps传入所有state，返回指定的state数据
function mapStateToProps(state) {
    return { todos: state.todos }
    }
//mapDispatchToProps，传入dispatch，返回的对象中的方法会在组件的props中
const mapDispatchToProps = (dispatch) => {
return {
    inputChange(e) {
    dispatch(changeInputAction(e.target.value));
     }
 }
}
//导出组件
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
```
connect的作用是把UI组件（无状态组件）和业务逻辑代码的分开，然后通过connect再连接到一起，
让代码更加清晰和易于维护。这也是React-Redux最大的优点。

### redux-thunk  
redux中间件，处理异步请求.
actionCreators可以返回一个函数，在该函数里有参数dispatch，发送异步，异步成功之后分发action更改数据。
* 安装：
`yarn add redux-thunk`
* 配置：
1.从redux中引入applyMiddleware
2.引入redux-thunk
`import thunk from 'redux-thunk';`
3.使用中间件，如果要使用Redux DevTools调试插件，引入增强函数
在store=>index.js中操作
```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk))
export default createStore(
reducer,
enhancer
//applyMiddleware(thunk)
);
```
4.使用redux-thunk生成action
可以返回一个函数，该方法有参数dispatch
可以在该函数内部进行异步处理，异步处理成功之后再分发action.
```javascript
// redux-thunk的action
export const getToDoList = () => {
return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
    //同步action
    dispatch(getListAction(res.data.data.list));
    });
}
}
```

###generator函数(ES6)
暂缓执行，可以分段使用
```javascript
  function* test(){
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
  temp.next();
  temp.next();
  temp.next();
```

### redux-saga
redux中间件
使用generator函数在sagas文件中处理业务逻辑，有了redux-saga之后，除了reducer可以接收action，sagas也可以接收并做业务逻辑处理

* 安装
`yarn add redux-saga`

* 配置
1.使用中间件，如果要使用Redux DevTools调试插件，引入增强函数compose
```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
// 注入reducer，和中间件
export default createStore(
    reducer,
    enhancer
);
```
2.创建sagas.js配置文件并引入到store中
redux-saga把业务逻辑单独写一个文件
//sagas.js
function* mySaga() {}
export default mySaga;
//index.js
import mySagas from './sagas';
sagaMiddleware.run(mySagas);  //执行run方法，运行saga。
注意运行的时机是在store创建好了之后，将中间件挂上去之后。
3.使用
组件挂载完毕之后，声明actionType，声明actionCreators，在组件中分发action,在sagas.js中处理业务逻辑
```javascript
import { takeEvery, put } from 'redux-saga/effects';
function* mySaga() {
    // 写业务逻辑
    yield takeEvery(GET_MY_LIST, getList)
}
function* getList() {
    // 可以写业务逻辑
    const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList');
    yield put(getListAction(res.data.data.list));
    /* axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
    // dispatch(getListAction(res.data.data.list));
    // saga带的put方法
    put(getListAction(res.data.data.list));
    }); */
}
export default mySaga;
```
