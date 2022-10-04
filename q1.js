/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console
    Task 2
    - invoke the function "swap"
*/

const prompt = require("prompt-sync")({ sigint: true });

function swap(x, y) {
    // Task 1: Add code here
    if (isNaN(x) || isNaN(y)) 
        {
            return -1;
        } 
    else 
        {
            [x, y] = [y, x];
            console.log(`x: ${x}`);
            console.log(`y: ${y}`);
        }
}

// Task 2: Add code here
let x = prompt('Enter value for x: ');
let y = prompt('Enter value for y: ');

result = swap(x, y);

if (result == -1) 
{
    console.log(`${result}`);
} 

module.exports = swap;