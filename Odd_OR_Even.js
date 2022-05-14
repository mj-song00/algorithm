        function solution(num) {

            return num % 2 === 0 ? "Even" : "Odd" 
            // 삼항연산자
            // num % 2의 나머지가 0이면 even(짝수), 아님 odd(홀수)
        }
        
        console.log(solution(4))