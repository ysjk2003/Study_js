//배열과 객체의 유사점과 차이점
var arr = ['zero', 'one', 'two'];
console.log(arr.length); //3

//프로퍼티 동적추가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length); //3

//배열 원소 추가
arr[3] = 'red';
console.log(arr.length); //4

//배열 객체 출력
console.dir(arr);

//배열의 프로퍼티 열거
//배열의 프로퍼티까지 열거
for (var prop in arr) {
    console.log(prop, arr[prop]);
}

//배열의 요소만 열거
for (var i=0; i<arr.length; i++) {
    console.log(i, arr[i]);
}

//배열 요소 삭제
var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr); //["zero", "one", undifined x 1, "three"]
console.log(arr.length); //4
//요소를 삭제할 뿐 원소를 삭제하지는 않음

//splice()메서드를 이용한 배열 프로퍼티 삭제
arr.splice(2, 1);
console.log(arr); //["zero", "one", "three"]
console.log(arr.length); //3
/*
splice(start, deleteCount, item...)
start 배열의 시작 위치
deleteCount start에서 지정한 시작 위치부터 삭제할 요소의 수
item 삭제할 위치에 추가할 요소
*/

//Array()생성자 함수
var foo = new Array(3);
console.log(foo); //[undefined, undefined, undefined]
console.log(foo.length); //3

var bar = new Array(1, 2, 3);
console.log(bar); //[1, 2, 3]
console.log(bar.length); //3

//유사 배열 객체
var array = ['bar'];
var obj = {
    name : 'foo',
    length : 1
};

arr.push('baz');
console.log(arr); //['bar', 'baz']

Array.prototype.push.apply(obj, ['baz']);
console.log(obj); //{ '1': 'baz', name: 'foo', length: 2 }