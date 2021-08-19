let inputData = require("fs").readFileSync("/dev/stdin").toString();

let star = "";

for (let i = 0; i < inputData; i++) {
  star += "*";
  console.log(star);
}
