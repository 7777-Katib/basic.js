
function reverse(str){

    var reverse='';
    for (var i=0;i<str.length;i++){
        var char=str[i];
        reverse=char+reverse;
    }
    return reverse;
}


var kl="hello every person bingo";
var fr=reverse(kl);
console.log(fr);