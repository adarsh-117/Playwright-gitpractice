//Methods of string

//1
//String Concatenation : Combining two or more strings.

let firstName = "Virat";
let lastName="Kohali";
let jNum="18";

console.log(firstName,"" + lastName ,""+ jNum);
console.log(`The player name is ${firstName} ${lastName} ${jNum}`);

//2
//Length : Returns the number of characters.

let planet="earth";
console.log(planet.length);


let Sun="Suraj is Sun";
console.log(Sun.length);


//3 
// toUpperCase() : Converts to uppercase.

let Mark : string = "good";
console.log(Mark.toUpperCase());
 
//4
//toLowerCase() : Converts to lowercase.

let mobile :string = "MOTOrola";
console.log(mobile.toLowerCase());


//5
//charAt() : Returns character at specified index.

let aa:string = "triangle";
console.log(aa.charAt(3));
console.log(aa.charAt(5));

//6
//indexOf() : Returns first occurrence position.

let b :string ="Tringle";
console.log(b.indexOf('i'));
console.log(aa.indexOf('a'));

//7
//lastIndexOf() : Returns last occurrence position.

let c :string="madam";
console.log(c.lastIndexOf("m"));
console.log(c.indexOf("m"));

//8
//includes() : Checks whether a string contains a value.

let d :string = "Bedsheet";
console.log(d.includes('Bed')); // this will give true
console.log(d.includes('bed')); // this will give false due to casesensetive
console.log(d.includes('sheet'));
console.log(d.includes('Sheet'));


//9 startsWith() : Checks beginning of string.
//console.log("startsWith() : Checks beginning of string.");
 

let e :string ="Bedsheet";
console.log(e.startsWith("B")); //true
console.log(e.startsWith("Bed"));

console.log(e.startsWith("b"));//false
console.log(e.startsWith("S"));

//10
//endsWith() : Checks ending of string.

let f :string="Bedsheet";
console.log(f.endsWith("t"));
console.log(f.endsWith("eet"));

console.log(f.endsWith("T"));
console.log(f.endsWith("Sheet"));

//11
//replace() Replaces first matching value.

let g: string ="Bedsheet";
console.log(g.replace("B","P"));
console.log(g.replace("Bed","Odd"));

// let h: string ="Bedsheet Bedsheet";
// console.log(g.replace("B","P"));
// console.log(g.replace("Bed","Odd"));

//12
//replaceAll() : Replaces all matching values.

let h: string ="Bedsheet Bedsheet";
console.log(h.replaceAll("B","P"));
console.log(h.replaceAll("Bed","Odd"));

//13
//substring() : Extracts part of string.

let i :string = "Bedsheet";
console.log(i.substring(0,2)); //start index , End index 
console.log(i.substring(0,3));
console.log(i.substring(3,6));
console.log(i.substring(3,8));
console.log(i.substring(3,10));

console.log("------------------");

//14
//slice() : Extracts a portion of string

let j = "Bedsheet";
console.log(j.slice(2));
console.log(j.slice(3));
console.log(j.slice(5));
console.log(j.slice(9)); //Blank



//15
//trim() : Removes spaces from both ends.
//dose not remove middle space    eg. input = "  mari  gold  ", output=smae as input as it have space in middle.

let flower :string = "   marigold   ";

console.log(flower.trim());
console.log(flower);




//16
// //split() : Converts string into array.

let shape :string = "Circle,Square,Triangle";

console.log(shape.split(""));
console.log(shape.split(","));

// let ar=shape.split(",");
// console.log(ar);

