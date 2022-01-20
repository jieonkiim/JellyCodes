function func(p1, p2, p3, p4) {
	console.log(p2, p4);

	console.log(p1);
}

func(undefined, 'p2', undefined, 'p4');

function func2(objP) {
	const p1 = objP.p1;
	const p2 = objP.p2;
	const p3 = objP.p3;
	const p4 = objP.p4;
}

func2({ p2: 'P2', p4: 'P4' });
