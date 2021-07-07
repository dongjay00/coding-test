def solution(num):
    answer = 0
    number, cnt = num, 0
    while True:
        if number == 1:
            answer = cnt
            break
        if number % 2:
            number = (number * 3) + 1
        else:
            number //= 2
        cnt += 1
        if cnt == 500:
            answer = -1
            break
            
    return answer