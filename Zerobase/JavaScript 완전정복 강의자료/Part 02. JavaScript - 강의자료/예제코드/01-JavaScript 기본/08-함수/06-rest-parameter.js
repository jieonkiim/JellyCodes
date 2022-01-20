function func(first, second, ...nums) {
	console.log(first);
	console.log(second);
	console.log(Array.isArray(nums));

	return nums.reduce((prev, curr) => prev + curr);
}

func(1, 2, 3, 4);
