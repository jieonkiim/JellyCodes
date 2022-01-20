/**
 * 연산자
 */

// === 서로 같은지 엄격하게 검사
// !== 서로 다른지 엄격하게 검사
// === 서로 같은지 느슨하게 검사
// !== 서로 다른지 느슨하게 검사

let count = 0;

// 증감, 증가 연산자
count--;
count--;
count--;
count++;
count++;
count++;

console.log(count);

// AND 연산자
var a1 = true && true; // t && t returns true
var a2 = true && false; // t && f returns false
var a3 = false && true; // f && t returns false
var a4 = false && 3 == 4; // f && f returns false
var a5 = "Cat" && "Dog"; // t && t returns Dog
var a6 = false && "Cat"; // f && t returns false
var a7 = "Cat" && false; // t && f returns false

// OR 연산자
var o1 = true || true; // t || t returns true
var o2 = false || true; // f || t returns true
var o3 = true || false; // t || f returns true
var o4 = false || 3 == 4; // f || f returns false
var o5 = "Cat" || "Dog"; // t || t returns Cat
var o6 = false || "Cat"; // f || t returns Cat
var o7 = "Cat" || false; // t || f returns Cat

// NOT 연산자
var n1 = !true; // !t returns false
var n2 = !false; // !f returns true
var n3 = !"Cat"; // !t returns false

// 삼항 연산자
const temp = 1 === "1" ? "참일때" : "거짓일때";

let temp2;

if (1 === "1") {
	temp2 = "참일때";
} else {
	temp2 = "거짓일때";
}
