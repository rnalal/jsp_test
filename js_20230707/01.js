
// toUpperCase(), toLowerCase()
//    대문자     ,    소문자

const str1 = 'JaVA, SCRipT, HELLoW';

console.log(str1.toUpperCase());
console.log(str1.toLocaleLowerCase());
console.log('-------------------------------------------')

// charAt()
// 글자 추출
console.log(str1.charAt(3));
console.log(str1.charAt(-1));
console.log('-------------------------------------------')

// at()
// const str1 = 'JaVA, SCRipT, HELLoW';
// 글자 인덱스 셀때, 오른쪽부터하면 0,1,2,,,이렇게 증가
// 왼쪽부터 하면 -1,-2,-3,,,,이렇게 감소
console.log(str1.at(3));
console.log(str1.at(-3));
console.log('-------------------------------------------')

// indexOf(), LastIndexOf()
console.log(str1.indexOf('A'));
console.log(str1.indexOf('ipT'));
console.log('-------------------------------------------')

// includes, startWith, endsWith
const str2 = 'javascript is the best 123 프로그래밍 language';

console.log(str2.includes('is'));
console.log(str2.startsWith('java'));
console.log(str2.endsWith('age'));
console.log('-------------------------------------------')

// search(정규표현식) : 
// 정규표현식에 해당하는 형태가 있는지 알아봄
// 없으면 -1 반환 
console.log(str2.search(/[0-9]/))
console.log(str2.search(/[가-힣]/))
console.log(str2.search('1'))
console.log('-------------------------------------------')

// trim, trimStart, trimEnd
const str3 = '   java script   '

console.log(str3.trim());
console.log(str3.trimStart());
console.log(str3.trimEnd());
console.log('-------------------------------------------')

// repeat(반복횟수)
const str4 = 'java';
console.log(str4.repeat(5));
// -1 은 Error
// console.log(str4.repeat(-1));
console.log(str4.repeat(0));
console.log('-------------------------------------------')


/*
    메소드 연속으로 호출하기
       ㄴ method chaining
*/
const str5 = ' 안녕, 안녕하세요. JavaSCRipt jAVa 여러분 ';

// 출력문 드래그하면 공백이 점으로 보임
console.log(str5.trimStart().toUpperCase().replace('안', '은').replaceAll('A', '에이').repeat(2).trimEnd());
console.log('-------------------------------------------')














