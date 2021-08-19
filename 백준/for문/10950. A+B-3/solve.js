const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = +inputData[0];
for (let i = 1; i < T + 1; i++) {
  let nums = inputData[i].split(" ");
  let A = +nums[0];
  let B = +nums[1];
  console.log(A + B);
}
