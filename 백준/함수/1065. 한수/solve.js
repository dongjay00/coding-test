function hansu(X) {
  const strX = X.toString();
  if (strX.length === 1) return true;
  const interval = +strX[1] - +strX[0];
  for (let i = 1; i < strX.length - 1; i++) {
    let step = +strX[i + 1] - +strX[i];
    if (interval !== step) return false;
  }
  return true;
}

const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

let cnt = 0;
for (let j = 1; j < N + 1; j++) {
  if (hansu(j)) cnt += 1;
}

console.log(cnt);
