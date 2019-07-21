*2019/07/09 学习JavaScript的第二天*

* JS中的操作符：算数运算符，逻辑运算符，比较运算符，一元运算符，三元运算符等
	算数运算符：`+ - * / %`
	一元运算符：
		1.递增递减操作符：
			a++/a--; 先使用，再++/--
			++a/--a; 先++/--，再使用
		2.赋值运算符：
			单个等号=表示赋值，将右边的值赋值给左边的变量。
			**将算数运算符与赋值运算符连用：**
				`+= -= *= /= %=` 
			例如 `a += 1;` 相当于 `a = a+1;`
        3.+与-
			`+` **相当于调用了Number()**，可以将其他数据类型转换为number类型。
			`-` (1).作用于数值时，数值会变成负数；
				(2).作用于非数值时，会先将非数值转换为number类型，再将得到的数值转换为负数。
	比较运算符：`> < >= <= == != === !==` 用于两个数的比较，并返回true/false
		在判断两个运算数是否相等时，这两个数会进行类型转换，转换规则如下：
			(1).运算数是boolean值时，true会转换为1，false会转换为0
			(2).number和string比，string会先转换为number再进行比较
			(3).null == undefined;为true
			(4).null == null;为true，其他为false
			(5).undefined == undefined;为true，其他为false
			(6).NaN和其他类型的值比，都会返回false，`包括自身`
	逻辑运算符：`&& || ！`
		短路运算符：`&& ||`
			**逻辑运算的短路特性：
				(表达式1) && (表达式2) 如果表达式1为假，则表达式2不会进行运算，即表达式2“被短路”
				(表达式1) || (表达式2) 如果表达式1为真，则表达式2不会进行运算，即表达式2“被短路”**
			逻辑与`&&`--有假则假，同真才真
				假，假性值，转换成boolean类型为false。
				**`null,undefined,NaN,0,'',false`**
			逻辑或`||`--有真则真，同假才假
		逻辑非 `!`--先将任意类型的数值转换为Boolean，然后取反
			`!!`取反之后再取反，相当于没有取反，只做了boolean类型的转换
			`!!`**相当于调用了Boolean()**
	三目运算符：
		`variable = boolean_expression ? true_value : false_value;`
		如果boolean_expression为true,将true_value赋给variable，否则将false_value赋给variable

* JS中的类型转化
	1.其他类型转换为string
		(1).toString()函数
			**除了null，undefined，其他三种基本数据类型的变量均有一个toString()函数
			不可直接使用number类型的值调用toString();可先声明一个变量再进行调用。**
**默认情况下toString()是以十进制格式返回数值的字符串表示，可以向括号中传入指定进制的数值，如2,8,16**
		(2).String()函数
			可以将其他任意基本数据类型的值转换为字符串，包括null，undefined
		(3).使用+''转换
			将其他基本数据类型使用拼接字符串的形式转换
			```console.log(123+'');//'123'```
			```console.log(true+'');//'true'```
	2.其他类型转为boolean
		(1).Boolean()函数
			**"",0,NaN,undefined,null,false都为false，其他都为true**
		(2).使用`!!`转换
	3.其他类型转为number
		(1).Number()函数  (2).使用`+`转换或者`-(-n)`
			如果要转换的值为null,undefined,boolean,number
				Number(true); //1
				Number(false);//0
				Number(null); //0
				Number(undefined); //NaN
				Number(10);   //10 
			如果要转换的值为string
				Number("123"); //123
				Number("234.1"); //234.1
				Number("+12.1"); //12.1
				**`Number("1+2.3"); //NaN`**
				Number("0xa"); //10 十六进制转换为十进制的值
				Number("010"); //10 【注意！】不会当做八进制被解析
				`Number(""); //0`
				`Number("123ac"); //NaN`
				Number(" 12"); //12 注意前面有空格
		(3).parseInt()将其他类型的值转换为整型
			**null,undefined,boolean均转换为NaN**
			parseInt(1.5) //1 直接舍掉小数部分
			如果要转换的值为string
				parseInt("123"); //123
				parseInt("234.1"); //234
				parseInt("+12.1"); //12
				**`parseInt("1+2.3"); //1`**
				parseInt("0xa"); //10 十六进制转换为十进制的值
				**`parseInt('0xa',10);//0`将十六进制以十进制进行转换，遇到非数字停止**
				parseInt("010"); //10 【注意！】不会当做八进制被解析
				`parseInt(""); //NaN`
				`parseInt("123ac"); //123;`
		(4).parseFloat()将其他类型的值转换为浮点型
			**null,undefined,boolean均转换为NaN**
			parseFloat(1.5) //1.5 保留小数
			parseFloat(1.0) //1
			如果要转换的值为string
				parseFloat("123"); //123
				parseFloat("234.1"); //234.1
				parseFloat("+12.1"); //12.1
				**`parseFloat("1+2.3"); //1`**
				`parseFloat("0xa"); //0 【注意！】不会当做十六进制被解析`
				parseFloat("010"); //10 【注意！】不会当做八进制被解析
				`parseFloat(""); //NaN`
				`parseFloat("123.23ac"); //123.23;`
	注意：加法`+` (m+n)
		1.当m,n不为String,Object类型的时候，先将m,n转换为Number类型，然后再进行计算
		2.当m,n有一个为String,另一个操作数(基本数据类型)要先转换为String，然后再进行拼接
		3.当m,n 有一个为object，如果该对象既重写toString,又重写了valueOf方法，先调用valueOf方法获
		取返回值，将该返回值和另外一个操作数进行运算。如果该对象没有重写valueOf方法，将调用toString
		方法获取返回值，将该返回值和另外一个操作数进行运算。
		``` o = {name:"briup",valueOf:function(){return "1";}}
			o+1; //11```
	* 默认情况下，ECMAScript会将小数点后带有6个零以上的浮点数转化为科学计数法
	* 在进行算术计算时，所有以八进制十六进制表示的数值都会被转换成十进制数值。
	* 保存浮点数需要的内存是整数的两倍，所以 var b = 1.0; //都将解析为1 
	* 避免测试某个特定的浮点数值，例如 `0.1+0.2 //结果不是0.3，而是0.30000000000000004` 
		如果需要使用0.3可以这样转换 `(0.1*10+0.2*10)/10`






