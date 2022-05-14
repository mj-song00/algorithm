// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.


function solution(arr, divisor){
    let answer= []

    for (let i=0; i < arr.length; i++){ //i는 0부터 arr의 길이까지 i가 증가함 
        if( arr[i] % divisor === 0) { // 만일 arr[i] index를 divisor로 나눈 값이 0 이면
            answer.push(arr[i]) // answer에 arr[i]인덱스를 추가 
        }
    }
    answer.sort((a, b) => a - b) //sort()함수는 정렬하는 함수. sort((a, b) => a - b -> 오름차순 정렬 . 

    //두번째 조건
    if (answer.length === 0) {// answer의 길이가 0이면 ( 담긴 값이 없으면)
        answer.push(-1) // answer에 -1 추가
    }
    return answer
}

console.log(solution([5, 9, 7, 10], 5))