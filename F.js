//? Task F
console.log('Task F');



// 1. Bir 'result' dəyişkəniniz olacaq ki başlanğəc dəyəri 1 olmalıdır. Bir arrayiniz olacaq ki içində boolean və integer dəyərlər olacaq. Hər zaman cüt indexlərdə integer'lər, tək indexlərdə boolean dəyərlər olacaq.
// 2. Arrayin içində olan dəyərlərə uyğun olaraq integerdan sonra gələn boolean true'dursa result dəyərinə vurulacaq. Və arraydəki bütün elementlərə bu uygulandıqdan sonra result ekrana yazdırılacaq.
// ÖNƏMLİ!! true, false burada boolean dəyərdir. String Deyil!!

//   Example:
//     if array = [2, true, 3, false, 7, true, 4 false] then print 14 (2 * 7)  
//         burada 2 və 7 nin qarşısında true olduğuna görə onlar sadəcə bir birinə vurulur.
//     if array = [8, false, 4, false, 11, false, 2 false] then print 1 
//     if array = [8, false, 3, true, 7, false, 1, true, 8, true] then print 24 (3*1*8)
//     if array = [5, false, 2, true, 7, true, 6, true, 9, false] then print 84 (2*7*6) 


let arrF=[2, true, 3, false, 7, true, 4, false];
// let arr = [8, false, 3, true, 7, false, 1, true, 8, true]
// let arr = [5, false, 2, true, 7, true, 6, true, 9, false]
let result=1;

for (const key in arrF){
    if(arrF[key]==true && typeof(arrF[key])=='boolean'){
        result*=arrF[key-1]
    }
}
console.log(result);


