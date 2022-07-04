function solution(arr) {
    let answer = [];

    if (arr.length <= 1) {
        return [-1];
    } else {
        arr.splice(arr.indexOf(Math.min(arr)),1);// (최솟값의 위치찾기(arr의 최솟값찾기)),1개 삭제하기) splice(시작,삭제,삭제갯수)
        answer = arr;
    }
    return answer;
}

//index of()