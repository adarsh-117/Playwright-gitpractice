




let word: string = "Automation";
let strLowerCase: string = word.toLowerCase();
let vowels: string = "aeiou";
let count: number = 0;

for (let x of strLowerCase) {
    if (vowels.includes(x)) {
        count++;
    }
}

console.log(count);