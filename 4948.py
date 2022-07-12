import math # 광범위 수학작업을 위한 내장함수  

def IsPrime(num):               # 소수 구하는 함수 (ISprime) 선언
    a = int(math.sqrt(num))     # math.sqrt = 제곱근 반환 
    if num == 1:
        return False
    else:
        for i in range(2, a+1):
            if num % i == 0: 
                return False
        return True

Num_list = list(range(2,246912)) # 함수 범위 지정
Sort_list = []
for i in Num_list:
    if IsPrime(i):
         Sort_list.append(i)

while True:                     # count 출력 
    n = int(input())
    if n == 0:                  # n이 0이라면
        break
    cnt = 0
    for i in Sort_list:          # sort_list i까지 반복   
        if n < i <= n*2:              
            cnt += 1
    print(cnt)     