//클로저란 이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수
function outerFunc() {
    var x = 10;
    var innerFunc = function() {
        console.log(x);
    }
    return innerFunc;
}

var inner = outerFunc();
inner(); //10
//위의 코드에서는 outerFunc이 이미 실행이 끝났지만 innerFunc에서 outerFunc의 변수를 참조했다

function outerFunc(arg1, arg2) {
    var local = 8;
    function innerFunc(innerArg) {
        console.log((arg1 + arg2)/(innerArg + local));
    }
    return innerFunc;
}

var exam1 = outerFunc(2, 4);
exam1(2); // 6/10

//특정 함수에 사용자가 정의한 객체의 메서드 연결하기
function Hello() {
    this.greeting = "hello";
}

HelloFunc.prototype.call = function(func) {
    func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function(greeting) {
    console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.func.call(); //hello

//다음 코드는 위 코드에 사용자가 원하는 인자를 더 넣어서 HelloFunc()을 이용하여 호출하는 코드이다.
function saySomething(obj, methodName, name) {
    return (function(greeting) {
        return obj[methodName](greeting, name);
    });
}

function newObj(obj, name) {
    obj.func = saysomething(this, "who", name);
    return obj;
}

newObj.prototype.who = function(greeting, name) {
    console.log(greeting+" "+(name || everyone));
}

var obj1 = new newObj(objHello, "zzoon");
obj1.call(); //"hello zzoon"
//위와 같은 코드는 정해진 형식의 함수를 콜백해주는 라이브러리가 있을 경우, 그 정해진 형식과는 다른 형식의 사용자
//정의 함수를 호출할 떄 사용된다.

//함수의 캡슐화
var buffAr = [
    'I am',
    '',
    '. I live in',
    '',
    '. I\'am ',
    '',
    'years old',
];

function getCompletedStr(name, city, age) {
    buffAr[1] = name;
    buffAr[3] = city;
    buffAr[5] = age;

    return buffAr.join('');
}

var str = getCompletedStr('zzoon', 'seoul', 16);
console.log(str);  //I am zzoon. I live in seoul. I'am 16years old
//위의 코드는 buffAr배열이 전역변수여서 외부에 노추되어있다. 이는 다른 함수에서 이 배열에 쉽게 접근하여 값을 바꿀수도 있다.
//위의 문제를 수정한 코드는 다음과 같다
var getCompletedStr = (function() {
    var buffAr = [
        'I am',
        '',
        '. I live in',
        '',
        '. I\'am ',
        '',
        'years old',   
    ];

    return (function(name, city, age) {
        buff[1] = name;
        buff[3] = city;
        buff[5] = age;
    });
})();

var str = getCompletedStr('zzoon', 'seoul', 16);
console.log(str);