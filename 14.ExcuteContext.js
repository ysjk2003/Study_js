//실행 컨텍스트란 코드 블록(대체로 함수)이 실행되는 환경
console.log("this is global context")

function Excontext() {
    console.log("This is Excontext");
};

function Excontext2() {
    Excontext();
    console.log("this is Excontext2");
};

Excontext2();
//위의 코드의 실행 컨텍스트가 동작하는 방법은 다음과 같다
//전역 실행 컨텍스트 실행->Excontext2호출->Excontext호출->Excontext반환->Excontext2반환
//전역 실행 컨텍스트란 가장 먼저 실행되는 컨텍스트이다
//전역 실행 컨텍스트는 arguments객체가 없음, 전역객체 하나만을 포함하는 스코프체인이 있음
//전역 코드가 실행 될 때 생성되는 컨텍스트가 전역 실행 컨텍스트

/*
실행컨텍스트 생성 과정
1. 활성 객체 생성
활성객체에 앞으로 사용하게 될 매개변수나 사용자가 정의한 변수 및 객체를 저장
새로 만들어진 컨텍스트로 접근 가능
2. arguments 객체 생성
앞에서 만들어진 활성 객체는 arguments의 프로퍼티로 arguments객체를 참조한다.
3. 스코프 정보 생성
현재 컨덱스트의 유효 범위를 나타내는 스코프 정보 생성.
현재 실행 중인 실행 컨텍스트 안에서 연결 리스트와 유사한 형식으로 만들어짐
이 리스트를 스코프 체인이라고 하는데 scope프로퍼티로 참조됨
4. 변수 생성
현재 실행중인 컨텍스트 내부에서 지역 변수의 생성이 이루어짐
이 과정에서는 변수나 내부 한수를 단지 메모리에 생성만 함
초기화는 각 변수나 함수에 해당하는 표현식이 실행되기 전까지는 이루어지지 않음
5. this 바인딩
this가 참조하는 객체가 없으면 전역객체를 참조
6. 코드 실행
표현식 실행이 이루어짐
*/