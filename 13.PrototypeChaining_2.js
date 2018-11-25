//디폴트 프로토타입은 다른 객체로 변경이 가능하다
//여기서 주의할 점은 변경된 시점 이후에 생성된 객체들은 변경된 프로토타입 객체로 연결된다
function Person(name) {
    this.name = name;
}

console.log(Person.prototype.constructor); //Person(name)

var foo = new Person('foo');
console.log(foo.country); //undefined

//디폴트 프로토타입 객체 변경
Person.prototype = {
    country: 'korea',
};
console.log(Person.prototype.constructor); //Object()

var bar = new Person('bar'); 
console.log(foo.country); //undefined
console.log(bar.country); //korea
console.log(foo.constructor); //Person(name)
console.log(bar.constructor); //Object()
//bar.constructor에서 Object()가 나온이유는 새로 생성된 객체엔
//consturctor프로퍼티가 없어서 그 위의 객체인 Object에 있는 construct프로퍼티를 출력