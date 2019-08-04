*2019/07/30 学习bootstrap的第二天*


#### 表单

1. 支持多行文本的表单控件。可根据需要改变 rows 属性。
`<textarea class="form-control" rows="3"></textarea>`
2. 多选框与单选框
```html
<div class="checkbox disabled">
  <label>
    <input type="checkbox" disabled>
    Option two is disabled
  </label>
</div>
<div class="radio disabled">
  <label>
    <input type="radio" disabled>
    Option three is disabled
  </label>
</div>

<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
</label>
<label class="radio-inline">
  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 1
</label>
```
3. 下拉列表
multiple 属性默认显示多选项。
```html
<select class="form-control">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>
```
4. 静态控件
如果需要在表单中将一行纯文本和 label 元素放置于同一行，为 `<p>` 元素添加 .form-control-static 类即可。
```html
<div class="form-group">
    <label class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <p class="form-control-static">email@example.com</p>
    </div>
</div>
```
5. 禁用状态
```html
<input class="form-control" type="text" disabled>
```
**为 `<fieldset>` 设置 disabled 属性,可以禁用 `<fieldset>` 中包含的所有控件。`<fieldset disabled>`**
6. 只读状态
为输入框设置 readonly 属性可以禁止用户修改输入框中的内容。
`<input class="form-control" type="text" readonly>`
7. 帮助模块
`<span class="help-block">A block</span>`
8. 检验状态
.has-warning 黄色
.has-error 红色
.has-success 浅绿色
`<div class="form-group has-success">`
9. 添加额外的图标
设置相应的 .has-feedback 类并添加正确的图标即可。
```html
<div class="form-group has-success has-feedback">
  <label class="control-label" for="inputSuccess">Input with success</label>
  <input type="text" class="form-control" id="inputSuccess">
  <span class="glyphicon glyphicon-ok form-control-feedback"></span>
</div>
```
10. 尺寸
.input-lg  默认input  .input-sm  .input-xs

.form-group-lg  默认form-group .form-group-sm  .form-group-xs

#### 按钮

1. 通过给按钮添加 .btn-block 类可以将其拉伸至父元素100%的宽度，而且按钮也变为了块级（block）元素。
2. 激活状态
```html
<button type="button" class="btn btn-default btn-lg active">Button</button>
<a href="#" class="btn btn-default btn-lg active">Link</a>
```
3. 为 `<button>` 元素添加 disabled 属性，使其表现出禁用状态。
为基于 `<a>` 元素创建的按钮添加 .disabled 类。**没有禁用的效果，但是点击不了**

#### 图片

1. 通过为图片添加 .img-responsive 类可以让图片支持响应式布局。
2. 让使用了.img-responsive 类的图片水平居中，使用 .center-block 类
3. 形状：img-rounded  img-circle  img-thumbnail



#### 文本颜色

```html
<p class="text-muted">...</p>
<p class="text-primary">...</p>
<p class="text-success">...</p>
<p class="text-info">...</p>
<p class="text-warning">...</p>
<p class="text-danger">...</p>
```

#### 背景颜色

```html
<p class="bg-primary">...</p>
<p class="bg-success">...</p>
<p class="bg-info">...</p>
<p class="bg-warning">...</p>
<p class="bg-danger">...</p>
```

#### 关闭按钮

`<button type="button" class="close"><span>&times;</span></button>`

#### 三角符号

`<span class="caret"></span>`

#### 浮动

```html
<div class="pull-left">...</div>
<div class="pull-right">...</div>
```
#### 清除浮动

通过为父元素添加 .clearfix 类可以很容易地清除浮动

#### 显示或隐藏内容

```html
<div class="show">...</div>
<div class="hidden">...</div>
```

**使用 .text-hide 类或对应的 mixin 可以用来将元素的文本内容替换为一张背景图。**

#### 响应式可见与隐藏

`.visible-*-* .hidden-*` 
可用的 `.visible-*-*` 类是：`.visible-*-block、.visible-*-inline 和 .visible-*-inline-block`


### 组件

#### 字体图标

```html
<button type="button" class="btn btn-default">
  <span class="glyphicon glyphicon-align-left"></span>
</button>
```

#### 下拉菜单

`<div class="dropdown">`
`<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">`
`<ul class="dropdown-menu"`
`<li class="divider"></li>`

* 通过为下拉菜单的父元素设置 .dropup 类，可以让菜单向上弹出（默认是向下弹出的）。
* 右对齐 `<ul class="dropdown-menu dropdown-menu-right">`
* 下拉菜单标题`<li class="dropdown-header">Dropdown header</li>`
* 禁用 `<li class="disabled"><a href="#">Disabled link</a></li>`

#### 按钮组

1. `<div class="btn-group">`
2. 把一组 `<div class="btn-group">` 组合进一个 `<div class="btn-toolbar">` 中就可以做成更复杂的组件。
3. 尺寸 btn-group-lg 默认尺寸 btn-group-sm  btn-group-xs
4. 嵌套：想要把下拉菜单混合到一系列按钮中，只须把 .btn-group 放入另一个 .btn-group 中。
5. 垂直排列：btn-group-vertical
6. 两端对齐：a标签只须将一系列 .btn 元素包裹到 .btn-group.btn-group-justified 中即可。
            button标签需要包在一个btn-group中

#### 输入框组

1. 为 .input-group 赋予 .input-group-addon 或 .input-group-btn 类，可以给 .form-control 的前面或后面添加额外的元素。
2. 尺寸：.input-group-lg 默认尺寸 .input-group-sm

#### 导航

1. `<ul class="nav nav-tabs">`
2. `<li class="active"><a href="#">Home</a></li>`
3. 胶囊式标签页`<ul class="nav nav-pills">`
4. 垂直方向堆叠排列 .nav-stacked
5. 两端对齐
```html
<ul class="nav nav-tabs nav-justified">
  ...
</ul>
<ul class="nav nav-pills nav-justified">
  ...
</ul>
```

#### 导航条

1. 品牌图标 `<a class="navbar-brand" href="#">`
2. 将表单放置于 .navbar-form 之内可以呈现很好的垂直对齐
3. 不包含在 `<form>` 中的 `<button>` 元素，加上 .navbar-btn 后，可以让它在导航条里垂直居中。  
4. 把文本包裹在 .navbar-text中时，为了有正确的行距和颜色，通常使用 `<p>` 标签。   
5. 使用 .navbar-link 类可以让链接有正确的默认颜色和反色设置。
6. 通过添加 .navbar-left 和 .navbar-right 工具类让导航链接、表单、按钮或文本对齐。
7. 添加 .navbar-fixed-top 类可以让导航条固定在顶部;添加 .navbar-fixed-bottom 类可以让导航条固定在底部
8. 如需创建能随着页面一起滚动的导航栏，添加.navbar-static-top
9. 通过添加 .navbar-inverse 类可以改变导航条的外观。(黑色)

#### 路径导航

`<ol class="breadcrumb">`

#### 分页

1. `<ul class="pagination">`  左双尖括号`&laquo;`  右双尖括号`&raquo;`
2. 尺寸：.pagination-lg/默认尺寸/.pagination-sm
3. 翻页：`<ul class="pager">`
4. 对齐链接
```html
<li class="previous"><a href="#"><span>&larr;</span> Older</a></li>
<li class="next"><a href="#">Newer <span>&rarr;</span></a></li>
```
5. 禁用`<li class="previous disabled">`

#### 标签

```html
<span class="label label-default">Default</span>
<span class="label label-primary">Primary</span>
<span class="label label-success">Success</span>
<span class="label label-info">Info</span>
<span class="label label-warning">Warning</span>
<span class="label label-danger">Danger</span
```

#### 徽章

给链接、导航等元素嵌套 `<span class="badge">` 元素，可以很醒目的展示新的或未读的信息条目。

#### 巨幕，大荧幕---- `jumbotron`

#### 页头
页头组件能够为 h1 标签增加适当的空间，并且与页面的其他部分形成一定的分隔。
`<div class="page-header">`

#### 警告框

```html
<div class="alert alert-success">...</div>
<div class="alert alert-info">...</div>
<div class="alert alert-warning">...</div>
<div class="alert alert-danger">...</div>
```
* 关闭警告框
```html
<!-- 务必给 <button> 元素添加 data-dismiss="alert" 属性。 -->
<div class="alert alert-warning alert-dismissible">
  <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>
  Warning!
</div>
```
* 用 .alert-link 工具类，可以为链接设置与当前警告框相符的颜色。

#### 进度条

```html
<div class="progress">
  <div class="progress-bar" style="width: 60%;">
    60%
  </div>
</div>
```

* 颜色：默认是蓝色的；progress-bar-success progress-bar-info  progress-bar-warning  progress-bar-danger
* 条纹效果 progress-bar-striped
* 为 .progress-bar-striped 添加 .active 类，使其呈现出由右向左运动的动画效果。

#### 媒体对象

默认样式的媒体对象组件允许在一个内容块的左边或右边展示一个多媒体内容（图像、视频、音频）。

#### 列表组

```html
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
</ul>
<!-- 给列表组加入徽章组件，它会自动被放在右边。 -->
<ul class="list-group">
  <li class="list-group-item">
    <span class="badge">14</span>
    Cras justo odio
  </li>
</ul>
<!-- 用 <a> 标签代替 <li> 标签可以组成一个全部是链接的列表组 -->
<!-- 为 .list-group-item 添加 .disabled 类可以让单个条目显示为灰色，表现出被禁用的效果。 -->
<div class="list-group">
  <a href="#" class="list-group-item disabled">
    Cras justo odio
  </a>
</div>
<!-- 列表组中的元素也可以直接就是按钮 -->
<div class="list-group">
  <button type="button" class="list-group-item">Cras justo odio</button>
</div>
```
* 颜色：list-group-item-success list-group-item-info list-group-item-warning list-group-item-danger

#### 面板

```html
<div class="panel panel-default">
  <div class="panel-body">
    Basic panel example
  </div>
</div>
```
通过 .panel-heading 可以很简单地为面板加入一个标题容器。也可以通过添加设置了 .panel-title 类的 `<h1>-<h6>` 标签，添加一个预定义样式的标题。不过，`<h1>-<h6>` 标签的字体大小将被 .panel-heading 的样式所覆盖。
* 标题.panel-heading 内容主体.panel-body 脚注.panel-footer

* 颜色：
```html
<div class="panel panel-primary">...</div>
<div class="panel panel-success">...</div>
<div class="panel panel-info">...</div>
<div class="panel panel-warning">...</div>
<div class="panel panel-danger">...</div>
```
* 带表格的面版 如果没有 .panel-body ，面版标题会和表格连接起来，没有空隙。

#### Well 
Well 是一种会引起内容凹陷显示或插图效果的容器

* 尺寸：well-lg/默认尺寸/well-sm