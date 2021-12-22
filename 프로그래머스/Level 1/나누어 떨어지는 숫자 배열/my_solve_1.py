def solution(arr, divisor):
    answer = [v for v in arr if v % divisor == 0]
    return [-1] if len(answer) == 0 else sorted(answer)