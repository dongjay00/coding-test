from math import sqrt

def solution(n):
    answer = 0
    mid = int(sqrt(n))
    for num in range(1, mid + 1):
        if num ** 2 == n:
            answer += num
        elif n % num == 0:
            answer += (num + (n // num))
    return answer