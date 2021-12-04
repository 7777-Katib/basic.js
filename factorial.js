var factorial=1;

for(var i=1;i<=5;i++){
    factorial=factorial*i;
    console.log(i,factorial);
}

function factor(num){
    var factorial=1;

    for(var i=1;i<=num;i++){
        factorial=factorial*i;
       
        
    }
    return factorial;
    

}

console.log(factor(10));