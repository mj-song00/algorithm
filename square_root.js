function solution(n) {
  
    let num = Math.sqrt(n); // 제곱근을 구해주는 math 메소드
  
    if(num % 1 === 0 ){
      return (num+1) * (num+1)
    }else return -1
  }
  
  console.log(solution(121) )