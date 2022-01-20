function genHello(name) {
	const resultName = name ? name : '이름없음';
	const resultName2 = name || '이름없음';

	return (
		'안녕하세요 ' + resultName + '님 반갑습니다'
	);
}

genHello('Jang');
