const fs = require("fs");
const N = Number(fs.readFileSync("dev/stdin").toString().trim());

let count = 1;
let range = 1;

while (range < N) {
  range += count * 6;
  count += 1;
}

console.log(count);
