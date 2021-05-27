def solution(lottos, win_nums):
    answer = []
    count = 0
    for num in lottos:
        if num in win_nums:
            win_nums.remove(num)
            count += 1
    zeros = len([num for num in lottos if num == 0])
    answer.append(7 - count - zeros)
    answer.append(7 - count)
    for i in range(2):
        if answer[i] == 7:
            answer[i] = 6
    return answer