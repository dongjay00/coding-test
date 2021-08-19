const inputData = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = +inputData[0];
for (let tc = 0; tc < T; tc++) {
  let ox = inputData[tc + 1];
  let total = 0;
  let cnt = 0;
  for (let i = 0; i < ox.length; i++) {
    if (ox[i] === "O") {
      cnt += 1;
    } else {
      cnt = 0;
    }
    total += cnt;
  }
  console.log(total);
}
