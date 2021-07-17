def solution(s, n):
    answer = ''
    for char in s:
        if char == " ":
            answer += char
        else:
            ascii_num = ord(char)
            if ascii_num >= 65 and ascii_num <= 90:
                if ascii_num + n >= 65 and ascii_num + n <= 90:
                    answer += chr(ascii_num + n)
                else:
                    answer += chr(ascii_num + n - 26)
            else:
                if ascii_num + n >= 97 and ascii_num + n <= 122:
                    answer += chr(ascii_num + n)
                else:
                    answer += chr(ascii_num + n - 26)
    return answer