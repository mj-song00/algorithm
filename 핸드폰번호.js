function solution(phone_number) {
    let answer = '';  
  
    for (let i =0; i<phone_number.length; i++){
      if( i < phone_number.length-4 ){ // index 보다 작으면
         answer +="*";
      }else{
        answer += phone_number[i];
    } 
  }
    return answer;
  }

  console.log(solution("027778888"))