/**
 * Created by soFlyMan on 2016/10/25.
 */
var sentence="the quick brown fox jumped over the lazy dog";
var words=sentence.split(" ");
for(var i=0;i<words.length;i++){
    console.log("word"+i+":"+words[i]);
}
// samewords=words;
// words[0]=100;
// console.log(samewords[0]);
var j=[];
function copy(arr1,arr2){
    for(var i=0;i<arr1.length;i++){
        arr2[i]=arr1[i];
    }
}
copy(words,j);
// words[1]=200;
console.log(j[1]);
console.log(words);

// putstr("enter a name to search for: ");
// var name=readline();
// var position=words.indexOf(name);


//查找元素
function findElement(name) {
    var position=words.indexOf(name);
    if(position>=0){
        console.log("found "+name+" at position "+position);
    }else{
        console.log(name+ " not found! "+position);
    }

}
findElement("brown");
findElement("soFly");

//数组的字符串表示
var namestr=words.join();//.toString()
console.log(namestr);

//由已有数组创建数组
var dmpDept=['1','2','3'];
var itDiv=words.concat(dmpDept);
console.log(itDiv);
var splDiv=itDiv.splice(0,3);
console.log(splDiv);

words.unshift("1",2,3);
console.log(words);

//为数组排序
function compare(num1,num2) {
    return num1-num2;

}
var numsort=[3,1,2,100,4,200];
numsort.sort(compare);
console.log(numsort);
//迭代器方法
function square(num) {
    console.log(num,num*num)
}
numsort.forEach(square);

function add(runningTotal,currentTotal) {
    return runningTotal+currentTotal;
}
var numadd=numsort.reduce(add);
console.log(numadd);

function concatStr(x,y){
    return x+" "+y;
}
words=words.splice(3,9);
console.log(words.reduce(concatStr));

function first(word){
    return word[0];
}
var acronym=words.map(first);
console.log(acronym.join(''));

function afterc(str){
    if(str.indexOf("o")>-1){
        return true;
    }
    return false;

}
var misspelled=words.filter(afterc);
console.log(misspelled.join(" "));

function passing(num) {
    return num>=60;

}
var grades=[];
for(var i=0;i<20;i++){
    grades[i]=Math.floor(Math.random()*101)
}
console.log(grades);
console.log(grades.filter(passing));

//二维数组
var gradesA=[[89,77,78],[76,82,81],[91,94,89]];
var total=0;
var average=0.0;
for(var row=0;row<gradesA.length;row++){
    for(var col=0;col<gradesA[row].length;col++){
        total+=gradesA[row][col];
        console.log(gradesA[row][col]);
    }
    average=total/gradesA[row].length;
    console.log("总分："+total+" "+"average:"+average);
    total=0;
    average=0.0;

}
console.log(Math.abs(~2016));

