function func() {
	'use strict';

	globalVal = 10;
	console.log(this);

	return 'hello';
}

func();
