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
function findElement(name) {
    var position=words.indexOf(name);
    if(position>=0){
        console.log("found "+name+" at position "+position);
    }else{
        console.log(name+ " not found!");
    }

}
findElement("brown");

