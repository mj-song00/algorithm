
    process.stdin.setEncoding('utf8'); //sitdin -> 표준 입력의 약자 포인트 변수가 아니다.
    process.stdin.on('data', data => { // 입력받은 숫자를 'data'에 받는다
        const n = data.split(" ");// data를 배열로 변경
        const a = Number(n[0]), b = Number(n[1]); 
        
    for (let i =0; i<a; i++){
        let star = ""
        for (let j = 0; j < b; j++){
            star = star + '*'
        }
       
        }
    });
