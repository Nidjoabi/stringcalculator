describe('String Calculator', function() {
	let calculator;

	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	it('should return the number itself for a single number', function() {
		expect(calculator.add('1')).toEqual(1);
	});

	it('should return the sum of two numbers', function() {
		expect(calculator.add('1,2')).toEqual(3);
		expect(calculator.add('1,27')).toEqual(28);
	});

	it('should return the sum of three numbers', function() {
		expect(calculator.add('15,17,21')).toEqual(53);
	});

	it('should return the sum of multiple numbers', function() {
		expect(calculator.add('1,5,27,45')).toEqual(78);
		expect(calculator.add('1,10,100,1000,10000')).toEqual(11111);
	});

	it('should ignore non-numeric values', function() {
		expect(calculator.add('A,10')).toEqual(10);
		expect(calculator.add('abc,5,xyz,15')).toEqual(20);
	});
});
