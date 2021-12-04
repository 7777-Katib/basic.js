//1
function feetToMile(n){
    var feet=1/5280*n;
    return feet;
}

var result= feetToMile(10);
console.log(result);



//2

function woodCalculator(t,c,b){
    var chair=25*c;
    var table=50*t;
    var bed=100*b;

    var total=chair+table+bed;
    return total;
}

var bin=woodCalculator(2,3,1);
console.log(bin,"cubic feet");


//3


function brickCalculator(n){
    if (n<=10){
        var need=15000*n;
        return need;
    }

    else if(n>10 && n<=20){
        need=15000*10;
        var pin=12000*(n-10);
        var total=pin+need;
        return total;
    }

    else if(n>20){
        need=15000*10;
        var ni=12000*10;
        pin=10000*(n-20);
        var total=need+ni+pin;
        return total;
    }
}

var tik=brickCalculator(22);
console.log(tik);



//4
function tinyFriend(n){
    
    var c=n[0].length;
    for(var i=1;i<n.length;i++){
        var p=n[i];
        var char=n[i].length;
        if (c<char){
            c=c;
            
        }
        else{
            c=char;
        }
       
     
    }
    return a;
 
    
   


}

var need=["katib","figo","kanchon","cat","limon"];
var goat=tinyFriend(need);
console.log(goat)





