
// Math Object

console.log(Math.PI);

console.log(Math.abs(-234));
console.log(Math.abs(0));
console.log(Math.abs(''));
console.log(Math.abs(null));
console.log(Math.abs([]));

console.log(Math.abs('python'));
console.log(Math.abs(undefined));
console.log(Math.abs({name:'더조은'}));
console.log(Math.abs([11, 22, 33]));
console.log(Math.abs());
console.log('-----------------------------------')

/*
    roung()

    ceil()
    floor()

    trunc()
*/
console.log(Math.round(123.567));
console.log(Math.ceil(123.567));
console.log(Math.floor(123.567));
console.log(Math.trunc(123.567));

console.log(Math.round());
console.log(Math.ceil());
console.log(Math.floor());
console.log(Math.trunc());
console.log('-----------------------------------')

// power(2, 5) : 2의 5제곱
// power = pow
console.log(Math.pow(2, 5));
console.log(Math.pow(2, 1));
console.log(Math.pow(2, 0));
console.log(Math.pow(2, -1));
console.log(Math.pow(2));
console.log('-----------------------------------')

// sqrt() (square root)
console.log(Math.sqrt(81));
console.log(Math.sqrt(16));
console.log(Math.sqrt(1));
console.log(Math.sqrt(0));
console.log(Math.sqrt(-16));
console.log('-----------------------------------')


// 최대값, 최솟값
console.log(Math.max(23, 64, 81, 0, 345));
console.log(Math.min(23, 64, 81, 0, 345));
console.log('-----------------------------------')

// 1 미만의 무작위 수
console.log(Math.random());

// 1 부터 10까지 무작위 수
// 1 ~ 9 까지로 하려면 맨 뒤에 +1 을 없애면 됨
console.log(parseInt(Math.random()*10 + 1));
// 1 부터 100까지 무작위 수
console.log(parseInt(Math.random()*100 + 1));
// 1 부터 15까지 무작위 수
console.log(parseInt(Math.random()*15 + 1));
console.log('-----------------------------------')