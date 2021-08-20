const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);

for (let i = 1; i < T + 1; i++) {
  const k = +input[2 * i - 1];
  const n = +input[2 * i];

  const apart = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  for (let j = 1; j <= n; j++) {
    apart[0][j] = j;
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      apart[i][j] = apart[i - 1][j] + apart[i][j - 1];
    }
  }

  console.log(apart[k][n]);
}
