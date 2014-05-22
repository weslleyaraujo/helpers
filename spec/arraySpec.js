describe('Array', function () {

	beforeEach(function() {
		this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	});

	describe('shufle', function () {
		it('shuffle an array', function () {
			// given
			var random = 0.8737654304131866;
			spyOn(Math, 'random').and.returnValue(random);

			// when 
			this.array.shuffle();

			// then
			expect(this.array).toEqual([1,2,3,4,5,6,10,7,8,9])
		});
	});

});
