const inputData = Number(require("fs").readFileSync("/dev/stdin").toString());

let answer = "";

for (let i = 1; i <= inputData; i++) {
  answer += i + "\n";
}

console.log(answer);
