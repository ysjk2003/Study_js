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