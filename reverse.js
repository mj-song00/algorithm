function solution(n) {
    let answer = [];
    let s = n.toString() // 숫자를 문자열로 형태 변환
    for (let i = s.length; i > 0; i--){//String의 맨뒤 글자부터 한글자씩 잘라서 int형으로 변환후 
        answer.push(parseInt(s.substr((i-1), 1))) // answer 배열에 넣어주었다.
    }

    return answer;
}

//string, toString 차이 알아보기
// substr() : 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환. 사용x 

console.log(solution(1234))