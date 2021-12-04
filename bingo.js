var friendsAge=[15,17,14,16];

var sonaliAge=friendsAge[2];

friendsAge[1]=1999;

friendsAge.push(15);
friendsAge.push(1000);

console.log(friendsAge);
console.log(friendsAge.length);
friendsAge.pop();
console.log(friendsAge);

var tealine=["kalam","salam","balam"];
tealine.shift();//shift die first tke out
console.log(tealine);
tealine.unshift("Katibul","jk"); //unshift die first a in*/
console.log(tealine);

var part=tealine.slice(1,4);
console.log(part);