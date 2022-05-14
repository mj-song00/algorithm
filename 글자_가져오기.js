
        function solution(s){
            let answer = '';
        
            if (s.length % 2 === 1 ){ // 만일 s의 길이를 나눈 나머지가 1이면
                answer = s[(s.length - 1)/2]; // 길이에서 1빼고 나눈 값 출력 -> 저거 배열임 index
            }else{
                answer = s[s.length /2-1] + s[s.length/2] // 위의값 + 옆의값
            }
            return answer
            
        }
    console.log(solution("abcde"))
    //floor gkatn 함수 