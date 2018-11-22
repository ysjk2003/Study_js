//모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다.
var foo = {
    name : 'foo',
    age : 30
};

console.log(foo.toString()); //foo 객체의 프로토타입에 toString메서드가 정의되어있음
console.dir(foo);
// 크롬에서 실행시키면 __proto__ 프로퍼티가 있는 것을 확인 할 수 있다.
//모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]이라는 숨겨진 프로퍼티를 가진다