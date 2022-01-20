function func() {
	const convertArr = Array.from(arguments);

	return convertArr.reduce(
		(prev, curr) => prev + curr,
	);
}

func(1, 2, 3, 4);
