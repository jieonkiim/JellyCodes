/**
 * - Logical Operator (논리 연산자)
 *
 * OR - || (또는)
 * AND - && (그리고)
 * NOT - ! (부정)
 */

console.log(true || false || false);
console.log(false && true && true);
console.log(false && false);

const age = 20;
const genderType = 'GIRL';

const isAdult = age > 19;
const isGirl = genderType === 'GIRL';

if (isAdult === false) {
	console.log('나는 성인이 아니다');
}

if (isAdult && isGirl) {
	console.log('나는 성인이다!');
}

if (!isAdult || isGirl) {
	console.log('나는 여학생이다');
}

function getName(firstName, lastName) {
	const fName = firstName || '성 없음';
	const lName = lastName || '이름 없음';

	console.log(!!undefined || !!'이름 없음');

	return '저는 ' + fName + ' ' + lName + '입니다';
}

console.log(getName('장'));
