const fs = require("fs");
const X = Number(fs.readFileSync("/dev/stdin").toString().trim());
let [i, j, a, m, rot] = [1, 1, 0, 2, 1];
while (true) {
  if (X >= i && X < i + j) break;
  a += 1;
  i += a;
  j += 1;
  m += 1;
  rot = -rot;
}

let num = 0;
let deno = 0;
if (rot === -1) {
  num = X - i + 1;
  deno = m - num;
} else {
  deno = X - i + 1;
  num = m - deno;
}
console.log(`${num}/${deno}`);
