function checker(word) {
  let chars = new Object();
  let curr = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] in chars && curr !== word[i]) {
      return false;
    }
    chars[word[i]] = 1;
    curr = word[i];
  }
  return true;
}

const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +inputData[0];
let cnt = 0;
for (let i = 1; i < N + 1; i++) {
  let word = inputData[i];
  if (checker(word)) {
    cnt += 1;
  }
}

console.log(cnt);
