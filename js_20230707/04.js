
// Date Object

const today = new Date();
console.log(today);
console.log(typeof today);
console.log('--------------------------------------------')

// Date() <- new Date().toString()
const today2 = Date();
console.log(today2);
console.log(typeof today2);
console.log(new Date().toString());
console.log('--------------------------------------------')

// 1970-01-01T00:00:00.000Z
// new Date(0) 에서 ( ) 안의 숫자는 1/1000 초를 의미함
console.log(new Date(0));
console.log('--------------------------------------------')

// 1970-01-01T00:00:00.000Z 로 부터 40년후 : 2009년
// 2009-12-22T00:00:00.000Z
console.log(new Date(1000 * 60 * 60 *  24 * 365 * 40));
console.log('--------------------------------------------')

// 연,월 지정
console.log(new Date(2023, 7));
console.log(new Date(2023, 7).toString());
console.log(new Date(2023, 7, 7, 11, 1).toString());
console.log(new Date(2023, 7, 7, 11, 1, 40).toString());
console.log(new Date(2023, 7, 7, 11, 1, 40, 563).toString());
console.log('--------------------------------------------')

// 사용을 지양함
console.log(new Date('Aug 07, 2023 11:01:40').toString());
console.log(new Date('2023-07-07T02:20:30').toString());
console.log('--------------------------------------------')

// 1688695651202
console.log(Date.now());
console.log(new Date().toString());
console.log(new Date().toDateString());
console.log(new Date().toTimeString());
console.log('--------------------------------------------')

// 2023. 7. 7. 오전 11:09:21
console.log(new Date().toLocaleString());
// 2023. 7. 7. 오전 11:10:05
console.log(new Date().toLocaleString('ko-KR'));
// 7/7/2023, 11:10:05 AM
console.log(new Date().toLocaleString('en-US'));
// 7.7.2023, 11:10:05
console.log(new Date().toLocaleString('de-DE'));
console.log('--------------------------------------------')

console.log(new Date().toString());
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());
console.log('--------------------------------------------')

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();
const day = '일월화수목금토'[new Date().getDay()];

console.log('일월화수목금토'[5] + '요일');
// 0 번이 일요일
console.log('일월화수목금토'[new Date().getDay()] + '요일');

console.log(`${year}년 ${month}월 ${date}일 ${day}요일`)
console.log('--------------------------------------------')

let date1 = new Date(2023, 6, 7);
date1Value = date1.getTime();
console.log(date1Value.toString());

const date2 = new Date();
date2.setTime(date1Value)
console.log(date2.toString());
console.log('--------------------------------------------')
