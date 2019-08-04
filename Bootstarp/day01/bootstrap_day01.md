*2019/07/29 学习bootstrap的第一天*


#### HTML5 文档类型

Bootstrap 使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。

#### 移动设备优先

Bootstrap 是移动设备优先的。
为了确保适当的绘制和触屏缩放，需要在 `<head>` 之中添加 viewport 元数据标签。
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

#### 布局容器

Bootstrap 需要为页面内容和栅格系统包裹一个 .container 容器。

`.container` 类用于固定宽度并支持响应式布局的容器。
`.container-fluid` 类用于 100% 宽度，占据全部视口（viewport）的容器。

**注意，由于 padding 等属性的原因，这两种 容器类不能互相嵌套。**

#### 栅格系统

`Bootstrap`提供了一套响应式、移动设备优先的流式栅格系统，
随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。

##### 栅格参数

超小屏幕 手机 (<768px) 		 .col-xs-
小屏幕 平板 (≥768px)  		 .col-sm- 
中等屏幕 桌面显示器 (≥992px)  .col-md-
大屏幕 大桌面显示器 (≥1200px) .col-lg-
.container 最大宽度 	None （自动） 	750px 	970px 	1170px

**如果在一个 .row 内包含的列（column）大于12个，包含多余列（column）的元素将作为一个整体单元被另起一行排列。**

##### 列偏移

使用 `.col-md-offset-*` 类可以将列向右侧偏移。

##### 嵌套列

为了使用内置的栅格系统将内容再次嵌套，可以通过添加一个新的`.row`元素和一系列`.col-sm-*`元素到已经存在的       
`.col-sm-*` 元素内。

##### 列排序

通过使用 `.col-md-push-*` 和 `.col-md-pull-*` 类就可以很容易的改变列（column）的顺序。

***

### 排版

#### 标题

HTML 中的所有标题标签，`<h1> 到 <h6>` 均可使用。另外，还提供了 .h1 到 .h6 类，
为的是给内联（inline）属性的**文本**赋予标题的样式。
在标题内还可以包含 `<small>` 标签或赋予 .small 类的元素，可以用来标记副标题。

#### 页面主体

Bootstrap 将全局 font-size 设置为 14px，line-height 设置为 1.428。这些属性直接赋予 `<body>` 元素和所有段落元素。另外，`<p>` （段落）元素还被设置了等于 1/2 行高（即 10px）的底部外边距（margin）。

#### 中心内容

通过添加 .lead 类可以让段落突出显示。

#### 内联文本元素

1. 使用mark标签标记文本
2. 对于被删除的文本使用 `<del>` 标签。
3. 对于没用的文本使用 `<s>` 标签。
4. 额外插入的文本使用 `<ins>` 标签。
5. 为文本添加下划线，使用 `<u>` 标签。
6. 小号字体，使用 `<small>` 标签包裹，其内的文本将被设置为父容器字体大小的 85%。
7. 着重标签strong
8. 用斜体 `em` 强调一段文本。

#### 文本对齐

1. text-left 左对齐
2. text-center 居中
3. text-right 右对齐
4. text-justify 两端对齐
5. text-nowrap 不换行

#### 改变大小写

1. text-lowercase 全小写
2. text-uppercase 全大写
3. text-capitalize 首字母全大写

### 缩略语

当鼠标悬停在缩写和缩写词上时就会显示完整内容，Bootstrap 实现了对 HTML 的 `<abbr>` 元素的增强样式。

#### 基本缩略语

`<abbr title="attribute">attr</abbr>`

#### 首字母缩略语

**包裹的单词会全变成大写**
`<abbr title="HyperText Markup Language" class="initialism">HTML</abbr>`

#### 地址

在每行结尾添加 `<br>` 可以保留需要的样式。
```html
<address>
  <strong>Twitter, Inc.</strong><br>
  1355 Market Street, Suite 900<br>
  San Francisco, CA 94103<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>
```

#### 引用

将任何 HTML 元素包裹在 `<blockquote>` 中即可表现为引用样式。对于直接引用，建议用 `<p>` 标签。
添加 `<footer>` 用于标明引用来源。来源的名称可以包裹进 `<cite>` 标签中。
通过赋予 .blockquote-reverse 类可以让引用呈现内容右对齐的效果。

#### 列表

移除了默认的 list-style 样式和左侧外边距的一组元素（只针对直接子元素）。
`<ul class="list-unstyled">
  <li>...</li>
</ul>`
通过设置 display: inline-block; 并添加少量的内补（padding），将所有元素放置于同一行。
`<ul class="list-inline">
  <li>...</li>
</ul>`
.dl-horizontal 可以让 `<dl>` 内的短语及其描述排在一行。
**通过 text-overflow 属性，水平排列的描述列表将会截断左侧太长的短语。**

#### 代码

1. 通过 `<code>` 标签包裹内联样式的代码片段。
2. 通过 `<kbd>` 标签标记用户通过键盘输入的内容
3. 多行代码可以使用 `<pre>` 标签。为了正确的展示代码，注意将尖括号做转义处理。
**使用 .pre-scrollable 类，其作用是设置 max-height 为 350px ，并在垂直方向展示滚动条。**
4. 通过 `<var>` 标签标记变量。
5. 通过 `<samp>` 标签来标记程序输出的内容。

#### 表格

1. 为任意 `<table>` 标签添加 .table 类可以为其赋予基本的样式 — 少量的内补（padding）和水平方向的分隔线。
2. 通过 .table-striped 类可以给 `<tbody>` 之内的每一行增加斑马条纹样式。
3. 添加 .table-bordered 类为表格和其中的每个单元格增加边框。   
4. 通过添加 .table-hover 类可以让 `<tbody>` 中的每一行对鼠标悬停状态作出响应。
5. 通过添加 .table-condensed 类可以让表格更加紧凑，单元格中的内补（padding）均会减半。

##### 通过以下状态类可以为行或单元格设置颜色。

1. active 鼠标悬停在行或单元格上时所设置的颜色
2. success 标识成功或积极的动作
3. info 标识普通的提示信息或动作
4. warning 标识警告或需要用户注意
5. danger 标识危险或潜在的带来负面影响的动作

##### 响应式表格

将任何 .table 元素包裹在 .table-responsive 元素内，即可创建响应式表格，
其会在小屏幕设备上（小于768px）水平滚动。当屏幕大于 768px 宽度时，水平滚动条消失。
```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```

##### 表单

所有设置了 .form-control 类的 `<input>`、`<textarea>` 和 `<select>` 元素
都将被默认设置宽度属性为 width: 100%;。

##### 内联表单

为 `<form>` 元素添加 .form-inline 类可使其内容左对齐并且表现为 inline-block 级别的控件。只适用于视口（viewport）至少在 768px 宽度时（视口宽度再小的话就会使表单折叠）。

##### 水平排列的表单

通过为表单添加 .form-horizontal 类，并联合使用 Bootstrap 预置的栅格类，可以将 label 标签和控件组水平并排布局。这样做将改变 .form-group 的行为，使其表现为栅格系统中的行（row）




