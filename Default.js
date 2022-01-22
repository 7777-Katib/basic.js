//1st way
function add(num1,num2){
    if(num2== undefined){   //backup
        num2=10;
    }
    return num1+num2;
}

const total=add(10);
console.log(total);

//2nd way
function added(num1,num2){
    
    num2=num2||2   //backup
    return num1+num2;
}

const tota=added(10);
console.log(tota);


//3rd way
function adde(num1,num2=20){  //backup
    
    
    return num1+num2;
}


const totalli=adde(10,1);
console.log(totalli);