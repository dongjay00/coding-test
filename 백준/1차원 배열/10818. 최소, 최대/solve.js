const inputData = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const nums = inputData[1].split(" ").map((num) => +num);
let maxNum = -1000001;
let minNum = 1000001;
nums.forEach((num) => {
  if (num > maxNum) {
    maxNum = num;
  }
  if (num < minNum) {
    minNum = num;
  }
});
console.log(`${minNum} ${maxNum}`);
