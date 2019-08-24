**2019/08/20 学习React的第二天**

* state 和 props 主要的区别在于 **props 是不可变的**，而 state 可以根据与用户交互来改变。容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。

### state特点
1. 不可直接修改state
需要调用this.setState()方法进行修改
2. state的更新是异步的
3. state的更新是一个浅合并的过程
只需要传入需要修改的数据即可完成修改，state中未被修改的数据不会改变

#### 使用this.setState()修改时状态类型
1. 状态的类型是不可变类型(数组，字符串，布尔值，null，undefined)
直接赋新值
2. 状态类型是数组
通过concat方法或者ES6数组扩展方法
```javascript
//ES6数组解构赋值
arr: [...this.state.arr, 3]
//concat方法
arr: this.state.arr.concat([3])
```
3. 状态类型是普通对象
通过Object.assign()方法或者对象扩展语法
```javascript
obj: Object.assign({}, this.state.obj, {name:'tom'})
obj:{...this.state.obj,name:'tom'}
```

### 生命周期
**以下均为生命周期钩子函数**
* componentWillMount
在组件将要被挂载前调用
* componentDidMount
在组件被挂载之后立即调用
* shouldComponentUpdate
组件是否被更新，如果返回true则更新，否则不更新
* componentWillUpdate
组件将要被更新前调用
* componentDidUpdate
组件被更新后立即调用
* componentWillUnmount
在组件将要被卸载时调用

### 事件绑定
1. 使用箭头函数改变this指向
```javascript
handle=()=>{
    this.setState({});
}
<button onClick={this.handle}>点击</button>
```
2. 使用bind改变this指向
```javascript
handle=()=>{}
// handle(){}
<button onClick={this.handle.bind(this)}>点击</button>
```
3. 在元素组件中的事件中传箭头函数
```javascript
handle=()=>{}
// handle(){}
<button onClick={(event) => { this.handle(event) }}>点击</button>
```

### 事件传参
1. 方式一：通过bind传参
```javascript
handle=(a,b,event)=>{
    console.log(a, b, event);
}
<button data-id="1001" onClick={this.handle.bind(this,1002,1003)}>点击</button>
```
2. 方式二：通过箭头函数传参
```javascript
handle=(a,b,event)=>{
    console.log(a, b, event);
}
<button data-id="1001" onClick={(event)=>{this.handle(1002,1003,event)}}>点击</button>
```