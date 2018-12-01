//argument 활용
function sum() {
    var result = 0;

    for(var i=0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(sum(1,2,3)); //6
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); //45

//브라우저에서 자바스크트를 실행하는 경우 전역 객체는 window 객체가 된다.
var foo = "I'm foo";

console.log(foo); //I'm foo
console.log(window.foo); //I'm foo

//this 바인딩
//메서드 호출 사용 시 this 바인딩
var myObject = {
    name: 'foo',
    sayName: function () {
        console.log(this.name);
    }
};

var otherObject = {
    name: 'bar'
};

otherObject.sayName = myObject.sayName;

myObject.sayName(); //foo
otherObject.sayName(); //bar
//메서드 호출 사용 시 this바인딩은 해당 메서드를 호출한 객체로 바인딩 됨

//함수를 호출할 때 this 바인딩
var value = 100;

var myObject = {
    value: 1,
    func1: function () {
        this.value += 1;
        console.log('func1() called. this.value : ' + this.value); //2

        func2 = function () {
            this.value += 1;
            console.log('func1() called. this.valie : ' + this.value); //101

            func3 = function () {
                this.value += 1;
                console.log('func3() called. this.value : ' + this.value); //102
            };
            func3();
        };
        func2();
    }
};
myObject.func1();
//함수를 호출할 떄에는 전연 객체에 바인딩된다. 내부함수도 마찬가지

//내부 함수의 this 바인딩 문제를 해결한 예제 코드
var value =100;

var myObjcet = {
    value: 1,
    func1: function () {
        var that = this;

        this.value += 1;
        console.log('func1() called. this.value : ' + this.value); 
        //메소드이기 떄문에 객체에 바인딩 됨

        func2 = function () {
            that.value += 1;
            console.log('func2() called. this.value : ' + that.value); 
            //that변수에 this를 주었기 때문에 객체의 value를 가리키고 있음

            func3 = function () {
                that.value += 1;
                console.log('func3() called. this.value : ' + that.value);
            };
            func3();
        };
        func2();
    }
};

myObject.func1();