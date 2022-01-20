parseInt(undefined, '필수');
parseInt('10', '필수');
Number('10');

function parseInt2(value, radix) {
	if (radix === undefined) {
		return Number(value);
	}

	return; // some code
}
