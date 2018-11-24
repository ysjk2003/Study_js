//함수 리턴
//리턴값을 지정하지 않을 경우 undefined 리턴
var noReturnFunc = function () {
    console.log('This function has no return statement.');
};

var result = noReturnFunc(); //This function has no return statement
console.log(result); //undefined

//생성자 함수의 경우
//생성자함수에서는 리턴값을 지정하지 않을 경우 this로 바인딩된 새로 생성된 객체가 리턴됨
//다른객체를 리턴할 경우
function Person(name, age, gender) {
    this.name =name;
    this.age = age;
    this.gender = gender;

    return {name:'bar', age:20, gender:'woman'};
}

var foo = new Person('foo', 30, 'man');
console.log(foo); //{name:'bar', age:'20', gender:'woman'}

//기본타입을 리턴할 경우
function Person1 (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return 100;
}

var bar = new Person1('foo', 30, 'man');
console.log(bar); //Person {name:"foo", age:30, gender: "man"}
