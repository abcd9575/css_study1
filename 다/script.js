function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
// document.getElementById('startBtn');
// document.getElementById('stageNum');
// document.getElementsByClassName('btnArea');
// addEventListener('click', function(e){}, false)

function getRandomInt(min, max) { //1에서 9까지의 정수를 생성해주는 랜덤함수
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

async function blink(box, delay=370) {
  const btn = document.getElementById(box);
  btn.style.backgroundColor = 'black';
  await sleep(delay);
  btn.style.backgroundColor = 'white';
}

async function counter() {
  const midBtn = document.getElementById('5');
  for(let i=4; i>0; i--){       // 3  2  1  start
    midBtn.innerText = i-1;
    if(i==1)
      midBtn.innerText = '';
    await sleep(300);
  }
}

async function start() {
  const btn = document.getElementById('startBtn');
  btn.style.display = 'none';  // 화면에 없애기
  //btn.style.display = 'block'; // 화면에 보이기

  counter();  //3 2 1 start
  let round = 1
  let answer = await exam(round);
  if(await solve(answer,round) === false)          // 문제 맞추기
    
  // else
    round++;
  
  // btn.innerText = '';  // 안에 텍스트 변경하는법
  // btn.style.border = '0px'; // 안에 스타일 변경하는 법
  // btn.style.cursor = 'defalut'; // 마우스오버때 마우스 스타일 변경하는 법
  //btn.style.border='0px'
  //addEventListener('click', function(e){}, false)
}


async function exam(round) {  // 문제 출제하는 함수
  const answer = [];
  for (let i = 0; i < round; i++) {
    const randomNum = await getRandomInt(1,10);
    await blink(randomNum);
    console.log(randomNum);
    await answer.push(randomNum);
  }
//console.log(answer)
  return answer;
}

async function solve(answer,round){   //문제 푸는 함수
  let testSheet = [];

  for(i=1; i<10; i++) {       // 입력대기
    const btn = document.getElementById(i.toString());
    btn.addEventListener('click', async(e) => {
      await blink(i,130);
      testSheet.push(i);
    })
  }
  while(answer.length <= testSheet.length)
    await sleep(500);

  for (let i = 0; i < round; i++) 
    if(answer[i] !== testSheet[i])
      return false
  
  return true


  // for (const key in answer) {
  //   //입력 받아
  //   if(testSheet.length === answer.length)
  //     return true
  //   // 입력값이 key랑 맞아?
  //   if(key == )
  //     return false;
    
  // }
  //let quiz = answer.pop;

}

/*
뭐해야되냐
1. 게임스타트 버튼클릭 이벤트
start()
exam()계속돌아야돼. 언제까지? 디질때까지 while문으로 반복시켜

2. 게임 라운드마다 문제 제출
3. 정답입력하기
*/

