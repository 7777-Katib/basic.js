//n!=(n-1)!*n
//function er vitor oi function call korle seta holo recursive function

function factorial(n){
    if (n==0){
        return 1;
    }

    else{
        return n*factorial(n-1);
    }
}

var check=factorial(8);
console.log(check);



















