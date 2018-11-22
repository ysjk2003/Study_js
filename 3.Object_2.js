var obj = {
    val : 40
};
var objB = objA;

console.log(objA.val); // 출력값 40
console.log(objB.val); // 출력값 40

objB.val = 50;
console.log(objA.val); // 출력값 50
console.log(objB.val); // 출력값 50
// objA와 objB가 같은 객체를 가리키고 있기 떄문

var objC = { value : 100 };
var objD = { value : 100 };
var objE = objD;

console.log(a == b); //출력값 true
console.log(objC == objD); //출력값 false
console.log(objD == objE); //출력값 true
// objC와 objD의 프로퍼티는 같은 형태지만 다른객체임
// 반면 objE와 objD는 같은 객체를 기리키고 있음

//참조에 의한 함수 호출 방식
var a = 100;
var objF = { value:100 };

function changeArg(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num); //200
    console.log(obj); //200
}

changeArg(a, objF);

console.log(a); //100
// 기본타입은 값에 의한 호출
console.log(objF); //200
// 참조타입은 참조에 의한 호출