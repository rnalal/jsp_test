// 함수 정의하기
// 함수는 호출하지 않으면 동작하지 않음
// 익명(이름이 없는)함수나 화살표함수는 hoisting 이 안 됨 

// 이름이 있는 함수
// add 함수
function add(n1, n2){
    result = n1 + n2;
    return result;
}
console.log(add(10, 20))


// 변수나 상수에 함수를 할당할 수 있음

// 이름이 없는 함수
const subtract = function (n1, n2){
    result = n1 - n2;
    return result;
}
console.log(subtract(20, 10));

function add2(num1, num2){
    return num1 + num2;
}
console.log(add2(11, 22))

// 이미 작성한 함수의 내용을 다시 작성할 수 있음
//       ㄴ definition(정의)    ㄴ 재정의
add2 = function (num1, num2){
    console.log(`${num1} 과(와) ${num2} 를 더합니다`)
    return num1 + num2;
}


// 화살표 함수(= java 나 python 의 람다식)
// 1) 내용이 간단한 함수
const multiply = (n1, n2) => n1 * n2;
console.log(multiply(2, 3));

// 2) 내용이 두 줄 이상 있는 함수
const multiply2 = (n1, n2) => {
    console.log(`${num1} 과(와) ${num2} 를 곱합니다`)
    return num1 * num2;
}

// 3) parameter 가 하나인 경우에는
//      () 를 생략할 수 있음
// n1 ** 2 는 n1 의 2제곱
const pow1 = n1 => n1 ** 2; 
console.log(pow1(3))

