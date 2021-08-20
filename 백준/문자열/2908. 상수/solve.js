const [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let newA = "";
let newB = "";
for (let i = 2; i > -1; i--) {
  newA += A[i];
  newB += B[i];
}

console.log(+newA > +newB ? newA : newB);
