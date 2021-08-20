const fs = require("fs");
const [x, y, w, h] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => +num);

const distance = [w - x, x, h - y, y];
console.log(Math.min(...distance));
