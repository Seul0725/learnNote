**2019/08/22 学习React的第四天**

* 配置Webpack模块化导入CSS
在新项目创建好时，使用命令`yarn eject`，显示配置文件
打开config/webpack.config.js
在检测CSS的地方(426行)添加如下
`modules: true,`
`getLocalIdent: getCSSModuleLocalIdent,`
使用：
```
import style from './TestCss.css';
<span className={style.one}>hello</span>
<span id={style.two}>world</span>
```

* 在React项目中使用Sass
1. 安装node-sass包 `yarn add node-sass`
2. 创建sass文件(以.scss为后缀名，在内部写css代码)
```
.TestSass {
span {
    color: red;
    }
}
```
3. 引入对应的JS文件或者JSX文件
    import 'TestSass.scss'


#### 使用组件修改Tab
```javascript
this.state = {
    CurrentCom: Home
}
changeTab = (com, e) => {
    this.setState({
        CurrentCom: com
    })
}
let { CurrentCom } = this.state;
<button onClick={this.changeTab.bind(this, Home)}>首页</button>
<button onClick={this.changeTab.bind(this, Student)}>学生管理</button>
```

### React 路由机制
* react-router: 实现了路由的核心机制，Switch、Router、Route
Router:路由器组件，用来包含各个路由组件，用来管理路由，子组件Route
`npm install react-router@3 --save`4版本之后没有hashHistory组件
属性：`history={hashHistory}`用来监听浏览器地址栏的变化，并将URL解析成一个地址对象，供React Router匹配
Route:路由组件，注册路由；它最基本的职责是在其 path 属性与某个 location 匹配时呈现一些 UI。
Switch:用于渲染与路径匹配的第一个子 <Route> 或 <Redirect>

* react-router-dom: 基于react-router，加入了在浏览器运行环境下的一些功能，
例如：
1. Link组件，Link 组件最终会渲染为 a标签，使用to参数来描述需要定位的页面。
2. BrowserRouter组件：使用pushState和popState事件构建路由，使用HTML5提供的history API(pushState, replaceState 和 popstate 事件)来保持UI和URL的同步。
路由地址格式：`http://localhost:3000/student`
3. HashRouter组件：使用window.location.hash和hashchange事件构建路由。使用URL的hash部分（即 window.location.hash）来保持UI和URL的同步。
路由地址格式：`http://localhost:3000/#/student`
4. NavLink：是<Link>的一个特定版本，会在匹配上当前的url的时候给已经渲染的元素添加参数
组件的属性有：
activeClassName(string)：设置选中样式，默认值为active
activeStyle(object)：当元素被选中时，为此元素添加样式
exact(bool)：为true时，只有当导致和完全匹配class和style才会应用
strict(bool)：为true时，在确定为位置是否与当前URL匹配时，将考虑位置pathname后的斜线
isActive(func)判断链接是否激活的额外逻辑的功能
5. Redirect重定向，可以跳到想要的组件中
`<Redirect exact from="/" to="/student"></Redirect>`

* react-router-native: 基于react-router，类似react-router-dom，加入了react-native运行环境
下的一些功能。

### API跳转

* 在组件中通过this.props.history控制路由的改变
通过push方法调到指定组件，参数：
1. 路径：`this.props.history.push('/content')` 将新的路径压入到history中
2. 传递一个对象，路径放在pathname中，可传递参数payload
```javascript
this.props.history.push({
    pathname:'/student',
    payload:record,
    search:'?name=tom'
})
componentDidMount() {
    console.log(this.props.location.test);
}
```
这种方式跳转可以通过 `this.props.location.payload` 在组件挂载完成时来获取传递的参数record

* this.props.history的其他方法
this.props.history.go(n) n为正数或者负数，表示前进或者后退
this.props.history.goBack() 后退
this.props.history.goForward() 前进


