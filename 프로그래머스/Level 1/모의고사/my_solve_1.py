def solve_1(arr):
    a1 = [1, 2, 3, 4, 5]
    count = 0
    solve = 0
    for i in range(len(arr)):
        if arr[i] == a1[count]:
            solve += 1
        if count <= 3:
            count += 1
        else:
            count = 0

    return solve

def solve_2(arr):
    a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    count = 0
    solve = 0
    for i in range(len(arr)):
        if arr[i] == a2[count]:
            solve += 1
        if count <= 6:
            count += 1
        else:
            count = 0

    return solve

def solve_3(arr):
    a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    count = 0
    solve = 0
    for i in range(len(arr)):
        if arr[i] == a3[count]:
            solve += 1
        if count <= 8:
            count += 1
        else:
            count = 0

    return solve

def solution(answers):
    answer = []
    s1 = solve_1(answers) 
    s2 = solve_2(answers)
    s3 = solve_3(answers)
    max_value = max(s1, s2, s3)

    for i, v in enumerate([s1, s2, s3]):
        if v == max_value:
            answer.append(i+1)

    return answer