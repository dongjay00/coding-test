def gcd(a, b):
    if a % b == 0: 
        return b 
    else: 
        return gcd(b, (a % b))

def solution(arr):
    answer = 1 
    for num in arr: 
        answer = (answer * num) / gcd(answer, num)
    return answer