//setTimeout()에 지정되는 함수의 사용자 정의
function callLater(obj, a, b) {
    return (function(){
        obj["sum"] = a + b;
            console.log(obj["sum"]); 
    });
}

var sumObj = {
    sum : 0
}

var func = callLater(sumObj, 1, 2);
setTimeout(func, 500);

//루프 안에서 클로처를 활용할 때 주의
function countSeconds(howMany) {
    for (var i = 1; i <= howMany; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
};
countSeconds(3);
//위 코드는 4가 3번 출력된다 1, 2, 3을 출력하고 싶다면 아래와 같은 코드를 사용하면 된다
function countSeconds(howMany) {
    for (var i = 1; i <= howMany; i++) {
        (function (CurrentI) {
            setTimeout(function () {
                console.log(currentI);
            }, currentI * 1000);
        }(i));
    }
};

countSeconds(3);