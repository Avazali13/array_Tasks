//? Task G
console.log('Task G');


// 1. Bir array yaradın və buna dəyər mənimsədin.
// 2. Arrayin içində olan dəyərləri təkrar eləməyəcək şəkildə ekrana yazdırın.
// Example:
// if array = [1, "salam", 1, true, true, false, false, false, 5, "5"] then print "1 salam true false 5"
// if array = [2, "class", 1, true, "class", 16, 17, 18,  "17"] then print "2 class 1 true 16 17 18"


let arrG=[1, "salam", 1, true, true, false, false, false, 5, "5",7,'7',7];
//  arrG= [2, "class", 1, true, "class", 16, 17, 18,  "17"] 


for (let i=0;i<arrG.length;i++){
    for(let j=i+1;j<arrG.length;j++){
        if(arrG[i]===arrG[j]){
            arrG.splice(j,1)
            --j
        }
    }
}

for(let i=0;i<arrG.length;i++){
    if(typeof(arrG[i])=='number'){
       for(let j=i+1;j<arrG.length;j++){
        if(typeof(arrG[j])!=="boolean" && arrG[i]==arrG[j]){
           arrG.splice(j,1)
           --j
        }
       }
}
}

console.log(arrG);
