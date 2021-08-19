const fs = require("fs");
const inputData = Number(fs.readFileSync("/dev/stdin").toString());

let total = 0;
for (let i = 1; i < inputData + 1; i++) {
  total += i;
}
console.log(total);
