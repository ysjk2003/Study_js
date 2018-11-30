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