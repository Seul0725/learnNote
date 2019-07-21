*2019/07/10 学习JavaScript的第三天*

* 分支语句
	1).if语句 ECMAScript会调用Boolean()函数将括号内的值转换为boolean
		```if(){}```
	2).if-else
		```if(){
			code;
			}else{}```
		如果代码只有一行，可以省略大括号。
	3).if-else if-else 多条件分支
	4).switch 
		当expression===choice，执行当前case代码块的代码。
```javascript
switch(expression){
			case choice1:
				code;
				break;
			...
			default:
				code;
				break;
		}
```

* 循环语句 
	**三要素：计数器，循环结束条件，迭代器**
	1).for循环
		```for(var i=0;i<n;i++){}```
		死循环：`for(;;){}`
		初始化值，执行了 1 次
		**结束条件，执行了 (n-0)+1 次**
		**迭代条件，执行了 (n-0) 次**
	2).while循环
```javascript
		var i=0;
		while(i<n){
			code;
			i++;
		}
```
		死循环：`while(true){}`
		初始化值，执行了 1 次
		**结束条件，执行了 (n-0)+1 次**
		**迭代条件，执行了 (n-0) 次**
	3).do-while循环
```javascript
		var i=0;
		do{
			code;
			i++;
		}while(i<n)
```
		初始化值，执行了 1 次
		**结束条件，执行了 (n-0) 次**
		**迭代条件，执行了 (n-0) 次**
		
**关键字break:立即跳出循环体,break只对switch和循环语句有效，对if不起作用。**
**关键字continue:跳出当次循环，进入下一次循环**
**关键字label:可以给for循环起别名**


* 冒泡排序--**N个数字要排序完成，总共进行N-1趟排序，每i趟的排序次数为(N-i)次**
```javascript
	var arr = [23,4,53,232,9,100];
	console.log(arr);
	for(var i=0;i<arr.length-1;i++){
	//i+1 ->第几轮
		for(var j=0;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
			//倒序只需要把 > --> <
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
		console.log('这是第'+(i+1)+'轮排序的结果：'+arr);
	}
	console.log(arr);
```
* 阶乘
```javascript
	var num = 5;
	var mult = 1;//控制值
	var str = '';//控制字符串
	for(var i=num;i>0;i--){
		mult *= i;
		if(i==1){
			str += i;
		}else{
			str += i+'*';
		}
	}
	console.log(str+'='+mult);//5*4*3*2*1=120
```

