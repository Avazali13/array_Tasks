//? Task B
console.log('Task B');


// 'firstArr' ve 'secondArr' adli iki deyisken yaradib, her hansi array menimsedin.
// Algoritma göndərilən iki arrayi qarşılaşdırıb içindəki elementlərin eyni olub olmadığını yoxlamalı və ona görə boolean dəyər ekrana çap etməlidir.
// Example:
//   [1, 2, 3], [1, 2, 3] => true
//   [1, 2, 3], [3, 2, 1] => true
//   [1, 2], [1, 2, 2] => false
//   ["salam", 2], ["salam", "2"] => false
//   [1, 4, "at"], ["at", 1, 4] => true
//   ["At", 1], [1, "aT"] => false

const firstArr=[1,2,3,5,4];
const secondArr=[3,2,4,1,5];
let isSame=true;
let con=0;

if(firstArr.length==secondArr.length){
for(let i=0;i<firstArr.length;i++){
    for(let j=0;j<firstArr.length;j++){
     if(firstArr[i]===secondArr[j]) 
             con++;
 }
}
if(con===firstArr.length)
{console.log(isSame)}
else{console.log(!isSame)}
}


else{console.log(!isSame)}



