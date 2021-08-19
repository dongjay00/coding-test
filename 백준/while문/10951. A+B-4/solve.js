const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let i = 0;
while (i < input.length - 1) {
  let [A, B] = input[i].split(" ").map((x) => +x);
  console.log(A + B);
  i++;
}
