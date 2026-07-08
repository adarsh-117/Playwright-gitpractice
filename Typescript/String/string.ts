//A string is a sequence of characters used to represent text.

//There are 3 ways to define String                         
// Double Quotes                            let name: string = "Ganesh";                             
// Single Quotes                            let city: string = 'Pune';
// Template Literals (Backticks)            let message: string = `Welcome to TypeScript`;

let people ="Puneri";
let city ='Pune';
let tick =`my city name is ${city}`;

console.log(people);
console.log(city);
console.log(tick);


//String Immutability
//Strings are immutable, meaning they cannot be changed after creation.


let size : string = "Large";
size.replace("L","l");
console.log(size);


let shirt_size : string = "Large";
shirt_size=shirt_size.replace("L","l");       //this will create a new veriable
console.log(shirt_size);


//Difference Between string and String in TypeScript
// TypeScript provides two ways to represent strings:
// string (Primitive Type) // Recommended //small s
// String (Wrapper Object)  //Generally Avoid //capital S


let river ="Pravara";
console.log(river);
console.log(typeof river);


let fall : String = new String ("Randha fall");
console.log(fall);
console.log(typeof fall);

// let price : Number =new Number (300);
// console.log(price)
// console.log(typeof price);






