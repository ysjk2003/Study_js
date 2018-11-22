var num = 10;
var str = 'string';
var boolvar = true;
var emptyvar;
var nullvar = null;

console.log(typeof num, typeof str, typeof boolvar, typeof emptyvar, typeof nullvar);
//js의 기본타입으로는 number, string, boolean, object, undifined가 있다. 소수점이어도 number로 취급하고 문자 하나도 string으로 취급한다
//정의되어있지 않은 변수의 경우 undifined가 된다

console.log(str[0], str[1]);
str[0] = 'S'; //인덱스를 이용해 접근 가능
console.log(str); //출력값 String