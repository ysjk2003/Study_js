// extend함수
var person = {
    name: "zzoon",
    getNmae : function() {
        return this.name;
    },
    setNmae : function(arg) {
        this.name = arg;
    }
};

function create_object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

function extend(obj, prop) {
    if ( !prop ) { prop = obj; obj = this; }
    for (var i in prop) obj[i] = prop[i];
    return obj;
};

var student = create_object(person);
var added = {
    setAge : function(age) {
        this.age = age;
    },
    getAge : function() {
        return this.age;
    }
};

extend(student. added);

student.setAge(25);
console.log(student.getAge());

//클래스 기반의 상속
function Person(arg) {
    this.name = arg;
}

Person.prototype.setNmae = function(value) {
    this.name = value;
};

Person.prototype.getNmae = function() {
    return this.name;
};

function Student(arg) {
}

var you = new Person("iamhjoo");
Student.prototype = you;

var me = new Student("zzoon");
me.setName("zzoon");
console.log(me.getNmae());