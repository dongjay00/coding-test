const nums = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((num) => +num);

const maxNum = Math.max(...nums);
const index = nums.indexOf(maxNum);

console.log(`${maxNum}
${index + 1}`);
