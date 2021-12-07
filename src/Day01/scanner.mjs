import { readFileSync } from 'fs';
var file = readFileSync('input.txt', 'utf8');

var depthInput = file.split('\n');
var depths = [];
depthInput.forEach((value) => {
    depths.push(parseInt(value));
})

var countOfDepthIncreases = 0;
var lastValue = 0;

depths.forEach((value, index) => {
    if (lastValue < value && index > 0) {
        countOfDepthIncreases++;
    }
    lastValue = value;
});

console.log(`Part 1 straight increases: ${countOfDepthIncreases}`);

var countOfWindowDepthIncreases = 0;
lastValue = 0;

depths.forEach((currentDepth, index, allDepths) => {
    if (index < 2) return;
    var slidingWindow = currentDepth + allDepths[index - 1] + allDepths[index - 2];
    if (lastValue < slidingWindow && index > 2) {
        countOfWindowDepthIncreases++;
    }
    lastValue = slidingWindow;
});

console.log(`Part 2 window increases: ${countOfWindowDepthIncreases}`);