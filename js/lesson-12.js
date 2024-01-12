'use strict';

const arr = ['a', 'b', 'c'];
const arrObj = {
	0: 'a',
	1: 'b',
	2: 'c',
};

// arrObj.b = '1234';
arrObj['b'] = '1234';

console.log(arrObj['b']);
console.log(arrObj.b);

const obj = {
	Anna: 400, 
	Nick: 800,
};


