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

//기본 타입 변수에서의 메서드 호출
var Num = 0.5;
console.log(Num.toExponential(1)); // '5.0e-1'
//toExponential은 숫자를 지수 형태의 문자열로 변환한다.

console.log("test".charAt(2)); // 's'
//charAt은 문자열에서 인자로 받은 위치에 있는 문자 반환
//기본값은 메서드 처리 순간에 객체로 변환된 다음 각 타입별 표준 메서드를 호출한다.
//메서드 호출이 끝나면 다시 기본값으로 복귀한다

/*연산자
+연산자는 더하기 연산과 문자열 연결 연산을 수행한다.
모두 숫자일 경우에만 더하기 연산이 수행된다.
==연산자는 피연산자가 타입이 다를 경우 타입 변환을 거친 후 비교한다.
===연산자는 타입변경을 하지 않는다.
!!연산자는 불린값으로 변환한다.
 */
console.log(!!'string'); //true