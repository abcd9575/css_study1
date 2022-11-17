// 1. 정수
// 2. 배열
// 3. 객체
// 4. 문자열
// 5. 함수

//함수 정의 
var func4 = function() {
    console.log('hello');
    return 100;
}

function func5() {
    console.log('hello');
    return 100;
}

// 일회용함수(익명함수) 2가지 1가지 또있나 모르겠다

() => { // 화살표함수
    console.log('hello');
    return 100;
}

// function() { // 익명함수
//     console.log('hello');
//     return 100;
// }

//함수 호출

// 함수명();



//전역변수 


//내부변수 
var var1 = function(){
    console.log("1");
    return 100;
}
var result = var1();
// func1 정의
function func1(value, call){ // value = 호출한곳의 값 즉 'a' => value = 'a' // call = function() { console.log("1");}
    console.log( value );
    call();
}

//a는 value안에, 익명함수 형태로 call에 들어감 익명함수 = 일회용 함수
func1('a', function(){
    console.log("1");
})

function func2(){
     console.log("2");
}
func1(func2,func2);

//로그인 실습


// 특정함수가 끝났을 때, 사용하기 위해
// 즉 비동기인 함수들을 순서롤 부여해 사용하기 위해 콜백함수 사용

console.log( "Start");
function login(id /*kim*/ , cb) {  // 이런걸 앞으로 쓸거야 실행은 지금 안해. "약쏙"
    setTimeout(() => {
        console.log('로그인 성공');
        console.log (id + "님 환영해요!");
    }, 2000);
}
//"호출"
// 로그인 성공 시
login('kim', function(id){          // 이걸 지금 실행해.
    console.log( id + "님 환영해요!"); // 이걸 앞으로 쓸거야 실행은 지금 안해.
});
console.log( "finish!" );


// 동기
// 다른언어들 C#

// 비동기
// javascript
