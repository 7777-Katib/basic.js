

function isPrime(n){
    for (i=2;i<n;i++){
        if(n%i==0){
            return "not a prime";
        }
    }
    return "prime"
}


var check=isPrime(128);
console.log(check);

