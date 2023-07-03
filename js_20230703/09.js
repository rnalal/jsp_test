// while / do-while
//            ㄴ (조건문의 결과와 관계없이) 최초 한 번의 실행을 보장함
// while 은 조건문이 참일 때만 실행됨

for(let i = 1; i < 6; i++){
    console.log(i);
}
console.log('------------------------------------')

let i = 1;
while(i < 6){
    console.log(i);
    i++;
}
console.log('------------------------------------')

// 0 부터 1 미만의 임의의 실수 반환
// 1 로 수렴하는 것임. 도달하는 거 아님
console.log(Math.random());

/*
    0.0 <= Math.random() < 1.0

    1.0 <= Math.random() < 10.0

    1 <= (Math.random()) <= 10
*/
console.log(parseInt(Math.random() * 10) + 1);

/*
    // 무한반복이니까 실행하지는 말기!
    // 1 ~ 100
    let com = parseInt(Math.random() * 100) + 1;
    let user = 50;

    while(user === com){
        if(user >= com){
            console.log('더 작은 수를 입력하세요')
        } else if(user <= com){
            console.log('더 큰 수를 입력하세요');
        }   
    }
    console.log('정답입니다!');
*/

console.log('------------------------------------')
// do { } 절이 조건에 상관없이 무조건 1번 실행됨/ 1번째는 조건의 영향을 받지 않음
// 2번째부터는 조건에 영향을 받음
let idx = 1;
do{
    const text = `${idx} 번입니다`
    console.log(text);
    idx++;
}while(idx == 10);








