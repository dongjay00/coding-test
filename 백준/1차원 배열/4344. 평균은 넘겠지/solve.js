const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");
const C = +inputData[0];
for (let tc = 0; tc < C; tc++) {
  const [N, ...scores] = inputData[tc + 1].split(" ").map((num) => +num);
  const avg = scores.reduce((acc, cur) => acc + cur, 0) / N;
  let total = 0;
  scores.forEach((score) => {
    if (score > avg) total += 1;
  });
  const rate = ((total / N) * 100).toFixed(3);
  console.log(`${rate}%`);
}
