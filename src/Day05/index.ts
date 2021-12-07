import { readFileSync } from "fs";
var file = readFileSync("input.txt", "utf8");
var radarInput = file.split("\r\n");

var startX = [] as number[];
var startY = [] as number[];
var endX = [] as number[];
var endY = [] as number[];

radarInput.forEach((line) => {
  var lineSplit = line.split(" -> ");
  var starts = lineSplit[0].split(",");
  var ends = lineSplit[1].split(",");
  startX.push(parseInt(starts[0]));
  startY.push(parseInt(starts[1]));
  endX.push(parseInt(ends[0]));
  endY.push(parseInt(ends[1]));
});

var radarGrid = [] as number[][];
for (var i = 0; i < 1000; i++) {
  radarGrid[i] = [];
  for (var j = 0; j < 1000; j++) {
    radarGrid[i][j] = 0;
  }
}

for (var i = 0; i < startX.length; i++) {
  if (startX[i] === endX[i]) {
    if (startY[i] < endY[i]) {
      for (var j = startY[i]; j <= endY[i]; j++) {
        radarGrid[startX[i]][j]++;
      }
    } else {
      for (var j = startY[i]; j >= endY[i]; j--) {
        radarGrid[startX[i]][j]++;
      }
    }
  } else if (startY[i] === endY[i]) {
    if (startX[i] < endX[i]) {
      for (var j = startX[i]; j <= endX[i]; j++) {
        radarGrid[j][startY[i]]++;
      }
    } else {
      for (var j = startX[i]; j >= endX[i]; j--) {
        radarGrid[j][startY[i]]++;
      }
    }
  }
  else {
    var xDirection = startX[i] < endX[i] ? 1 : -1;
    var yDirection = startY[i] < endY[i] ? 1 : -1;
    var x = startX[i];
    var y = startY[i];
    while (x !== endX[i]+xDirection && y !== endY[i]+yDirection) {
        radarGrid[x][y]++;
        x += xDirection;
        y += yDirection;
        }
  }
}

var countTwoOrMore = 0;
for (var i = 0; i < 1000; i++) {
  for (var j = 0; j < 1000; j++) {
    if (radarGrid[i][j] >= 2) {
      countTwoOrMore++;
    }
  }
}

console.log('Part 1 Answer: 6005')
console.log('Part 2 Answer: ' + countTwoOrMore);
