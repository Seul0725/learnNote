*2019/08/01 学习HTML5API的第二天*

**圆形绘制，直线绘制，曲线绘制中的closePath()，是用来关闭路径的，使用后会把结束点与起点用线连接**

* canvas绘制图像步骤
1. 获取canvas元素对象
2. 获取2d上下文(getContext('2d'))
3. 设定绘图的样式
fillStyle 填充的样式
strokeStyle 描边/轮廓的样式
4. 指定线宽
lineWidth 描边/轮廓的宽度
5. 绘制矩形(填充与绘制边框)
fillRect(x,y,width,height)
strokeRect(x,y,width,height)
6. 清除画布中的矩形框
clearRect()
```javascript
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.fillStyle = 'coral';
context.strokeStyle = 'skyblue';
context.lineWidth = 2;
context.fillRect(0,0,100,200);
context.strokeRect(100,0,100,200);
```

* 绘制圆形步骤
1. 获取canvas元素对象
2. 获取2d上下文(getContext('2d'))
3. 开始创建路径(beginPath())
4. 设置路径(arc(x,y,radius,开始角度,结束角度,是否逆时针))
**Math.PI代表180°，默认顺时针，参数为true时逆时针绘制**
5. 关闭路径(closePath())
6. 设置绘制样式
fillStyle/strokeStyle
**可以对描边的stroke进行线的宽度lineWidth**
7. 进行图形绘制
fill()/stroke()
```javascript
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.beginPath();
context.arc(100,100,100,0,Math.PI*2);
context.closePath();
context.fillStyle = 'coral';
context.fill();
```

* 绘制直线步骤
1. 获取canvas元素对象
2. 获取2d上下文(getContext('2d'))
3. 开始创建路径(beginPath())
3. 指定起点
moveTo(x,y)
4. 指定终点
lineTo(x,y)
5. 关闭路径(closePath())
6. 设置线条样式
strokeStyle
lineWidth
7. 绘制线条
stroke()
```javascript
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.beginPath();
context.moveTo(0,0);
context.lineTo(100,100);
context.closePath();
context.strokeStyle = 'red';
context.stroke();
```

* 绘制曲线
1. 获取canvas元素对象
2. 获取2d上下文(getContext('2d'))
3. 开始创建路径(beginPath())
3. 指定起点
moveTo(x,y)
5. 指定控制点
贝塞尔曲线(两个控制点的坐标及结束点的坐标)：bezierCurveTo(c1x,c1y,c2x,c2y,x,y)
二次贝塞尔曲线：quadraticCurveTo(cx,cy,x,y)
5. 关闭路径(closePath())(根据要求设置)
6. 设置线条样式
strokeStyle/fillStyle(对闭合的图形进行填充)
lineWidth
7. 绘制线条
stroke()/fill()
```javascript
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.beginPath();
context.moveTo(0,0);
// context.bezierCurveTo(200,0,400,200,400,400);
context.quadraticCurveTo(400,0,400,400);
context.closePath();
// context.strokeStyle = 'coral';
// context.stroke();
context.fillStyle = 'cyan';
context.fill();
```

* 绘制线性渐变
1. 获取canvas元素对象
2. 获取2d上下文(getContext('2d'))
3. 创建渐变对象
var gradient = context.createLinearGradient(xstart,ystart,xend,yend)
4. 添加渐变颜色
gradient.addColorStop(offset,color);
参数：0-1之间的偏移量，颜色值
至少需要使用两次addColorStop方法以追加两个颜色(开始颜色和结束颜色)
5. 设置填充渐变
context.fillStyle = gradient;
6. 使用渐变绘制矩形/或者线条
context.fillRect(x,y,width,height);
```javascript
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.beginPath();
context.moveTo(0,0);
context.lineTo(100,100);
context.closePath();
var gradient = context.createLinearGradient(0,50,100,50);
gradient.addColorStop(0,'red');
gradient.addColorStop(1,'blue');
// context.fillStyle = gradient;
// context.fillRect(0,0,100,100);
context.strokeStyle = gradient;
context.stroke();
```

* 绘制径性渐变
1. 获取canvas元素对象
2. 获取2d上下文(getContext('2d'))
3. 开始创建路径，设置路径，结束路径
3. 创建渐变对象
var gradient = context.createRadialGradient(xstart,ystart,radiusStart,xend,yend,radiusend)
4. 添加渐变颜色
gradient.addColorStop(offset,color);
参数：0-1之间的偏移量，颜色值
至少需要使用两次addColorStop方法以追加两个颜色(开始颜色和结束颜色)
5. 设置填充渐变
context.fillStyle = gradient;
6. 使用渐变绘制圆形
context.fill();
```javascript
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.beginPath();
context.arc(50,50,50,0,Math.PI*2);
context.closePath();
var gradient = context.createRadialGradient(50,50,25,50,50,50);
gradient.addColorStop(0,'red');
gradient.addColorStop(1,'blue');
context.fillStyle = gradient;
context.fill();
```

* 绘制变形
1. 平移：context.translate(x,y)
**原点变成移动后的**
2. 缩放：context.scale(x,y);参数为0~1为缩小，大于1为放大
**图形大小变成缩放后的**
3. 旋转：context.rotate(angle);Math.PI为180°
**x,y轴方向变成旋转后的**
```javascript
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.fillRect(0,0,100,100);
context.translate(100,100);
context.scale(0.5,0.5);
context.fillRect(0,0,100,100);
context.rotate(Math.PI/4);
context.fillRect(141,0,100,100);
```

* 绘制图像
1. 获取canvas元素对象
2. 获取2d上下文(getContext('2d'))
3. 创建图像对象
var image = new Image();
4. 设置图像地址
image.src = 'images/a.jpg';
5. 设置绘制图像的函数(图像加载完成后)
image.onload = function(){}
6. 绘制图像
1).context.drawImage(image,x,y);
参数：图像对象，绘制位置的起始x坐标，起始y坐标 
**不传参数显示图像的原始宽高**
2).context.drawImage(image,x,y,w,h);
参数：图像对象，绘制位置的起始x坐标，起始y坐标，绘制图像的宽，高
3).context.drawImage(image,x,y,w,h);
参数：图像对象，开始切割图片的x坐标，开始切割图片的y坐标，被切割图片
的宽高，绘制位置的起始x坐标和y坐标，绘制图像的宽高。
```javascript
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var image = new Image();
image.src = 'images/hand.jpeg';
image.onload = function(){
	// context.drawImage(image,0,0);
	// context.drawImage(image,0,0,100,100);
	context.drawImage(image,100,100,600,600,0,0,100,100);
}
```

* 图像平铺
createPattern(image,type)
type的取值如下:
	no-repeat 不平铺
	repeat-x 横向平铺
	repeat-y 纵向平铺
	repeat 全方向平铺
```javascript
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var image = new Image();
image.src = 'images/hand.jpeg';
image.onload = function(){
	var pattern = context.createPattern(image,'repeat-x');
	context.fillStyle = pattern;
	context.fillRect(0,0,200,100);
}
```

* 图像裁切

```javascript
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.beginPath();
context.arc(50,50,50,0,Math.PI*2);
context.closePath();
context.clip();
var image = new Image();
image.src = 'images/hand.jpeg';
image.onload = function(){
	context.drawImage(image,0,0,100,100);
}
```

* 绘制文本
2D上下文文字修饰：
font 设置文字字体
textAlign 文本对齐方式 start，end，left，right，center
textBaseline 文本的基线，top，hanging，middle，alphabetic，bottom

绘制填充或勾勒文本
fillText(text,x,y,width) 使用fillStyle属性绘制填充文本
strokeText(text,x,y,width) 使用strokeStyle属性向文本描边
width:表示显示文字时的最大宽度，防止文字溢出
```javascript
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.font = 'italic 30px sans-serif';
context.textAlign = 'start';
context.textBaseline = 'top';
context.fillText('hello',100,100);
```
