
//Syntax of optional parameter
//need to add ? front of the parameter want to declear optional.

// function functionName(requiredParam: type, optionalParam?: type): returnType {
//     // code block
// }


//1

// function fullName (firstname:string,lastname:string,middleName?:string) : void{
//     //console.log(firstname  , middleName  , lastname);
//     if(middleName==undefined){
//         console.log(firstname,lastname);
//      } else{
//         console.log(firstname,middleName,lastname);
        
//         }
        

//     }


// fullName('Adarsh','Ughade','Ganpat');
// fullName('Sujata' , 'Gaikwad');
// fullName('Devesh','Dighe');



//2
function hello(firstName:string, Lastname?:string) : string {
return String ("Hello" + firstName + Lastname);

}

console.log(hello(' Adrash',' Ughade'));
console.log('Virat');
console.log('Raj','RK');


//3

