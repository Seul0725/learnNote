**2019/08/19 学习React的第一天**

### MVC和MVVM

* MVC 
后台主导开发的思想，该思想一般应用在后端的web层，m表示数据模型，v表示视图，c表示constroller控制器
在servlet/jsp中主要应用的是MVC思想

* MVVM
前后台分离开发中的前端思想。m表示model数据模型，v表示view视图，vm表示视图模型，负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model。
React/Vue、AngularJS中主要应用的是mvvm思想

### React
1. React是一个用于构建用户界面的 JavaScript 库。
2. React主要用于构建UI
3. React起源于 Facebook 的内部项目，用来架设 Instagram 的网站
4. React 拥有较高的性能，代码逻辑非常简单

* 特点
1. 声明式设计:React采用声明范式，可以轻松描述应用
2. 高效 :React通过对DOM的模拟，最大限度地减少与DOM的交互
3. 灵活 :React可以与已知的库或框架很好地配合
4. JSX :JSX 是JavaScript语法的扩展
5. 组件:通过 React构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中
6. 单向响应的数据流:React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单

#### 使用React的两者方式

* 使用CDN或者本地引入js文件
如果在html中直接使用react需要导入react.js、react-dom.js、babel.min.js
react.js:React的核心库
react-dom.js: 提供操作DOM的扩展库
babel.min.js: 解析JSX语法代码转为纯JS语法代码的库
```
<script src="../js/react.js"></script>
<script src="../js/react-dom.js"></script>
<script src="../js/babel.min.js"></script>
```
* 使用脚手架
1. 全局安装脚手架和yarn
`cnpm install -g create-react-app yarn`
2. 使用脚手架创建工程
`create-react-app react-demo`
3. 启动工程
`cd react-demo`
`yarn start`

#### JSX (JavaScript XML)
react定义的一种类似于 XML 的 JavaScript 语法扩展。JSX是javascript的语法糖。
* 优点：
1. JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
2. 它是类型安全的，在编译过程中就能发现错误。
3. 使用 JSX 编写模板更加简单快速。
**注释要写在花括号中`{/*...*/}`**

### 组件
* 组件的定义
1. 使用函数定义一个组件，组件名必须大写
```
function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}
```
2. 使用ES6 class定义一个组件
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```
3. 自定义组件
```
const element = <HelloMessage name="hello" />
```
* 通过ReactDOM.render() 的方法来将React元素渲染到页面上：
* 自定义组件中的name属性通过props.name来获取
* 在添加属性时， class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。

### 渲染
* 基本渲染
将变量的值直接显示在页面上
```javascript
function MyCom(props){
    let msg = "hello";
    return <h3>{msg}</h3>;
}
```
* 列表渲染
**设置key属性确定唯一标识**
```javascript
<ul>
    {
        arr.map((item,index)=>{
            return <li key={index}>{item}</li>
        })
    }
</ul>
```
* 条件渲染
```javascript
function UserInfo(props){
    let {user} = props;
    if(user){
        return <h2>{user.name} 已登录</h2>
    }
    return <h2>请登录</h2>
}
ReactDOM.render(<UserInfo user={{name:'zhangsan'}}/>,document.getElementById('app'));
```

#### 组件传值
传递字符串需要将**字符串直接作为属性值**进行传递，如果是要传递**其他数据类型，需要将值放入到{}中**进行传递
1. 传递字符串
`<MyComponent foo='this is foo' />`=>this is foo
2. 传递数字
`<MyComponent foo={1,2,3} />`=>3
3. 传递布尔类型
`<MyComponent foo={true} />`不显示
4. 传递数组
`<MyComponent foo={[1,2,3,4]} />`=>1234
5. 传递对象
`<MyComponent foo={{name: 'terry' }} />`=>terry

### 类组件
可以通过ES6中的类来创建组件，该类继承React.Component，并且拥有一个render()函数
render函数表示渲染，每次重新渲染都要调用该函数
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello World!{this.props.name}</h1>;
  }
}
```
### Fragment
Fragment 允许将子列表分组，而无需向 DOM 添加额外节点。
```javascript
return (
    <React.Fragment>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
    </React.Fragment>
);
```

### 组件局部状态 state
是组件内部维护的一组用于反映组件UI变化的状态集合。
```javascript
class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
}
```
