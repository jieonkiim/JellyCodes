/**
 * Truthy (참 같은 값)
 */
if (true) {
	console.log('참 입니다');
}

if ({}) {
	console.log('참 입니다');
}

if ([]) {
	console.log('참 입니다');
}

if (42) {
	console.log('참 입니다');
}

if ('0') {
	console.log('참 입니다');
}

if ('false') {
	console.log('참 입니다');
}

if (new Date()) {
	console.log('참 입니다');
}

if (-42) {
	console.log('참 입니다');
}

if (12n) {
	console.log('참 입니다');
}

if (3.14) {
	console.log('참 입니다');
}

if (-3.14) {
	console.log('참 입니다');
}

if (Boolean(Infinity)) {
	console.log('참 입니다');
}

if (!!-Infinity) {
	console.log('참 입니다');
}

console.log([] && 'Hello');
