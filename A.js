//? task A
console.log('Task A');


// Bir 'myArray' adli deyisen yaradin ve her hansi bir arrayi menimsedin .
// Algoritma girilən arrayin içindəki elementlərin hər birindən neçə dənə olduğunu ekrana yazdırmalıdır.
// Example:
// input => [5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7 ] => 
//   print:
//     5 -> 1 ədəd
//     2 -> 2 ədəd
//     salam -> 2 ədəd
//     necesen -> 1 ədəd
//     56 -> 1 ədəd
//     7 -> 3 ədəd

const arr=[5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7 ];
const myArray=arr;
for(let i=0;i<arr.length;i++){
    let counter=1;
    for(j=i+1;j<arr.length;j++){
        if(myArray[i]==myArray[j]){
             counter++;
             arr.splice(j,1);
             --j;
        }
       
    }
console.log(`${myArray[i]}->${counter} eded`);
}