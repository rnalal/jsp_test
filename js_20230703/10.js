/* 함수 - Code 의 재사용
    
    함수 정의부
    function 함수이름(parameter:input){     함수 선언부
        statement;      함수 body(구현부, 몸통)
        return 값;
    }
    -> parameter: 입력값

    함수 호출부
    함수이름(argument)
               ㄴ parameter 의 개수에 맞는 값
               
    프로그램에서의 함수 : input(parameter)-입력값 / output(return 값)         
    1) input(O) - output(O)
    2) input(O) - output(X)
    3) input(X) - output(O)
    4) input(X) - output(X)
*/
console.log('-------------------------------')
function test(){
    console.log("test");
}
console.log('test(): ', test());
console.log('-------------------------------')

function test2(){
    console.log("test2");
    return 100;
}
console.log('test2(): ', test2());
console.log('-------------------------------')

let name1 = '더조은';
console.log('name1: ', name1);

const age = 21;
console.log('age : ' , age)
console.log('-------------------------------')

// hoisting
test10();
function test10(){
    console.log('여기는 test10() 함수입니다')
}