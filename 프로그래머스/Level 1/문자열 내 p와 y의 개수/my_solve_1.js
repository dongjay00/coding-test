function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") answer += 1;
    else if (s[i] === "y" || s[i] === "Y") answer -= 1;
  }

  return answer ? false : true;
}
