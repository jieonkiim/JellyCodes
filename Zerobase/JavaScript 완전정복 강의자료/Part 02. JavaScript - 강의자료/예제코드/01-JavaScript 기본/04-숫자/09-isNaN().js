/**
 * Not a Number 판별
 * 숫자로 읽어낼 수 없다.
 * 잘못된 계산 결과식
 * 정의할 수 없는 결과식
 * 문자열이 포함된 계산식 (덧셈 제외)
 */

// 느슨하게 검사
isNaN(undefined);
isNaN({});
isNaN('문자열');

// 엄격하게 검사
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN('문자열');
