function isLeapYear(year){
    const remainder=year%4;
    if((remainder==0) && (year%100!=0) || (year%400==0)){
        console.log("leapyear");
    }
    else{
        console.log("not leapyear");
    }

}

const check=isLeapYear(2000);
