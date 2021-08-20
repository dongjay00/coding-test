const charCount = [
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1,
];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

for (let i = 0; i < input.length; i++) {
  let asciiNum = input[i].charCodeAt(0) - 97;
  if (charCount[asciiNum] === -1) charCount[asciiNum] = i;
}

console.log(charCount.join(" "));
