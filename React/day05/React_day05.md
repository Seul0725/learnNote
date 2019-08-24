**2019/08/23 学习React的第五天**

### 路由跳转
1. API跳转
    `this.props.history.push('/course')`
2. NavLink
    `<NavLink to="/course"></NavLink>`
3. Link
    `<Link to="/course"></Link>`
4. a标签
    `<a href="#/course"></a>`

### 路由传参
1. API传参
```javascript
this.props.history.push({
    pathname: "/course",
    test: 'test',
    state: {name: 'tom'}
})
//获取
this.props.location.test
this.props.location.state
```
2. 查询字符串传参
```javascript
<NavLink to="/course?name=tom">NavLink跳转</NavLink>
//获取
this.props.location.search
```
3. 动态路由传参
```javascript
<Route path="/sc/:id" component={Course}></Route>
<NavLink to="/sc/2">NavLink跳转-动态路由</NavLink>
//获取
this.props.match.params.id
```

### Ant Design
antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

* 高级配置
1. yarn add antd
2. yarn add react-app-rewired customize-cra
3. 修改package.json文件
/* package.json */
"scripts": {
    -   "start": "react-scripts start",
    +   "start": "react-app-rewired start",
    -   "build": "react-scripts build",
    +   "build": "react-app-rewired build",
    -   "test": "react-scripts test",
    +   "test": "react-app-rewired test",
    }
4. 在项目根目录创建一个 config-overrides.js 用于修改默认配置。
5. yarn add babel-plugin-import
6. 修改config-overrides.js
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);
7. 按需引入
import { Button } from 'antd';
8. 重启yarn start
