const [A, B, C] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => +num);

if (B >= C) console.log(-1);
else console.log(Math.floor(A / (C - B)) + 1);
