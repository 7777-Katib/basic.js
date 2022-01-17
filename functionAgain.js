function even(num){
    if(num%2==0){
       return 2*num
    }
    else{
       return num;
    }
    
}


nums=[5,12,89,45,18,8];

for(let i=0;i<nums.length;i++){
    const num=nums[i];
    //even(num);
    
}







////2////
function evenif(friendsAge){
    var evenA=[];
    for (let i = 0; i < friendsAge.length; i++) {
        const age = friendsAge[i];
        var result=even(age);
        evenA.push(result);

    }
    return evenA;
}

friendsAge=[13,17,19,20,18];
var po=evenif(friendsAge);
console.log(po);









