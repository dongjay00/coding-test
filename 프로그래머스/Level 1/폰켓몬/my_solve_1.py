def solution(nums):
    max_num = len(nums) / 2;
    arr = set(nums)
    if len(arr) > max_num:
        return max_num
    return len(arr)