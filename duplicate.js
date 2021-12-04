var name=[2,3,4,5,2,6,4,9];
var unique=[];

for (var i=0;i<name.length;i++){
    var ele=name[i];
    var index=unique.indexOf(ele);
    if (index==-1){
        unique.push(ele);
    }

}

console.log(unique);