import { readFileSync } from 'fs';
var file = readFileSync('input.txt', 'utf8');
var pilotInput = file.split('\n');

var horizontalPosition = 0;
var verticalPosition = 0;

pilotInput.forEach((inputLine) => {
    var input = inputLine.split(' ');
    var inputDirection = input[0];
    var inputDistance = parseInt(input[1]);
    switch (inputDirection) {
        case 'forward':
            horizontalPosition += inputDistance;
            break;
        case 'up':
            verticalPosition -= inputDistance;
            break;
        case 'down':
            verticalPosition += inputDistance;
            break;
    }
});

console.log(`Final positions: Horizontal: ${horizontalPosition} Vertical: ${verticalPosition} Multiply: ${horizontalPosition * verticalPosition}`);

horizontalPosition = 0;
verticalPosition = 0;
var aim = 0;

pilotInput.forEach((inputLine) => {
    var input = inputLine.split(' ');
    var inputDirection = input[0];
    var inputDistance = parseInt(input[1]);
    switch (inputDirection) {
        case 'forward':
            horizontalPosition += inputDistance;
            verticalPosition += aim*inputDistance;
            break;
        case 'up':
            aim -= inputDistance;
            break;
        case 'down':
            aim += inputDistance;
            break;
    }
});

console.log(`Final positions: Horizontal: ${horizontalPosition} Vertical: ${verticalPosition} Multiply: ${horizontalPosition * verticalPosition}`);