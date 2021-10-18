function solution(participant, completion) {
  let answer = "";
  let p = participant.sort();
  let c = completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (i === participant.length - 1 || participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}
