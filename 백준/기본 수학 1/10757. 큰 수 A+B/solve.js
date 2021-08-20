const fs = require("fs");
const [A, B] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => BigInt(num));

console.log((A + B).toString());
