**2019/08/21 学习React的第三天**

* this.setState() 参数
1. 参数1：修改的对象
2. 参数2(可选)：回调函数

### Refs 参照
属性ref，可以绑定在render()输出的任何组件上，表示对组件真正实例的引用
ref属性可以接受一个字符串或者回调函数
* ref属性接受字符串：通过`this.refs.字符串名`来访问该组件的真正实例
* ref属性接受回调函数：它在组件被加载或卸载时会立即执行,回调函数的**参数**为该组件的真正实例的引用
```javascript
<MyC ref="myc"/>
<div ref={(node)=>{
    console.log(node);
}}>ref为回调函数</div>
```

### 样式
样式名使用小驼峰命名法
`<div style={{fontSize:'red'}}></div>`

### 表单元素的双向数据绑定
```javascript
this.state = {username:''};
handleChange = (attr,event)=>{
this.setState({[attr]:event.target.value})
}
<input type="text" name="username" value={this.state.username} onChange={this.handleChange.bind(this,'username')}/>
```