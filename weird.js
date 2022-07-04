function solution(s) {
    let answer = '';
    let index = 0;
    for(let i =0; i < s.length; i++){
        if(s[i] ===" ") {
            index = 0;
            answer += " ";
        }
        else {
            if(index%2 === 0) {
                //짝
                answer += s[i].toUpperCase();
            }else{
                //홀
                answer += s[i].toLowerCase();
            }
            index++;
        }
    }
    return answer;
  }

  console.log(solution("try hello world"))