function call1(name) {
    setImmediate(function() {
        console.log("사용자는 " + name);
    }, 0000); // 로그인 하는 시간 예시로 3초 설정
}

function call() {
    setTimeout(function() {
        console.log("시작은 call");
        back();
    }, 2000);
}
function back() {
    setTimeout(function() {
        console.log("두번째는 back" );
        hell();
    }, 1000);
}
function hell() {
    setTimeout(function() {
        console.log("세번째는 hell" );
    }, 0500);
}

call1('kim');

call();



function call(name) {
    console.log("사용자는 " + name);
    return "call";
}
function back() {
    return "back";
}
function hell() {
    return "hell";
}

let a = call('kim');
console.log( "시작은 " + a);
let b = back();
console.log( "두번째는 " + b );
let c = hell();
console.log( "세번째는 " + c);