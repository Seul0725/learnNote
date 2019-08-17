*2019/08/12*

#### Node也叫NodeJS、Node.js 
Node是一个JavaScript运行环境，实际上是对Google V8引擎的封装

* 每一个js文件都是一个模块，拥有自己的作用域

#### NPM 包管理工具 -- Node Package Manager

* 被复用的代码被称为包或者模块，一个模块中包含了一到多个js文件。
* 在模块中一般还会包含一个package.json的文件，该文件中包含了该模块的配置信息。

* 安装淘宝镜像
`$ npm install -g cnpm --registry=https://registry.npm.taobao.org`

##### 创建一个模块
* 创建模块从创建package.json文件开始，package.json是模块的配置文件。
* 使用npm init命令来初始化package.json文件
* 使用-y参数创建默认package.json文件
dependencies 产品阶段的依赖 依赖关系
devDependencies 项目开发阶段的依赖 环境依赖或测试依赖
```
cnpm intsall --save babel-cli
dependencies{
	babel-cli:''
}
cnpm intsall --save-dev babel-cli
devDependencies{
	babel-cli:''
}
```
* 从node_modules中删除不需要的模块
`$ npm uninstall -g <package_name>`
* 不仅删除node_modules中的依赖，还需要删除package.json中的信息，可以使用—save参数
`$ npm uninstall –save -g <package_name>`

* 搭建本地npm仓库（sinopia）
1. 安装 `$ npm install -g sinopia`
2. 配置 `$ npm set registry http://localhost:4873/`
3. 添加用户 `$ npm adduser --registry http://localhost:4873/`
4. 发布模块 `$ npm publish <module_name>`
5. 启动 `$ sinopia`

#### Babel
使用Babel工具将ES6的代码转换为ES5的代码。
1. 全局安装babel-cli
`$ cnpm install --global babel-cli`
`babel --version` 查看版本号
2. 局部安装babel-preset-latest，安装到当前目录底下
`cnpm install babel-preset-latest`
3. 且添加配置文件配置.babelrc存放在项目的根目录下。
`{"presets":["latest"]}`

>ES2015转码规则
`$ npm install --save-dev babel-preset-es2015 =>es2015`
>最新转码规则
`$ npm install --save-dev babel-preset-latest =>latest`
>不会过时的转码规则
`$ npm install --save-dev babel-preset-env =>env`
4. 开始转换
`babel a.js` 将转换后的代码输出到终端
`babel a.js --out-file b.js` 将转换后的代码输出到b.js文件中
`babel src --out-dir dist` 将src目录中的所有的文件转换成ES5的代码，输出到dist目录中。文件名一致

#### ES6-ES5升级
1. 将当前目录初始化，成为一个Node项目， 在项目中有package.json文件，
json文件中可以声明该项目需要的包-模块。其他人拿到项目之后，使用`cnpm install`,可以直
接下载需要的依赖 `cnpm init -y` 快速初始化一个项目
2. 在项目开发阶段安装babel-cli
`cnpm install --save-dev babel-cli`
3. 在项目开发阶段安装babel-preset-latest
`cnpm install --save-dev babel-preset-latest`
--save-dev是在开发阶段依赖的包
--save 是在打包之后依然依赖的包，
将安装的记录，需要的依赖，记录到package.json文件中
4. 配置文件.babelrc
{'presets':['latest']}
5. 在package.json中编写脚本，执行转换
'build':'babel src --out-dir dist'
6.执行脚本
`cnpm run build`/`npm run build`/`npm build`

#### babel-polyfill垫片，将ES6的功能性新特性转换为ES5的代码
1. 安装
`$ npm install --save babel-polyfill`
2. 在js文件中引用并且使用
`import 'babel-polyfill';` // 或者 `require('babel-polyfill');`