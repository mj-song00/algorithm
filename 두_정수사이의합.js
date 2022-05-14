
function solution(a, b) {
            let answer = 0;
          
            let max = Math.max(a,b); // math.max(a,b) -> 두 값중 큰 값이 max
            let min = Math.min(a,b);
          
            for (let i= min; i<=max; i++) {
                answer += i;
            }
            return answer
          }

console.log(solution(3,5))