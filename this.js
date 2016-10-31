/**
 * Created by soFlyMan on 2016/10/31.
 */
//call aplly 改变this的指向 实现继承
function Pet(words){
    this.words=words;
    this.speak=function(){
        console.log(this.words);
    }
}
function Dog(words){
    Pet.call(this,words);
}
var dog=new Dog('wang');
console.log(dog);