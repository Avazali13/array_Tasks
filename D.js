//? Task D
console.log('Task D');


// Bir number arrayı yaradın və buna dəyər mənimsədin.
// Arrayin içində olan sadəcə müsbət ədədləri ayrı, mənfi ədədləri ayrı toplayıb ekrana yazdırın.
//   Example:
//     if array = [ 1, 2, -5, 8, -3, 9 , -7 ]  then print "Müsbət toplam: 20 , Mənfi toplam: -15"
//     if array = [ -7, -3, 2, -8, 5 , -4 ]  then print "Müsbət toplam: 7 , Mənfi toplam: -22"

let sumOfPositive=0;
let sumOfNegative=0;

let arrD=[ 1, 2, -5, 8, -3, 9 , -7 ];

for (const a of arrD){
    if(a>0)sumOfPositive+=a
    else sumOfNegative+=a
}

console.log(`Müsbət toplam: ${sumOfPositive} , Mənfi toplam: ${sumOfNegative}`);