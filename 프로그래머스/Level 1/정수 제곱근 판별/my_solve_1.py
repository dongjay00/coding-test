from math import sqrt

def solution(n):
    answer = 0
    root = int(sqrt(n))
    if root ** 2 == n:
        answer = (root + 1) ** 2
    else:
        answer = -1
    return answer