def solution(s):
    answer = []
    words = s.split(" ")
    for word in words:
        char = ''
        for i in range(len(word)):
            if i % 2:
                char += word[i].lower()
            else:
                char += word[i].upper()
        answer.append(char)
    return " ".join(answer)