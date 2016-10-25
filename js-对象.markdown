# 对象

## 对象的使用和属性

### 变量

js中的变量是松散类型的（弱类型）

### 数据类型
undefined,null,string,number,object,boolean

数字的字面值不能当作对象使用

>2.toString();//:syntaxError

让数字的字面值看起来像对象。

>2..toString();
2 .toString();
(2).toString();



#### 删除属性

删除属性的唯一方法是使用delete操作符 设置属性为undefined和null只是移除属性和值的关联

# 原型
js使用原型链的继承方式


通过原型链 继承

### 对象创建
Object.create() 接受一个参数，一般是一个对象，返回一个新创建的对象，让创建对象的原型指向这个参数

### 属性读写
#### 属性删除
```
var peroson={age:28,title:'fe'};
delete person.age; //true
delete person['title']; //true
person.age; //undefined
delete person.age; //true

delete Object.prototype; //false

var descriptor=Object.getOwnPropertyDescriptor(Object,'prototype'); //属性描述器
descriptor.configurable; //configruable：是否可配置
```
定义全局或局部变量时
```
var globalVal=1;
delete globalVal;// false

隐式创建全局变量
ohNo=1;
window.ohNo;
delete ohNo; //true

evalue 定义的变量var 是可以删除的
```

var cat=new Object;
cat.legs=4;
cat.propertyIsEnumberable("legs");//是否可枚举

Object.defineProperty(cat,'prince',{enumberable:false,value:1000});//默认为false