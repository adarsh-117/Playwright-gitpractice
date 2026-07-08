
//string reverse Hello to olleH

let rev: string = "Hello";
let reversed: string = "";

for (let i = rev.length - 1; i >= 0; i--) {
    reversed += rev[i];
}

console.log(reversed);