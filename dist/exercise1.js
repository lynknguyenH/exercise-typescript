"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const inputNum = prompt("Input your number: ");
const num = parseInt(inputNum);
checkEvenOrOddNumber(num);
function checkEvenOrOddNumber(num) {
    if (num % 2 === 0) {
        console.log("you inputted even nummber");
    }
    else {
        console.log("you inputted odd number");
    }
}
//# sourceMappingURL=exercise1.js.map