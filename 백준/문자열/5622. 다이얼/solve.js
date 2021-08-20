const times = [
  3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10,
  10,
];

const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim();

let time = 0;
for (let i = 0; i < inputData.length; i++) {
  time += times[inputData[i].charCodeAt(0) - 65];
}

console.log(time);
