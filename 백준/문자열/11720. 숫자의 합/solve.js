const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

total = 0;
const N = +inputData[0];
const nums = inputData[1];

for (let i = 0; i < N; i++) {
  total += +nums[i];
}

console.log(total);
