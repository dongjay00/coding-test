def solution(n):
    cnt = format(n, 'b').count('1')
    for num in range(n+1, 1000001):
        if format(num, 'b').count('1') == cnt:
            return num