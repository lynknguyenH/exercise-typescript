"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const inputMark = prompt("Input your number: ");
const mark = parseFloat(inputMark);
switch (true) {
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
//# sourceMappingURL=exercise2.js.map