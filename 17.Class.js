function Person(arg) { //클래스이자 생성자역할
    this.name = arg;

    this.getName = function() {
        return this.name;
    }

    this.setName = function(value) {
        this.name = value;
    }
}

var me = new Person("zzoon"); //인스턴스 생성
console.log(me.getName()); //zzon

me.setName("iamhjoo");
console.log(me.getName); //iamhjoo
//위의 코드에는 불필요하게 중복되는 영역을 메모리에 올려놓고 사용한다. 다음코드는 위의 문제를 고친것이다.
function Person(arg) {
    this.name = arg;
}

Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.setName = function(value) {
    this.name = value;
}

var me = new Person("me");
var you = new Person("you");
console.log(me.getName());
console.log(you.getName());

//더글라스 크락포드는 다음과 같은 함수를 제시하며 메서드를 정의하는 방법을 소개했다
Function.prototype.method = function(name, func) {
    if (!this.prototype[name])
        this.prototype[name] = func;
}
//위 함수를 이용하면 다음과 같은 코드가 나온다
Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
}

function Person(arg) {
    this.name = arg;
}

Person.method("setName", function(value) {
    this.name = value;
});

Person.method("getNmae", function() {
    return this.name;
});

var me = new Person("me");
var you = new Person("you");
console.log(me.getName());
console.log(you.getName());

//상속
//상속은 두가지 방식으로 구현할 수 있다 하나는 클래스기반 전통적인 상속 방식을 흉내 내는 것이고
//다른 하나는 프로토타입으로 상속을 구현하는 방식이다. 다음은 프로토 타입을 이용한 상속이다
function create_object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
//다음 코드는 create_object함수를 이용하여 상속을 구현한 예제이다.
var person = {
    name: "zzoon",
    getName: function() {
        return this.name;
    },
    setName: function(arg) {
        return this.name = arg;
    }
};

var student = create_object(person);
student.setName("me");
console.log(student.getName());