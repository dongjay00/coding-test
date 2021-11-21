function solution(progresses, speeds) {
  const answer = [];
  let days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  let publish = 0;
  let term;
  while (days.length) {
    term = days[0];
    for (let j = 0; j < days.length; j++) {
      if (days[j] <= term) publish += 1;
      else break;
    }
    answer.push(publish);
    days = days.slice(publish);
    publish = 0;
  }

  return answer;
}
