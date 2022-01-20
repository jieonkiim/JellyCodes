/**
 * 문
 */

// 제어문에서 바디 (몸통) <= 로직(명령)

for (반복 조건 초기화) {
  if (기상 상태는 비가 온다) {
    // 우산을 쓴다
    if (기상 상태는 비가 많이 온다) {
      // 큰 우산을 쓴다.
    } else if (기상 상태는 비가 조금 온다) {
      // 작은 우산을 쓴다.
    }
  }
}

switch (기상상태) {
  case 비가온다:
  case 비가 많이 온다:
    
    break;
  case 비가 조금 온다:
    
    break;

  default:
    break;
}


let i = 0;
const MAX = 10;

// i => 0! / i => 1! / i=> 2! .....
while (i < MAX) { 
  i ++;

  if (i % 2 === 0) {
    continue
  }

  console.log(i);
}