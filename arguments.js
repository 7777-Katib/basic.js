function addNumbers(num1,num2){
    console.log(arguments);   //array like objects
    var sum=0;
    for (let i= 0; i< arguments.length; i++) {
        const element = arguments[i];
        console.log(element);
        sum=sum+element;
    }
    function logInfo(message){
        console.log(message);
    }
    logInfo("gd mrng");


    




    return sum;
}

var result=addNumbers(3,5,8,15);
console.log(result);