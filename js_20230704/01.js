
/*
    함수 - 일급객체

    1) 변수나 상수에 함수를 할당할 수 있음
    2) 다른 함수의 parameter 에 전달됨
    3) return 값으로 함수를 사용할 수 있음
*/

function add(n1, n2){
    return n1 + n2
}
console.log(typeof add)
console.log('------------------------------')

// 함수를 변수에 할당함
const add2 = add;

console.log(add(10, 20));
console.log(add2(10, 20));
console.log('------------------------------')

let a = 7;
let b = 3;

let funct1 = (n1, n2) => n1 + n2;
let funct2 = (n1, n2) => n1 - n2;

console.log(funct1(a, b))
console.log(funct2(a, b))
console.log('------------------------------')

let student = {
    name: '더조은',
    age : 21,
    studno : 231656,
    introduce : function (param){
        result = param ? '안녕하세요' : '안녕히가세요'; 
        return result;
    }
};
console.log(student.introduce(true));
console.log(student.introduce(false));
console.log('------------------------------')

let calculation = [
    (n1, n2) => n1 + n2,
    (n1, n2) => n1 - n2,
    (n1, n2) => n1 * n2,
    (n1, n2) => n1 / n2
]

for(cal of calculation){
    console.log(cal(10, 8));
}
console.log('------------------------------')

let student2 = {
    name1: '더조은',
    age : 21,
    studno : 231656,
    introduce : function (){
        let height = 182;
        result = `안녕하세요. 저는 ${this.name1} 이고, ${this.age} 세이며, ${this.studno} 학번입니다. 키는 ${height}cm 입니다.`
        // this 붙이면 함수 밖에 있는 걸 호출하고, this 안 붙이면 함수 속에 있는 걸 호출함
        return result;
    }
};
// 객체의 함수 property 에서 객체의 속성(property) 을 사용할 때는
// this. 를 붙이고, 함수 property 내부의 지역변수를 사용할 때는 this. 를 붙이지 않음
// this. : 현재 메모리에 올라간 객체 자신의 주소 
console.log(student2.introduce())
console.log('------------------------------')

/*
    함수를 다른 함수의 parameter 에 전달할 수 있음 -> 고차함수 / 콜백함수
     f1       f2        ㄴ parameter 에 전달할 때는 함수 이름을 전달함

    예)
        function test(){ return ""; }
        // test 함수 호출하는 code
        test()
        // test 하는 이름표가 저장한 함수의 주소 
        test

    고차함수 : parameter 에 함수(f1)를 전달받는 함수
       ㄴ height-order function
    콜백함수 : 다른 함수의 parameter 에 전달되는 함수(f1)
       ㄴ callback function    
*/

// 고차함수
let arr1 = [1, 2, 3, 4, 5];
function test1(arr, funct){
    for(item of arr){
        funct(item);
    }
}

// 콜백함수
function subFunct(number){
    console.log(number ** 2);
    //return number ** 2;
}

// 1, 4, 9, 16, 25
// test1 : 고차함수
// subFunct : 콜백함수
test1(arr1, subFunct);
console.log('------------------------------')

// 1, 2, 3, 4, 5
// test1 : 고차함수
// console.log : 콜백함수
test1(arr1, console.log);
console.log('------------------------------')

function test2(funct, repeat, n1, n2){
    let result = n1;
    for(let i = 0; i < repeat; i++){
        result = funct(result, n2);
        console.log(result);
    }
    return result;
}
console.log(test2((a, b) => a * b, 5, 10, 4));
console.log('------------------------------')

console.log(test2((a, b) => a / b, 5, 10, 4));
console.log('------------------------------')
