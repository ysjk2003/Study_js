//프로토타입 프로퍼티와 protopype 링크 구분
function Person (name) {
    this.name = name;
}

var foo = new Person('foo');

console.dir(Person);
console.dir(foo);
//Person 생성자 함수는 prototype 프로퍼티로 자신과 링크된 프로토타입 객체를 가리킴
//foo 객체는 Person함수의 프로토타입 객체를 Prototype링크로 연결
//prototype 프로퍼티나 prototype링크는 같은 프로토타입객체를 가리킴

//프로토타입 체이닝
//객체 리터럴 방식에서의 프로토타입 체이닝
var myObject = {
    name: 'foo',
    sayName: function () {
        console.log('My name is ' + this.name);
    }
};

myObject.sayName(); //My Name is foo
console.log(myObject.hasOwnProperty('name')); //true
console.log(myObject.hasOwnProperty('nickName')); //false
myObject.sayName(); //error
//hasOwnProperty가 에러가 나지 않는 이유
//객체 리터럴로 생성한 객체는 Object라는 내장 생성자 함수로 생성되기 때문
//myObject의 prototype링크는 Object.prototpye객체를 가리킨다
//따라서 Object.property에 있는 hasOwnProperty를 가져다 쓸 수 있다

/*
프로토타입 체이닝이란 특정 객체의 프로퍼티나 메서드에 접근하려고 할 때
해당 객체에 접근하려는 프로퍼티 또는 메서드가 없다면 prototype링크를 따라
자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티를 차례대로 검색하는 것
*/

//생성자 함수 방식에서의 프로토타입 체이닝
function Person1(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

var bar = new Person1('bar', 30, 'tennis');

console.log(bar.hasOwnProperty('name')) //true
console.dir(Person1.prototype);
//Person1.prototype객체에 hasOwnProperty가 없지만 정상적으로 출력된 이유는
//Person1.prototype도 객체이므로 Object.prototype을 프로토타입 객체로 가진다.

//기본타입들도 마찬가지로 Number.prototype, String.prototype등의 프로토타입 객체를 가진다
//또한 프로토타입 객체에 사용자 정의 메소드를 추가할 수 있다.
String.prototype.testMethod = function () {
    console.log('test');
};

var str = "this is test";
str.testMethod(); //test
//참고로 String.prototype같은 프로토타입 객체들도 프로토타입 링크로 Object.prototype을 가리킴
//마찬가지로 Person1.prototype에도 프로퍼티를 넣을 수 있다

//프로토타입 객체 메서드에서의 this바인딩은 호출한 객체에 바인딩 된다.
function Person2 () {
    this.name = name;
}

Person2.prototype.getName = function () {
    return this.name;
};

var baz = new Person2('baz');

console.log(baz.getName()); //baz

Person2.prototype.name = 'Person';
console.log(Person2.prototype.getName()); //Person