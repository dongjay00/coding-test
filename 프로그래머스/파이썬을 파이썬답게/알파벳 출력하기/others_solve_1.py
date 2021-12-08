import string 

num = int(input().strip())
print(string.ascii_lowercase if num == 0 else string.ascii_uppercase)

'''
파이썬은 이런 데이터를 상수(constants)로 정의해놓았습니다.

import string 

string.ascii_lowercase # 소문자 abcdefghijklmnopqrstuvwxyz
string.ascii_uppercase # 대문자 ABCDEFGHIJKLMNOPQRSTUVWXYZ
string.ascii_letters # 대소문자 모두 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
string.digits # 숫자 0123456789
'''