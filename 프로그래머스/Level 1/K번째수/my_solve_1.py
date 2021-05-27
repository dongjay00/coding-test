def solution(array, commands):
    answer = []
    for i in range(len(commands)):
        count = 0
        new_array = []
        for j in range(commands[i][0] - 1, commands[i][1]):
            new_array.append(array[j])
        new_array.sort()
        answer.append(new_array[commands[i][2] - 1])
    return answer