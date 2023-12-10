import promptSync from 'prompt-sync'

const prompt = promptSync();
const inputNum = prompt("Input your number: ");
const num = parseInt(inputNum);
checkEvenOrOddNumber(num);

function checkEvenOrOddNumber (num: number): void {
    if (num % 2 === 0){
        console.log("you inputted even nummber");
    }else {
        console.log("you inputted odd number");
    }
}