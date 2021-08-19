const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, X] = inputData[0].split(" ");
const nums = inputData[1].split(" ");
const filteredNums = nums.filter((num) => num < +X).join(" ");
console.log(filteredNums);
