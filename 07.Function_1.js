//함수 정의
//함수 선언문 방식으로 함수 생성
function add(x, y) {
    return x + y;
}

console.log(add(3, 4)); //7

//함수 표현식 방식으로 함수 생성
var add = function (x, y) {
    return x + y;
}; //함수이름 생략 가능(익명함수)

var plus = add;

console.log(add(3, 4)); //7
console.log(plus(5, 6)); //11

//Function 생성자 함수를 이용한 함수 생성(자주사용하진 않음)
var add = new Function('x', 'y', 'return x + y');
console.log(add(3,4)) //7

//함수 호이스팅
minus(2, 3); //-1

function minus(x, y) {
    return x - y;
}

minus(3, 4); //-1
//함수선언문 방식으로 함수를 만들면 함수가 선언되지 않았어도 함수를 먼저 사용할 수 있다. 비권장

//함수 객체
add.result = add(3, 2);
add.status = 'OK';
//add함수 객체에 result, status 프로퍼티 추가
console.log(add.result); //5
console.log(add.status); //'OK'

/*
자바스크립트에서 함수는 값으로 취급되며 일급 객체이다
일급 객체는 다음과 같은 동작이 가능하다
리터럴에 의해 생성
변수나 배열의 요소, 객체의 프로퍼티등에 할당 가능
함수의 인자로 전달 가능
함수의 리턴값으로 리턴 가능
동적으로 프로퍼티를 생성 밑 할당 가능
 */

//프로퍼티의 값으로 할당
var obj = {};
obj.baz = function () {
    return 200;
};
console.log(obj.baz()); //200

//함수를 다른 함수의 인자로 넘긴 코드
var foo = function (func) {
    func();
};

foo(function () {
    console.log('Function can be used as the argument');
});
// 출력결과 Function can be used as the argument

//함수를 다른 함수의 리턴값으로 활용한 코드
var boo = function () {
    return function () {
        console.log('this function is the return value');
    };
};

var bar = boo();
bar();

/*
함수 객체의 기본 프로퍼티
length(매개변수의 개수), prototype(consturctor객체를 가리킴), name(함수의 이름), caller(자신을 호출한 함수), argument(인자값)
 */