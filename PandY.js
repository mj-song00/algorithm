function solution(s){

    let arr = s.toLowerCase().split('');
    // if(!arr.includes('p') && !arr.includes('y')) {
    //   return true;
    // }
  
    let count1 =0;
    let count2 =0;
    for (let i=0; i<arr.length; i++){
      if (arr[i] ==='p'){
        count1++;
      }else if ( arr[i]==='y') {
         count2++;
       }
    }
    
    if (count1 === count2) {
      return true;
    }else {
      return false;
    }
  }

  console.log(solution("pPoooyY"))