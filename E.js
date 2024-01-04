//? Task E
console.log('Task E');


// Bir number arrayı, 'limit' adlı bir number dəyişkən yaradın və bunlara dəyər mənimsədin.
// Arrayin içində olan ədədlərdən limit'dən yüksək olanlarını seçib yeni bir arraya doldurun və yeni arrayi ekrana yazdırın.
//   Example:
//     if array = [ 1, 2, -5, 8, -3, 9 , -7 ] and limit = 4  then print [8, 9]
//     if array = [ -7, -3, 2, -8, 5 , -4 ]  and limit = -4  then print [-3, 2, 5]


let arrE=[ 1, 2, -5, 8, -3, 9 , -7 ];
// arr = [ -7, -3, 2, -8, 5 , -4 ]
let limit =4;
let newArr=[];

for (const a of arrE){
    if(a>limit) newArr.push(a)
}
console.log(newArr);