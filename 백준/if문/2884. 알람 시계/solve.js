const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

let H = +inputData[0];
let M = +inputData[1];

if (M >= 45) {
  M -= 45;
} else {
  if (H === 0) {
    H = 23;
  } else {
    H -= 1;
  }
  M += 15;
}

console.log(`${H} ${M}`);
