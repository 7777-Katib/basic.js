var i=1;
var factorial=1;

while (i<=5)
{
    factorial=factorial*i;
    console.log(i,factorial);
    i++;
}

console.log(factorial);


function factor(n){
    var i=1;
    var fact=1;

    while (i<=n)
    {   
    fact=fact*i;
    
    i++;
    
    }
    return fact;

}

var check=factor(3);
console.log(check);