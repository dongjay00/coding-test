const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +inputData[0];
for (let i = 1; i < T + 1; i++) {
  let [x, y] = inputData[i]
    .trim()
    .split(" ")
    .map((num) => +num);
  let distance = y - x;
  let count = 0; // 이동 횟수
  let move = 1; // count별 이동 가능한 거리
  let moveSum = 0; // 이동한 거리의 합
  while (moveSum < distance) {
    count += 1;
    moveSum += move; // count 수에 해당하는 move를 더함
    if (count % 2 === 0) move += 1; // # count가 2의 배수일 때
  }
  console.log(count);
}
