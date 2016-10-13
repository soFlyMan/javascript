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
