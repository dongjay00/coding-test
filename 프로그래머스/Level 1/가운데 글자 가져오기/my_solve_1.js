function solution(s) {
  let mid = parseInt(s.length / 2);
  return s.length % 2 ? s[mid] : s.slice(mid - 1, mid + 1);
}
