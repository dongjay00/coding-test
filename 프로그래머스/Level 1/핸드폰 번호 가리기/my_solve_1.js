function solution(phone_number) {
  let answer = "";
  const len = phone_number.length;
  for (let i = 0; i < len - 4; i++) {
    answer += "*";
  }
  for (let j = len - 4; j < len; j++) {
    answer += phone_number[j];
  }
  return answer;
}
