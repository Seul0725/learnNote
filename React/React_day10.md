*2019/08/31 学习React的第十天*

### DvaJS
基于React和redux的轻量级和elm式框架。
* elm：通过 reducers, effects 和 subscriptions 组织 model，简化 redux 和 redux-saga 引入的概念
**异步获取数据，同步展示数据**
* 安装dva-cli
`cnpm/npm install dva-cli -g`
`cnpm install axios --save`
* 查看版本号(v0.9.1以上)
`dva -v`
* dva项目目录结构
src
    assets 静态资源，图片、CSS文件等
    components   可复用的UI组件
    models  数据仓库，redux,redux-saga
    routes/pages  页面组件
    services  所有要访问的后台请求
    utils   request的配置fetch的使用，axios配置
* models的合并(redux)
在文件中models/index.js:
```javascript
const context = require.context('./', false, /\.js$/);
export default context
    .keys()
    .filter(item => item !== './index.js')
    .map(key => context(key));
```
在入口文件index.js中引入：
```javascript
require("./models").default.forEach(key => app.model(key.default));
```

### Ant Design Pro

* 安装
`yarn create umi pro-app`
类型type选择 `ant-design-pro`
语言选择 `TypeScript`
* 下载依赖
进入项目下载依赖 `yarn/cnpm install`(速度很慢)
使用tyarn加速 `cnpm install yarn tyarn -g`,再执行 `tyarn`
* 启动项目
`yarn start`



