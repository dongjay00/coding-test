const fs = require("fs");
const inputData = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((value) => +value);

const A = inputData[0];
const B = inputData[1];

console.log(`${A + B}
${A - B}
${A * B}
${Math.floor(A / B)}
${A % B}`);
