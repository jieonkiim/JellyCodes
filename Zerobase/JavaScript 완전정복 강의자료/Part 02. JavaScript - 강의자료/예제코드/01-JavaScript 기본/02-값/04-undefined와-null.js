let variable; // 선언
variable = 'string value'; // 할당

const initValue = '초기화된 변수'; // 선언과 동시에 할당
const nullValue = null; // null을 지정 (빈값임을 명시적으로 지정)

console.log(!undefined === !null);
console.log(!!null === !!undefined);

console.log(undefined === null);
console.log(!null === !undefined);

console.log(Number(undefined));
console.log(Number(null));
