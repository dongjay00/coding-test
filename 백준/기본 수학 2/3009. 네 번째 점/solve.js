const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let x = [];
let y = [];

inputData.forEach((input) => {
  let [curX, curY] = input.split(" ").map((num) => +num);
  x.push(curX);
  y.push(curY);
});

x = x.sort();
y = y.sort();

let modeX = x[1] === x[0] ? x[2] : x[0];
let modeY = y[1] === y[0] ? y[2] : y[0];

console.log(`${modeX} ${modeY}`);
