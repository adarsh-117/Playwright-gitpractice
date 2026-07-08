


let teacher: string = "madam";
let reves: string = "";
for (let i = teacher.length - 1; i >= 0; i--) {
    reves+= teacher[i];
}

if (teacher === reves) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}