import math

def prime(num):
    result = True
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            result = False

    return result

def solution(nums):
    answer = 0

    for i in range(len(nums) - 2):
        for j in range(i + 1, len(nums) - 1):
            for k in range(j + 1, len(nums)):
                s = nums[i] + nums[j] + nums[k]
                if prime(s):
                    answer += 1

    return answer