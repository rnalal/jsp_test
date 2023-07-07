/*
    JSON : JavaScript Object Notation

    JSON 객체의 stringify : 객체를 문자열로 직렬화함 (serialize)
*/
const student = {
    name : '더조은',
    age : 21,
    language : ['Koean', 'English', 'Deutch'],
    university : {
        school : '일산대학교',

        graduated : true
    }
};
console.log(student);
