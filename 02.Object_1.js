//js는 기본타입을 제외한 모든값은 객체
//객체를 생성하는 3가지 방법
//1.Object() 생성자 함수 이용
var foo = new Object();

foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';
//.으로 프로퍼티에 접근 가능
console.log(typeof foo); //object
console.log(foo);  //{ name: 'foo', age: 30, gender: 'male' }
//2.객체 리터럴방식으로 생성
var bar = {
    name : 'bar',
    age : 30,
    gender : 'male'
}

console.log(typeof bar);// 출력값 object
console.log(bar);// 출력값{ name: 'bar', age: '30', gender: 'male' }

//객체 프로퍼티 읽기
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);
//객체 프로퍼티 갱신
foo.age = '20';
console.log(foo.age);
console.log(foo['age']);
//객체 프로퍼티 동적 생성
foo.major = 'computer';
console.log(foo.major)
//대괄호 표기법만을 사용해야 할 경우는 foo['full-name']처럼 -연산자등 예약어가 있을 경우이다

//객체 프로퍼티 출력
for (prop in foo) {
    console.log(prop, foo[prop]);
}
//객체 프로퍼티 삭제
delete foo.name;
console.log(foo.name)  //출력값 undifined
//delete는 객체 자체 삭제 불가