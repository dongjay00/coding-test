const inputData = Number(require("fs").readFileSync("/dev/stdin").toString());

let answer = "";
for (let i = inputData; i > 0; i--) {
  answer += i.toString() + "\n";
}

console.log(answer);
