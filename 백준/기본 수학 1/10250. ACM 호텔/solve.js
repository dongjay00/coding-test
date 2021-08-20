const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +inputData[0];
for (let tc = 1; tc < T + 1; tc++) {
  let [H, W, N] = inputData[tc]
    .trim()
    .split(" ")
    .map((num) => +num);

  let firstNum = N % H === 0 ? H.toString() : (N % H).toString();
  let lastNum = Number.isInteger(N / H) ? N / H : Math.ceil(N / H);
  if (lastNum < 10) {
    lastNum = "0" + lastNum.toString();
  }
  console.log(firstNum + lastNum);
}
