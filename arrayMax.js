
var marks=[1,2,3,4,5,6,7];
var max=0;
for (var i=0;i<marks.length;i++){
   var ele=marks[i];
   max+=ele;
}

console.log(max);




function getArraySum(n){
    var max=0;
    for (var i=0;i<n.length;i++){
        var ele=n[i];
        max+=ele;
    } 

    return max;
}

var numbers=[1,2,3,4,5,6,7];
var result=getArraySum(numbers);
console.log(result);

var bin=[23,45,67];
var total=getArraySum(bin);
console.log(total);