

//Syntax of void function

//function functionName(parameter: type): void {
//     // Code that does an action (like console.log)
//     // CRITICAL: No "return" statement allowed here!
// }


1//
function showerror(): void{
    console.log("Opps ....somthing went wrong");
}

showerror();

//2
function showerror1(error:string): void{
    console.log("Opps ....somthing went wrong - " + error);
}

showerror1 ("Connectionm Timeout");


3//

function notAllowed(msg:string):void{
    console.log(msg + "Admin access only");

    }   
    notAllowed("Alert:")


//4
function noReuturn():void{
    console.log("void return noting but only excute action");
    
}

noReuturn();

//5
function fav (city:string) :void {
console.log("welcome to " + (city));

}
fav('Pune');
fav('Akole');