/**
 * Created by soFlyMan on 2016/10/23.
 */
function Checking(amount) {
    this.balance=amount;
    this.deposit=deposit;
    this.withdraw=withdraw;
    this.toString=toString;

}
function deposit(amount){
    this.balance+=amount;
}
function withdraw(amount){
    if(amount<=this.balance){
        console.log(amount);
        this.balance-=amount;
        console.log(this.balance);

    }
    if(amount>this.balance){
        console.log("Insufficient funds");
    }
}
function toString(){
    return "Balance: "+this.balance;
}
var account=new Checking(500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(750);
console.log(account.toString());
account.withdraw(800);

//递归
function factorial(number){
    if(number==1){
        return number;
    }else{
        return number*=factorial(number-1);
    }
}
console.log(factorial(5));

//原型
var Foo=function(name){
    this.name=name;
}
Foo.prototype.run=function(){
    console.log("I'm running so fast that can't stop at all!");
}
var kick=new Foo("kick");
console.log(typeof kick);
console.log(kick.name);
console.log(kick.run());


// function Person(name, age){ this.name = name; this.age = age; this.getInfo = function(){ console.log(this.name + " is " + this.age + " years old"); }; } var will = new Person("Will", 28);
// var will=new Person("will",28);
// console.log(will._proto_);
// console.log(will.constructor);

function Person() {
   this.name="zhaoweijie";console.log(person1.name);
}
Person.prototype.age="soFly";
var person1=new Person();
console.log(person1.name);
console.log(person1.age);
