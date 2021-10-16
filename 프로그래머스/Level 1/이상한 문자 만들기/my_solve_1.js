function solution(s) {
  const answer = [];
  const words = s.split(" ");
  words.forEach((word) => {
    let char = "";
    for (let i = 0; i < word.length; i++) {
      if (i % 2) char += word[i].toLowerCase();
      else char += word[i].toUpperCase();
    }
    answer.push(char);
  });
  return answer.join(" ");
}
