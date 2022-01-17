function explainCallBack(name,age,task){
    console.log("Hello",name);
    console.log("your age",age);
    task();   //calling back function from parameter...
}

function washHand(){
    console.log("wash hand with soap");
}

function takeshower(){
    console.log("Take shower");
}

function scroll(){
    console.log("bingo chati")
}
explainCallBack("Katib bro",17,washHand);
explainCallBack("Pinku bro",13,takeshower);
explainCallBack("Dildi bro",15,scroll);