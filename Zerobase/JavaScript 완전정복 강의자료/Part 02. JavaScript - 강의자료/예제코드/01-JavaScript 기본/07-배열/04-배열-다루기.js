const squidMembers = [
	'기훈',
	'상우',
	'일남',
	'준호',
	'새벽',
	'알리',
];

// 배열의 끝에 요소 추가
squidMembers.push('덕수');

// 배열의 앞에 요소 추가
squidMembers.unshift('미녀');

// 배열에서 요소의 인덱스 찾기
squidMembers.indexOf('현석');
squidMembers.indexOf('상우');
squidMembers.lastIndexOf('상우');

// 배열의 요소 포함 여부 확인
squidMembers.includes('상우');
squidMembers.includes('현석');

// 배열의 앞 요소 지우기
squidMembers.shift('미녀'); // unshift 반대

// 배열의 끝 요소 지우기
squidMembers.pop('덕수'); // push 반대

// 특정 인덱스 요소 지우기
squidMembers.splice(
	2,
	//n
);
