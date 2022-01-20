// 문자열 값 (원시 값)
var str = 'word';
str.toUpperCase();

/**
 * typeof
 */

const un = undefined;
const nu = null;
const bool = false;
const num = 0;
const str2 = '문자열';

console.log(typeof un);
console.log(typeof nu);
console.log(typeof bool);
console.log(typeof num);
console.log(typeof str2);

// =========================================================
// 원시 값이 아닌 데이터 타입은 레퍼런스, 객체 타입을 의미

/**
 * 객체
 */
const obj = {
	name: 'jang',
};

/**
 * 배열
 */
const arr = ['jang'];

/**
 * 함수
 */
function func() {
	return 'jang';
}

console.log(typeof obj);
console.log(typeof arr);
console.log(typeof func);

// =========================================================

/**
 * 원시 값 비교
 *
 * 동등 연산자를 사용할때
 * 엄격한 비교 => ===
 * 느슨한 비교 => ==
 */

if (num === 0) {
	console.log('num은 0입니다');
} else {
	console.log('num은 0이 아닙니다');
}
