/**
 * 유사 배열 객체(Array Like Object)
 */

function func() {
	console.log(arguments);
	console.log(Array.isArray(arguments));
	console.log([1, 2].__proto__);
}

const nodeList = document.querySelector('li');
nodeList.push('li');

const fakeNodeList = ['li', 'li', 'li'];

fakeNodeList.push('li');

Array.isArray(nodeList);
Array.isArray(fakeNodeList);

const convertNodeList = Array.from(nodeList);
convertNodeList.push('oh!');
