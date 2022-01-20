// 함수 선언문
function func(param1, param2) {
	return param1 + param2;
}

function func() {
	return 'param1 + param2;';
}

// 기명 함수 표현식
const func = function func() {
	return 'func';
};

// 익명 함수 표현식
const func = function func() {
	return 'func';
};

console.log(func());
