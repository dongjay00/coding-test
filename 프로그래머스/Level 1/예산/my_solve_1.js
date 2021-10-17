function solution(d, budget) {
  let answer = 0;
  let term = 0;
  const sortedBudget = d.sort((a, b) => a - b);
  for (let i = 0; i < sortedBudget.length; i++) {
    term += sortedBudget[i];
    if (term > budget) break;
    answer += 1;
  }
  return answer;
}
