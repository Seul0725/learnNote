*2019/08/02 学习HTML5API的第三天*


**类数组转数组：Array.from(arrayLike)**

### 拖放API
将想要拖放的对象元素的draggable属性设为true,另外img与a元素默认允许拖放

##### 拖放事件
* 拖动事件
1. dragstart 
按下鼠标并开始移动鼠标时，会在拖放的元素上触发dragstart事件。
通过ondragstart事件处理程序来运行JavaScript代码
2. drag
触发dragstart事件后，随即会触发drag事件，而且在元素被拖动期间会持续触发该事件
3. dragend
当拖放停止时(无论是把元素放到了有效的放置目标，还是放置到了无效的放置目标上)都会触发dragend事件

* 放置事件
1. dragenter 
只要有元素被拖动到放置目标上，就会触发dragenter事件，元素被拖出了放置目标，会触发dragleave
2. dragover
在被拖动的元素还在放置目标的范围内移动时，就会持续触发该事件
3. drop
将拖动元素放置到目标元素上的时候会激发

###### 拖放事件生命周期
dragstart-->drag-->dragenter-->dragover-->drop-->dragend

#### 自定义放置目标
方法是重写dragover事件，阻止事件的默认行为。
event.preventDefault();

#### dataTransfer对象
因为它是事件对象的属性，所以只能在拖放事件的事件处理程序中访问dataTransfer对象。

* 获取方法
event. dataTransfer
* 方法
1. dataTransfer.setData(key,val); 在dataTransfer中设置值,在dragstart赋值
2. dataTransfer.getData(key); 获取由setData保存的值,在drop取值
3. clearData(key) 
从DataTransfer对象或ClipboardData对象中删除指定格式或全部key值为string的数据。仅在dragstart事件中调用，
在其他事件中调用会抛InvalidStateError
4. setDragImage(element,x,y) 指定一幅图像，当拖放发生的时候，显示在光标下方
* 属性
1. effectAllowed 
可能的值：link/copy/move
该属性与dropEffect属性结合起来可以设定拖放时的视觉效果。
仅能在dragstart事件中设定，其他事件中设置均无效
2. dropEffect
可能的值：link/copy/move
仅能在dragover事件中指定。
3. types 
数据类型为DOMStringList，存储DataTransfer对象中所有数据项的数据类型
4. items
数据类型为DataTransferItemList，存储DataTransfer对象中所有的数据项