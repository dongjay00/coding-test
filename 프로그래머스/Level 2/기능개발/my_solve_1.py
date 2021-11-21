import math


def solution(progresses, speeds):
    answer = []
    days = [math.ceil((100 - progresses[i]) / speeds[i])
            for i in range(len(progresses))]

    while len(days):
        publish = 0
        term = days[0]
        for j in range(len(days)):
            if days[j] <= term:
                publish += 1
            else:
                break
        answer.append(publish)
        days = days[publish:]

    return answer
