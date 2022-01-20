/**
 * Falsy
 */

const emptyString = '';

if (emptyString === '') {
	console.log('문자열이 비어있음');
}

if (!emptyString.length) {
	console.log('문자열이 비어있음');
}

if (!emptyString) {
	console.log('문자열이 비어있음');
}

const isString = 'isString';

if (isString) {
} else {
	console.log('문자열이 비어있음');
}

if (false) {
} else {
	// 실행
}
if (null) {
} else {
	// 실행
}
if (undefined) {
} else {
	// 실행
}
if (0) {
} else {
	// 실행
}
if (-0) {
} else {
	// 실행
}
if (0n) {
} else {
	// 실행
}
if (NaN) {
} else {
	// 실행
}
if ('') {
} else {
	// 실행
}
