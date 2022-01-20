/**
 * 배열 순회
 */

const arr = [1, 2, 3];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

let i = 0;

if (0 < arr.length) {
	console.log(arr[i]);
	i++;
}

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

let j = 0;

while (j < arr.length) {
	console.log(arr[j]);
	j = j + 1;
}

for (const value of arr) {
	console.log(value);
}

for (const index in arr) {
	console.log(arr[index]);
}
