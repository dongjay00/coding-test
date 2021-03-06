import re
def solution(new_id):

	# 1,2단계: 소문자, 숫자, -, _, . 을 제외한 나머지 제거 및 new_id 소문자화
    a = re.sub('[^a-z\d\-\_\.]','',new_id.lower())
    
    # 3단계 : +는 앞문자 이상의 갯수 지정, 즉 .이 2개 이상인 문자열 .으로 치환
    a = re.sub('\.\.+','.',a)
    
    # 4단계 : ^는 처음, $은 마지막, | or연산자 표현, 즉 처음 . 과 마지막 . 제거
    a = re.sub('^\.|\.$','',a)
    
    # 5단계 : new_id가 비어있는 경우, 문자 a 추가
    if a=="":
        a=a+"a"
        
    # 6단계 : a[:15] 범위 지정 및 마지막 . 제거(a[14]=='.' 방지)
    a = re.sub('\.$','',a[:15])
    
    # 7단계
    while len(a)<=2:
        a=a+a[len(a)-1]
        
    # 값 반환
    return a