//To set a default parameter, you simply use the assignment operator (=) right inside the parameter list
//  to give it a starting value.

//syntax
// function functionName(parameter: type = defaultValue): returnType {
//     // code block
// }



function total(price:number , tax:number=18) : void{
    console.log(price + tax);
    
}
total(100,5);


function discount (price:number , cupon:number=150 ) : number{
    return price - cupon; 
}

console.log (discount(400,0));
console.log(discount(900,0));
console.log(discount(1500));
