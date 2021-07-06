def solution(x):
    answer = True
    nums = list(str(x))
    total = 0
    for i in range(len(nums)):
        total += int(nums[i])
    if x % total:
        answer = False
    return answer