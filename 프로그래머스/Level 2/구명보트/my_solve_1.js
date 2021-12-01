function solution(people, limit) {
  let answer = people.length;
  people.sort((a, b) => b - a);
  let s = 0;
  let e = answer - 1;

  while (s < e) {
    if (people[s] + people[e] <= limit) {
      e -= 1;
      answer -= 1;
    }
    s += 1;
  }
  return answer;
}
