function solution(arr) {
  const gcd = (a, b) => {
    return a % b ? gcd(b, a % b) : b;
  };

  let answer = 1;
  for (let num of arr) {
    answer = (answer * num) / gcd(answer, num);
  }
  return answer;
}
