interface PersonType { 
    name: string
}
//내가 이렇게 지금 타입을 지정해주는 인터페이스를 만들어본 적이 없어서 생소해서 물어보는건데
// 이게 타입 지정하는게, 

/*
 interface '타입이름' {
   '사용할 키1': '들어올 value 타입'
   '사용할 키2': '들어올 value 타입'
   '사용할 키3': '들어올 value 타입'
}
    이런식으로 하는거야? --맞아요, 일단 interface는 뭐랄까... JSON의 모양새를 잡아주는 용도라고 보시는게 맞습니다.
    C#처럼 Class 안에 변수 타입/모양새 잡아줄 떄도 interface로 잡아줄 수 있고요
    현대 자바스크립트도 class가 있어서 쓸 수 있지만 문제는 아시다시피 type때문에 오류가 날 가능성이 높아서
    typescript의 class를 쓰면 C#처럼 생긴 class를 쓸 수 있습니다. 지금 이거 notion에 올리려고 ㅋㅋ (기록은 언제나 중요합니다 ㅋㅋ)
    https://neon-supply-e30.notion.site/Type-script-type-interface-e8e92053993e42f78fe07cc8139928a8
*/ 

//나 인터페이스 잘 모르겠나봐 extends가 왜 필요한거야? 아 오키오

interface ManType extends PersonType {
    // name: string (from PersonType)
    wife?: WomanType // 값 안 넣어주면 알아서 null
}
interface WomanType extends PersonType{
    // name: string (from PersonType)
    husband?: ManType // 값 안 넣어주면 알아서 null
}
interface FamilyType {
    father: ManType
    mother: WomanType
}
//Type만 넣었고 코드는 안 바뀐걸 볼 수 있죠
//이 상태에서 man이나 woman에 없는 변수 이름으로 뭘 넣으려고 하면 error가 나오는데요. 예를 들어
//man 변수의 type을 PersonType으로 바꾸면 아마 빨간불 나올거에요
// 이해하는데 좀 시간걸리네 ㅇㅅㅇ
//오류 왜안나?
//기본 Typescript 설정이 Type을 안 써 놓으면 JSON으로 판단해서 그러건데 보통은 설정 할 때 Type 안 적으면 오류나게 되어 있어요
// JSON은 JS꺼라서 Typescript가 어찌 할 수가 없거든요
// 아 맞다 오키오키 맞아맞아 아 글쿠나 이해했다
//하 그니까 이게 지금 명시를 안해놓았는데 쓰려고 하니까 문제생기는거구나 맞지. 갑자기 생성해서 만들려고하니까

//보통은 Typescript 설정을 매 프로젝트마다 다르게 할 수 있는데 
// 기본값은 Type을 안 적으면 Javascript Type을 따라가지만, 이건 문제가 나중에 생길 수 있어서 대부분 사람들이 빨간줄이 표시되도록 Typescript 설정을 바꿉니다.

function marry(man: ManType, woman: WomanType): FamilyType {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });