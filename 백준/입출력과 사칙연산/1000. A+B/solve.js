const fs = require("fs");
const inputData = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((value) => +value);

console.log(inputData[0] + inputData[1]);
