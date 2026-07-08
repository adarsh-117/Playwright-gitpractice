

//Conditional (Ternary) Operators

let age=16;
let output = age>=18 ? 'Adult':'Child';

console.log(output);

//2
let income=2000;
let loan= income>50000 ? 'Applicable' : 'Not applicable';
console.log(loan);

//3
let weight=67;
let diet= weight>100 ? 'Need Diet' : 'Healthy'
console.log(diet);

//4
let carage=1
let puc= carage<3 ? 'PUCNeeded': 'No pUC'
console.log(puc);


// let human='no BJP supporter';
// let andhbhakt = human='BJP supporter' ? 'Andhbhakt' : 'Good brains'
// console.log(andhbhakt);

//console.log('-----------------------------------------------------------------------');

//type of 
//it shows data type of varible
//console.log(typeof var);

console.log(typeof carage);


//console.log('-----------------------------------------------------------------------');

//Nullish Coalescing Operator (??)
//Returns right-side value only when left-side value is null or undefined.

 let username = null;
let result = username ?? "Guest";
console.log(result);	// Guest


let stdId=null;
let tempId= stdId ?? "new"
console.log(tempId);

let carno=null;
let redno= carno ?? 'MH 0117';
console.log(redno);



let mobile1 = null;
let email= mobile1 ?? 'gmail';
console.log('If mobile is not present consider', email);
