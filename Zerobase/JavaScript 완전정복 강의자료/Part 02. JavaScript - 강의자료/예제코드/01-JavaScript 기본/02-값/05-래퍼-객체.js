/**
 * 원시값의 래퍼 객채
 */
const bool = false;
const num = 123;
const str = 'string';

const bool2 = new Boolean(false);
const num2 = new Number(123);
const str2 = new String('string');

console.log(typeof bool);
console.log(typeof bool2);
console.log(bool2 instanceof Boolean);
console.log('string' instanceof String);
console.log(str2 instanceof String);

const obj = {
	name: 'jang',
	greeting: function () {
		return 'hello' + this.name;
	},
};

console.log(obj.greeting());
console.log(str.toUpperCase());

str.toUpperCase = function () {
	return 'STRING!!!';
};

console.log(str.toUpperCase());
