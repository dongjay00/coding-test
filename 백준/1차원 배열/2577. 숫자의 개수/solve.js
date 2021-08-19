const [A, B, C] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((num) => +num);

const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const num = (A * B * C).toString();
for (let i = 0; i < num.length; i++) {
  counts[+num[i]] += 1;
}
counts.forEach((count) => {
  console.log(count);
});
