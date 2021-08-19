const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let isNotZero = true;
let i = 0;
let result = "";

while (isNotZero) {
  if (i !== 0) {
    result += "\n";
  }

  let [A, B] = input[i].split(" ").map((num) => +num);
  let sum = A + B;
  if (sum === 0) {
    isNotZero = false;
  } else {
    result += sum.toString();
    i++;
  }
}

console.log(result);
