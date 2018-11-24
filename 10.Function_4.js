/*
생성자 함수가 동작하는 방식
1. 빈 객체 생성
(생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자시느이 프로토타입 객체로 설정)
2. 빈 객체는 this로 바인딩(this가 빈 객체를 가리킴)
3. this를 통한 프로퍼티 생성
4. 생성된 객체 리턴
(리턴문이 없을 경우, this로 바인딩된 새로 생성한 객체가 리턴)

객체 리터럴 방식으로 객체를 생성하면
프로토타입 객체는 object이고
생성자 함수로 객체를 생성하면
생성자 함수의 프로토타입 객체는 생성함수 자체이다.

생성자 함수를 호출할 때 new키워드 없이 호출을 하게 되면
일반함수처럼 동작한다
*/
//Person()생성자 함수
var Person = function () {
    this.name = name;
};

var foo = new Person('foo');
console.log(foo.name); //foo


//객체 리터럴 방식은 재생성 불가
var fooo = {
    name: 'fooo',
    age: 35,
    gender: 'man'
};

function Person1(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
//생성자 함수는 재생성 가능
var bar = new Person1('bar', 33, 'woman');
var baz = new Person1('baz', 25, 'woman');

//강제로 인스턴스 생성하기
function A(arg) {
    if (!(this instanceof A))
        return new A(arg);
    //this가 A의 인스터스인지 확인
    //만약 아니라면 new로 A를 호출하여 반환
    this.value = arg ? arg : 0;
}

var a = new A(100); //100
var b = A(10); //10

//if (!(this instanceof arguments.calle))
//arguments.callee는 곧 호출될 함수를 가리킴 함수 이름과 상관없이 사용 가능

//apply() 메서드를 이용한 명시적인 this 바인딩
function Person2 (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var foo = {};

Person.apply(foo, ['foo', 30, 'man']);
//call 메서드의 경우 Person.call(foo, 'foo', 30, 'man');이다


//apply 메서드를 활용한 arguments 객체의 배열 표준 메서드 slice 활용
function myFuntion () {
    console.dir(arguments);

    var args = Array.prototype.slice.apply(arguments);
    console.dir(args);
}

myFuntion(1, 2, 3);
//Array.prototype.slice() 메서드를 호출하는데 this는 arguments에 바인딩 