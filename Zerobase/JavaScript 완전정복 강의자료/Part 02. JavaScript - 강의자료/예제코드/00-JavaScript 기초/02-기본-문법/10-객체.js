/**
 * 객체
 */

// 나라는 사람을 프로그래밍 언어로 표현한다면?
const hyeonSeok = {
	// key(property), 속성 : value
	name: {
		first: 'jang',
		last: 'hyeon-seok',
	},
	age: 10,
	gender: 'male',
	introduce: function () {
		return 'hello my name is hyeonseok';
	},
	hobby: ['youtube', 'football'],
};

console.log(hyeonSeok.['name']['first']);
console.log(hyeonSeok.name.last);
console.log(hyeonSeok.age);
console.log(hyeonSeok.introduce());
