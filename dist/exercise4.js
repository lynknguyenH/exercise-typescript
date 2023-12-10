"use strict";
const array = Array(50).fill(undefined).map(() => Math.floor(50 * Math.random()));
console.log("The random array: " + array);
const removeDuplicatedArray = removeDuplicatedElement(array);
console.log("Array after duplicated element: " + removeDuplicatedArray);
const sortedArray = removeDuplicatedArray.sort(function (a, b) {
    return b - a;
});
console.log("Sorted array: " + sortedArray);
console.log("The second value: " + sortedArray[1]);
function removeDuplicatedElement(array) {
    const result = [];
    for (const item of array) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}
//# sourceMappingURL=exercise4.js.map