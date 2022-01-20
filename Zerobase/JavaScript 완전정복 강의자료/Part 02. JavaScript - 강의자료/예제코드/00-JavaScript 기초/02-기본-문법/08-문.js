/**
 * 문
 */
if (10 > 1) {
	return '10은 1보다 크다';
} else if (10 === 10) {
	return '';
} else {
	return '';
}

const array = [1, 2, 3];

// 초기화; 평가(참 => 실행, 거짓 => 다음으로); 매번 실행되는 평가식;
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);

if (array.length === 3) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 1) {
			console.log(array[i]);
		}
	}
}
