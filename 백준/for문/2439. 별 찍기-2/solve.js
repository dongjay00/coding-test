let inputData = Number(require("fs").readFileSync("/dev/stdin").toString());

let star = "";
for (let i = 1; i < inputData + 1; i++) {
  star = " ".repeat(inputData - i) + "*".repeat(i);
  console.log(star);
}
