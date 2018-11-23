/*
prototype 프로퍼티
자바스크립트에서는 함수를 생성할 때, 함수 자신과 연결된 프로토타입 객체를 동시에 생성하며
이 둘은 각각 prototype과 constructor라는 프로퍼티를 서로 참조하게 된다.
함수           프로토타입 객체
prototype <->  constructor
 */

/*
콜백 함수
코드를 통해 명시적으로 호출하는 함수가 아니라 어떤 이벤트가 발생했거나
특정 시점에 도달했을떄 시스템에서 호출되는 함수를 말한다.
 */

//즉시 실행 함수
(function (name) {
        console.log('This is the immediate function -->' + name);
})('foo');
//출력값 This is the immediate function --> foo

//내부함수
function parent() {
    var a =100;
    var b = 200;

    function child() {
        var b = 300;

        console.log(a);
        console.log(b);
    }
    child();
}
parent();
//100
//300
child(); //error

//함수 스코프 외부에서 내부 함수 호출
function par() {
    var a = 100;
    var chi = function () {
        console.log(a);
    };
    return chi;
}

var inner = par();
inner(); //100

//자신을 재정의하는 함수
var self = function () {
    console.log('a');
    return function () {
        console.log('b');
    }
}
self = self(); //a
self(); //b

//인자값 개수에 맞추지 않고 값을 넣어도 오류가 나지 않음
function func(arg1, arg2) {
    console.log(arg1, arg2);
}

func(); //undefined undefined
func(1); //1 undefined
func(1, 2); //1 2
func(1, 2, 3); //1 2

/*
arguments 구성 요소
callee프로퍼티는 현재 실행중인 함수의 참조값
length 인자 개수
함수를 호출할 때 넘겨진 인자
 */
