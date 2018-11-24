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
//myObject의 prototype 프로퍼티는 Object.prototpye객체를 가리킨다
//따라서 Object.property에 있는 hasOwnProperty를 가져다 쓸 수 있다