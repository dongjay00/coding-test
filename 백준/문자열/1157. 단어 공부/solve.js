const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase();

const charDict = new Object();
for (let i = 0; i < input.length; i++) {
  if (input[i] in charDict) charDict[input[i]] += 1;
  else charDict[input[i]] = 1;
}

let maxNum = 0;
let maxChar = "";
console.log(charDict);
for (let char in charDict) {
  if (charDict[char] > maxNum) {
    maxNum = charDict[char];
    maxChar = char;
  }
}

let cnt = 0;
for (let char in charDict) {
  if (charDict[char] === maxNum) cnt += 1;
  if (cnt >= 2) {
    maxChar = "?";
    break;
  }
}

console.log(maxChar);
