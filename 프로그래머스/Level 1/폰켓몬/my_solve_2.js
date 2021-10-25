function solution(nums) {
  let n = nums.length / 2;
  let m = new Set(nums).size;
  return m > n ? n : m;
}
