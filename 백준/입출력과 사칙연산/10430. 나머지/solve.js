const fs = require("fs");
const inputData = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((value) => +value);

const A = inputData[0];
const B = inputData[1];
const C = inputData[2];

console.log(`${(A + B) % C}
${((A % C) + (B % C)) % C}
${(A * B) % C}
${((A % C) * (B % C)) % C}`);
