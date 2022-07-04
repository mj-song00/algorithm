function solution(n) {
  
    let answer = 0;
    let a = String(n);//숫자를 문자로 변환 '1','2','3'
  
    for (let i = 0; i < a.length; i++) { // i는 0부터 a의 길이전까지 i증가
      answer += parseInt(a[i]); //parseInt()=> 문자를 정수로 변환
    }
  
    if (n % answer === 0) {
      return true
    }else{
      return false
    }
  }


  

function solution(arr) {
    if (arr.length > 1) {
        var minNum = Math.min(...arr);
        var idx = arr.indexOf(minNum);
        arr.splice(idx, 1);
    } else {
        arr = [-1];
    }
    return arr;
}