/**
 * instanceof
 *
 * 객체의 인스턴스가 어떤 생성자로부터 생성된 것인지 판별
 * {} instanceof Object
 */
const obj = {};
const arr = [];
const func = function () {};

obj instanceof Object;
arr instanceof Object;
func instanceof Object;
new Date() instanceof Object;
