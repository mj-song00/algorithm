function solution(s) { // 4,6,길이 검사, 2.숫자검사
    let result = parseInt(s);
  
    if ((s.length === 4 || s.length ===6) && s == result) {
    return true;
    } else {
      return false;
    }
  }

  console.log(solution("1234"))