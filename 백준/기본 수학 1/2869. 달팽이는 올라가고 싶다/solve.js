const [A, B, V] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => +num);

console.log(Math.ceil((V - B) / (A - B)));
