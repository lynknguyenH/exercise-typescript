import promptSync from 'prompt-sync'

const prompt = promptSync();
const inputMark = prompt("Input your number: ");
const mark = parseFloat(inputMark);

switch(true){
    case (mark <= 10 && mark >= 8.5):
        console.log("You get an A mark");
        break;
    case (mark < 8.5 && mark >= 7.0):
        console.log("You get a B mark");
        break;
    case (mark < 7.0 && mark >= 5.5):
        console.log("You get a C mark");
        break;
    case (mark < 5.5 && mark >= 4.0):
        console.log("You get a D mark");
        break;
    case (mark < 4.0):
        console.log("You get a F mark");
        break;
}