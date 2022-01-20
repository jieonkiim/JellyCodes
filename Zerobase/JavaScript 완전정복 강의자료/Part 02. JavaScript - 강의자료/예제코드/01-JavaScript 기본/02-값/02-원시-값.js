/**
 * 원시 값 (Primitive)
 */

typeof undefined;
typeof true;
typeof 'string';
typeof 123;
typeof 9007199254740992n;
typeof Symbol();
typeof null;

let test = 'string';

test.toUpperCase();
console.log('string'.toUpperCase());

console.log(test);

const bool = false;
!bool;

console.log(bool);

let bool2 = false;
bool2 = !bool2;

console.log(bool2);
