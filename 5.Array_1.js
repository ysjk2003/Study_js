//배열 생성
var colorArr = ['orange', 'yellow', 'blue', 'green', 'red'];
console.log(colorArr[0]); //orange
console.log(colorArr[1]); //yellow
console.log(colorArr[4]); //red

//배열요소의 동적 생성
var emptyArr = [];
console.log(emptyArr[0]); //undifined

emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;
console.log(emptyArr);
//[100, undifined x 2, "eight", undifined x 3, true]
console.log(emptyArr.length); //8

//배열 length프로퍼티의 명시적 변경
var arr = [0, 1, 2];
console.log(arr.length); //3

arr.length = 5;
console.log(arr); //[0, 1, 2, undifined x 2]

arr.length = 2;
console.log(arr); //[0, 1]
console.log(arr[2]); // undifined

//배열 표준 메서드와 length 프로퍼티
var a = ['zero', 'one', 'two'];

a.push('three');
console.log(arr); //['zero', 'one', 'two', 'three']

a.length = 5;
a.push('four');
console.log(arr); //['zero', 'one', 'two', undifined, 'four']

//배열과 객체의 유사점과 차이점
var colorarray = ['orange', 'yellow', 'green'];
console.log(colorarray[0]); //orange
console.log(colorarray[1]); //yellow
console.log(colorarray[2]); //green

var colorObj = {
    '0': 'orange',
    '1': 'yellow',
    '2': 'green'
};
console.log(colorObj[0]); //orange
console.log(colorObj[1]); //yellow
console.log(colorObj[2]); //green
// 원래 ['0']가 맞음
console.log(colorarray.length); //3
console.log(colorObj.length); //undefined

colorarray.push('red'); //['orange', 'yellow', 'green', 'red']
colorarray.push('red'); //error