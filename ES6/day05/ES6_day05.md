*2019/08/16 学习ES6的第五天*

#### Promise.resolve() 方法
将现有对象转化为Promise对象，并且Promise对象的状态为Resolved状态
`let p1 = Promise.resolve(p);`
* 参数p的类型：
1. 参数是一个Promise实例
不做任何修改，原封不动的返回这个实例
2. 参数是一个thenable对象
**thenable对象指的是具有then方法的对象**
将这个对象转化为Promise对象，并且立即执行对象中的then方法
3. 参数是一个非thenable对象
返回一个新的Promise对象，状态为resolved
4. 不带参数
直接返回一个Resolved状态的Promise对象。

##### Promise.reject() 方法
返回一个新的Promise对象，状态为rejected

##### finally() 方法
用于指定不管Promise对象最后状态如何，都会执行的操作。接受一个回调函数，不管怎样都会执行。

##### Promise.all() 方法
用于将多个 Promise 实例，包装成一个新的 Promise 实例。
`let p = Promise.all([p1,p2,p3]);`
p的参数由p1,p2,p3决定，分为两种情况：
1. 三个状态都为resolved时，p的状态才为resolved，返回的是由p1,p2,p3返回值组成的数组
2. 三个中有一个状态为rejected，p的状态就为rejected，返回第一个被reject的实例的返回值

##### Promise.race() 方法
用于将多个 Promise 实例，包装成一个新的 Promise 实例。
`let p = Promise.race([p1,p2,p3]);`
只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。
p的返回值中放的是率先改变状态的Promise实例的返回值

### class 类
是一个语法糖，通过class关键字，可以定义类。
ES6 的类，完全可以看作构造函数的另一种写法。

* 实例属性：在constructor方法中定义
* 实例方法：在类内部没有static修饰的方法
* 静态属性：在类外部，使用'类名.属性名'定义的属性，只能通过类去调用
* 静态方法：在类内部，使用static关键字定义的方法，只能通过类去调用
```javascript
class Animal{
    constructor(name,age){
        //实例属性
        this.name = name;
        this.age = age;
    }
    //实例方法
    sayName(){
        console.log(this.name);
    }
    //静态方法
    static say(){
        //this指向的是类，而不是实例
        console.log('static');
    }
}
//静态属性
Animal.prop = 1;
//创建实例
let animal = new Animal('tom',18);
```

#### 类的继承
类中通过extends关键字实现继承
```javascript
class Dog extends Animal{
    constructor(name,age,color){
        //在子类构造器中调用父类构造器中的this
        super(name,age);
        //只有调用super之后，才可以使用this关键字，否则会报错。
        this.color = color;
    }
}
let dog = new Dog('tom', 10, 'black');
```

* class作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链：
1. 子类的__proto__属性，表示构造函数的继承，总是指向父类
2. 子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性
概括：
1. 子类对象继承父类对象
2. 子类的原型对象继承父类的原型对象
```javascript
//静态属性和方法的继承 子类继承父类
console.log(Dog.__proto__ === Animal); //true
//实例属性和方法的继承 子类的原型对象继承自父类的原型对象 
console.log(Dog.prototype.__proto__ === Animal.prototype); //true
```