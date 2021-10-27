function solution(n, m) {
  function gcd(n, m) {
    while (m) [n, m] = [m, n % m];
    return n;
  }
  function lcm(n, m) {
    return parseInt((n * m) / gcd(n, m));
  }
  return [gcd(n, m), lcm(n, m)];
}
