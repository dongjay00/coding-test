const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < inputData.length - 1; i++) {
  let [Ausar, Auset, Heru] = inputData[i]
    .split(" ")
    .map((num) => +num)
    .sort((a, b) => a - b);

  if (Ausar ** 2 + Auset ** 2 === Heru ** 2) console.log("right");
  else console.log("wrong");
}
