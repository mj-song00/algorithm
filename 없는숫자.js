function solution(numbers) {
    let answer = 0;
    for (let i = 0; i <= 9; i++) {
      if (!numbers.includes(i)) answer += i; // 만일 숫자에 i가 포함되지 않으면, answer에 더하기
    }
    return answer;
  }