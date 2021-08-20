const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +inputData[0];
for (let tc = 1; tc < T + 1; tc++) {
  let [len, words] = inputData[tc].split(" ");
  let answer = "";
  for (let i = 0; i < words.length; i++) {
    answer += words[i].repeat(+len);
  }
  console.log(answer);
}
