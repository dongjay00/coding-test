function solution(lottos, win_nums) {
  let answer = [];
  let count = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      win_nums = win_nums.filter((e) => e !== lottos[i]);
      count += 1;
    }
  }

  let zeros = lottos.filter((e) => e === 0).length;
  answer.push(7 - count - zeros);
  answer.push(7 - count);

  for (let i = 0; i < 2; i++) {
    if (answer[i] === 7) answer[i] = 6;
  }
  return answer;
}
