let b = 1;

function hi () {

const a = 1;
let b = 100;
b++;

console.log(a,b);

}

//console.log(a); -> 지역변수는 함수밖에서 불러오면 오류남

console.log(b);

hi();

console.log(b);