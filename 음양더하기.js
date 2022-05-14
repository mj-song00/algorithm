function solution(absolutes, signs) {
    let answer = 0; //변수값 0 
    for ( let i =0; i < absolutes.length; i++){ //absolutes의 길이까지지
      if (signs[i] === true){ //signs[i]가 true면
        answer += absolutes[i]
      } else {
        answer -= absolutes[i]
      }
    }
    return answer;
  }

  console.log(solution([4,7,12], [true,false,true]))