const inputData = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +inputData[0];
const scores = inputData[1].split(" ").map((score) => +score);
const maxScore = Math.max(...scores);

const total = scores
  .map((score) => (score / maxScore) * 100)
  .reduce((acc, cur) => acc + cur, 0);

console.log(total / N);
