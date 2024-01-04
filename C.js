//? Task C
console.log('Task C');


// Bir number arrayı yaradın və buna dəyər mənimsədin.
// Arrayin içində olan ən böyük ikinci və ən kiçik ikinci ədədləri ekrana yazdırın.
//   Example:
//     if array = [ -7, -71, 66, 11 ,3 , 8 , 67]  then print "Ən böyük ikinci: 66, Ən kiçik ikinci -7"  
//     if array = [ 1, 6, 0, 5 , 3 , 8 , 16]  then print "Ən böyük ikinci: 8, Ən kiçik ikinci 1"






//          method 1          ==>>

 let arrC=[-7, -71, 66, 11 ,3 , 8 , 67];
let sortedArr=[];
for(let i=0;i<arrC.length;i++){
    let min=Math.min(...arrC)
     let indexx=arrC.indexOf(min);
     arrC.splice(indexx,1)
     sortedArr.push(min)
     --i
}

console.log(`Ən böyük ikinci: ${sortedArr[sortedArr.length-2]}, Ən kiçik ikinci ${sortedArr[1]}`);





//        method 2 (with sorting)       ==>>

//  let arrC=[ -7, -71, 66, 11 ,3 , 8 , 67];
// let sorting=arrC.sort(function(a,b){return(a-b)});
// console.log(`Ən böyük ikinci: ${sorting[sorting.length-2]}, Ən kiçik ikinci ${sorting[1]}`);
