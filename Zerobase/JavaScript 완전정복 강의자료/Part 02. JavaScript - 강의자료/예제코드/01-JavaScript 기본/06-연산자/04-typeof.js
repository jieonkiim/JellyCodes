/**
 * typeof
 *
 * primitive => string, number, bigint, boolean, undefined, symbol, null
 */

const str = 'string';
const func = function () {};

typeof str;
typeof 123;
typeof 1n;
typeof true;
typeof Symbol();
typeof undefined;
typeof func;
typeof [];
typeof {};
typeof null;
typeof new Boolean(true);
