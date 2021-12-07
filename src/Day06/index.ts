import { readFileSync } from "fs";
var file = readFileSync("input.txt", "utf8");
var lanternfish = file.split(",").map((item) => {
  return parseInt(item, 10);
});

var breedingFish = [0, 0, 0, 0, 0, 0, 0, 0, 0];
lanternfish.forEach((fish) => {
  breedingFish[fish]++;
});

for (var i = 0; i < 80; i++) {
  lanternfish.forEach((fish, index) => {
    if (fish === 0) {
      lanternfish[index] = 6;
      lanternfish.push(8);
    } else {
      lanternfish[index]--;
    }
  });
  console.log(`After ${i + 1} days: ${lanternfish.length}`);
}

for (var i = 0; i < 256; i++) {
  var startBreeding0 = breedingFish[0];
  var startBreeding1 = breedingFish[1];
  var startBreeding2 = breedingFish[2];
  var startBreeding3 = breedingFish[3];
  var startBreeding4 = breedingFish[4];
  var startBreeding5 = breedingFish[5];
  var startBreeding6 = breedingFish[6];
  var startBreeding7 = breedingFish[7];
  var startBreeding8 = breedingFish[8];
  var endBreeding0 = startBreeding1;
  var endBreeding1 = startBreeding2;
  var endBreeding2 = startBreeding3;
  var endBreeding3 = startBreeding4;
  var endBreeding4 = startBreeding5;
  var endBreeding5 = startBreeding6;
  var endBreeding6 = startBreeding7 + startBreeding0;
  var endBreeding7 = startBreeding8;
  var endBreeding8 = startBreeding0;
  breedingFish[0] = endBreeding0;
  breedingFish[1] = endBreeding1;
  breedingFish[2] = endBreeding2;
  breedingFish[3] = endBreeding3;
  breedingFish[4] = endBreeding4;
  breedingFish[5] = endBreeding5;
  breedingFish[6] = endBreeding6;
  breedingFish[7] = endBreeding7;
  breedingFish[8] = endBreeding8;
  console.log(
    `After ${i + 1} days: ${breedingFish.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    )}`
  );
}
